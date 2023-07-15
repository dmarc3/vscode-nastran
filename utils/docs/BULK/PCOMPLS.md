## [PCOMPLS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCOMPLS.xhtml) - Layered Solid Composite Element Property

Defines global (external) ply IDs and properties for a composite material laminate in SOL 400, all linear solution sequences between SOL 101 and SOL 112, and analysis only for SOL 200.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPLS PID     DIRECT  CORDM   SB      ANAL                                    
        “C8”    BEH8    INT8    BEH8H   INT8H                                   
        “C20”   BEH20   INT20   BEH20H  INT20H                                  
        ID1     MID1    T1      THETA1                                          
        ID2     MID2    T2      THETA2                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPLS 782     1                                                               
        1001    171     .3      12.3                                            
        100     175     .7      77.7                                            
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIRECT    │ The layer direction for BEHi = SLCOMP. See Remark 5. for direction definition. A positive value    │
│           │ implies that the composite layer inputs is a fractional percent of the total element thickness in  │
│           │ the ply direction and is recommended. A negative value implies that the composite layer input is   │
│           │ the actual thickness of that ply. (Integer + 1, +2, or +3; Default +1)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CORDM     │ Identification number of the material coordinate system. See Remark 10. (Integer; Default = 0,     │
│           │ which is basic)                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SB        │ Allowable shear stress of the bonding material (allowable interlaminar shear stress). (Real > 0.0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAL      │ Analysis type. ANAL=‘IS’ - Implicit structural elements are being referred to. ANAL=‘IH’ -         │
│           │ Implicit heat analysis elements are being referred to. ANAL=‘ISH’ - Implicit structural and heat   │
│           │ elements are being referred to. (Character Default ISH)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C8        │ Keyword indicating that two items following apply to elements with eight corner grids. (Character) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C20       │ Keyword indicating that two items following apply to elements with eight corner grids and twelve   │
│           │ mid-side grids. (Character)                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHi      │ Element structural behavior. See Remarks 4. and 7. (Character default: SLCOMP for BEH8 and BEH20)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTi      │ Integration scheme. See Remark 9. (Character default: L for INT8, Q for INT20)                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHiH     │ Element heat behavior. See Remarks 4. and 8. (Character Default: SLCOMP for BEH8H and BEH20H)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTiH     │ Integration scheme. See Remark 9. (Character Default: L for INT8H, Q for INT20H)                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Global Ply ID. Must be unique with respect to other plies in this entry. See Remark 2. (Integer >  │
│           │ 0)                                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDi      │ Material ID for the ply. See Remark 3. (Integer > 0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti        │ Either fractional percent of the total element thickness or actual thickness of that ply depending │
│           │ on + value of DIRECT. See Remarks 5. and 6.. (Real > 0.0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETAi    │ Orientation angle of the ply in the plane of the plies. Measured relative to the projection z-axis │
│           │ defined by CORDM on the plane defined by DIRECT. See Remark 1. (Real; Default = 0.0)               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The PCOMPLS can only be referenced by a CHEXA entry. To view the composite results of large models using solid composite elements in PATRAN or SimXpert, the following environment variable setting is required when starting the session: DRANAS_NAST_MEM=2048MB.

2. Global Ply ID is intended as a unique ply identifier for ply alignment across all PCOMPG, PLCOMP, and PCOMPLS entries.

3. The MIDi entry may point to MAT1, MAT9, MATORT, MATHE, MATUSR or MATDIGI entries. The following table shows associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

```text
┌─────────────┬─────────┬─────────┐
│ Implicit    │         │         │
│ Structural  │         │         │
│ Materials   │         │         │
├─────────────┼─────────┼─────────┤
│ MAT1        │ MAT9    │ MATORT  │
├─────────────┼─────────┼─────────┤
│ MATVE       │ <MATVE> │ <MATVE> │
├─────────────┼─────────┼─────────┤
│ MATVP       │ MATVP   │ MATVP   │
├─────────────┼─────────┼─────────┤
│ MATEP       │ MATEP   │ MATEP   │
├─────────────┼─────────┼─────────┤
│ MATF        │ MATF    │ MATF    │
├─────────────┼─────────┼─────────┤
│ MATS1       │         │ MATSORT │
├─────────────┼─────────┼─────────┤
│ <MATVE>     │         │         │
│ refers to   │         │         │
│ the         │         │         │
│ ALTERNATE   │         │         │
│ format for  │         │         │
│ type ORTHO. │         │         │
└─────────────┴─────────┴─────────┘
```
Heat Materials

MAT4

MAT5

--------------------

```text
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ If heat analysis is being performed and the user wishes to override standard MSC Nastran heat elements, the ANAL entry must be set to IH or ISH. If ISH is specified then the MAT1 and MAT4 or MAT1 and MAT5 must have the same ID. MID for structure entries must follow the uniqueness rules of the MAT1, MAT2, MAT3, MAT8, MAT9, MATORT, MATHP, MATHE, MATG and MATDIGI entries. If MATDIGI is being used, the ANAL field must be set to IS. MID for heat entries must follow the uniqueness rules of the MAT4 and MAT5 entries. │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
4. The keyword entries, between themselves, may occur in any order or not at all. If a keyword entry is missing, its defaults are assumed.

5. The following table describes layer orientation for BEHi=SLCOMP.

     For INT8=L and INT20=Q, a total of 510 layers are allowed for any one element.

     For INT8=ASTN, a total of 2040 layers are allowed for any one element.

     Note the ply numbering starts from the bottom to the top parallel to the positive thickness direction.

Layer orientation

DIRECT

Normal to Layer Plane

Layers run parallel from face (ply numbering starts here)

to face (ends here)

1

Element T direction

G1-G2-G3-G4

G5-G6-G7-G8

2

Element R direction

G1-G4-G8-G5

G2-G3-G7-G6

3

Element S direction

G1-G2-G6-G5

G4-G3-G7-G8

--------------------

6. The ply thickness of the element is computed using isoparametric coordinates of the element in the DIRECT direction and the element nodes are mapped between -1 and +1. The ply thickness is entered in one of two ways:

a. Relative thickness where the numbers entered, are a fractional percent of the total thickness. This is the preferred method. For this method, the sum of all the fractional percents of thickness must sum to 1.0.

b. Absolute thickness where the layer thickness is entered directly. Using this option, the code sums the total user input thickness across all plies and then figures the fractional percent of each individual ply as in method 6a.

7. In the following table, BEHi refers to the structural behavior of 3D-solid elements. An  underlined  item delineates a default.

Structural Classification of Elements

Element Structural Type

BEHi CODE

Integration Code

Element Type

# Nodes

Solid continuum composite

SLCOMP

LASTN*
Q

HEX
HEX
HEX

8
8
20

*Only DIRECT=1 or -1 is allowed

--------------------

8. In the following table, BEHiH refers to the heat behavior of 3D-solid elements. An  underlined  item delineates a default.

Heat Classification of Elements

Element Heat Type

BEHiH CODE

Integration Code

Element Type

# Nodes

Solid continuum composite

SLCOMP

L
Q

HEX
HEX

8
20

--------------------

9. Integration codes in Remark   and   are:

INT CODE

Integration Type

L

Linear

ASTN

Assumed STraiN enhanced formulation solid shell

Q

Quadratic

--------------------

10. The material coordinate system CORDM may be the basic system (0 or blank) or the element coordinate system (-1) or any defined coordinate system (> 0) (Default = 0).

THETAi in conjunction with CORDM is used to define the ply orientation.

a. For BEH = SLCOMP and INT = ASTN, the X axis of the CORDM system is projected onto the layer plane to form the local X axis. The normal direction of the element (thickness direction = local Z axis) is crossed with the local X axis to yield the local Y axis. THETAi is then measured positive counter-clockwise about the local Z axis. If the X axis of the CORDM is in the same direction as the thickness direction, then the analysis will stop with an error.

b. For BEH = SLCOMP and INT = L or Q, the Material Coordinate System is a function of how NLMOPTS, INLAM, CPROJ is set.

     If CPROJ is ON then the projection scheme (see  Figure 0-83 ) is activated. With the activation of projection scheme the X axis of the CORDM system is projected onto the layer plane to form the local X axis. The normal direction of the element (thickness direction = local Z axis) is crossed with the local X axis to yield the local Y axis. THETAi is then measured positive counter-clockwise about the local Z axis. If the X axis of the CORDM is in the same direction as the thickness direction, then the analysis will stop with an error.

![linsol_projscheme.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/linsol_projscheme.png?_LANG=enus)

Figure 0-83   Projection Scheme

     In  Figure 0-83 , plane ABCD is the layer plane of interest. Z m  is normal to the layer plane (or is the thickness direction). X m  is the projection of the X axis of the MCID coordinate system on the layer plane.  ![bulkp06892.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06892.jpg?_LANG=enus)  gives the Y m . Angle theta is measured counter-clockwise from X m  axis about the Z m  axis.

     If CPROJ is OFF (default), THETAi is then measured positive counter-clockwise  about the local Z axis . The local Z is perpendicular to layer plane defined by the layup direction via DIRECT describer.

11. PCOMPLS is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PCOMPLS property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PSOLID, PCOMPLS, PLCOMP, PCOMPG entries.

