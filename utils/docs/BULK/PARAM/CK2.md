## [CK1, CK2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CK1.CK2.xhtml)

Default    = (   1.0, 0.0)

CK1 and CK2 specify factors for the total stiffness matrix.  The total stiffness matrix (exclusive of GENEL entries) is

![parameters01611.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01611.jpg?_LANG=enus)  

where  ![parameters01613.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01613.jpg?_LANG=enus)  is selected via the Case Control command K2GG and  ![parameters01615.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01615.jpg?_LANG=enus)  is generated from structural element (e.g., CBAR) entries in the Bulk Data.  These are effective only if K2GG is selected in Case Control.  A related parameter is CK3.

```text
┌───────┬─────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ Stresses and element forces are not factored by CK1, and must be adjusted manually. │
└───────┴─────────────────────────────────────────────────────────────────────────────────────┘
```
