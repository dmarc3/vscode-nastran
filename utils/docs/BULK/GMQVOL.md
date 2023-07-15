## [GMQVOL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GMQVOL.xhtml) - Define Volumetric Heat Loads

Defines a rate of volumetric heat generation in a conduction element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GMQVOL  LID     METHOD  FIELD1          EID1    EID2    EID3    EID4            
        EID5    etc.                                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GMQVOL  100     TABLE   20              18      23      7                       
```
```text
┌───────────┬──────────────────────────────────┬─────────────────┐
│ Describer │ Meaning                          │                 │
├───────────┼──────────────────────────────────┼─────────────────┤
│ LID       │ Load set identification number.  │ Integer > 0     │
├───────────┼──────────────────────────────────┼─────────────────┤
│ METHOD    │ Method used to specify the data  │ Character       │
│           │ (EQUATION, TABLE, CONSTANT). See │                 │
│           │ Remark 2.                        │                 │
├───────────┼──────────────────────────────────┼─────────────────┤
│ FIELD1    │ Volumetric heat load data. See   │ Integer or Real │
│           │ Remark 2.                        │                 │
├───────────┼──────────────────────────────────┼─────────────────┤
│ EIDi      │ A list of heat conduction        │ Integer > 0     │
│           │ elements.                        │                 │
└───────────┴──────────────────────────────────┴─────────────────┘
```
#### Remarks:

1. For steady-state analysis, the load set is selected in the Case Control Section (LOAD=LID).

2. METHOD specifies the data type of FIELD1 to be constants, equation IDs, or table IDs. Values in FIELD1 and FIELD2 are:

```text
┌──────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ METHOD   │ FIELD1                                                                                       │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQUATION │ ID of a DEQATN entry defining the volumetric heat generation rate as a function of location  │
│          │ (Integer > 0).                                                                               │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABLE    │ ID of a TABLE3D entry defining the volumetric heat generation rate as a function of location │
│          │ (Integer > 0).                                                                               │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONSTANT │ Value of volumetric heat generation rate (Real).                                             │
└──────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```
     Note that the fifth field will be reserved for the future development of temperature dependent functions.

