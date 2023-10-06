## [CPYRAM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CPYRAM.xhtml) - Five-Sided Solid Element Connection

Defines the connections of the five-sided solid element with five or thirteen grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CPYRAM  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10     G11     G12     G13                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CPYRAM  7       4       15      16      17      18      40      21      +       
+       22      23      24      31      32      33      34                      
```

```text
┌───────────┬────────────────────────────────┬───────────────────────────┬──────────┐
│ Describer │ Meaning                        │ Type                      │ Default  │
├───────────┼────────────────────────────────┼───────────────────────────┼──────────┤
│ EID       │ Element identification number. │ 0 < Integer < 100,000,000 │ Required │
├───────────┼────────────────────────────────┼───────────────────────────┼──────────┤
│ PID       │ Property identification number │ Integer > 0               │ Required │
│           │ of a PSOLID entry.             │                           │          │
├───────────┼────────────────────────────────┼───────────────────────────┼──────────┤
│ Gi        │ Identification numbers of      │ Integer > 0 or blank      │ Required │
│           │ connected grid points.         │                           │          │
└───────────┴────────────────────────────────┴───────────────────────────┴──────────┘
```

![CPYRAM_elem_connection.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/CPYRAM_elem_connection.png?_LANG=enus)

Figure 0-11   CPYRAM Element Connection

#### Remarks:

1. Element ID numbers must be unique with respect to all other element ID numbers.
2. The topology of the diagram must be preserved, that is, G1, G2, G3, G4 define the quadrilateral base, G5 defines the apex, G1, G5, G10 are on the same edge, etc.
3. For a 5 noded CPYRAM element, only G1 - G5 should be provided. For a 13 noded CPYRAM element, all the corner and mid-side nodes (G1 - G13) should be provided. Note that partial specification of mid-points is not allowed. i.e. either none of the mid-points should be specified or all of the mid points should be specified.
4. The pyramid elements use the basic coordinate system as the element coordinate system. They can use a material coordinate system defined by the CORDM field of the corresponding PSOLID entry. CORDM = 0, -1, -2 or blank is the same as the basic coordinate system.
5. For CORDM > 0, the material coordinate system is defined with respect to the initial geometry and is used to input orthotropic or anisotropic material properties and for stress output. For geometric nonlinear analysis, the material coordinate system rotates with the element. Component of stresses are output in the material coordinate system referenced by the CORDM field of PSOLID entry (CORDM > 0).
