## [PCOMPF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCOMPF.xhtml) - Integration Procedure Used in Conjunction with PCOMP or PCOMPG

Defines the integration procedure for through the thickness integration of composite shells in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPF  INT     PID1    THRU    PID2    BY      N                               
```
#### Alternate Formats (SOL 400):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPF  INT     PID1    PID2    PID3    THRU    PID4    PID5    THRU            
        PID6    PID7    TO      PID8    PID9    PID10   PID11   PID12           
        THRU    PID13   BY      N                                               
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPF  INT     ALL                                                             
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPF  2       100     THRU    200     BY      10                              
```
#### Example of Application to Single PID (SOL 400):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPF  1               23      TO      25              33                      
        44      THRU    54      BY      2                                       
        100                                                                     
```
```text
┌───────────┬────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                        │                                                   │
├───────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ INT       │ 1                                              │ Conventional through the thickness integration of │
│           │                                                │ each layer, allows all available material         │
│           │                                                │ behavior through the thickness. (Default)         │
├───────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2                                              │ Linear elastic material, fast-integrated through  │
│           │                                                │ the thickness - thermal strains and temperature   │
│           │                                                │ dependent material properties are not allowed.    │
├───────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 3                                              │ Linear elastic material, fast integrated through  │
│           │                                                │ the thickness.                                    │
├───────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PIDi      │ Property identification number. (0 < Integer < │                                                   │
│           │ 10000000) corresponds to a matching PCOMP or   │                                                   │
│           │ PCOMPG entry.                                  │                                                   │
├───────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ N         │ Property identification number increment. See  │                                                   │
│           │ Remark 4.. (Integer or blank)                  │                                                   │
└───────────┴────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. If nonlinear behavior is set on a MATS1 (or other option), but INT is > 1, then the nonlinear material behavior is ignored.

2. If more than one PCOMPF exists with different INT values, and there is an overlap in PID’s, that is to say a given PID could have been assigned different values of INT, then a user fatal will be issued.

3. With the 'THRU" and "THRU", "BY" forms, blank fields are allowed for readability. Any combination of a list of ID's and "THRU" and "THRU", "BY" is allowed. The "THRU" and "BY" lists may have missing ID's. That is the list of ID's in a THRU range need not be continuous.

4. For automatic generation of property identification numbers, the default increment value is 1 if property identification  numbers are increasing or -1 if property identification numbers are decreasing (i.e., the user need not specify BY and the increment value).

