## [MAT5](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT5.xhtml) - Thermal Material Property Definition

Defines the thermal material properties for anisotropic materials.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT5    MID     KXX     KXY     KXZ     KYY     KYZ     KZZ     CP              
        RHO     HGEN                                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT5    24      .092                    .083            0.20    0.2             
        2.00                                                                    
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number.  (Integer > 0)                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ Kij       │ Thermal conductivity.  (Real)                                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Heat capacity per unit mass.  (Real > 0.0 or blank)                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Density.  (Real > 0.0; Default = 1.0)                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ HGEN      │ Heat generation capability used with QVOL entries.  (Real > 0.0; Default = 1.0) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The thermal conductivity matrix has the following form:

     ![bulkmno04130.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04130.jpg?_LANG=enus)  

2. The material identification number may be the same as a MAT1, MAT2, or MAT3 entry but must be unique with respect to other MAT4 or MAT5 entries.

3. MAT5 materials may be made temperature-dependent by use of the MATT5 entry.

4. When used for axisymmetric analysis (CTRIAX6), material properties are represented where:

     KXX = radial conductivity component 
 
 
KYY = axial conductivity component

5. The KZZ is required if using the advanced nonlinear Shell element with temperature across thickness called out by NLMOPTS,TEMPP,LINE or QUAD option.

