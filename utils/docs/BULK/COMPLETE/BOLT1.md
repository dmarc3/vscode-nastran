## [BOLT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BOLT11.xhtml) - Bolt Model

Defines an easy-to-use pre-tension bolt model that supports nonlinear analysis and large rotation. BOLT1 allows bolt forces or displacements to be applied at a layer of elements along a cross-section in the bolt, thus modeling the effect of bolt pre-tension without the need for duplicating grid points or splitting the bolt finite element mesh into top and bottom sections around the bolt cross-section. The bolt's local coordinate system and axial direction are continuously updated to track bolt rotation. Used in SOL 400 with advanced nonlinear elements only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOLT1   ID      GRIDC   FORM    N1      N2      N3      OFFSET  IDTYPE  +        
+       "ELEM"  E1      E2      E3      E4      E5      E6      E7      +        
+               E8      E9      etc.                                    +        
+       “GRID”  G1      G2      G3      G4      G5      G6      G7      +        
+               G8      G9      etc.                                            
```

#### Example: Simple Method using FORM = 0

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOLT1   1       10                                                      +       
+       ELEM    1       2       3       4       5       6                       
```

#### Example: Cross-section method using FORM = 1<span style="color : #000000;"></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOLT1   2       20      1       0.0     0.0     1.0             SET     +       
+       ELEM    11                                                      +       
+       GRID    12                                                              
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ID        │ Unique bolt ID. (Integer; Required; no Default)   │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ GRIDC     │ Control grid ID where pre-tension loads or        │                                                  │
│           │ tightening displacements are applied. (Integer;   │                                                  │
│           │ Required; no Default)                             │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ FORM      │ Specify input format for bolt definition.         │                                                  │
│           │ ((Integer; Default = 0)                           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ 0:        │ Simple method, enter the list of elements making  │                                                  │
│           │ the bolt, no need to enter bolt axial direction   │                                                  │
│           │ or grid points forming the bolt cross-section.    │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ 1:        │ Cross-section method, enter vector defining bolt  │                                                  │
│           │ axis, enter the list of grid points forming the   │                                                  │
│           │ bolt cross-section and list of elements sharing   │                                                  │
│           │ cross-section grid points and lying on the        │                                                  │
│           │ opposite side of the normal vector.               │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ Ni        │ Components of a vector defining bolt axis         │                                                  │
│           │ (direction normal to cross-section). (Real;       │                                                  │
│           │ Required only if FORM = 1)                        │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ OFFSET    │ Cross-section offset in axial direction (fraction │                                                  │
│           │ of bolt length). (Real; Used for FORM=0 only;     │                                                  │
│           │ Default = 0.0)                                    │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ IDTYPE    │ Method for defining a list of element and grid    │                                                  │
│           │ IDs. (Character; Default = "LIST" or blank)       │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ "LIST":                                           │ Enter the character string LIST, or leave blank, │
│           │                                                   │ to allow entering lists of element IDs Ei and    │
│           │                                                   │ grid point IDs Gi.                               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ "SET":                                            │ Enter the character string SET to allow entering │
│           │                                                   │ lists of element and grid points as sets. E1 and │
│           │                                                   │ G1 refer to SET3 entries with DES = "ELEM" and   │
│           │                                                   │ "GRID", respectively.                            │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ELEM      │ Enter the character string ELEM to define a list  │                                                  │
│           │ of elements. (Character; Required)                │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ Ei        │ Element IDs (Integer; no Default) If FORM = 0,    │                                                  │
│           │ list of element IDs of the bolt (must enter at    │                                                  │
│           │ least 2 elements along the axis of the bolt). If  │                                                  │
│           │ FORM = 1, list of element IDs sharing grid points │                                                  │
│           │ in the bolt cross-section and lying on the        │                                                  │
│           │ opposite side of the cross-section normal vector. │                                                  │
│           │ IF IDTYPE = “SET”, E1 is the ID of a SET3 entry   │                                                  │
│           │ with DES = “ELEM” used to define a list of        │                                                  │
│           │ element IDs other Ei entries will be ignored.     │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ GRID      │ Enter the character string GRID to define a list  │                                                  │
│           │ of grid points. (Character; Required only if FORM │                                                  │
│           │ = 1)                                              │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ Gi        │ Grid IDs for the bolt cross-section. (Integer;    │                                                  │
│           │ Required only if FORM = 1; no Default) IF IDTYPE  │                                                  │
│           │ = "SET", G1 is the ID of a SET3 entry with DES =  │                                                  │
│           │ "GRID", other Gi entries will be ignored.         │                                                  │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. The bolt control grid point GRIDC is unique to each bolt and should be used only to apply bolt pre-tension forces or enforced displacements. GRIDC is a special grid point that has a single degree-of-freedom only aligned along the bolt axial direction and should not be connected to any element or grid in the model. GRIDC should not have an associated displacement coordinate system CD defined on the GRID entry. Applied loads and displacements should always be along the first degree-of-freedom (T1) of the control grid. Output for bolt axial force and displacement are also along the first degree-of-freedom (T1) of the control grid.
2. For the cross-section input format of the bolt definition, FORM=1, user must enter the initial direction of the bolt axis, or bolt cross-section normal vector, Ni. User must give the list of grid points defining the bolt cross-section, where pre-tension is applied, using GRID. User must also specify the list of elements sharing grid points in the bolt cross-section and lying on the opposite side of the cross-section normal vector using ELEM.
3. Using the simple input format of bolt definition, FORM=0, the complete list of bolt elements is specified using ELEM. The bolt axial direction is automatically computed by the program to be along the principal axis of the bolt elements. The bolt cross-section is also internally selected by the program to pass by the bolt center of mass by default. User can move the position of the bolt cross-section along the bolt axis away from the center of mass using the OFFSET parameter if needed.
4. For FORM=1, the cross-section normal vector cannot be of zero length.
5. For FORM=0, the number of elements entered must be at least 2 in order to be able to compute the bolt axis. In addition, bolt elements are not allowed to have a negative Jacobian in this case. The order of element connectivity must follow element definition rules in order to correctly compute the bolt axis.
6. The method for entering bolt element and grid IDs under ELEM and GRID can be controlled using IDTYPE either as list of IDs or defining a list on SET3 entries.
7. BOLT1 is supported for advanced nonlinear elements in SOL 400 only. As such, nonlinear property extensions should be defined for bolt elements. The program will attempt to internally map the element properties used by BOLT1 elements to advanced nonlinear elements if possible. Alternatively, MDLPPRM,BOLTCNEL,1 can be used to search for all elements connected to BOLT1 elements and map their element properties. Automatic mapping is turned off if the user has set NLMOPTS,SPROPMAP,-1 in the Bulk Data section. In this case nonlinear property extensions must be defined for bolt elements.
8. Current limitations:
     - BOLT1 does not support Herrmann elements.
     - GPFORCE output for the control grid does not show contributions of cross-section elements.
9. Pretension of a BOLT1 is a three step process in SOL 400:

#### SUBCASE 1

```text
┌────────┬─────────┬───────────────────────────────────────────────────┐
│ STEP 1 │         │                                                   │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ LOAD=n  │ Applies a pretension load to the bolt on the      │
│        │         │ control grid.                                     │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ SPC=m   │ If any required to prevent motion of structure do │
│        │         │ not include the control grid.                     │
├────────┼─────────┼───────────────────────────────────────────────────┤
│ STEP 2 │         │                                                   │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ LOAD=p1 │ Load entry pointing to a SPCR (relative value of  │
│        │         │ 0.0) and any other desired type of loading.       │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ SPC=q1  │ SPC1 includes control grid and any other desired  │
│        │         │ SPC requirements.                                 │
├────────┼─────────┼───────────────────────────────────────────────────┤
│ STEP 3 │         │                                                   │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ LOAD=p2 │ Load entry pointing to a SPCR and any other       │
│        │         │ additional desired type of loading.               │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ SPC=q2  │ SPC1 includes control grid and any other          │
│        │         │ additional desired SPC requirements.              │
└────────┴─────────┴───────────────────────────────────────────────────┘
```
