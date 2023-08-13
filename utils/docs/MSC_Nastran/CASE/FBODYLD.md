## [FBODYLD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FBODYLD.Case.xhtml) - Free Body Load Output Request

Selects a set of submodels for which free body loads are to be produced and stored.

#### Format:

![casecontrol4a00980.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00980.jpg?_LANG=enus)  

#### Examples:

```nastran
FBODYLD=ALL 
FOBDYLD(100)=WINGLD 
FBODYLD(200)=WINGLD,TAILLD
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ LID       │ Optional user-defined load ID. If LID is not supplied, the subcase ID is used to define this │
│           │ value.                                                                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Loads will be produced for all FBODYLD Bulk Data entries.                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ namei     │ Name of an FBODYLD Bulk Data entry that defines the submodel to be used for the load.        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. It is recommended, but not required, that the LID be unique across subcases.
2. A separate load is created for each name i .
3. The name list supplies one or more names separated by comma or blank.
4. Each load is stored individually as a one column matrix that is qualified by LID, name i , submodel name, loadcase label, and submodel label (where submodel name is the name on the FBODYSB Bulk Data entry, loadcase label is the label on the FBODYLD Bulk Data entry, and submodel is the label on the FBODYSB Bulk Data entry).
