## [TEMPBC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TEMPBC.xhtml) - Grid Point Temperatures

Defines the temperature boundary conditions for heat transfer analysis.  Applies to steady-state and transient conditions (SOLs 153 and 159 only).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPBC  SID     TYPE    TEMP1   GID1    TEMP2   GID2    TEMP3   GID3            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPBC  10      STAT    100.0   1       100.0   2       100.0   3               
```
#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPBC  SID     TYPE    TEMP1   GID1    “THRU”  GID2    “BY”    INC             
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPBC  20      STAT    100.0   4       THRU    50      BY      2               
```
SID

Temperature set identification number.  (Integer > 0)

TYPE

Type of temperature boundary condition.  See Remarks.  (Character; Default = “STAT”):
STAT - Constant temperature boundary condition
TRAN - Time-varying temperature boundary condition

TEMPi

Temperature (Real)

GIDi

Grid point identification number.  (Integer > 0 or “THRU” or “BY”)

INC

Grid point number increment.  (Integer)

--------------------

