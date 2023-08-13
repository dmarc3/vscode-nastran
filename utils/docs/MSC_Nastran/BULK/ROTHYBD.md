## [ROTHYBD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.ROTHYBD.xhtml) - Hybrid damping for rotors

Specifies hybrid damping data for rotors.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTHYBD ROTORID1HYBDAMP1ROTORID2HYBDAMP2ROTORID3HYBDAMP3ROTORID4HYBDAMP4+       
+       ROTORID5HYBDAMP5-etc.-                                                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTHYBD 1       15                                                              
ROTHYBD 10      100     20      200     30      300                             
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTORIDi  │ Identification number of rotor. (Integer > 0). See Remarks 1 and 2.                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HYBDAMPi  │ Identification number of a HYBDAMP entry defining hybrid modal damping data. (Integer > 0). See │
│           │ Remarks 1 and 2.                                                                                │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ROTORIDi - HYBDAMPi pair values referencing non-existent rotors are ignored.
2. If there is no HYBDAMP entry defined in the data for a HYBDAMPi specified for a valid ROTORIDi, the program terminates the execution with an appropriate fatal error.
3. Hybrid damping can result in very densely populated damping matrix causing significant performance penalty.
