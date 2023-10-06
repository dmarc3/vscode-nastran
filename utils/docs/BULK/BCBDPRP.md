## [BCBDPRP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBDPRP.xhtml) - Contact Body Parameters in SOLs 101 and 400

Defines contact body parameters used in SOLs 101 and 400 only. The parameters defined here are referenced by the BCBODY1 entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBDPRP PID             PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    +       
+       PARAM4  VAL4    PARAM5  VAL5    -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBDPRP 90              FRIC    0.05    ISTYP   0                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ PID       │ Parameter identification number (Integer > 0).                           │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ PARAMi    │ Name of a parameter. Allowable names are given in Table 9-3 (Character). │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ VALi      │ Value of a parameter. See Table 9-3 (Real or Integer).                   │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```

Table 9-3    Contact Body Parameters in SOLs 101 and 400

```text
┌────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Name   │ Description, Type and Value (Default is 0 for integer, 0.0 for Real Unless Otherwise Indicated)    │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNC    │ Exponent associated with the natural convective heat flow for near field behavior. (Real or        │
│        │ Integer; Default = 1.0). If Real, the value entered is the exponent associated with the near field │
│        │ natural convection coefficient. If Integer, the value entered is the ID of a TABLEM1 OR TABLEM2    │
│        │ entry specifying the exponent associated with the near field natural convection coefficient vs     │
│        │ temperature or a TABL3D entry specifying the exponent associated with the near field natural       │
│        │ convection coefficient vs temperature and possibly other variables.                                │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNCE   │ Exponent associated with natural convection heat flow to the environment. (Real or Integer;        │
│        │ Default = 1.0). If Real, the value entered is the exponent associated with the environment natural │
│        │ convection coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry      │
│        │ specifying the exponent associated with the environment natural convection coefficient vs          │
│        │ temperature or a TABL3D entry specifying the exponent associated with the environment natural      │
│        │ convection coefficient vs temperature and possibly other variables.                                │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNL    │ Exponent associated with the nonlinear convective heat flow for near field behavior. (Real or      │
│        │ Integer; Default = 1.0) If Real, the value entered is the exponent associated with the near field  │
│        │ nonlinear convection coefficient. If Integer, the value entered is the ID of a TABLEM1 OR TABLEM2  │
│        │ entry specifying the exponent associated with the near field nonlinear convection coefficient vs   │
│        │ temperature or a TABL3D entry specifying the exponent associated with the near field nonlinear     │
│        │ convection coefficient vs temperature and possibly other variables.                                │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNLE   │ Exponent associated with the nonlinear convective heat flow to the environment. (Real or Integer;  │
│        │ Default = 1.0) If Real, the value entered is the exponent associated with the environment          │
│        │ nonlinear convection coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2  │
│        │ entry specifying the exponent associated with the environment nonlinear convection coefficient vs  │
│        │ temperature or a TABL3D entry specifying the exponent associated with the environment nonlinear    │
│        │ convection coefficient vs temperature and possibly other variables.                                │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CFILM  │ Heat transfer coefficient (film) to environment. (Real or Integer, Default = 0.0) If Real, the     │
│        │ value entered is the film coefficient. If Integer, the value entered is the ID of a TABLEM1 or     │
│        │ TABLEM2 entry specifying the heat transfer coefficient vs temperature or a TABL3D entry specifying │
│        │ the film coefficient vs temperature and possibly other variables.                                  │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMB    │ Heat capacity of the rigid body, when entered as a geometric entity with an associated scalar      │
│        │ point. (Real > 0.0; Default = 0.0) For nonzero values, a grounded CDAMP4 element with the scalar   │
│        │ point on its first side is generated internally which obtains this capacity.                       │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMS    │ Heat capacity of the environment, when associated with a scalar point. (Real > 0.0; Default = 0.0) │
│        │ For nonzero values a grounded CDAMP4 element with the scalar point on its first side is generated  │
│        │ internally which obtains this capacity.                                                            │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COPTB  │ Flag to indicate how body surfaces may contact. See Remark 2. on the BCONPRG entry. (Integer;      │
│        │ Default = 0)                                                                                       │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EMISS  │ Emissivity for radiation to the environment or near thermal radiation. (Real or Integer; Default = │
│        │ 0.0) If real, the value entered is the emissivity. If Integer, the value entered is the ID of a    │
│        │ TABLEM1 or TABLEM2 entry specifying the emissivity vs temperature or a TABL3D entry specifying the │
│        │ emissivity vs temperature and possibly other variables.                                            │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRIC   │ Friction coefficient. If the value is an integer, it represents the ID of a TABLEM1, TABLEM2 or    │
│        │ TABL3D, i.e., a temperature-dependent or multi-dimensional table. (Real ≥ 0.0 or Integer > 0;      │
│        │ Default = 0.0) When a grid point contacts a rigid body, the coefficient of friction associated     │
│        │ with the rigid body is used. When a grid point contacts a deformable body, the average of the      │
│        │ coefficients for the two bodies are used. In general, entering the friction coefficient for a      │
│        │ contact body pair via a BCTABLE and BCONECT/BCONPRP is strongly recommended.                       │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HBL    │ Separation distance dependent thermal convection coefficient. (Real or Integer; Default = 0.0) If  │
│        │ Real, the value entered is the separation distance dependent thermal convection coefficient. If    │
│        │ Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry specifying the convection       │
│        │ coefficient vs temperature or a TABL3D entry specifying the convection coefficient vs temperature  │
│        │ and possibly other variables.                                                                      │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HCT    │ Contact heat transfer coefficient. (Real or Integer; Default = 0.0) If Real, the value entered is  │
│        │ the contact heat transfer coefficient. If Integer, the value entered is the ID of a TABLEM1 or     │
│        │ TABLEM2 entry specifying the contact heat transfer coefficient vs temperature or a TABL3D entry    │
│        │ specifying the contact heat transfer coefficient vs temperature and possibly other variables. See  │
│        │ Remark 3.                                                                                          │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HCV    │ Convection coefficient for near field behavior. (Real or Integer; Default = 0.0) If Real, the      │
│        │ value entered is the near field convection coefficient. If Integer, the value entered is the ID of │
│        │ a TABLEM1 or TABLEM2 entry specifying the near field convection coefficient vs temperature or a    │
│        │ TABL3D entry specifying the near field convection coefficient vs temperature and possibly other    │
│        │ variables.                                                                                         │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNC    │ Natural convection coefficient for near field behavior. (Real or Integer; Default = 0.0) If Real,  │
│        │ the value entered is the near field natural convection coefficient. If Integer, the value entered  │
│        │ is the ID of a TABLEM1 or TABLEM2 entry specifying the near field natural convection coefficient   │
│        │ vs temperature or a TABL3D entry specifying the near field natural convection coefficient vs       │
│        │ temperature and possibly other variables.                                                          │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNCE   │ Natural convection coefficient for heat flow to the environment. (Real or Integer, Default = 0.0)  │
│        │ If Real, the value entered is the environment natural convection coefficient. If Integer, the      │
│        │ value entered is the ID of a TABLEM1 or TABLEM2 entry specifying the environment natural           │
│        │ convection coefficient vs temperature or a TABL3D entry specifying the environment natural         │
│        │ convection coefficient vs temperature and possibly other variables.                                │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNL    │ Heat transfer coefficient for nonlinear convective heat flow for near field behavior. (Real or     │
│        │ Integer; Default = 0.0) If Real, the value entered is the near field nonlinear convection          │
│        │ coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry specifying the  │
│        │ near field nonlinear convection coefficient vs temperature or a TABL3D entry specifying the near   │
│        │ field nonlinear convection coefficient vs temperature and possibly other variables.                │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNLE   │ Heat transfer coefficient for nonlinear convective heat flow to the environment. (Real > 0.0 or    │
│        │ Integer; Default = 0.0) If Real, the value entered is the environment nonlinear convection         │
│        │ coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry specifying the  │
│        │ environment nonlinear convection coefficient vs temperature or a TABL3D entry specifying the       │
│        │ environment nonlinear convection coefficient vs temperature and possibly other variables.          │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDSPL  │ Controls geometric smoothing of boundary of deformable body option. (Integer; Default = 0) =0 or   │
│        │ blank, discrete geometric representation. >0 the surface of the body is smoothed out with splines  │
│        │ (2D) or Coons surfaces (3D) and discontinuity edges/corners are being defined by using abs (IDSPL) │
│        │ as the ID of the BLSEG entries. If BLSEG with ID=abs(IDSPL) does not exist, the whole body is      │
│        │ smoothed and there are no user-defined discontinuity corners(2D) or edges(3D). (See Remark 1.<0    │
│        │ Same as IDSPL>0. Furthermore, additional discontinuity edges are being generated automatically if  │
│        │ the difference in patch normals exceeds the value of SANGLE.                                       │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ISTYP  │ Check of contact conditions. (Integer > 0; Default = 0 for all solutions) ISTYP is not necessary   │
│        │ in segment-to-segment contact. For a deformable body: =0 check each body, versus the other. =2     │
│        │ double-sided contact with automatic optimization of contact constraint equations (this option is   │
│        │ known as “optimized contact”). Note that ISTYP is supported with ISEARCH=0 in BCTABLE or BCONPRG   │
│        │ only.                                                                                              │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ITYPE  │ An option entry for heat transfer only (Integer; no Default) 1 - Heat sink (rigid body) 2 -        │
│        │ Deformable body (with heat conduction) 4 - Heat conduction body (heat-rigid body) (Not supported   │
│        │ in SOL 400 coupled thermal-mechanical analysis, i.e. the same contact body with ITYPE=4 cannot be  │
│        │ used in mechanical analysis of SOL 400.)                                                           │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDNOD │ Mid-side node projection flag. (Integer > 0; Default = 0) When MIDNOD > 0 and IDSPL ≠ 0, the mid-  │
│        │ side grid of quadratic elements are projected onto the selected spline surfaces. This operation is │
│        │ performed before the contact process starts and it may change the location of grids in contact     │
│        │ bodies. It may operate in combination with the initial stress-free contact. Only used if  IDSPL is │
│        │ not zero.                                                                                          │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SANGLE │ Threshold for automatic discontinuity detection in degrees. (Real; Default = 60.0) Used for        │
│        │ geometric smoothing option in SOL 400 only. SANGLE is not used and is always set to 0.0 when       │
│        │ IDSPL≥ 0.                                                                                          │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TBODY  │ Body temperature. (Real or Integer; Default = 0.0) If Real, the value entered is the body          │
│        │ temperature. If Integer, the value entered is the ID of a TABLED1 or TABLED2 entry specifying the  │
│        │ body temperature vs time or a TABL3D entry specifying the body temperature vs time and possibly    │
│        │ other variables. When entered as a negative integer, its absolute value is a scalar point          │
│        │ identification number. If a scalar point is specified on this entry, it need not be defined on an  │
│        │ SPOINT entry. See Remark 8.                                                                        │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TSINK  │ Environment sink temperature. (Real or Integer, Default = 0.0) If Real, the value entered is the   │
│        │ sink temperature. If Integer, the value entered is the ID of a TABLED1 or TABLED2 entry specifying │
│        │ temperature vs time or a TABL3D entry specifying the sink temperature vs time and possibly other   │
│        │ variables. When entered as a negative integer its absolute value is a scalar point identification  │
│        │ number. If a scalar point is specified on this entry, it need not be defined on an SPOINT entry.   │
│        │ See Remark 8.                                                                                      │
└────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. When IDSPL is greater than 1, these nodes are entered in pairs. For a quad surface (for example, CQUAD4 or edge of a CHEXA) usually 4 sets of nodal pairs are needed to describe the surface. For example, a CQUAD4 with grid numbering 1,2,4,3 would need pairs of nodes, 1,2 2,4 4,3 3,1. The nodal pairs may be entered in any order. See  MSC Nastran Nonlinear User’s Guide , Chapter 9, Contact for more details.
2. For hard contact, with HGLUE=1 (see BCONPRP for the meaning of HGLUE):
     - The temperature of the contacting grid is tied to the temperatures of the contacted element face or the temperature of the rigid geometry when it has a scalar point associated with it.
     - The temperature of the contacting grid is set to the rigid geometry temperature when it has no scalar point associated with it.

```text
┌───────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ “Glued” thermal contact can result in overshoot of the temperatures at the interface, in         │
│       │ particular, if two bodies that have non-uniform initial temperatures are placed in contact. The  │
│       │ overshoot effect may be damped somewhat if one uses a near contact distance with some convective │
│       │ heat transfer.                                                                                   │
└───────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

3. For hard contact, with HGLUE=0:

The convective heat flow per unit area over the two interfaces is given by:

![bulkab02101.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02101.jpg?_LANG=enus)  

where T A  is the contacting grid temperature and T B   is the face temperature in the contact point in case of a meshed body or the T BODY   temperature in case of a rigid geometry.

It is recommended to enter the HCT value on the BCONPRP Bulk Data entry, since it generally applies to body pairs and is not a property of a single body.

4. For near contact:

![bulkab02103.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02103.jpg?_LANG=enus)  

![bulkab02105.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02105.jpg?_LANG=enus)  

![bulkab02107.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02107.jpg?_LANG=enus)  

![bulkab02109.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02109.jpg?_LANG=enus)  

![bulkab02111.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02111.jpg?_LANG=enus)  

where the last term is only activated when HBL ≠ 0, T A  is the contacting grid temperature and T B   is the face temperature in the contact point in case of a meshed body or the T BODY temperature in case of a rigid geometry.

It is recommended to enter the near contact heat transfer coefficients and the corresponding exponents on the BCONPRP Bulk Data entry, since they generally apply to body pairs and are not properties of a single body.

5. For no contact:

![bulkab02113.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02113.jpg?_LANG=enus)  

![bulkab02115.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02115.jpg?_LANG=enus)  

![bulkab02117.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02117.jpg?_LANG=enus)  

![bulkab02119.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02119.jpg?_LANG=enus)  

6. The heat transfer coefficients and associated exponents can all be temperature dependent, when they are entered as an integer value. This integer value is the table ID of a TABLEM1, TABLEM2 or TABL3D entry (formulas are not supported on TABL3D).

7. The T  and T   temperatures can be time dependent when they are entered as a positive integer value. This integer value is the table ID of a TABLED1, TABLED2 or TABL3D entry (formulas are not supported on TABL3D).

8. TBODY entries only apply to rigid bodies (i.e., RIGID as the BEHAV value in BCBODY1 entry). TSINK entries only apply to deformable bodies (meshed regions with DEFORM or HEAT as the BEHAV value in BCBODY1 entry).

