## [ROTOR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.ROTOR.xhtml) - Rotor Model Definition

Specifies list of grids, elements or properties that comprise the rotor 3D model.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTOR   ROTORID FRAME                                                   +       
+       LTYPE   ID1     ID2     ID3     etc.                            +       
+       AXIS    GID1    GID2    etc.                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTOR   10      ROT                                                     +       
+       ELEM    10      THRU    12                                      +       
+       PROP    1       THRU    5                                       +       
+       AXIS    101     102                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTORID   │ Identification number of rotor. (Integer > 0).                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRAME     │ Analysis frame (Char, ROT or FIX, Required, Default: FIX)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LTYPE     │ ELEM or PROP or both, indicating whether the specified list references element IDs or property │
│           │ IDs. (Character; Required; No default) Note that the order is important. In case both ELEM and │
│           │ PROP are specified, ELEM should be specified first.                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Idi       │ IDs of elements or properties comprising the rotor. (Integer > 0; Required; No default)        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AXIS      │ Defines grid points which define the axis of rotation.                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDi      │ IDs of grids comprising the axis of the rotor (Integer > 0; Required; No default)              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Supported element types for analysis in rotating reference frame:

    0D elements : CONM1, CONM2
    
    1D elements : CBEAM, CBAR
    
    2D elements : CQUAD4, CTRIA3
    
    3D elements : CHEXA, CPENTA, CTETRA, CPYRAM

2. Supported element types for analysis in fixed reference frame:

    0D elements : CONM1, CONM2
    
    1D elements : CBEAM, CBAR
    
    2D elements : CQUAD4, CQUAD8, CTRIA3, CTRIA6
    
    3D elements : CHEXA, CPENTA, CTETRA, CPYRAM

3. Current limitation for analysis in fixed reference frame:
    - If shell elements are defined perpendicular to the rotor axis for a 3D rotor defined using ROTOR entry, then gyroscopic matrix is not available for those elements. For example, a flat disk like CD spinning about the center. If the shell elements are replaced by SOLID elements, then correct gyroscopic effects can be obtained.
    - Bar elements (default version) do not have polar moment of inertia. Thus, if CBAR elements are defined along the axis of rotation (for both ROTOR and ROTORG entries), then they do not provide any contribution to gyroscopic matrix. The CABR elements can be replaced by CBEAM elements in case gyroscopic terms are needed for those elements.
4. THRU option is supported in ROTOR entry. Note that the order is important for LTYPE. In case both ELEM and PROP are specified, ELEM should be specified first.
5. Analysis can be performed using coupled mass or diagonal mass for all the elements.
6. ROTORAX, ROTORG and ROTORSE should not be used along with ROTOR in ROT frame. They can only be used with ROTOR in FIX frame. (since ROTORAX, ROTORG and ROTORSE assume fixed reference frame.)
7. At least 2 grid points need to be defined on AXIS to complete ROTOR definition, these points may or may not be a part of rotor.
8. For unbalance loads, the grid point at which UNBALNC is defined, should be part of ROTOR AXIS list.
9. In order to include CONM1/2 elements as part of a rotor, its element ID should be listed using ELEM in ROTOR definition.  
10. Stator portion of the model should only be defined in residual for external superelement runs in rotating system.
11. Only permanent glue option is supported for contact analysis for rotating portion of the model.
