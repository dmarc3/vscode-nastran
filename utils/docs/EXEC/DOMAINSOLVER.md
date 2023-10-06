## [DOMAINSOLVER](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.DOMAINSOLVER.xhtml) - Domain Decomposition Solution Method

Selects domain decomposition solution methods.

#### Format:

![executive00679.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00679.jpg?_LANG=enus)  

![executive00681.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00681.jpg?_LANG=enus)  

#### Examples:

```nastran
DOMAINSOLVER STAT (PARTOPT=DOF) 
DOMAINSOLVER ACMS (UPFACT=3.0,NUMDOM=128)
DOMAINSOLVER DSA
DOMAINSOLVER STAT, NLSOLV
DOMAINSOLVER ACMS (PARTMETH=BEND, NUMDOM=128)
DOMAINSOLVER ACMS (PARTMETH=METISO, TIPSIZE=500)
DOMAINSOLVER STAT (PARTMETH=MSCMLV)
DOMAINSOLVER ACMS (VERSION=NEW) - default
DOMAINSOLVER ACMS (VERSION=OLD)
DOMAINSOLVER ACMS (MODEL=STRUCT, UPFACT=5.0)
```

The keywords function as follows:

```text
┌────────┬──────────────────────────────────────────────┐
│ STAT   │ Linear statics.                              │
├────────┼──────────────────────────────────────────────┤
│ MODES  │ Normal modes.                                │
├────────┼──────────────────────────────────────────────┤
│ FREQ   │ Frequency response.                          │
├────────┼──────────────────────────────────────────────┤
│ ACMS   │ Automated component modal synthesis.         │
├────────┼──────────────────────────────────────────────┤
│ DSA    │ Design sensitivity analysis. (See Remark 2.) │
├────────┼──────────────────────────────────────────────┤
│ NLSOLV │ Nonlinear analysis                           │
└────────┴──────────────────────────────────────────────┘
```

The descriptions of the parameters are as follows:

```text
┌─────────┬───────────────────────────────────────────────────┬────────────────────────────────┐
│ PARTOPT │ Partitioning option.  Selects which domain is to  │                                │
│         │ be decomposed.                                    │                                │
├─────────┼───────────────────────────────────────────────────┼────────────────────────────────┤
│         │ DOF                                               │ Degree of freedom domain.      │
├─────────┼───────────────────────────────────────────────────┼────────────────────────────────┤
│         │ GRID                                              │ Grid point (geometric) domain. │
├─────────┼───────────────────────────────────────────────────┼────────────────────────────────┤
│         │ FREQ                                              │ Frequency domain.              │
├─────────┼───────────────────────────────────────────────────┼────────────────────────────────┤
│         │ ELEM                                              │ Finite element domain.         │
├─────────┼───────────────────────────────────────────────────┼────────────────────────────────┤
│         │ The default is dependent upon solution sequence.  │                                │
│         │ See Table 4-1 for further descriptions. Note that │                                │
│         │ ACMS (VERSION=NEW) requires PARTOPT=DOF. If it is │                                │
│         │ not set by the user, ACMS will use it             │                                │
│         │ automatically. However, if the user specifies a   │                                │
│         │ different value for PARTOPT, for example, ACMS    │                                │
│         │ (VERSION=NEW, PARTOPT=GRID), then MSC Nastran     │                                │
│         │ will execute old ACMS rather than new ACMS.       │                                │
├─────────┼───────────────────────────────────────────────────┼────────────────────────────────┤
│ NUMDOM  │ Selects the number of domains as follows: If      │                                │
│ (ACMS)  │ NUMDOM = 0 or 1, then the model will not be       │                                │
│         │ split. Default depends on the model size and the  │                                │
│         │ value of PARTOPT. NUMDOM will be ignored for ACMS │                                │
│         │ (VERSION=NEW); instead of the number of domains,  │                                │
│         │ new ACMS uses the size of the tip domains being   │                                │
│         │ specified via TIPSIZE (see below).                │                                │
└─────────┴───────────────────────────────────────────────────┴────────────────────────────────┘
```

     See link for table.

