## [CONCTL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CONCTL.xhtml) - Parameter SWLDPRM override for CFAST, CSEAM, and CWELD Connector Elements

This entry provides local connector search algorithm control to override SWLDPRM values.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONCTL  SET3ID          PARAM1  VALUE1  PARAM2  VALUE2  PARAM3  VALUE3  +       
+       PARAM4  VALUE5  PARAM4  VALUE5  -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONCTL  75              PROJTOL 0.2     PRTSW   1       GSMOVE  3       +       
+       NREDIA  2                                                               
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONCTL  83              MOVGAB  1                                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SET3ID    │ The ID of a SET3 entry using (DES= ELEM) to identify a group of connector elements. (Integer>0)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PARAMi    │ Name of the connector parameter. Allowable names are listed in Table 8-62 of SWLDPRM.  (Character) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALUEi    │ Value of the parameter. See Table 8-62 of SWLDPRM (Real or Integer)                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Multiple CONCTL entries are allowed and ALL appearing will be used. If the user supplies a PARAMi, VALUEi that refers to specific Element on one CONCTL entry and a same PARAMi with VALUEj that refers to the same specific Element on another CONCTL, a fatal message will be issued.
2. For a given connector element ID, this entry will override the global default set by the SWLDPRM entry.
3. The parameter CHKRUN can only be set on SWLDPARM and will be ignored on CONCTL entries.
4. A user fatal will be issued if DES on the SET3 entry is not "ELEM".
