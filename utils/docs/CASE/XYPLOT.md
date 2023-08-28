## [XYPLOT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.XYPLOT.xhtml) - Generate X-Y Plots for a Plotter

Generates X-Y Plots for a plotter.

#### Format:

```nastran
XYPLOT  yvtype  ptype  [ i1, i2, i3,... ] /
+       id11 (itemu11 [, iteml11] ) , id12 (itemu12 [, iteml12] ) , ... /
+       id21 (itemu21 [, iteml21] ) , id22 (itemu22 [, iteml22] ) , ... / ....
```

#### Examples:

BEGIN BULK or OUTPUT(PLOT) commands are shown as a reminder to place X-Y output request packets properly in the Case Control Section; i.e., at the end of the Case Control Section, or just ahead of any structure plot requests.

#### Example 1:

```nastran
OUTPUT (XYPLOT)
CSCALE = 1.8
XYPLOT SDISP/16(T1)
BEGIN BULK
```

This sequence causes a single whole frame to be plotted for the T1 displacement component of solution set point 16 using the default parameter values. If 16(T1) is not in the solution set, a warning message will be printed and no plot will be made. The plot will be generated for the NASTRAN plotter on file PLT, which must be available.

#### Example 2:

```nastran
OUTPUT (XYOUT)
CSCALE = 1.8
XYPLOT, XYPRINT VELO RESPONSE 1,5 /3(R1,), 5(,R1)
OUTPUT (PLOT)
```

This sequence causes two frame plots (each consisting of an upper half frame and a lower half frame) to be plotted, one for subcase 1 and one for subcase 5, using the default parameter values. The velocity of the first rotational component of grid point 3 will be plotted on the upper half frame, and that of grid point 5 will be plotted on the lower half frame. Tabular printer output will also be generated for both curves.

#### Example 3:

```nastran
OUTPUT (XYPLOT)
CSCALE = 1.8
YDIVISIONS = 20
XDIVISIONS = 10
SGRID LINES = YES
YGRID LINES = YES
XYPLOT DISP 2,5/10(T1),10(T3)
BEGIN BULK
```

This sequence causes two whole frame plots to be generated, one for subcase 2 and one for subcase 5. Each plot contains the T1 and T3 displacement component for grid point 10. The default parameters will be modified to include grid lines in both the x-direction and y-direction, with 10 spaces in the x-direction and 20 spaces in the y-direction. The plot will be generated for the NASTRAN plotter on file .plt.

#### Example 4

```nastran
OUTPUT (XYPLOT)
CSCALE = 1.8
XAXIS = YES
YAXIS = YES
XPAPER = 40.
YPAPER = 20.
XYPLOT STRESS 3/ 15(2)/ 21(7)
OUTPUT (PLOT)
```

This sequence causes two whole frame plots to be generated using the results from subcase 3. The first plot is the response of the axial stress for rod element number 15. The second plot is the response of the major principal stress at Z1 for CTRIA3 element number 21. The default parameters will be modified to include the x-axis and y-axis drawn through the origin. Each plot will be initially scaled to fit on 40 x 20 inch paper. The plots will be generated for the NASPLT postprocessor and NASTRAN file .plt2 which must be defined. NASPLT will redefine the plot to 14 x 7-inch paper (with default options).

#### Example 5

```nastran
OUTPUT (XYPLOT)
CURVELINESYMBOL = -1
XYPLOT XYPAPLOT VG / 1(G,F) 2(G,F) 3(G,F) 4(G,F)
OUTPUT (PLOT)
```

This sequence is an example of plotting in a flutter analysis for which a split frame plot is made; the upper half is V-g and the lower half is V-f. Data from the first four loops will be plotted. Distinct symbols are used for data from each loop, and no lines are drawn between points (since the flutter analyst must sometimes exercise judgement about which points should be connected). The plots will also be printed in the normal output. These plots will not have all the features of the external plots, but can be very useful in getting a quick picture of the curves.

#### Example 5

```nastran
XTITLE=EXCITATION FREQUENCY FROM 2.5 TO 250 HERTZ SC 200
YTITLE=FLUID MODE PF AT FLUID POINT 204 FOR NATURAL MODE 2
XYPLOT,XYPEAK FMPF(2) MODE 200/204
```

#### Example 6

```nastran
YTITLE=EXCITATION FREQUENCY FROM 2.5 TO 250 HERTZ
YTITLE=PSD MPF FOR FLUID GRID 204 FOR NATURAL MODE 2
XYPLOT,XYPEAK FMPF(2) PSDF /204
```

#### Example 7

```nastran
XYPLOT CSIG PSDF / 4 (2003)
```

