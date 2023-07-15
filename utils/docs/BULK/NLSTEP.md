## [NLSTEP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLSTEP.xhtml) - Describes the Control Parameters for Mechanical, Thermal and Coupled Analysis in SOL 400 and for Contact Analysis in SOL 101.

Specifies the convergence criteria, step size control and numerical procedure for time/load stepping in SOL 400. For multi-physics, it controls both structural and thermal analysis. Defines analysis preference and control parameters for contact analysis in SOL 101.

There are three groups of data that can be entered through this option:

1. General data which defined parameters that may be used for a variety of simulations. This data is provided by the GENERAL keyword.

2. Selecting the type of procedure used to control the time/load stepping procedure. These procedures are activated by the keywords: LCNT, FIXED, ADAPT, or ARCLN (arc length or continuation method). Only one of the keywords may be chosen in a loadcase.

3. Data associated with the physics type that are activated by the keywords: MECH, HEAT, COUP, and RCHEAT. One can enter as many as necessary.

The NLSTEP is selected by the Case Control Command NLSTEP=ID.

#### Format: (For SOL 400)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLSTEP  ID      TOTTIME CTRLDEF                                                 
        “GENE...MAXITER MINITER MAXBIS  CREEP                                   
        “FIXED” NINC    NO                                                      
        “ADAPT” DTINITF DTMINF  DTMAXF  NDESIR  SFACT   INTOUT  NSMAX           
                IDAMP   DAMP    CRITTID IPHYS   LIMTAR  RSMALL  RBIG            
                ADJUST  MSTEP   RB      UTOL                                    
        “ARCLN” TYPE    DTINITFAMINALR  MAXALR          NDESIRA NSMAXA          
        “HEAT”  CONVH   EPSUH   EPSPH   EPSWH   KMETHODHKSTEPH                  
                MAXQNH  MAXLSH  LSTOLH                                          
        “MECH”  CONV    EPSU    EPSP    EPSW    KMETHOD KSTEP   MRCONV          
                MAXQN   MAXLS   LSTOL   FSTRESS                                 
        “COUP”  HGENPLASHGENFRIC                                                
```
#### Format: (For SOL 101)<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLSTEP  ID              CTRLDEF                                                 
        "LCNT"  NINCC   CONVC   EPSUC   EPSPC   EPSWC   MAXDIVC MAXBIS          
                MAXITERCMINITERC                                                
```
#### <span></span>

#### Example: (Fixed stepping, 30 increments, total time 4.3, max 5 bisections)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLSTEP  10      4.3                                                             
        GENERAL                 5                                               
        FIXED   30                                                              
        MECH    PV              0.01                                            
```
#### Example: (Automatic stepping, total time 4.3. Start out with 2%)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLSTEP  20      4.3                                                             
        GENERAL                 5                                               
        ADAPT   0.02    1.-5            5               20                      
```
#### Example: (Using SEVERELY default setting with automatic time stepping)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLSTEP  10      4.3     SEVERELY                                                
        ADAPT                                                                   
```
#### Example: (Select the default control parameters for accuracy preference in SOL 101)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLSTEP  10              LCACCU                                                  
```
#### Example: (Four increments, P convergence criterion with error tolerance 1.e-4. The other parameters are defaults for performance preference in SOL 101)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLSTEP  10              LCPERF                                                  
        LCNT    4       P               1.e-4                                   
