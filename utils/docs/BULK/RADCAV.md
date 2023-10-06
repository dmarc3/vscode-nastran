## [RADCAV](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RADCAV.xhtml) - Radiation Cavity Identification

Identifies the characteristics of each radiant enclosure.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADCAV  ICAVITY ELEAMB  SHADOW  SCALE   PRTPCH  NFECI   RMAX    NCOMP   +       
+       SET11   SET12   SET21   SET22   SET31   SET32   etc.                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADCAV  1       1                                       .99                     
        3       5       4       5       7       5                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICAVITY   │ Unique cavity identification number associated with enclosure radiation.  (Integer > 0)            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELEAMB    │ CHBDYi surface element identification number for radiation if the view factors add up to less than │
│           │ 1.0.  (Unique Integer  >  0 among all CHBDYi elements or blank.)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SHADOW    │ Flag to control third body shading calculation during view factor calculation for each identified  │
│           │ cavity.  (Character = “YES” or “NO”; Default = “YES”)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE     │ View factor that the enclosure sum will be set to if a view factor is greater than 1.0.  (0.0      │
│           │ < Real < 1.0; Default = 0.0)                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRTPCH    │ Facilitates the blocking of view factor printing and punching onto RADLST and RADMTX entries.      │
│           │  (Integer = 0, 1, 2, 3, 4, or 5; Default = blank):                                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌───────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ NFECI │ Controls whether finite difference or contour integration methods are to be used in the       │
│       │ calculation of view factors in the absence of a VIEW3D Bulk Data entry.  (Character = “FD” or │
│       │ “CONT”; See Remark 4. for default.)                                                           │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ RMAX  │ Subelement area factor.  See Remark 5. (Real > 0.0; Default = 0.1)                            │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NCOMP │ Total number of computational element for one-half ring. See Remark 8. (Default = 32)         │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETij │ Set identification pairs for the calculation of global view factors. Up to 30 pairs may be    │
│       │ specified (i = 1 to 30 and j = 1 to 2). (Integer > 0)                                         │
└───────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For the surfaces of an incomplete enclosure (view factors add up to less than 1.0), a complete enclosure may be achieved (SUM = 1.0) by specifying an ambient element, ELEAMB.  When multiple cavities are defined, each cavity must have a unique ambient element if ambient elements are desired.  No elements can be shared between cavities.
2. Third-body shadowing is ignored in the cavity if SHADOW = “NO”.  In particular, if it is known a priori that there is no third-body shadowing, SHADOW = NO overrides KSHD and KBSHD fields on the VIEW Bulk Data entry as well as reduces the calculation time immensely.
3. The view factors for a complete enclosure may add up to slightly more than 1.0 due to calculation inaccuracies.  SCALE can be used to adjust all the view factors proportionately to acquire a summation equal to the value specified for SCALE.  If SCALE is left blank or set to 0.0, no scaling is performed.
4. If the VIEW3D Bulk Data entry is not specified, the view factors are calculated using finite difference and contour integration methods.  If NFECI = “FD”, then all view factors are calculated using the finite difference technique.  NFECI = “CONT” invokes contour integration for all view factor calculations.  If NFECI is blank, the program selects a method to use between any two particular elements based on RMAX.
5. The comparison value for RMAX is equal to  ![bulkqrs07358.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07358.jpg?_LANG=enus)  where  ![bulkqrs07360.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07360.jpg?_LANG=enus) is the area of a subelement and  ![bulkqrs07362.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07362.jpg?_LANG=enus)  is the distance between two subelements r and s for which view factors are being computed.  When NFECI is blank, the program selects the contour integral method only if  ![bulkqrs07364.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07364.jpg?_LANG=enus)
6. When a number of elements are grouped together and considered as a conglomerate surface, view factors can be calculated between these groups.  These are referred to as global view factors.  The SET1 Bulk Data entry is used to define the conglomerate.  When using this feature, negative EIDs are not allowed.
7. If a RADLST and RADMTX entry exists for this cavity ID, new view factors are not computed and the existing RADLST and RADMTX are used in the thermal analysis.
8. The VIEW3D Bulk Data entry must be specified for the calculation of axisymmetric view factors. The process relies on the internal construction of a semi-circle of computational elements. NCOMP specifies the number of such elements desired.
