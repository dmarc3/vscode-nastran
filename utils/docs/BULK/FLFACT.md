## [FLFACT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FLFACT.xhtml) - Aerodynamic Physical Data

Used to specify density ratios, Mach numbers, reduced frequencies, and velocities for flutter analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLFACT  SID     F1      F2      F3      F4      F5      F6      F7      +       
+       F8      F9      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLFACT  97      .3      .7      3.5                                             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLFACT  SID     F1      “THRU”  FNF     NF      FMID                            
FLFACT  201     .200    THRU    .100    11      .133333                         
```

```text
┌───────────┬─────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                 │
├───────────┼─────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Unique Integer > 0)        │
├───────────┼─────────────────────────────────────────────────────────┤
│ Fi        │ Aerodynamic factor.  (Real)                             │
├───────────┼─────────────────────────────────────────────────────────┤
│ FNF       │ Final aerodynamic factor.  (Real)                       │
├───────────┼─────────────────────────────────────────────────────────┤
│ NF        │ Number of aerodynamic factors.  (Integer > 0)           │
├───────────┼─────────────────────────────────────────────────────────┤
│ FMID      │ Intermediate aerodynamic factors.  See Remark 4. (Real) │
└───────────┴─────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only the factors selected by a FLUTTER entry will be used.
2. Embedded blank fields are not allowed in the first format above.
3. The factors must be specified in the order in which they are to be used within the looping of flutter analysis.
4. ![bulkfgil03648.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03648.jpg?_LANG=enus)  must lie between  ![bulkfgil03650.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03650.jpg?_LANG=enus)  and  ![bulkfgil03652.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03652.jpg?_LANG=enus) ; otherwise,  ![bulkfgil03654.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03654.jpg?_LANG=enus)  will   be set to  ![bulkfgil03656.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03656.jpg?_LANG=enus) .  Then

     ![bulkfgil03658.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03658.jpg?_LANG=enus)  

     where  ![bulkfgil03660.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03660.jpg?_LANG=enus)  = 1, 2, ...,  ![bulkfgil03662.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03662.jpg?_LANG=enus)

     The use of FMID (middle factor selection) allows unequal spacing of the factors.

     ![bulkfgil03664.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03664.jpg?_LANG=enus)  gives equal values to increments of the reciprocal 

     of  ![bulkfgil03666.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03666.jpg?_LANG=enus) .

5. If method = PK and this entry specifies velocities, then the velocities must be non-zero. Input of negative values produces eigenvector results at a velocity equal to the positive value of the input. Input of positive values provide eigenvalues results without eigenvectors.
