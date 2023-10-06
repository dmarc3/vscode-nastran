## [KDMFILT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.KDMFILT.xhtml)

Default = 0 

```text
┌───┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 0 │ Differential stiffness correction will NOT be added to rigid body behavior of pre-stressed models │
│   │ for modal analysis.                                                                               │
├───┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1 │ Differential stiffness correction will be added to rigid body behavior of pre-stressed models for │
│   │ modal analysis.                                                                                   │
└───┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
1. Currently, PARAM, KDMFILT, 1 is active in SOL103 with a preload subcase (STATSUB) and a  single  modal (METHOD) subcase.

2. Currently, PARAM, KDMFILT, 1 is active in SOL400 with a series of preload steps and a  single  ANALYSIS=MODES step. Also, in SOL400, the correction is not available when enhanced nonlinear elements are used via NLMOPTS or PSHLN1, etc., type entries.

In nonlinear mechanics, in theory a tangent matrix is computed, using a deformation gradient. By polar decomposition, a consistent rotation matrix can be obtained.

In practice, most finite elements such as beam, shell and solid elements, are developed in a heuristic fashion with polynomial type functions representing displacement and volume characteristics. The tangent stiffness is composed of several matrices. A linear K matrix, a K D  for differential stiffness or geometric stiffness, and often a K F  for follower load stiffness.

In general, the K D  matrix which represents a stiffening to the structure due to pre-load of the structure, does not meet rigid body requirements. When a structure is preloaded with a self-equilibrating set of loads and statically supported, for a free-free modal analysis of the pre-loaded structure the static support set is removed. Often because of the deficiency of the K D  matrix to correctly represent rigid body modes, the resulting free-free modes are poor or missing.

PARAM, KDMFLT, 1 turns on a method to orthagonalize and normalize the computed rigid-body modes.

It cannot be over emphasized the importance of the need to have a self-equilibrating set of loads using a static support system.

![parameters_KDMFILT.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters_KDMFILT.png?_LANG=enus)

The above structure represents a plate structure to be tension pre-stressed in the x-direction. This is accomplished by applying FORCE1 entries on grids 111 through 121 in the positive x-direction defined by grids 1 thru 11 to grids 111 to 121 and a set of FORCE1 entries along grids 1 through 11 in the negative x-direction defined by grids 111 through 121 to grids 1 through 11.

A static support set is applied at grids 1, 11, and 111. This set is removed for the modal analysis.

If, instead of the FORCE1 entries along grids 1 through 11, the user chose to apply SPC1 entries for these grids, constraining then in the x-direction, a self-equilibrating loading would not be obtained. This is so, because FORCE1 entries are follower loads while SPC1 entries are not. With the SPC1 entries, the structure would not be in true static equilibrium upon removal to the static support set.

If, instead, along grids 1 through 11, the user chose to apply SPC1 entries for these grids, constraining then in the x-direction and non-follower FORCE entries along the grids 111 through 121, an almost self-equilibrating loading is achieved and PARAM, KDMFLT, 1 will get six good free-free modes. In this case, however, the Lanczos Method has some stability issues and AHOU should be used.

