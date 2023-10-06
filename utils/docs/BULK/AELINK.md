## [AELINK](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AELINK.xhtml) - Links Aeroelastic Variables

Defines relationships between or among AESTAT and AESURF entries, such that:

    ![bulkab02049.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02049.jpg?_LANG=enus)

Where:

```text
┌─────┬───┬──────────────────────┐
│ uD  │ = │ dependent variable   │
├─────┼───┼──────────────────────┤
│ Ui1 │ = │ independent variable │
└─────┴───┴──────────────────────┘
```

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AELINK  ID      LABLD   LABL1   C1      LABL2   C2      LABL3   C3      +       
+       LABL4   C4      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AELINK  10      INBDA   OTBDA   -2.0                                            
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ If an integer > 0 is specified, this is the TRIM set ID selected in Case Control and the AELINK │
│           │ only applies to that subcase. If an integer value of 0 or the character string “ALWAYS” is      │
│           │ specified, this AELINK is applicable to all subcases.  (Integer > 0 or the “ALWAYS” character   │
│           │ string.)                                                                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABLD     │ Character string to identify the dependent aerodynamic variable.  (Character)                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABLi     │ Character string to identify the i-th independent aerodynamic variable.  (Character)            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Linking coefficient for the i-th variable.  (Real)                                              │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If the ID is a positive integer, the AELINK entry (or entries) is selected by the TRIM=ID in Case Control.
2. If the ID is 0 or the character string ALWAYs, the linking relationship applies to all subcases.
3. The entry constrains the dependent variable to be a linear combination of the independent variables.
4. LABLD data must be unique for a given ID or if ID=0 or AWAYS is being used (i.e., the variable cannot be constrained more than once).
5. LABLD and LABLi refer to AEPARM, AESTAT or AESURF Bulk Data entries.

