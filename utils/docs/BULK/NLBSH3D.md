## [NLBSH3D](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLBSH3D.xhtml) - Nonlinear 3-dimensional rotor loading

Defines connectivity of a three-dimensional nonlinear load as a function of relative deflection and velocity of a grid pair which in turn is a function of rotor speed.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLBSH3D SID     GA      GB      Blank   LID-1   LID-2
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ SID       │ Nonlinear load set identification number. (Integer > 0; Required) │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ GA        │ Inner grid. (Integer > 0; Required)                               │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ GB        │ Outer grid. (Integer > 0; Required)                               │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ LID-1     │ Load vs deflection group ID of a LBSH3DG (Integer > 0; Required)  │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ LID-2     │ Load vs velocity group ID of a LBSH3DG (Integer > 0; Required)    │
└───────────┴───────────────────────────────────────────────────────────────────┘
```

##### Remarks:

1. NLBSH3D are selected with the Case Control command NONLINEAR = SID.    
2. In order to ensure correct results, GRID points GA and GB must satisfy the following three conditions:
     - They must both be grid points
     - They must be coincident
     - They must have parallel displacement coordinate systems
       
       The program checks for the above conditions. If they are not satisfied, the program will terminate the run with an appropriate fatal message.

3. Multiple NLBSH3D may reference the same SID but require different GA, GB grid pairs.
4. Multiple NLBSH3D entries may refer to the same LID independent of SID.
5. Non-linear load is calculated as a function of relative deflection and velocity, which in turn are functions of rotor speed, between GRID points GA and GB. Till version 2019FP1, non-linear load = load (deflection (rotor speed)).
6. The loads are applied to the DOFs of GA and GB, based on the difference in displacement (u -u ) or velocity (v -v ) at the 2 GRID points, according to the tables referenced on the LBSH3DG entries. A positive difference in the displacement/velocity results in a positive force being applied to GA and a negative force being applied to GB
7. GA and GB must have all 6 DOF in D-set. Both grids should not be dependent on any RBE or MPC and must not be constrained by an SPC. The program checks for active DOFs of both the grids. If they are not satisfied, the program will terminate the run with an appropriate fatal message.
