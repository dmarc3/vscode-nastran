## [FAILJC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FAILJC.xhtml) - Johnson-Cook Failure Model - SOL 700 only

Defines the properties of the Johnson-Cook failure model. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FAILJC  FID     D1      D2      D3      D4      D5      e_plas  TROOM   +
+       TMELT   CP      MTH
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FAILJC  1       .05     3.44    -2.12   0.002   0.16    1.0     297.0           
        1495    450     CONT                                                    
```

```text
┌───────────┬─────────────────────────────────────────────────┬────────────────────────────────┐
│ Describer │ Meaning                                         │                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│ FID       │ Unique failure model number. Referenced from    │                                │
│           │ MATDEUL. (Integer > 0; Required)                │                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│ D1...D5   │ Parameters. See Remark 4. (Real; Default = 0.0) │                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│           │ Reference plastic strain rate. (Real; Default = │                                │
│           │ 1.0)                                            │                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│ TROOM     │ Room temperature. (Real; 0.0)                   │                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│ TMELT     │ Melt temperature. (Real; 1.E+20)                │                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│ CP        │ Heat capacity. (Real; 1.E+20)                   │                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│ MTH       │ Specifies how failure is applied. (Character;   │                                │
│           │ CONT)                                           │                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│           │ CONT                                            │ Continuous failure             │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│           │ DISC                                            │ Discrete failure               │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────┤
│           │ NOFAIL                                          │ Damage is not used for failure │
└───────────┴─────────────────────────────────────────────────┴────────────────────────────────┘
```

#### Remarks:

1. This failure model is only available for Eulerian materials using the multi-material solver with strength.
2. The use of coupling surfaces is not supported.
3. The variable D can be visualized by adding DAMAGE to the Output request for Euler elements.
4. Defines the properties of a failure model where failure is determined by a damage model.  The damage model is given by:

     ![bulkfgil03610.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03610.jpg?_LANG=enus)  

     The summation is performed over all past time increments. The variable D measures the damage; T is the temperature, is the mean stress,   the effective stress and   is the fracture strain. The fracture strain depends on a non-dimensional plastic strain rate  ![bulkfgil03612.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03612.jpg?_LANG=enus) . If D exceeds one it set equal to one. 
 
The damage variable D is transported along with the Eulerian material. 
 
There are two methods to determine when elements fail:

  - Continuous failure: The yield stress is reduced by a factor (1-D). When D exceeds 1 the yield stress equals zero and the element fails.
  - Discrete failure: the element fails when D equals one.

  This failure model applies to high-strain rate deformation of metals. It is less suitable for quasi-static problems.

