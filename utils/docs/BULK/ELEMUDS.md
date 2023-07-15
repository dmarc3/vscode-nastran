## [ELEMUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.ELEMUDS.xhtml) - Element Property User Defined Service or Subroutine

Allows the user to provide element property routines for use with specified Nastran elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ELEMUDS PID     PTYPE   GROUP   UNAME   DEPEN   NMLSPD                          
        “INT”   IDATA1  IDATA2  IDATA3  IDATA4  IDATA5  IDATA6  IDATA7          
                IDATA8  IDATA9  ...     ...     IDATAn                          
        “REAL”  RDATA1  RDATA2  RDATA3  RDATA4  RDATA5  RDATA6  RDATA7          
                RDATA8  RDATA9  ...     ...     RDATAn                          
        “CHAR”  CDATA1  CDATA2  ...     ...     CDATAn                          
```
#### Examples:

In FMS Section of Nastran input stream:

CONNECT SERVICE ELEMENT ‘SCA.MDSolver.Util.Ums’

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ELEMUDS 17      PBUSH2D ELEMENT THPAD   FREQ                                    
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Element property identification number that matches the identification number on a PBUSH2D element │
│           │ property entry. (Integer > 0)                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PTYPE     │ The name of the element entry. Currently supported element property entry is: PBUSH2D. (Character; │
│           │ no Default)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default)         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. See Remark 6.(Character)                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DEPEN     │ Specifies if element is frequency dependent. DEPEN=NOM or blank; user element is not frequency     │
│           │ dependent. DEPEN=FREQ; user element is frequency dependent. (Character default=NOM)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NMLSPD    │ Nominal speed (cycles per second) used by the CBUSH2DA to calculate nominal stiffness, mass and    │
│           │ damping terms. Nominal terms will be used during reduction and real eigenvalue solution. In a      │
│           │ frequency-dependent problem, updated values will be calculated at each frequency.                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “INT”     │ Keyword indicating that the following data is integer. (Character)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDATAi    │ Additional user supplied Integer data not already existing on the specified property entry.        │
│           │ (Integer; no Default)                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “REAL”    │ Keyword indicating that the following data is real. (Character)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RDATAi    │ Additional user supplied Real data not already existing on the specified property entry. (Real; no │
│           │ Default)                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “CHAR”    │ Keyword indicating that the following data is Character. (Character)                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CDATAi    │ Additional user supplied Character data not already existing on the specified property entry.      │
│           │ (Character; no Default)                                                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. This entry triggers the call to a user element property subroutine for advanced nonlinear materials. The GROUP must match the GROUP field of the CONNECT SERVICE FMS statement.

2. On the FMS CONNECT statement, only the CONNECT SERVICE can be used with this entry.

3. PID must match an existing PID.

4. A CDATAi entry cannot be the Character “REAL”, “INT”, or “CHAR”.

5. Certain user subroutines may require integer, real, or character data input as specified in the User Defined Services manual.

6. UNAME must be truncated to 8 characters in the bulk data field

7.    for a description of ROMAC service. ( http://www.virginia.edu/romac/ )