```
ID

Identification number. (Integer > 0)

TOTTIM

Total time for the load case. (Real; Default = 1.0)

CTRLDEF

This Keyword is applicable in SOL101 static contact analysis or in SOL400 nonlinear static  and transient analysis.

For SOL400,  the values "QLINEAR", "MILDLY", and "SEVERELY"  are available along with the option of leaving blank. See Remark 10. for detail description of these three keyword options and the  blank option.

For SOL101, the values "LCPERF" or "LCACCU" are available along with the option of leaving blank. See Remark 11. for detail description of these two keyword options. If left blank the values as described under the "LCNT" keyword entry will be used.

If SOL400 keyword values are present in a SOL101 static contact analysis run or SOL101 keyword values are present in a SOL400 nonlinear static  run, the keywords are ignored.

In SOL400 nonlinear transient analysis, the use of keywords "QLINEAR", "MILDLY", and "SEVERELY"  or blank cannot properly set a "FIXED" NINC value or an  "ADAPT" DTINITF value so the user still must set whichever one of these keyword entries value is relevant for a transient run.

“GENERAL”

Keyword for parameters used for overall analysis.

MAXITER

Maximum number of iterations allowed for each increment. See Remark 6. (Integer; Default = 10)

MINITER

Minimum number of iterations needed for each increment. (Integer >0; Default = 1) In contact analysis or CTRLDEF = SEVERELY, Default = 2). When high accuracy is required, it is also recommended to set MINITER = 2.

MAXBIS

Maximum number of bisections allowed in the current step. (Default = 10). See remark 13. for more information.

CREEP

This flag allows the activation of creep for a particular step. Note: the permanent creep flag specified through the NLMOPTS, CREEP option should also be flagged for the activation. If set to 1, creep will be used; if set to 0, creep will not be used (even if creep data has been defined for a material using MATVP). (Integer 0 or 1; Default = 0). Adaptive load stepping based upon creep can be flagged using CRITTID below. For enhanced nonlinear elements only.

“FIXED”

Keyword to indicate that fixed time stepping is to be used. See Remark 1.

NINC

Number of increments for fixed time stepping. (Integer > 0; Default = 50). The time step of each increment will be TOTTIME/NINC.

NO

Interval for output. Every NO-th increment will be saved for output. (Integer > 0; Default = 1).

“ADAPT”

Keyword to indicate that the adaptive load stepping procedure should be used. See Remark 1.

DTINITF

Initial time step defined as fraction of total load step time (TOTTIM). (Real; Default 0.01). If DTINITF>=DTMAXF then, DTINITF is reset to DTMAXF.

If CTRLDEF is set to QLNEAR, the user should set DTINITF equal to TOTTIM.

DTMINF

Minimum time step defined as fraction of total load step time (TOTTIM). (Real; Default 1e-5).

DTMAXF

Maximum time step defined as fraction of total load step time (TOTTIM). (Real; Default 0.5). For most nonlinear problems, this should be between 0.05 and 0.2 for dynamic simulations.

NDESIR

Desired number of iterations per increment. See Remark 2. (Integer; Default = 4)

SFACT

Factor for increasing time steps due to number of iterations. See Remark 4. (Real; Default = 1.2).

INTOUT

Output flag. Integer > -1. (Default = 0)

-1

Only the last increment of the step will be output.

0

Every computed load increment will be output.

> 0

The output will be obtained at INTOUT equally spaced intervals. The time step will be temporarily adjusted if necessary in order to reach these points in time.

NSMAX

Maximum number of increments in the current load case. (Integer; Default = 99999). The job will stop if this limit is reached.

IDAMP

Flag for activating artificial damping for static analysis.  (Integer, Default = 0). See Remarks 24.

0

No damping considered

4

Artificial damping is always turned on

5

Artificial damping is not turned on. But time step is adjusted based on damping energy as 4

6

When the time step reaches the minimum value and artificial damping is turned on

DAMP

Damping ratio. (Real; Default = 2.e-4).

CRITTID

ID of Bulk Data TABSCTL entry which defines the user criteria to use. See Remark 5. (Integer; Default 0)

IPHYS

Flag to determine if automatic physical criteria should be added and how analysis should proceed if a user criterion is not satisfied. (Integer; Default = 2) It is recommended to use 1.

2

Do not add automatic physical criteria; stop when any user criterion is not satisfied

-2

Do not add automatic physical criteria; continue when user criteria are not satisfied

1

Add automatic physical criteria; stop when any user criterion is not satisfied

-1

Add automatic physical criteria; continue when any user criterion is not satisfied

LIMTAR

Enter 0 to treat user criteria as limits, 1 to treat user criteria as targets. (Integer; Default = 0). Only used if a user criterion is given through CRITTID. See Remark 5.

RSMALL

Smallest ratio between time step changes due to user criteria. (Real; Default = 0.1)

RBIG

Largest ratio between time step changes due to user criteria. (Real; Default = 10.0)

ADJUST

Time step skip factor for automatic time step adjustment. Only for dynamics. See Remark 12. (Integer; Default = 0).

MSTEP

 Number of steps to obtain the dominant period response. See Remark 12. (10 < Integer < 200 or = -1; Default = 10).

RB

Define bounds for maintaining the same time step for the stepping function during the adaptive process. See Remark 12. (0.1 < Real <1.0; Default = 0.6).

UTOL

Defines tolerance on displacement. (.0001 < Real < 1.0; Default = 1.0)

“LCNT”

Keyword to indicate that the contact analysis in SOL101 should be used. See Remark 11.

NINCC

Number of increments. (Integer > 0; Default = 10 for CTRLDEF=""; Default=1 for CTRLDEF="LCPERF" or "LCACCU")

CONVC

Flags to select convergence criteria. (Character="U", "P", "W", "V", or any combination; Default = "PV" for CTRLDEF = "" or "LCPERF"; Default = "UPV" for CTRLDEF= "LCACCU"). See Remark 15.

EPSUC

Error tolerance for displacement (U) criterion. (Real > 0.0; Default = 1.0E-3 for CTRLDEF = "LCPERF"; Default = 1.0E-2 for CTRLDEF= "" or "LCACCU")

EPSPC

Error tolerance for load (P) criterion. (Real > 0.0; Default = 1.0E-3 for CTRLDEF = "LCPERF"; Default = 1.0E-2 for CTRLDEF= "" or "LCACCU")

EPSWC

Error tolerance for work (W) criterion. (Real > 0.0; Default = 1.0E-7 for CTRLDEF = "LCPERF"; Default = 1.0E-2 for CTRLDEF= "" or "LCACCU")

MAXDIVC

Limit on probable divergence conditions per iteration before the solution is assumed to diverge. (Integer¹ 0; Default = 3 for CTRLDEF = "" or "LCPERF"; Default = 5 for CTRLDEF= "LCACCU").

MAXBISC

Maximum number of bisections allowed for each load increment. (-10 £ Integer £10; Default = 5)

MAXITERC

Limit on number of iterations for each load increment. (Integer ³ 0, Default = 25)

MINITERC

Minimum number of iterations of a load increment. (Integer > 0; Default = 1. In contact analysis, Default = 2).

“ARCLN”

Keyword to indicate that an arc length load stepping procedure is to be used. It does not support general contact in SOL 400. See Remark 1.

TYPE

Constraint type. (Character: “CRIS”, “RIKS”, or “MRIKS”; Default = “CRIS”) See Remark 7.

DTINITFA

Initial time step defined as a fraction of the load step time (TOTTIME) for the arc-length procedure. (Real; Default .01)

MINALR

Minimum allowable arc-length adjustment ratio between increments for the adaptive arc-length method. See Remarks 8. and 9. (0.0 < Real < 1.0; Default = 0.25)

MAXALR

Maximum allowable arc-length adjustment ratio between increments for the adaptive arc-length method. See Remarks 8. and 9. (Real > 1.0; Default = 4.0)

NDESIRA

Desired number of iterations for convergence to be used for the adaptive arc-length adjustment. (Integer > 0; Default = 4) See Remarks 8. and 9.

NSMAXA

Maximum number of increments in the current load case. (Integer; Default = 1000). The job will stop if this limit is reached

“HEAT”

Keyword for parameters for heat transfer analysis.

CONVH

Flags to select convergence criteria. (Character = “U”, “P”, “W”, “V”, “N, “A” or any combination. (Default UPW)

EPSUH

Error tolerance for temperature (U) criterion. (Real; Default =1.0E-2)

EPSPH

Error tolerance for heat flux (P) criterion. (Real; Default =1.0E-2)

EPSWH

Error tolerance for work (W) criterion. (Real; Default =1.0E-2)

KMETHODH

Method for controlling stiffness updates. (Character = “PFNT”, “AUTO” or “ITER”). Default = “AUTO”. See Remark 18.

KSTEPH

Number of iterations before the stiffness update for the ITER method. (Integer; Default = 1).

MAXQNH

Maximum number of quasi-Newton correction vectors to be saved on database. (Integer; Default = MAXITER). Not used for PFNT.

MAXLSH

Maximum number of line searches allowed for each iteration. (Integer; Default = 4). Not used for PFNT.

LSTOLH

Line Search tolerance. (0.01 < Real < 0.9; Default = 0.5)

“MECH”

Keyword for parameters for mechanical analysis

CONV

Flags to select convergence criteria. (Character = “U”, “P”, “W”,”V”,”N,”A” or any combination; Default = PV). See Remark 15.

EPSU

Error tolerance for displacement (U) criterion. (Real; Default = -0.1)

EPSP

Error tolerance for residual load (P) criterion. (Real; Default = 0.1)

EPSW

Error tolerance for work (W) criterion. (Real; Default = 0.1)

KMETHOD

Method for controlling stiffness updates. (Character = “PFNT or “ITER”; Default = “PFNT”). See Remark 18.

KSTEP

Number of iterations before the stiffness update for the ITER method. (Integer; Default = 10).

MRCONV

Flag to specify if rotations and moments should be included in the convergence testing when CONV is set to UV, UN, PV, PN, UPV or UPN: (Integer; Default = 3)

0

check on forces, moments, displacements and rotations

1

check on forces, moments and displacements

2

check on forces, displacements and rotations

3

check on forces and displacements

If there is no V and N in the CONV, MRCONV is ignored and all translational and rotational quantities are used to compute the convergence criteria.

MAXQN

Maximum number of quasi-Newton correction vectors to be saved on the database. (Integer; Default = MAXITER). Not used for PFNT.

MAXLS

Maximum number of line searches allowed for each iteration. (Integer; Default = 4). Not used for PFNT.

LSTOL

Line Search tolerance. (0.01 < Real < 0.9; Default = 0.5). Not used for PFNT.

FSTRESS

Fraction of effective stress used to limit the sub increment size in material routines (0.0 < Real < 1.0; Default = 0.2) For non material enhanced elements only.

“COUP”

Keyword for parameters for coupled analysis.

HGENPLAS

Conversion factor for heat generated due to plasticity. (Real; Default = 0.0)

HGENFRIC

Conversion factor for heat generated due to friction. (Real; Default = 0.0)

--------------------

#### Remarks:

1. Note that the following applies:

a. Only one of LCNT, FIXED, ADAPT, ARCLN, or RCHEAT time/load stepping scheme can be used on a specific NLSTEP entry.
Note that only LCNT may be used in SOL 101. If other selection of load stepping scheme is used, it will be ignored, and the default value of LCNT will be applied

b. FIXED or ADAPT may be used for a single physics STEP or for a coupled physics STEP/SUBSTEP.

c. If no LCNT, FIXED, ADAPT, or ARCLN appear on a NLSTEP entry, then the default is FIXED with 50 increments.

d. The ARCLN method is supported in permanent glue contact analysis.

e. The ARCLN method is not supported in general contact analysis.

f. The ARCLN method should not be used with SPCD or SPCR.

g. The ARCLN method should not be used in transient dynamic analysis.

h. The ARCLN method should not be used in conjunction with HEAT or COUP.

i. The ARCLN method cannot be used with the Intel MKL PARDISO solver.

j. In one simulation, one cannot use both HEAT and RCHEAT

k. One cannot use both COUP and RCHEAT

l. The LCNT keyword can only be used in a SOL 101 static analysis.

2. The desired number of recycles (NDESIR) can be used in static mechanical, dynamic mechanical (see Remark 16) and heat transfer.

3. In coupled analysis, the time step change is calculated separately for heat and mechanical and the smallest of the two is used.

4. When the time step is increased due to desired number of recycles, the previous time step is multiplied with SFACT. When the time step is decreased the factor is calculated internally based upon the minimum time step.

5. User criteria can be given in the TABSCTL entry via CRITTID. These criteria include rotation, displacements, stresses, strains, creep strains. The time step is decreased if the current value of the value is larger than the user specified limit. If LIMTAR is equal to 1 (“target”) it also increases the time step for the next increment if the current value is smaller than the target value given.

     User criteria are generally useful for explicit creep analysis with adaptive time

     stepping. The two recommended criteria in this case would be:

     (i)     Normalized creep strain increment < 0.5

     (ii)     Normalized stress change increment < 0.1

6. If MAXITER is given a negative value and the MAXITER number of iterations are obtained, convergence is assumed and the analysis will continue with the next increment.

7. The “ARCLN” entry is applicable to “MECH” analysis only and is ignored for creep analysis. The   available constraint types are as follows.

     TYPE = “CRIS”:

     ![bulkno06170.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06170.jpg?_LANG=enus)  

     TYPE = “RIKS”:

     ![bulkno06172.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06172.jpg?_LANG=enus)  

     TYPE = “MRIKS”:

     ![bulkno06174.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06174.jpg?_LANG=enus)  

     where:

       w = user specified scaling factor (SCALEA)

         ![bulkno06176.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06176.jpg?_LANG=enus)  = load factor

       l = the arc-length

     The constraint equation has a disparity in the dimension by mixing the displacements with the load factor. The scaling factor  ![bulkno06178.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06178.jpg?_LANG=enus)  is introduced as user input so that the user can make constraint equation unit-dependent by a proper scaling of the load factor (). As the value of is increased, the constraint equation is gradually dominated by the load term. In the limiting case of infinite, the arc-length method is degenerated to the conventional Newton’s method

8. The MINALR and MAXALR fields are used to limit the adjustment of the arc-length from one increment to the next by:

     MINALR  <   ![bulkno06180.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06180.jpg?_LANG=enus)   <  MAXALR

     The arc-length adjustment is based on the convergence rate (i.e., number of iterations required for convergence) and the change in stiffness. For constant arc-length during analysis, use:

     MINALR = MAXALR = 1

9. The arc-length l for the variable arc-length strategy is adjusted based on the number of iterations that were required for convergence in the previous increment (I ) and the number of iterations desired for convergence in the current increment (NDESIRA) as follows:

     ![bulkno06182.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06182.jpg?_LANG=enus) (NDESIRA/ ![bulkno06184.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06184.jpg?_LANG=enus) ) ![bulkno06186.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06186.jpg?_LANG=enus)

10. In SOL 400, CTRLDEF entry is only valid for "MECH", "HEAT" and "COUP".  The description and default of each option is listed below.

```text
┌─────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ CTRLDEF │ Keyword to select the default setting of the control parameters. (Character = "QLINEAR", "MILDLY", │
│         │ "SEVERELY". No default. Stress analysis (NLSTAT, NLTRAN): QLINEAR   : FIXED = 1 inc,  ADAPT :      │
│         │ initial time ratio = 1.0 (maximum time ratio = 1.0) MILDLY    : FIXED = 10 inc,  ADAPT : initial   │
│         │ time ratio = 0.1 SEVERELY    : FIXED = 50 inc,  ADAPT : initial time ratio = 0.01 Blank    : FIXED │
│         │ = 50 inc,  ADAPT : initial time ratio = 0.01    CONV       EPSU*       EPSP         EPSW           │
│         │      KMETHOD     QLINEAR    PV    0.001    0.001    ---    PFNT MILDLY    PV    0.01    0.01       │
│         │    ---    PFNT SEVERELY    PV    0.1    0.01    ---    PFNT Blank    PV    0.1    0.1    ---       │
│         │    PFNT [Note] EPSU* is a suggestion when user wants to set CONV=UPV Thermal analysis (HSTAT,      │
│         │ HTRAN) : QLINEAR   : FIXED =   1 MILDLY    : FIXED = 10 SEVERELY    : FIXED = 50 Blank:            │
│         │                  : FIXED = 50    CONVH        EPSUH      EPSPH      EPSWH       KMETHOD            │
│         │ QLINEAR    UPW    0.001    0.001    0.001    AUTO MILDLY    UPW    0.01    0.01    0.01    AUTO    │
│         │ SEVERELY    UP    0.01    0.01    ---    AUTO Blank    UPW    0.01    0.01    0.01    AUTO For     │
│         │ stress analysis, both (1) CTRLDEF and (2) "FIXED" or "ADAPT" have to be set. For heat analysis,    │
│         │ both CTRLDEF and "FIXED" have to be set. Otherwise the standard default setting for "FIXED" or     │
│         │ "ADAPT" will be set.                                                                               │
└─────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
11. “LCPERF” specifies the performance preference during analysis, while "LCACCU" prefers accuracy for analysis. These keywords must be defined if the smart contact in SOL 101 default is required. Specification of LCNT keyword is optional. Listed below are default control parameters of contact in SOL 101 if LCNT keyword or some of its fields are not defined. If the CTRLDEF field is blank, default control parameters will be same as those of NLPARM Bulk Data entry.

```text
┌─────────┬───────┬───────┬───────┬───────┬───────┬─────────┬─────────┬──────────┬──────────┐
│ CTRLDEF │ NINCC │ CONVC │ EPSUC │ EPSPC │ EPSWC │ MAXDIVC │ MAXBISC │ MAXITERC │ MINITERC │
├─────────┼───────┼───────┼───────┼───────┼───────┼─────────┼─────────┼──────────┼──────────┤
│ LCPERF  │ 1     │ PV    │ 1.e-3 │ 1.e-3 │ 1.e-7 │ 3       │ 5       │ 25       │ 2        │
├─────────┼───────┼───────┼───────┼───────┼───────┼─────────┼─────────┼──────────┼──────────┤
│ LCACCU  │ 1     │ UPV   │ 1.e-2 │ 1.e-2 │ 1.e-2 │ 5       │ 5       │ 25       │ 2        │
├─────────┼───────┼───────┼───────┼───────┼───────┼─────────┼─────────┼──────────┼──────────┤
│         │ 10    │ PV    │ 1.e-2 │ 1.e-2 │ 1.e-2 │ 3       │ 5       │ 25       │ 2        │
└─────────┴───────┴───────┴───────┴───────┴───────┴─────────┴─────────┴──────────┴──────────┘
```
     The default error tolerances EPSPC and EPSWC are relaxed for the accuracy preference LCACCU. These relaxations are imperative to avoid convergence problems with an additional displacement convergence criterion. The default control parameters are selected based on the test results of typical contact in SOL 101 models. Therefore, these empirical data are only served for the purpose of general convenience. The users can customize any control parameters while performing their analysis.

     For some contact models, specifying "LCPERF" or "LCACCU" preference may result in poor convergence. In these cases, the user may increase the number of increments (NINCC) to achieve optimal results.

12. If  10  <  MSTEP  <  200 : activating frequency based adaptive time step adjustment with bounds (RB) when specified increment (controlled by ADJUST) converges.  It cannot be combined with iteration based adaptive time step adjustment, controlled by NDESIR, and NDESIR is always ignored in this case. If MSTEP = -1: activating frequency based adaptive time step adjustment without bounds (RB).  It can be combined with iteration based adaptive time step adjustment controlled by NDESIR. If NDESIR=0, time step is only adjusted after the increment converges.

13. If MAXBIS is positive and the solution does not converge after MAXBIS bisections, the best solution is computed and the analysis is continued to the next time step. If MAXBIS is negative and the solution does not converge in |MAXBIS| bisection, the analysis is terminated.

14. SOL400 only support the displacement error computation with respect to the delta displacement of a load increment for EPSU. Although a positive EPSU is assigned, internally it will be changed into a negative value. If EPSW > 0.0, the energy error is computed with respect to the total energy. If EPSW < 0.0, the energy error is computed with respect to the delta energy of a load increment.

15. The test flags (U = displacement error, P = load equilibrium error, W = work error, V = vector component method, N = length method, and A = auto switch) and the tolerances (EPSU, EPSP, and EPSW) define the convergence criteria.  All the requested criteria (combination of U,   P, W, V and/or N) are satisfied upon convergence.  For SOL 400, if the U criterion is selected together with P or W, then for the first iteration of a load increment, the U criterion will not be checked. For SOL 400 if CONV = 'blank' the code will use a default of "UPW" if heat analysis and "PV" if a structural stress analysis is performed. See the  MSC Nastran Handbook for Nonlinear Analysis  for more details on convergence criteria. For V and N, see Remark   For A, see Remark 

16. V and N are additional methods for convergence checking using the displacement (U) and/or load (P) criteria. V stands for vector component checking. In this method, convergence checking is performed on the maximum vector component of all components in the model. N stands for length checking. In this method, the length of a vector at a grid point is first computed by the SRSS (square root of the sum of the squares) method. Then convergence checking is performed on the maximum length of all grid points in the model. For example, if CONV=UV, then V checking method will be performed with the U criteria, i.e., the maximum displacement component of all displacement components in the model is used for convergence checking. For V and N, the EPSU is always negative, i.e., the error is computed with respect to the delta displacements of a load increment, even if positive value is requested by users. CONV=V is the same as CONV=UPV. If both V and N are specified; V will take precedence over N. For example, CONV=VN is the same as CONV=V.

     By default, for UPV or UPN, separate checks are made over force and moment vectors, and translation and rotation vectors. While the force/translation check is valid always, the moment or rotation check is only valid for 6 DOF elements (beams, shells, etc.). In certain cases (i.e., simply supported or hinged structures where moments are numerically small, small rotation problems), it may be beneficial to turn off the additional convergence testing done for moments and/or rotations.

17. For SOL 400, the convergence checking flag “A” is implemented. “A” means automatically switching to an appropriate convergence checking flag if an unappropriated one is selected for a particular problem. For example, for the problem of stress-free contact analysis, the convergence checking flag PV is inappropriate because this may result of zero divided by zero in convergence checking computation. In this case, PV is switched to UV automatically if A is selected and the residual force is small, i.e., PVA  →  UVA. The legal combinations for A are PA, UA, WA, PVA, UVA, PNA, and UNA. The rules for auto-switching are that P is switched to U, U is switched to P, and W is switched to UP. For example, PVA  →  UVA, PVA  →  UNA, etc. For all other combinations, the A selection is ignored, for example, UPA is the same as UP.

18. The stiffness update strategy is selected in the KMETHOD and KMETHODH field for mechanical and thermal analysis, respectively.

• AUTO may be used for thermal analysis only. PFNT and ITER may be used in both mechanical and thermal analysis.

• In the thermal analysis, if the AUTO option is selected, the program automatically selects the most efficient strategy based on convergence rates. At each step the number of iterations required to converge is estimated. Stiffness is updated, if (i) estimated number of iterations to converge exceeds MAXITER, (ii) estimated time required for convergence with current stiffness exceeds the estimated time required for convergence with updated stiffness, and (iii) solution diverges. See Remarks 17. and 23. for diverging solutions. Available for the heat transfer pass only.

• If the ITER option is selected, the program updates the stiffness matrix at every KSTEP iterations and on convergence if KSTEP < MAXITER. However, if KSTEP > MAXITER, stiffness matrix is never updated. Note that the modified Newton-Raphson iteration method is obtained by selecting the ITER option and KSTEP = MAXITER.

• If the PFNT option is selected, the program will use the Pure Full Newton iteration method.

19. For FNT and PFNT methods, whether the stiffness matrix will be updated between the convergence of a load increment and the start of the next load increment depends on the value of KSTEP. In this case, KSTEP = -1, ‘BLANK’, or 1. A user fatal error will be issued if other value is input.
If KSTEP= 1, the stiffness matrix will not be updated. If KSTEP = ‘BLANK’, the program will decide whether to update depending element type. If KSTEP = -1, the stiffness matrix will be forced to be updated.

20. The ratio of energy errors before and after the iteration is defined as divergence rate  ![bulkno06188.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06188.jpg?_LANG=enus) , i.e.,

     ![bulkno06190.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06190.jpg?_LANG=enus)  

     Depending on the divergence rate, the number of diverging iteration (NDIV) is incremented as follows:

     If  ![bulkno06192.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06192.jpg?_LANG=enus)  or  ![bulkno06194.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06194.jpg?_LANG=enus) , then NDIV = NDIV + 2

     If  ![bulkno06196.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06196.jpg?_LANG=enus) , then NDIV = NDIV + 1

     The solution is assumed to diverge when NDIV  >  |MAXDIVC|. If the solution diverges and the load increment cannot be further bisected (i.e., MAXBIS is attained or MAXBIS is zero), the stiffness is updated based on the previous iteration and the analysis is continued. If the solution diverges again in the same load increment while MAXDIVC is positive, the best solution is computed and the analysis is continued to the next load increment. If MAXDIVC is negative, the analysis is terminated on the second divergence.

21. Please note that in NLTRAN analysis, the output is also influenced by NLPACK. For example, one NLTRAN analysis has NLSTEP as:

                NLSTEP,900,0.2

        ,fixed,2000,20

        ,mech,u

     It has total 2000 increments, and asks output every 20 increments. Therefore, total output is 100 time step. In NASTRAN, default value of NLPACK for NLTRAN is 100, in this model, therefore, NASTRAN will write the results to OP2 after collecting 100 output, i.e., this model will write results to OP2 only one time. With intermediate output request, only one OP2 file will be created.

     If NLPACK=1, NASTRAN will write results to OP2 for every output request. In this model, NASTRAN will write results to OP2 for every output request, i.e., writing 100 times in this model. With "intermediate output request, 100 OP2 files will be created.

     If NLPACK=2, NASTRAN will write results to OP2 for every two output requests. In this model, NASTRAN will write results to OP2 for every two output request, i.e., writing 50 times in this model. With “intermediate output request, 50 OP2 files will be created.

     For NO of FIXED in NLSTEP, it is similar to INTOUT of ADAPT.

22. If Modules are present then this entry may only be specified in the main Bulk Data section.

23. NLSTEP entry does not work for creep analysis when using the traditional elements. In SOL 400, NLPARM entry must be used to perform creep analysis with the traditional elements model.

24. Artificial damping takes effect in the following way with different options.

IDAMP=4: Artificial damping is always turned on. Both time stepping and added damping are controlled through the step.

• A comparison of the incremental damping energy to the predicted incremental total strain energy is used as a criterion for time step control.

• The damping factor to be used is computed based on the estimated damping energy and the estimated total energy for the step.

IDAMP=5: Artificial damping is not turned on. Similar algorithm as IDAMP = 4 except that only the time stepping is controlled based on the damping.

• A comparison of the incremental damping energy to the predicted incremental total strain energy is used as a criterion for time step control.

IDMAP=6: When the time step reaches the minimum value and the analysis is going to stop prematurely, two attempts are made to avoid a premature exit:

• The increment is repeated with a new time step = 10 tmin and quasi-static damping is added in a manner similar to the IDAMP = 4 scheme.

• If this does not work, the increment is repeated with a new time step = 100 tmin and the process is repeated. Note that once damping is turned on to avoid the premature stop, it remains on for the rest of the step.

