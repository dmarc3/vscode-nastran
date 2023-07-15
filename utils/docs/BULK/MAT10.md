## [MAT10](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT10.xhtml) - Fluid Material Property Definition

Defines material properties for fluid elements in coupled fluid-structural analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT10   MID     BULK    RHO     C       GE      ALPHA                           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT10   103     0.656   0.011                                                   
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ BULK      │ Bulk modulus.  (Real > 0.0)                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Mass density.  (Real > 0.0)                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Speed of sound.  (Real > 0.0)                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Fluid element damping coefficient.  (Real)                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Normalized admittance coefficient for porous material. See Remark 7. (Real or blank) │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. MAT10 is referenced, with MID, by the PSOLID entry only.

2. The material identification numbers must be unique for all MAT1, MAT2, MAT3, MAT9, and MAT10   entries.

3. The mass density RHO   will be used to compute the mass automatically.

4. BULK, RHO, and C are related by

     ![bulkmno04144.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04144.jpg?_LANG=enus)  

     Two out of the three must be specified, and the other will   be calculated according to this equation. If all three are specified and are inconsistent in values, the supplied values of BULK and RHO are used in the computations.

5. To obtain the damping coefficient GE, multiply the critical damping ratio   , by 2.0.

6. If PARAM,W4FL is not specified, GE is ignored in transient analysis. See  .

7. If a value of ALPHA is entered, BULK RHO and GE may have negative values.

8. The value defined in the ALPHA field always defines the normalized admittance coefficient for porous material but it is differently interpreted depending on the value defined in the FCNT field of the referencing PSOLID entry.

a. If the MAT10 entry is referenced in a PSOLID entry where FFLUID option is selected, the value defined for ALPHA is considered as the normalized admittance coefficient calculated at unit circular excitation frequency ( ![bulkmno04148.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04148.jpg?_LANG=enus)  = 1). Its value will be automatically calculated by the program, at each excitation frequency, considering the current circular excitation frequency as scaling factor.

b. If the MAT10 entry is referenced in a PSOLID entry where PFLUID option is selected, the value defined for ALPHA has no special meaning but it is only the normalized admittance coefficient calculated by the user at the most appropriate excitation frequency (defined in order to have good results in the frequency range of interest).

9. For Poro-Elastic Material, PEM, user is expected to provide adiabatic BULK modulus for fluid-phase of PEM which is equal to GAMMA, fluid ratio of specific heats (see MATPE1 for detailed), times isothermal BULK modulus. Isothermal BULK modulus is BULK modulus at constant temperature for fluid itself.

10. When used in conjunction with PSLDN1, only pyramid elements can be associated with the MAT10 fluid property. CHEXA, CPENTA, CTETRA elements using MAT10 are not supported with PSLDN1.

11. The terms of the fluid mass matrix are not multiplied by the value of PARAM and WTMASS.

