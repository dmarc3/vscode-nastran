## [EIGR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EIGR.xhtml) - Real Eigenvalue Extraction Data

Defines data needed to perform real eigenvalue analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EIGR    SID     METHOD  F1      F2      NE      ND                      +       
+       NORM    G       C                                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EIGR    13      LAN                             12                              
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Unique Integer > 0)   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ METHOD    │ Method of eigenvalue extraction. (Character)      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Modern Methods:                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ LAN                                               │ Lanczos Method                                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ AHOU                                              │ Automatic selection of HOU or MHOU method. See    │
│           │                                                   │ Remark 13.                                        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Obsolete Methods:                                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ INV                                               │ Inverse Power method.                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ SINV                                              │ Inverse Power method with enhancements.           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ GIV                                               │ Givens method of tridiagonalization.              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MGIV                                              │ Modified Givens method.                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HOU                                               │ Householder method of tridiagonalization.         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MHOU                                              │ Modified Householder method.                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ AGIV                                              │ Automatic selection of METHOD = “GIV” or “MGIV”.  │
│           │                                                   │ See Remark 13.                                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NORM      │ Method for normalizing eigenvectors.  (Character: │                                                   │
│           │ “MASS,” “MAX,” or “POINT”; Default = “MASS”)      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MASS                                              │ Normalize to unit value of the generalized mass.  │
│           │                                                   │ (Default)                                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MAX                                               │ Normalize to unit value of the largest component  │
│           │                                                   │ in the analysis set.                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ POINT                                             │ Normalize to a positive or negative unit value of │
│           │                                                   │ the component defined in fields 3 and 4. The      │
│           │                                                   │ POINT option is not supported for METHOD=LAN.     │
│           │                                                   │ (Defaults to “MASS” if defined component is       │
│           │                                                   │ zero.)                                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G         │ Grid or scalar point identification number.       │                                                   │
│           │ Required only if NORM = “POINT”.  (Integer > 0)   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ C         │ Component number. Required only if NORM = “POINT” │                                                   │
│           │ and G is a geometric grid point.                  │                                                   │
│           │ (1 < Integer < 6)                                 │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

