## [PBEMN1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBEMN1.xhtml) - Nonlinear Property Extensions for a PBEAM or PBEAML Entry

Specifies additional nonlinear properties for elements that point to a PBEAM or PBEAML entry in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEMN1  PID     MID             SECT                                    +       
+       “C2”    BEH2    INT2                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEMN1  27      93                                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of an existing PBEAM entry. (Integer > 0)                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material ID. Remark 9.(Integer > 0)                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SECT      │ Section integration. SECT = “S” a smeared cross section is used for integration. SECT = “N” a │
│           │ numerically integrated cross section is used. See Remark 10. (Character Default S or blank)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ C2        │ Keyword indicating that items following apply to elements with two end grids. (Character)     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEH2      │ Element structural behavior. See Remark 5. (Character Default BEAM)                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT2      │ Integration scheme. See Remarks 5. and 6. (Character Default LC)                              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PID above must point to an existing PBEAM or PBEAML Bulk Data entry and is honored only in SOL 400.
2. Tapering of the CBEAM is ignored. Only section properties at end A are used.
3. MID if blank (or 0) use the MID value on the PBEAM or PBEAML entry. If > 0 it will override the MID value on the PBEAM entry.
4. The MID entry may point to MAT1 entry. The following table shows associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

```text
┌───────────────────────────────┐
│ Implicit Structural Materials │
├───────────────────────────────┤
│ MAT1                          │
├───────────────────────────────┤
│ MATVE                         │
├───────────────────────────────┤
│ MATVP                         │
├───────────────────────────────┤
│ MATEP                         │
├───────────────────────────────┤
│ MATF                          │
├───────────────────────────────┤
│ MATS1                         │
└───────────────────────────────┘
```

5. BEH2 refers to the nonlinear structural behavior of the BEAM element. An  underlined  item delineates a default.

        See link for table.

6. Integration codes in Remark 5 are:

        See link for table.

7. Integration code LCO requires appropriate scalar point SA and SB entries on the CBEAM entry or a fatal message will result.
8. Normal buckling modes for beams with nonlinear extensions can be computed through the ANALYSIS=BUCK step. The buckle modes can be evaluated through a linear perturbation step about a linear or nonlinear prestressed state. The current limitation is that lateral buckling mode computations (eg. Lateral-torsional buckling seen in compression flanges of open section beams) are not supported for these elements.
9. The structural element damping coefficient, GE, is not supported on elements which reference PBEMN1.
10. Smeared cross section support for integration codes are as follows:

