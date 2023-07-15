## [MATBV](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MATBV.xhtml) - Material Bulk Viscosity - SOL700

Defines the bulk viscosity for materials. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATBV   MID     BULKTYP BULKQ   BULKL   CSCALE  DMPFAC  IIMMREL                 
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATBV   7               1.2                                                     
```
#### <span></span>

```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────┐
│ Describer │ Meaning                                           │                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│ MID       │ Material identification. See Remark 1. (Integer > │                        │
│           │ 0, Required.)                                     │                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│ BULKTYP   │ Bulk viscosity type. (Character: default=DYNA)    │                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│           │ DYNA                                              │ Standard DYNA3D model. │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│           │ DYTRAN                                            │ Enhanced DYNA model.   │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│ BULKL     │ Linear bulk-viscosity coefficient. (Real ≥ 0.0;   │                        │
│           │ default=1.0)                                      │                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│ BULKQ     │ Quadratic bulk-viscosity coefficient. (Real ≥     │                        │
│           │ 0.0; default=0.0)                                 │                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│ CSCALE    │ When this material model is used with MEMB shell  │                        │
│           │ elements (See PSHELL1), the compressive stresses  │                        │
│           │ in the principal directions will be scaled with   │                        │
│           │ this factor. CSCALE=0.0 results in a tension only │                        │
│           │ material. See Remark 2. (Real ≥ 0.0; default=1.0) │                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│ DMPFAC    │ When this material model is used with MEMB shell  │                        │
│           │ elements, damping is applied to the stresses.     │                        │
│           │ DMPFAC = 0.05 results in 5% damping applied to    │                        │
│           │ membrane stresses. See Remark 2. (Real ≥ 0.0;     │                        │
│           │ default=0.0)                                      │                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────┤
│ IIMMREL   │ Relaxation factor used with the Initial Metric    │                        │
│           │ Method. This option is only used when this        │                        │
│           │ material model is used with MEMB shell elements   │                        │
│           │ and the IMM method is activated. See Remark 3.    │                        │
│           │ (0.0 < Real < 1.0; default=1.0e-3)                │                        │
└───────────┴───────────────────────────────────────────────────┴────────────────────────┘
```
#### <span></span>

#### Remarks:

1. The material number must refer to a basic material definition such as MAT1/MAT2/MAT8/MATORT/MATHE.

2. For air bag modeling the following values of CSCALE and DMPFAC are suggested:

CSCALE = 0.1

DMPFAC= 0.05 to 0.20

3. The Initial Metric Method relaxation factor is used to slow down the expansion of the membrane elements during the calculation. The default is sufficient in most simulations.

