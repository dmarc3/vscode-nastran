## [PSPRMAT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSPRMAT.xhtml) - Spring and damper elements for translation and rotation - SOL 700

Defines linear and nonlinear spring element property for translation. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSPRMAT PID                                                             +       
+                                                                       +       
+       K       FAILMTF FAILMCF LOAD    UNLOAD                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSPRMAT 1                                                               +       
+                                                                       +       
+       20.0E3                                                                  
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property ID. PID is referenced on the CSPR entry. (Integer > 0; required.)                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K         │ Elastic stiffness (force/displacement). (Real > 0; See Remarks 1. and 2.)                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FAILMTF   │ Tensile failure force. See Remarks 1.and 2. (Real > 0; default=Not failure)                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FAILMCF   │ Compressive failure force. See Remarks 1. and 2. (Real > 0; default=Not failure)                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOAD      │ Number of a TABLED1 entry defining the variation of force (y-value) with displacement (x-value) │
│           │ during loading. (Integer > 0; See Remarks 1., 3. and 4.)                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNLOAD    │ Number of a TABLExx entry defining the variation of force (y-value) with displacement (x-value) │
│           │ during unloading. (Integer > 0; See Remarks 3. and 4.)                                          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one set of K, FAILMTF and FAILMCF or LOAD and UNLOAD is allowed. If K is defined, LOAD and ULOAD are not allowed. If LOAD is defined, K, FAILMTF and FAILMCF are not allowed.
2. For linear spring, K is required and FAILMTF and FAILMCF are optional.
3. For nonlinear spring, LOAD is required and UNLOAD is optional. If UNLOAD is not defined, unloading path is identical as LOAD.
4. Input for loading and unloading must be consistent. Both curves must be either completed defined or have only positive values (start from (0.,0.). When only positive values are defined, the curves are automatically mirrored.
