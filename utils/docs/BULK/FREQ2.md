## [FREQ2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FREQ2.xhtml) - Frequency List, Alternate Form 2

Defines a set of frequencies to be used in the solution of frequency response problems by specification of a starting frequency, final frequency, and the number of logarithmic increments desired.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ2   SID     F1      F2      NF                                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ2   6       1.0     8.0     6                                               
```
```text
┌───────────┬──────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                      │
├───────────┼──────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                    │
├───────────┼──────────────────────────────────────────────────────────────┤
│ F1        │ First frequency.  (Real > 0.0)                               │
├───────────┼──────────────────────────────────────────────────────────────┤
│ F2        │ Last frequency.  (Real > 0.0, F2 > F1)                       │
├───────────┼──────────────────────────────────────────────────────────────┤
│ NF        │ Number of logarithmic intervals.  (Integer > 0; Default = 1) │
└───────────┴──────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. FREQ2 entries must be selected with the Case Control command FREQUENCY = SID.

2. The units for F1 and F2 are cycles per unit time.

3. The frequencies defined by this entry are given by

     ![bulkfgil03750.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03750.jpg?_LANG=enus)  

     where  ![bulkfgil03752.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03752.jpg?_LANG=enus)  and  ![bulkfgil03754.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03754.jpg?_LANG=enus)

     In the example above, the list of frequencies will be 1.0, 1.4142, 2.0, 2.8284, 4.0, 5.6569 and 8.0 cycles per unit time.

4. All FREQi entries with the same frequency set identification numbers will be used.  Duplicate frequencies will   be ignored.  ![bulkfgil03756.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03756.jpg?_LANG=enus)  and  ![bulkfgil03758.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03758.jpg?_LANG=enus)  are considered duplicated if

     ![bulkfgil03760.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03760.jpg?_LANG=enus) ,

     where DFREQ is a user parameter, with a default of  ![bulkfgil03762.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03762.jpg?_LANG=enus) .   ![bulkfgil03764.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03764.jpg?_LANG=enus)  and  ![bulkfgil03766.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03766.jpg?_LANG=enus)  are the maximum and minimum excitation frequencies of the combined FREQi entries.

5. In modal analysis, solutions for modal DOFs from rigid body modes at zero excitation frequencies may be discarded. Solutions for nonzero modes are retained.

6. If Modules are present then this entry may only be specified in the main Bulk Data section.

