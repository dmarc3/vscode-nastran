## [PWELD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PWELD.xhtml) - Connector Element Property

Defines the property of connector (CWELD) elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PWELD   PID     MID     D                       MSET            TYPE    +       
+       LDMIN   LDMAX                                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PWELD   100     3       1.0                                                     
```

```text
┌───────────┬──────────────────────────────────┬───────────────────┬──────────┐
│ Describer │ Meaning                          │ Type              │ Default  │
├───────────┼──────────────────────────────────┼───────────────────┼──────────┤
│ PID       │ Property identification number.  │ Integer > 0       │ Required │
├───────────┼──────────────────────────────────┼───────────────────┼──────────┤
│ MID       │ Material identification number.  │ Integer > 0       │ Required │
│           │ See Remark 1.                    │                   │          │
├───────────┼──────────────────────────────────┼───────────────────┼──────────┤
│ D         │ Diameter of the connector. See   │ Real > 0          │ Required │
│           │ Remark 1.                        │                   │          │
├───────────┼──────────────────────────────────┼───────────────────┼──────────┤
│ MSET      │ Active ONLY for                  │ Character         │ OFF      │
│           │ "PARAM,OLDWELD,YES". Flag to     │                   │          │
│           │ eliminate m-set degrees-of-      │                   │          │
│           │ freedom (DOFs). The MSET         │                   │          │
│           │ parameter has no effect in a     │                   │          │
│           │ nonlinear SOL 400 analysis. =OFF │                   │          │
│           │ m-set DOFs are eliminated,       │                   │          │
│           │ constraints are incorporated in  │                   │          │
│           │ the stiffness, see Remark 2. =ON │                   │          │
│           │ m-set DOFs are not eliminated,   │                   │          │
│           │ constraints are generated.       │                   │          │
├───────────┼──────────────────────────────────┼───────────────────┼──────────┤
│ TYPE      │ Character string indicating the  │ Character         │ Blank    │
│           │ type of connection, see Remarks  │                   │          │
│           │ 3. and 4. =blank general         │                   │          │
│           │ connector = “SPOT” spot weld     │                   │          │
│           │ connector                        │                   │          │
├───────────┼──────────────────────────────────┼───────────────────┼──────────┤
│ LDMIN     │ Active ONLY for                  │ Real or blank 0.2 │          │
│           │ "PARAM,OLDWELD,YES". Smallest    │                   │          │
│           │ ratio of length to diameter for  │                   │          │
│           │ stiffness calculation, see       │                   │          │
│           │ Remark 4.                        │                   │          │
├───────────┼──────────────────────────────────┼───────────────────┼──────────┤
│ LDMAX     │ Active ONLY for                  │ Real or blank 5.0 │          │
│           │ "PARAM,OLDWELD,YES". Largest     │                   │          │
│           │ ratio of length to diameter for  │                   │          │
│           │ stiffness calculation, see       │                   │          │
│           │ Remark 4.                        │                   │          │
└───────────┴──────────────────────────────────┴───────────────────┴──────────┘
```

#### Remarks:

1. The material MID, the diameter D, and the length are used to calculate the stiffness of the connector in 6 directions. MID can only refer to the MAT1 Bulk Data entry. The length is the distance of GA to GB (see  ).

     ![bulkp07254.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07254.jpg?_LANG=enus)
     
     Figure 0-96 Length and Diameter of the CWELD Connector

2. This remark is now valid only if "PARAM,OLDWELD,YES" is present. The parameter MSET is active only for the formats ELEMID and GRIDID (see   for the format descriptions). MSET = “OFF” incorporates constraints at the element stiffness matrix level avoiding explicit m-set constraint equations. For the formats PARTPAT and ELPAT, constraints are always eliminated on the element level. MSET = “ON” generates explicit m-set constraints. For example, if a patch-to-patch connection is specified with the formats “GRIDID” or “ELEMID” on the CWELD entry, and MSET=ON is specified, 2x6 explicit constraints are generated that connect the 6 degrees-of-freedom of GA to the translational degrees-of-freedom of grid points GAi and the 6 degrees-of-freedom of GB to GBi. The 2x6 degrees-of-freedom of GA and GB are put into the m-set. The constraints are labeled “RWELD”. The identification numbers of the generated RWELD constraint elements start with an offset of 100,001,001 by default. The offset number can be changed with PARAM, OSWELM. For MSET = “OFF” or blank, the 2x6 constraint equations are built into the stiffness matrix of the CWELD element, thereby condensating the 2x6 degrees-of-freedom of GA and GB.
3. TYPE = "SPOT" is good for the formats PARTPAT, ELPAT, or ELEMID with patch to patch connections. For point to patch connections or another formats of patch to patch connections, TYPE is always set to blank.

     If "PARAM,OLDWELD,YES" is present, the effective length for the stiffness of the CWELD element is set to  ![bulkp07256.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07256.jpg?_LANG=enus)  regardless of the distance GA to GB.  ![bulkp07258.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07258.jpg?_LANG=enus)  and  ![bulkp07260.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07260.jpg?_LANG=enus)  are the shell thicknesses of shell A and B, respectively. The effective length is used to avoid excessively stiff or soft connections due to mesh irregularities.

     For the new CWELD, the locations of GA/GB (if GA/GB is not specified by the user or the SWLDPRM parameter MOVGAB is equal to 1) will be adjusted so that the distance GA to GB is equal to L = 1/2 ·  ![bulkp07262.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07262.jpg?_LANG=enus) .

4. If TYPE=blank and "PARAM,OLDWELD,YES" is present, the effective length  ![bulkp07264.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07264.jpg?_LANG=enus)  of the CWELD is equal to the true length L, the distance of GA to GB, as long as the ratio of the length L to diameter D is in the range LDMIN  <  L/D  <  LDMAX. If L is below the range, the effective length is set to  ![bulkp07266.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07266.jpg?_LANG=enus)  and if L is above the range, the effective length is set to  ![bulkp07268.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07268.jpg?_LANG=enus) .

     For the new CWELD with TYPE=blank, LDMIN and LDMAX are ignored. If the distance of GA to GB (patch to patch connections) or GS to GA (point to patch connections) is less than 1.0e-4, the locations of GA/GB (if GA/GB is not specified by the user or the SWLDPRM parameter MOVGAB is equal to 1) will be adjusted so that the distance is equal to 1.0e-4.

5. PWELD is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PWELD property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PWELD entries.
6. The new CWELD will not contribute to MASS by default even if it's associated MATi entry has a non-zero density. To react to a non-zero density "SWLDPARM,WMASS,1" is required. If mass is computed, the PARAM,COUPMASS effects the mass calculation.
