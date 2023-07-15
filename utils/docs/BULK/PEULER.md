## [PEULER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PEULER.xhtml) - Eulerian Element Properties

Defines the properties of Eulerian element. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PEULER  PID     MID     TYPE                                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PEULER  100     25                                                              
```
```text
┌───────────┬─────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                         │                                                   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Unique property number. (Integer > 0, Required) │                                                   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ Number of a MATDEUL entry defining the          │                                                   │
│           │ constitutive model. (Integer > 0, Required)     │                                                   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TYPE      │ The type of Eulerian material being used.       │                                                   │
│           │ (Character, Default = HYDRO)                    │                                                   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HYDRO                                           │ Hydrodynamic material with no shear strength +    │
│           │                                                 │ void.                                             │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1STORDER                                        │ Single material, 1st order accurate Riemann       │
│           │                                                 │ solution-based fluids- & gases Euler solver.      │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2NDORDER                                        │ Single material, 2nd order accurate Riemann       │
│           │                                                 │ solution-based fluids- & gases Euler solver.      │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ STRENGTH                                        │ Structural material with shear strength + void.   │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MMHYDRO                                         │ Multimaterial hydrodynamic material with no shear │
│           │                                                 │ strength + void.                                  │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MMSTREN                                         │ Structural multimaterial with shear strength +    │
│           │                                                 │ void.                                             │
└───────────┴─────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. Make the property number unique with respect to all other property numbers.

2. The elements that reference this property use the Eulerian formulation.

3. If TYPE is set to HYDRO, only one material number for all the Eulerian elements of TYPE is used and a hydrodynamic yield model is chosen.

4. If the TYPE is set to either 1st Order or 2nd Order, only one material for all Eulerian elements of TYPE is used and the Riemann solution-based solver is chosen.

5. If TYPE is set to STRENGTH, only one material number for all the Eulerian elements of TYPE is used and a nonhydrodynamic yield model is chosen.

6. If TYPE is set to MMHYDRO, different material numbers for all Eulerian elements of TYPE are used and a hydrodynamic behavior is chosen for each material.

7. If TYPE is set to MMSTREN, different material numbers for all Eulerian elements of TYPE are used and a yield model is chosen for each material.

8. In a multimaterial Euler calculation, the options MMSTREN and MMHYDRO cannot be mixed; they are mutually exclusive.

9. If the material number is blank or zero, the corresponding elements are void. Note that this is not allowed in the Riemann solution-based Euler solvers, as they will not handle void elements. If you define void elements and select either the 1st Order or 2nd Order scheme, an error message will be issued and the analysis will stop.

10. Initial conditions are defined on the TICEL Bulk Data entry.

