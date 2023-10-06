## [TOMVAR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TOMVAR.xhtml) - Topometry Design Variable

Defines a design region for topometry optimization (element-by-element optimization).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TOMVAR  ID      TYPE    PID     PNAME...XINIT   XLB     XUB     DELXV   +       
+       “DLINK” TID     C0      C1                                      +       
+       “DDVAL” DSVID                                                   +       
+       “STRESS”STLIM                                                           
```

#### Example:

Design all element's thickness referencing PSHELL ID = 5 with initial design = 10.0 ( ![bulktuv08075.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08075.jpg?_LANG=enus)  input element thickness), lower bound  ![bulktuv08077.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08077.jpg?_LANG=enus)  and upper bound  ![bulktuv08079.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08079.jpg?_LANG=enus) .

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TOMVAR  1       PS1     PSHELL  5       T       10.0                    +       
+       STRESS  5.0                                                             
```

#### Example:

Design all element's Young Modulus referred by PSHELL ID = 100 with initial design XINIT = 3.E+5, XLB=1.0, and XUB= 1.0E+6.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TOMVAR  10      PSHELL  100     E       3.E+5   1.0     1.E+6                   
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique topometry design region identification number. (Integer > 0)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Property entry type. Used with PID to identify the elements to be designed. See Remark 2.          │
│           │ (Character: “PBAR”, “PSHELL”,  ‘PSOLID”, and “PCOMP”, etc.)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property entry identifier (Integer > 0). This PID must be unique for PIDs referenced by other      │
│           │ TOPVAR, DVPREL1, DVPREL2, DVMREL1, and DVMREL2 entries. Topometry, topology, and sizing variables  │
│           │ cannot share the same properties. (Integer > 0). Combined topometry, topology, topography, sizing, │
│           │ and shape variables are allowed.                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNAME/FID │ Property name or property material name, such as “T”, “A”, “E”, and “GE”, or field position of the │
│           │ property entry or word position in the element property table of the analysis model. Property      │
│           │ names that begin with an integer such as 12I/T**3 may only be referenced by field position. Only   │
│           │ one property value for each property can be designed by TOMVAR in a job. See Remark 2. (Character  │
│           │ or Integer > 0.)                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XINIT     │ Initial value. (Real or blank, no Default).  Typically, XINIT is defined to match the mass target  │
│           │ constraint (so the initial design does not have violated constraints) or the analysis model input  │
│           │ property value.                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XLB       │ Lower bound. (Real or blank; Default = blank) . The default  is XLB=0.5*XINIT.                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XUB       │ Upper bound . (Real or blank; Default = blank). The default  is XLB=1.5*XINIT.                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELXV     │ Fractional change allowed for the design variable during approximate optimization. See Remark      │
│           │ 6. (Real > 0.0; Default = 0.5)                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DLINK”   │ Indicates that this line relates a ply thickness to another ply thickness. See Remark 10.          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ TOMVAR entry identifier. (Integer > 0)                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C0        │ Constant term. (Real; Default = 0.0)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C1        │ Coefficient term. (Real; no Default)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DDVAL”   │ Indicates that this line defines discrete TOMVAR variables.                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DSVID     │ DDVAL entry identifier. (Integer > 0)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “STRESS”  │ Indicates that this line defines a stress limit.                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STLIM     │ Von Mises stress upper bound. See Remark 11. (Real >0.0)                                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
