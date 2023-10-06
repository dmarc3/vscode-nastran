## [EOSPOL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EOSPOL.xhtml) - Polynomial Equation of State for Solids - SOL 700 only

Defines the properties of a polynomial equation of state where the pressure  p  is defined in SOL 700 as follows:

In compression  ![bulkde03572.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03572.jpg?_LANG=enus) ,

![bulkde03574.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03574.jpg?_LANG=enus)  

In tension  ![bulkde03576.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03576.jpg?_LANG=enus) ,

![bulkde03578.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03578.jpg?_LANG=enus)  

Where

![bulkde03580.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03580.jpg?_LANG=enus)  

![bulkde03582.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03582.jpg?_LANG=enus)  

![bulkde03584.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03584.jpg?_LANG=enus)  

![bulkde03586.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03586.jpg?_LANG=enus)  

![bulkde03588.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03588.jpg?_LANG=enus)  

Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSPOL  EID     A1      A2      A3      B0      B1      B2      B3      +       
+       HVL     VISC                                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSPOL  100     80.E6                                                           
        1.1                                                                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                  │
├───────────┼──────────────────────────────────────────────────────────┤
│ EID       │ Unique equation of state member. (Integer > 0; Required) │
├───────────┼──────────────────────────────────────────────────────────┤
│ A1        │ Coefficient a1 or Bulk Modulus. (Real; Default = 0.0)    │
├───────────┼──────────────────────────────────────────────────────────┤
│ A2        │ Coefficient a2. (Real; Default = 0.0)                    │
├───────────┼──────────────────────────────────────────────────────────┤
│ A3        │ Coefficient a3. (Real; Default = 0.0)                    │
├───────────┼──────────────────────────────────────────────────────────┤
│ B0        │ Coefficient b0. (Real; Default = 0.0)                    │
├───────────┼──────────────────────────────────────────────────────────┤
│ B1        │ Coefficient b1. (Real; Default = 0.0)                    │
├───────────┼──────────────────────────────────────────────────────────┤
│ B2        │ Coefficient b2. (Real; Default = 0.0)                    │
├───────────┼──────────────────────────────────────────────────────────┤
│ B3        │ Coefficient b3. (Real;  Default = 0.0)                   │
├───────────┼──────────────────────────────────────────────────────────┤
│ HVL       │ Hydrodynamic volume limit. (Real > 1.0; Default = 1.1)   │
├───────────┼──────────────────────────────────────────────────────────┤
│ VISC      │ Viscosity coefficient.(Real;  Default = 0.0)             │
└───────────┴──────────────────────────────────────────────────────────┘
```

#### Remarks:

1. When the relative volume  ![bulkde03590.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03590.jpg?_LANG=enus)  exceeds HVL, the pressure is cut off to

     ![bulkde03592.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03592.jpg?_LANG=enus)  

     with

     ![bulkde03594.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03594.jpg?_LANG=enus)  

     e.g., for  ![bulkde03596.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03596.jpg?_LANG=enus) , the pressure behavior is as follows:

![inset_003598.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/inset_003598.jpg?_LANG=enus)

2. When the  PARAM,HVLFAIL  is set to  YES , the elements where the relative volume  ![bulkde03600.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03600.jpg?_LANG=enus)  exceeds HVL fail completely. Their stress state is zero.
