## [MONSUM1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONSUM1.xhtml) - Linear combination of two or more monitor points.

Defines a new monitor result that is the weighted sum of existing monitor results. The location of the computed MONSUM1 is specified. The existing monitor points do not need to be of the same type but they must be of similar type (See Remark  3. )

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUM1 NAME    LABEL                                                           
        CP      X       Y       Z       CD                                      
        NEWAXES MTYP1   NAME1a  AXES1A  COEF1A  NAME2A  AXES2A  COEF2A          
                        NAME3A  AXES3A  COEF3A  Etc                             
                MTYP2   NAME2A  AXES1B  COEF1B  NAME2B  AXIS2B  COEF2B          
                        NAME3B  AXES3B  COEF3B  Etc.    .                       
                MTYP3   Etc                                                     
```
#### Example: Create a new monitor point result by adding an aerodynamic monpnt1 and a monpnt3

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUM1 ROOT    SCALE...        
                500.    0.0     25.0    20      200                             
        123456  MONPNT3 FS_1000 123     -4.482  FS_1000 356     -11.385         
                AMONPNT1ROOT    123     4.482   R00T    456     11.385          
```
#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUM1 NAME    LABEL                                                           
        CP      X       Y       Z       CD                                      
        MTYPE   NEWAXISANAME1a  AXES1A  COEF1A  NAME2A  AXES2A  COEF2A          
                        NAME3A  AXES3A  COEF3A  Etc                             
                NEWASIXBNAME2A  AXES1B  COEF1B  NAME2B  AXIS2B  COEF2B          
                        NAME3B  AXES3B  COEF3B  Etc.    .                       
                NEWAXISCEtc                                                     
```
#### Alternate  Example: Create a new monitor point result by adding an aerodynamic monpnt1 and a monpnt3

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUM1 ROOT    SCALE...        
                500.    0.0     25.0    20                                      
        MONPNT3 123456  FS_1000 123     -4.482  FS_1000 456     -11.385         
        AMONPNT1123456  ROOT    123     4.482   R00T    456     11.385          
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Character string of up to 8 characters identifying the monitor result (Character)                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ A string comprising no more than 56 characters (fields 3 through 9) that identifies and labels the │
│           │ merged monitor result.                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ The identification number of a coordinate system in which the input (x,y,z) coordinates are        │
│           │ defined. (Integer > 0; Default = 0)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X,Y,Z     │ The coordinates in the CP coordinate system about which the loads are to be monitored. (Real;      │
│           │ Default = 0.0).                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CD        │ The identification number of a coordinate system in which the resulting load components are        │
│           │ output. (Integer > 0; Default = the coordinate system specified by the CP field)                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NEWAXESj  │ The component axis of the newly-created monitor point into which the summed quantity will be       │
│           │ stored (integer, any unique combination of the integers 1 to 6 with no embedded blanks, see        │
│           │ Remarks 5. and 6.)                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MTYPi     │ Monitor type to be merged.  (Character, one of “AMONPNT1”,  “SMONPNT1”, or “MONPNT3”, no default). │
│           │ See Remarks 3. and 4.                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMEij    │ Name of the monitored quantity that is to be summed.                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AXESij    │ Component axes that are to be scaled. (any unique combination of the integers 1 to 6 with no       │
│           │ embedded blanks. Must be a subset of NEWAXESj).Default =same as NEWAXESj                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COEFij    │ Scaling coefficient to be applied to the component(s) called out on AXESij field. (Real,           │
│           │ Default=1.0)                                                                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The LABEL is a 56 character string that should be unique.

2. The result of the MONSUM1 entry is to create new monitor point(s) as follows:

![bulkno06040.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06040.jpg?_LANG=enus)  

     Where  ![bulkno06042.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06042.jpg?_LANG=enus)  is the result from the individual component.

3. The merged monitor points must be of a similar type. “Similar” types are defined as:

◾ Force and moment summation monitor points: AMONPNT1, SMONPNT1, MONPNT3

4. For MONPNT1’s the MTYPij can be aerodynamic or structural. MTYPij=AMONPT1 designates aerodynamic while SMONPNT1 designates a structural monitor point.

5. If multiple components are to be summed, the NEWAXISj field must be the union of subsequent AXISij fields. If the subsequent AXISij field is blank, the components are the same as NEWAXISj.

6. If the NEWAXISj field indicates a single output, the AXISij fields must reference a single input, but it can be any value from 1 to 6. There may be as many as 6 AXISij and COEFij for each referenced NAMEij.

7. The same component cannot be referenced multiple times on the NEWAXISj fields for a single MONSUM1 entry.

8. If multiple types are specified on a MONSUM1, the resulting entry is of a type that appears on the MONSUM1 with the following order of precedence: SMONPNT1 (structural MONPNT1), MONPNT3, AMONPNT1 (aerodynamic MONPNT1). E.g., a AMONPNT1 (aerodynamic MONPNT1) and a MONPNT3 appearing on the same entry will result in a MONPNT3 regardless of which appears first.

9. A MONSUM1 can reference the results of another MONSUM1or a MONSUMT as long as there is not a circular reference.

10. The MONSUM1 entry is available in SOLs 101,103,108,109,111,112,144,146, 200 and 400 (ANALYSIS = NLSTAT or NLTRAN).

11. The CP, CD, and X Y Z location coordinates are for reference only and do not affect the calculations.

