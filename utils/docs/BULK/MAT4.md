## [MAT4](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT4.xhtml) - Heat Transfer Material Properties, Isotropic

Defines the constant or temperature-dependent thermal material properties for conductivity, heat capacity, density, dynamic viscosity, heat generation, reference enthalpy, and latent heat associated with a single-phase change.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT4    MID     K       CP              H               HGEN    REFENTH +       
+       TCH     TDELTA  QLAT                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT4    17      6.66-4  5.01-5  456.2           1.03-6                          
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number.  (Integer > 0)                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K         │ Thermal conductivity.  (Blank or Real > 0.0)                                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Heat capacity per unit mass at constant pressure (specific heat).  (Blank or Real > 0.0)        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Density.  (Real > 0.0; Default = 1.0)                                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ H         │ Free convection heat transfer coefficient.  (Real or blank)                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Dynamic viscosity. See Remark 2. (Real > 0.0 or blank)                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HGEN      │ Heat generation capability used with QVOL entries. (Real > 0.0; Default = 1.0)                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFENTH   │ Reference enthalpy. (Real or blank)                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TCH       │ Lower temperature limit at which phase change region is to occur. See Remark 5. (Real or blank) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TDELTA    │ Total temperature change range within which a phase change is to occur.  (Real > 0.0 or blank)  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ QLAT      │ Latent heat of fusion per unit mass associated with the phase change. (Real > 0.0 or blank)     │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MID must be unique with respect to all other MAT4 and MAT5 entries. MAT4 may specify material properties for any conduction elements as well as properties for a forced convection fluid (see CONVM). MAT4 also provides the heat transfer coefficient for free convection (see CONV).
2. For a forced convection fluid,  μ  must be specified.
3. REFENTH is the enthalpy corresponding to zero temperature if the heat capacity CP is a constant. If CP is obtained through a TABLEM lookup, REFENTH is the enthalpy at the first temperature in the table.
4. Properties specified on the MAT4 entry may be defined as temperature dependent by use of the entry.
5. The advanced nonlinear elements should be used for phase change to achieve accurate results.
