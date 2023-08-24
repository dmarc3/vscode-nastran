## [EOSMG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EOSMG.xhtml) - Mie-Gruneisen Equation of State - SOL 700 only

Defines the properties of a Mie-Gruneisen equation of state commonly used to calculate the pressure  p  in high strain rate processes. Used in SOL 700 only.

![bulkde03528.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03528.jpg?_LANG=enus)  

where

e  = specific internal energy per unit mass. For material at zero pressure, e has to be initialized as zero.
rho_0 = reference density
rho = overall material density
gamma_0 = Gruneisen parameter at reference density.
s  = defined by ,where  and  are respectively the linear shock velocity and particle velocity as obtained from shock data.
c  = sound speed at reference density
RM = Cut-off value for density.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSMG   EID     c       S       R1      RM                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSMG   37      2000    1.5     2.0     3000                                    
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique equation of state number referenced from MATDEUL. (Integer > 0; Required) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ c         │ Sound speed at reference density. (Real; Required)                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ s         │ Constant s. (Real; Required)                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ gamma     │ Gruneisen gamma. (Real; Required)                                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ RM        │ Cut off value for density. (Real; Required)                                      │
└───────────┴──────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This equation of state can be used only with Eulerian elements.
2. This equation of state is discussed in Equations of State.
3. The cut off value RM is only used for limiting the pressure. To prevent division by zero RM should be less than  ![bulkde03544.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03544.jpg?_LANG=enus) . RM can be set slightly below this value. In case the simulation gets instable because of too large pressures RM can be decreased.
4. EID must unique among all EOSxx entries in one model .
