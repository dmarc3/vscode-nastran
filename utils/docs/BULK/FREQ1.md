## [FREQ1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FREQ1.xhtml) - Frequency List, Alternate Form 1

Defines a set of frequencies to be used in the solution of frequency response problems by specification of a starting frequency, frequency increment, and the number of increments desired.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ1   SID     F1      DF      NDF                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ1   6       2.9     0.5     13                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                    │
├───────────┼────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Integer > 0)                   │
├───────────┼────────────────────────────────────────────────────────────┤
│ F1        │ First frequency in set. (Real > 0.0)                       │
├───────────┼────────────────────────────────────────────────────────────┤
│ DF        │ Frequency increment. (Real > 0.0)                          │
├───────────┼────────────────────────────────────────────────────────────┤
│ NDF       │ Number of frequency increments. (Integer > 0; Default = 1) │
└───────────┴────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. FREQ1 entries must be selected with the Case Control command FREQUENCY = SID.
2. The units for F1 and DF are cycles per unit time.
3. The frequencies defined by this entry are given by

     ![bulkfgil03736.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03736.jpg?_LANG=enus)  

     where i = 1 to (NDF + 1).

4. All FREQi entries with the same frequency set identification numbers will be used.  Duplicate frequencies will   be ignored.  ![bulkfgil03738.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03738.jpg?_LANG=enus)  and  ![bulkfgil03740.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03740.jpg?_LANG=enus)  are considered duplicated if

     ![bulkfgil03742.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03742.jpg?_LANG=enus) ,

     where DFREQ is a user parameter, with a default of  ![bulkfgil03744.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03744.jpg?_LANG=enus) .   ![bulkfgil03746.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03746.jpg?_LANG=enus)  and  ![bulkfgil03748.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03748.jpg?_LANG=enus)  are the maximum and minimum excitation frequencies of the combined FREQi entries.

5. In modal analysis, solutions for modal DOFs from rigid body modes at zero excitation frequencies may be discarded. Solutions for nonzero modes are retained.
6. If Modules are present then this entry may only be specified in the main Bulk Data section.
