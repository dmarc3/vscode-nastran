## [DESVAR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DESVAR.xhtml) - Design Variable

Defines a design variable for design optimization.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DESVAR  ID      LABEL   XINIT   XLB     XUB     DELXV   DDVAL                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DESVAR  2       BARA1   35.0    10.     100.    0.2                             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique design variable identification number.  (Integer > 0)                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ User-supplied name for printing purposes.  (Character)                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XINIT     │ Initial value.  (Real; XLB < XINIT < XUB)                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XLB       │ Lower bound.  (Real; Default = -1.0E+20)                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XUB       │ Upper bound.  (Real; Default = +1.0E+20)                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELXV     │ Fractional change allowed for the design variable during approximate optimization.  (Real > 0.0; │
│           │ for Default see Remark 2.)                                                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DDVAL     │ ID of a DDVAL entry that provides a set of allowable discrete values. (Blank or Integer > 0;     │
│           │ Default=blank for continuous design variables. See Remark 3.)                                    │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
