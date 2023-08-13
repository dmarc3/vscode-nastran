## [AESURF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AESURF.xhtml) - Aerodynamic Control Surface

Specifies an aerodynamic control surface as a member of the set of aerodynamic extra points. The forces associated with this controller will be derived from rigid rotation of the aerodynamic model about the hinge line(s) and from AEDW, AEFORCE and AEPRESS input data. The mass properties of the control surface can be specified using an AESURFS entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AESURF  ID      LABEL   CID1    ALID1   CID2    ALID2   EFF     LDW     +        
+       CREFC   CREFS   PLLIM   PULIM   HMLLIM  HMULIM  TQLLIM  TQULIM          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AESURF  6001    ELEV    100     100     200     200                     +       
+       10.0    180.0                   -1.4E4  1.2E4   20      30              
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID           │ Controller identification number. (Integer > 0)                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL        │ Controller name. (Character)                                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CIDi         │ Identification number of a rectangular coordinate system with a y-axis that defines the hinge line │
│              │ of the control surface component. (Integer > 0)                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALIDi        │ Identification of an AELIST Bulk Data entry that identifies all aerodynamic elements that make up  │
│              │ the control surface component. (Integer > 0)                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EFF          │ Control surface effectiveness. See Remark 4. (Real ≠ 0.0; Default = 1.0)                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LDW          │ Linear downwash flag. See Remark 2. (Character, one of LDW or NOLDW; Default = LDW).               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CREFC        │ Reference chord length for the control surface. (Real > 0.0; Default = 1.0)                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CREFS        │ Reference surface area for the control surface. (Real > 0.0; Default = 1.0)                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLLIM,PULIM  │ Lower and upper deflection limits for the control surface in radians. (Real, Default = ± π/2)      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HMLLIM,HMULI │ Lower and upper hinge moment limits for the control surface in force-length units. (Real; Default  │
│ M            │ = no limit)                                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TQLLIM,TQULI │ Set identification numbers of TABLEDi entries that provide the lower and upper deflection limits   │
│ M            │ for the control surface as a function of the dynamic pressure. (Integer > 0; Default = no limit)   │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The ID on AESURF, AESTAT, and AEPARM entries are ignored. AESURFS can be used to define mass properties of the control surface.
2. The degrees-of-freedom defined on this entry represent a rigid body rotation of the control surface components about their hinge lines. In the default LDW (Linear DownWash) case, the downwash due to a unit perturbation of the control surface will be computed as part of the database. In the NOLDW case, the user must prescribe the controller’s effects by direct definition of the induced forces using the AEPRESS, AEDW and/or AEFORCE entries.
3. Either one or two control surface components may be defined.
4. If EFF is specified, then the forces produced by this surface are modified by EFF (e.g., to achieve a 40% reduction, specify EFF=0.60).
5. The continuation is not required.
6. The CREFC and CREFS values are only used in computing the nondimensional hinge moment coefficients.
7. Position limits may be specified using either PiLIM or TQiLIM, but not both.
8. Position and hinge moment limits are not required.
