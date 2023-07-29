## [FAILUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FAILUDS.xhtml) - User Defined Failure For Nonlinear Explicit Analysis - SOL 700 only

User defined simple failure of Eulerian materials. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FAILUDS FID     GROUP   UNAME                                                   
```

#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE usrfail  ![bulkfgil03614.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03614.jpg?_LANG=enus) SCA.MDSolver.Obj.Uds.Dytran.Materials ![bulkfgil03616.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03616.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FAILUDS 200     usrfail EXFAIL                                                  
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ FID       │ Unique output number. (Integer > 0; Required)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. (Character; default=EXFAIL)                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only can be used for SOL 700.
2. FID has to be referenced by a MATDEUL, MAT1 or MATORT entry.
3. UNAME can be:
4. For option UNAME=EXFAIL2, for each material and for each Euler element a variable will be created that monitors the degree of failure of the material. This variable is denoted by DAMAGE and is between 0 and 1. The EXFAIL2 routine allows updating this damage variable due to the plastic strain increment of the current cycle.
5. For option UNAME=EXFAIL2 there are three ways in which this damage variable can model failure. These are:
     - Continuous failure: The yield stress is reduced by a factor (1-D). When D exceeds 1.0, the yield stress equals zero and the element fails.
     - Discrete failure: the element fails when D equals one.
     - No failure: positive damage values will not lead to failure. This is useful if the failure modeling is done by an YLDUDS routine. Then the yield stress can be reduced depending on the magnitude of the damage variable.
6. UNAME=EXFAIL2 is only supported by the multi-material Euler solver with strength.
7. UNAME=EXFAIL1 is only supported with MATORT.
8. For Lagrangian materials, UNAME=EXFAIL or EXFAIL1 are only available.
