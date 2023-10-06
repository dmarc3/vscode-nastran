## [MESH](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MESH1.xhtml) - Mesh Generator

Defines a mesh. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MESH    MID     TYPE    DXEL    DYEL    DZEL    XREF    YREF    ZREF    +       
+       X0      Y0      Z0      DX      DY      DZ                      +       
+       NX      NY      NZ      SUBMESH NSTGP   NSTEL   PROP    PID     +       
+       RESIZE  TID-X   TID-Y   TID-Z   METHOD                          +       
+       BIAS    GROWX   GROWY   GROWZ   IBIDX   IBIDY   IBIDZ           +       
+       XOBX    YOBX    ZOBY    DXBX    DYBX    DZBX                    +       
+       CID                                                             +       
+       NELCUBE NBX     NBY     NBZ     PROCDIR NPX     NPY     NPZ             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MESH    1       ADAPT   0.1     0.2     0.3                             +       
+                                                                       +       
+                                                                       +       
+       SCALE   101                     ALL                             +       
+       CENTER  1.2     1.2     1.2                                             
```

```text
┌──────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer    │ Meaning                                           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID          │ Unique MESH number. See Remark 1. (Integer > 0;   │                                                   │
│              │ no Default)                                       │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TYPE         │ Type of mesh generation: See Remark 1.            │                                                   │
│              │ (Character; Required)                             │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ ADAPT                                             │ An Euler mesh will be created around a coupling   │
│              │                                                   │ surface. This option is only valid for            │
│              │                                                   │ PROP=EULER, and requires that the MID of the MESH │
│              │                                                   │ is referenced from the MESHID of a COUPLE card.   │
│              │                                                   │ During the simulation, when the coupling surface  │
│              │                                                   │ moves or deforms, the Euler mesh will adapt       │
│              │                                                   │ itself by adding and removing elements. The adapt │
│              │                                                   │ algorithm ensures that the coupling surface is    │
│              │                                                   │ contained inside the Euler mesh at all times with │
│              │                                                   │ the minimum amount of elements. The Euler         │
│              │                                                   │ elements are aligned with the basic coordinate.   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ BOX                                               │ A rectangular mesh will be created, that is       │
│              │                                                   │ aligned with the basic coordinate system. The     │
│              │                                                   │ mesh will use CHEXA elements.                     │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DXEL,DYEL,DZ │ Euler element sizes. See Remark 1. (Real)         │                                                   │
│ EL           │                                                   │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ XREF,YREF,ZR │ Coordinates of reference point. For TYPE=ADAPT,   │                                                   │
│ EF           │ these coordinates provide control over the        │                                                   │
│              │ location of the Euler mesh, to avoid that faces   │                                                   │
│              │ of the Euler mesh are initially at the same       │                                                   │
│              │ location as faces of the coupling surface. For    │                                                   │
│              │ TYPE=BOX, these coordinates will be used as the   │                                                   │
│              │ origin of the mesh. They are the default setting  │                                                   │
│              │ for (X0, Y0, Z0). (Real; Default = -1e-6)         │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ X0,Y0,Z0     │ Coordinates of point of origin. (Real, XREF,      │                                                   │
│              │ YREF, ZREF) Not used for TYPE=ADAPT               │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DX,DY,DZ     │ Width of mesh in different directions. For        │                                                   │
│              │ TYPE=ADAPT, these values will only be used if     │                                                   │
│              │ (DXEL, DYEL, DZEL) are left blank. See Remark 1.  │                                                   │
│              │ for more detail. (Real)                           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NX,NY,NZ     │ Number of elements in the different directions.   │                                                   │
│              │ For TYPE=ADAPT, these values will only be used if │                                                   │
│              │ (DXEL, DYEL, DZEL) are left blank. See Remark     │                                                   │
│              │ 1. for more detail. (Integer > 0)                 │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SUBMESH      │ Allows using smaller mesh sizes for a part of the │                                                   │
│              │ mesh. SUBMESH is the MESH ID of a finer mesh that │                                                   │
│              │ is to replace part of the mesh. See Remark        │                                                   │
│              │ 8. (Integer ³ 0, default=0)                       │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NSTGP        │ Starting grid-point number. Not used for          │                                                   │
│              │ TYPE=ADAPT. If there are multiple couple surfaces │                                                   │
│              │ then the starting grid-point number can only be   │                                                   │
│              │ specified if param,flow-method,facet has been     │                                                   │
│              │ activated. See Remark 2. (Integer > 0)            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NSTEL        │ Starting element number. Not used for TYPE=ADAPT. │                                                   │
│              │ If there are multiple couple surfaces then the    │                                                   │
│              │ starting element number can only be specified if  │                                                   │
│              │ param,flow-method,facet has been activated. See   │                                                   │
│              │ Remark 2. (Integer > 0)                           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PROP         │ Property type: (Character; default=EULER)         │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ EULER                                             │ An Eulerian mesh will be created.                 │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID          │ ID of a PEULER or PEULER1 entry. (Integer > 0,    │                                                   │
│              │ Required.)                                        │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RESIZE       │ Only valid for TYPE=ADAPT. See Remark 6.          │                                                   │
│              │ (Character, NONE) Option to change the element    │                                                   │
│              │ size during the simulation:                       │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ NONE                                              │ No resizing of DX,DY,DZ during simulation.        │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SCALE                                             │ The elements are resized by a scale-factor as a   │
│              │                                                   │ function of time.                                 │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ LENGTH                                            │ The elements are resized by specifying the length │
│              │                                                   │ as a function of time.                            │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TID-X        │ ID of a TABLED1. See RESIZE for contents of       │                                                   │
│              │ table. It must define a step function. See        │                                                   │
│              │ Remarks 4. and 5. (Integer > 0; Blank)            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TID-Y        │ ID of a TABLED1. See RESIZE for contents of       │                                                   │
│              │ table. It must define a step function. See        │                                                   │
│              │ Remarks 4. and 5. (Integer > 0; TID-X)            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ YID-Z        │ ID of a TABLED1. See RESIZE for contents of       │                                                   │
│              │ table. It must define a step function. See        │                                                   │
│              │ Remarks 4. and 5. (Integer > 0; TID-X)            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ METHOD       │ Method for determining when to create Euler       │                                                   │
│              │ elements: (Character; ALL)                        │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ ALL                                               │ Always re-mesh any existing Euler element.        │
│              │                                                   │  Maintains existing void regions. Only used for   │
│              │                                                   │ resizing.                                         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ MATERIAL                                          │ Only re-mesh those Euler elements that contain    │
│              │                                                   │ material. Removes void regions. See Remark 7.     │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BIAS         │ Adds bias to the mesh. (Character; Blank)         │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ CENTER                                            │ Starting at the center of the BOX the mesh size   │
│              │                                                   │ gradually changes such that the mesh size at the  │
│              │                                                   │ boundaries of the BOX is GROWX times the mesh     │
│              │                                                   │ size at the center.                               │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ REF                                               │ Starting at the reference point the mesh size     │
│              │                                                   │ gradually changes such that the mesh size at the  │
│              │                                                   │ boundaries of the BOX is GROWX times the mesh     │
│              │                                                   │ size at the center                                │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GROWX,       │ Total grow factor. Is the ratio between finest    │                                                   │
│ GROWY, GROWZ │ and coarsest element size. (Real > 0; Only        │                                                   │
│              │ required if BIAS is not blank)                    │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ IBIDX,       │ BIAS ID reference. See Remarks 9. and 10.         │                                                   │
│ IBIDY, IBIDZ │ (Integer; Default = 0)                            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ X0BX,Y0BX,Z0 │ Definition of an auxiliary box for output         │                                                   │
│ BX,DXBX,DYBX │ purposes. By defining an auxiliary box all        │                                                   │
│ ,DZBX        │ adaptive elements that are within the box for one │                                                   │
│              │ of the cycles requested are stored in the         │                                                   │
│              │ archive. This allows multiple cycles in one Euler │                                                   │
│              │ archive. This box should be sufficiently large    │                                                   │
│              │ such that it contains all elements. The fields    │                                                   │
│              │ X0BX, Y0BX and Z0BX specify the start point and   │                                                   │
│              │ DXBX, DYBX and DZBX specify the width of box. If  │                                                   │
│              │ the there are adaptive elements outside the box   │                                                   │
│              │ the run is terminated and a larger box needs to   │                                                   │
│              │ be specified. Only used for TYPE=ADAPT. (Real;    │                                                   │
│              │ Blank) See Remark 14.                             │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CID          │ ID - number of a local coordinate system.         │                                                   │
│              │ (Integer ³ 0; Default=0)                          │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NELCUBE      │ The number of elements per cube. This number is   │                                                   │
│              │ used as a guideline. The actual number used per   │                                                   │
│              │ cube can differ and can be found in the OUT file. │                                                   │
│              │ See Remark 12. (Integer ³ 1; Default=1)           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NBX          │ Overrules NELCUBE. The number of cubes in the     │                                                   │
│              │ x-direction. (Integer ³ 0; Default=1)             │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NBY          │ The number of cubes in the y-direction.(Integer ³ │                                                   │
│              │ 0; Default=NBX)                                   │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NBZ          │ The number of cubes in the z-direction. (Integer  │                                                   │
│              │ ³ 0; Default=NBX)                                 │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PROCDIR      │ This directive controls the way cubes are         │                                                   │
│              │ distributed across processors. The effect can be  │                                                   │
│              │ checked by checking the Eulerian output variable  │                                                   │
│              │ PARTITION. (Char, Default=X)                      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ X Partition in global X direction first.          │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ Y Partition in global Y direction first.          │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ Z Partition in global Z direction first.          │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ USER Define user defined partitioning.            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SIMPLE Partition Euler cubes in a simple pattern. │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NPX          │ The number of cubes in the x-direction. Required  │                                                   │
│              │ for PROCDIR=USER. (Integer, Default=1)            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NPY          │ The number of cubes in the y-direction. (Integer, │                                                   │
│              │ Default=NPX)                                      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NPZ          │ The number of cubes in the z-direction. (Integer, │                                                   │
│              │ Default=NPX)                                      │                                                   │
└──────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The grid-points of the mesh are generated at following locations:

     Type=ADAPT:  (x,y,z)=(XREF+i*DXEL, YREF+j*DYEL, ZREF+k*DZEL)

     Grid-points and elements located a certain distance outside the coupling surface will not be created. This saves memory and CPU time.

     When (XREF, YREF, ZREF) are outside the coupling surface, no grid-point will be created at this location, but the mesh will be shifted appropriately.

     Type=BOX:  (x,y,z) = (X0+i*DXEL, Y0+j*DYEL, Z0+k*DZEL)

     Nodes and Elements will always be created, even if the MESH is referenced from the MESHID of a COUPLE entry.

     One of the following input combinations is required:

     TYPE=ADAPT

          a. (DXEL, DYEL, DZEL)

          or

          b. 1

          c. (DX, DY, DZ) and  (NX, NY, NZ)

     ➔  DXEL = DX/NX  ;  DYEL=DY/NY  ;  DZEL=DZ/NZ

     TYPE=BOX

          a. (DXEL, DYEL, DZEL) and  (NX, NY, NZ)

          or

          b. (DX, DY, DZ) and  (NX, NY, NZ)

               ➔  DXEL = DX/NX  ;  DYEL=DY/NY  ;  DZEL=DZ/NZ

