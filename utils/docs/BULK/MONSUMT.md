## [MONSUMT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONSUMT.xhtml) - Linear combination of two or more monitor points with moment transfer

Defines a new monitor result that is the sum of existing monitor results. The existing monitor points do not need to be of the same type but they must be of similar type (See Remark 3)  3. )

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUMT NAME    LABEL                                                   +        
+       AXES    CP      X       Y       Z       CD                      +        
+       MTYP1   NAME1a  NAME1b  NAME1c  NAME1d  NAME1e  NAME1f  NAME1g  +        
+       MTYP2   NAME2a  NAME2b  NAME2c  NAME2d  NAME2e  NAME2f  NAME2g          
```

#### Example: Create a new monitor point result by adding an aerodynamic and a monpnt3

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUMT FS_900  FUSELAGE STATION 900                                    +
+       123456          500.    0.0     25.0    20                      +        
+       MONPNT3 FS_1000 FS_1100 FS_1200 MONPNT3                         +        
+       AMONPNT1HTP_ROOTAMONPNT1                                                
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
│ AXES      │ The component axis of the newly-created monitor point into which the summed quantity will be       │
│           │ stored (integer, any unique combination of the integers 1 to 6 with no embedded blanks.            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MTYPi     │ Monitor type to be merged.  (Character, one of “AMONPNT1”,  “SMONPNT1”, or “MONPNT3”, no default). │
│           │ See Remarks 3. and 4.                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMEij    │ Name of the monitored quantity that is to be summed.                                               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The LABEL is a 56 character string that should be unique.
2. The NAME must be unique with respect to all monitor quantities. The result of the MONSUMT entry is to create new monitor point(s) as follows:

    ![bulkno06044.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06044.jpg?_LANG=enus)  

     Where  ![bulkno06046.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06046.jpg?_LANG=enus)  is the result from the monitor points being summed and  ![bulkno06048.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06048.jpg?_LANG=enus)  is set of partial rigid body vectors for the locations of the monitor points being summed, with the origin at the X, Y, Z location.

3. The summed monitor points must be of a similar type. “Similar” types are defined as:
    - Force and moment summation monitor points: AMONPNT1, SMONPNT1, MONPNT3
4. For MONPNT1’s the MTYPij can be aerodynamic or structural. MTYPij=AMONPT1 designates aerodynamic while SMONPNT1 designates a structural monitor point.
5. If multiple types are specified on a MONSUMT, the resulting entry is of a type that appears on the MONSUMT with the following order of precedence: SMONPNT1 (structural MONPNT1), MONPNT3, AMONPNT1 (aerodynamic MONPNT1). E.g., a AMONPNT1 (aerodynamic MONPNT1) and a MONPNT3 appearing on the same entry will result in a MONPNT3 regardless of which appears first. 
6. A MONSUMT can reference the results of another MONSUMT or a MONSUM1 as long as there is not a circular reference.
7. The MONSUMT entry is available in SOLs 101,103,108,109,111,112,144,146, 200 and 400 (ANALYSIS = NLSTAT or NLTRAN).
