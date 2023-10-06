## [MONGRP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONGRP.xhtml) - Specification of a Monitor Group

Defines a collection of monitor points into a group available for postprocessing.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONGRP  GNAME   LABEL                                                   +       
+       NAME1   CLASS1  REAL1   INT1    STRING1                         +       
+       NAME2   CLASS2  REAL2   INT2    STRING2                         +       
+       NAME(m) CLASS(m)REAL(m) INT(m)  STRIN...                                
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONGRP  WING    A COLLECTION OF MONITOR POINTS ON THE WING              +
+       WING195 SMONPT1         1       WL195                           +        
+       WING205 SMONPT1         2       WL205                           +        
+       WINGDSP SMONDP1 20.0            GRID20                                  
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GNAME     │ A character string of up to 8 characters identifying the monitor group. (Character)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ A String comprising no more than 56 characters (fields 3 through 9) that identifies and labels the │
│           │ monitor point.                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME(i)   │ Name of an existing monitor point. (Character)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CLASS(i)  │ Type of monitor point (either AMONPT1, AMONDP1, SMONPT1, SMONDP1, MONPT2, MONTP3)                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL(i)   │ Optional real value to designate a real property of the monitor point.                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT(i)    │ Optional integer value to designate a integer property of the monitor point.                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRING    │ A label of the current monitor type. (Character string of no more than 32 character)               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MONGRP entry provides the user a means of specifying groups of monitor point data but does not produce any output on its own.
2. Aerodynamic (AMONPT1 and AMONDP1) and structural (SMONPT1, SMONDP1, MONPT2, MONPT3) cannot be mixed in a given group.
3. The REAL(i), INT(i) and STRING(i) data are provided to facilitate user display of the monitor data and can be used, for example, to label xy plots.
4. The LABEL should be unique across MONGRP entries.
