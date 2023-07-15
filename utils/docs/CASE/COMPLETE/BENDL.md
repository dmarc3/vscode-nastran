## [BENDL (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BENDL.Case.xhtml) - BAR/BEAM end load Subcase Selection

Function to calculate bar end loads and shear flow.

#### Format:

![casecontrol4a00832.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00832.jpg?_LANG=enus)  

#### Examples:

To output a table of bar end loads/shear flows.

```nastran
BENDL = ALL
```

To output a table of bar end loads/shear flows and print table to F06.

```nastran
BENDL (PRINT=YES) = ALL
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ PRINT        │ Prints bar end loads and panel shear flow to the F06 file.                                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│          YES │ BAR/BEAM end loads and associated CSHEAR, CQUAD4 and CTRIA3 panel shear flows will be printed.    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│           NO │ BAR/BEAM end loads and associated CSHEAR, CQUAD4 and CTRIA3 panel shear flows will not be         │
│              │ printed. (Default)                                                                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Select all bar/beam/rod type elements associated with “Shell” panels.                             │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│            n │ Identification of a previously defined SET listing “Flange/Boom” elements.                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Turn off BENDL in selected subcases.                                                              │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A BENDL Case Control Command is to appear in any subcase for which Bar End Loads and Panel shear flows are required. This entry is only applicable in SOL101 or ANALYSIS=STATIC.
2. The presence of BENDL in a linear statics run will automatically turn on GPFORCE=ALL as well as PARAM, NOELOF, 1.
3. Only CSHEAR, CQUAD4, CTRIA3, CQUADR, and CTRIAR panels will contribute to shear flow and bar end load calculations.
4. Include MDLPRM HDF5 to output OUTSFLOW data block to the HDF5 output file.
5. The following figure shows a typical bar end load and shear flow panel.

![bendl_1.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/bendl_1.png?_LANG=enus)

6. Print and table FORMAT is:

```text
      B A R   E N D   L O A D S   A P P R O X I M A T I O N S   ( C B A R )

           ELEMENT         TOTAL END LOADS

            ID.         END 1         END 2

             6    -1.994413E+03 -1.136868E-13

            11     2.082592E+03  3.638604E-01

            16    -4.721992E+02 -7.329887E+01

            21     4.984904E+02 -4.987337E+02

      B A R   E N D   L O A D S   S H E A R   F L O W   A P P R O X I M A T I O N S ( C       Q U A D 4 )

             ELEMENT ID.       SHEAR 12      SHEAR 23       SHEAR 34      SHEAR 41

                       1     9.972063E+01 -2.493060E+02  -9.972063E+01  3.989003E+01
``````
