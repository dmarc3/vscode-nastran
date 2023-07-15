## [DVPREL2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVPREL2.xhtml) - Design Variable to Property Relation

Defines the relation between an analysis model property and design variables with a user-supplied equation.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVPREL2 ID      TYPE    PID     PNAME...PMIN    PMAX    EQID                    
        “DESVAR”DVID1   DVID2   DVID3   DVID4   DVID5   DVID6   DVID7           
                DVID8   -etc.-                                                  
        “DTABLE”LABL1   LABL2   LABL3   LABL4   LABL5   LABL6   LABL7           
                LABL8   -etc.-                                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVPREL2 13      PBAR    712     5       0.2     0.4     50                      
        DESVAR  4       11      13      5                                       
        DTABLE  PI      YM                                                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number.  (Integer > 0)                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of a property entry, such as PBAR, PBEAM, etc.  (Character)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property entry identification number.  (Integer > 0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNAME/FID │ Property name, such as “T”, “A”, or field position of the property entry, or word position in the  │
│           │ element property table of the analysis model. Property names that begin with an integer such as    │
│           │ 12I/T**3 may only be referred to by field position. (Character or Integer0)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PMIN      │ Minimum value allowed for this property.  If FID references a stress recovery location field, then │
│           │ the default value for PMIN is -1.0+35.  PMIN must be explicitly set to a negative number for       │
│           │ properties that may be less than zero (for example, field ZO on the PCOMP entry).  (Real;          │
│           │ Default = 1.E-15)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PMAX      │ Maximum value allowed for this property.  (Real; Default = 1.0E20)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQID      │ DEQATN entry identification number.  (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DESVAR”  │ DESVAR flag.  Indicates that the IDs of DESVAR entries follow.  (Character)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number.  (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DTABLE”  │ DTABLE flag. Indicates that the LABLs for the constants in a DTABLE or DTABLE2 entry follow. This  │
│           │ field may be omitted if there are no constants involved in this relation. (Character)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABLi     │ Label for a constant on the DTABLE or DTABLE2 entry. (Character)                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The variables identified by DVIDi   and LABLi correspond to variable names (x1, x2, etc.) listed in the left-hand side of the first equation on the DEQATN entry identified by EQID.  The variable names x1 through xN (where N = m+n) are assigned in the order DVID1, DVID2, ..., DVIDn, LABL1, LABL2, ..., LABLm.

2. If both “DESVAR” and “DTABLE” are specified in field 2, “DESVAR” must appear first.

3. FID may be either a positive or a negative number. If FID > 0, it identifies the field position on a property entry.  If FID < 0, it identifies the word position of an entry in EPT.  For example, to specify the area of a PBAR, either PNAME=A, FID = +4 or FID = -3 may be used. In general, use of PNAME is recommended. For Type "PBUSH", PNAME is recommended, if FID is used it must be < 0.

4. Types “PBEND”, “PBARL” and “PBEAML” are not supported for the DVPREL2.

5. Designing PBEAM requires specification of both property name and station.   shows one example.

```text
┌───────┬───────────────┬───────────┬───────┬──────────────┐
│ PTYPE │ Property Name │ END A     │ END B │ i-th Station │
├───────┼───────────────┼───────────┼───────┼──────────────┤
│ PBEAM │ A             │ A or A(A) │ A(B)  │ A(i)         │
└───────┴───────────────┴───────────┴───────┴──────────────┘
```
     Only stations that are input on a PBEAM entry can be referenced by a DVPREL2. For example, referencing an END B property name on a DVPREL2 entry when the referenced PBEAM does not explicitly specify the END B station, is not allowed.

