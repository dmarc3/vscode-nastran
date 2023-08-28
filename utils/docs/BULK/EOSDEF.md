## [EOSDEF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EOSDEF.xhtml) - Deflagration - SOL 700 only

EOSDEF defines the properties of the deflagration equation of state, and the reaction rate to model the burning of solid propellants. The burning of the solid propellant produces hot gas.

With limitations of Dytran solver, the solid propellant is not modeled, and only the hot gas is modeled. During burning hot gas flows into the Euler elements

#### Format

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSDEF  MID     GAMMA   B       R                       E       RHOS    +       
+       RHOF    W       BETA    SAVR    X       Y                               
```

Example 

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSDEF  3       1.123   0.001   304                     IE+6    1600            
        0.1     4E-8    0.85    6000    0.6     0.0                             
```

```text
┌───────┬──────────────────────────────────────────────────────────────────┐
│ Field │ Contents                                                         │
├───────┼──────────────────────────────────────────────────────────────────┤
│ MID   │ Unique material number. (Integer > 0; Required).                 │
├───────┼──────────────────────────────────────────────────────────────────┤
│ GAMMA │ Constant . (Real>0; Required)                                    │
├───────┼──────────────────────────────────────────────────────────────────┤
│ B     │ Gas co-volume. (Real≥0; Required)                                │
├───────┼──────────────────────────────────────────────────────────────────┤
│ R     │ Gas constant. (Real>0; Refer to remark 2.)                       │
├───────┼──────────────────────────────────────────────────────────────────┤
│ CV    │ Specific heat at constant volume. (Real>0; Refer to remark 3.)   │
├───────┼──────────────────────────────────────────────────────────────────┤
│ CP    │ Specific heat at constant pressure. (Real>0; Refer to remark 3.) │
├───────┼──────────────────────────────────────────────────────────────────┤
│ E     │ Chemical energy per unit burned mass. (Real>0.0; Required)       │
├───────┼──────────────────────────────────────────────────────────────────┤
│ RHOS  │ Reference density of propellant. (Real>0; Required).             │
├───────┼──────────────────────────────────────────────────────────────────┤
│ RHOF  │ (Real>0; Refer to remark 5.)                                     │
├───────┼──────────────────────────────────────────────────────────────────┤
│ W     │ Burning rate coefficient (Real≥0; Required).                     │
├───────┼──────────────────────────────────────────────────────────────────┤
│ BETA  │ Burning rate exponent. (Real≥0; Required).                       │
├───────┼──────────────────────────────────────────────────────────────────┤
│ SAVR  │ Initial surface area divided by volume (Real>0; Required).       │
├───────┼──────────────────────────────────────────────────────────────────┤
│ X     │ Parameter form function(Real>0; Required).                       │
├───────┼──────────────────────────────────────────────────────────────────┤
│ Y     │ Parameter form function(Real>0; Required).                       │
└───────┴──────────────────────────────────────────────────────────────────┘
```

#### Remarks

1. EOSDEF – The deflagration Equation of State is explained in  Dytran Theory Manual , Chapter 4: Models.
2. This equation of state is used with Eulerian elements.
3. The temperature of gas is calculated when one of the constants R,  ![bulkde03412.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03412.jpg?_LANG=enus)  or  ![bulkde03414.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03414.jpg?_LANG=enus)  are specified. When temperature is not mentioned in an output request, omit the he constants .
4. The pressure in the reaction products is defined by the Noble-Abel equation of state as follows:  ![bulkde03416.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03416.jpg?_LANG=enus)  for reacted product,

     ![bulkde03418.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03418.jpg?_LANG=enus)  where  ![bulkde03420.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03420.jpg?_LANG=enus) ,  b  are constants and  R  is the gas constant.

     The chemical reaction rate for conversion of un-reacted explosive to reaction products is mentioned the relation below:

     See link for tables.

5. RHOF allows taking into account the air between gunpowder grains. Also, it allows taking into account air inside the combustion chamber. For example If the chamber is filled with 10% real propellant and the rest is filled with air then RHOF = 0.1.
6. To indicate what Eulerian regions can burn, the variable DEFMAT can be used. In regions that can burn DEFMAT=1. DEFMAT can be set on the TICVAL card:  TICVAL,14,,DENSITY,1.14,SIE,300000.2,DEFMAT,1.0
7. Ignition of the propellant approached by setting SIE to the flame temperature in specific areas:

```nastran
TICVAL,15,DENSITY,1.14,SIE,4231908.591,DEFMAT,1.0
```

Where SIE ignition  = Flame Temp x Cv

Flame Temp can be extracted from Chemical Energy per unit burned mass and Gas constant: T flame  = E / R .
