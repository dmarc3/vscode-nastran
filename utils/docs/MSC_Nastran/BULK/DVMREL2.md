## [DVMREL2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVMREL2.xhtml) - Design Variable to Material Relation

Defines the relation between a material property and design variables with a user-supplied equation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVMREL2 ID      TYPE    MID     MPNAME  MPMIN   MPMAX   EQID            +       
+       DESVAR  DVID1   DVID2   DVID3   DVID4   DVID5   DVID6   DVID7   +       
+               DVID8   -etc.-                                          +       
+       DTABLE  LABL1   LABL2   LABL3   LABL4   LABL5   LABL6   LABL7   +       
+               LABL8   -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVMREL2 5       MAT1    1       E       0.05    1.0     100             +       
+       DESVAR  1       2                                               +       
+       DTABLE  E0                                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer > 0)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of a material property entry, such as “MAT1”, “MAT2”, etc. (Character)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material Identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MPNAME    │ Name of material property, such as “E” or “RHO”. (Character)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MPMIN     │ Minimum value allowed for this property. If MPNAME references a material property that can only be │
│           │ positive, then the default value for MPMIN is 1.0E-15. Otherwise, it is -1.0E35. (Real)            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MPMAX     │ Maximum value allowed for this property. (Real; Default = 1.0E+20)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQID      │ DEQATN entry identification number. (Integer > 0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DESVAR    │ DESVAR flag. Indicates that the IDs of DESVAR entries follow. (Character)                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number. (Integer > 0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DTABLE    │ DTABLE flag. Indicates that the LABLs for the constants in a DTABLE or DTABLE2 entry follow. This  │
│           │ field may be omitted if there are no constants involved in this relation. (Character)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABLi     │ Label for a constant on the DTABLE or DTABLE2 entry. (Character)                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The variables identified by DVIDi and LABLi correspond to variable names (x1, x2, etc.) listed in the left-hand side of the first equation on the DEQATN entry identified by EQID. The variable names x1 through xN (where  ![bulkde03364.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03364.jpg?_LANG=enus) ) are assigned in the order DVID1, DVID2, ..., DVIDm, LABL1, LABL2, ..., LABLn.
2. If both “DESVAR” and “DTABLE” are specified in field 2, “DESVAR” must appear first.
3. The fifth field of the entry, MPNAME, only accepts string characters. It must be the same as the name that appears in the   for various material properties. For example, if the isotropic material density is to be designed, RHO (case insensitive) must be specified on the MPNAME field.
