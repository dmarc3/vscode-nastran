## [PLTSURF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLTSURF.xhtml) - Surface plot mesh definition

Defines the surface plot mesh.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLTSURF EID     GID1    GID2    GID3    GID4    GID5    GID6    GID7    +       
+       GID8                                                                    
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Identification number of element.                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDi      │ Grid identification number of structure/cavity models or trim component surface element. │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This element is used only to describe the surface mesh of 3D model. The connection can be 3, 4, 6 or 8 nodes and the connection sequence mirrors those of CTRIA3, CQUAD4, CTRIA6 and CQUAD8.
2. PLTSURF can be utilized to describe surface mesh on ACPEMCP for trim component coupling in PEM job.
3. For trim component, PLTSURF ID must be referenced on SET3,id,ELEM. If SET1 entry is used with PLTSURF ID, fatal error or unexpected results may be the results.
4. PLTSURF entry can also be used to define surface mesh for structure/cavity models and it behaves similarly as PLOTEL and does not participate in analysis.
