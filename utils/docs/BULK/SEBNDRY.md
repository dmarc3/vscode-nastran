## [SEBNDRY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEBNDRY.xhtml) - Superelement Boundary-Point Definition

Defines a list of grid points in a partitioned superelement for the automatic boundary search between a specified superelement or between all other superelements in the model.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBNDRY SEIDA   SEIDB   GIDA1   GIDA2   GIDA3   GIDA4   GIDA5   GIDA6           
        GIDA7   GIDA8   -etc.-                                                  
```
#### Example 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBNDRY 400     4       10      20      30      40                              
```
#### Example 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEBNDRY 400     ALL     10      20      30      THRU    40                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEIDA     │ Partitioned superelement identification number. (Integer > 0)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEIDB     │ Superelement identification.  See Remark 2. (Integer > 0 or Character “ALL”; Default = “ALL”)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDAi     │ Identification number of a boundary grid point in superelement SEIDA.  (Integer > 0 or “THRU”; For │
│           │ “THRU” option, G1 < G2.)                                                                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
