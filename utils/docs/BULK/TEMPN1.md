## [TEMPN1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TEMPN1.xhtml) - TOP/BOT/MID Grid Point Temperature Field for Heat Shell Element in SOL 400

Defines initial temperature at grid points of heat shell elements with linear or quadratic temperature distribution across the thickness direction.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPN1  SID     G1      C1      T1      G2      C2      T2                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPN1  10      100     123     1300.                                           
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Temperature set identification number. (Integer > 0)                                            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification number. (Integer > 0)                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers. (0 < Integer < 3; up to 3 unique Integers may be placed in the field with no │
│           │ embedded blanks.) 1=TOP, 2=BOT, 3=MID. (Integer > -1; Default = 1)                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti        │ Temperature. (Real)                                                                             │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