```text
┌──────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ COMPMETH │ Specifies the compression method used before      │                                                   │
│          │ domain decomposition. COMPMETH is considered only │                                                   │
│          │ for keywords STAT, MODES and ACMS with PARTOPT =  │                                                   │
│          │ DOF, for all other settings of the keyword and    │                                                   │
│          │ parameter PARTOPT, COMPMETH will be ignored. The  │                                                   │
│          │ following are valid options for COMPMETH:         │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ SUPER                                             │ Specifies the SUPER compression method. (Default) │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ GRID                                              │ Specifies the GRID compression method.            │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ NONE                                              │ Specifies that no compression should be done.     │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RUNOPT   │ Specifies the DMP run option. The following are   │                                                   │
│          │ valid options for RUNOPT:                         │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ PARCHILD                                          │ Specifies "parent-child" DMP execution mode.      │
│          │                                                   │  Only the Parent DMP process executes the full    │
│          │                                                   │ Nastran solution.  This is optimal for single-    │
│          │                                                   │ host DMP execution.                               │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ MULTIPAR                                          │ Specifies "multiple-parent" DMP execution mode.   │
│          │                                                   │  All DMP processes execute the full Nastran       │
│          │                                                   │ solution.  This is optimal for multiple-host DMP  │
│          │                                                   │ execution.                                        │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ Nastran detects single- and multiple-host DMP     │                                                   │
│          │ execution and sets the default run option         │                                                   │
│          │ accordingly.                                      │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PARTMETH │ Partitioning option (characher string). PARTMETH  │                                                   │
│          │ selects which method is used for domain           │                                                   │
│          │ decomposition.                                    │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ BEND                                              │ Specifies the Extreme/BEND partitioning method    │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ MSCMLV                                            │ Specifies the MSCMLV partitioning method          │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ METISG                                            │ Specifies the METIS partitioning method based on  │
│          │                                                   │ number of tip domains requested (see NUMDOM       │
│          │                                                   │ above)                                            │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ METISO                                            │ Specifies the METIS partitioning method based on  │
│          │                                                   │ the desired tip size (see TIPSIZE below).         │
│          │                                                   │ Available for ACMS only. Note: NUMDOM (see above) │
│          │                                                   │ will be ignored for PARTMETH=METISO. Note: ACMS   │
│          │                                                   │ (VERSION=NEW) requires PARTMETH=METISO. If this   │
│          │                                                   │ is not set by the user, ACMS will use it          │
│          │                                                   │ automatically. If the user sets a different value │
│          │                                                   │ for PARTMETH when ACMS (VERSION=NEW) is also      │
│          │                                                   │ specified, then the MSC Nastran will              │
│          │                                                   │ automatically re-set PARTMETH to METISO and run   │
│          │                                                   │ with new ACMS.                                    │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TIPSIZE  │ Specifies a desired number of nodes in the tip    │                                                   │
│          │ domains (integer). ACMS only. This is used only   │                                                   │
│          │ when PARTMETH=METISO; otherwise, it is ignored.   │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │ Default:                                          │ 1000 (ACMS Version=OLD);                          │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│          │                                                   │ 200 (ACMS Version=NEW)                            │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ VERSION  │ Selects new ACMS (MSC Nastran Version 2017 +) or  │                                                   │
│          │ old ACMS (prior to MSC Nastran Version 2017). The │                                                   │
│          │ default value of VERSION is ‘NEW’.                │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SCHED    │ For ACMS parallel scheduling with VERSION=NEW.    │                                                   │
│          │ Default is DYNAMIC, which is generally more       │                                                   │
│          │ efficient. Select STATIC for static parallel      │                                                   │
│          │ scheduling. See Remark 7.                         │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GRPSIZ   │ Specifies parallel group size for ACMS Dynamic    │                                                   │
│          │ scheduling. Integer:                              │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ 0        │ Default                                           │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ N        │ Set parallel group size to “N” SMP threads.       │                                                   │
├──────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ -1       │ Use single parallel group; number of threads in   │                                                   │
│          │ the group is NSMP (Number of SMP).                │                                                   │
└──────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

     See link for table.

The DOMAINSOLVER command is optional.  If “dmp=” is specified on the command without a DOMAINSOLVER command in the Executive Control Section, the actions shown in  Table 4-2  will result based on solution sequence.

     See link for table.

Note that DOMAINSOLVER ACMS is not the default for the relevant solution sequences, but it is the recommended option for larger models for SOL 103, 111, 112, and 200 to obtain the best performance.

#### Remarks:

1. Grid Point Weight Generator output selected by PARAM,GRDPNT or the WEIGHTCHECK Case Control command is not available when PARTOPT=GRID.
2. In SOL 200, design sensitivity calculations may be performed in a distributed parallel environment in SOL 200 with the DSA keyword. It is a coarse parallel implementation that divides the sensitivity task across a number of processors so that each processes a subset of the total number of design variables. Following the sensitivity analysis and before optimization, the separate sensitivity data are appended into a global sensitivity set. Also,
     - The dmp=n keyword must be specified on the Nastran submittal command where n is the number of available processors.
     - The ACMS keyword may also be specified or modified along with DSA. For example,

     ```nastran
     DOMAINSOLVER DSA, ACMS
     ```

3. In SOL 400, the STAT method is used for DMP parallelism of matrix factorization and the NLSOLV method is used for DMP parallelism of the NLEMG process. The NLSOLV method is intended for nonlinear analysis using advanced nonlinear methods. To only use the STAT method or to change its option to use, for example, a different compression method, specify the following DOMAINSOLVER command:

     ```nastran
     DOMAINSOLVER STAT(COMPMETH=GRID)
     ```

     Note that if STAT is changed as specified above, then the DMP parallelism for NLEMG will be turned off. If you want to change the STAT as described above and also keep NLSOLV for NLEMG parallelism, then use the following DOMAINSOLVER command:

     ```nastran
     DOMAINSOLVER NLSOLV,STAT(COMPMETH=GRID)
     ```

     Note that this can equivalently be written as follows:

     ```nastran
     DOMAINSOLVER NLSOLV
     DOMAINSOLVER STAT(COMPMETH=GRID)
     ```

     Lastly, to only use the NLSOLV method for NLEMG parallelism, specify the following option:

     ```nastran
     DOMAINSOLVER NLSOLV
     ```

4. In SOL 400, the DOMAINSOLVER NLSOLV (RUNOPT=MULTIPAR) is not supported in combination with Intel MKL Pardiso Solver option, i.e., SPARSESOLVER NLSOLV(FACTMETH=PRDLDL).
5. In SOL 111, the MODES or ACMS option is used for DMP parallelism of the modal calculations and the FREQ option is used for the DMP parallelism of the frequency response calculations. The DOMAINSOLVER FREQ is always turned on for SOL 111. To use the ACMS option for the modal calculation, use the following DOMAINSOLVER command:

     ```nastran
     DOMAINSOLVER ACMS
     ```

     Furthermore, if the MODES option needs to be changed for SOL 111, then the correct approach is to include the following DOMAINSOLVER option:

     ```nastran
     DOMAINSOLVER MODES(PARTOPT=GRID).
     ```

6. Residual vectors are not available when PARTOPT=GRID.
7. Dynamic parallel scheduling is available for ACMS and VERSION=NEW. Dynamic scheduling provides better parallel speedup for larger numbers of threads. For NSMP less than or equal to 2, static scheduling is used regardless of the setting of SCHED.
