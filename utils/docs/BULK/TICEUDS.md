## [TICEUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TICEUDS.xhtml) - User-defined Transient Initial Conditions of Euler Elements or Lagrangian grid points.

Defines the initial values of element or grid point variables at the beginning of the analysis by a user written subroutine. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TICEUDS SID     GROUP   UNAME   SETID   COPT                                    
```
#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE initex  ![bulktuv08033.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08033.jpg?_LANG=enus) SCAI.MDSolver.Obj.Uds.Dytran.InitOut ![bulktuv08035.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08035.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TICEUDS 12      initex  EXINIT  100     GRID                                    
```
```text
┌───────────┬──────────────────────────────────────────────────┬─────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                         │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ SID       │ Unique output number. (Integer > 0; Required)    │                                         │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT  │                                         │
│           │ SERVICE statement. (Character; no Default)       │                                         │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry.  │                                         │
│           │ (Character; default=EXINIT)                      │                                         │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ SETID     │ Number of a SET1 entry defining the elements or  │                                         │
│           │ grids to be initialized. (Integer > 0, Required) │                                         │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ COPT      │ Flag for assigning initial velocities.           │                                         │
│           │ (Character; default=Element)                     │                                         │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ Element                                          │ Apply the initial variables on elements │
├───────────┼──────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ GRID                                             │ Apply the initial variables on grids    │
└───────────┴──────────────────────────────────────────────────┴─────────────────────────────────────────┘
```
