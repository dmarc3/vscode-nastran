## [ACPMCP1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACPMCP11.xhtml) - Analytical Trim Component Interface Coupling and Constraints Definition

Defines the interface coupling conditions of a 1D analytical trim component.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACPMCP1 TID     SGLUED  SSLIDE  SOPEN   SIMPER                          +
+                                                               RID     +
+       METHOD
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACPMCP1 1       1002            1004                                    +
+                                                                       +
+       1D
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Identification number of a trim component. (Integer > 0; Required)                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SGLUED    │ Identification number of SET3 entry of PLTSURF surface mesh on the trim component, which is glued │
│           │ to a structure. See Remark 2. (Integer ≥ 0 or Blank)                                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SSLIDE    │ Identification number of SET3 entry of PLTSURF surface mesh on the trim component, which are in   │
│           │ the sliding contact to a structure; see Remark 3. (Integer ≥ 0 or Blank)                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOPEN     │ Identification number of SET3 entry of PLTSURF surface mesh on the trim component, which has an   │
│           │ open interface with the cavities. See Remark 4. (Integer ≥ 0 or Blank)                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SIMPER    │ Identification number of SET3 entry of PLTSURF surface mesh on the trim component, which has an   │
│           │ impervious interface with the cavities; see Remark 5. (Integer ≥ 0 or Blank)                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID       │ ID of a region of a TRMC. (Blank or Integer ≥ 0, Default=0)                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ Modeling method of analytical trim. (Character = “1D” or Blank)                                   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks

1.     ACPMCP1 is a required entry for each 1D analytical trim component that is referenced by TRIMGRP. It must be put in the main Bulk Data section or BEGIN BULK. It specifies the boundary coupling conditions as well as the coupling degrees of freedom for computing the reduced impedance matrices of the trim component.
2.     A glued interface means that the skeleton or solid-phase of a trim component is completely constrained on to the structure. There is no relative movement between the trim component and the structure at the interface (continuity of the displacement field). The reduction nodes of boundary impedance matrices carry three degrees of freedom (Tx, Ty, Tz).
3.     A sliding interface means that the trim component is laid on the surface of structure, such as a car body. There is no relative movement in the normal direction of the interface between the trim component and the structure. Relative sliding movement is allowed in the contact surface. However, because of intrinsic analytical 1D trim assumption, if SSLIDE exists, they will be automatically understood as SGLUED.
4. An open interface means that the free flow of fluid between the fluid-phase of a trim component and cavities occurs at the interface (acoustic energy transfer).
5.     An impervious or closed interface means that the fluid flowing between the trim component and cavities is prohibited at the interface. This can happen when the porous material is covered by a thin film which stops the fluid flowing or the cavity is in touch with a structure part of the trim component. However, because of intrinsic analytical 1D trim assumption, if SIMPER exists, they will be automatically understood as SOPEN.
