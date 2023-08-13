## [PBARN1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBARN1.xhtml) - Nonlinear Property Extensions for a PBAR or PBARL Entry

Specifies additional nonlinear properties for elements that point to a PBAR or PBARL entry in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBARN1  PID     MID             SECT                                    +       
+       “C2”    BEH2    INT2                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBARN1  29      73                                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of an existing PBAR entry. (Integer > 0,)                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material ID. Remark 10.(Integer > 0)                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SECT      │ Section integration. SECT = “S” a smeared cross section is used for integration. SECT = “N” a │
│           │ numerically integrated cross section is used. See Remark 7. (Character Default S or blank)    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ C2        │ Keyword indicating that items following apply to elements with two end grids. (Character)     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEH2      │ Element structural behavior. See Remark 4. (Character Default BAR)                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT2      │ Integration scheme. See Remarks 4. and 5. (Character Default LC)                              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PID above must point to an existing PBAR or PBARL Bulk Data entry and is honored only in SOL 400.
2. MID if blank (or 0) use the MID value on the PBAR or PBARL entry. If > 0 it will override the MID value on the PBAR entry.
3. The MID entry may point to the MAT1 entry. The table below shows associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

        See link for table.

4. BEH2 refers to the nonlinear structural behavior of the BAR element. An  underlined  item delineates a default.

        See link for table.

5. Integration codes in Remark   are:

        See link for table.

6. Normal buckling modes for beams with nonlinear extensions can be computed through the ANALYSIS=BUCK step. The buckle modes can be evaluated through a linear perturbation step about a linear or nonlinear prestressed state. The current limitation is that lateral buckling mode computations (eg. Lateral-torsional buckling seen in compression flanges of open section beams) are not supported for these elements.

7. Smeared section support. 

```text
┌─────────────┬──────────┬──────┬────────────────────┬─────────────────────┬─────────────────────┐
│ Primary BAR │ INT CODE │ SECT │ Interpolation      │ Usage               │ COMMENTS            │
│ Property    │          │      │                    │                     │                     │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│ PBAR        │ LC       │ S    │ Linear             │ Both Thin-Walled    │ Smeared section     │
│             │          │      │ Interpolation for  │ and Solid Sections  │ properties only are │
│             │          │      │ axial displacement │ with elastic        │ supported. Only     │
│             │          │      │ and Cubic          │ materials. Euler-   │ linear elastic      │
│             │          │      │ Interpolation for  │ Bernoulli Beam.     │ materials via MAT1  │
│             │          │      │ transverse         │                     │ card can be         │
│             │          │      │ displacements      │                     │ provided.           │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│             │ LS       │ S    │ Linear             │ Both Thin-Walled    │ Smeared section     │
│             │          │      │ Interpolation for  │ and Solid Sections  │ properties only are │
│             │          │      │ axial, transverse  │ with elastic        │ supported. Only     │
│             │          │      │ displacements and  │ materials. Captures │ linear elastic      │
│             │          │      │ rotations          │ transverse shear    │ materials via MAT1  │
│             │          │      │                    │ effects - useful    │ card can be         │
│             │          │      │                    │ for deep beams      │ provided.           │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│             │ LC or LS │ N    │                    │                     │ Not Supported       │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│             │ LCC      │ S    │                    │                     │ Not Supported       │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│             │ LCC      │ N    │                    │                     │ Not Supported       │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│ PBARL       │ LC or LS │ S    │                    │                     │ Not Supported       │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│             │ LC       │ N    │ Linear             │ Solid Sections.     │ Numerically         │
│             │          │      │ Interpolation for  │ Euler-Bernoulli     │ integrated sections │
│             │          │      │ axial displacement │ Beam                │ are supported. Both │
│             │          │      │ and Cubic          │                     │ linear and          │
│             │          │      │ Interpolation for  │                     │ nonlinear materials │
│             │          │      │ transverse         │                     │ can be provided.    │
│             │          │      │ displacements      │                     │ This includes MAT1, │
│             │          │      │                    │                     │ MATS1, MATEP,       │
│             │          │      │                    │                     │ MATVE, MATVP,       │
│             │          │      │                    │                     │ MATSMA materials    │
│             │          │      │                    │                     │ are supported.      │
│             │          │      │                    │                     │  MATHE/MATHP are    │
│             │          │      │                    │                     │ not supported.      │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│             │ LS       │ N    │ Linear             │ Solid Sections.     │ Numerically         │
│             │          │      │ Interpolation for  │ Captures transverse │ integrated sections │
│             │          │      │ axial              │ shear effects -     │ are supported. Both │
│             │          │      │ displacements,     │ useful for deep     │ linear and          │
│             │          │      │  transverse        │ beams               │ nonlinear materials │
│             │          │      │ displacements and  │                     │ can be provided.    │
│             │          │      │ rotations          │                     │ This includes MAT1, │
│             │          │      │                    │                     │ MATS1, MATEP,       │
│             │          │      │                    │                     │ MATVE, MATVP,       │
│             │          │      │                    │                     │ MATSMA materials.   │
│             │          │      │                    │                     │  MATHE/MATHP  are   │
│             │          │      │                    │                     │ not supported.      │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│             │ LCC      │ S    │                    │                     │ Not Supported       │
├─────────────┼──────────┼──────┼────────────────────┼─────────────────────┼─────────────────────┤
│             │ LCC      │ N    │ Linear             │ Thin-Walled         │ Numerically         │
│             │          │      │ Interpolation for  │ Sections. Euler-    │ integrated sections │
│             │          │      │ axial displacement │ Bernoulli Beam.     │ are supported. Both │
│             │          │      │ and Cubic          │                     │ linear and          │
│             │          │      │ Interpolation for  │                     │ nonlinear materials │
│             │          │      │ transverse         │                     │ can be provided.    │
│             │          │      │ displacements      │                     │ This includes MAT1, │
│             │          │      │                    │                     │ MATS1, MATEP,       │
│             │          │      │                    │                     │ MATVE, MATVP,       │
│             │          │      │                    │                     │ MATSMA materials.   │
│             │          │      │                    │                     │   MATHE/MATHP are   │
│             │          │      │                    │                     │ not supported.      │
└─────────────┴──────────┴──────┴────────────────────┴─────────────────────┴─────────────────────┘
```

8. For creep material defined through MATVP, VALC=0 must be set on NLMOPTS, for explicit formulation.
9. For shape memory materials defined through MATSMA, only the thermo-mechanical model is available.
10. The structural element damping coefficient, GE, is not supported on elements which reference PBARN1.
