__**[BCBODY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBODY.xhtml)**__   -   Flexible or Rigid Contact Body in 2D and 3D

--------------------------------------------------------------------------------
Defines a flexible or rigid contact body in 2D or 3D used in SOLs 101, 400, and
700 only. The BCBODY1 option is the preferred method to defining contact bodies
for SOL 400.
Use only as many forms (i.e. HEAT, PATCH3D, BEZIER, POLY, CYLIND, SPHERE, NURBS2, or NURBS) as necessary to describe the body (if rigid). Deformable bodies are described using as many standard elements as necessary and are specified by the BSID field with BEHAV=DEFORM (only the first line should be entered for deformable bodies). Unless shrink fit its being analyzed, deformable bodies should not be inside other deformable bodies when the thickness of each body is taken into account.
The “RIGID” header may be used with any of the other rigid entries but only once per body. Also, only one of the character entries after RIGID (HEAT, PATCH3D, NURBS, etc.) should be entered for any particular body. See Remark 4.    for an important note regarding how to define the outward direction of rigid bodies (which must point towards a flexible body for contact to occur).

--------------------------------------------------------------------------------
```text

Format: (SOLs 101 and 400 only)
1       2       3       4       5       6       7       8       9       10      
BCBODY  BID     DIM     BEHAV   BSID    ISTYP   FRIC    IDSPL   CONTROL 
NLOAD   ANGVEL  DCOS1   DCOS2   DCOS3   VELRB1  VELRB2  VELRB3  
“ADVANCE” SANGLE COPTB   MIDNO           D       
“RIGID” CGID    NENT    ---     Rigid   Body    Name    ---     
“APPROV”A       N1      N2      N3      V1      V2      V3      
“GROW”  GF1     GF2     GF3     TAB-GF1 TAB-GF2 TAB-GF3 
“HEAT”  CFILM   TSINK   CHEAT   TBODY   HCV     HNC     ITYPE   
BNC     EMISS   HBL     HNL     BNL     HNLE    BNLE    
HNCE    BNCE    CMB     CMS     
“PATCH3D”  NPATCH
IDP     G1      G2      G3      G4      
IDP     G1      G2      G3      G4      
etc.    (npatch entries)
“BEZIER”NP1     NP2     NSUB1   NSUB2   
G1      G2      G3      G4      etc             (np1*np2values) 
“NURBS2D”NPTU    NORU    NSUB    (2D                             Contact)
G1 or X1G2 or Y1G3      G4 or X2G5 or Y2G6      [abs(nptu)grids   or      x,      y,z,    values] 
Homo1   Homo2   Homo3   Homo4   etc.            (nptu   values) 
Knot1   Knot2   Knot3   Knot4   Knot5   etc.    (nptu+noru       values) 
“NURBS” NPTU    NPTV    NORU    NORV    NSUBU   NSUBV   NTRIM   
G1 or X1G2 or Y1G3 or Z1G4 or X2G5 or Y2G6 or Z2G7      See     Remark 8
G8 or X3G9      or      Y3      G10     or      Z3      etc.    [abs(nptu)*nptv   values] 
See  Remark 8
Homo1   Homo2   Homo3   Homo4   Homo5   Homo6   Homo7   
Homo8   Homo9   etc.            (nptu*nptv vales)
Knot1   Knot2   Knot3   Knot4   Knot5   Knot6   Knot7   `       
Knot8   Knot9   etc.            (nptu+noru+ntpv+norv     values) 
IDtrim  NPTUtrimNORUtrimNSUBtrim        (repeat this    and     all     followinglines   NTRIM   times)  
XisoparamYisoparam(NPTUtrim               entries)
Homo1   Homo2   Homo3   etc     (NPTUtrim       entries)
Knot1   Knot2   Knot3   etc.    (NPTUtrim +     NORUtri m       entries)


```

--------------------------------------------------------------------------------
```text

Examples (of Deformable and Rigid Contact):



