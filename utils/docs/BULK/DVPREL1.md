## [DVPREL1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVPREL1.xhtml) - Design Variable to Property Relation

Defines the relation between an analysis model property and design variables.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVPREL1 ID      TYPE    PID     PNAME/  PMIN    PMAX    C0              +       
+                               FID                                     +       
+       DVID1   COEF1   DVID2   COEF2   DVID3   -etc.-                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVPREL1 12      PBAR    612     6       0.2     3.0                             
        4       0.25    20      20.0    5       0.3                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number.  (Integer > 0)                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of a property entry, such as “PBAR”, “PBEAM”, etc.  (Character)                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property entry identification number.  (Integer > 0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNAME/FlD │ Property name, such as “T”, “A”, or field position of the property entry, or word position in the  │
│           │ element property table of the analysis model. Property names that begin with an integer such as    │
│           │ 12I/T**3 may only be referred to by field position. (Character or Integer0)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PMIN      │ Minimum value allowed for this property.  If PMIN references a property that can only be positive, │
│           │ then the default value for PMIN is 1.0E-15. Otherwise, it is -1.0E35. See Remark 6. (Real)         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PMAX      │ Maximum value allowed for this property.  (Real; Default = 1.0E+20)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C0        │ Constant term of relation.  (Real; Default = 0.0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number.  (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COEFi     │ Coefficient of linear relation or keyword = “PVAL”. See Remark 7. (If i = 1, Real or Character; if │
│           │ i > 1, Real)                                                                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The relationship between the analysis model property and design variables is given by:

     ![bulkde03368.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03368.jpg?_LANG=enus)    

2. The continuation entry is required.
3. TYPE   =   “PBEND” is not supported. TYPE=“PBEAML” supports only PNAME and not FID.
4. FID may be either a positive or a negative number. If FID > 0, it identifies the field position on a property entry.  If FID < 0, it identifies the word position of an entry in the element property table.  For example, to specify the area of a PBAR, either PNAME=A, FID   =   +4 or FID   =   -3 can be used. In general, use of PNAME is recommended. For Type "PBUSH", PNAME is recommended, if FID is used it must be < 0.
5. Designing PBEAML or PBEAM requires specification of both property name and station.   shows several examples.

```text
┌────────┬───────────────┬─────────────────┬─────────┬──────────────┐
│ PTYPE  │ Property Name │ END A           │ END B   │ i-th Station │
├────────┼───────────────┼─────────────────┼─────────┼──────────────┤
│ PBEAML │ DIM1          │ DIM1 or DIM1(A) │ DIM1(B) │ DIM1(i)      │
├────────┼───────────────┼─────────────────┼─────────┼──────────────┤
│ PBEAM  │ A             │ A or A(A)       │ A(B)    │ A(i)         │
└────────┴───────────────┴─────────────────┴─────────┴──────────────┘
```

Only stations that are input on a PBEAM or PBEAML entry can be referenced by a DVPREL1. For example, referencing an END B property name on a DVPREL1 entry when the referenced PBEAM does not explicitly specify the END B station, is not allowed.

6. The default values of PMIN and PMAX are not applied when the linear property is a function of a single design variable and C0=0. It is expected that the limits applied on the DESVAR entry will keep the designed property within reasonable bounds.
7. When "PVAL" is used for the COEF1 field, this is a flag to indicate that the COEF1 value is to be obtained from the property bulk data entry.  If a DVPREL1 entry references more than one design variable with the PVAL option, a User Fatal Message will be issued.
8. With GPLY for TYPE field and GPLYID for PID field, a ply identified with GPLYID across all PCOMPG entries in the model can be designed. Internally, a DVPREL1 will be spawned for each PCOMPG has a ply ID of GPLYID. For TYPE=GPLY, the relationship between the analysis model property and design variables is given by.

![bulkde03370.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03370.jpg?_LANG=enus)  for PNAME=T or THETA

Where T0 and THETA0 are value of thickness and theta angle on the original PCOMPG. Note that non-zero C0 is not recommended for TYPE=GPLY or PCOMPG. For THETA0 with original value equal to 0.0, THETA0 is taken as 1.0 and it is recommended to have XINIT of DVID set to 0.0.
