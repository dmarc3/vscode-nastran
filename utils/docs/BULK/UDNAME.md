## [UDNAME](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.UDNAME.xhtml) - User Defined File Name

Provides the name of a file that can be referenced from other bulk data entries such as FTGLOAD, TABLRPC, and MATDIGI.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UDNAME  UDID                                                            +       
+       NAME                                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UDNAME  10                                                              +       
+       myfile.dat
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ UDID      │ Unique UDID (Integer>0). See Remark 1.                                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Name of a file (with or without path) such as the external loading time history in DAC or RPC │
│           │ format or DIGIMAT material file (Character).                                                  │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
