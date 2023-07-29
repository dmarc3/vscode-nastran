## [IMPGEOM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.IMPGEOM.xhtml) - Defines Geometric Imperfection

Defines geometric imperfection by selecting subcases, steps, mode numbers or increments from imperfection input files. Used in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
IMPGEOM IMPFID                  SETID   SCALE           UNIT    MODID   +       
+       SUBCASE1STEP1   MODEINC1SETID1  SCALE1          UNIT1   MODID1  +       
+       SUBCASE2STEP2   MODEINC2SETID2  SCALE2          UNIT2   MODIDi  +       
+       etc.                                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
IMPGEOM 1                                                                       
        1       3       1               0.011           34                      
        1       3       2               0.002           34                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPMFID    │ Identification number of imperfection case (integer >0, required)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETID     │ Default of SETIDi (integer ≥ 0, default=0)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE     │ Default of SCALEi (real, default=0.0)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNIT      │ Default of UNITi (integer ≥ 0, default=0)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODID     │ Default of MODIDi (integer≥ -1,default=-1), see remark 11.                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUBCASEi  │ Identification number of a subcase (integer ≥ 0, default=0)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STEPi     │ Identification number of a step (integer ≥ 0, default=0)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODEINCi  │ Mode number if the selected step by SUBCASEi and STEPi or subcase by SUBCASEi is a result of       │
