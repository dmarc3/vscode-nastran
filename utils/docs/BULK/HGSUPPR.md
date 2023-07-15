## [HGSUPPR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HGSUPPR.xhtml) - Hourglass Suppression Method - SOL700

Defines the hourglass suppression method and the corresponding hourglass damping coefficients. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HGSUPPR HID     PROP    PID     HGTYPE  HGCMEM  HGCWRP  HGCTWS  HGCSOL          
+       RBRCOR  VALUE                                                           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HGSUPPR 1       SHELL   100     FBV     0.1     0.1     0.1                     
+       YES     10000                                                           
```
```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ HID       │ Hourglass suppression definition number. (Integer │                                                 │
│           │ > 0; Required.)                                   │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ PROP      │ Property type. (Character; See Remark 1.)         │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ PID       │ Property number. (Integer > 0; See Remark 1.)     │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ HGTYPE    │ Hourglass suppression method: (Character; See     │                                                 │
│           │ Remark 2.)                                        │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ FBV                                               │ For shells only (default for shells)            │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ FBS                                               │ For shells and solids (default for solids)      │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ Dyna                                              │ For solids only                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ HGCMEM    │ Membrane damping coefficient. (0.0 ≤ Real ≤ 0.15; │                                                 │
│           │ default=0.1)                                      │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ HGCWRP    │ Warping damping coefficient. (0.0 ≤ Real ≤ 0.15;  │                                                 │
│           │ default=0.1)                                      │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ HGCTWS    │ Twisting damping coefficient. (0.0 ≤ Real ≤ 0.15; │                                                 │
│           │ default=0.1)                                      │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ HGCSOL    │ Solid damping coefficient. (0.0 ≤ Real ≤ 0.15;    │                                                 │
│           │ default=0.1)                                      │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ RBRCOR    │ Rigid body rotation correction: (Character;       │                                                 │
│           │ default=NO)                                       │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ NO                                                │ No rigid-body rotation correction is applied to │
│           │                                                   │ hourglass resisting forces.                     │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ YES                                               │ Rigid-body rotation correction is applied to    │
│           │                                                   │ hourglass resisting forces.                     │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ VALUE     │ Number of steps. (Integer > 0; See Remark 3.)     │                                                 │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```
#### Remarks:

1. The property type definition and the property number are required. Since property numbers are unique within a certain class of element types, the property type and the property number uniquely define to what elements the hourglass suppression method and coefficients apply. The following property types are valid entries:

```text
┌───────┬───────────────────────────────┐
│ BAR   │ For bar elements              │
├───────┼───────────────────────────────┤
│ BEAM  │ For beam elements             │
├───────┼───────────────────────────────┤
│ BELT  │ For belt elements             │
├───────┼───────────────────────────────┤
│ COMP  │ For composite shell elements  │
├───────┼───────────────────────────────┤
│ DAMP  │ For damper elements           │
├───────┼───────────────────────────────┤
│ ELAS  │ For spring elements           │
├───────┼───────────────────────────────┤
│ EULER │ For Eulerian elements         │
├───────┼───────────────────────────────┤
│ ROD   │ For rod elements              │
├───────┼───────────────────────────────┤
│ SHELL │ For shell elements            │
├───────┼───────────────────────────────┤
│ SOLID │ For solid Lagrangian elements │
└───────┴───────────────────────────────┘
```


     It must be noted however, that only shell CQUAD4 and Lagrangian CHEXA and CPENTA elements can suffer from undesired hourglass modes. All HGSUPPR entries referring to other types of elements are ignored.

2. There are three types of hourglass suppression methods available in Nastran. These are standard DYNA viscous (DYNA) hourglass damping, the Flanagan-Belytschko Stiffness (FBS) hourglass damping, and the Flanagan-Belytschko Viscous (FBV) hourglass damping.

     Lagrangian solid elements can address DYNA and FBS suppression; shell elements can address DYNA and FBV suppression. The default for the Lagrangian solid elements is FBS. The default for the shell elements is FBV.

3. The rigid-body rotation correction on the hourglass forces is only necessary in cases where shell elements undergo a large rigid-body rotation. If the RBRCOR field is set to YES, and the VALUE field is left blank, the correction is applied during each time step. If the VALUE field is set to a number, the rotation correction is applied only when the rigid-body rotation would result in a rotation of the element over 90° in less than VALUE time steps. Usually, if the rigid-body rotation correction is necessary; 10000 is a good value. This option saves some CPU time.

     The RBRCOR option applies to the Key-Hoff shell formulation only; for all other element types and formulations, the option is ignored.

4. The membrane, warping and twisting coefficients apply to shell elements only; for all other element types, the data is ignored. The solid damping coefficient applies to solid Lagrangian elements only; for all other element types, the data is ignored.

