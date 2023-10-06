## [TICVAL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TICVAL.xhtml) - Transient Initial Condition Set

Defines the initial values of an Eulerian geometric region. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TICVAL  TSID    METHOD  NAME1   VALUE1  NAME2   VALUE2  NAME3   VALUE3  +       
+       NAMEi   VALUEi  -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TICVAL  3               DENSITY 100.    YVEL    25.     SIE     3.7     +       
+       XVEL    3.5                                                             
```

```text
┌───────────┬─────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                         │                                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TSID      │ Unique TICVAL number referenced from a TICEUL   │                                                │
│           │ entry. (Integer > 0; Required)                  │                                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ METHOD    │ Type of input definition. (Character; Default = │                                                │
│           │ NORMAL)                                         │                                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ RADIAL                                          │ Initializes material with radial profiles. The │
│           │                                                 │ entries VALUEi are interpreted as TABLED1 IDs. │
│           │                                                 │ See Remarks 2., 3., and 4.                     │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ NORMAL                                          │ Normal initialization.                         │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ NAMEi     │ Variable to be initialized. See TICEL.          │                                                │
│           │ (Character; Required)                           │                                                │
├───────────┼─────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ VALUEi    │ Value of the variable. (Real; Required)         │                                                │
└───────────┴─────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```
