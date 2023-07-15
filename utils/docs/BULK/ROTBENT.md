## [ROTBENT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.ROTBENT.xhtml) - Define kinks and offsets to be applied on a rotor, pull the rotor on to its bearing and then carry out rotordynamic analysis (SOL 400 only).

Specifies rotor initial deformation due to kink and offset.

##### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTBENT Bent ID Rotor IDLoad ID                                                 
        Unbcord x1      x2      x3                                              
        Kink    Station Kink ...Phase...                                        
        Offset  Station Offse...Phase...                                        
        Brgdpr  Rotor...Stato...                                                
```
##### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTBENT 101     10      99                                                      
        Unbcord 1.0     0.0     0.0                                             
        Kink    30.0    0.06    135.0                                           
        Brgdpr  1       111                                                     
                51      151                                                     
                81      181                                                     
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTBENT 200     10      1                                                       
        Offset  3.82    0.001   30.0                                            
                15.54   0.002   130.0                                           
                28.45   0.003   230.0                                           
                38.45   0.004   330.0                                           
        Kink    10.35   0.06    45.0                                            
                22.02   0.12    145.0                                           
                33.45   0.18    245.0                                           
                48.45   0.24    345.0                                           
        Brgdpr  11      111                                                     
                17      117                                                     
                35      135                                                     
        Unbcord 0.0     -1.0    2.0                                             
```
```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Bent ID      │ Identification number of ROTBENT. (Integer > 0, required, no default).                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Rotor ID     │ Rotor identification number for which the kinks and offsets are defined. See Remark 2.,            │
│              │ 3. (Integer > 0, required, no default).                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Load ID      │ Load identification number, to be selected by LOAD case control in the first STEP. See Remark      │
│              │ 4. (Integer > 0, required, no default).                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Unbcord      │ Components of the vector to determine the X-Y plane of the rotor system for Kinks and Offsets. See │
│              │ Remark 6. (Real, required, no default).                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Kink         │ Flag indicating that the next 3 fields are for kink definition. See Remark 7. (Character,          │
│              │ optional)                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Station      │ Location on rotor from ROTOR ID 1st grid along the rotor axis, from where the Kink starts. (Real,  │
│              │ required if kink is specified, no default).                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Kink angle   │ Kink angle based on Unbcord defined rotor Z-axis. See Remark 8. (Real, DEG, required if kink is    │
│              │ specified, no default).                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Phase angle  │ Phase angle about the rotor X-axis, based on Unbcord defined rotor X-Y plane. (Real, DEG, required │
│              │ if kink is specified, no default).                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Offset       │ Flag indicating that the next 3 fields are for offset definition. See Remark 7. (Character,        │
│              │ optional)                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Station      │ Location on rotor from ROTOR ID 1st grid along the rotor axis, from where the Offset starts.       │
│              │ (Real, required if offset is specified, no default).                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Offset value │ Offset value on the axis of the rotor. (Real, required if offset is specified, no default).        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Phase angle  │ Phase angle based on Unbcord defined rotor X-Y plane. (Real, DEG, required if offset is specified, │
│              │ no default). A phase angle of 0.0 results in an offset in the positive Rotor Y-axis.               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Brgdpr       │ Flag indicating that the next 2 fields are for paired grids. See Remark 12. (Character, required). │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRID IDi     │ Paired grids ID to indicate paired connection between rotor and support after initial deformation. │
│              │ (Integer > 0, required, no default). First grid should be part of ROTOR & second grid should be    │
│              │ part of Stator.                                                                                    │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
##### Remarks:

1. ROTBENT is supported only in SOL 400 analysis.

2. One ROTBENT entry with unique BENT ID value is allowed. ROTBENT analysis is supported for only one SUBCASE definition, having 2 STEP analyses. STEP1 analysis should be NLSTATIC/NLSTAT. STEP 2 analysis runs rotordynamics analysis (complex eigenvalue, frequency response).

3. ROTBENT only support 1D element rotor defined by ROTOR entry.

4. ROTBENT uses Load ID to perform STEP 1 NLSTATIC analysis.

5. In a ROTBENT bulk data card, the keywords (Kink, Offset, or Brgdpr) can only be defined once. Multiple rows for each keyword are allowed, except for Unbcord.

6. ROTBENT can take only one set of 'Unbcord' input, with three REAL values. The first 2 grids in AXIS option of ROTOR entry determine the X-axis of the Rotor system, with origin of this system to be at the first grid entry in AXIS option. Unbcord entries will form the vector used to determine the X-Y plane of Rotor system, defined using the CD of the first grid on AXIS option of ROTOR entry linked to the Rotor ID.

7. A rectangular coordinate (rotor system) formed in remark  , is used to determine the phase angle, which starts from the X-Y plane based on UNBCORD, and the kink angle, which rotates about Z-axis. In the following figures in the Rotor system, the rotor axis is X, and X-Y plane is determined by the Unbcord vector.

![rotbent_rotation.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/rotbent_rotation.png?_LANG=enus)

8. Kink is calculated in the rotor system X-Y plane, where the phase is zero (See Remark  ), by rotating the shaft at the station point about Z-axis to the defined kink angle, then the Kink shaft is rotated about the shaft axis (X) to the defined phase angle from the X-Y plane.

9. Offset is calculated in the rotor X-Y plane, where the phase is zero (See. Remark  ) then the Offset is rotated about the shaft axis (X) to the defined phase angle from the X-Y plane and applied to the rotor.

10. Offsets and Kinks are calculated separately at the shaft axis or the shaft center line. All the Kinks and Offsets are then accumulated to generate the initial unconstrained rotor geometry. Grid coordinate of unconstrained rotor will be printed out in f06 file.

![rotbent_OffsetKink.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/rotbent_OffsetKink.png?_LANG=enus)

11. Brgdpr entry needs at least one pair of existing GRID IDs. First id of the pair of entries of Brgdpr keyword should be part of referenced rotor and second id should be part of bearing (stator) connected to the rotor. All the first grid ids of each pair of entry should be added to AXIS option of reference ROTOR. It is recommended that both grid ids should not be part of any MPC, RBEs definition.

12. The initial step (NLSTATIC) updates the rotor geometry, writes the bulk data (program internally created MPC, SPOINTs, SPC1 and SPCD) entries to pull the rotor into the bearings and runs the static solution. This static solution step will result in the deformed shape of the model with the rotor pulled into the bearings. At this point, the rotor and bearing GRIDs of Brgdpr entry are coincident.

13. It is advised to have both grid entries of Brgdpr keyword to be at the same axial location. A small Kink angle is assumed (<1 deg) and the deformation in axial direction (axial and angular displacement) of the rotor grids is ignored.

14. The following figures are the brief description of the Kinks and Offsets in a rotor, where B1 and B2 are support locations and are paired with rotor grids in Brgdpr keyword.

![bulkqrs07504.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07504.jpg?_LANG=enus)

###

