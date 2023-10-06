## [TABLRPC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLRPC.xhtml) - Dynamic Load Tabular Function Referencing Channel Data File

Defines a tabular function for use in generating time-dependent loads from an externally defined channel data file.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLRPC TID     XAXIS   YAXIS   UID     TYPE    CHAN    TOTIM   PUNCH   +       
+       xi1     xj1     xi2     xj2     xi3     xj3     -etc.-  "ENDT"          
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLRPC 32                      33      RPC     5                       +       
UDNAME  33                                                              +       
+       C:\myrpcfile.rsp
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLRPC 32                      33      DAC                             +       
+       0.0     20.0    35.0    60.0    ENDT                                    
UDNAME  33                                                              +       
+       C:\myrpcfile.rsp
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLRPC 32                      -33             5                       +       
+       0.0     20.0    35.0    60.0    ENDT                                    
UDNAME  33                                                              +       
+       C:\myrpcfile.rsp
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number. (Integer > 0, no default)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XAXIS     │ Specifies a linear or logarithmic interpolation for the x-axis. (Character: “LINEAR” or “LOG”;     │
│           │ Default = “LINEAR”)                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YAXIS     │ Specifies a linear or logarithmic interpolation for the y-axis. (Character: “LINEAR” or “LOG”;     │
│           │ Default = “LINEAR”)                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UID       │ Identification number of a UDNAME entry to specify the external file that defines the x-y pair     │
│           │ values that define the actual tabular function. Required. (Integer != 0, no default)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Type of external file to specify via UID field. (Character: “RPC”, or “DAC”; Default = “RPC”)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CHAN      │ Channel number to read for Y (load) values from “RPC” files. Leave blank for “DAC” files. (Integer │
│           │ > 0, Default = 1)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOTIM     │ Total time of the signal defined in channel CHAN. Optional. (Real > 0., Default=Blank). See        │
│           │ remarks below.                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH     │ Specify whether equivalent TABLED1 entries containing the actual x-y pairs should be written to    │
│           │ the PUNCH file. (Character: “YES” or “NO”; Default= “NO”)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ xii/xji   │ x-y pair Filter mechanism. The given (xii,xji)  pairs reflect the start and end x-values for       │
│           │ inclusion from the external file; or if UID is negative, the given pairs reflect the start and end │
│           │ x-values to exclude from reading from the external file. See remarks below. Optional. (Real).      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ "ENDT"    │ Flag indicating the end of the table.                                                              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
