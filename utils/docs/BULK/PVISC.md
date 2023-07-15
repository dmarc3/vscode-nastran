## [PVISC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PVISC.xhtml) - Viscous Damping Element Property

Defines properties of a one-dimensional viscous damping element (CVISC entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PVISC   PID1    CE1     CR1             PID2    CE2     CR2                     
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PVISC   3       6.2     3.94                                                    
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ PIDi      │ Property identification number. (Integer > 0)                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ CE1, CE2  │ Viscous damping values for extension in units of force per unit velocity. (Real) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ CR1, CR2  │ Viscous damping values for rotation in units of moment per unit velocity. (Real) │
└───────────┴──────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Viscous properties are material independent; in particular, they are temperature independent.

2. One or two viscous element properties may be defined on a single entry.

3. PVISC is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PVISC property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PVISC entries.

