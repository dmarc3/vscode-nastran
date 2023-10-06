## [UDSESV](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.UDSESV.xhtml) - Define the number and names of user state variables for material user subroutines (SOL 400 only)

Define the number and names of the user state variables. Each state variable has default nominal name if a user name is not given. This is a global entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UDSESV          NSTATS                                                  +       
+       SV2     SV2_NAMESV3     SV3_NAMESV4     SV4_NAMESV5     SV5_NAME+       
+       SV6     SV6_NAME.ETC                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UDSESV          3                                                       +       
+       SV2     VAR2    SV3     VAR3                                            
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSTATS    │ The number of user defined state variables. (Integer >= 1)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SVi       │ The default nominal name of state variable (CHARACTER, i >= 1, where i is the index number of the │
│           │ state variable)                                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SVi_NAME  │ The state variable name defined by user (CHARACTER, Default = SVi, where i is the index number of │
│           │ the state variable)                                                                               │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
