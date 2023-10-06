## [DVCREL2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVCREL2.xhtml) - Design Variable to Connectivity Property Relation

Defines the relation between a connectivity property and design variables with a user-supplied equation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVCREL2 ID      TYPE    EID     CPNAME  CPMIN   CPMAX   EQID            +        
+       “DESVAR”DVID1   DVID2   DVID3   DVID4   DVID5   DVID6   DVID7   +        
+               DVID8   -etc.-                                          +        
+       “DTABLE”LABL1   LABL2   LABL3   LABL4   LABL5   LABL6   LABL7   +        
+               LABL8   -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVCREL2 1       CBAR    100     X1      0.05    1.0     100             +       
+       DESVAR  1001                                                    +       
+       DTABLE  X10                                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer > 0)                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of an element connectivity entry, such as “CBAR”, “CQUAD4”, etc. (Character)                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element Identification number. (Integer > 0)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CPNAME    │ Name of connectivity property, such as “X1”, “X2”, “X3”, “ZOFFS”, etc. (Character)                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CPMIN     │ Minimum value allowed for this property. If CPNAME references a connectivity property that can    │
│           │ only be positive, then the default value of CPMIN is 1.0E-15. Otherwise, it is -1.0E35. (Real)    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CPMAX     │ Maximum value allowed for this property. (Real; Default =1.0E+20)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQID      │ DEQATN entry identification number. (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DESVAR”  │ DESVAR flag. Indicates that the IDs of DESVAR entries follow. (Character)                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number. (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DTABLE”  │ DTABLE flag. Indicates that the LABLs for the constants in a DTABLE or DTABLE2 entry follow. This │
│           │ field may be omitted if there are no constants involved in this relation. (Character)             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABLi     │ Label for a constant on the DTABLE or DTABLE2 entry. (Character)                                  │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The variable identified by DVIDi and LABLi correspond to variable names (x1, x2, etc.) listed in the left-hand side of the first equation on the DEQATN entry identified by EQID. The variable names x1 through xN (where  ![bulkde03342.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03342.jpg?_LANG=enus) ) are assigned in the order DVID1, DVID2, ..., DVIDm, LABL1, LABL2, ..., LABLn.
2. If both “DESVAR” and “DTABLE” are specified in field 2, “DESVAR” must appear first.
3. The fifth field of the entry, CPNAME, only accepts string characters. These string values must be the same as those given in the connectivity entry descriptions in this Guide. For example, if the plate offset is to be designed (CQUAD4, CTRIA3, etc.), ZOFFS (case insensitive) must be specified on the CPNAME field.
4. If the user inputs CQUAD4/CTRIA3 entries and then uses QRMETH = 5 to convert them to CQUADR/CTRIAR entries, the design of  items on these entries using the DVCREL2 entry should refer to the converted type (i.e., CQUADR/CTRIAR). Similarly, if QRMETH=2 or 3 is used, the DVCREL2  entry should refer to CQUAD4/CTRIA3 types.   