2. When the starting grid point and/or element number is left blank, then the default start number for the elements and grid-points is equal to the maximum number used +1. For simulations with multiple coupling surfaces two methods of treating transport between the Euler meshes are available. One method supports meshes of TYPE = ADAPT, but does not allow the specification of starting element or starting grid-point number.

3. The PID should refer to an existing property id, which can handle the property type given by PROP.

4. To avoid that the Euler mesh will be resized every time-step, the functions defined by TID-X, TID-Y, TID-Z must describe a ‘step-function’, like in this example:

     i.    TABLED1,1,,,,,,,,+

     ii.   +,0.0,1.0,,,,,,,+

     iii.  +,1.E-3,1.0,,,,,,,+

     iv. +,1.E-3,1.1,,,,,,,+

     v.  +,2.E-3,1.1,,,,,,,+

     vi. +,2.E-3,1.2

     Which specifies following function:

![bulkno05994.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05994.jpg?_LANG=enus)

5. Care must be taken when refining the Euler mesh. To avoid instabilities, it is advised to stay within the following guidelines:

     a. Each refining step, use a scale factor larger than 0.5

     b. Allow the solution to become smooth again after each refining step. For airbag simulations, use an interval larger than  5*diameter_airbag/soundspeed

6. Resizing is not available for the Multi-material solver.

