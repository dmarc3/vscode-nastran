## [HADAPTL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HADAPTL.xhtml) - Local Adaptive Mesh Refinement Control Parameters - SOL 101 & 400 (Linear)

Specifies Local Adaptive Mesh Refinement control parameters.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HADAPTL ID                      REPEAT  CRITID  WHEREMETWHEREID SNAPMETH        
        MAXLEVEL                                                                
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HADAPTL 1                       10      1       PROP    5                       
```
```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ ID        │ Identification number referenced by the Case      │                                                 │
│           │ Control HADAPT command. (Integer > 0; no Default) │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ REPEAT    │ Maximum number of analysis performed before the   │                                                 │
│           │ adaptive mesh refinement process is stopped. See  │                                                 │
│           │ Remark 3. (Integer > 0; Default = 6)              │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ CRITID    │ Identification number of a mesh refinement        │                                                 │
│           │ criterion to be selected with the HADACRI Bulk    │                                                 │
│           │ Data entry. See Remarks 1. and 2. and the HADACRI │                                                 │
│           │ Bulk Data entry. (Integer > 0; no Default)        │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ WHEREMET  │ Method to specify the mesh refinement region      │                                                 │
│           │ subjected to the refinement criterion referenced  │                                                 │
│           │ by the field CRITID. It can take the values:      │                                                 │
│           │ “ALL” or “SUPER” or “PROP”. See Remark 4.         │                                                 │
│           │ (Character; Default = ALL)                        │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ WHEREID   │ ID of the mesh refinement region subjected to the │                                                 │
│           │ refinement criterion referenced by the field      │                                                 │
│           │ CRITID. Must be specified if WHEREMET is “SUPER”  │                                                 │
│           │ or “PROP”. If WHEREMET=ALL, this field will be    │                                                 │
│           │ ignored. See Remark 4. (Integer > 0; Default = 0) │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ SNAPMETH  │ Method to project, snap or relax new grid pints   │                                                 │
│           │ created on mid-edge or mid-faces on the mesh      │                                                 │
│           │ boundary during the refinement process onto the   │                                                 │
│           │ analysis domain boundary:                         │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 0                                                 │ No projection; New grids are placed in the mid- │
│           │                                                   │ side of edges.                                  │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 1                                                 │ New grid points are projected onto a smooth     │
│           │                                                   │ approximation of the analysis domain boundary   │
│           │                                                   │ interpolated from the initial mesh boundary.    │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ (Integer > 0; Default = 0)                        │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ MAXLEVEL  │ Maximum refinement level allowed for each         │                                                 │
│           │ individual element in the mesh. No elements in    │                                                 │
│           │ the mesh will be refined to a level bigger then   │                                                 │
│           │ MAXLEVEL. (Integer > 0; Default = REPEAT)         │                                                 │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```
#### Remarks:

1. The adaptive mesh refinement occurs when a particular refinement criterion is satisfied. Data for the refinement criterion is specified by the Bulk Data entry HADACRI referenced by the CRITID field.

2. Multiple mesh refinement criteria can be selected in different subsets of the model. To this end, the user needs to define multiple HADAPTL entries with the same ID. Each entry might specify a different criteria (referenced in the CRITID field and defined on the corresponding HADACRI Bulk Data entry) on different subsets of the mesh (defined in the WHEREMET and WHEREID fields).

3. When multiple HADAPTL entries with the same ID are specified, NASTRAN will chose for the REPEAT, SNAPMETH, and MAXLEVEL field the maximum among all multiple instances.

4. The fields WHEREMET and WHEREID refer respectively to the Method to specify the mesh refinement region (subjected to the refinement criterion referenced by the field CRITID and defined with the Bulk Data entry,  ) and its corresponding ID. For example, WHEREMET=SUPER, WHEREID=3 means that local adaptive mesh refinement (with the criteria referenced by the CRITID field) should be effected only in superelement 3. Likewise, WHEREMET=PROP, WHEREID=5 (see the previous Example) means that local adaptive mesh refinement (with the criteria referenced by the CRITID field) should be effected only in those element with Property ID equal to 5. Finally, WHEREMET=ALL imply mesh refinement in all elements.

5. In partitioned superelements, the HADAPT entry must be specified in the main bulk data section. Entries specified in the Bulk Data Section corresponding to individual parts (sections beginning with BEGIN SUPER) will be ignored.

6. When using regular superelements, the Bulk Data Section must begin with BEGIN SUPER as opposed to BEGIN BULK, in order for the refinement to be appropriately propagated across superelement boundaries. If BEGIN BULK is used, grid points on the superelement boundaries will be duplicated and not shared by the joining superelements.

7. The user should avoid the use of MPC sets 90000000 to 99999999 which are reserved for hanging nodes constraints generated during the adaptive mesh refinement process.

8. The user might need to adjust the VARPHI parameter to ensure proper singular geometric feature detection (such as sharp edges or corners) (See the Parameter,  ).

9. When SNAPMETH=0, all mid-edge nodes belonging to straight edges are placed on the mid-side of its edge. By contrast, when SNAPMETH=1, mid-edge nodes belonging to the boundary of the mesh are projected to a smooth approximation of the analysis domain boundary interpolated from the mesh boundary.

10. Mid-face nodes belonging to bilinear quadrilateral faces are placed at the baricenter of its face.

