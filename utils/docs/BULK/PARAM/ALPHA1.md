## [ALPHA1, ALPHA2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ALPHA1.ALPHA2.xhtml)

Default    = 0.0, 0.0

In frequency and transient response analysis, if PARAM,ALPHA1 and/or ALPHA2 are not equal to zero, then Rayleigh damping is added to the viscous damping.  ALPHA1 is the scale factor applied to the mass matrix and ALPHA2 to the structural stiffness matrix. In SOL400, ALPHA1 and ALPHA2 are supported for both the linear and nonlinear elements. In SOL 129, Alpha1 scales the mass matrix, and ALPHA2 is not used.

![parameters01567.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01567.jpg?_LANG=enus)  

If  ![parameters01569.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01569.jpg?_LANG=enus)  is the damping ratio for the i-th mode  ![parameters01571.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01571.jpg?_LANG=enus)  (radians/unit time), then ALPHA1  ![parameters01573.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01573.jpg?_LANG=enus)  and ALPHA2  ![parameters01575.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01575.jpg?_LANG=enus)  may be computed as

![parameters01577.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01577.jpg?_LANG=enus)  

and the damping ratio for any other  ![parameters01579.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01579.jpg?_LANG=enus)  mode becomes

![parameters01581.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01581.jpg?_LANG=enus)  

```text
┌───────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ The use of Rayleigh damping with non-zero values of ALPHA1 may not be appropriate for enforced    │
│       │ motion problems involving large mass since the resulting damping matrix may essentially violate   │
│       │ the assumption of large mass in the problem and thus give wrong answers. Similarly, the use of    │
│       │ Rayleigh damping with non-zero values of ALPHA2 may not be appropriate for enforced motion        │
│       │ problems involving large stiffness since the resulting damping matrix may essentially violate the │
│       │ assumption of large stiffness in the problem and thus give wrong answers. Since Version 2005r3,   │
│       │ the ALPHA1, ALPHA2 parameters apply only to stationary structural components.  Prior to this      │
│       │ version, the parameters applied to both stationary and rotating structural components.  With the  │
│       │ introduction of Version 2005r3, new parameters ALPHAR1, ALPHAR2 are defined on the RSPINR and     │
│       │ RSPINT bulk data entry for the rotating component, see Remark 8. of the DAMPING bulk data         │
│       │ description for a comment on this item. Rayleigh damping is designed to be applied only at        │
│       │ Superelement, Part Superelement, or External Superelement residual assembly time. It is not       │
│       │ applied in individual Parts or External superelements.                                            │
└───────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
