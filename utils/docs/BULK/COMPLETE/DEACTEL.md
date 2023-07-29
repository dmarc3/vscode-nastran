## [DEACTEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DEACTEL.xhtml) - Elements To Be Deactivated for SOL 400 Analysis

This entry identifies the elements that do not participate in the analysis or do not participate in a particular physics pass of a coupled analysis. SOL 400 for NLSTATIC, and NLTRAN, as well Perturbation analyses only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEACTEL ID                              ISET                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEACTEL 2                               200                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ ID of the DEACTEL entry. This is referenced by a DEACTEL=ID Case Control command. (Integer; no │
│           │ Default)                                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ISET      │ SID of a list of elements defined by a SET3 entry. (Integer; no Default)                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DEACTEL can only be referenced before the first subcase and/or inside the first subcase and/or inside the first step of the first subcase and/or inside each substep of the first step of the first subcase. References that are made anywhere else are currently ignored. It is referenced by the Case Control command DEACTEL=ID.
2. The description field (DES) of the SET3 entry referenced by ISET can only be of type ELEM.
3. Element IDs in the list originating from some set that do not exist are ignored.