```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
BID             Contact body identification number referenced by BCTABLE,
                BCHANGE, or BCMOVE. (Integer > 0; Required)
DIM             Dimension of body. (Character; Default= 3D) (Ignored by SOL
                700)DIM=2D planar body in x-y plane of the basic coordinate
                system, composed of2D elements or curves.DIM=3D any 3D body
                composed of rigidsurfaces, shellelements or solid elements.
BEHAV           Behavior of curve or surface (Character; Default = DEFORM)
                (Ignored by SOL 700) DEFORM body is deformable, RIGID body is
                rigid, SYMM bodyis a symmetry body, HEAT indicates body is a
                heat-rigid body.See Remark 4. forRigid Bodies.
BSID            Identification number of a BSURF or BCPROP entry if
                BEHAV=DEFORM. For SOL 700 the BSID may also be the
                identification number of aBCBOX, BCMATL, BCSEG, BCGRID or
                BCELIPS entry.(Integer > 0)
ISTYP           Check of contact conditions. (Integer > 0; Default = 0 for all
                solutions)ISTYP is not necessary in segment-to-segment
                contact.For a deformablebody:=0 check each body, versus the
                other .=2 double-sided contact withautomatic optimization of
                contact constraintequations (thisoption is known as“optimized
                contact”).
Note that ISTYP is supported with ISEARCH=0 in  BCTABLE  or  BCONPRG  only.
FRIC            Friction coefficient. If the value is an integer, it represents
                the ID of a TABLEM1, TABLEM2 or TABL3D, i.e., a temperature-
                dependent or multi-dimensional table. (Real  0.0 or Integer >
                0; Default = 0.0)
When a grid point contacts a rigid body, the coefficient of friction associated
with the  rigid body is used. When a grid point contacts a deformable body, the
average of the  coefficients for the two bodies are used.
In general, entering the friction coefficient for a contact body pair via a
BCTABLE and  BCONECT/BCONPRP is strongly recommended.
Describer       Meaning         
CONTROL         = -1 for position control. The coordinates of the final position
                of GRID Point defined in CGID is given in VELRBi in the
                following line.= 0 forvelocity control (default). = positive
                number for "loadcontrol". The positivenumber entered is the grid
                number definedin CGID at whichtranslational forcesor SPCD are
                applied. (Note:The rotation inthis case isdefined by NLOAD in
                thefollowingline.)
NLOAD           Enter a positive number if "load controlled" and rotations are
                allowed (Integer). The positive number is the grid number where
                the moments orrotations are applied. The rotations are specified
                using SPCD atgrid ID NLOADand can be specified using dof's 1-3
                (for rotationabout x, y, zrespectively),or by dof's 4-6 (for
                rotation about x,y, zrespectively).
Note: This rotation takes the position of the grid point defined in CGID field
as the  center of rotation.
ANGVEL          Angular velocity or angular position about local axis through
                center of rotation. If the value is an integer it represents the
                ID of aTABLED1, TABLED2 or TABL3D, i.e., a time-dependent or
                multi-dimensionaltable;however, no log scales, only linear
                scales. (Real orInteger; Default =0.0)
DCOSi Components of direction cosine of local axis if ANGVEL is nonzero. If the
value is an  integer, it represents the ID of a TABLED1, TABLED2 or TABL3D,
i.e., a time- dependent or multi-dimensional table; however, no log scales, only
linear scales. (Real  or Integer; Default=0.0) In 2D contact only DCOS3 is used
and the Default is 1.0.
VELRBi Translation velocity or final position (depending on the value of
CONTROL) of rigid  body at the grid point defined in CGID filed. For velocity
control only, if the value is  an integer, it represents the ID of TABLED1,
TABLED2 or TABL3D, i.e., a time- dependent or multi-dimensional table; however,
no log scales, only linear scales.  Only  VELRB1 and VELRB2 are used in 2D
contact. (Real or Integer; Default = 0.0)
“ ADVANCE ” The entries for this continuation line are for advanced options
starting with  MD Nastran R2.
SANGLE          Threshold for automatic discontinuity detection in degrees.
                (Real; Default = 60.0) Used for SPLINE option in SOL 400 only.
                SANGLE is notused when IDSPL  0.
COPTB           Flag to indicate how body surfaces may contact. See Remark 9. on
                the BCTABLE entry. (Integer; Default = 0)
MIDNOD          Mid-side node projection flag. (Integer > 0; Default = 0)When
                MIDNOD > 0 and IDSPL0, the mid-side grid of quadratic elements
                are projectedonto the selected spline surfaces. This operation
                is performedbefore thecontact process starts and it may change
                the location ofgrids incontactbodies. It may operate in
                combination with theinitial stress-freecontact.
    
Describer       Meaning         
CGID            (5,i) i=1,2,3
Grid point identification number defining the initial position of the reference
point of  the rigid body or the point where a concentrated force or moment is
applied
NENT            Number of geometric entities to describe this rigid surface. A
                rigid surface can be described by multiple sets of patches,
                nurbs, etc. Forexample, if it takes 3 sets of PATCH3D entries to
                describe arigid surface, thenset NENT=3.  (Integer > 0; Default
                = 1)
Rigid Body  Name
Name associated with the rigid body. (Default is blank, 24-characters maximum)
“ APPROV ” The entries of this continuation line are for approaching velocity to
establish initial  contact.
A               Angular velocity about local axis through center of rotation.
                (Real, Default = 0.0)
Ni Components of direction cosines of local axis of the angular velocity. The
N1, N2, N3  define the axis through the point defined in the “RIGID”, CGID
entry. Only N1 and  N2 are used in 2D contact. (Real, Default = 0.0)
Vi V1, V2 and V3 define the three components of the approaching velocity. Only
V1 and  V2 are used in 2D contact. (Real; Default = 0.0)
“ GROW ” The entries of this continuation line are for rigid body growth. If
tables are used for  growth, they should either be TABLED1, TABLED2(growth vs
time) or TABL3D  (growth vs one or more variables).
GFi Components of Growth factor of rigid body in the coordinate system of the
“RIGID”,  CGID entry. (Real, Default = 1.0)
TAB-GFi Tabled IDs for growth factor of rigid body in the coordinate system of
the “RIGID”,  CGID entry. (Integer > 0 or blank, Default is blank)
“ HEAT ” The entries of this continuation line(s) are for contact in heat
transfer in a pure thermal  analysis or in a coupled thermal/structural
analysis. In a pure structural analysis they are  ignored.
CFILM           (9,1)/(10,1)
Heat transfer coefficient (film) to environment. (Real or Integer, Default =
0.0) If Real,  the value entered is the film coefficient. If Integer, the value
entered is the ID of a  TABLEM1 or TABLEM2 entry specifying the heat transfer
coefficient vs temperature  or a TABL3D entry specifying the film coefficient vs
temperature and possibly other  variables.
TSINK           (9,2)/(10,2)
Describer       Meaning         
CHEAT           (9,3)/(10,3)
Contact heat transfer coefficient. (Real or Integer; Default = 0.0). If Real,
the value  entered is the contact heat transfer coefficient. If Integer, the
value entered is the ID of  a TABLEM1 or TABLEM2 entry specifying the contact
heat transfer coefficient vs  temperature or a TABL3D entry specifying the
contact heat transfer coefficient vs  temperature and possibly other variables.
TBODY           (9,4)/(10,4)
Body temperature. (Real or Integer; Default = 0.0). If Real, the value entered
is the body  temperature. If Integer, the value entered is the ID of a TABLED1
or TABLED2 entry  specifying the body temperature vs time or a TABL3D entry
specifying the body  temperature vs time and possibly other variables. When
entered as a negative integer its  absolute value is a scalar point
identification number. If a scalar point is specified on  this entry it need not
be defined on an SPOINT entry.
HCV             (9,5)/(10,5)
Convection coefficient for near field behavior (Real or Integer; Default = 0.0).
If Real  the value entered is the near field convection coefficient. If Integer,
the value entered is  the ID of a TABLEM1 or TABLEM2 entry specifying the near
field convection  coefficient vs temperature or a TABL3D entry specifying the
near field convection  coefficient vs temperature and possibly other variables.
HNC             (9,6)/(10,6)
Natural convection coefficient for near field behavior (Real or Integer; Default
= 0.0).  If Real, the value entered is the near field natural convection
coefficient. If Integer, the  value entered is the ID of a TABLEM1 or TABLEM2
entry specifying the near field  natural convection coefficient vs temperature
or a TABL3D entry specifying the near  field natural convection coefficient vs
temperature and possibly other variables.
ITYPE           [4,8]
An option entry for heat transfer only (Integer; no Default) 1 - Heat sink
(rigid body) 2 - Deformable body (with heat conduction) 4 - Heat conduction body
(heat-rigid body) (Not supported in SOL 400 coupled  thermal-mechanical
analysis)
BNC             (9,7)/(10,7)
Exponent associated with the natural convection coefficient for near field
behavior  (Real or Integer; Default = 1.0). If Real, the value entered is the
exponent associated  with the near field natural convection coefficient. If
Integer, the value entered is the ID  of a TABLEM1 or TABLEM2 entry specifying
the exponent associated with the near  field natural convection coefficient vs
temperature or a TABL3D entry specifying the  exponent associated with the near
field natural convection coefficient vs temperature  and possibly other
variables.
EMISS           (9,8)/(10,8)
Describer       Meaning         
HBL             (7,6)/(8,6)
Separation distance dependent thermal convection coefficient (Real or Integer;
Default  = 0.0). If Real, the value entered is the separation distance dependent
thermal a  convection coefficient. If Integer, the value entered is the ID of a
TABLEM1 entry  specifying the convection coefficient vs temperature or a TABL3D
entry specifying the  convection coefficient vs temperature and possibly other
variables.
HNL             Heat transfer coefficient for nonlinear convective heat flow for
                near field behavior. (Real or Integer; Default = 0.0). If Real,
                the valueentered is the near field nonlinear convection
                coefficient. If Integer,thevalue entered is the ID of a TABLEM1
                or TABLEM2 entryspecifying the nearfieldnonlinear convection
                coefficient vstemperature or aTABL3D entryspecifying thenear
                field nonlinearconvectioncoefficient vstemperature andpossibly
                othervariables.
BNL             Exponent associated with the nonlinear convective heat flow for
                near field behavior. (Real or Integer; Default = 1.0). If Real,
                the valueentered is the exponent associated with the near field
                nonlinearconvectioncoefficient. If Integer, the value entered is
                the ID of aTABLEM1 ORTABLEM2entry specifying the exponent
                associated with thenearfieldnonlinearconvection coefficient vs
                temperature or aTABL3D entryspecifyingtheexponentassociated with
                the near fieldnonlinearconvectioncoefficientvstemperatureand
                possibly othervariables.
HNLE            Heat transfer coefficient for nonlinear convective heat flow to
                the environment. (Real > 0.0 or Integer; Default = 0.0). If
                Real, the valueentered is the environment nonlinear convection
                coefficient. IfInteger, thevalue entered is the ID of a TABLEM1
                or TABLEM2 entryspecifying theenvironmentnonlinear convection
                coefficient vstemperature or aTABL3D entryspecifying
                theenvironment nonlinearconvectioncoefficient vstemperature
                andpossiblyothervariables.
BNLE            Exponent associated with the nonlinear convective heat flow to
                the environment (Real or Integer; Default = 1.0). If Real, the
                value entered isthe exponent associated with the environment
                nonlinearconvection coefficient.If Integer, the value entered is
                the ID of aTABLEM1 orTABLEM2 entry specifyingthe exponent
                associated with theenvironmentnonlinearconvection coefficient
                vstemperature or aTABL3D entryspecifying theexponentassociated
                withtheenvironment nonlinearconvectioncoefficient
                vstemperatureandpossiblyothervariables.
Describer       Meaning         
BNCE            Exponent associated with natural convection heat flow to the
                environment. (Real or Integer; Default = 1.0). If Real, the
                value entered is theexponent associated with the environment
                natural convectioncoefficient. IfInteger, the value entered is
                the ID of aTABLEM1 or TABLEM2entry specifyingthe exponent
                associated with theenvironmentnatural convectioncoefficient
                vstemperature or aTABL3D entryspecifying theexponent
                associatedwiththeenvironment naturalconvectioncoefficient
                vstemperatureandpossiblyothervariables.
CMB             Heat capacity of the rigid body, when entered as a geometric
                entity with an associated scalar point. (Real > 0.0; Default =
                0.0). For nonzerovalues a grounded CDAMP4 element with the
                scalar point on itsfirst side isgenerated internally which
                obtains thiscapacity.
CMS             Heat capacity of the environment, when associated with a scalar
                point. (Real > 0.0; Default = 0.0). For nonzero values a
                grounded CDAMP4 elementwith the scalar point on its first side
                is generatedinternally which obtainsthis capacity.
“ PATCH3D ” Entries for this continuation line describe a rigid body made up of
as many 4-node  patches as desired. (Triangular patches are not available.)
IDP             ID of the patch (Integer number 1 through highest value).
G1, G2, G3, G4 Grid numbers for each of the 4 nodes of the patch (see Note 5).
“ BEZIER ” Entries for this continuation line describe a rigid body made up of
Bezier Surfaces.
NP1             Number of points in 1st direction. (Integer > 0)
NP2             Number of points in 2nd direction. (Integer > 0)
NSUB1           Number of subdivisions in 1st direction. (Integer > 0)
NSUB2           Number of subdivisions in 2nd direction. (Integer > 0)
G1, G2, G3, etc Grid numbers of each point (must be in order). There must be
NP1*NP2 grid points  defined. Enter NP1 points for NP2=1, then NP2 points for
NP2=2, etc. (Integer)
“ NURBS2D ” Entries for this continuation line describe a 2D rigid body made up
of nurmbs.
NPTU            Number of control points. If the control points are entered as
                coordinates rather than grid IDs NPTU may be set to a negative
                value whoseabsolute value is the number of xyz coordinates, but
                that is notrequired.(Integer, no Default)
NORU            Order
NSUB            Number of subdivisions
G1, G2, G3, G4 Grid numbers for each of the NPTU control points
X1, Y1, X2, Y2, etc.
Alternate method to define control points without using GRID points. There must
be  abs(NPTU)*NPTV (x,y,z) entries.
Homo1,  Homo2,  Homo3, etc.
Describer       Meaning         
Knot1, Knot2,  Knot3, etc.
Knot vectors (0.0 to 1.0) (Real). There must be (NPTU+NORU) entries.
“ NURBS ” Entries for this continuation line describe a rigid body made up of
nurbs.
NPTU            Number of control points in U direction. If the control points
                are entered as coordinates rather than grid IDs NPTU may be set
                to a negativevalue whose absolute value is the number of xyz
                coordinates, butthat is notrequired. (Integer > 0; Required)
NPTV            Number of control points in V direction. (Integer > 0; Required)
NORU            Order along U direction. (Integer > 0; Required)
NORV            Order along V direction (Integer > 0; Required)
NSUBU           Number of subdivisions in U direction (Integer > 0; Required)
NSUBV           Number of subdivisions in V direction (Integer > 0; Required)
NTRIM           Number of trimming curves (Integer > 0 or blank)
G1, G2, G3,     etc.
Grid point IDs defining control points (Integer > 0). There must be NPTU*NPTV
entries.
X1, Y1, Z1, X2, Y2, Z2, etc.
Alternate method to define control points without using GRID points. There must
be  abs(NPTU)*NPTV (x,y,z) entries.
Homo1,  Homo2,  Homo3, etc
Homogeneous coordinates (0.0 to 1.0). There must be NPTU*NPTV entries.  (Real)
Knot1, Knot2,  Knot3, etc
Knot vectors (0.0 to 1.0). There must be (NPTU+NORU)+(NPTV+NORV) entries.
(Real)
IDtrim ID of trimming vector. There must NTRIM of these entries and those
entries that  follow. (Integer > 0)
NPUTtrim Number of control points for this trimming vector. (Integer > 0)
NORUtrim Order for this trimming vector. (Integer > 0)
NSUBtrim Number of subdivisions for this trimming vector. (Integer > 0)
Xisoparam First coordinate of point in isoparametric space. (Real)
Ysoparam Second coordinate of point in isoparametric space. (Real)
Homo1,  Homo2,  Homo3, etc
Homogeneous coordinates (0.0 to 1.0) of this trimming vector. There must be
NPTUtrim entries.  (Real)
Knot1, Knot2,  Knot3, etc


```

--------------------------------------------------------------------------------
