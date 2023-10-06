## [SBSPFORM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SBSPFORM.xhtml)

No Default

This parameter can be used to specify the Subspace Iteration method formulation for the structure-fluid coupled modes computation.

Subspace iteration method selects the formulation automatically based on the ratio of structure and fluid size

and the existence of rigid body or constant pressure modes. But using this parameter, user can force one or other of the methods. 

```text
┌─────┬──────────────────────────────────┐
│ MF: │ Mobility-Flexibility formulation │
├─────┼──────────────────────────────────┤
│ SM: │ Stiffness-Mass formulation       │
└─────┴──────────────────────────────────┘
```