│           │ buckling analysis or modal analysis, increment number if the selected result is from a static      │
│           │ analysis. (integer ≥ 0, default=0)                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETIDi    │ Identification number of a SET1 or SET3 bulk entry (integer ≥ 0, default = 0). When it is defined, │
│           │ only the grid points with the id listed in SET1 or SET3 have geometric imperfection effect. If a   │
│           │ SET3 is used, it must be GRID type.                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALEi    │ Scale factor (real, default = 0.0)                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNITi     │ Imperfection file unit number specified by ASSIGN HDF5IN, INPUTT2 or IMPFIN FMS command.           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODIDi    │ Module ID (integer ≥ -1,default=-1), see remark 11.                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All IMPGEOM identification numbers must be unique. An IMPGEOM entry is referenced by IMPERFECT case control directly or by an IMPCASE bulk entry.
2. Geometric imperfection effect is applied to grid points as coordinates variation, the variation is superposed by eigenvectors of multiple modes or displacement of increments defined in multiple continuation lines.
3. An imperfection input file can be an MSC Nastran HDF5 result file, a Nastran op2 file or a text based file called IMPF. To use it, an ASSIGN HDF5IN, INPUTT2 or IMPFIN FMS command is required.
4. The imperfection input file of HDF5 or op2 can be a result file of SOL 101, 103, 105 or a SOL 400 with ANALYSIS type of BUCK, MODES, STATIC, NLSTATIC or NLTRAN, and must contain eigenvectors or displacement results.
5. IMPF file format is described in remark   It can be DISP format or GEOM format. If an IMPF file is used in an IMPGEOM entry, only one continuation line of IMPGEOM is allowed, and SUBCASEi, STEPi and MODEINCi are ignored. If format is GEOM, SCALE and SCALEi are ignored too.
6. SUBCASEi must be specified if the imperfection input file is an op2 or hdf5 file.
7. STEPi is ignored when the imperfection input file is a result of SOL 101, 103 or 105. It must be specified for a SOL 400 result file.
8. MODEINCi is ignored when the file is a result of SOL 101 or a linear static step of SOL 400. It is required for other cases if the imperfection file is an hdf5 or op2 file.
9. UNITi must be specified if UNIT is 0 or not specified.
10. Geometric imperfection is applied to residual structure for superelement models. In the case of part superelement, it is advised to adjust boundary grid point searching tolerance due to geometry changing. This can be done by adding or modifying SEBULK or SECONCT entries.
11. MODID and MODIDi are only used when modules are present. -1 means the whole model, 0 or a positive number is a module identification number.
12. Format of IMPF file

     The IMPF file is a csv-like file, delimiters of a line can be spaces, a comma or a tab space. A line starting with a “$” or “#” is a comment line. If the first line is a comment line and contains string “GEOM” or “GRID”, then it is a GEOM file, i.e., the grid coordinates provided here will replace the grid coordinates in the FE model; otherwise it is a DISP file, i.e., the displacements provided in the file will be superimposed to the coordinates of the corresponding grids.

     For each line, the first column is grid point id, followed by x,y and z. For DISP format, x,y and z are coordinate variations from the original coordinates, and coordinate system is MSC Nastran global system, this means that x,y,z are in the coordinate system indicated by CD field of GRID entries in the original input file. For GEOM format, x,y and z are “imperfect” coordinates of the grid points, coordinate system is MSC Nastran input system, this means the values of x,y,z respect CP field of the GRID entries in the original input file.

     When modules are present, BEGIN MODULE=modid and ENDMODULE can be used to specify module id for a section of grids.

     Below is a DISP format of IMPF file.

     disp_1.impf

     ```text
     --------------------------------------------------------------------------------

         18 ,    0.000000000000E+00 ,   0.000000000000E+00 ,   0.000000000000E+00

         19 ,    0.000000000000E+00 ,   0.000000000000E+00 ,   0.000000000000E+00

         20 ,    1.882586315422E-04 ,  -1.382379038267E-03 ,  -5.111620104649E-05

         21 ,    3.080245224512E-04 ,  -1.360710847814E-03 ,  -5.111620104647E-05

         22 ,    4.254461607540E-04 ,  -1.328686826189E-03 ,  -5.111620104646E-05

         23 ,    5.396298968822E-04 ,  -1.286550695534E-03 ,  -5.111620104647E-05

         24 ,    6.497067236577E-04 ,  -1.234623137246E-03 ,  -5.111620104650E-05

         25 ,    7.548388899626E-04 ,  -1.173299351397E-03 ,  -5.111620104657E-05

         26      8.542262765314E-04    -1.103046049026E-03    -5.111620104668E-05

         27 ,    9.471124853400E-04 ,  -1.024397900185E-03    -5.111620104681E-05

         28      1.032790596252E-03    -9.379534647748E-04    -5.111620104691E-05

         29 ,    1.110608547111E-03 ,  -8.443706371464E-04 ,  -5.111620104698E-05

         30 ,    1.179974096322E-03 ,  -7.443616391243E-04 ,  -5.111620104702E-05

         31 ,    1.240359330172E-03 ,  -6.386875995705E-04 ,  -5.111620104705E-05
     ```

     Below is a GEOM format of IMPF file.

     geom_example.impf

     ```text
     --------------------------------------------------------------------------------

     # GEOM

           1,    0.000000000000E+00,    0.000000000000E+00,    0.000000000000E+00

           2,    1.000000014901E-01,    4.367130542590E-24,    1.464331138939E-08

           3,    2.000000029802E-01,    7.552163438029E-24,    3.787209513278E-08

           4,    2.999999821186E-01,    8.873575793200E-24,    5.096678857312E-08

           5,    3.999999463558E-01,    0.000000000000E+00,    0.000000000000E+00

           6,    4.999999701977E-01,    0.000000000000E+00,    0.000000000000E+00

           7,    5.999999642372E-01,    0.000000000000E+00,    0.000000000000E+00

           8,    6.999999880791E-01,    0.000000000000E+00,    0.000000000000E+00

           9,    7.999998927116E-01,    0.000000000000E+00,    0.000000000000E+00

          10,    8.999999165535E-01,    0.000000000000E+00,    0.000000000000E+00

          11,    9.999999403954E-01,    0.000000000000E+00,    0.000000000000E+00

          12,    1.099999904633E+00,    0.000000000000E+00,    0.000000000000E+00

          13,    1.199999928474E+00,    0.000000000000E+00,    0.000000000000E+00

          14,    1.299999952316E+00,    0.000000000000E+00,    0.000000000000E+00
     ```

     Impf file with modules, mod_example.impf

     ```text
     ---------------------------------------------------------------------------

     # below lines are in module 0

      1, 0.01, 0.0, 0.0

      2, -0.001, -1.e-3, 0.0

      ……

     # below are for module 10

     begin module=10

           1,     -1.0000000E-2, 0.0000000E+00, 0.0000000E+00

           2,        -7.0000000E-02, 0.0000000E+00, 0.0000000E+00

           3,        -1.3900000E-01, 0.0000000E+00, 0.0000000E+00

          ……

     endmodule

     # below are for module 20

     BEGIN MODULE 20

           1,        -1.0000000-3, 0.0000000E+00, 0.0000000E+00

           2,        -7.10E-02, 0.0000000E+00, 0.0000000E+00

           3,        -1.3900000E-01, 0.0000000E+00, 0.0000000E+00

     ENDMODULE

     ……
     ```
