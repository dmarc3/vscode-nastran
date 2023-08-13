## [AESCALE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AESCALE.xhtml) - Aerodynamic Grid Point Scaling

Defines reference lengths to scale aerodynamic grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AESCALE ASID    X1REF   X2REF   X3REF                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AESCALE 100     1       1       1                                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ ASID      │ Identification Number called out on an AEGRID entry. (0 < Integer < 100,000,000) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ X1REF     │ Reference length to scale X1. (Real or blank; Default = 1.0)                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ X2REF     │ Reference length to scale X2. (Real or blank; Default = 1.0)                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ X3REF     │ Reference length to scale X3. (Real or blank; Default = 1.0)                     │
└───────────┴──────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. The scaled coordinates are computed from  ![bulkab02055.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02055.jpg?_LANG=enus) .
2. The AEGRID, AETRIA3, AEQUAD4, and AESCALE entries provide an aerodynamic mesh in a readable, portable format. There are no internal aerodynamics created on this mesh.
