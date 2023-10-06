## [TIME](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.TIME.xhtml) - Sets Maximum CPU and I/O Time

Sets the maximum CPU and I/O time.

#### Format:

```nastran
TIME[=]t1[,t2]
```

#### Examples:

1. The following example designates a runtime of 8 hours:

     ```nastran
     TIME 480
     ```

2. The following example designates 90 seconds:

     ```nastran
     TIME 1.5
     ```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ t 1       │ Maximum allowable execution time in CPU minutes (Real or Integer > 0; Default = 1.89E9 seconds).   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ t 2       │ Maximum allowable I/O limit in minutes (Real or Integer > 0; Default is infinity, which is machine │
│           │ dependent).                                                                                        │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The TIME statement is optional.
2. If t2 is specified then t1 must be specified.
