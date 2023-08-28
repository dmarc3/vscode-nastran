## [SNORM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SNORM.xhtml)

Default    = 20.0

SNORM > 0.0 requests the generation of unique grid point normals for adjacent shell elements (see  Figure 6-2 ).  Unique grid point normals are generated for the CQUAD4, CTRIA3, CQUADR, and CTRIAR elements.  The grid point normal is the average of the local normals from all adjacent shell elements including CQUAD8 and CTRIA6 elements.  If grid point normals are present, they are used in all element calculations of the CQUAD4, CTRIA3, CQUADR, and CTRIAR elements.

```text
┌───────────┬──────────────────────────────────────────────────┐
│ SNORM     │ Tolerance in Degrees                             │
├───────────┼──────────────────────────────────────────────────┤
│ > 0.0     │ Unique grid point normals are generated if each  │
│           │ angle between the grid point normal and each     │
│           │ local normal of the adjacent shell elements is   │
│           │ smaller than SNORM.  SNORM Bulk Data entries     │
│           │ overwrite a generated normal.                    │
├───────────┼──────────────────────────────────────────────────┤
│ = 0.0     │ The generation of grid point normals is turned   │
│           │ off. The user can define normals with the SNORM  │
│           │ Bulk Data entry.                                 │
├───────────┼──────────────────────────────────────────────────┤
│ < 0.0     │ Grid point normals are not generated. SNORM Bulk │
│           │ Data entries are ignored.                        │
└───────────┴──────────────────────────────────────────────────┘
```

> **Caution:** If the grid shown in Figure 6-2 is located on a symmetric half model boundary and, hence, Shell 2 is not present, you may attain the same result as a full model by specifying the normal direction with the SNORM Bulk Data entry.

![parameters01797.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01797.jpg?_LANG=enus)

Figure 6-2   Unique Grid Point Normal for Adjacent Shell Elements

