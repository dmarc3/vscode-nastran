## [PLOT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.PLOT.xhtml) - Undeformed or Deformed Plot Request

Generates an undeformed plot of the model or a deformed plot for a subcase, mode number or time step.

#### Format:

![casecontrol4b01521.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01521.jpg?_LANG=enus)  

![casecontrol4b01523.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01523.jpg?_LANG=enus)  

![casecontrol4b01525.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01525.jpg?_LANG=enus)  

![casecontrol4b01527.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01527.jpg?_LANG=enus)  

![casecontrol4b01529.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01529.jpg?_LANG=enus)  

![casecontrol4b01531.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01531.jpg?_LANG=enus)  

#### Examples:

See after Remarks Section.

```text
┌──────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describers   │ Meaning                                           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ analysis     │ Type of analysis results (Character, default      │                                                   │
│              │ results in an undeformed plot or undeformed       │                                                   │
│              │ underlay for contour plots).                      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ STATIC                                            │ Plot static deformations.                         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ MODAL                                             │ Plot mode shapes or eigenvectors.                 │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ CMODAL                                            │ Plot complex mode shapes or eigenvectors.         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ TRANSIENT                                         │ Plot transient solutions.                         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ FREQUENCY                                         │ Plot frequency solutions.                         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SENOMOVE                                          │ Plot undeformed superelements in their original   │
│              │                                                   │ position; i.e., ignore SELOC Bulk Data entry.     │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ dtype        │ Specifies plot quantity (Character, Default =     │                                                   │
│              │ “DEFORMATION”).                                   │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ DEFORMATION                                       │ Plot displacements or temperatures in the Z       │
│              │                                                   │ direction (Default).                              │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ VELOCITY                                          │ Plot velocities.                                  │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ ACCELERATION                                      │ Plot accelerations.                               │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CONTOUR      │ Request for contour plot.                         │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ i1, i2,...   │ Subcase identification numbers. See SHAPE and     │                                                   │
│              │ VECTOR for use of “0" (underlay) command. See     │                                                   │
│              │ Remark 3. (Integer  >  0, Default is all          │                                                   │
│              │ subcases).                                        │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RANGE f1 f2  │ Specifies range of natural frequencies,           │                                                   │
│              │ eigenvalues, excitation                           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TIME  t1,t2  │ frequencies, time steps, or load factors. Used to │                                                   │
│              │ minimize the amount of plotted data. See Remark   │                                                   │
│              │ 4. (Real).                                        │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PHASE LAG    │ Specified phase lag, in degrees, for plotting     │                                                   │
│              │ complex quantities. See Remark 5. (Real, Default  │                                                   │
│              │ =  0.0).                                          │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MAGNITUDE    │ Requests magnitude of complex quantities.         │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MAXIMUM      │ Specifies the magnification of the maximum        │                                                   │
│ DEFORMATION  │ displacement. See Remark 6. (Real).               │                                                   │
│ d            │                                                   │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SET sid      │ Set identification number which defines the set   │                                                   │
│              │ of elements or grid points to be plotted (Default │                                                   │
│              │ is first SET command).                            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ORIGIN oid   │ Origin identification number (Default is first    │                                                   │
│              │ origin defined by the ORIGIN or FIND command).    │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SYMMETRY w   │ Request plot of the symmetric portion of the      │                                                   │
│ ANTISYMMETRY │ symmetrically or antisymmetrically loaded model.  │                                                   │
│ w            │ This symmetric portion will be located in the     │                                                   │
│              │ space adjacent to the region originally defined   │                                                   │
│              │ by ORIGIN oid, and will appear as a reflection of │                                                   │
│              │ the antisymmetrically deformed model about the    │                                                   │
│              │ plane whose normal is oriented parallel to the    │                                                   │
│              │ coordinate direction w. See Remark 7. (Default is │                                                   │
│              │ no action).                                       │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PEN p        │ Specifies pen number that is used to generate the │                                                   │
│              │ plot (Integer  >  0).                             │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DENSITY d    │ Specifies line density scale factor for film      │                                                   │
│              │ plotters which is d times heavier than a line     │                                                   │
│              │ density of 1 (Integer  >  0).                     │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SYMBOLS      │ All the grid points associated with the specified │                                                   │
│ m[,n]        │ set will have symbol m overprinted with symbol n  │                                                   │
│              │ printed at its location. If n is not specified,   │                                                   │
│              │ only symbol m will be printed. See Remark 8.      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LABEL label  │ Specifies labeling options at elements and grid   │                                                   │
│              │ points:                                           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ GRID                                              │ All the grid points included in the specified set │
│              │                                                   │ have their identification number printed to the   │
│              │                                                   │ right of the undeformed or deformed location      │
│              │                                                   │ (undeformed location in the case of superimposed  │
│              │                                                   │ plots) (Default).                                 │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ ELEMENTS                                          │ All the elements included in the specified set    │
│              │                                                   │ are identified by the element identification      │
│              │                                                   │ number and type at the center of each element     │
│              │                                                   │ (undeformed location in the case of superimposed  │
│              │                                                   │ plots). See Remarks 11. and 12.                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ BOTH                                              │ Both GRID and ELEMENT options.                    │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ GSPC                                              │ Label those degrees-of-freedom that are           │
│              │                                                   │ constrained to zero through permanent single      │
│              │                                                   │ point constraints on GRID and GRDSET Bulk Data    │
│              │                                                   │ entries, or are constrained through SPC and SPC1  │
│              │                                                   │ Bulk Data entries. The label consists of the grid │
│              │                                                   │ point ID number and the constrained degrees-of-   │
│              │                                                   │ freedom.                                          │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ EPID                                              │ Label elements with their respective property     │
│              │                                                   │ identification (PID) numbers. The label consists  │
│              │                                                   │ of the standard element labels and element PID.   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SHAPE        │ All the elements included in the specified set    │                                                   │
│              │ are shown by connecting the associated grid       │                                                   │
│              │ points in a predetermined manner. See Remark 9.   │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ OUTLINE      │ Only the outline of all the elements in the       │                                                   │
│              │ specified set is shown. Elements not supported by │                                                   │
│              │ contour plots are ignored. Outlines are always    │                                                   │
│              │ drawn with PEN 1. See Remark 9.                   │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ VECTOR v     │ A line will be plotted at the grid points of the  │                                                   │
│              │ set representing by length and direction the      │                                                   │
│              │ deformation of the point. See Remark 10. Possible │                                                   │
│              │ values of v are:                                  │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ X, Y, or Z                                        │ Requesting individual components.                 │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ XY, XZ, or YZ                                     │ Requesting two specified components.              │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ XYZ                                               │ Requesting all three components.                  │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ RXY, RXZ, or RYZ                                  │ Requesting vector sum of two components.          │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ R                                                 │ Requesting total vector deformation.              │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ N                                                 │ Used with any of the preceding combinations to    │
│              │                                                   │ request no underlay shape be drawn.               │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PRINT        │ List of the average stresses at the interior grid │                                                   │
│              │ points in the set will be printed for contour     │                                                   │
│              │ stress plots.                                     │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SHRINK t,o   │ t is the ratio of the reduction to the original   │                                                   │
│              │ dimensions of all two-dimensional elements except │                                                   │
│              │ the CQUAD8 and CTRIA6 (0.0  <  t  <  1.0) (Real,  │                                                   │
│              │ Default  =  0.1 which results in a 10%            │                                                   │
│              │ reduction). o is the ratio of the reduction in    │                                                   │
│              │ length to the original length for one-dimensional │                                                   │
│              │ elements. There is no default value for o. t must │                                                   │
│              │ be specified to shrink one-dimensional elements.  │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NORMALS      │ Plot vector normal to CHBDYP and CHBDYG elements. │                                                   │
└──────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. If PLOT is specified with no describers, then a picture of the undeformed model will be prepared using the first defined set and the first defined origin.

2. Describers analysis through PHASE LAG must be specified in the order shown above.

3. The following should be noted when using subcase numbers for plotting eigenvectors.

     a. If subcase numbers are specified, then the convention for displacement vectors is that the list of subcases must refer to subcase IDs whenever the number of modes recovered is equal to or less than the number of subcases defined. If the number of modes recovered is more than the subcases defined, the plot request for those modes associated with the subcases must refer to subcase IDs. After the mode associated with the last defined subcase, higher modes will be identified by incrementing the last defined subcase ID by one for each such higher mode.

     b. For the display of element quantities in contour plots, the automatic incrementing beyond the last defined subcase does not occur. All subcase numbers to be plotted must be defined. A MODES command in the Case Control Section may be used for this purpose.

     c. In problems using cyclic symmetry solution sequences, the plot requests for segments of the model must refer to the coded subcase identification numbers (see  Theory   in the   MSC Nastran Reference Guide ). All eigenvectors recovered for the segment will be plotted. The RANGE option can be used to select a subset of all eigenvectors for plotting without use of coded subcase IDs.

     d. RANGE does not require the use of subcase numbers.

4. RANGE specifies the range of values using requested subcases for which plots will be prepared. If only one number is input, it is used as the lower bound and the upper bound is set to the highest value computed. Unless otherwise noted, the default range is all values computed.

     a. In real eigenvalue analysis, the values are natural frequencies, in units of cycles per unit time.

     b. In buckling analysis, the values are eigenvalues.

     c. In frequency response, the values are excitation frequencies in units of cycles per unit time.

     d. In transient response, the values are in units of time.

     e. In static nonlinear analysis (SOLs 106 and 153), the values are load factors. The default range is the highest load factor of each subcase.

     f. In transient nonlinear analysis (SOLs 129 and 159), the values are in units of time. The default range is the last time step for each subcase.

5. PHASE LAG  ![casecontrol4b01537.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01537.jpg?_LANG=enus)  is used in the equation:

     ![casecontrol4b01539.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01539.jpg?_LANG=enus)  

     where  ![casecontrol4b01541.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01541.jpg?_LANG=enus)  an  ![casecontrol4b01543.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01543.jpg?_LANG=enus)  are the real and imaginary parts of the response quantity, respectively. The printed output for magnitude and phase uses the convention of a phase lead.

6. MAX DEFO is not recommended for general use. Each subcase is separately scaled according to its own maximum if this item is absent. If d is omitted, the set will be scaled to the maximum within the set being plotted.

7. w specifies the basic coordinates X, Y, or Z, or any combination thereof. This option allows the plotting of symmetric and/or antisymmetric combinations, provided that an origin is selected for the portion of the model defined in the Bulk Data Section that allows sufficient room for the complete plot. This does not permit the combination of symmetric and antisymmetric subcases, as each plot must represent a single subcase. In the case of a double reflection, the figure will appear as one reflected about the plane whose normal is parallel to the first of the coordinates w, followed by a reflection about the plane whose normal is oriented parallel to the second of the coordinates w. This capability is primarily used in the plotting of models that are loaded in a symmetric or an antisymmetric manner. The plane of symmetry must be one of the basic coordinate planes.

8. Grid points excluded from the set will not have a symbol. Grid points in an undeformed underlay will be identified with symbol 2.

9. In order to get a deformed shape, either SHAPE or OUTLINE must be present in the PLOT command. Both deformed and undeformed shapes or outlines may be specified. All the deformed shapes relating to the subcases listed may be underlaid on each of their plots by including “0" with the subcase string on the PLOT command. The undeformed plot will be drawn using PEN 1 or DENSITY 1 and symbol 2 (if SYMBOLS is specified).

10. All plots requesting the VECTOR option will have an underlay generated of the undeformed shape using the same sets, PEN 1 or DENSITY 1, and symbol 2 (if SYMBOLS is specified). If SHAPE and VECTOR are specified, the underlay will depend on whether “0" is used along with the subcases with DEFORMATION. It will be the deformed shape when not used, and will be both deformed and undeformed shapes when it is used. The part of the vector at the grid point will be the tail when the underlay is undeformed, and the head when it is deformed. If v=“N” then no shape will be drawn, but other options such as SYMBOLS will still be valid.

11. Element type labels are: (Plot labels QH and TH indicate hyperelastic elements)

```text
ELEMENT  PLOT    |  ELEMENT  PLOT 
TYPE     LABEL   |  TYPE     LABEL
-----------------|-------------------
CAERO1   AE      |  PLOTEL  PL      
CAXIF2   A2      |  CQUAD   QH      
CAXIF3   A3      |  CQUAD4  Q4 or QH
CAXIF4   A4      |  CQUAD8  Q8 or QH
CBAR     BR      |  CQUADR  QR      
CBEAM    BM      |  CQUADX  QH      
CBEND    BD      |  CROD    RD      
CBUSH    BU      |  CSHEAR  SH      
CONEAX   CN      |  CSLOT3  S3      
CONROD   CR      |  CSLOT4  S4      
CDUMI    Di      |  CTETRA  TE      
CFLUID2  F2      |  CTRIAX6 D1      
CFLUID3  F3      |  CTRIA3  T3 or TH
CFLUID4  F4      |  CTRIA6  T6 or TH
CHBDYG   HB      |  CTRIAR  TR      
CHBDYP   HB      |  CTRIAX  TH      
CHEXA    HA      |  CTUBE   TU      
CPENTA   HA      |  CVISC   VS      
```

12. The heat transfer boundary condition elements CHBDYG and CHBDYP can be plotted for undeformed plots. There are several types of CHBDYi elements, as follows:

```text
┌───────┬────────────────────────────┬───────────────────┐
│ Type  │ No. of Primary Grid Points │ Normals Available │
├───────┼────────────────────────────┼───────────────────┤
│ POINT │ 1                          │ yes               │
├───────┼────────────────────────────┼───────────────────┤
│ LINE  │ 2                          │ yes               │
├───────┼────────────────────────────┼───────────────────┤
│ AREA3 │ 3                          │ yes               │
├───────┼────────────────────────────┼───────────────────┤
│ AREA4 │ 4                          │ yes               │
├───────┼────────────────────────────┼───────────────────┤
│ REV   │ 2                          │ no                │
├───────┼────────────────────────────┼───────────────────┤
│ ELCYL │ 2                          │ no                │
├───────┼────────────────────────────┼───────────────────┤
│ TUBE  │ 2                          │ yes               │
├───────┼────────────────────────────┼───────────────────┤
│ FTUBE │ 2                          │ yes               │
├───────┼────────────────────────────┼───────────────────┤
│ AREA6 │ 6                          │ yes               │
├───────┼────────────────────────────┼───────────────────┤
│ AREA6 │ 8                          │ yes               │
└───────┴────────────────────────────┴───────────────────┘
```
     The secondary grid points are used for ambient conditions and are ignored by the plotter. Type POINT must have a nonzero associated area (see AF on the associated PHBDY entry) and a defined normal direction (see V1, V2, V3 on the CHBDYP entry) to be plotted. It is plotted as a hexagon with approximately the correct area. Type LINE must have a nonzero width (see AF on the associated PHBDY entry) and a defined normal in order to plot.

13. To assign PLOT command to superelements it requires an SEUPPLOT or a SEPLOT command.

#### Examples:

1. Undeformed SHAPE using first defined SET, first defined ORIGIN and PEN 1 (or DENSITY 1).

```nastran
PLOT
```

2. Undeformed SHAPE using SET 3, ORIGIN 4, PEN 2 (or DENSITY 2) with each grid point of the set having a + placed at its location, and its identification number printed adjacent to it.

```nastran
PLOT SET 3 ORIGIN 4 PEN 2 SHAPE SYMBOLS 3 LABEL
```

3. Modal deformations as defined in subcase 5 using first defined SET, first defined ORIGIN, and PEN 1 (or DENSITY 1).

```nastran
PLOT MODAL DEFORMATION 5 SHAPE
```

4. STATIC deformations as defined in subcases 3, 4, 5, and 8 deformed SHAPE; drawn with PEN 4, using first defined SET and ORIGIN, underlaid with undeformed SHAPE drawn with PEN 1. This command will cause four plots to be generated.

```nastran
PLOT STATIC DEFORMATION 0, 3 THRU 5, 8 PEN 4, SHAPE
```

5. Deformations as defined in ⋅  subcases 1, 2, 3, 4, and 5 undeformed underlay with PEN 1, consisting of SET 2 at ORIGIN 3, SET 2 at ORIGIN 4 (with a < placed at each grid point location), and SET 35 at ORIGIN 4. Deformed data as follows: SHAPE using SET 2 at ORIGIN 3 (PEN 3) and SET 35 at ORIGIN 4 (PEN 4); 3 VECTORS (X, Y and Z) drawn at each grid point of SET 2 at ORIGIN 4 (PEN 4) (less any excluded grid points), with o placed at the end of each vector.

```nastran
PLOT STATIC DEFORMATION 0 THRU 5,
   SET 2 ORIGIN 3 PEN 3 SHAPE,
   SET 2 ORIGIN 4 PEN 4 VECTORS XYZ SYMBOLS 0,
   SET 35 SHAPE
