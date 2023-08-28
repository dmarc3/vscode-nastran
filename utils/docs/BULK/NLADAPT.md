## [NLADAPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLADAPT.xhtml) - Additional Parameters for Automatic Load or Time Stepping

Defines additional parameters for automatic load or time stepping used with enhanced nonlinear in SOL 400.   NLADAPT is an obsolete option from MD Nastran 2010 onwards. It is recommended that NLADAPT be replaced by NLSTEP .

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLADAPT ID                                                              +       
+       “STEP”  RSMALL  RBIG    TSMIN   TSMAX   NSMAX   NRECYC  SFACT   +       
+               IDAMP   DAMP                                            +

+       “CREEP” RAC     TCSTRN  TCSTRC  TCOFF                            

```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLADAPT 700                                                             +       
+       STEP                                                            +       
+               4                                                       +       
+       CREEP   1                                                               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLADAPT 800                                                             +       
+       CREEP   1                                                       +       
+       STEP                                                            +       
+               4                                                               
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ID        │ Identification number of a NLPARM or  entry.      │                                                   │
│           │ (Integer > 0)                                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “STEP”    │ Keyword indicating the following entries are for  │                                                   │
│           │ enhanced general load step or time step           │                                                   │
│           │ convergence. (Character)                          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RSMALL    │ Smallest scale factor for time step changes. See  │                                                   │
│           │ Remark 5. (Real; Default= 0.1)                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RBIG      │ Largest scale factor for time step changes. See   │                                                   │
│           │ Remark 5. (Real; Default = 1.5)                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TSMIN     │ Smallest ratio of a time step to the total time.  │                                                   │
│           │ (Real; Default = total time divided by number of  │                                                   │
│           │ time steps)                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TSMAX     │ Largest ratio of a time step to the total time.   │                                                   │
│           │ (Real; Default = 0.5)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NSMAX     │ Maximum number of steps allowed. (Integer;        │                                                   │
│           │ Default = 99999)                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NRECYC    │ Number of recycles per increment. (Integer;       │                                                   │
│           │ Default = 10)                                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SFACT     │ Scale factor for time step changes. See Remark 6. │                                                   │
│           │ (Real; Default = 1.2)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ IDAMP     │ Enter 4 to activate artificial damping. (Integer  │                                                   │
│           │ 0 or 4; Default = 0)                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DAMP      │ Damping factor for activated artificial damping.  │                                                   │
│           │ (Real; Default = 2.E-4)                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “CREEP”   │ Keyword indicating the following entries are for  │                                                   │
│           │ enhanced creep analysis. (Character)              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RAC       │ Flag controlling relative or absolute             │                                                   │
│           │ convergence. (Integer 0 or 1; Default = 0)        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 0                                                 │ Relative checking used.                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │ Absolute checking used.                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TCSTRN    │ Creep strain tolerance. (Real)                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ RAC = 0                                           │ Enter the tolerance on the creep strain increment │
│           │                                                   │ divided by the elastic strain. (Real; Default =   │
│           │                                                   │ 0.5)                                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ RAC = 1                                           │ The maximum creep strain increment allowed.       │
│           │                                                   │ (Real; Default = 0.1)                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TCSTRS    │ Creep stress tolerance (Real)                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ RAC = 0                                           │ Enter the tolerance on the stress increment       │
│           │                                                   │ divided by the total stress. (Real; Default =     │
│           │                                                   │ 0.1)                                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ RAC = 1                                           │ enter the maximum stress increment. (Real;        │
│           │                                                   │ Default = 100.0)                                  │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TCOFF     │ Tolerance on low stress point cutoff. Points with │                                                   │
│           │ a stress lower than this ratio relative to the    │                                                   │
│           │ maximum stress in the structure are not used in   │                                                   │
│           │ the creep tolerance checking. (Real; Default =    │                                                   │
│           │ 0.05)                                             │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry must point to an existing NLPARM or  entry and is only used in SOL 400.
2. The keywords and their associated entries may occur in any order.
3. This entry computes an initial time step TINIT=1.0/NINC if pointing to a NLPARM entry and TINT=1.0/DT if pointing to a  entry.
4. If this entry is used, it is preferred KMETHOD on the NLPARM or METHOD on the  be set to PFNT, FNT, ITER, or AUTO.
5. The scale factor is defined as the new step size divided by the time step size.
6. SFACT is only used when artificial damping is activated.
