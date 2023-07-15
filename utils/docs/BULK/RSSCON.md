## [RSSCON](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RSSCON.xhtml) - Shell-to-Solid Element Connector

Defines multipoint constraints to model clamped connections of shell-to-solid elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RSSCON  RBID    TYPE    ES1     EA1     EB1     ES2     EA2     EB2             
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RSSCON  110     GRID    11      12      13      14      15      16              
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RSSCON  111     GRID    31      74      75                                      
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RSSCON  115     ELEM    311     741                                             
```
```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ RBID      │ Element identification number.                    │                                                 │
│           │ (0 < Integer < 100,000,000)                       │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ TYPE      │ Type of connectivity:                             │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ ELEM                                              │ Connection is described with element            │
│           │                                                   │ identification numbers.                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ GRID                                              │ Connection is described with grid point         │
│           │                                                   │ identification numbers.  (Character:  “GRID” or │
│           │                                                   │ “ELEM”; Default = “ELEM”)                       │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ ES1       │ Shell element identification number if            │                                                 │
│           │ TYPE = “ELEM”.  Shell grid point identification   │                                                 │
│           │ number if TYPE = “GRID”.  See Figure 0-99.        │                                                 │
│           │  (Integer > 0)                                    │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ EA1       │ Solid element identification number if            │                                                 │
│           │ TYPE = “ELEM”.  Solid grid point identification   │                                                 │
│           │ number if TYPE = “GRID”.  (Integer > 0)           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ EB1       │ Solid grid-point identification number for        │                                                 │
│           │ TYPE = “GRID” only.  (Integer > 0 or blank)       │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ ES2       │ Shell grid-point identification number for        │                                                 │
│           │ TYPE = “GRID” only.  (Integer > 0 or blank)       │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ EA2       │ Solid grid-point identification number for TYPE = │                                                 │
│           │ “GRID” only.  (Integer > 0 or blank)              │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ EB2       │ Solid grid-point identification number for TYPE = │                                                 │
│           │ “GRID” only.  (Integer > 0 or blank)              │                                                 │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```
