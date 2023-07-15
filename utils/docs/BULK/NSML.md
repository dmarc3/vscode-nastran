## [NSML](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NSML.xhtml) - Lumped Non Structural Mass Entry by ID

Defines a set of lumped non structural mass.

#### Format:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML    SID     TYPE    ID      VALUE   ID      VALUE   ID      VALUE           
        ID      VALUE   -etc.-                                                  
```
#### <span></span>

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NSML    3       PSHELL  15      .66                                             
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
│ VALUE     │ A lumped mass value to be distributed. (Real)                                                    │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If TYPE = ELEMENT is used, line element (CBAR, CBEAM, CBEND, CROD, CTUBE, and CONROD) IDs cannot be mixed with Area element (CQUAD4, CQUAD8, CQUADR, CTRIA3, CTRIA6, CTRIAR, CSHEAR, and CRAC2D) IDs.

2. For Area elements the calculation is NSM = VALUE/ ![bulkno06276.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06276.jpg?_LANG=enus)  and for Line elements the calculation is NSM = VALUE/ ![bulkno06278.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06278.jpg?_LANG=enus) .

3. Non structural mass sets must be selected with Case Control command NSM = SID.

4. This entry is not allowed for the CCONEAX element.

5. This entry will cause an equivalent NSM entry to be generated using the computed value for NSM.

6. The ELSUM Case Control command will give a summary of both structural and nonstructural mass by element or property type.

7. Undefined property/element IDs are ignored.

