## [TTEMP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TTEMP.xhtml) - Temperature Distribution of Transient Response

Defines a time-dependent temperature distribution for the nonlinear transient analysis in SOL 400.

![bulktuv08129.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08129.jpg?_LANG=enus)  

where  ![bulktuv08131.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08131.jpg?_LANG=enus)  defines a spatial temperature distribution and  ![bulktuv08133.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08133.jpg?_LANG=enus)  a time function.  ![bulktuv08135.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08135.jpg?_LANG=enus)  is the time dependent temperature distribution for use in the nonlinear elements in nonlinear transient analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TTEMP   SID     GROUP_IDTID                                                     
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TTEMP   11      101     31                                                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                            │
├───────────┼────────────────────────────────────────────────────────────────────┤
│ SID       │ Temperature set identification number.  (Integer > 0)              │
├───────────┼────────────────────────────────────────────────────────────────────┤
│ GROUP_ID  │ Temperature group identification number (Integer > 0 or =-1)       │
├───────────┼────────────────────────────────────────────────────────────────────┤
│ TID       │ Identification number of TABLEDi entry that gives .  (Integer > 0) │
└───────────┴────────────────────────────────────────────────────────────────────┘
```
