## [EXTDRIN (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.EXTDRIN.Case.xhtml) - External Superelement Data Recovery Restart Run Request

Requests the job to perform an external superelement data recovery restart.  Also specifies the storage media of the boundary solution data.

#### Format:

EXTDRIN ![casecontrol4a00966.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00966.jpg?_LANG=enus)

#### Examples:

```nastran
EXTDRIN
EXTDRIN(DMIGOP2=45)
EXTDRIN(MATOP4)
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGOP2 =    │ Retrieve the boundary solution data stored in DMIG Bulk Data internal format on an .op2 file whose │
│ unitop2      │ Fortran unit number is given by unitop2 (Integer > 0, Default=31).                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATRIXOP4 or │ Retrieve the boundary solution data on an .op4 file whose Fortran unit number is given by unitop4. │
│ MATOP4 =     │ (Integer > 0, Default=31).                                                                         │
│ unitop4      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATRIXDB or  │ Retrieve the boundary solution data stored in the standard matrix format from the database.        │
│ MATDB        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGDB       │ Retrieve the boundary solution data stored in the DMIG Bulk Data internal format from the          │
│              │ database.                                                                                          │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
