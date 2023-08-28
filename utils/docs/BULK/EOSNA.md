## [EOSNA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EOSNA.xhtml) - Noble-Abel equation of state - SOL700

Defines the properties of Noble-Abel equation of state where the pressure  p  is defined as:

![bulkde03546.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03546.jpg?_LANG=enus)  

where:

e  = specific internal energy per unit mass
rho = overall material density
gamma = a constant
b = Gas co-volume

#### Format and Example

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSNA   EID     GAMMA   B       R       CV      CP                              
EOSNA   35      1.2363  0.001   314.46                                          
```

```text
┌───────┬──────────────────────────────────┬────────┬────────────────────────┐
│ Field │ Contents                         │ Type   │ Default                │
├───────┼──────────────────────────────────┼────────┼────────────────────────┤
│ EID   │ Unique equation of state number. │ I > 0  │ Required               │
├───────┼──────────────────────────────────┼────────┼────────────────────────┤
│ GAMMA │ Constant .                       │ R≥ 0.0 │ Required               │
├───────┼──────────────────────────────────┼────────┼────────────────────────┤
│ B     │ Gas co-volume .                  │ R≥ 0.0 │ 0.0 Refer to Remark 3. │
├───────┼──────────────────────────────────┼────────┼────────────────────────┤
│ R     │ Gas constant.                    │ R>0.0  │ Refer to remark 4.     │
├───────┼──────────────────────────────────┼────────┼────────────────────────┤
│ CV    │ Specific heat at constant        │ R>0.0  │ Refer to remark 4.     │
│       │ volume.                          │        │                        │
├───────┼──────────────────────────────────┼────────┼────────────────────────┤
│ CP    │ Specific heat at constant        │ R>0.0  │ Refer to remark 4.     │
│       │ pressure                         │        │                        │
└───────┴──────────────────────────────────┴────────┴────────────────────────┘
```

#### Remarks

1. Refer to  Dytran Theory Manual : Chapter 4-Models, for EOSNA – Noble-Abel Equation of State.
2. EOSNA – Noble-Abel Equation of State   is used with Eulerian elements only.
3. The parameter B models the interactions between gas particles.
4. The temperature of the gas is calculated when one of the gas constants,  ![bulkde03556.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03556.jpg?_LANG=enus) ,  ![bulkde03558.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03558.jpg?_LANG=enus) , and  ![bulkde03560.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03560.jpg?_LANG=enus)  is mentioned.
5. The Euler variable name for temperature is TEMPTURE.
6. The relation between Gamma,  ![bulkde03562.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03562.jpg?_LANG=enus) ,  ![bulkde03564.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03564.jpg?_LANG=enus) , and  ![bulkde03566.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03566.jpg?_LANG=enus)  is shown below:

     ![bulkde03568.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03568.jpg?_LANG=enus)   ![bulkde03570.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03570.jpg?_LANG=enus)
