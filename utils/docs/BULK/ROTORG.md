## [ROTORG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.ROTORG.xhtml) - Rotor Line Model Grids

Specifies grids that compose the rotor line model.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORG  ROTORID GRID1   GRID2   GRID3   GRID4   GRID5   GRID6   GRID7           
        GRID8   GRID9   -etc.-                                                  
```
or

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORG  ROTORID GRID1   THRU    GRID2   BY      INC                             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORG  100     101     1002    103     4001                                    
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORG  200     1001    THRU    1100    BY      2                               
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTORID   │ Identification number of rotor. (Integer > 0; Required). See Remarks 1. and 2..            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDi     │ Grids comprising the rotor. (Integer > 0; Required; no Default). See Remarks 3. through 7. │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRU      │ Specifies a range of identification numbers. (Optional)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ BY        │ Specifies an increment for a THRU specification (Optional)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ INC       │ Grid point number increment. (Integer)                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. ROTORIDs of ROTORG entries may not be the same as the ROTORIDs of ROTORAX entries or ROTORSE entries.

2. Multiple ROTORG entries with the same ROTORID are supported.

3. Grid IDs must be unique.  Duplicate grid IDs will produce a fatal error.

4. All grids specified on ROTORG entries for a specific ROTORID must be collinear. Collinearity will be checked.

5. If not using superelements, no element stiffness can be connected between any GRID listed on a ROTORG entry and any GRID not listed on the ROTORG. In this case, any connections to GRIDs listed on a ROTORG must be done using MPC equations or R-elements.

6. If superelements are used, no element stiffness in the residual structure may connect between a GRID listed on a ROTORG and any GRID not listed on the ROTORG. In this case, any connections in the residual structure to GRIDs listed on a ROTORG must be done using MPC equations or R-elements.

7. All mass for any rotor defined using a ROTORG entry should be defined on the GRIDs listed on the ROTORG entry. Any mass which should belong to the rotor, but is placed on GRIDs not listed on the ROTORG entry, will be ignored when calculating the gyroscopic terms for the rotor. Only the mass shown in the ROTOR DYNAMICS MASS SUMMARY in the .f06 file is included in the calculation of the gyroscopic terms for the rotor.

8. Bar elements (default version) do not have polar moment of inertia. Thus, if CBAR elements are defined along the axis of rotation (for both ROTOR and ROTORG entries), then they do not provide any contribution to gyroscopic matrix. The CABR elements can be replaced by CBEAM elements in case gyroscopic terms are needed for those elements.

