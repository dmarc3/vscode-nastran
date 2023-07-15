## [NSM1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NSM1.xhtml) - Alternate Form for NSM Entry

Defines non structural mass entries by VALUE,ID list.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSM1    SID     TYPE    VALUE   ID      ID      ID      ID      ID              
        ID      ID      ID      etc.    -                                       
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSM1    3       ELEMENT .044    1240    1500    THRU    1600    BY              
        2       2440    THRU    2560                                            
```
#### Alternate Form and Example(s), <span>applicable when NASTRAN SYSTEM(444)=0 (IFPSTAR=NO)</span>:

(All must be in FIELD 5 and non continuation is allowed)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSM1    SID     TYPE    VALUE   ID      THRU    ID                              
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSM1    SID     TYPE    VALUE   ALL                                             
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSM1    SID     TYPE    VALUE   ID      THRU    ID      BY      N               
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
│ VALUE     │ NSM value (Real)                                                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Property or Element ID. (Integer > 0 or “ALL” or “THRU” or “BY” or N (the BY increment))         │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Non structural mass sets must be selected with Case Control command NSM = SID.

2. For CCONEAX the element ID is  ![bulkno06272.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06272.jpg?_LANG=enus) , where i = 1 to number of harmonics.

3. PBEAML and PBCOMP are treated as PBEAM, PBARL is treated as PBAR, and PCOMP or PCOMPG is treated as PSHELL; therefore a command such as:

     NSM1,12,PCOMP,0.045,ALL

     would for example get all PSHELLs in the file. The converted PCOMPs or PCOMPGs plus any existing PSHELLS would have .045 added to their nonstructural mass.

4. The ELSUM Case Control command will give a summary of both structural and nonstructural mass by element or property type.

