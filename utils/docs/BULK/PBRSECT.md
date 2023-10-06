## [PBRSECT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBRSECT.xhtml) - Arbitrary Cross-Section for CBAR

Defines the shape of arbitrary cross-section for CBAR element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBRSECT PID     MID     FORM    NSM                                             
        Data description for arbitrary section
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBRSECT 1       10      GS                                                      
        OUTP=10,INP=20
PBRSECT 1       10      CP                                                      
        OUTP=10,BRP=20,T=1.0,T(11)=[1.2,PT=(123,204)]
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                          │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                    │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                    │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ FORM      │ Cross-section form. (Character) See Remark 1.                    │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ NSM       │ Non-structural mass per unit length. (Real > 0.0; Default = 0.0) │
└───────────┴──────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Options for FORM are

```text
┌────┬─────────────────┐
│ GS │ General Section │
├────┼─────────────────┤
│ OP │ Open Profile    │
├────┼─────────────────┤
│ CP │ Closed Profile  │
└────┴─────────────────┘
```

2. Keywords for describing the arbitrary cross-section:

        See link for table.

3. Stress data recovery points are selected automatically from all points of a PBRSECT with GS form. The points with maximum and/or minimum coordinates in X1 and/or X2 axes are more likely to be picked. For PBRSECT with CP or OP form, the stress data recovery points are selected from points with computed coordinates that actually encircle the profile. Similar to GS form, the points with extreme coordinates are more likely to be selected.
4. Only the POINT entry ID should be listed under SET1 or SET3 entries which, in turn, are referenced by OUTP, INP and BRP. In addition, the POINT entry for defining an arbitrary beam cross section must have the CP and X3 fields left blank.
5. See Remark   of the PBMSECT entry for the theory used to compute the cross-sectional properties.

    ![bulkp06778.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06778.jpg?_LANG=enus)

    Figure 0-81 Arbitrary Cross-Section Definition

6. PBRSECT is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBRSECT property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBAR, PBARL, PBRSECT entries.
