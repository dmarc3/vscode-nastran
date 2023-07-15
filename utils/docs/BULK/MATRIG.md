## [MATRIG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATRIG.xhtml) - Rigid Material

Defines the properties of a rigid material in SOL 700.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATRIG  MID     RHO     E       NU      MASS    XC      YC      ZC              
        IXX     IXY     IXZ     IYY     IYZ     IZZ     CID                     
        VX      VY      VZ      WX      WY      WZ                              
        XC-LOCALYC-LOCALZC-LOCAL                                                
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATRIG  7       7850.   210.E9  0.3     750     0.0     7.0     -3.0            
        17.0    13.2    14.3    20.9    15.7    10.0    12                      
                        13.3                                                    
```
```text
┌──────────────┬──────────────────────────────────┬─────────────┬───────────────────────┐
│ Describer    │ Meaning                          │ Type        │ Default               │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ MID          │ Unique material number.          │ I > 0       │ Required              │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ RHO          │ Density                          │ R > 0       │ 1.0                   │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ E            │ Young’s modulus                  │ R > 0       │ 1.0                   │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ NU           │ Poisson’s ratio                  │ 0.0 R < 0.5 │ 0.2                   │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ MASS         │ Mass of the rigid body.          │ R > 0.0     │ See Remark 2.         │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ XC, YC, ZC   │ x, y, and z coordinates of the   │ R           │ See Remark 6.         │
│              │ center of gravity.               │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ IXX, IXY,    │ Inertia tensor of the rigid body │ R           │ See Remark 6.         │
│ IXZ, IYY,    │ about the center of gravity.     │             │                       │
│ IYZ, IZZ     │                                  │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ CID          │ Number of a coordinate system in │ I > 0       │ See Remarks 7. and 8. │
│              │ which the inertia tensor and the │             │                       │
│              │ center of gravity are defined.   │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ VX, VY, VZ   │ Initial translational velocity   │ R           │ 0.0                   │
│              │ of the center of gravity in the  │             │                       │
│              │ basic coordinate system.         │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ WX, WY, WZ   │ Initial rotational velocities of │ R           │ 0.0                   │
│              │ the rigid body about the center  │             │                       │
│              │ of gravity in the basic          │             │                       │
│              │ coordinate system.               │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ XC-LOCAL YC- │ x, y, and z local coordinates of │ R           │ See Remark 8.         │
│ LOCAL ZC-    │ the center of gravity            │             │                       │
│ LOCAL        │                                  │             │                       │
└──────────────┴──────────────────────────────────┴─────────────┴───────────────────────┘
```
#### Remarks:

1. All coordinates are defined in the basic coordinate system.

2. If MASS is blank or zero, the mass will be calculated from the density and the geometry of the mesh defining the rigid body.

3. The continuation lines are not required.

4. The MATRIG definition is used instead of a material definition and is referenced by properties PSOLIDn, PSHELLn, PBAR, and PBEAMn. Different properties can refer to the same MATRIG entry forming one rigid body.

5. If the fields VX, VY, VZ, WX, WY, and WZ are blank, then the initial conditions of the rigid body are calculated from the initial velocities on the TIC and TIC1 entries referring to grid points attached to the rigid body. The net initial conditions are the average of those for all the grid points attached to the rigid body.
If the initial conditions are set using the VX, VY, VZ, WX, WY, and WZ fields, the TIC and TIC1 entries referring to grid points attached to the rigid body are ignored.

6. If the inertia tensor or the coordinates of the center of gravity are undefined, then they will be computed from the density or mass and the geometry of the mesh defining the rigid body.

7. The inertia tensor can only be defined in a local rectangular coordinate system. If the entry for a local coordinate system is left blank, then the inertia tensor is defined in the global coordinate system.

8. The center of gravity can be defined in a local rectangular coordinate system (CID). However, XC YC ZC (x, y, and z coordinates of the center of gravity in the basic coordinate system) should be left blank when XC-LOCAL YC-LOCAL ZC-LOCAL (x, y, and z coordinates of the center of gravity in a local coordinate system) defined.

