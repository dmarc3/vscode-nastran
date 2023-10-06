## [MATFAB](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATFAB.xhtml) - Woven Fabric Material- SOL700

Defines the properties of a bi-directional woven fabric material for shell elements. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATFAB  MID     RHO     ECOAT   NUCOAT  GCOAT   DAMPCOATCOMPCOATPERC    +       
+       E1L     E1Q             THETA1  XWARP   YWARP   ZWARP           +       
+       E2L     E2Q             THETA2  XWEFT   YWEFT   ZWEFT           +       
+       SCOF    G12     DAMPFIB COMPFIB LOCKANG1LOCKANG2                        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATFAB  3       850     5.52E6  0.33                                    +       
+       21.6E7                          1.0     0.0     0.0             +       
+       21.6E7                          0.0     1.0     0.0                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Unique material number. (Integer > 0; required)                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Density. (Real > 0.0; required)                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ECOAT     │ Young's modulus of coating material. See Remark 1. (Real > 0.0; default=blank)                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NUCOAT    │ Poisson's ratio of coating material. See Remark 1. (Real > 0.0; default=blank)                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GCOAT     │ Shear modulus of coating material. See Remark 1. (Real > 0.0; default=blank)                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMPCOAT  │ Damping is applied to the coating stresses. See Remark 2. (Real >0.0; default=0.1)              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPCOAT  │ Scale factor for coating compression stresses. See Remark 3. (0.0? Real?1.0; default=1.0)       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PERC      │ Thickness percentage of coating material. (0.0? Real?100.0; default=0.0=no coating)             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E1L       │ Young's modulus of fabric in warp direction, linear coefficient. (Real > 0.0; required)         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E1Q       │ Young's modulus of fabric in warp direction, quadratic coefficient. (Real >0.0; default=0.0)    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA1    │ Orientation angle between the element coordinate system and the warp ends. See Remark 4. (Real; │
│           │ default=blank)                                                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XWARP     │ X component of vector indicating the warp direction of the fabric material. The vector is with  │
│           │ respect to the basic coordinate system. See Remark 4. (Real; default=1.0)                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YWARP     │ Y component of vector indicating the warp direction of the fabric material. The vector is with  │
│           │ respect to the basic coordinate system. See Remark 4. (Real; default=0.0)                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ZWARP     │ Z component of vector indicating the warp direction of the fabric material. The vector is with  │
│           │ respect to the basic coordinate system. See Remark 4. (Real; default=0.0)                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E2L       │ Young's modulus of fabric in weft direction, linear coefficient. (Real > 0.0; required)         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E2Q       │ Young's modulus of fabric in weft direction, quadratic coefficient. (Real ? 0.0; default=0.0)   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA2    │ Orientation angle between the element coordinate system and the weft ends. See Remark 4. (Real; │
│           │ default=blank)                                                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XWEFT     │ X component of vector indicating the weft direction of the fabric material. The vector is with  │
│           │ respect to the basic coordinate system. See Remark 4. (Real; default=0.0)                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YWEFT     │ Y component of vector indicating the weft direction of the fabric material. The vector is with  │
│           │ respect to the basic coordinate system. See Remark 4. (Real; default=1.0)                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ZWEFT     │ Z component of vector indicating the weft direction of the fabric material. The vector is with  │
│           │ respect to the basic coordinate system. See Remark 4. (Real; default=0.0)                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCOF      │ Shear coefficient of friction. See Remark 6. (Real; default=0.0)                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G12       │ Shear modulus of fabric material. See Remark 7. (Real; default=blank)                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMPFIB   │ Damping is applied to the fiber stresses. See Remark 2. (Real ≥ 0.0; default=0.1)               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPFIB   │ Scale factor for fiber compression stresses. See Remark 3. (0.0 ≤ Real ≤1.0; default=1.0)       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOCKANG1  │ Locking angle 1 for change in fiber cross-over angle. See Remark 10. (Real≥ 0.0; default=10.0)  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOCKANG2  │ Locking angle 2 for change in fiber cross-over angle. See Remark 10. (Real ≥ 0.0; default=15.0) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. When a coating is defined (PERC>0), two out of three values need to be specified for ECOAT, NUCOAT, and GCOAT.

2. For air bag modeling the following values of DAMPCOAT and DAMPFIB are suggested:

     ```nastran
     DAMPCOAT= 0.05
     DAMPFIB= 0.05
     ```

3. The compressive stresses in the fibers are scaled with the value of COMPFIB. Putting COMPFIB = 0.0 results in a tension only fiber model.

     The compressive stresses in the coating are scaled with the value of COMPCOAT. Putting COMPCOAT = 0.0 results in a tension only coating model.

     The compressive stresses are scaled in the direction of the principal stresses.

     When PERC = 100%, and the coating of this fabric model is used to simulate an isotropic air bag material, it is best to scale down the compressive stresses of the coating. A suggested value is COMPCOAT = 0.1

4. Since this is a model which tracks warp and weft directions and uses total warp/weft strain as a state variable, the initial warp and weft directions must be specified. There are two ways to indicate the initial warp and weft directions:

     - THETA1 and THETA2

     Orientation angles between the element coordinate system and the warp/weft ends. If no orientation angle is specified, vectors will be used to indicate the warp/weft directions of the fabric material with respect to the basic coordinate system.

     - XWARP, YWARP, ZWARP and XWEFT, YWEFT, ZWEFT

     Vectors indicating the warp/weft directions of the fabric material with respect to the basic coordinate system. The projection of these vectors on the surface of each element is used to determine the angle between the element and the material coordinate system. If the orientation angles are defined, these vectors are ignored.

5. For shell element properties (PSHELL1), when the material is MATFAB, the material angle THETA is ignored. The orientation of the fabric fibers is defined completely on the MATFAB entry.

     For layered composite element properties (PCOMP), when the material of a ply is MATFAB, the angle THETAi is ignored. The orientation of the fabric fibers is defined completely on the MATFAB entry.

6. The maximum shear stress is given by a friction coefficient of the fabric (SCOF) times the RMS value of the direct fiber stresses.
7. If the field G12 is left blank, the shear modulus is computed from the RMS value of the two linear stiffness coefficients.
8. When MATFAB material is referenced by shell elements, the Spin Rate method (SPIN) is applied automatically when no stress-rotation correction is specified on SPINCOR option. See PSHELL1 entry for the details on SPINCOR option.
9. There are a number of specific output sublayer variables useful for this material:

     ```text
     Q1AF      Direction cosines/sines between the element coordinate
     Q2AFIB    System and the warp ends
     Q1BFIB    Direction cosines/sines between the element coordinate
     Q2BFIB    System and the weft picks
     SGMA      Direct stress in fabric parallel to the warp ends
     SGMB      Direct stress in fabric parallel to the weft picks
     SGFRIC    Stress due only to shear in the weave of the fabric
     EPSFA     Strain in fabric parallel to the warp ends
     EPSFB     Strain in fabric parallel to the weft picks
     ANGLE     Crossover angle between warp ends and weft picks
     ```

10. When a fabric is being sheared, the angle between the fibers changes. At a certain moment, the fibers will reach a locking angle, after which a further change in the fiber angle is no longer possible.

     The simulation models this behavior as follows:

     - Change in Fiber Crossover Angle < LockAng1

     The shear stress between the fibers is cut off based on the friction coefficient SCOF

     - LockAng1 < Change in Fiber Crossover Angle < LockAng2

     The shear stress between the fibers is linearly increased.

     - Change in Fiber Crossover Angle > LockAng2

     The shear stress between the fibers is no longer cut off.

     This situation is equal to an infinite friction coefficient SCOF.

