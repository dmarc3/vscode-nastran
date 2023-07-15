## [NLFREQ1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLFREQ1.xhtml) - Frequency List for Nonlinear Harmonic Response, Alternate Form 1

Defines a set of forcing frequencies for nonlinear harmonic response by specification of a starting frequency, frequency increment, and the number of increments/decrements desired.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLFREQ1 ID      F1      DF      NDF                                             
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLFREQ1 17      3.      2.      6                                               
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number referenced by the NLFREQ field (field 5) of an NLHARM Bulk Data entry. │
│           │ (Integer > 0).                                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1        │ First forcing frequency in the set. (Real > 0.0)                                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ DF        │ Frequency increment. See Remark 1. (Real <> 0.0; Required)                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ NDF       │ Number of frequency increments/decrements. (Integer > 0; Default = 1)                        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If DF is positive, it defines a frequency increment.  In this case, the first excitation frequency will be F1 with all subsequent excitations frequencies being of larger value than F1.  If DF is negative, it defines a frequency decrement.  In this case, the first excitation frequency will still be F1, but now all subsequent excitations frequencies will be of smaller value than F1.  In both cases, the initial conditions for a frequency are the response configuration at the previous excitation frequency.  The initial conditions for the first frequency are zero.

2. Only one NLFREQ or NLFREQ1 entry with the same ID is allowed.

