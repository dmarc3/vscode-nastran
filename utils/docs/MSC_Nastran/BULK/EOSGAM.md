## [EOSGAM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EOSGAM.xhtml) - Gamma Law Gas Equation of State - SOL 700 only

Defines the properties of a Gamma Law equation of state where the pressure p is defined as:

![bulkde03430.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03430.jpg?_LANG=enus)  

where: 

e = specific internal energy per unit mass
rho = overall material density
gamma = A constant

Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSGAM  EID     GAMMA   R       CV      CP      VISC                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSGAM  2       1.4     287.0                                                   
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique equation of state number. (Integer > 0, Required)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GAMMA     │ Constant . (Real > 0, default=blank)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ R         │ Gas constant. See Remarks 1. and 3. (Real > 0, default=blank)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CV        │ Specific heat at constant volume. See Remarks 1. and 3. (Real > 0, default=blank)                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Specific heat at constant pressure. See Remarks 1. and 3. (Real > 0, default=blank)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VISC      │ Viscosity coefficient. If zero, no viscosity. See Remarks 4., 5., and 6. (Real > 0, default=blank) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The temperature of the gas will be calculated when one of the gas constants,  R ,  ![bulkde03438.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03438.jpg?_LANG=enus)  or  ![bulkde03440.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03440.jpg?_LANG=enus)  is specified.
2. The Euler variable name for temperature is TEMPTURE.
3. ![bulkde03442.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03442.jpg?_LANG=enus) ,  R ,  ![bulkde03444.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03444.jpg?_LANG=enus)  and  ![bulkde03446.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03446.jpg?_LANG=enus)  have the following relationships:

     ![bulkde03448.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03448.jpg?_LANG=enus)  

4. The viscosity coefficient is the dynamic viscosity. It is the ratio between shear stress and velocity gradient. The SI-unit of viscosity is

     ![bulkde03450.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03450.jpg?_LANG=enus) 
 
5. If possible, use (in coupled analysis) the FASTCOUP coupling algorithm because viscous fluxes are computed more accurately for fast coupling than for general coupling.
6. For the single mat solver, viscous stresses can be requested by the use of TXX through TZX. Also, EFFSTS is available. For the multi-material solver, viscous stresses are stored in TXX-VIS, TYY-VIS, TZZ-VIS, TXY-VIS, TYZ-VIS, TZX-VIS. This viscous stresses depend only on the current velocity gradients. The stresses like TXX are elastic-plastic stresses and depend on past stress. The total stress tensor in the element is given by the average of the viscous stress and elastic-plastic stress. The weight factors are the material fraction of viscous fluid and the remaining materials.
