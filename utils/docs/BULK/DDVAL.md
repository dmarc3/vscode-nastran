## [DDVAL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DDVAL.xhtml) - Discrete Design Variable Values

Defines real, discrete design variable values for use in discrete variable optimization, topometry optimization or rotordynamics.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DDVAL   ID      DVAL1   DVAL2   DVAL3   DVAL4   DVAL5   DVAL6   DVAL7           
```
#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DDVAL   ID      DVAL1   THRU    DVAL2   BY      INC                             
```
The Continuation Entry formats may be used more than once and in any order. They may also be used with either format above.

#### Continuation Entry Format 1:

```text
┌───────┬───────┬────────┬────────┬────────┐
│ DVAL8 │ DVAL9 │ DVAL10 │ DVAL11 │ -etc.- │
└───────┴───────┴────────┴────────┴────────┘
```
#### Continuation Entry Format 2:

:

```text
┌───────┬──────┬───────┬────┬─────┐
│ DVAL8 │ THRU │ DVAL9 │ BY │ INC │
└───────┴──────┴───────┴────┴─────┘
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DDVAL   110     0.1     0.2     0.3     0.5     0.6     0.4                     
        .7      THRU    1.0     BY      0.05                                    
        1.5     2.0                                                             
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                         │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ ID        │ Unique set identification number (Integer > 0) See Remark 1.    │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ DVALi     │ Discrete values (Real, or THRU or BY) See Remarks 2. through 5. │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ INC       │ Discrete value increment (Real) See Remarks 2., 4., 5.          │
└───────────┴─────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. DDAVAL entries may be referenced by a DESVAR entry in its DDVAL field (field 8), a TOMVAR entry in its DSVID field, a entry in its DDVALID field (field 4) or a RSPINR entry in its SPTID field (field 6).

2. Trailing fields on a DDVAL record can be left blank if the next record is of type DVALi THRU DVALj BY INC. Also fields 7 - 9 must be blank when the type DVALi THRU DVALj BY INC is used in fields 2 - 6 and fields
8 - 9 must be blank when the type DVALi “THRU” DVALj “BY” INC is used in fields 3 - 7 for the first record. Embedded blanks are not permitted in other cases.

3. The DVALi values in a sequence need not be in an ascending or descending order. They can be in any order.

4. If the format DVALi  THRU  DVALj  BY INC is employed, INC must be a positive real value if DVALi < DVALj and INC must be a negative real value if DVALi > DVALj. The program terminates the execution with an appropriate fatal error if this requirement is not satisfied.

5. The format DVALi  THRU  DVALj  BY  INC defines a list of discrete values given by DVALi, DVALi+INC, DVALi+2.0*INC, …., DVALj. The last discrete value of DVALj is always included, even if the range is not evenly divisible by INC.

6. If Modules are present then this entry may only be specified in the main Bulk Data section.

