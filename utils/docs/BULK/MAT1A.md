## [MAT1A](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT1A.xhtml) - Additional Material Properties for MAT1- SOL700

Specifies additional the material properties of MAT1 for solid elements. Use SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT1A   MID     EID                                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT1A   101     201                                                             
```

```text
┌───────────┬─────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                 │
├───────────┼─────────────────────────────────────────────────────────┤
│ MID       │ Identification number of MAT1. (Integer > 0; required.) │
├───────────┼─────────────────────────────────────────────────────────┤
│ EID       │ EOSxxx ID. (Integer > 0; required.)                     │
└───────────┴─────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MAT1A always required for solid elements when MATEP is used. However, when RYIELD option of MATEP is set to VMISES, ORTHOCR or SOIL, MATEOS is not required.
