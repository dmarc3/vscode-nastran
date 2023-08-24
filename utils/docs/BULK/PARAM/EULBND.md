## [EULBND ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.EULBND.xhtml)

Default = ELEMENT, SOL 700 only

Defines boundary treatment for Euler boundaries.

#### Format:

PARAM,EULBND,option

```text
┌──────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ EXTRAPOL │ The pressure that a wall or coupling surface exerts on the adjacent Euler element is obtained from │
│          │ extrapolating the element pressure toward this boundary. (Character)                               │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELEMENT  │ The pressure that a wall or coupling surface exerts on the adjacent Euler element equals the       │
│          │ pressure inside this element. (Character)                                                          │
└──────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The finite volume representation in general assumes that element values are constant within each element. While this assumption is adequate for the large majority of applications, fluid models involving hydrostatic pressure gradients require that the pressure gradient be also recognized to exist within the element. When element-internal hydrostatic gradients are not accounted for, the calculation will be less accurate and will suffer from numerical symptoms like pair forming of element pressures. By activating the option EXTRAPOL hydrostatic gradients inside the element are taken into account. For meshes without bias, option EXTRAPOL only modifies the numerical schemes along the boundary.  

2. When coupling surfaces are used DYPARAM,FASTCOUP has to be activated as well.

