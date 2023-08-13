## [DELAY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DELAY.xhtml) - Dynamic Load Time Delay

Defines the time delay term  τ  in the equations of the dynamic loading function.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DELAY   SID     P1      C1      T1      P2      C2      T2                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DELAY   5       21      6       4.25    7       6       8.1                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of the DELAY entry. (Integer > 0)                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Pi        │ Grid, extra, or scalar point identification number. (Integer > 0)                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number.  (Integer 1 through 6 for grid point, blank or 0 for extra point or scalar │
│           │ point.)                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti        │ Time delay τ for designated point Pi and component Ci.  (Real)                               │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. One or two dynamic load time delays may be defined on a single entry.
2. SID must also be specified on a RLOAD1, RLOAD2, TLOAD1, TLOAD2, or ACSRCE entry. See those entry descriptions for the formulas that define the manner in which the time delay  τ  is used.
3. A DAREA, LSEQ or static load entry should be used to define a load at Pi and Ci.
4. In superelement analysis, DELAY entries may only be applied   to loads on points in the residual structure.
