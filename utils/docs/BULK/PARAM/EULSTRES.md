## [EULSTRES ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.EULSTRES.xhtml)

Default = VOLUME, SOL 700 only

Defines the update logic for stresses when material is transported in Euler elements.

#### Format:

PARAM,EULSTRES,option

```text
┌────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ VOLUME │ The pressure that a wall or coupling surface exerts on the adjacent Euler element is obtained from │
│        │ extrapolating the element pressure toward this boundary. (Character)                               │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASS   │ The pressure that a wall or coupling surface exerts on the adjacent Euler element equals the       │
│        │ pressure inside this element.                                                                      │
└────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Only used for the MMSTREN solver.

2. Stresses are a material property and when material flows in or out an element the stress state in the element is changed. This is analogous to temperature and energy. Not the temperature is transported, but energy. After transporting energy the temperature is re-computed by dividing the energy by element mass and specific heat.  In case of stress the “energy” is given by mass times stress.  After transporting this “energy” the new stress follows by dividing it by mass.  As shown in Chapter 6 of the Theory Manual this gives a correct updating procedure for stresses. There it also proven that stress times mass is conserved during transport.

3. In most simulations variations in density are small and the multiplication by mass can be replaced by a multiplication by volume. This method is activated by option VOLUME which is the default option. Using the MASS option may have some influence on simulations with large density variations. The option MASS will give the most accurate results.

4. The transport logic of the effective plastic strain is identical to that of stresses. When using option MASS the plastic strain is computed more accurately when material is compressed.

5. The (single material) Euler with strength solver makes use of the multiplication by mass. The multiplication by volume is not implemented for this solver.