```

6. Static deformations as defined in subcases 3 and 4, both halves of a problem solved by symmetry using the X-Y principal plane as the plane of symmetry. SET 1 at ORIGIN 2 and SET 2 at ORIGIN 3, with the deformed shape plotted using DENSITY 3 and the undeformed model plotted using DENSITY 1. The deformations of the “opposite” half will be plotted to correspond to symmetric loading. This command will cause two plots to be generated.

```nastran
PLOT STATIC DEFORMATIONS 0, 3, 4,
   SET 1 ORIGIN 2 DENSITY 3 SHAPE,
   SET 1 SYMMETRY Z SHAPE,
   SET 2 ORIGIN 3 SHAPE,
   SET 2 SYMMETRY Z SHAPE
```

7. Transient deformations as defined in subcase 1 for time = 0.1 to time = 0.2, using SET 1 at ORIGIN 1. The undeformed SHAPE using PEN or DENSITY 1 with an * at each grid point location will be drawn as an underlay for the resultant deformation vectors using PEN or DENSITY 2 with an < typed at the end of each vector drawn. In addition, a plotted value of 2.0 will be used for the single maximum deformation occurring on any of the plots produced. All other deformations on all other plots will be scaled relative to this single maximum deformation. This command will cause a plot to be generated for each output time step which lies between 0.1 and 0.2.

```nastran
PLOT TRANSIENT DEFORMATION, TIME 0.1, 0.2,
   MAXIMUM DEFORMATION 2.0, SET 1, ORIGIN 1, PEN 2, SYMBOLS 2,
   VECTOR R
```

8. Contour plot of x-component of normal stress for elements in SET 2 in basic coordinate system at a distance Z1 from neutral plane with 10 contour lines, an outline of elements in SET 2, and using

```nastran
ORIGIN 4.
CONTOUR XNORMAL
PLOT CONTOUR, SET 2, ORIGIN 4, OUTLINE
```

Contour plot of magnitude of displacements at grid points associated with elements in SET 5 with 5 contours having values of 2., 4., 6., 8., 10., and an outline of the elements in SET 5 using

```nastran
ORIGIN 4.
CONTOUR MAGNIT, LIST 2., 4., 6., 8., 10.
PLOT CONTOUR, SET 5, OUTLINE
```

9. Plot the imaginary part of the complex eigenvector in SET 1.

```nastran
PLOT CMODAL DEFORMATION PHASE LAG 90.  SET 1 VECTOR R
```

