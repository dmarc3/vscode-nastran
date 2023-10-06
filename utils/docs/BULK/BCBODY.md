## [BCBODY](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBODY.xhtml) - Flexible or Rigid Contact Body in 2D and 3D

Defines a flexible or rigid contact body in 2D or 3D used in SOLs 101, 400, and 700 only. The BCBODY1 option is the preferred method to defining contact bodies for SOL 400.

Use only as many forms (i.e. HEAT, PATCH3D, BEZIER, POLY, CYLIND, SPHERE, NURBS2, or NURBS) as necessary to describe the body (if rigid). Deformable bodies are described using as many standard elements as necessary and are specified by the BSID field with BEHAV=DEFORM (only the first line should be entered for deformable bodies). Unless shrink fit its being analyzed, deformable bodies should not be inside other deformable bodies when the thickness of each body is taken into account.

The “RIGID” header may be used with any of the other rigid entries but only once per body. Also, only one of the character entries after RIGID (HEAT, PATCH3D, NURBS, etc.) should be entered for any particular body. See Remark  4.  for an important note regarding how to define the outward direction of rigid bodies (which must point towards a flexible body for contact to occur).

#### Format: (SOLs 101 and 400 only)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBODY  BID     DIM     BEHAV   BSID    ISTYP   FRIC    IDSPL   CONTROL +        
+       NLOAD   ANGVEL  DCOS1   DCOS2   DCOS3   VELRB1  VELRB2  VELRB3  +        
+       “ADVA...SANGLE  COPTB           MIDNOD                          +        
+       “RIGID” CGID    NENT    --- R...                                +
+       “APPROV”A       N1      N2      N3      V1      V2      V3      +        
+       “GROW”  GF1     GF2     GF3     TAB-GF1 TAB-GF2 TAB-GF3         +        
+       “HEAT”  CFILM   TSINK   CHEAT   TBODY   HCV     HNC     ITYPE   +        
+               BNC     EMISS   HBL     HNL     BNL     HNLE    BNLE    +        
+               HNCE    BNCE    CMB     CMS                             +        
+       “PATC...NPATCH                                                  +        
+               IDP     G1      G2      G3      G4                      +        
+               IDP     G1      G2      G3      G4                      +        
+               etc.    (npat...                                        +        
+       “BEZIER”NP1     NP2     NSUB1   NSUB2                           +        
+               G1      G2      G3      G4      etc             (np1*...+        
+       “NURB...NPTU    NORU    NSUB                            (2D C...+        
+               G1 or X1G2 or Y1G3      G4 or X2G5 or Y2G6      [abs(...See R...
+               Homo1   Homo2   Homo3   Homo4   etc.            (nptu...+        
+               Knot1   Knot2   Knot3   Knot4   Knot5   etc.    (nptu...+        
+       “NURBS” NPTU    NPTV    NORU    NORV    NSUBU   NSUBV   NTRIM   +        
+               G1 or X1G2 or Y1G3 or Z1G4 or X2G5 or Y2G6 or Z2G7      See R...
+               G8 or X3G9 or Y3G10 o...etc.            [abs(...See R...+        
+               Homo1   Homo2   Homo3   Homo4   Homo5   Homo6   Homo7   +        
+               Homo8   Homo9   etc.                    (nptu...        +        
+               Knot1   Knot2   Knot3   Knot4   Knot5   Knot6   Knot7   +       
+               Knot8   Knot9   etc.                    (nptu...        +        
+               IDtrim  NPTUtrimNORUtrimNSUBtrim        (repe...        +        
+                       Xisop...Yisop...                (NPTU...        +        
+                       Homo1   Homo2   Homo3   etc     (NPTU...        +        
+                       Knot1   Knot2   Knot3   etc.    (NPTU...                
```

#### Format: (SOL 700 only)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBODY  BID     DIM     BEHAV   BSID                                            
```

#### Examples (of Deformable and Rigid Contact):

#### Example 1 -- Typical deformable body

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBODY  1               DEFORM  101     0       .05                             
```

#### Example 2 -- Simple 4-node rigid patch (see Remark 4 for rigid bodies)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBODY  2               RIGID   102     0       .08                     +       
+       PATCH3D 1                                                       +       
+               1       101     102     103     104                             
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID          │ Contact body identification number referenced by BCTABLE, BCHANGE, or BCMOVE. (Integer > 0;        │
│              │ Required)                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIM          │ Dimension of body. (Character; Default= 3D) (Ignored by SOL 700) DIM=2D planar body in x-y plane   │
│              │ of the basic coordinate system, composed of 2D elements or curves. DIM=3D any 3D body composed of  │
│              │ rigid surfaces, shell elements or solid elements.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHAV        │ Behavior of curve or surface (Character; Default = DEFORM) (Ignored by SOL 700) DEFORM body is     │
│              │ deformable, RIGID body is rigid, SYMM body is a symmetry body, HEAT indicates body is a heat-rigid │
│              │ body. See Remark 4. for Rigid Bodies.                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BSID         │ Identification number of a BSURF or BCPROP entry if BEHAV=DEFORM. For SOL 700 the BSID may also be │
│              │ the identification number of a BCBOX, BCMATL, BCSEG, BCGRID or BCELIPS entry. (Integer > 0)        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ISTYP        │ Check of contact conditions. (Integer > 0; Default = 0 for all solutions) ISTYP is not necessary   │
│              │ in segment-to-segment contact. For a deformable body: =0 check each body, versus the other . =2    │
│              │ double-sided contact with automatic optimization of contact constraint equations (this option is   │
│              │ known as “optimized contact”). Note that ISTYP is supported with ISEARCH=0 in BCTABLE or BCONPRG   │
│              │ only.                                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRIC         │ Friction coefficient. If the value is an integer, it represents the ID of a TABLEM1, TABLEM2 or    │
│              │ TABL3D, i.e., a temperature-dependent or multi-dimensional table. (Real ≥ 0.0 or Integer > 0;      │
│              │ Default = 0.0) When a grid point contacts a rigid body, the coefficient of friction associated     │
│              │ with the rigid body is used. When a grid point contacts a deformable body, the average of the      │
│              │ coefficients for the two bodies are used. In general, entering the friction coefficient for a      │
│              │ contact body pair via a BCTABLE and BCONECT/BCONPRP is strongly recommended.                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDSPL        │ Controls geometric smoothing of boundary of deformable body. (Integer; Default = 0) =0 or blank,   │
│              │ discrete geometric representation >0 the surface of the body is smoothed out with splines (2D) or  │
│              │ Coons surfaces (3D) and discontinuity edges/corners are being defined by using abs (IDSPL) as the  │
│              │ ID of the BLSEG entries. If BLSEG with ID=abs(IDSPL) does not exist, the whole body is smoothed    │
│              │ and there are no user-defined discontinuity corners(2D) or edges(3D). (See Remark 7.) <0 Same as   │
│              │ IDSPL>0. Furthermore, additional discontinuity edges are being generated automatically if the      │
│              │ difference in patch normals exceeds the value of SANGLE.                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONTROL      │ = -1 for position control. The coordinates of the final position of GRID Point defined in CGID is  │
│              │ given in VELRBi in the following line. = 0 for velocity control (default). = positive number for   │
│              │ "load control". The positive number entered is the grid number defined in CGID at which            │
│              │ translational forces or SPCD are applied. (Note: The rotation in this case is defined by NLOAD in  │
│              │ the following line.)                                                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NLOAD        │ Enter a positive number if "load controlled" and rotations are allowed (Integer). The positive     │
│              │ number is the grid number where the moments or rotations are applied. The rotations are specified  │
│              │ using SPCD at grid ID NLOAD and can be specified using dof's 1-3 (for rotation about x, y, z       │
│              │ respectively), or by dof's 4-6 (for rotation about x, y, z respectively). Note: This rotation      │
│              │ takes the position of the grid point defined in CGID field as the center of rotation.              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANGVEL       │ Angular velocity or angular position about local axis through center of rotation. If the value is  │
│              │ an integer it represents the ID of a TABLED1, TABLED2 or TABL3D, i.e., a time-dependent or multi-  │
│              │ dimensional table; however, no log scales, only linear scales. (Real or Integer; Default = 0.0)    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DCOSi        │ Components of direction cosine of local axis if ANGVEL is nonzero. If the value is an integer, it  │
│              │ represents the ID of a TABLED1, TABLED2 or TABL3D, i.e., a time-dependent or multi-dimensional     │
│              │ table; however, no log scales, only linear scales. (Real or Integer; Default=0.0) In 2D contact    │
│              │ only DCOS3 is used and the Default is 1.0.                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VELRBi       │ Translation velocity or final position (depending on the value of CONTROL) of rigid body at the    │
│              │ grid point defined in CGID filed. For velocity control only, if the value is an integer, it        │
│              │ represents the ID of TABLED1, TABLED2 or TABL3D, i.e., a time-dependent or multi-dimensional       │
│              │ table; however, no log scales, only linear scales.  Only VELRB1 and VELRB2 are used in 2D contact. │
│              │ (Real or Integer; Default = 0.0)                                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “ADVANCE”    │ The entries for this continuation line are for advanced options starting with MD Nastran R2.       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SANGLE       │ Threshold for automatic discontinuity detection in degrees. (Real; Default = 60.0) Used for SPLINE │
│              │ option in SOL 400 only. SANGLE is not used when IDSPL ³ 0.                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COPTB        │ Flag to indicate how body surfaces may contact. See Remark 9. on the BCTABLE entry. (Integer;      │
│              │ Default = 0)                                                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDNOD       │ Mid-side node projection flag. (Integer > 0; Default = 0) When MIDNOD > 0 and IDSPL0, the mid-side │
│              │ grid of quadratic elements are projected onto the selected spline surfaces. This operation is      │
│              │ performed before the contact process starts and it may change the location of grids in contact     │
│              │ bodies. It may operate in combination with the initial stress-free contact.                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “RIGID”      │ The entries of this continuation line are for the rigid body description. See Remark 4.            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CGID (5,i)   │ Grid point identification number defining the initial position of the reference point of the rigid │
│ i=1,2,3      │ body or the point where a concentrated force or moment is applied                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NENT         │ Number of geometric entities to describe this rigid surface. A rigid surface can be described by   │
│              │ multiple sets of patches, nurbs, etc. For example, if it takes 3 sets of PATCH3D entries to        │
│              │ describe a rigid surface, then set NENT=3.  (Integer > 0; Default = 1)                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Rigid Body   │ Name associated with the rigid body. (Default is blank, 24-characters maximum)                     │
│ Name         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “APPROV”     │ The entries of this continuation line are for approaching velocity to establish initial contact.   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A            │ Angular velocity about local axis through center of rotation. (Real, Default = 0.0)                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni           │ Components of direction cosines of local axis of the angular velocity. The N1, N2, N3 define the   │
│              │ axis through the point defined in the “RIGID”, CGID entry. Only N1 and N2 are used in 2D contact.  │
│              │ (Real, Default = 0.0)                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Vi           │ V1, V2 and V3 define the three components of the approaching velocity. Only V1 and V2 are used in  │
│              │ 2D contact. (Real; Default = 0.0)                                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “GROW”       │ The entries of this continuation line are for rigid body growth. If tables are used for growth,    │
│              │ they should either be TABLED1, TABLED2(growth vs time) or TABL3D (growth vs one or more            │
│              │ variables).                                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GFi          │ Components of Growth factor of rigid body in the coordinate system of the “RIGID”, CGID entry.     │
│              │ (Real, Default = 1.0)                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAB-GFi      │ Tabled IDs for growth factor of rigid body in the coordinate system of the “RIGID”, CGID entry.    │
│              │ (Integer > 0 or blank, Default is blank)                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “HEAT”       │ The entries of this continuation line(s) are for contact in heat transfer in a pure thermal        │
│              │ analysis or in a coupled thermal/structural analysis. In a pure structural analysis they are       │
│              │ ignored.                                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CFILM        │ Heat transfer coefficient (film) to environment. (Real or Integer, Default = 0.0) If Real, the     │
│ (9,1)/(10,1) │ value entered is the film coefficient. If Integer, the value entered is the ID of a TABLEM1 or     │
│              │ TABLEM2 entry specifying the heat transfer coefficient vs temperature or a TABL3D entry specifying │
│              │ the film coefficient vs temperature and possibly other variables.                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TSINK        │ Environment sink temperature. (Real or Integer, Default = 0.0). If Real, the value entered is the  │
│ (9,2)/(10,2) │ sink temperature. If Integer, the value entered is the ID of a TABLED1 or TABLED2 entry specifying │
│              │ temperature vs time or a TABL3D entry specifying the sink temperature vs time and possibly other   │
│              │ variables. When entered as a negative integer its absolute value is a scalar point identification  │
│              │ number. If a scalar point is specified on this entry it need not be defined on an SPOINT entry.    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CHEAT        │ Contact heat transfer coefficient. (Real or Integer; Default = 0.0). If Real, the value entered is │
│ (9,3)/(10,3) │ the contact heat transfer coefficient. If Integer, the value entered is the ID of a TABLEM1 or     │
│              │ TABLEM2 entry specifying the contact heat transfer coefficient vs temperature or a TABL3D entry    │
│              │ specifying the contact heat transfer coefficient vs temperature and possibly other variables.      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TBODY        │ Body temperature. (Real or Integer; Default = 0.0). If Real, the value entered is the body         │
│ (9,4)/(10,4) │ temperature. If Integer, the value entered is the ID of a TABLED1 or TABLED2 entry specifying the  │
│              │ body temperature vs time or a TABL3D entry specifying the body temperature vs time and possibly    │
│              │ other variables. When entered as a negative integer its absolute value is a scalar point           │
│              │ identification number. If a scalar point is specified on this entry it need not be defined on an   │
│              │ SPOINT entry.                                                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HCV          │ Convection coefficient for near field behavior (Real or Integer; Default = 0.0). If Real the value │
│ (9,5)/(10,5) │ entered is the near field convection coefficient. If Integer, the value entered is the ID of a     │
│              │ TABLEM1 or TABLEM2 entry specifying the near field convection coefficient vs temperature or a      │
│              │ TABL3D entry specifying the near field convection coefficient vs temperature and possibly other    │
│              │ variables.                                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNC          │ Natural convection coefficient for near field behavior (Real or Integer; Default = 0.0). If Real,  │
│ (9,6)/(10,6) │ the value entered is the near field natural convection coefficient. If Integer, the value entered  │
│              │ is the ID of a TABLEM1 or TABLEM2 entry specifying the near field natural convection coefficient   │
│              │ vs temperature or a TABL3D entry specifying the near field natural convection coefficient vs       │
│              │ temperature and possibly other variables.                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ITYPE [4,8]  │ An option entry for heat transfer only (Integer; no Default) 1 - Heat sink (rigid body) 2 -        │
│              │ Deformable body (with heat conduction) 4 - Heat conduction body (heat-rigid body) (Not supported   │
│              │ in SOL 400 coupled thermal-mechanical analysis)                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNC          │ Exponent associated with the natural convection coefficient for near field behavior (Real or       │
│ (9,7)/(10,7) │ Integer; Default = 1.0). If Real, the value entered is the exponent associated with the near field │
│              │ natural convection coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2    │
│              │ entry specifying the exponent associated with the near field natural convection coefficient vs     │
│              │ temperature or a TABL3D entry specifying the exponent associated with the near field natural       │
│              │ convection coefficient vs temperature and possibly other variables.                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EMISS        │ Emissivity for radiation to the environment or near thermal radiation (Real or Integer; Default =  │
│ (9,8)/(10,8) │ 0.0). If real, the value entered is the emissivity. If Integer, the value entered is the ID of a   │
│              │ TABLEM1 or TABLEM2 entry specifying the emissivity vs temperature or a TABL3D entry specifying the │
│              │ emissivity vs temperature and possibly other variables.                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HBL          │ Separation distance dependent thermal convection coefficient (Real or Integer; Default = 0.0). If  │
│ (7,6)/(8,6)  │ Real, the value entered is the separation distance dependent thermal a convection coefficient. If  │
│              │ Integer, the value entered is the ID of a TABLEM1 entry specifying the convection coefficient vs   │
│              │ temperature or a TABL3D entry specifying the convection coefficient vs temperature and possibly    │
│              │ other variables.                                                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNL          │ Heat transfer coefficient for nonlinear convective heat flow for near field behavior. (Real or     │
│              │ Integer; Default = 0.0). If Real, the value entered is the near field nonlinear convection         │
│              │ coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry specifying the  │
│              │ near field nonlinear convection coefficient vs temperature or a TABL3D entry specifying the near   │
│              │ field nonlinear convection coefficient vs temperature and possibly other variables.                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNL          │ Exponent associated with the nonlinear convective heat flow for near field behavior. (Real or      │
│              │ Integer; Default = 1.0). If Real, the value entered is the exponent associated with the near field │
│              │ nonlinear convection coefficient. If Integer, the value entered is the ID of a TABLEM1 OR TABLEM2  │
│              │ entry specifying the exponent associated with the near field nonlinear convection coefficient vs   │
│              │ temperature or a TABL3D entry specifying the exponent associated with the near field nonlinear     │
│              │ convection coefficient vs temperature and possibly other variables.                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNLE         │ Heat transfer coefficient for nonlinear convective heat flow to the environment. (Real > 0.0 or    │
│              │ Integer; Default = 0.0). If Real, the value entered is the environment nonlinear convection        │
│              │ coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry specifying the  │
│              │ environment nonlinear convection coefficient vs temperature or a TABL3D entry specifying the       │
│              │ environment nonlinear convection coefficient vs temperature and possibly other variables.          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNLE         │ Exponent associated with the nonlinear convective heat flow to the environment (Real or Integer;   │
│              │ Default = 1.0). If Real, the value entered is the exponent associated with the environment         │
│              │ nonlinear convection coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2  │
│              │ entry specifying the exponent associated with the environment nonlinear convection coefficient vs  │
│              │ temperature or a TABL3D entry specifying the exponent associated with the environment nonlinear    │
│              │ convection coefficient vs temperature and possibly other variables.                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNCE         │ Natural convection coefficient for heat flow to the environment. (Real or Integer, Default = 0.0). │
│              │ If Real the value entered is the environment natural convection coefficient. If Integer, the value │
│              │ entered is the ID of a TABLEM1 or TABLEM2 entry specifying the environment natural convection      │
│              │ coefficient vs temperature or a TABL3D entry specifying the environment natural convection         │
│              │ coefficient vs temperature and possibly other variables.                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNCE         │ Exponent associated with natural convection heat flow to the environment. (Real or Integer;        │
│              │ Default = 1.0). If Real, the value entered is the exponent associated with the environment natural │
│              │ convection coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry      │
│              │ specifying the exponent associated with the environment natural convection coefficient vs          │
│              │ temperature or a TABL3D entry specifying the exponent associated with the environment natural      │
│              │ convection coefficient vs temperature and possibly other variables.                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMB          │ Heat capacity of the rigid body, when entered as a geometric entity with an associated scalar      │
│              │ point. (Real > 0.0; Default = 0.0). For nonzero values a grounded CDAMP4 element with the scalar   │
│              │ point on its first side is generated internally which obtains this capacity.                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CMS          │ Heat capacity of the environment, when associated with a scalar point. (Real > 0.0;                │
│              │ Default = 0.0). For nonzero values a grounded CDAMP4 element with the scalar point on its first    │
│              │ side is generated internally which obtains this capacity.                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “PATCH3D”    │ Entries for this continuation line describe a rigid body made up of as many 4-node patches as      │
│              │ desired. (Triangular patches are not available.)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDP          │ ID of the patch (Integer number 1 through highest value).                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3,  │ Grid numbers for each of the 4 nodes of the patch (see Note 5).                                    │
│ G4           │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “BEZIER”     │ Entries for this continuation line describe a rigid body made up of Bezier Surfaces.               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NP1          │ Number of points in 1st direction. (Integer > 0)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NP2          │ Number of points in 2nd direction. (Integer > 0)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUB1        │ Number of subdivisions in 1st direction. (Integer > 0)                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUB2        │ Number of subdivisions in 2nd direction. (Integer > 0)                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3,  │ Grid numbers of each point (must be in order). There must be NP1*NP2 grid points defined. Enter    │
│ etc          │ NP1 points for NP2=1, then NP2 points for NP2=2, etc. (Integer)                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “NURBS2D”    │ Entries for this continuation line describe a 2D rigid body made up of nurmbs.                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPTU         │ Number of control points. If the control points are entered as coordinates rather than grid IDs    │
│              │ NPTU may be set to a negative value whose absolute value is the number of xyz coordinates, but     │
│              │ that is not required. (Integer, no Default)                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORU         │ Order                                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUB         │ Number of subdivisions                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3,  │ Grid numbers for each of the NPTU control points                                                   │
│ G4           │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, Y1, X2,  │ Alternate method to define control points without using GRID points. There must be abs(NPTU)*NPTV  │
│ Y2, etc.     │ (x,y,z) entries.                                                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Homo1,       │ Homogeneous coordinates (0.0 to 1.0) (Real). There must be NPTU entries.                           │
│ Homo2,       │                                                                                                    │
│ Homo3, etc.  │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Knot1,       │ Knot vectors (0.0 to 1.0) (Real). There must be (NPTU+NORU) entries.                               │
│ Knot2,       │                                                                                                    │
│ Knot3, etc.  │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “NURBS”      │ Entries for this continuation line describe a rigid body made up of nurbs.                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPTU         │ Number of control points in U direction. If the control points are entered as coordinates rather   │
│              │ than grid IDs NPTU may be set to a negative value whose absolute value is the number of xyz        │
│              │ coordinates, but that is not required. (Integer > 0; Required)                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPTV         │ Number of control points in V direction. (Integer > 0; Required)                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORU         │ Order along U direction. (Integer > 0; Required)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORV         │ Order along V direction (Integer > 0; Required)                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUBU        │ Number of subdivisions in U direction (Integer > 0; Required)                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUBV        │ Number of subdivisions in V direction (Integer > 0; Required)                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NTRIM        │ Number of trimming curves (Integer > 0 or blank)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3,  │ Grid point IDs defining control points (Integer > 0). There must be NPTU*NPTV entries.             │
│ etc.         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, Y1, Z1,  │ Alternate method to define control points without using GRID points. There must be abs(NPTU)*NPTV  │
│ X2, Y2, Z2,  │ (x,y,z) entries.                                                                                   │
│ etc.         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Homo1,       │ Homogeneous coordinates (0.0 to 1.0). There must be NPTU*NPTV entries.  (Real)                     │
│ Homo2,       │                                                                                                    │
│ Homo3, etc   │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Knot1,       │ Knot vectors (0.0 to 1.0). There must be (NPTU+NORU)+(NPTV+NORV) entries. (Real)                   │
│ Knot2,       │                                                                                                    │
│ Knot3, etc   │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDtrim       │ ID of trimming vector. There must NTRIM of these entries and those entries that follow. (Integer > │
│              │ 0)                                                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPUTtrim     │ Number of control points for this trimming vector. (Integer > 0)                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORUtrim     │ Order for this trimming vector. (Integer > 0)                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUBtrim     │ Number of subdivisions for this trimming vector. (Integer > 0)                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Xisoparam    │ First coordinate of point in isoparametric space. (Real)                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ysoparam     │ Second coordinate of point in isoparametric space. (Real)                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Homo1,       │ Homogeneous coordinates (0.0 to 1.0) of this trimming vector. There must be NPTUtrim entries.      │
│ Homo2,       │  (Real)                                                                                            │
│ Homo3, etc   │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Knot1,       │ Knot vectors (0.0 to 1.0) of this trimming vector. There must be NPTUtrim+NORUtrim entries. (Real) │
│ Knot2,       │                                                                                                    │
│ Knot3, etc   │                                                                                                    │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
