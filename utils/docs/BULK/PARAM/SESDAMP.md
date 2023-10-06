## [SESDAMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SESDAMP.xhtml)

Default = NO

```nastran
PARAM,SESDAMP,YES
```

Modal damping is calculated for superelements if PARAM,SESDAMP,YES is specified. An SDAMPING Case Control command that selects a TABDMP1 Bulk Data entry must also be specified in the desired superelement’s subcase. By default, modal damping is added to viscous damping (B). If you insert PARAM,KDAMP,-1 (or PARAM,KDAMPFL,-1 for fluid superelements) then modal damping will be added to structural damping (K4). The SESDAMP parameter needs to be specified as NO for an assembly run.

```nastran
PARAM,SESDAMP,AUG
```

By its nature, classical modal damping in superelements is computed only for the component modes. If fixed boundary or mixed boundary (some fixed, some free) methods are used to compute the component modes, no damping is computed for the constraint modes, which can lead to answer differences when comparing the same model with and without superelements. An enhanced modal damping method has been developed to account for damping on the constraint modes. To use the enhanced damping method instead of the classical method, define “PARAM,SESDAMP,AUG”. When this enhanced damping method is defined, the user may choose how the damping factor for the constraint modes is determined via the parameter TDAMP.

