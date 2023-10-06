## [EULFREG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EULFREG.xhtml) - Body force for Eulerian Regions - SOL700

Defines the acceleration field for sets of Eulerian regions, The Eulerian regions are defined by geometric shapes. For each coordinate direction a time-depended acceleration can be defined.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EULFREG ERID    ESID    TYPE1   VID1    MID1    ACCX    ACCY    ACCZ    +
+       LEVEL                                                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EULFREG 300     1       BOX     400     100     100     200     300             
        0.0                                                                     
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ERID      │ Unique ERID number. (Integer > 0; Required)       │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ESID      │ ID of group of Euler regions referenced from the  │                                                  │
│           │ EULFOR1 entry. (Integer > 0; Required)            │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TYPEi     │ The type of Eulerian region. (Character;          │                                                  │
│           │ Required)                                         │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ SURF                                              │ Region inside or outside a multifaceted surface. │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ SPHERE                                            │ Region inside a sphere.                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ CYLINDER                                          │ Region inside a cylinder.                        │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ BOX                                               │ Region inside a box.                             │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ ELEM                                              │ Region defined by element list.                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ VIDi      │ Number of a geometric entity, a SET1 number, or   │                                                  │
│           │ number of a SURFINI entry. (Integer > 0;          │                                                  │
│           │ Required)                                         │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MIDi      │ Number of a MATDEUL entry to which the            │                                                  │
│           │ acceleration field will be applied.  (Integer >   │                                                  │
│           │ 0; Required)                                      │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ACCi      │ Unique table number that defines the variation of │                                                  │
│           │ acceleration in time. ACCX, ACCY and ACCZ         │                                                  │
│           │ respectively denote the acceleration in the x-,   │                                                  │
│           │ y- and z-direction. (Integer > 0; Re­quired)      │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ LEVELi    │ Level indicator for this material and initial     │                                                  │
│           │ values. (Real; default=0.0)                       │                                                  │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. EULFOR1 and EULFREG are only available for the multi-material Euler solver.
2. The combination of Eulerian region and material ID determines where the acceleration field  is applied.
3. It is allowed to cover only part of the Euler domain with EULFOR1 definitions.
4. All level indicators LEVELi must have different values. The level indicator can be negative.
5. To increase the accuracy of the region definition parameter MICRO can be used.
