## [COUOPT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COUOPT.xhtml) - Coupling Surface Pressure Definition

Defines the interaction factor and a pressure load from the covered side acting on a BSURF, BCPROP, BCMATL, BCSEG, BCBOX. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUOPT  CID     OPTID   SUBID   FACTOR  FACTORV                         +       
+       PLCOVER PLCOVERV                                                        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUOPT  1       80      42      CONSTANT                                +        
+       CONSTANT1.E5                                                            
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CID       │ Unique number of a COUOPT entry. (Integer > 0;    │                                                   │
│           │ Required)                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ OPTID     │ Number of a set of COUOPT entries. OPTID must be  │                                                   │
│           │ referenced from a COUPLE entry. (Integer > 0;     │                                                   │
│           │ Required)                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SUBID     │ > 0                                               │ Number of a BSURF, BCBOX, BCPROP, BCMATL or       │
│           │                                                   │ BCSEG, which must be part of the surface as       │
│           │                                                   │ defined in the COUPLE entry. (Integer > 0, 0)     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ = 0                                               │ COUOPT definitions used for the entire surface as │
│           │                                                   │ defined in the COUPLE entry.                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FACTOR    │ Method of defining the interaction FACTORV with   │                                                   │
│           │ which the Eulerian pressure acting on the surface │                                                   │
│           │ is multiplied. (Character, CONSTANT)              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ The FACTOR is constant and specified in FACTORV   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FACTORV   │ The interaction factor. (Real, 1.)                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PLCOVER   │ Method of defining the pressure load exerted on   │                                                   │
│           │ the faces of the surface from the covered side.   │                                                   │
│           │ The pressure load is applied only when the        │                                                   │
│           │ Eulerian pressure is greater than zero.           │                                                   │
│           │ (Character, CONSTANT)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ The PLCOVER is constant and specified in          │
│           │                                                   │ PLCOVERV.                                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ The PLCOVER varies with time. PLCOVERV is the     │
│           │                                                   │ number of a TABLED1 entry giving the variation of │
│           │                                                   │ the PLCOVER (y-value) with time (x-value).        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PLCOVERV  │ The pressure load or the number of a TABLED1      │                                                   │
│           │ entry depending on the PLCOVER entry. (Real > 0,  │                                                   │
│           │ 0.)                                               │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The effect of specifying an interaction FACTOR is similar to specifying a porosity coefficient on a COUPOR entry. The difference is that in this case the surface still acts as a wall boundary for the Eulerian material.
2. Applying a PLCOVER instead of applying a pressure load on the faces through either a PLOAD, PLOAD4, or DAREA entry gives the following differences:
    - PLCOVER is applied only when there is a balancing Eulerian pressure greater than zero.
    - Possible porosity as defined on a COUPOR entry is taken into account when applying the PLCOVER.
    - With PARAM,PLCOVCUT you can define a cut-off time that is applied to PLCOVER.
3. The covered side of a surface lies on the side where there is no Eulerian material.
