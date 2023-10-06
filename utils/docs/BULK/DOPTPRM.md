## [DOPTPRM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DOPTPRM.xhtml) - Design Optimization Parameters

Overrides default values of parameters used in design optimization.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DOPTPRM PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    PARAM4  VAL4    +       
+       PARAM5  VAL5    -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DOPTPRM IPRINT  5       DESMAX  10                                              
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ PARAMi    │ Name of the design optimization parameter. Allowable names are given in Table 9. (Character) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALi      │ Value of the parameter. (Real or Integer, see Table 9.)                                      │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Name        │ Description, Type, and Default Value                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ APRCOD      │ Approximation method to be used. (Integer 1, 2, or 3; Default = 2)                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Direct Linearization. APRCOD = 1 is recommended for shape, topology and topography optimization    │
│             │ problems.                                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2           │ Mixed Method based on response type                                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3           │ Convex Linearization                                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AUTOSE      │ Flag to request an AESO job. AUTOSE = 1 activates an AESO creation run. (Integer > 0; Default = 0) │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONV1       │ Relative criterion to detect convergence. If the relative change in objective between two          │
│             │ optimization cycles is less than CONV1, then optimization is terminated. Topology optimization can │
│             │ be terminated with CONV1<5.00E-3 (Real > 0.0; Default = 0.001).                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONV2       │ Absolute criterion to detect convergence. If the absolute change in objective between two          │
│             │ optimization cycles is less than CONV2, then optimization is terminated. (Real > 0.0;              │
│             │ Default = 1.0E-20)                                                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONVDV      │ Relative convergence criterion on design variables. (Real > 0.0; Default = 0.001 for non-topology; │
│             │ Default = 0.0001 for topology optimization)                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONVPR      │ Relative convergence criterion on properties. (Real > 0.0; Default = 0.001)                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CT          │ Constraint tolerance. Constraint is considered active if current value is greater than CT.         │
│             │ (Real < 0.0; Default = -0.03)                                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CTMIN       │ Constraint is considered violated if current value is greater than CTMIN. (Real > 0.0;             │
│             │ Default = 0.003)                                                                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DABOBJ      │ Maximum absolute change in objective between two consecutive iterations to indicate convergence at │
│             │ optimizer level. F0 is the initial objective function value. (Real > 0.0; Default =                │
│             │ MAX[0.001*ABS(F0), 0.0001])                                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELB        │ Relative finite difference move parameter. (Real > 0.0; Default = 0.0001; 0.001 for fatigue        │
│             │ responses)                                                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELOBJ      │ Maximum relative change in objective between two consecutive iterations to indicate convergence at │
│             │ optimizer level. (Real > 0.0; Default = 0.001)                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELP        │ Fractional change allowed in each property during any optimization design cycle. This provides     │
│             │ constraints on property moves. (Real, 0.0<DELP<1.0, default=0.2)                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELX        │ Fractional change allowed in each design variable during any optimization cycle.  (Real > 0.0;     │
│             │ Default = .5 for sizing/shape/topometry optimization; Default = 0.2 for topology and topography    │
│             │ optimization)                                                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELXESL     │ Fractional change allowed in each design variable during the ESLNRO loop. (Real > 0.0, Default =   │
│             │ 0.5)                                                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DESMAX      │ Maximum number of design cycles (not including FSD cycle) to be performed.  (Integer > 0;          │
│             │ Default = 5 for sizing/shape optimization; Default = 30 for topology, topography, and topometry    │
│             │ optimization                                                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DISCOD      │ Discrete Processing Method: (Integer 0, 1, 2, 3 or 4; Default = 1)                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0           │ No Discrete Optimization                                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Design of Experiments                                                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2           │ Conservative Discrete Design                                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3           │ Round up to the nearest design variable                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4           │ Round off to the nearest design variable                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DISBEG      │ Design cycle ID for discrete variable processing initiation. Discrete variable processing analysis │
│             │ is carried out for every design cycle after DISBEG. (Integer > 0; Default = 0=the last design      │
│             │ cycle)                                                                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPMAX       │ Maximum fraction of change on designed property (Default = 0.5), used by Trust Region Method.      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPMIN       │ Minimum move limit imposed. (Real > 0.0; Default = 0.01)                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DRATIO      │ Theshold value that can be used to turn off an active AESO job. An AESO job is terminated if the   │
│             │ ratio of the size of a design model to that of an analysis model is greater than DRATIO. (Real >   │
│             │ 0.; Default = 0.1)                                                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DSMXESL     │ Maximum number of design cycles applied to the ESLNRO loop. (Integer > 0; Default = 20)            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DXMAX       │ Maximum fraction of change on design variable (Default = 1.0), used by Trust Region Method.        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DXMIN       │ Minimum design variable move limit. (Real > 0.0; Default = 0.05 for sizing/shape/topometry         │
│             │ optimization; Default = 1.0E-5 for topology and topography optimization)                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ETA1 ()     │ the cutting ratio 1 (Default = 0.01), used by Trust Region Method.                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ETA2 ()     │ the cutting ratio 2 (Default = 0.25), used by Trust Region Method.                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ETA3 ()     │ the cutting ratio 3 (Default = 0.7), used by Trust Region Method.                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSDALP      │ Relaxation parameter applied in Fully Stressed Design. (Real, 0.0 < FSDALP < 1.0; Default = 0.9)   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSDMAX      │ Specifies the number of Fully Stressed Design Cycles that are to be performed. (Integer; Default = │
│             │ 0)                                                                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GMAX        │ Maximum constraint violation allowed at the converged optimum.   (Real > 0.0; Default = 0.005)     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GSCAL       │ Constraint normalization factor. See Remarks under the DSCREEN and DCONSTR entries. (Real > 0.0;   │
│             │ Default = 0.001)                                                                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IGMAX       │ If IGMAX = 0, only gradients of active and violated constraints are calculated.  If IGMAX > 0, up  │
│             │ to IGMAX gradients are calculated including active, violated, and near active constraints. For     │
│             │ many constraint problems, a reasonable value of IGMAX = 2*NDV (number of design variables). A      │
│             │ smaller IGMAX has a faster performance of MSCADS. (Integer > 0; Default = 0)                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IPRINT      │ Print control during approximate optimization phase. Increasing values represent increasing levels │
│             │ of optimizer information. (0 < Integer < 7; Default = 0)                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0           │ No output (Default)                                                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Internal optimization parameters, initial information, and results                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2           │ Same, plus objective function and design variables at each iterations                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3           │ Same, plus constraint values and identification of critical constraints                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4           │ Same, plus gradients                                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5           │ Same, plus search direction                                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 6           │ Same, plus scaling factors and miscellaneous search information                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 7           │ Same, plus one dimensional search information                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ISCAL       │ Design variables scaling. (Integer > -1; Default = 0) =-1 no scaling; > 0 scaling                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD      │ Optimization Method: (Integer > 0; Default = 0)                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0           │ Automatic selection for a better performance based on number of design variables, number of        │
│             │ constraints, number of active/violated constraints and computer memory.                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Modified Method of Feasible Directions for MSCADS.                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2           │ Sequential Linear Programming for MSCADS                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3           │ Sequential Quadratic Programming for MSCADS                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4           │ SUMT method for MSCADS                                                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IJK         │ See Remark 3.                                                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NASPR0      │ First cycle analysis output control. (Integer 0 or 1)                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0           │ Print analysis output of first cycle. (Default)                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Do NOT print analysis output of first cycle.                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OBJMOD      │ Objective function modification. (Integer; Default = 0)                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0           │ Objective function will not be modified.                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Objective function will be reset to 0.0. Subsequently, printed objective function value represents │
│             │ the change of objective function.                                                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OPTCOD      │ OPTCOD. See Remark 2. (Character; Default = Blank)                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Blank       │ Taken from system cell number 413                                                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “MSCADS”    │ MSCADS is used                                                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “IPOPT”     │ IPOPT is used                                                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “External   │                                                                                                    │
│ Optimizer   │                                                                                                    │
│ SCA Service │                                                                                                    │
│ Identifier” │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│             │ Must be defined in the CONNECT Service statement (see MSC Nastran User Defined Services User’s     │
│             │ Guide)                                                                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P1          │ Print control items specified for P2. (Integer > 0; Default = 0)  Initial results are always       │
│             │ printed prior to the first approximate optimization.  If an optimization task is performed, final  │
│             │ results are always printed for the final analysis unless PARAM,SOFTEXIT,YES is specified.  These   │
│             │ two sets of print are not controllable.                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n           │ Print at every n-th design cycle.                                                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2          │ Items to be printed according to P1: (Integer; Default = 1)                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0           │ No print.                                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Print objective and design variables.  (Default for sizing/shape optimization) Print objective.    │
│             │ (Default for topology optimization) P2 > 13 Print design variables for topology, topography, and   │
│             │ topometry optimization                                                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2           │ Print properties.                                                                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4           │ Print constraints.                                                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 8           │ Print responses.                                                                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 16          │ Print weight as a function of a material ID (note that this is not a design quantity so that only  │
│             │ inputs to the approximate design are available).                                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n           │ Sum of desired items. For example, P2 = 10 means print properties and responses.                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2CALL      │ Maximum number of retained constraints of all categories to be printed per category. This single   │
│             │ parameter can be used in place of the individual parameters P2CBL, P2CC, P2CDDV, P2CM, P2CP and    │
│             │ P2CR. If any of these six parameters are non-zero, the P2CALL value is overridden for that         │
│             │ constraint type. (Integer > 0; default is to print all retained constraints.)                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2CBL       │ Maximum number of constraints on beam library dimensions to be printed. (Integer > 0; default is   │
│             │ to print all beam library constraints.)                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2CC        │ Maximum number of constraints on connectivity properties to be printed. (Integer > 0; default is   │
│             │ to print all connectivity property constraints.)                                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2CDDV      │ Maximum number of constraints on dependent design variables to be printed. (Integer > 0; default   │
│             │ is to print all dependent design variable constraints.)                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2CM        │ Maximum number of constraints on material properties to be printed. (Integer > 0; default is to    │
│             │ print all material property constraints.)                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2CP        │ Maximum number of constraints on element properties to be printed. (Integer > 0; default is to     │
│             │ print all element property constraints.)                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2CR        │ Maximum number of constraints on design responses to be printed. (Integer > 0; default is to print │
│             │ all retained design response constraints.)                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P2RSET      │ ID of a SET1 Bulk Data entry to identify the set of retained responses (DRESP1, DRESP2 and/or      │
│             │ DRESP3) to be printed. (Integer; Default is to print all responses associated with printed         │
│             │ constraints. If P2CR is > 0, the set associated P2RSET > 0 will be printed independent of the      │
│             │ responses associated with the printed constraint. If P2CR > 0 and PR2SET = -1, all retained        │
│             │ responses will be printed.                                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PENAL       │ Penalty parameter used to transform an infeasible approximate optimization task to a feasible one. │
│             │ Setting this parameter to; e.g., 2.0 may improve optimizer performance when the starting design is │
│             │ infeasible. (Real; Default = 0.0)                                                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLVIOL      │ Flag for handling of property limit violation. By default, the job will terminate with a user      │
│             │ fatal message if the property derived from design model (DVPRELi, DVMRELi, DVCRELi) exceeds the    │
│             │ property limits. Setting PLVIOL to a non-zero number will cause the program to issue a user        │
│             │ warning message by ignoring the property limits violation and proceed with the analysis. (Integer; │
│             │ Default = 0)                                                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PTOL        │ Maximum tolerance on differences allowed between the property values on property entries and the   │
│             │ property values calculated from the design variable values on the DESVAR entry (through DVPRELi    │
│             │ relations). PTOL is provided to trap ill-posed design models. (The minimum tolerance may be        │
│             │ specified on user parameter DPEPS. See Parameters) (Real > 0.0; Default = 1.0E+35)                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STPSCL      │ Scaling factor for shape finite difference step sizes, to be applied to all shape design           │
│             │ variables.  (Real > 0.0; Default = 1.0)                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TCHECK      │ Topology Checkerboarding/minimum member size control option. (Integer > -1)                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Filtering algorithm                                                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2           │ Density constraint                                                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0           │ No control                                                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ -1          │ Automatic selection of filtering or density constraint algorithm for a better performance.         │
│             │ (Default)                                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TDMIN       │ Minimum diameter of members in topology optimization. This option is applied on 2 and 3D elements  │
│             │ only. (Real > 0.0)                                                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREGION     │ Flag to invoke Trust Region method.                                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0           │ Don’t employ trust regions (Default)                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Turn Trust Region on                                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UPDFAC1     │ Updating factor 1 (Default = 2.0), used by Trust Region Method.                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UPDFAC2     │ Updating factor 2 (Default = 0.5), used by Trust Region Method.                                    │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one DOPTPRM entry is allowed in the Bulk Data Section. All defaults recommended.
2. OPTCOD specifies which optimization code to be used in SOL 200 and METHOD specifies which optimization method to be used. The default is recommended.
3. METHOD = IJK enables a user selectable optimization strategy as documented in Vanderplaats, G. N., ADS -- A Fortran Program for Automated Design Synthesis -- Version 1.10, NASA CR 177985, 1985. The default is recommended.

The I selects one of ten available strategy options:

```text
┌───┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 0 │ None -- Go directly to the optimizer                                                             │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1 │ Sequential unconstrained minimization using the exterior penalty function method                 │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2 │ Sequential unconstrained minimization using the linear extended interior penalty function method │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3 │ Sequential unconstrained minimization using the quadratic extended interior penalty function     │
│   │ method                                                                                           │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4 │ Sequential unconstrained minimization using the cubic extended interior penalty function method  │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5 │ Augmented Lagrange multiplier method                                                             │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 6 │ Sequential linear programming                                                                    │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 7 │ Method of centers                                                                                │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 8 │ Sequential quadratic programming                                                                 │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 9 │ Sequential convex programming                                                                    │
└───┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

The J selects one of five available optimizer options:

```text
┌───┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ 1 │ Fletcher-Reeves algorithm for unconstrained minimization                                      │
├───┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2 │ Davidon-Fletcher-Powell (DFP) variable metric method for unconstrained minimization           │
├───┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3 │ Broydon-Fletcher-Goldfarb-Shanno (BFGS) variable metric method for unconstrained minimization │
├───┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4 │ Method of feasible directions for constrained minimization                                    │
├───┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5 │ Modified method of feasible directions for constrained minimization                           │
└───┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

And K selects one of eight available one-dimensional search strategies:

```text
┌───┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 1 │ Find the minimum of an unconstrained function using the Golden Section method                      │
├───┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2 │ Find the minimum of an unconstrained function using the Golden Section method followed by          │
│   │ polynomial interpolation                                                                           │
├───┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3 │ Find the minimum of an unconstrained function by first finding bounds and then using the Golden    │
│   │ Section method followed by polynomial interpolation                                                │
├───┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4 │ Find the minimum of an unconstrained function by polynomial interpolation/extrapolation without    │
│   │ first finding bounds on the solution                                                               │
├───┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5 │ Find the minimum of a constrained function using the Golden Section method                         │
├───┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 6 │ Find the minimum of a constrained function using the Golden Section method followed by polynomial  │
│   │ interpolation                                                                                      │
├───┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 7 │ Find the minimum of a constrained function by first finding bounds and then using polynomial       │
│   │ interpolation                                                                                      │
├───┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 8 │ Find the minimum of a constrained function by polynomial interpolation/extrapolation without first │
│   │ finding bounds on the solution                                                                     │
└───┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
