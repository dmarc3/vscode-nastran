## [EIGB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EIGB.xhtml) - Buckling Analysis Set

Defines data needed to perform buckling analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EIGB    SID     METHOD  L1      L2      NEP     NDP     NDN             +       
+       NORM    G       C                                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EIGB    13      INV     0.1     2.5     2       1       1               +       
+       MAX                                                                     
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Unique Integer > 0)  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ METHOD    │ Method of eigenvalue extraction.  (Character:     │                                                   │
│           │  “INV” for inverse power method or “SINV” for     │                                                   │
│           │ enhanced inverse power method.)                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ L1, L2    │ Eigenvalue range of interest.  (Real, L1 < L2)    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NEP       │ Estimate of number of roots in positive range not │                                                   │
│           │ used for METHOD = “SINV”.  (Integer > 0)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NDP, NDN  │ Desired number of positive and negative roots.    │                                                   │
│           │  (Integer > 0; Default = 3*NEP)                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NORM      │ Method for normalizing eigenvectors.  (Character: │                                                   │
│           │  “MAX” or “POINT”; Default =  “MAX”)              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MAX                                               │ Normalize eigenvectors to the unit value of the   │
│           │                                                   │ largest component in the analysis set.            │
│           │                                                   │  (Default).                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ POINT                                             │ Normalize eigenvectors to the unit value of the   │
│           │                                                   │ component defined in G and C fields.  The value   │
│           │                                                   │ for NORM defaults to MAX if the defined component │
│           │                                                   │ is zero.                                          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G         │ Grid or scalar point identification number.       │                                                   │
│           │  Required only if NORM = “POINT”.   (Integer > 0) │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ C         │ Component number.  Required only if NORM=“POINT”  │                                                   │
│           │ and G is a geometric grid point.                  │                                                   │
│           │  (1 < Integer < 6)                                │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The EIGB entry must be selected with the Case Control command METHOD = SID.
2. Each eigenvalue is the factor by which the pre-buckling state of stress is multiplied to produce buckling in the shape defined by the corresponding eigenvector.
3. The continuation entry is optional.  If the continuation is not specified, than NORM = “MAX” normalization is performed.
4. If NORM = “MAX”, components that are not in the analysis set may have values larger than unity.
5. The SINV method is an enhanced version of the INV method.  It uses Sturm sequence techniques to ensure that all roots in the range have been found.  It is generally more reliable and more efficient than the INV method.
6. Convergence is achieved at 10 -6 .
7. For buckling solutions, the Lanczos algorithm is most reliable if it is allowed to compute the lowest mode first, then the remainder in increasing order of magnitude. The lowest mode is usually the mode of most interest. If the L1 and L2 fields are left blank, an estimate of the first mode eigenvalue is found by a robust, efficient inverse iteration. If NDP and NDN are set to 1, there is a high probability that the first mode will be computed reliably. If more modes are needed it is easier to fill out the other fields correctly once the location of the lowest mode is known.
8. If Modules are present then this entry may only be specified in the main Bulk Data section.