This is an example of plotting Composite Stress value of stress quantity given by Item Code 3 for layer with ID 2 of element with ID 4.

This can also be equivalently written as (see Remark 9 for explanation)

```nastran
XYPLOT CSIG PSDF / 4 (-2,3)
```

```text
┌────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describers │ Meaning                                           │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ yvtype     │ Type of y-value to be plotted: (Character).       │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ ACCE                                              │ Acceleration in the physical set.                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ BOUT                                              │ Slideline contact output.                         │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ DISP                                              │ Displacement in the physical set.                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ ELFORCE                                           │ Element force.                                    │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ ENTHALPY                                          │ Enthalpy in the physical set.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ FLUX                                              │ Element heat flux.                                │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ FMPF (mode_id or frequency_id)                    │ Fluid mode participation factors. See Remark 8.   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ GMPF (mode_id or frequency_id, panel_name,        │ Panel grid mode participation factors. See Remark │
│            │ panel_grid_id)                                    │ 8.                                                │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ HDOT                                              │ Rate of change of enthalpy in the physical set.   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ MPCF                                              │ Multipoint force of constraint.                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ LMPF                                              │ Load mode participation factors. See Remark 8.    │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ NONLINEAR                                         │ Nonlinear applied load.                           │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ OLOAD                                             │ Applied load.                                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ PMPF (mode_id or frequency_id, panel_name)        │ Panel mode participation factors. See Remark 8.   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ PRESSURE                                          │ Pressure of fluid-structure body.                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ SACCE                                             │ Acceleration in the solution set.                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ SDISP                                             │ Displacement in the solution set.                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ SMPF (mode_id or frequency_id)                    │ Structural mode participation factors. See Remark │
│            │                                                   │ 8.                                                │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ SPCF                                              │ Single-point force of constraint.                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ STEMP                                             │ Temperature in the solution set.                  │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ STRAIN                                            │ Element strain.                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ STRESS                                            │ Element stress.                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ SVELO                                             │ Velocity in the solution set.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ TEMP                                              │ Temperature in the physical set.                  │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ VECTOR                                            │ Displacement in the physical set.                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ VELO                                              │ Velocity in the physical set.                     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ VG                                                │ Flutter analysis.                                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ CSIG                                              │ Composite Stress                                  │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ CEPS                                              │ Composite Strain                                  │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ CFAI                                              │ Composite Failure Index                           │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ CSRS                                              │ Composite Strength Ratio                          │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ptype      │ Plot type defining the meaning of i1, i2, ...     │                                                   │
│            │ etc., idi, itemui, and itemli (Character,         │                                                   │
│            │ Default = “RESPONSE”).                            │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ AUTO                                              │ Autocorrelation function on whole frame curves    │
│            │                                                   │ only.                                             │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ FREQ                                              │ Frequency—for given excitation frequency plot     │
│            │                                                   │ mode participation versus natural frequency—Oxx2E │
│            │                                                   │ tables—point plot only. See Remark 8.             │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ MODE                                              │ Mode - for given fluid mode plot mode             │
│            │                                                   │ participation versus excitation frequency - Oxx2M │
│            │                                                   │ tables.                                           │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ PSDF                                              │ Power spectral density function on whole frame    │
│            │                                                   │ curves only.                                      │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ RESPONSE                                          │ Time or frequency in SORT2 format, or grid point  │
│            │                                                   │ identification numbers in SORT1 format (Default)  │
│            │                                                   │ .                                                 │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│            │ SPECTRAL                                          │ Response spectrum on whole frame curves only.     │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ i1, i2,... │ Subcase identification numbers for                │                                                   │
│            │ ptype = RESPONSE. The list must be specified in   │                                                   │
│            │ ascending order. For ptype = SPECTRAL, the        │                                                   │
│            │ subcase refers to the RECNO in the DTI,SPSEL Bulk │                                                   │
│            │ Data entry. The list is ignored for ptype = AUTO  │                                                   │
│            │ and PSDF (Integer  >  0, Default is all           │                                                   │
│            │ subcases).                                        │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ idij       │ Element, grid, scalar, or extra point             │                                                   │
│            │ identification number for y-value for frame i.    │                                                   │
│            │ For yvtype = VG, idij refers to the loop count of │                                                   │
│            │ a flutter analysis (Integer > 0).                 │                                                   │
├────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ itemuij,   │ Item code for y-value. itemuij is for upper half  │                                                   │
│            │ or whole itemlij curves on frame i, and itemlij   │                                                   │
│            │ is for lower half curves only on frame i. If      │                                                   │
│            │ itemlij is not specified, then whole frame curves │                                                   │
│            │ will be plotted with itemuij. itemlij is ignored  │                                                   │
│            │ for ptype = “AUTO”, “PSDF”, and “SPECTRAL”        │                                                   │
│            │ (Character or Integer > 0). For elements, the     │                                                   │
│            │ code represents a component of the element        │                                                   │
│            │ stress, strain, or force and is described in      │                                                   │
│            │ Table 7-1 and Table 7-5 of the Guide. For         │                                                   │
│            │ ptype = “AUTO”and “PSDF”, the complex stress or   │                                                   │
│            │ strain item codes need to be used. Since the      │                                                   │
│            │ output quantities are real, you can use either    │                                                   │
│            │ the real or the imaginary item code. Both will    │                                                   │
│            │ give the same result. For grid points and         │                                                   │
│            │ pty = “RESPONSE”, the code is one of the          │                                                   │
│            │ mnemonics T1, T2, T3, R1, R2, R3, T1RM, T2RM,     │                                                   │
│            │ T3RM, R1RM, R2RM, R3RM, T1IP, T2IP, T3IP, R1IP,   │                                                   │
│            │ R2IP, or R3IP, where Ti stands for the i-th       │                                                   │
│            │ translational component, Ri stands for the i-th   │                                                   │
│            │ rotational component, RM means real or magnitude, │                                                   │
│            │ and IP means imaginary or phase. For scalar or    │                                                   │
│            │ extra points, or heat transfer analysis, use T1,  │                                                   │
│            │ T1RM, or T1IP. The output format of results in    │                                                   │
│            │ PCH file is dictated by the case control request  │                                                   │
│            │ for DISP, STRESS. For example for SOL111: DISP    │                                                   │
│            │ (PLOT, phase, SORT2) = 1 OUTPUT (XYOUT) XYPUNCH   │                                                   │
│            │ DISP RESP /3 (T3RM) This will punch results in    │                                                   │
│            │ PCH file in Mag/phase format. If the DISP command │                                                   │
│            │ is missing results will shift to Real/Imaginary   │                                                   │
│            │ the default format for SOL111 displacement. For   │                                                   │
│            │ grid points and ptype = “AUTO” or “PSDF”, the     │                                                   │
│            │ code is one of the mnemonics T1, T2, T3, R1, R2,  │                                                   │
│            │ R3. For scalar or extra points, use T1. For       │                                                   │
│            │ yvtype = VG, itemui and/or itemli can be “F” for  │                                                   │
│            │ frequency or “G” for damping.                     │                                                   │
└────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. Multiple XYPLOT, XYPUNCH, XYPRINT, XYPEAK, and/or XYPAPLOT commands may be specified in the OUTPUT(XYPLOT) section.

2. Solution set requests are more efficient, because the time-consuming recovery of the dependent displacements can be avoided.

3. The item codes also appear in printed summaries as “CURVE ID” for grid points as well as element data.

4. The information after each slash ( / ) specifies the curve(s) that are to be plotted on the same frame. The describer idij identifies the grid point j or element j associated with the frame number i. All plot requests on one command are sorted on idij to improve the efficiency of the plotting process. Symbols are assigned in order by idij.

5. If any of the item codes, itemlij or itemuij, are not specified; e.g., (8) or (5), the corresponding half frame curve is not plotted. If both the comma ( , ) and itemlij not specified; e.g., (8), then whole frame curves will be plotted. Also, for any single frame, the specifications of “(itemuij,itemlij)” must be consistently half frame (upper and/or lower) or whole frame. For example on half frame curves, if iteml11 and the comma is not specified then either iteml12 or itemu12 must not be specified and on whole frame curves, the commas, iteml11, and iteml12 must not be specified. In other words, the curves on each plot frame must be all whole or half (upper and/or lower).

6. The XYPLOT command may be continued on the next line as long as “XYPLOT yvtype ptype [ i1, i2, i3,... ] /” is specified on the first line.

7. Specifying a nonexistent grid point may cause the program to exit in the XYTRAN module and missing plots to occur.

8. mode_id is used for natural frequency selection of Oxx2m participation versus excitation frequency output.

     frequency_id is used for excitation frequency selection of Oxx2E participation versus natural frequency output. frequency_id is an integer value; e.g., (2) would represent the second frequency calculated.

9. For yvtype = CSIG, CEPS, CFAI and CSRS, we can have (itemuij, itemlij) or (itemuij) formats. For the (itemuij, itemlij) format, itemuij will be a negative integer and its absolute value indicates the Ply ID; itemlij indicates the composite stress item code. For the (itemuij) format, itemuij will be an integer I = PLYID*1000 + ITEM_CODE.

10. Printout in the f06 file coming from X-Y plot commands is not supported by the POST TOCASE command.

