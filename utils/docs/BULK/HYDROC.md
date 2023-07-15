## [HYDROC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HYDROC.xhtml) - Hydrostatic Pressure Loading on Surface and Faces of Shell or Solid Elements using fluid cavities.

Defines a hydrostatic pressure load on a face of a CHEXA, CPENTA, CPYRAM, CTETRA, CTRIA3, CTRIA6, CTRIAR, CQUAD4, CQUAD8, or CQUADR element using fluid cavity data. The HYDROC entry is NOT supported in SOL101 because SOL 101 does not support the Fluid Structure Interface.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HYDROC  SID     PSOLID  PNOM    G       PCH     PLD4    OVRD                    
        CID/GRD HGHTB   HABOV                                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HYDROC  66      33      42.     980.            1                               
        99      0.      10.                                                     
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSOLID    │ PSOLID ID of the cavity. Fluid density will be obtained from the associated MAT10 entry. (Integer  │
│           │ > 0); HYDROC requires ACMODL,DIFF (the default value).                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNOM      │ Nominal or atmosphere pressure. If G=0.0, PNOM only is applied. (Real; default = 0.0)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Acceleration (e.g. of gravity) in the direction from HABOV toward the origin defined by the        │
│           │ CID/GRD field. (Real; Default = 1.0)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PCH       │ 0 - default (no punch); 1 - Punch Set of structural grids. 2 - Punch Set of structural elements. 3 │
│           │ - Punch both structural grids and structural elements. (Integer ≥0)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLD4      │ 0 - default (no punch); 1 - Punch the resulting PLOAD4 entries. (Integer ≥ 0)                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OVRD      │ 0-default. If PARAM, INREL, is present and G not equal to 1.0, then a fatal error message will be  │
│           │ issued. 1 - Allow non unit value of G.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID/GRD   │ Coordinate ID of a reference coordinate system to measure the coordinate z-direction. If Integer ≥ │
│           │ 0; a coordinate system ID is used. If Integer < 0; a GRID ID is used with the z-direction of the   │
│           │ GRID, CD field. Note: A spherical coordinate system will result in a fatal error. See Remark 1.;   │
│           │ (Integer - default 0 -basic).                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HGHTB     │ The z-distance to the lowest fluid point measured from reference origin. See Remark 1.. (Real;     │
│           │ Default = 0.0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HABOV     │ The height of the fluid above the lowest point measured in the z-direction from reference origin.  │
│           │ See Remark 1. (Real; Default = 0.0)                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. On the HYDROC entry, HGHTB along with the z-coordinate direction, are used to determine the location of the “bottom” of the fluid body in the case where the fluid cavity is full and there is no free surface.
In the case where a free fluid surface has been modeled in the cavity, CID/GID and HGHTB are for reference only. The lowest fluid level is determined as the lowest wetted grid in the FSI coupling measure in the direction defined by CID/GID. From the FSI coupling, free surface formed by examining wetted grids may not be perpendicular to the z-direction of CID/GID. Hence, HABOV will be considered as average free surface and hydrostatic pressure will be computed with respect to HABOV. However, a fatal message will occur if the average free surface specified by HABOV is significantly above the free surface of wetted grids. Also note that some wetted grids/elements may not get loaded if HABOV is too low.

![hydroc_img1.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/hydroc_img1.png?_LANG=enus)

2. The HYDROC entry will internally be converted to an equivalent set of PLOAD4 entries with the same load SID

3. Each fluid cavity should have a unique PSOLID entry as HYDROC uses the PSOLID to identify the cavity.

4. The PNOM is applied only from fluid surface to bottom of fluid.

5. HYDROC interaction with the Fluid Structure Interface (FSI) algorithm is shown in the two figures below. The top figure shows a column of fluid over some structural elements. The column of fluid is 30 units high, however, only its bottom surface is in contact with structural elements. Therefore, the FSI will only see a fluid that is 10 units high. A HYDROC entry for this model, with a HABOV = 50 units would fail to compute any hydrostatic loading, because 50 units is well outside the tolerance of the FSI interface, which is at 30 units.

![hydroc_img2.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/hydroc_img2.png?_LANG=enus)

     The second figure shows the same fluid column, but a layer of shell elements has been laid on top of the fluid column.

![hydroc_img3.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/hydroc_img3.png?_LANG=enus)

     In this case, the FSI sees a column of fluid 50 units high. Thus a HABOV = 50 units will generate PLOAD4 entries using a height of 30 units for the fluid. For this model, any HABOV with values (30 units ≤ HABOV ≤ 50 units) will yield valid PLOAD4 entries on the fluid structure interface of the structural solid elements with the height used depending on the value of HABOV.

6. The figures below show additional HYDROC PNOM rules associated with the FSI interface. Also note how fluid cavities are defined by PSOLID ID.

![hydroc_img4.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/hydroc_img4.png?_LANG=enus)

![hydroc_img5.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/hydroc_img5.png?_LANG=enus)

     Staggered grid for flooding simulation.

