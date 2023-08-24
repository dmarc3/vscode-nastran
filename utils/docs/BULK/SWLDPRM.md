## [SWLDPRM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SWLDPRM.xhtml) - Parameters for CFAST, CWELD, and CSEAM Connector Elements

Overrides default values of parameters for CFAST, CWELD, and CSEAM connectivity search.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    PARAM4  VAL4    +       
+       PARAM5  VAL5    -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM GSPROJ  15.0    GSMOVE  2       PRTSW   1                               
```

#### Alternate Format and Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM PARAM1  VAL1    PARAM2  VAL2    etc.    CFAST   PARAM1  VAL1    +       
+       PARAM2  VAL2    etc.    CWELD   PARAM1  VAL1    PARAM2  VAL2    +       
+       etc.    CSEAM   PARAM1  VAL1    PARAM2  VAL2    etc.                    
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM CHKRUN  2                                                       +       
+       CWELD   GSMOVE  2       PROJTOL .04     PRTSW   1       CSEAM   +       
+       PROJTOL 0.06    GMCHK   1                                               
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM CHKRUN  2                                                       +       
+       CWELD   GSMOVE  2       PROJTOL .04     PRTSW   1               +       
+       CSEAM   PROJTOL 0.06    GMCHK   1                                       
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PARAMi       │ Name of the connector parameter. Allowable names are listed in Table 0-31. (Real or Integer)       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALi         │ Value of the parameter. See Table 0-31 (Real or Integer)                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CFAST,       │ Keywords to control element type specific parameters. Any parameter following a keyword is applied │
│ CWELD, CSEAM │ only to that element type. See Remarks 2 and 3. (Character)                                        │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

        See link for table.
