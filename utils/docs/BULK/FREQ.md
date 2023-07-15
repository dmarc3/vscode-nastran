## [FREQ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FREQ.xhtml) - Frequency List

Defines a set of frequencies to be used in the solution of frequency response problems.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ    SID     F1      F2      F3      F4      F5      F6      F7              
        F8      F9      F10     -etc.-                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ    3       2.98    3.05    17.9    21.3    25.6    28.8    31.2            
        29.2    22.4    19.3                                                    
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                         │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                       │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ Fi        │ Frequency value in units of cycles per unit time.  (Real > 0.0) │
└───────────┴─────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Frequency sets must be selected with the Case Control command FREQUENCY = SID.

2. All FREQi entries with the same frequency set identification numbers will be used.  Duplicate frequencies will   be ignored.  ![bulkfgil03724.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03724.jpg?_LANG=enus)  and  ![bulkfgil03726.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03726.jpg?_LANG=enus)  are considered duplicated if

     ![bulkfgil03728.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03728.jpg?_LANG=enus) ,

     where DFREQ is a user parameter, with a default of  ![bulkfgil03730.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03730.jpg?_LANG=enus) .   ![bulkfgil03732.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03732.jpg?_LANG=enus)  and  ![bulkfgil03734.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03734.jpg?_LANG=enus)  are the maximum and minimum excitation frequencies of the combined FREQi entries.

3. In modal analysis, solutions for modal DOFs from rigid body modes at zero excitation frequencies may be discarded.  Solutions for nonzero modes are retained.

4. If Modules are present then this entry may only be specified in the main Bulk Data section.

