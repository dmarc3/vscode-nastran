## [COMPUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COMPUDS.xhtml) - Orthotropic Failure Model that allows to model Property Degradation

Defines an orthotropic failure model for shell composites specified by a user subroutine. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COMPUDS MID     GROUP   UNAME                                           +       
+       E1      E2      N12     G12     G1,Z    G2,Z    RHO             +       
+       NV      S       ALPHA   TRSFAIL F12                             +       
+       XT      XT      YT      YC      PFD     VALUE   PFDST           +       
+       FBTEN   FBCOM   MXTEN   MXCOM   MXSHR                           +       
+       PRDFT   PRDFC   PRDMT   PRDMC   PRDSH                           +       
```

#### Example:

In FMS Section of the MSC Nastran input stream:

```text
CONNECT SERVICE excomp1  'SCA.MDSolver.Obj.Uds.Dytran.Materials'
```

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COMPUDS 1       EXCOMP1                                                 +       
+       30E6    1.0E6   0.3     2.0E6   3.0E6   1.5E6   0.056           +       
+       5       100                                                     +       
+       200     150     100     110                                             
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field        │ Contents                                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID          │ Unique material identification number. (Integer > 0; required)                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP        │ The group name used for the FMS section CONNECT SERVICE statement. (Character; required).          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME        │ User subroutine name associated with the entry. (Character; default = blank).                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E1           │ Modulus of elasticity in longitudinal direction (also defined as fiber direction or one-           │
│              │ direction). (Real > 0.0; required)                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E2           │ Modulus of elasticity in lateral direction (also defined as matrix direction or two-direction).    │
│              │ (Real > 0.0; required)                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N12          │ Poisson's ratio ( 2/ 1 for uniaxial loading in one-direction). Note that 21 = 1/ 2 for uniaxial    │
│              │ loading in two-direction is related to  12, E1, E2 by the relation  12 E2 =  21 E1. (Real > 0.0;   │
│              │ required)                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G12          │ In-plane shear modulus R. (Real > 0.0; required)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1,Z         │ Transverse shear modulus for shear in 1-Z plane. (Real > 0.0; default= G12)                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO          │ Mass density. (R > 0.0; required)                                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NV           │ Number of additional history variables for a user model. See Remark 8. (0 < Integer < 10;          │
│              │ default=0)                                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S            │ Failure stress for in-plane shear. (Real ≥ 0.0; default=0.0)                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA        │ Nonlinear shear coefficient. (Real ≥ 0.0; default=0.0)                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TRSFAIL      │ Transverse shear failure. (Character; default = SUBL) ELEM: Failure if element fails SUBL: Failure │
│              │ if sublayer fails                                                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F12          │ Interaction term in Tsai-Wu theory. (Real; default=0.0)                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XT, XC       │ Tensile compressive failure stress in the large structural direction. (Real > 0.0; required)       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YT, YC       │ Tensile compressive failure stress in the lateral direction. (Real > 0.0; required)                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PFD          │ Post-failure degradation model. (Character; default = STEPS) STEPS: Degrade stresses by time steps │
│              │ TIME: Degrade stresses by time VELOC: Degrade stresses by velocity                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALUE        │ Depending on PFD, VALUE gives the number of time steps, time interval, or propagation velocity.    │
│              │ (Integer or Real; default=100)                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PFDST        │ Post-failure degradation start. (Character; default=INDV) INDV Stresses are degraded per distinct  │
│              │ failure mode. ALL Stresses are degraded if all elastic constants are zero.                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FBTEN,FBCON, │ Failure modes in fiber, matrix direction, and theory failure. (Character; default=blank)           │
│ MXTEN,MXCOM, │                                                                                                    │
│ MXSHR        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRDFT        │ Property degradation due to fiber-tension failure. (Integer; default=1111)                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRDFC        │ Property degradation due to fiber-compression failure. (Integer; default=1010)                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRDMT        │ Property degradation due to matrix-tension failure. (Integer; default=0110)                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRDMC        │ Property degradation due to matrix-compression failure. (Integer; default=0110)                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRDSH        │ Property degradation due to in-plane shear failure. (Integer; default=0001)                        │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

11. Please check MAT8 and MAT8A cards about the details of each field. The field definition is identical as MAT8 and MAT8A.
12. UNAME can be:
