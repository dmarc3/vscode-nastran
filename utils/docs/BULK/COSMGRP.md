## [COSMGRP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COSMGRP.xhtml) - Define the coupled area in Co-Simulation service

COSMGRP defines the coupled area where Nastran will exchange input and output data with co-simulation partner in Co-simulation analysis. It is supported in SOL 400 only.

#### Format 1: TYPE=SURFACE

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMGRP GRPID   TYPE                                                    +       
+       EID     FaceID  EID     FaceID  EID     FaceID  EID     FaceID  +       
+       EID     FaceID  ...                                                     
```

#### Examples 1: TYPE=SURFACE

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMGRP 202     SURFACE                                                 +       
+       1001    5       1002    4                                               
```

#### Format 2: TYPE=POINT

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMGRP GRPID   TYPE                                                    +        
+       GridID1 GridID2 ...                                             +        
+       GridIDi         ...                                                     
```

#### Examples 2: TYPE=POINT

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMGRP 202     POINT                                                   +        
+       2001    2002    31002   31003                                           
```

#### Format 3: TYPE=VOLUME

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMGRP GRPID   TYPE                                                    +       
+       EID1    EID2    EID3    ...                                     +       
+       EIDi    ...                                                             
```

#### Examples 3: TYPE=VOLUME

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COSMGRP 202     VOLUME                                                          
+       2       7       8       9       10      21      32      35      39      
+       40                                                                      
```

```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GRPID     │ Identification number of COSMGRP referenced by a │                                                   │
│           │ COSMSRV Bulk Data Entry. (Integer > 0)           │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TYPE      │ The definition type of coupled area (Character;  │                                                   │
│           │ Default is SURFACE)                              │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ SURFACE:                                         │ the couple area is defined by the element ID and  │
│           │                                                  │ its face ID                                       │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ POINT:                                           │ the coupled area is defined by a list of grid IDs │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ VOLUME:                                          │ the couple area is defined by the set of elements │
│           │                                                  │ with element IDs                                  │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EID       │ Element identification number                    │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FACEID    │ Face identification number of element. Refer to  │                                                   │
│           │ the remarks 6. and 7. for the element face       │                                                   │
│           │ identification of CHBDYE entry.                  │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GRIDID    │ Grid point identification numbers                │                                                   │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
