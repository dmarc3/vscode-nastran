## [ALPHA1FL, ALPHA2FL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ALPHA1FL.ALPHA2FL.xhtml)

Default    = 0.0, 0.0

In frequency and transient response analysis, if PARAM,ALPHA1FL and/or ALPHA2FL are not equal to zero, then Rayleigh damping is added to the viscous damping.  ALPHA1FL is the scale factor applied to the mass matrix and ALPHA2FL to the fluid stiffness matrix.

![parameters01583.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01583.jpg?_LANG=enus)  

If  ![parameters01585.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01585.jpg?_LANG=enus)  is the damping ratio for the i-th mode  ![parameters01587.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01587.jpg?_LANG=enus)  (cycles/unit time), then ALPHA1FL  ![parameters01589.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01589.jpg?_LANG=enus)  and ALPHA2FL  ![parameters01591.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01591.jpg?_LANG=enus)  may be computed as

![parameters01593.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01593.jpg?_LANG=enus)  

and the damping ratio for any other  ![parameters01595.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01595.jpg?_LANG=enus)  mode becomes

![parameters01597.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01597.jpg?_LANG=enus)  

```text
┌───────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ The use of Rayleigh damping with non-zero values of ALPHA1FL may not be appropriate for enforced  │
│       │ motion problems involving large mass since the resulting damping matrix may essentially violate   │
│       │ the assumption of large mass in the problem and thus give wrong answers. Similarly, the use of    │
│       │ Rayleigh damping with non-zero values of ALPHA2FL may not be appropriate for enforced motion      │
│       │ problems involving large stiffness since the resulting damping matrix may essentially violate the │
│       │ assumption of large stiffness in the problem and thus give wrong answers. Rayleigh damping is     │
│       │ designed to be applied only at Superelement, Part Superelement, or External Superelement residual │
│       │ assembly time. It is not applied in individual Parts or External superelements.                   │
└───────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
