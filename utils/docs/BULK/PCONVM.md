## [PCONVM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCONVM.xhtml) - Forced Convection Property Definition

Specifies the forced convection boundary condition properties of a boundary condition surface element used for heat transfer analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONVM  PCONID  MID     FORM    FLAG    COEF    EXPR    EXPPI   EXPPO           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONVM  3       2       1       1       .023    0.80    0.40    0.30            
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PCONID    │ Convection property identification number. (Integer > 0)                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number. (Integer > 0)                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORM      │ Type of formula used for convection. (Integer = 0, 1, 10, 11, 20, or 21; Default = 0)       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLAG      │ Flag for mass flow convection. (Integer = 0 or 1; Default = 0)                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ COEF      │ Constant coefficient used for forced convection. (Real > 0.0)                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXPR      │ Reynolds number convection exponent. (Real > 0.0; Default = 0.0)                            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXPPI     │ Prandtl number convection exponent for heat transfer into the working fluid. (Real > 0.0;   │
│           │ Default = 0.0)                                                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXPPO     │ Prandtl number convection exponent for heat transfer out of the working fluid. (Real > 0.0; │
│           │ Default = 0.0)                                                                              │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Every surface to which forced convection is applied must reference a PCONVM entry. PCONVM is referenced on the CONVM entry.
2. MID specifies material properties of the working fluid at the temperature of the point FLMND. FLMND is specified on the CONVM entry.
3. The material properties are used in conjunction with the average diameter and mass flow rate (mdot). MID references the material properties and supplies the fluid conductivity (k), heat capacity (cp), and viscosity  ![bulkp06944.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06944.jpg?_LANG=enus)  needed to compute the Reynolds (Re) and Prandtl (Pr) numbers as follows:

    ![bulkp06946.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06946.jpg?_LANG=enus)  

4. FORM controls the type of formula used in determination of the forced convection film coefficient h. There are two cases:
     - If FORM = 0, 10, or 20 than  ![bulkp06948.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06948.jpg?_LANG=enus) .
     - If FORM = 1, 11, or 21 then the above h is multiplied by k and divided by the average hydraulic diameter.
     - FORM also specifies the reference temperature used in calculating material properties for the fluid if FLMND = 0.
     - If FORM = 0 or 1, the reference temperature is the average of element grid point temperatures (average) and the ambient point temperature (average).
     - If FORM = 10 or 11, the reference temperature is the surface temperature (average of element grid point temperatures).
     - If FORM = 20 or 21, the reference temperature is the ambient temperature (average of ambient point temperature).
5. In the above expression, EXPP is EXPPI or EXPPO, respectively, for heat flowing into or out of the working fluid. This determination is performed internally.
6. FLAG controls the convective heat transfer into the downstream point (the second point as identified on the CHBDYi statement is downstream if mdot is positive).
     - FLAG = 0, no convective flow (stationary fluid).
     - FLAG = 1, convective energy flow that is consistent with the Streamwise Upwind Petrov Galerkin (SUPG) element formulation.
7. No phase change or internal heat generation capabilities exist for this element.
