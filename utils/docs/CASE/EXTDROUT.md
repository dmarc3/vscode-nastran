## [EXTDROUT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.EXTDROUT.Case.xhtml) - External Superelement Boundary Solution Storage Request.

Requests the job to store external superelement boundary displacements and column labels; e.g., eigenvalues, forcing frequencies, time steps. Also specifies the storage media of the boundary solution data.

#### Format:

EXTDROUT ![casecontrol4a00968.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/assets/casecontrol4a00968.jpg?_LANG=enus)

#### Examples:

```nastran
EXTDROUT
EXTDROUT(DMIGOP2=45)
EXTDROUT(MATOP4 NOCASE)
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGOP2 =    │ Store the boundary solution data in DMIG Bulk Data internal format on an .op2 file whose Fortran  │
│ unitop2      │ unit number is given by unitop2 (Integer > 0, Default=31).                                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATRIXOP4 or │ Store the boundary solution data on an .op4 file whose Fortran unit number is given by unitop4.   │
│ MATOP4 =     │ (Integer ≠ 0, Default=31).   unitop4 is a non-zero integer with the following meanings: unitop4 > │
│ unitop4      │ 0: Store in sparse format unitop4 < 0: Store in non-sparse format on Fortran unit number given by │
│              │ |unitop4                                                                                          │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATRIXDB or  │ Store the boundary solution data in the standard matrix format in the database. Dbext is the name │
│ MATDB =      │ of a new dbset on which to store the boundary data. Dbext must be allocated on an INIT FMS        │
│ dbext        │ statement.                                                                                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIGDB       │ Store the boundary solution data in the DMIG Bulk Data internal format in the database. Dbext is  │
│              │ the name of a new dbset on which to store the boundary data. Dbext must be allocated on an INIT   │
│              │ FMS statement.                                                                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOCASE       │ NOCASE   By default in SOL 400 only, the TITLE/SUBTITLE/LABEL contents are exported along with    │
│              │ boundary data. Specify NOCASE if you do not want these contents to be exported.                   │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. EXTDROUT is intended for step two (or assembly run) in external superelement analysis.
2. EXTDROUT is honored in SOLs 101, 103, 107 through 112, and 400 only.
3. In SOLs 101, 103, and 107 through 112, if there are multiple external superelements and DMIGOP2 or MATOP4 is requested then EXTDROUT must be specified in separate subcases for each external superelement along with the SUPER command and unitop4 or unitop2 must be unique for each external superelement. Separate EXTDROUT commands are not required in SOL 400. See Remarks   and   under the EXTDRIN Case Control command description.
4. User parameters EXTDROUT and EXTDRUNT are the old method for requesting the storage of boundary solution data. EXTDROUT Case Control command takes precedence over the EXTDROUT and EXTDRUNT user parameters.
5. See EXTDRIN’s case control command description for a description of EXTDROUT and EXTDRIN usage.
