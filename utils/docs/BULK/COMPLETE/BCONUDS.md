## [BCONUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCONUDS.xhtml) - Contact Body User Defined Service

Allows the user to provide contact routines for use with enhanced SOL 400 contact analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONUDS BID     BTYPE   GROUP   UNAME                                   +       
+       “INT”   IDATA1  IDATA2  IDATA3  IDATA4  IDATA5  IDATA6  IDATA7  +       
+               IDATA8  IDATA9  ...     ...     IDATAn                  +       
+       “REAL”  RDATA1  RDATA2  RDATA3  RDATA4  RDATA5  RDATA6  RDATA7  +       
+               RDATA8  RDATA9  ...     ...     RDATAn                  +       
+       “CHAR”  CDATA1  CDATA2  ...     ...     CDATAn                          
```

#### Example:

In FMS Section of MSC Nastran input stream :

CONNECT SERVICE CONTACT ‘SCA.MDSolver.Util.Ums’

In Bulk Data :

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONUDS 17      BCBODY  CONTACT UFRIC                                           
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONUDS 17      BCBODY  CONTACT SEPFOR                                  +       
+       REAL    .00134  1.467+4 .03                                             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONUDS 17      BCBODY  CONTACT MOTION                                  +       
+       REAL    .00134  1.467+4 .03                                     +       
+       INT     8       3                                                       
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID       │ Contact body identification number defined by BCBODY or BCBODY1. (Integer > 0; Required)         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BTYPE     │ The name of the contact entry. BCBODY/BCBODY1 (Character; no Default)                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS Section CONNECT SERVICE statement. (Character; no Default)       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. See Remark 6. and 7. (Character)                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “INT”     │ Keyword indicating that the following data is integer. (Character)                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDATAi    │ Additional user supplied Integer data not already existing on the specified contact property     │
│           │ entry. (Integer, no Default)                                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “REAL”    │ Keyword indicating that the following data is real. (Character)                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RDATAi    │ Additional user supplied Real data not already existing on the specified contact property entry. │
│           │ (Real; no Defaults)                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “CHAR”    │ Keyword indicating that the following data is Character. (Character)                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CDATAi    │ Additional user supplied Character data not already existing on the specified contact property   │
│           │ entry. (Character; no Default)                                                                   │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry triggers the call to a user contact subroutine for advanced nonlinear materials. The GROUP must match the GROUP field of the CONNECT SERVICE FMS statement.
2. On the FMS CONNECT statement, only the CONNECT SERVICE can be used with this entry.
3. The BID must match an existing BID.
4. A CDATAi entry cannot be the Character “REAL”, “INT”, or “CHAR”.
5. Certain user subroutines may require integer or real data input as specified in the User Defined Services manual.
6. UNAME must be truncated to 8 characters in the bulk data field
7. The following user subroutines are currently available for user convenience. See the User Defined Services manual for details.

```text
┌───────────┬──────────┬───────────────────────────────────────────────────────────────────────────────────────┐
│ Type      │ Uname    | Purpose                                                                               │
├───────────┼──────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ BCBODY    │ motion   | Define velocity of rigid surfaces                                                     │
├───────────┼──────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ BCBODY    │ ufric    | Define friction coefficients                                                          │
├───────────┼──────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ BCBODY    │ sepfor   | Define separation forces                                                              │
├───────────┼──────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ BCBODY    │ sepstr   | Define separations stresses                                                           │
├───────────┼──────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ BCBODY    │ ubsqueal | Define friction coefficient and effective stiffness in brake squeal analysis          │
└───────────┴──────────┴───────────────────────────────────────────────────────────────────────────────────────┘
```
