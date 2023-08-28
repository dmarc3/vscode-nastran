## [CURV](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CURV.xhtml)

Default    =    -1

PARAM,CURV,1 requests that the CTRIA3 and CQUAD4 element stress and/or strain output be computed in a material coordinate system (normal output is in the element or basic coordinate system) and/or to interpolate it to grid points.  (CQUAD4 element corner stress output is not supported.)

The integer parameter OG controls the calculation of stress and/or strain data at grid points.  If OG is set to -1, the calculation for stresses and/or strain data at grid points is not performed.  The default value of zero provides the calculation of these quantities at those grid points to which the selected elements connect.

User parameters S1G, S1M, S1AG, and S1AM, set to 1, request the printout of stresses at grid points, stresses in the material coordinate system, strains at grid points and strains in the material coordinate system, respectively.

The integer parameter OUTOPT may be set in accordance with the below options to select print, punch, and/or plotter output for stress and/or strain data that are computed in user-defined material coordinate systems.

```text
┌──────────────┬─────────────────────────────────────────────────────┐
│ OUTOPT Value │ Description                                         │
├──────────────┼─────────────────────────────────────────────────────┤
│ 0            │ Default-standard MSC Nastran device codes are used. │
├──────────────┼─────────────────────────────────────────────────────┤
│ 1            │ Print only                                          │
├──────────────┼─────────────────────────────────────────────────────┤
│ 2            │ Plot only                                           │
├──────────────┼─────────────────────────────────────────────────────┤
│ 4            │ Punch only                                          │
└──────────────┴─────────────────────────────────────────────────────┘
```
The above values may be combined additively to select two or more forms of output.  For example, OUTOPT=6 requests both plot and punch output.  Related parameters include BIGER, CURVPLOT, DOPT, NUMOUT, NINTPTS, S1G, S1M.

For stress and/or strain/curvature output in a user-defined material coordinate system MCSID must be defined on MAT1 and MAT2 Bulk Data entries.  The values of MCSID reference CORDiR, CORDiC, and CORDiS Bulk Data entries.  A value of zero for MCSID does not imply the basic coordinate and will eliminate all   elements which reference the MATi from the subject calculations.

1. If these data are requested at the element centers, the program will compute the unit vector  ![parameters01635.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01635.jpg?_LANG=enus)  along the T1 or x-axis of the material coordinate system, and compare

     ![parameters01637.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01637.jpg?_LANG=enus)  

     for each element that references the material coordinate system, where n is the normal to the surface of the element.  If

     ![parameters01639.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01639.jpg?_LANG=enus)  

     the projection of the y-axis on the surface of element is taken as the reference axis.  Otherwise, the projection of the x-axis on the surface of the element is taken as the reference axis.  The angle between the x-axis of the element coordinate system and the projection of the selected reference axis of the material coordinate system is used to transform the stress and/or strain data into the material coordinate system at the element centers.

2. If, on the other hand, the user requests these data at the grid points to which the elements connect the program will interpolate the results from (a) to the grid points to which the elements connect.  The parameter NlNTPTS=N, the stress and/or strain data at the N closest element centers to the grid point in question will be used in the interpolation.  The program may include more that N points in the interpolation if the distance of other element centers is not more than 10% greater than the closest N element centers.

The following specifies the output headings for stresses and/or strains in the material coordinate system.

#### Element stresses (PARAM,S1M,1)

1. Available in CQUAD4 and CTRlA3 elements

2. Page headings:

     STRESSES IN QUADRILATERAL ELEMENTS (CQUAD4)

     STRESSES IN TRIANGULAR ELEMENTS (CTRlA3)

3. Under the column FIBER DISTANCE:

     Z1 is replaced by MCSID.

     Z2 is replaced by 1.0 if the x-axis of the material coordinate system is selected as the reference axis, and by 2.0 if the y-axis of the material coordinate system is selected as the reference axis.

#### Grid point stresses (PARAM,S1G,1 and PARAM,OG,1)

1. Available for CQUAD4 and CTRIA3 elements

2. Page heading:

     STRESSES AT GRID POINTS

3. Under the column are:

     ![parameters01641.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01641.jpg?_LANG=enus)  

     Z1 is replaced by MCSID.

     Z2=A+10*N where A is 1.0, 2.0, or 3.0, depending on whether the x-, y-, or z-axis of the material coordinate system is most nearly normal to the projected plane of the field of elements involved in the calculation.

#### Element strains (PARAM,S1AM,1)

1. Available for CQUAD4 and CTRlA3 elements

2. Page headings:

     STRAINS IN QUADRILATERAL ELEMENTS (CQUAD4)

     STRAINS IN TRIANGULAR ELEMENTS (CTRIA3)

3. Under the column FIBER DISTANCE:

     Z1 is replaced by MCSID.

     Z2 is replaced by 1.0 if the x-axis of the material coordinate system is selected as the reference axis, and by 2.0 if the y-axis of the material coordinate system is selected as the reference axis.

#### Grid point strains (PARAM,S1AG,1 and PARAM,OG,1)

1. Available for CQUAD4 and CTRIA3 elements.

2. Page heading:

     Z2=A+10*N where A is 1.0, 2.0, or 3.0, depending on whether the x-, y-, or z-axis of the material coordinate system is most nearly normal to the projected plane of the field of elements involved in the calculation.

     STRAINS AND CURVATURES AT GRID POINTS

3. Under the column are:

     ![parameters01643.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01643.jpg?_LANG=enus)  

     Z1 is replaced by MCSID.

