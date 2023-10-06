## [PLCOMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLCOMP.xhtml) - Plane Strain or Axisymmetric Composite Element Property

Defines global (external) ply IDs and properties for a composite material laminate.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLCOMP  PID     DIRECT  THICKOP SB      ANAL                            +       
+       “C4”    BEH4    INT4    BEH4H   INT4H                           +       
+       “C8”    BEH8    INT8    BEH8H   INT8H                           +       
+       ID1     MID1    T1      THETA1                                  +       
+       ID2     MID2    T2      THETA2                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLCOMP  782     1                                                               
        1001    171     .3      12.3                                            
        100     175     .7      77.7                                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Element property identification number. (Integer > 0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIRECT    │ The layer direction for BEHi=COMPS or AXCOMP. See Remark 5. for direction definition. A positive   │
│           │ value implies that the composite layer input is a fractional percent of the total element          │
│           │ thickness in the ply direction and is recommended. A negative value implies that the composite     │
│           │ layer input is the actual thickness of that ply. (Integer + 1 or + 2; Default + 1)                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THICKOP   │ An out-of-plane thickness. (Real, Default = 1.0)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAL      │ Analysis type. ANAL=‘IS’ - Implicit structural elements are being referred to. ANAL=‘IH’ -         │
│           │ Implicit heat analysis elements are being referred to. ANAL= “ISH” - Implicit structural and heat  │
│           │ elements are being referred to. (Character Default ISH).                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SB        │ Allowable shear stress of the bonding material (allowable interlaminar shear stress). (Real > 0.0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C4        │ Keyword indicating that two items following apply to elements with four corner grids. (Character)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C8        │ Keyword indicating that two items following apply to elements with four corner grids and four mid- │
│           │ side grids. (Character)                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHi      │ Element structural behavior. See Remarks 4. and 7. (Character default: COMPS for BEH4 and BEH8)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTi      │ Integration scheme. See Remark 9. (Character Default: L for INT4H, Q for INT8H and INT8H)          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHiH     │ Element heat behavior. See Remark 8. (Character Default: COMPS for BEH4H and BEH8H)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTiH     │ Integration scheme. See Remark 9. (Character Default: L for INT4H, Q for INT8H, Q for INT8H)       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Global Ply ID. Must be unique with respect to other plies in this entry. See Remark 2. (Integer >  │
│           │ 0)                                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDi      │ Material ID for the ply. See Remark 3. (Integer > 0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti        │ Either fractional percent of the total element thickness or actual thickness of that ply depending │
│           │ on + value of DIRECT. See Remarks 5. and 6. (Real > 0.0)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETAi    │ Orientation angle of the ply in the plane of the plies. These angles are measured about the        │
│           │ thickness direction of the element. (Real; Default = 0.0)                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PLCOMP can only be referenced by a CQUAD, CQUAD4, CQUAD8, or CQUADX entry.Currently it should be used ONLY in SOL400. Erroneous results will occur in other Solution sequences.
2. Global Ply ID is intended as a unique ply identifier for ply alignment across ALL PCOMPG, PLCOMP, and PCOMPLS entries.
3. The MIDi entry may point to MAT1, MAT3, MATHORT, MATHE, MATUSR or MATDIGI entries. The following table shows associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

     The MID entry for nonlinear heat may point to MAT4 or MAT5 entries.

     ```text
     ┌────────────┬─────────┬─────────┐
     │ Implicit   │         │         │
     │ Structural │         │         │
     │ Materials  │         │         │
     ├────────────┼─────────┼─────────┤
     │ MAT1       │ MAT3    │ MATORT  │
     ├────────────┼─────────┼─────────┤
     │ MATVE      │ <MATVE> │ <MATVE> │
     ├────────────┼─────────┼─────────┤
     │ MATVP      │ MATVP   │ MATVP   │
     ├────────────┼─────────┼─────────┤
     │ MATEP      │ MATEP   │ MATEP   │
     ├────────────┼─────────┼─────────┤
     │ MATF       │ MATF    │ MATF    │
     ├────────────┼─────────┼─────────┤
     │ MATS1      │         │ MATSORT │
     ├────────────┼─────────┼─────────┤
     │ <MATVE>    │         │         │
     │ refers to  │         │         │
     │ the        │         │         │
     │ ALTERNATE  │         │         │
     │ format for │         │         │
     │ type ORTHO │         │         │
     └────────────┴─────────┴─────────┘
     ```
     
     ```text
     ┌───────────┬──────┐
     │ Heat      │      │
     │ Materials │      │
     ├───────────┼──────┤
     │ MAT4      │ MAT5 │
     └───────────┴──────┘
     ```

        If heat analysis is being performed and the user wishes to override standard MSC Nastran heat elements, the ANAL entry must be set to IH or ISH. If ISH is specified then the MAT1 and MAT4 or MAT1 and MAT5 must have the same ID. MID for structure entries must follow the uniqueness rules of the MAT1, MAT2, MAT3, MAT8, MAT9, MATORT, MATHP, MATHE, and MATG entries. MID for heat entries must follow the uniqueness rules of the MAT4 and MAT5 entries. │

4. The keyword entries may occur, between themselves, in any order or not at all. If a keyword entry is missing, its defaults are assumed.
5. The following table describes layer orientation for BEHi=COMPS or AXCOMP. A total of 1026 plys are allowed for any one element.

     Note the ply numbering starts from the bottom to the top parallel to the positive thickness direction.

```text
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Layer Orientation                                                                                           │
├────────┬─────────────────────────────────┬───────────────────────────────┬──────────────────────────────────┤
│ DIRECT │ Normal to Layer edge            │ Layers run parallel from edge │ to edge                          │
│        │                                 │ (ply numbering starts here)   │ (ends here)                      │
├────────┼─────────────────────────────────┼───────────────────────────────┼──────────────────────────────────┤
│ 1      │ Element Y direction             │ G1-G2                         │ G4-G3                            │
├────────┼─────────────────────────────────┼───────────────────────────────┼──────────────────────────────────┤
│ 2      │ Element X direction             │ G1-G4                         │ G2-G3                            │
└────────┴─────────────────────────────────┴───────────────────────────────┴──────────────────────────────────┘
```

6. The ply thickness of the element is computed using isoparametric coordinates of the element in the DIRECT direction and the element nodes are mapped between -1 and + 1. The ply thickness is entered in one of two ways:
    - Relative thickness where the numbers are a fractional percent of the total thickness. This is the preferred method. For this method, the sum of all the fractional percentages of thickness must sum to 1.0.
    - Absolute thickness where the layer thickness is entered directly. Using this option, the code sums the total user input thickness across all plys and then figures the fractional percent of each individual ply as in method 6a.

7. In the following table, BEHi refers to the structural behavior of 2D-solid elements. An  underlined  item delineates a default.

        See link for table.

8. In the following table, BEHiH refers to the heat behavior of 2D-solid elements. An  underlined  item delineates a default.

        See link for table.

9. Integration codes in Remark 7 are:

        See link for table.

10. PLCOMP is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PLCOMP property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PSOLID, PCOMPLS, PLCOMP, PCOMPG, PSHELL, PLPLANE entries.
