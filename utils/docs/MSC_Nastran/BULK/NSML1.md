## [NSML1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NSML1.xhtml) - Alternate Form for NSML Entry

Defines lumped non structural mass entries by VALUE,ID list.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML1   SID     TYPE    VALUE   ID      ID      ID      ID      ID      +       
+       ID      ID      ID      etc.    -                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML1   3       ELEMENT .044    1240    1500                                    
```

#### Alternate Form and Example(s):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML1   SID     TYPE    VALUE   ID      THRU    ID      ID      THRU    +       
+       ID      ID      THRU    ID      ID      THRU    ID      ID      +       
+       THRU    ID      ...                                                     
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML1   15      PSHELL  .067    1240    THRU    1760                            
        2567    THRU    2568    35689   THRU    40998                           
        76      THRU    300                                                     
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML1   SID     TYPE    VALUE   ID      THRU    ID      BY      N       +       
+       ID      THRU    ID      BY      N       ...                             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML1   3       PSHELL  .067    1240    THRU    1760    1763    1764            
        2567    THRU    2568    35689   TO      40999   BY      2               
        76666   76668   79834                                                   
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML1   SID     TYPE    VALUE   ALL                                             
```

(ALL must be in FIELD 5 and no continuation is allowed)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML1   59      PTUBE   .0123   ALL                                             
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
│ VALUE     │ A lumped mass value to be distributed (Real)                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Property or Element ID. (Integer > 0 or “ALL” or “THRU” or “TO” or “BY” or N (the BY increment)) │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If TYPE = ELEMENT is used, line element (CBAR, CBEAM, CBEND, CROD, CTUBE, and CONROD) IDs cannot be mixed with Area element (CQUAD4, CQUAD8, CQUADR, CTRIA3, CTRIA6, CTRIAR, CSHEAR, and CRAC2D) IDs.
2. For Area elements the calculation is NSM = VALUE/ ![bulkno06280.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06280.jpg?_LANG=enus)  and for Line elements the calculation is NSM = VALUE/ ![bulkno06282.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06282.jpg?_LANG=enus) .
3. For NSML1 entries with multiple “THRU” and “THRU,BY” and “ID” lists or any such combination of entries, the NSM = VALUE/ ![bulkno06284.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06284.jpg?_LANG=enus)  and for Line elements the calculation is NSM = VALUE/ ![bulkno06286.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06286.jpg?_LANG=enus)  is based on the individual parent card plus all continuation entries. If an element appears more then once in these multiple combinations, its area or length will be used multiple times in the sun.
4. Nonstructural mass sets must be selected with Case Control command NSM=SID.
5. This entry is not allowed for the CCONEAX element.
6. PBEAML and PBCOMP are treated as PBEAM, PBARL is treated as PBAR, and PCOMP or PCOMPG is treated as PSHELL; therefore a command such as:

     ```nastran
     NSML1,12,PCOMP,1.35,ALL
     ```

     would, for example, get all PSHELLs in the file. The converted PCOMPs or PCOMPGs plus any existing PSHELLS would have a mass of 1.35 added to their nonstructural mass.

7. The ELSUM Case Control command will give a summary of both structural and non structural mass by element or property type.
8. With the "THRU" and "THRU", "BY" forms, blanks fields are allowed for readability. Any combination of a list of IDs and "THRU" and "THRU", "BY" is allowed. The "THRU" and "BY" lists may have missing IDs. That is the list of IDs in a THRU range need not be continuous.
9. Undefined property/element IDs are ignored.

