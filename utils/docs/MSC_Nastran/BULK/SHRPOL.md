## [SHRPOL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SHRPOL.xhtml) - Polynomial Shear Model

Defines an elastic shear model with a polynomial shear modulus. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SHRPOL  SID                                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SHRPOL  250     80.E6                                                           
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique shear model number referenced from a MATDEUL entry. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ G0        │ Coefficient G0. (Real; Default = 0.0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ G1        │ Coefficient G1. (Real; Default = 0.0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ G2        │ Coefficient G2. (Real; Default = 0.0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ G3        │ Coefficient G3. (Real; Default = 0.0)                                              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. SID must unique among all SHRxx entries in one model.
2. The shear modulus is computed from

     ![bulkqrs07654.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07654.jpg?_LANG=enus) 

     where  ![bulkqrs07656.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07656.jpg?_LANG=enus)  = effective plastic shear strain

     and  ![bulkqrs07658.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07658.jpg?_LANG=enus)  ,   ![bulkqrs07660.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07660.jpg?_LANG=enus)  ,   ![bulkqrs07662.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07662.jpg?_LANG=enus)   and  ![bulkqrs07664.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07664.jpg?_LANG=enus)   are constants
