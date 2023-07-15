## [SPLINEX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINEX.xhtml) - Externally-Evaluated Spline

Defines the input for a spline that will be evaluated with a user-supplied procedure.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINEX EID     GROUP   DGCOMP  IGCOMP  DECOMP  IECOMP          USAGE           
        AELIST  AEFACT  AELISTC                                                 
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINEX 3       SPLNGRP4GWNG1A  GWNG1S                          BOTH            
        101     201     301                                                     
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (Integer > 0)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ Group name to which the external spline type belongs. (Character; no Default)                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DGCOMP    │ The name of an AECOMP or AECOMPL entry that defines the set of points for the dependent mesh. See │
│           │ Remarks 3. and 4. (Character; Default = Blank).                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IGCOMP    │ The name of an AECOMP or AECOMPL entry that defines the set of points for the independent mesh.   │
│           │ See Remarks 3. and 4. (Character; Default = Blank).                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DECOMP    │ The name of an AECOMP or AECOMPL entry that defines the set of elements for the dependent mesh.   │
│           │ See Remarks 3., 4. and 5. (Character; Default = Blank).                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IECOMP    │ The name of an AECOMP or AECOMPL entry that defines the set of elements for the independent mesh. │
│           │ See Remarks 3., 4. and 5. (Character; Default = Blank).                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ USAGE     │ Spline usage flag to determine whether this spline applies to the force transformation,           │
│           │ displacement transformation or both. FORCE, DISP or BOTH. See Remark 2. (Character; Default =     │
│           │ BOTH)                                                                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AELIST    │ ID of an AELIST that contains a list of user-defined integer data. See Remark 6. (Integer; no     │
│           │ Default).                                                                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AEFACT    │ ID of an AEFACT that contains a list of user-defined real data. See Remark 6. (Integer; no        │
│           │ Default).                                                                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AELISTC   │ ID of an AELISTC that contains a list of user-defined character data. See Remark 6. (Integer; no  │
│           │ Default).                                                                                         │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
