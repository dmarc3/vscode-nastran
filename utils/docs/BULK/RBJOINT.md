## [RBJOINT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBJOINT.xhtml) - Defines a Joint Between Two Rigid Bodies

Defines a joint between two rigid bodies. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBJOINT ID      TYPE    N1      N2      N3      N4      N5      N6              
                RPS                                                             
```
#### Examples:

#### Example 1 - Cylindrical Joint

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBJOINT 1       CYLIND  101     201     103     204                             
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ RBJOIN identification number. (Integer > 0; Required)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Type of RBJOIN. (Character; Required) Types available are (node numbers in the images correspond   │
│           │ to N1, N2, etc.):                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ TYPE=SPHER(spherical), The relative motion of the rigid bodies are constrained so that nodes which │
│           │ are initially coincident remain coincident. In the below figure the socket's node is not interior  │
│           │ to the socket-SOL700 does not require that a rigid body's nodes be interior to the body.           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ TYPE=REVOLUTE, Both nodal pairs (1,2) and (3,4) are constrained to remain coincident.              │
│           │ Consequently, the relative motion of these rigid bodies is restricted to rotations about the line  │
│           │ segment formed by the two pairs of coincident nodes. This segment is labeled the "centerline".     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ TYPE=CYLIND (cylindrical), This joint is derived from the rotational joint by relaxing the         │
│           │ constraints along the centerline. This joint admits relative rotation and translation along the    │
│           │ centerline.                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ TYPE=PLANAR, This joint is derived from the rotational joint by relaxing the constraints normal to │
│           │ the centerline. Relatively displacements along the direction of the centerline are excluded.       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ TYPE=UNIVERS (universal joint), In contrast with the preceding joints, nodal pairs (1,2) and (3,4) │
│           │ are not initially coincident. Rather, the segments formed by (1,3) and (2,4) must be orthogonal;   │
│           │ and they serve as axes about which the two bodies may undergo relative rotation. The universal     │
│           │ joint excludes all other relative motion and the axes remain orthogonal at all time.               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ TYPE=TRANSL (translational), This is a cylindrical joint with a third pair of off-centerline nodes │
│           │ which restrict rotation. Aside from translation along the centerline the two rigid bodies are      │
│           │ stuck together.                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N1        │ GRID id of Node 1, in rigid body A. Define for all joint types                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N2        │ GRID id of Node 2, in rigid body B. Define for all joint types                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N3        │ GRID id of Node 3, in rigid body A. Define for all joint types except SPHER.                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N4        │ GRID id of Node 4, in rigid body B. Define for all joint types except SPHER.                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N5        │ GRID id of Node 5, in rigid body A. Define only for joint types TRANSL.                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N6        │ GRID id of Node 6, in rigid body B. Define only for joint types TRANSL.                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPS       │ Relative penalty stiffness (Default = 1.0)                                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