```text
┌──────────────┬────────────┬──────┬────────────────────┬─────────────────────┬─────────────────────┐
│ Primary BEAM │ INT CODE   │ SECT │ Interpolation      │ Usage               │ COMMENTS            │
│ Property     │            │      │                    │                     │                     │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│ PBEAM        │ LC         │ S    │ Linear             │ Both Thin-Walled    │ Smeared section     │
│              │            │      │ Interpolation for  │ and Solid Sections  │ properties only are │
│              │            │      │ axial displacement │ with elastic        │ supported. Only     │
│              │            │      │ and Cubic          │ materials.Euler-    │ linear elastic      │
│              │            │      │ Interpolation for  │ Bernoulli Beam      │ materials via MAT1  │
│              │            │      │ transverse         │                     │ card can be         │
│              │            │      │ displacements      │                     │ provided.           │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LS         │ S    │ Linear             │ Both Thin-Walled    │ Smeared section     │
│              │            │      │ Interpolation for  │ and Solid Sections  │ properties only are │
│              │            │      │ axial              │ with elastic        │ supported. Only     │
│              │            │      │ displacements,     │ materials.          │ linear elastic      │
│              │            │      │  transverse        │  Captures           │ materials via MAT1  │
│              │            │      │ displacements and  │ transverse shear    │ card can be         │
│              │            │      │ rotations          │ effects - useful    │ provided.           │
│              │            │      │                    │ for deep beams.     │                     │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LC or LS   │ N    │                    │                     │ Not Supported       │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LCC or LCO │ S    │                    │                     │ Not Supported       │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LCC or LCO │ N    │                    │                     │ Not Supported       │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│ PBEAML       │ LC or LS   │ S    │                    │                     │ Not Supported       │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LC         │ N    │ Linear             │ Solid Sections.     │ Numerically         │
│              │            │      │ Interpolation for  │ Euler-Bernoulli     │ integrated sections │
│              │            │      │ axial displacement │ Beam                │ are supported. Both │
│              │            │      │ and Cubic          │                     │ linear and          │
│              │            │      │ Interpolation for  │                     │ nonlinear materials │
│              │            │      │ transverse         │                     │ can be provided.    │
│              │            │      │ displacements      │                     │ This includes MAT1, │
│              │            │      │                    │                     │ MATS1, MATEP,       │
│              │            │      │                    │                     │ MATVE, MATVP,       │
│              │            │      │                    │                     │ MATSMA materials.   │
│              │            │      │                    │                     │ MATHE/MATHP are not │
│              │            │      │                    │                     │ supported           │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LS         │ N    │ Linear             │ Solid Sections.     │ Numerically         │
│              │            │      │ Interpolation for  │ Captures transverse │ integrated sections │
│              │            │      │ axial              │ shear effects -     │ are supported. Both │
│              │            │      │ displacements,     │ useful for deep     │ linear and          │
│              │            │      │  transverse        │ beams.              │ nonlinear materials │
│              │            │      │ displacements and  │                     │ can be provided.    │
│              │            │      │ rotations          │                     │ This includes MAT1, │
│              │            │      │                    │                     │ MATS1, MATEP,       │
│              │            │      │                    │                     │ MATVE, MATVP,       │
│              │            │      │                    │                     │ MATSMA materials.   │
│              │            │      │                    │                     │ MATHE/MATHP are not │
│              │            │      │                    │                     │ supported           │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LCC or LCO │ S    │                    │                     │ Not Supported       │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LCC        │ N    │ Linear             │ Thin-Walled Closed  │ Numerically         │
│              │            │      │ Interpolation for  │ Sections without    │ integrated sections │
│              │            │      │ axial displacement │ warping. Euler-     │ are supported. Both │
│              │            │      │ and Cubic          │ Bernoulli Beam      │ linear and          │
│              │            │      │ Interpolation for  │                     │ nonlinear materials │
│              │            │      │ transverse         │                     │ can be provided.    │
│              │            │      │ displacements      │                     │ This includes MAT1, │
│              │            │      │                    │                     │ MATS1, MATEP,       │
│              │            │      │                    │                     │ MATVE, MATVP,       │
│              │            │      │                    │                     │ MATSMA materials.   │
│              │            │      │                    │                     │ MATHE/MATHP are not │
│              │            │      │                    │                     │ supported           │
├──────────────┼────────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│              │ LCO        │ N    │ Linear             │ Thin-Walled Open    │ Numerically         │
│              │            │      │ Interpolation for  │ Sections with       │ integrated sections │
│              │            │      │ axial displacement │ warping. Euler-     │ are supported. Both │
│              │            │      │ and Cubic          │ Bernoulli Beam      │ linear and          │
│              │            │      │ Interpolation for  │                     │ nonlinear materials │
│              │            │      │ transverse         │                     │ can be provided.    │
│              │            │      │ displacements      │                     │ This includes MAT1, │
│              │            │      │                    │                     │ MATS1, MATEP,       │
│              │            │      │                    │                     │ MATVE, MATVP,       │
│              │            │      │                    │                     │ MATSMA materials.   │
│              │            │      │                    │                     │ MATHE/MATHP are not │
│              │            │      │                    │                     │ supported           │
└──────────────┴────────────┴──────┴────────────────────┴─────────────────────┴─────────────────────┘
```