7. In most cases METHOD = ALL is the preferred method. Using METHOD=MATERIAL may be helpful in case of instabilities due to presence of void regions.

8. SUBMESH glues a fine mesh into a coarse mesh and uses the same gluing functionality as  PARAM, GRADEDMESH. If the fine mesh is completely contained inside the coarse mesh no restrictions apply. Then to avoid any  restrictions the grid points of the fine mesh are slightly displaced.  But if parts of the fine mesh are outside the coarse  mesh a  restriction applies. In that case an Euler element of the coarse mesh has to be fully active or fully inactive. This means that the coarse element should not intersect elements of the fine mesh or it should be fully covered by the fine elements. Fine elements are not allowed to cover any part of the coarse elements. In practice, this means that the fine mesh has to fit nicely in the coarse mesh. For details refer to the section "Graded meshes"  in the  MSC Nastran Explicit Nonlinear User’s Manual.

     When running on one cpu the elements of the Euler mesh and the submesh will be put into one euler archve. But when running with multiple cpus, the mesh and sub mesh will be put in different euler archives. To distinguish the archives, the name _FVX is added to the Euler archive names. Here X is the MESH-ID MID. The Euler archive of the mesh and the submesh can be read simultaneously into Patran.

9. A biased mesh has nonconstant element sizes in selected directories. Neighbor element size can have a constant ratio or have identical size. In literature, this type of mesh is also referred to as a nonuniform mesh or a locally refined mesh.

