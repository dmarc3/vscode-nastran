## [SCALE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.SCALE.xhtml) - Scale Factor

Defines reduction, as a scale factor, of model’s dimensions so that model fits on a plot frame.

#### Format:

```nastran
SCALE a [ b ]
```

#### Example:

```nastran
SCALE  0.5
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                                │
├────────────┼────────────────────────────────────────────────────────────────────────┤
│ a          │ Scale factor (Default = 1.0).                                          │
├────────────┼────────────────────────────────────────────────────────────────────────┤
│ b          │ Ratio of model size/real object size for stereoscopic projection only. │
└────────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The SCALE command is not recommended. The FIND command is recommended because it automatically calculates the optimum scale factor.

2. For orthographic or perspective projections, a is the ratio of the plotted object, in inches, to the real object in the units of model; i.e., one inch of paper equals one unit of model.

3. For stereoscopic projections, the stereoscopic effect is enhanced by first reducing the real object to a smaller model according to b, and then applying a. The ratio of plotted/real object is then the product of a and b.

4. If the NASTRAN general purpose plotter is used in combination with the PLOTPS postprocessing routine, a scale factor can computed as follows:

![casecontrol4b01547.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01547.jpg?_LANG=enus)  

where:

        See link for definitions.
