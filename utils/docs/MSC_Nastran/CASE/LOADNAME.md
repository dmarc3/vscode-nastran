## [LOADNAME (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.LOADNAME.Case.xhtml) - Name to be Associated with a SUBCASE in PAA

Provides a name to be associated with a loading condition.

#### Format:

```nastran
LOADNAME = load_name
```

#### Example:

```nastran
LOADNAME = GRAVITY LOAD ON OUTBOARD NACELLEL
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Load_name │ Character string (up to 64 characters long) providing a user-defined name for a loading in PAA. │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. This command is used only in PAA and provides a user-defined name for a loading condition.
2. LOADNAMEs may be used to combine loads in a COMBINE or SOLVE PAA run using a LOADCNAM Bulk Data entry.
3. The LOADNAME command is ignored in non-PAA applications
