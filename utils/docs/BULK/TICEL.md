## [TICEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TICEL.xhtml) - Transient Initial Conditions of Elements

Defines the initial values of element variables at the beginning of the analysis. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TICEL   SID     SETID   NAME1   VALUE1  NAME2   VALUE2  -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TICEL   3       40      DENSITY 100.    SIE     1.E5                            
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Integer > 0; Required)                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ SETID     │ Number of a SET1 entry defining the elements to be initialized. (Integer > 0; Required) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMEi     │ Element variable to be initialized. See Remark 5. (Character; Required)                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ VALUEi    │ Value of the variable. (Real; Required)                                                 │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────┘
```
