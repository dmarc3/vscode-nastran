## [SEKD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SEKD.xhtml)

Default = RSONLY

Controls the calculation of the upstream superelement differential stiffness matrix in SOL 106.

```text
┌────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ RSONLY │ Calculate the differential stiffness for the residual structure only.                             │
├────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL    │ Calculate and reduce the differential stiffness for all superelements and the residual structure. │
└────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
