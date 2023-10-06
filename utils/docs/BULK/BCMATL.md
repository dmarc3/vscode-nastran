## [BCMATL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCMATL.xhtml) - 3D Contact Region by Element Materials

Defines a 3D contact region by element material. All elements with the specified materials define a contact body used in SOL 700.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCMATL  ID      IM1     IM2     IM3     IM4     IM5     IM6     IM7     +
+       IM8     IM9     etc.
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCMATL  1001    101     201     301 
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification of a deformable surface corresponding to a BSID value on the BCBODY entry if the │
│           │ Case Control command, BCONTACT=BCMATL is specified.  All elements corresponding to the material │
│           │ IDs specified may potentially come into contact. See Remark 1. (Integer > 0)                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IMi       │ Material ID. A minimum of one entry is required. (Integer)                                      │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ID must be unique with respect to all other BSURF, BCBOX, BCPROP, and BCMATL entries.
2. The deformable surface may alternately be defined using BSURF, BCBOX, or BCPROP entries.
3. Only one kind of entry (BSURF, BCBOX, BCPROP, or BCMATL) may be used to define a particular deformable surface.
4. All elements corresponding to the IDs entered will be used to define the deformable surface.
5. As many continuation lines as necessary may be used to define all material IDs associated with a particular deformable body.
6. BCMATL may not be used to define contact regions made up of composite elements.
