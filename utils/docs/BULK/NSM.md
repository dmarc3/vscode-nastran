## [NSM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NSM.xhtml) - Non Structural Mass Entry by ID

Defines a set of non structural mass.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSM     SID     TYPE    ID      VALUE   ID      VALUE   ID      VALUE   +       
+       ID      VALUE   -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSM     3       PSHELL  15      .022                                            
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of non structural mass set.  (Integer > 0)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Set points to either Property entries or Element entries. Properties are: PSHELL, PCOMP, PCOMPG, │
│           │ PBAR, PBARL, PBEAM, PBEAML, PBCOMP, PROD, CONROD, PBEND, PSHEAR, PTUBE, PCONEAX, and PRAC2D.     │
│           │ ELEMENT list of individual element IDs of element that can have NSM. (Character)                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Property or Element ID. (Integer > 0)                                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALUE     │ NSM value (Real)                                                                                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Non structural mass sets must be selected with Case Control command NSM = SID.
2. For CCONEAX the element ID is  ![bulkno06270.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06270.jpg?_LANG=enus) , where i = 1 to number of harmonics.
3. The ELSUM Case Control command will give a summary of both structural and nonstructural mass by element or property type.
