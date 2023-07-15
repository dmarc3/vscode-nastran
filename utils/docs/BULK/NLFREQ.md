## [NLFREQ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLFREQ.xhtml) - Frequency List for Nonlinear Harmonic Response

Defines explicit forcing frequencies for nonlinear harmonic response.

#### Format:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLFREQ  ID      F1      F2      F3      F4      F5      F6      F7              
        F8      F9      -etc.-                                                  
```
#### <span></span>

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLFREQ  17      3.      7.      21.     14.                                     
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number referenced by the NLFREQ field (field 5) of an NLHARM Bulk Data entry. │
│           │ (Integer > 0)                                                                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1...Fn   │ Forcing frequency values in cycles per unit time. (Real > 0.0)                               │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The frequencies may be specified in any order; they do not have to be in ascending or descending order.

2. Only one NLFREQ or NLFREQ1 entry with the same ID is allowed.

