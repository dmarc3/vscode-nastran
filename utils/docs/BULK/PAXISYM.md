## [PAXISYM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAXISYM.xhtml) - Properties of Axisymmetric Line Element - SOL 400

Defines the properties of axisymmetric line elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAXISYM PID     MID             T1      T2      ANAL                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAXISYM 98      17              0.1                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a CAXISYM entry. (Integer > 0)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT1, MAT2, MAT3, MAT8, MATORT, or MATHE entry.  Identification number │
│           │ of a MAT4 or MAT5 for heat transfer. See Remark 3. (Integer > 0)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T1        │ Thickness at G1. (Real > 0)                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T2        │ Thickness at G2.  (Real > 0)                                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAL      │ Analysis type, IS=structural, IH=heat, ISH=structural-heat (CHAR Default=ISH)                     │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PAXISYM identification entries should be unique with respect to all other property entries.
2. For elements with only two grids, only T1 is applicable. For elements with three grids, if T2 is blank or 0.0 then constant thickness is assumed.
3. The MID entry may point to MAT1, MAT2, MAT3, MAT8, MATORT, or MATHE entries for structures and MAT4 or MAT5 entries for heat transfer. The tables below show associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

          See link for tables.

     MID for structure entries must follow the uniqueness rules of the MAT1, MAT2, MAT3, MAT8, MAT9, MATORT, MATHP, MATHE, and MATG entries. MID for heat entries must follow the uniqueness rules of the MAT4 and MAT5 entries.

4. The CAXISYM element uses PLOADX1 for loading.
5. The element does not support composite materials, via PCOMP or PCOMPG.
