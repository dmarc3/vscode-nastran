## [HYDROS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HYDROS.xhtml) - Hydrostatic Pressure Loading on Surface and Faces of Shell or Solid Elements using element or grid sets

Defines a hydrostatic pressure load on a face of a CHEXA, CPENTA, CPYRAM, CTETRA, CTRIA3, CTRIA6, CTRIAR, CQUAD4, CQUAD8, or CQUADR element using element set data.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HYDROS  SID     PNOM    RHO     G       SETE    SETG    PLD4    OVRD            
        CID/GRD HGHTB   HABOV   CNTL                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HYDROS  77      55.     0.08    17.     300             1                       
        200             97.     83                                              
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PNOM      │ Nominal or atmosphere pressure. If G=0.0, PNOM only is applied. (Real; Default = 0.0)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Mass density. (Real > 0.0)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Acceleration (e.g. of gravity) in the direction from HABOV toward the origin defined by the        │
│           │ CID/GRD field. (Real; Default = 1.0)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETE      │ The ID of a SET3 entry using (DES= ELEM) or SET1 to identify the element IDs of structure elements │
│           │ at fluid-structure interface used for hydrostatic loading. (Integer ≥0)                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETG      │ The ID of a SET3 entry using (DES= GRID) or SET1 to identify the element grid IDs of structure     │
│           │ elements at fluid-structure interface used for hydrostatic loading. (Integer ≥0)                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLD4      │ 0 - default (no punch); 1 - Punch the resulting PLOAD4 entries. (Integer ≥ 0)                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OVRD      │ 0-default. If PARAM, INREL, is present and G not equal to 1.0, then a fatal error message will be  │
│           │ issued. 1 - Allow non unit value of G.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID/GRD   │ Coordinate ID of a reference coordinate system to measure the coordinate z-direction. If Integer ≥ │
│           │ 0; a coordinate system is used. If Integer < 0; a GRID ID is used with the z-direction of the      │
│           │ GRID, CD field. Note: A spherical coordinate system will result in a fatal. See Remark 1.;         │
│           │ (Integer - default 0 -basic). Note: A spherical coordinate system will result in a fatal error.    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HGHTB     │ The z-distance to the lowest fluid point measured from reference origin. (Real; Default = 0.0)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HABOV     │ The height of the fluid above the lowest point measured in the z-direction from reference origin.  │
│           │ (Real; Default = 0.0)                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNTL      │ SET3 ID of control grids to get pressure application direction. (Integer ≥0, see Remark 2.).       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The HYDROS entry will internally be converted to an equivalent set of PLOAD4 entries with the same load SID.

![hydros_img1.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/hydros_img1.png?_LANG=enus)

![hydros_img2.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/hydros_img2.png?_LANG=enus)

2. The pressure direction can be defined with or without CNTL entry in HYDROS card for closed and open geometries.

     • For closed geometry like sphere, cylinder, cube, etc., SET3 id should have only one grid defined inside the geometry. Use of inside grid, will result in internal pressure to be applied. If the external pressure needs to be applied, then change the sign of Pnom and Gravity in the HYDROS card. (P = Pnom+ ρ .g.h)

     • For open geometry, the direction of the pressure is based on the relation between the direction of control point grid to the element and the element normal. Refer 1(a) and 1(b) for direction of pressure for a open geometry.

     • Without control point defined in the HYDROS card the pressure direction is aligned with the element normal direction. If the element normal is outward, then the pressure direction is outward and vice versa.

![hydros_remark_pressuredirection.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/hydros_remark_pressuredirection.png?_LANG=enus)

