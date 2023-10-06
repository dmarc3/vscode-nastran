## [WALL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.WALL.xhtml) - Rigid Wall

Defines a rigid plane through which specified Lagrangian grid points cannot penetrate. Finite or infinite size (FINITE), Orthotropic friction (ORTHO) a mass and an initial velocity (MOVING) and Force output option (FORCES) can be defined. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WALL    ID      XP      YP      ZP      NX      NY      NZ      BCGRID  +       
+       METHOD  FS      FK      EXP                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WALL    17                                              1.0     21      +       
+       PENALTY 0.2                                                             
```

```text
┌────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer  │ Meaning                                           │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ID         │ Unique rigid-wall number. (Integer > 0; Required) │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ XP, YP, ZP │ Coordinates of the origin of the wall. (Real;     │                                                   │
│            │ Default = 0.0)                                    │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NX, NY, NZ │ A vector normal to the wall pointing towards the  │                                                   │
│            │ model. (Real; Default = 0.0)                      │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BCGRID     │ Number of a BCGRID entry listing the points that  │                                                   │
│            │ cannot penetrate the wall. (Integer > 0;          │                                                   │
│            │ Required)                                         │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ METHOD     │ Algorithm for contact processing. (Character;     │                                                   │
│            │ Default = PENALTY)                                │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ PENALTY                                           │ Penalty method, allowing for extra boundary       │
│            │                                                   │ conditions, friction and output.                  │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ KINMATIC                                          │ Kinematic method, only included for compatibility │
│            │                                                   │ reasons with older Dytran versions. This method   │
│            │                                                   │ allows no extra boundary conditions, no friction  │
│            │                                                   │ and no output.                                    │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FS         │ Static coefficient of friction. See               │                                                   │
│            │ Remark 5. (Real > 0; Default = 0.0)               │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FK         │ Kinetic coefficient of friction. See              │                                                   │
│            │ Remark 5. (Real > 0; Default = 0.0)               │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EXP        │ Exponential decay coefficient. See                │                                                   │
│            │ Remark 5. (Real > 0; Default = 0.0)               │                                                   │
└────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks

1. A rigid plane of infinite size is generated that the grid points cannot penetrate. The plane is fixed in space.
2. The grid points can slide on the wall and separate from it.
3. A (moving) rigid plane of finite size can be modeled by using a rigid surface and a primary-secondary contact.
4. For the wall definition using penalty method, output can be requested by referencing it in a SET command in the Case Control Section. The keywords for output are WALLS and WALLOUT. Please check $S700.
5. The coefficient of friction is given by:

    ![bulktuv08177.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08177.jpg?_LANG=enus)  

     where

        See link for definitions.
