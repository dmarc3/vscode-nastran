## [SLOADN1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SLOADN1.xhtml) - Describes TOP/BOT/MID Scalar Load for Heat Shell Element in SOL 400

Defines concentrated static loads on grid points of heat shell elements with linear or quadratic temperature distribution through the thickness direction.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SLOADN1 SID     G1      C1      Q1      G2      C2      Q2                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SLOADN1 10      10      12      1300.   20      2       1300.                   
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification number.  (Integer > 0)                                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers. (0 < Integer < 3; up to 3 unique Integers may be placed in the field with no │
│           │ embedded blanks.) 1=TOP, 2=BOT, 3=MID.  (Integer > -1; Default = 1)                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Qi        │ Power. (Real)                                                                                   │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
