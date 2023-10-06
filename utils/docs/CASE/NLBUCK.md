## [NLBUCK (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLBUCK.Case.xhtml) - Nonlinear Buckling Request

Perform a nonlinear buckling analysis in SOL 400.

#### Format:

![casecontrol4a01184.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01184.jpg?_LANG=enus)

#### Examples:

```nastran
NLBUCK
NLBUCK=END
NLBUCK=ALL
NLBUCK=0.3
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ END       │ At the end of the step an eigenvalue projection is made to predict the buckled load (Default).    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ After each converged load increment within the step an eigenvalue projection is made to predict   │
│           │ the buckled load.                                                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ r         │ After every multiple of r load step an eigenvalue projection is made to predict the buckled load. │
│           │ Buckling will also be computed at the final load increment. A tolerance of 1.E-6 is used to       │
│           │ determine the load step's closeness to r. (Real)                                                  │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. The eigenvalue projection is only attempted after the first two converged load increments in order for there to be at least two tangent stiffness matrices for the projection.
2. NLBUCK may be specified in any STEP or SUBCASE along with an NLSTEP command. The NLPARM command is not allowed with NLBUCK.
3. In order to obtain the most accurate value for critical buckling factor, the user must set NO=1 on the NLSTEP entry. Specifying PARAM,LGDISP>0 is also recommended.
4. In addition to NLBUCK, a METHOD Case Control command may be specified to reference an EIGB, EIGR or EIGRL Bulk Data entry, or if asymmetric follower stiffness exists then a CMETHOD Case Control command may be specified to reference an EIGC entry. The EIGx entries should request the computation of at least the first mode. If no METHOD/CMETHOD command is present, a minimum of two eigenvalues are extracted for the buckling projection using an eigenvalue extraction method appropriate for the form of the tangent stiffness (symmetric or asymmetric).   For manual control of follower stiffness symmetry see the description of user PARAMeters FOLLOWK and FKSYMFAC.
5. If NLBUCK=0.3 and the TOTTIME on the NLSTEP Buck Data entry is 1.0 then the buckling will be computed at load steps 0.3, 0.6, 0.9, and 1.0.  Also, if the load factor is not a multiple of r then the next load factor will be used; for example, if TOTIME=1.0 and there are 50 load increments and r=.45 then buckling will be computed at load factors 0.46, 0.90, and 1.0.
6. There are three methods of eigenvalue extraction available for nonlinear buckling—Lanczos (EIGRL or EIGR entry with METHOD=LAN), enhanced inverse power method (EIGB entry with METHOD=SINV), and complex (EIGC entry) for unsymmetric stiffness due to follower stiffness.
    - If no METHOD and no CMETHOD command is specified, then the program will automatically attempt to compute two modes (ND=2) with an unspecified eigenvalue range (F1 and F2) using the real Lanczos method if the stiffness matrix is symmetric or the complex Lanczos method if the stiffness matrix is unsymmetric.
    - The Lanczos method is recommended in most cases especially in finding the lowest mode.
    - If no modes can be found with no eigenvalue range was specified, then it is highly recommended that a range (L1 and L2 on EIGB, F1 and F2 on EIGR, and V1 and V2 on EIGRL) be specified.
    - If higher modes are desired, then the enhanced inverse power method is recommended with a narrow eigenvalue range specified for L1 and L2 on the EIGB entry.
    - If a METHOD command is specified but the stiffness is unsymmetric then User Warning Message 9430 will be issued.
7. Guidelines and limitations:
    - NLPARM Case Control command is not permitted in a nonlinear buckling step. NLSTEP must be specified in the nonlinear buckling step and KMETHOD=PFNT (default) is strongly recommended along with NO=1 for FIXED time stepping or INTOUT=YES for ADAPT time stepping. If KMETHOD=ITER then KSTEP=1 is strongly recommended.
    - It is strongly recommended that PARAM,LGDISP,1 is specified.
    - It is strongly recommended to specify an eigenvalue range on the EIGR, EIGRL, EIGB, and EIGC Bulk Data entries. But with NLBUCK=ALL it may be difficult to define a range for all load increments.
    - When using NLBUCK in contact analysis with general glued or touching contact, it should be noted that if contact status changes between the increment in which nonlinear buckling is calculated and its previous increment, the result of NLBUCK may be not reliable
