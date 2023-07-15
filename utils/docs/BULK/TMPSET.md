## [TMPSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TMPSET.xhtml) - Temperature Group Set Definition

Define a time-dependent dynamic thermal load group for use in TTEMP Bulk Data entry in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TMPSET  ID      G1      G2      G3      G4      G5      G6      G7              
```
#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TMPSET  ID      G1      “THRU”  G2      “BY”    INC                             
```
The Continuation Entry formats may be used more than once and in any order.  They may also be used with either format above.

#### Continuation Entry Format 1:

```text
┌────┬────┬─────┬─────┬────────┐
│ G8 │ G9 │ G10 │ G11 │ -etc.- │
└────┴────┴─────┴─────┴────────┘
```
#### Continuation Entry Format 2:

```text
┌────┬────────┬────┬──────┬─────┐
│ G8 │ “THRU” │ G9 │ “BY” │ INC │
└────┴────────┴────┴──────┴─────┘
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TMPSET  15      5       THRU    21      BY      4                               
        27      30      32      33                                              
        35      THRU    44                                                      
        67      68      72      75      84      93                              
```
```text
┌───────────┬───────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                       │
├───────────┼───────────────────────────────────────────────────────────────┤
│ ID        │ Temperature group identification number. (Integer > 0)        │
├───────────┼───────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point Identification numbers in the group. (Integer > 0) │
└───────────┴───────────────────────────────────────────────────────────────┘
```