10. A block mesh consists of a number of planes in all three directions. For a nonbiased mesh, these planes are at fixed distance from each other. In a biased mesh, the distance between subsequent planes can differ. The varying element size is determined by:

     a. IBIDX

     b. GROWX

     c. The constant step size specified by X0, NX, DX.

     Here, IBIDX overrules GROWX and GROWX overrules the X0, NX DX specification. Likewise, for the other directions. The locations of the planes are written out in the OUT file. Intersecting an x-plane with a y-plane and z-plane will give a grid point. By carrying out all intersections, the grid points are constructed.

11. Defining the CID allows for positioning the mesh box arbitrarily in space. When active, the following restrictions apply:

     MESH,ADAPT cannot be used

     The use of single material Euler with strength elements is not supported

12. Setting NELCUBE, NBX, NBY, NBZ allow to divide the Euler mesh into a number of cubes. By setting NELCUBE equal to 2000, optimal use is made of memory caching during Euler computation. This can give a speedup of 1.5. If NBX is defined, also NBY and NBZ need to be defined. Defining NBX overrules the definition of NELCUBE.

     When using multiple Euler cubes the BARRIER and FLOW definitions only support geometric conditions like boundary face direction and square definition.

13. There are several ways to distribute cubes across processors. Some ways may lead to bad load balancing. To avoid this it is possible to control the way Euler cubes are distributed across processors by defining PROCDIR.

     When option PROCDIR=USER, the values for NBX, NBY, and NBZ must be such that NBX is equal or a multiple of NPX, NBY is equal or a multiple of NPY and NBZ is equal or a multiple of NPZ. Also for this option, NPX*NPY*NPZ must be equal to the number of processors used in the cluster.

     For option PROCDIR=SIMPLE, the values NBX, NBY, and NBZ on DYPARAM,EULERCB must be such that NBX*NBY*NBZ is equal or a multiple of the number of processors used. For instance, if the number of processors in the cluster is 4, NBX*NBY*NBZ must be equal to either 4 or 8 or 12, etc. Otherwise, the calculation will terminate prematurely with an error message.

     When using these options the Barrier and FLOW definitions only support geometric conditions like boundary face direction and a square definition

14. To determine a suitable size for the static output box, the simulation can be run first without the fields X0BX, Y0BX, Z0BX, DXBX, DYBX, and DZBX set. In the ,OUT file each summary of adaptive meshing gives the smallest box surrounding all adaptive elements so far. The last summary then yields the dimension of the static output box. To accommodate for elements that are not completely inside the box, the actual static output box is automatically extended a little. The actual dimensions are written in the out file after the first adaptive meshing summary. Is not needed to set the XREF, YREF, and ZREF option. If they are set the static output box will be compatible with the defined reference point.

