## [SLDSKIN (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SLDSKIN.Case.xhtml) - PSHELL entries listed on this entry will have MID2-MID4 fields removed

Requests that PSHELL entries listed on this entry, when the THICKNESS  ≤ TOL have their MID2 through MID4 fields removed; thus, converting the elements membrane elements.

#### Format:

![casecontrol4a01352.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01352.jpg?_LANG=enus)  

#### Example:

```nastran
SLDSKIN = 5
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOL       │ For any PSHELL identified on this entry, the MID2 through MID4 fields will be set to blank, only │
│           │ if the T value is ≤ TOL value. (Real ≥ 0.0; Default=1.E-3).                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ ALL PSHELL entries are to have their MID2-MID4 fields removed provided their T value is ≤ TOL    │
│           │ value. (Character).                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ ID of SET3 bulk data entry pointing to a list of properties to have MID2-MID4 removed from their │
│           │ PSHELL entries provided their T value is ≤TOL value. (Integer>0)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Default leave PSHELL entries alone. (Character, Default).                                        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry must be placed above the first Subcase.
2. This entry is primarily for use with solid elements skinned with thin shell structures to recover surface stress under membrane action.
3. Extreme caution should be exercised in the use of this entry.
4. If a SET3 entry is specified that cannot be found the following User Fatal is issued:

```text
 *** USER FATAL MESSAGE 9306 (SLDSKIN)
     SET ID x ON THE SLDSKIN CASE CONTROL COMMAND REFERS TO A NON-EXISTENT SET3 ENTRY
```
