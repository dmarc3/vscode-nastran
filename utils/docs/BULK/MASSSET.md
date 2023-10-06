## [MASSSET](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MASSSET.xhtml) - Mass Combination Definition

The MASSSET bulk data entry defines a linear combination of mass cases to form the subcase-dependent mass which is selected by associated MASSSET case control. The subcase mass is defined as follows by the MASSSET bulk:

![inset_004077.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/inset_004077.jpg?_LANG=enus)  

Where,   ![inset_1.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/inset_1.jpg?_LANG=enus) refers to the MASSID qualifier:   ![inset_2.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/inset_2.jpg?_LANG=enus) is the base mass case,   ![inset_3.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/inset_3.jpg?_LANG=enus) are the incremental mass cases.

ID’s of mass combinations defined by MASSSET bulk data entry and mass increments defined by MASSID bulk data sections should be unique.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MASSSET ID      S0      S1      ID1     S2      ID2     S3      ID3             
        S4      ID4                                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MASSSET 11      1.0     1.0     0       1.0     101                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Set identification number referenced by MASSSET case control. (Integer > 0; Required) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ S0        │ The overall scale factor for the linear combination (Real >= 0.0; Default = 0.0)      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ Si        │ The scale factor for the ith mass increment (Real >= 0.0; Default = 0.0)              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ The MASSID for the ith mass increment (Integer > 0; No Default)                       │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────┘
```
