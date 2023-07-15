## [SWLDPRM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SWLDPRM.xhtml) - Parameters for CFAST, CWELD, and CSEAM Connector Elements

Overrides default values of parameters for CFAST, CWELD, and CSEAM connectivity search.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    PARAM4  VAL4            
        PARAM5  VAL5    -etc.-                                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM GSPROJ  15.0    GSMOVE  2       PRTSW   1                               
```
#### Alternate Format and Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM PARAM1  VAL1    PARAM2  VAL2    etc.    CFAST   PARAM1  VAL1            
        PARAM2  VAL2    etc.    CWELD   PARAM1  VAL1    PARAM2  VAL2            
        etc.    CSEAM   PARAM1  VAL1    PARAM2  VAL2    etc.                    
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM CHKRUN  2                                                               
        CWELD   GSMOVE  2       PROJTOL .04     PRTSW   1       CSEAM           
        PROJTOL 0.06    GMCHK   1                                               
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SWLDPRM CHKRUN  2                                                               
        CWELD   GSMOVE  2       PROJTOL .04     PRTSW   1                       
        CSEAM   PROJTOL 0.06    GMCHK   1                                       
```
```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PARAMi       │ Name of the connector parameter. Allowable names are listed in Table 0-31. (Real or Integer)       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALi         │ Value of the parameter. See Table 0-31 (Real or Integer)                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CFAST,       │ Keywords to control element type specific parameters. Any parameter following a keyword is applied │
│ CWELD, CSEAM │ only to that element type. See Remarks 2 and 3. (Character)                                        │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACTVTOL Integer > 01111    Parameter controlling the behavior of PROJTOL for the different CWELD connection methods. This parameter is entered as an integer and is converted to a four-character string. If its value is less than 1000, the string will be prepended with zeros. The first character (from the left) controls the behavior when method PARTPAT is used. The second controls the behavior when method ELPAT is used. The third controls the behavior when method ELEMID is used and th fourth contorls the behavior when method GRIDID is used. For ALIGN the PROJTOL tolerance has no significance. Each digit () in the string can have the value 0 or 1 or 2, where the value 2 only has significance for the methods ELPAT or PARTPAT. The values have the following meaning:
                        0 = PROJTOL is completely deactivated
                        1 = PROJTOL is activated for ELEMID and GRIDID, PROJTOL is activated in initial projections for ELPAT, PROJTOL is only activated over free edges of the patch in auxiliary projections for ELPAT and in initial and auxiliary projections for PARTPAT. Free edges have not neighbors within the set that defines the complete surface.
                        2 = PROJTOL is always activated
CHKRUN  Integer 0, 1, 20       Stop run or allow run to continue after the connectivity elements are generated.
                        0=abort on first error;
                        1=stop after connectivity has been checked; 2=continue run if no errors are found.
CNRAGLI 90.0<...160.0   CSEAM...
CNRAGLO 0.0<R...20.0    CSEAM...
CSVOUT  Integer ≥ 00       Print diagnostic output in a comma separated .csv file useful for reports. The users may view or manipulate data using Microsoft Excel, or other spread sheet programs that can process CSV format.
                        0                  no .csv output.
                        unitnum> 0    unit number of the .csv file assigned via the ASSIGN statement in the File Management Section, for example,
                        ASSIGN USERFILE=myfile.csv UNIT=unitnum FORM=FORMATTED DELETE STATUS=NEW
DRATIO  1.0 <...1.0     CFAST...
GMCHK   Integer 0, 1, 2, 30       For CSEAM, CWELD with ELPAT or PARTPAT format, and CFAST only.
                        0=no geometry error checks;
                        1=check errors of the CSEAM across a cutout or over a corner with patch elements in plane or out of plane;
                        2=check errors of CSEAM and output all candidate shell elements if an error is encountered.
                        If GMCHK=1 or 2 and an error is detected, the program will loop back to search for next candidate element until a good pair of connection is found or all adjacent elements have been checked. In the latter case, a user fatal message 7595, 7638, or 7667 will be issued. A UFM 7595 is issued if the normal angles between the patches at end GS or the patches at end GE exceed the value of GSPROJ; a UFM 7638 is issued if either the length of the seam spans more than three elements or the seam spans a cutout; a UFM 7667 is issued if the normal angles between the top patches at GS and GE or the normal angles between the bottom patches at GS and GE exceeds CNRAGLO or if the angle between the free edges of the shell elements onto which GS and GE are projected is less than CNRAGLI.
                        3=check backward projections for CWELD with ELPAT or PARTPAT format and CFAST. See Remark 8.
GSMOVE  Integer 0       Maxim...
MOVGAB  Integer 0, 10       Option to correct the locations of user defined GA/GB for CFAST and CWELD elements.
                        0 = keep the locations of the user specified GA/GB and connect them to shell elements directly.
                        1 = generate new grids with corrected locations to connect shell elements.
GSPROJ  0.0 <...20.0    Maxim...
GSTOL   Real ...0.0     For C...
NREDIA  Integ...0       CFAST...
PROJTOL 0.0 < |Real| < 1.00.02    For CFAST or CWELD, tolerance to accept the projected point GA or GB if the computed coordinates of the projection point lie outside the shell element but is located within |PROJTOL|*(dimension of the shell element forming the patch). For the CSEAM, a projection from GS/GE will always be attempted as if PROJTOL=0.0 and if one cannot be found then the non-zero value of |PROJTOL| will be used.
                        Regardless of the value of SWLDPRM PROJTOL, the algorithm starts by assuming a zero projection tolerance for the projections of GA/GB for the CWELD option "PARTPAT" or the CFAST option "PROP" and for GAHi/GBHi for the CWELD options "PARTPAT" and "ELPAT" and any CFAST option. The tolerance is increased by 0.02 until a projection is found or the PROJTOL value is reached.
                        This can be turned off while computing the auxiliary grid projection onto EIDA/EIDB or onto the adjacent elements of EIDA/EIDB by setting PROJTOL= - value where 0.0 £ value £ 1.0. In this case, the projection calculation starts at tolerance = |PROJTOL|. For the rest of the projection search, the algorithm reverts back to the iteration starting at tolerance = 0.0.
WMASS   Integ...0       For C...
PRTSW   Integer 0, 1, 2 , 11, 12, 100, 101, 1110       Print diagnostic in output or punch out internally generated RBE3 elements and auxiliary grids in Bulk Data format for the connector elements.
                        0=no diagnostic output (appropriate USER MESSAGES such as 'USER WARNING MESSAGE 7636 will continue to be issued);
                        1=print diagnostic output in exponential format to f06 file;
                        2=punch diagnostic output in exponential format to .pch file;
                        11=print diagnostic output in real format to .f06 file;
                        12=punch diagnostic output in real format to .pch file.
                        100=punch out Bulk Data without diagnostic output.
                        101= punch out Bulk Data and print diagnostic output in exponential format to f06 file.
                        111= punch out Bulk Data and print diagnostic output in real format to f06 file.
SCLSKIN Real ...0.0     CFAST...
```
