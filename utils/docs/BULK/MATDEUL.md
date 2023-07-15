## [MATDEUL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MATDEUL.xhtml) - General Constitutive Model to be Used for the Eulerian Materials - SOL 700

Defines a complete constitutive model as a combination of an equation of state, a shear model, a yield model, a failure model, a spall model (PMIN), and corotational frame. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATDEUL MID     RHO     EID     SID     YID     FID     PID                     
        BULKL   BULKQ                   BULKTYP                                 
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATDEUL 22      3000.   100     109     307     308     402                     
```
```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────┐
│ Describer │ Meaning                                           │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ MID       │ Unique material number. (Integer > 0; Required)   │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ RHO       │ Density. (Real > 0.0; Required)                   │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ EID       │ Number of an EOSxxx entry defining the            │                                       │
│           │ pressure/density characteristic of the material.  │                                       │
│           │ (Integer > 0; Required)                           │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ EOSGAM                                            │ Gamma Law Gas Equation of State       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ EOSIG                                             │ Ignition and Growth Equation of State │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ EOSJWL                                            │ JWL Explosive Equation of State       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ EOSMG                                             │ Mie-Gruneisen Equation of State       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ EOSPOL                                            │ Polynomial Equation of State          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ EOSTAIT                                           │ Tait Equation of State                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ SID       │ Number of a SHRxxx entry defining the shear       │                                       │
│           │ properties of the material. (Integer > 0;         │                                       │
│           │ Hydrodynamic shear model)                         │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ SHREL                                             │ Elastic Shear Model                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ SHRPOL                                            │ Polynomial Shear Mode                 │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ YID       │ Number of a YLDxxx entry defining the yield model │                                       │
│           │ for the material. (Integer > 0; Hydrodynamic      │                                       │
│           │ yield model)                                      │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDHY                                             │ Hydrodynamic Yield Model              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDJC                                             │ Johnson-Cook Yield Model              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDMC                                             │ Mohr-Coulomb Yield Model              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDMSS                                            │ Multi-surface yield model for Snow    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDPOL                                            │ Polynomial Yield Model                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDRPL                                            │ Rate Power Law Yield Model            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDSG                                             │ Steinberg-Guinan Yield                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDTM                                             │ Tanimura-Mimura Yield Model           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDVM                                             │ von Mises Yield Model                 │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ YLDZA                                             │ Zerilli-Armstrong Yield Model         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ FID       │ Number of a FAILMPS entry defining the failure    │                                       │
│           │ model for the material. (Integer > 0; no failure) │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ FAILMPS                                           │ Maximum Plastic Strain Failure Model  │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ PID       │ Number of a PMINC entry defining the spallation   │                                       │
│           │ characteristics of the material. See Remark       │                                       │
│           │ 3. (Integer > 0)                                  │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ BULKL     │ Linear bulk-viscosity coefficient. (Real > 0.0;   │                                       │
│           │ 0.0)                                              │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ BULKQ     │ Quadratic bulk-viscosity coefficient. (Real >     │                                       │
│           │ 0.0; 1.0)                                         │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│ BULKTYP   │ Bulk viscosity type. (Character, DYNA)            │                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ DYNA                                              │ Standard DYNA3D model.                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────┤
│           │ DYTRAN                                            │ Enhanced DYNA model.                  │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────┘
```
#### Remarks:

1. If YID is blank or zero, a hydrodynamic yield model is used.

2. If the TYPE field on the PEULER entry is set to HYDRO, then YID is either blank or references a YLDHY entry, and SID is blank. Conversely, if the TYPE field is set to STRENGTH, a nonhydrodynamic yield model is specified.

3. If no PMINC entry is referenced, a minimum pressure of zero is assumed for the Eulerian elements. The PMINC entry will be ignored when a cavitation model through the EOSTAIT entry has been given.