```text
┌─────────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Field       │ METHOD Field                                      │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ INV or SINV │ GIV, MGIV, HOU, or MHOU                           │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ F1, F2      │ Frequency range of interest. F1 must be input. If │ Frequency range of interest. If ND is not blank, │
│             │ METHOD = “SINV” and ND, is blank, then F2 must be │ F1 and F2 are ignored. If ND is blank,           │
│             │ input. See also Remark 21. (Real > 0.0)           │ eigenvectors are found with natural frequencies  │
│             │                                                   │ that lie in the range between F1 and F2.         │
│             │                                                   │ (Real > 0.0; F1 < F2)                            │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ NE          │ Estimate of number of roots in range (Required    │ Not used.                                        │
│             │ for METHOD = “INV”).  Not used by “SINV” method.  │                                                  │
│             │  (Integer > 0)                                    │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ND          │ Desired number of roots. If this field is blank   │ Desired number of eigenvectors. If ND is zero,   │
│             │ and METHOD = “SINV”, then all roots between F1    │ the number of eigenvectors is determined from F1 │
│             │ and F2 are searched and the limit is 600 roots.   │ and F2.  If all three are blank, then ND is      │
│             │ (Integer > 0, Default is  for METHOD = “INV”      │ automatically set to one more than the number of │
│             │ only.)                                            │ degrees-of-freedom listed on SUPORTi entries.    │
│             │                                                   │ (Integer > 0; Default = 0)                       │
└─────────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. The EIGR entry must be selected with the Case Control command METHOD = SID.
2. See   in the  MSC Nastran Dynamic Analysis Guide  for a discussion of method selection.
3. The units of F1 and F2 are cycles per unit time.
4. The continuation entry is optional. If the continuation entry is not specified, then mass normalization is performed.
5. The contemporary methods are LAN and AHOU. The other methods are in a maintenance-only status, with no enhancements planned for them. They may be eliminated in a future release of Nastran.
6. The LAN method is the most general-purpose method, and may be used on both small- and large-size problems. It takes advantage of sparsity of input matrices, leading to greater efficiency on large-size problems. Because Lanczos performance is tuned for medium to large problems, this has caused difficulties with very small problems. Thus, by default, on problems with fewer than 20 degrees-of-freedom when the LAN method is selected, the method is switched to AHOU. The criteria for automatic switching is controlled by SYSTEM(359) on the NASTRAN entry. The NE, G, and C fields are ignored for the LAN method. The NORM field may be set to MASS (the default value) or MAX. The conventions used when both the Fi and ND fields are specified are described in   of the EIGRL entry description. The EIGRL entry is an alternate method to select the LAN method. It has several other input options for special cases. When both and EIGRL and EIGR have the same SID and that SID is selected by a METHOD command the EIGRL entry takes precedence.
7. The AHOU method is competitive with the LAN method when there are small, dense matrices and many eigenvectors are required. This most commonly occurs when static or dynamic reduction is performed. The AHOU method does not take advantage of matrix sparsity, so that computation cost rises with the cube of the number of DOFs. The AHOU method responds to all permitted values for all the other fields except NE, which is ignored.
8. All methods require a positive semi-definite (psd) mass matrix for stable solutions. The mass matrix may be tested for this condition for all methods of solution by setting SYSTEM(303). A value of “-4” should be sufficient to identify problem matrices. A fatal error exit is taken when it is not met. All Nastran metric elements are designed to produce psd mass matrices. CMASSi elements, DMIG matrices selected by the M2GG command, and matrices input via INPUTT4 are special methods that allow addition of non-psd terms by use of non-metric element input. If none of this type of special input is present and the fatal error exit is taken you may have encountered an error in a metric element. Contact your local MSC technical representative for corrective action in this case.
9. The LAN and AHOU methods allow singular but positive semi-definite mass matrices.
10. The tridiagonal methods include the xGIV and xHOU methods, where “x” is described in the following comments. All tridiagonal methods compute all eigenvalues, and the number of eigenvectors specified by the Fi and Nd fields, as described in  .
11. If “x” is blank (for example, the HOU method is selected) the mass matrix must be non-singular.
12. If “x” is M (for example, the MHOU method is selected) the mass matrix may be singular. A modified, shifted problem is solved in an inverse basis with this method. Some precision in the solution and longer computation time is exchanged for a more stable solution.
13. If “x” is A (for example, the AHOU method is selected) an attempt is made to solve the problem without shifting, in the interest of cost reduction and maximum precision. If the mass matrix is determined to be poorly conditioned for inversion the basis is automatically shifted with the modified method.
14. If NORM = “MAX”, components that are not in the analysis set may have values larger than unity.
15. If NORM = “POINT”, the selected component should be in the analysis set (a-set).  (The program uses NORM = “MAX” when it is not in the analysis set.)  The displacement value at the selected component will be positive or negative unity.
16. The “SINV” method is an enhanced version of the “INV” method. It uses Sturm sequence number techniques to make it more likely that all roots in the range have been found. It is generally more reliable and more efficient than the “INV” method.
17. For the “INV” and “SINV” methods, convergence is achieved at  ![bulkde03392.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03392.jpg?_LANG=enus) . Convergence is tested by other criteria for the other methods.
18. For the “SINV” method only, if F2 is blank, the first shift will be made at F1, and only one eigensolution above F1 will be calculated.  If there are no modes below F1, it is likely that the first mode will be calculated.  If there are modes below F1 (including rigid body modes defined by SUPORT entries), a mode higher than the first mode above F1 may be calculated.
19. When F1, F2, and ND are all zero or blank, ND is reset to 1. A User Warning Message is produced for this condition, which is interpreted as likely to be due to an inadvertent omission by the user.
20. For buckling solutions, the Lanczos algorithm is most reliable if it is allowed to compute the lowest mode first, then the remainder in increasing order of magnitude. The lowest mode is usually the mode of most interest. If the F1 and F2 fields are left blank, an estimate of the first mode eigenvalue is found by a robust, efficient inverse iteration. If ND is set to 1, there is a high probability that the first mode will be computed reliably. If more modes are needed it is easier to fill out the other fields correctly once the location of the lowest mode is known.
21. F2 must be specified if DOMAINSOLVER ACMS or DOMAINSOLVER MODES is also specified in the Executive Control Section.
22. For large sized problems, Lanczos is the most efficient and is the recommended method for large problems.
23. It is not recommended to use AHOU, HOU, MHOU if RIGID=LAGRAN case control.
24. If Modules are present then this entry may only be specified in the main Bulk Data section.
