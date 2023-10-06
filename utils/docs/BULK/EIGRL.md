## [EIGRL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EIGRL.xhtml) - Real Eigenvalue Extraction Data, Lanczos Method

Defines data needed to perform real eigenvalue (vibration or buckling) analysis with the Lanczos method.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EIGRL   SID     V1      V2      ND      MSGLVL  MAXSET  SHFSCL  NORM    +        
+       optio...        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EIGRL   1       0.1     3.2     10                                      +       
+       NORM=...        
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Unique Integer > 0)   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ V1, V2    │ For vibration analysis:  frequency range of       │                                                   │
│           │ interest. For buckling analysis: eigenvalue range │                                                   │
│           │ of interest. See Remark 4. (Real or blank, )      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ND        │ Number of roots desired. See Remark 4.            │                                                   │
│           │ (Integer > 0 or blank)                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MSGLVL    │ Diagnostic level. (0 < Integer < 4; Default = 0)  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MAXSET    │ Number of vectors in block or set. See Remark 13. │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SHFSCL    │ Estimate of the first flexible mode natural       │                                                   │
│           │ frequency. See Remark 9. (Real or blank)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NORM      │ Method for normalizing eigenvectors (Character:   │                                                   │
│           │ “MASS” or “MAX”)                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MASS                                              │ Normalize to unit value of the generalized mass.  │
│           │                                                   │ Not available for buckling analysis. (Default for │
│           │                                                   │ normal modes analysis.)                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ MAX                                               │ Normalize to unit value of the largest            │
│           │                                                   │ displacement in the analysis set.  Displacements  │
│           │                                                   │ not in the analysis set may be larger than unity. │
│           │                                                   │ (Default for buckling analysis.)                  │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ALPH      │ Specifies a constant for the calculation of       │                                                   │
│           │ frequencies (Fi) at the upper boundary segments   │                                                   │
│           │ for the parallel method based on the following    │                                                   │
│           │ formula. See Remark 12. (Real > 0.0; Default =    │                                                   │
│           │ 1.0): ALPH< 1.0,   ALPH = 1.0,                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NUMS      │ Number of frequency segments for the parallel     │                                                   │
│           │ method. (Integer > 0; Default = 1)                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Fi        │ Frequency at the upper boundary of the i-th       │                                                   │
│           │ segment. See Remark 12. (Real or blank; )         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ option_i= │ Assigns a value to the fields above except for    │                                                   │
│ value_i   │ SID. ALPH, NUMS, and Fi must be specified in this │                                                   │
│           │ format. V1, V2, ND, MSGLVL, MAXSET, SHFSCL, and   │                                                   │
│           │ NORM may be specified in this format as long as   │                                                   │
│           │ their corresponding field is blank in the parent  │                                                   │
│           │ entry.                                            │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. Real eigenvalue extraction data sets must be selected with the Case Control command METHOD = SID.
2. The units of V1 and V2 are cycles per unit time in vibration analysis, and are eigenvalues in buckling analysis. Each eigenvalue is the factor by which the prebuckling state of stress is multiplied to produce buckling in the shape defined by the corresponding eigenvector.
3. NORM = “MASS” is ignored in buckling analysis and NORM = “MAX” will be applied.
4. The roots are found in order of increasing magnitude; that is, those closest to zero are found first.  The number and type of roots to be found can be determined from  .

        See link for table.

5. In vibration analysis, if V1 < 0.0, the negative eigenvalue range will be searched. (Eigenvalues are proportional to Vi squared; therefore, the negative sign would be lost.) This is a means for diagnosing improbable models. In buckling analysis, negative V1 and/or V2 require no special logic.
6. Eigenvalues are sorted on order of magnitude for output. An eigenvector is found for each eigenvalue.
7. MSGLVL controls the amount of diagnostic output during the eigenvalue extraction process. The default value of zero suppresses all diagnostic output. A value of one prints eigenvalues accepted at each shift. Higher values result in increasing levels of diagnostic output.
8. In vibration analysis, if V1 is blank, all roots less than zero are calculated. Small negative roots are usually computational zeroes which indicate rigid body modes.  Finite negative roots are an indication of modeling problems.  If V1 is set to zero, negative eigenvalues are not calculated.
9. A specification for SHFSCL may improve performance, especially when large mass techniques are used in enforced motion analysis. Large mass techniques can cause a large gap between the rigid body and flexible frequencies. If this field is blank, a value for SHFSCL is estimated automatically.
10. On occasion, it may be necessary to compute more roots than requested to ensure that all roots in the range have been found. However, this method will not output the additional roots.
11. NASTRAN SYSTEM(146) (also known as FBSMEM) provides options for I/O reduction during FBS operations according to the following table.

```text
┌─────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ SYSTEM(146) │ Description                                                                                   │
│ (default=0) │                                                                                               │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ -1 or 0     │ Use available memory to store as much of the factor matrix as possible during FBS operations. │
│             │ System Information Message 4199 is printed in the F04 file.                                   │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1           │ Disable all special memory operations for FBS.                                                │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2           │ Increase memory reserved for sparse method by approximately 200%.                             │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3           │ Increase memory reserved for sparse method by approximately 300%.                             │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4           │ Increase memory reserved for sparse method by approximately 400%.                             │
└─────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

12. For the distributed parallel method, the frequency range between V1 and V2 may be subdivided into segments that can then be analyzed in parallel. V1 and V2 must be specified for the parallel method. NUMS must be specified greater than 1 to take advantage of the parallel method. NUMS may also be specified on the NUMSEG keyword of the NASTRAN statement. Currently, NUMSEG must equal the number of processors and by default NUMSEG is set to the number of processors requested by the DMP keyword. If both are specified, then NUMS takes precedence.

     The upper frequencies of each segment may be generated automatically by ALPH or specified directly in Fi. If both are specified, then Fi takes precedence over ALPH as long as they are consistent. ALPH if multiplied by 100 may also be specified on FRQSEQ keyword of the NASTRAN statement.

13. Increasing MAXSET may improve performance for large problems where a large number of eigenvalues are being found. The default is 7 on all machines. SYSTEM(263) may be set in an rcfile to effectively modify the default; however the setting on the EIGRL entry always takes precedence.

     The optimal MAXSET, also known as Lanczos block size, should be at least one more than the number of repeated eigenvalues. For example, for a model that has six rigid body modes (six zero-frequency eigenvalues), the recommended block size is 7. Additionally, the MAXSET value can also be increased to help with numerical orthogonalization during the Lanczos recurrence, for models with many closely spaced roots. Note that there must be sufficient memory to keep 'MAXSET' vectors in memory; otherwise, the MAXSET (Lanczos block size) will be reduced automatically. Maximum value for MAXSET is 30. Activate Lanczos message level 1 (EIGRL field 6) to see Lanczos diagnostic messages. Note also that DIAG 16 is equivalent to Lanczos message level 1.

14. SYSTEM(196), keyword SCRSAVE, controls reuse of scratch files when segment logic is invoked.  SYSTEM(196) is useful only when multiple frequency segments are requested on a Lanczos run.  (Multiple frequency segments can be requested via the NUMS field in the EIGRL entry and by SYSTEM(197).)  Each frequency segment requires a minimum of three scratch files.  When multiple frequency segments are used on a single processor computer then each frequency segment is solved serially.  In this case, it makes sense to let segment #2 use the scratch files which were used by segment #1 since work for segment #1 has been completed (otherwise it wouldn’t be working on #2).  Similarly, when work for segment #2 is finished, segment #3 should be able to use #2’s scratch files.  SYSTEM(196)=1 allows such file reuse and is considered a safe default on Version 70 and later systems.
15. The new buckling shift logic in Version 70.5 tends to shift to 1.0 first. The logic may have difficulty finding the lowest ND roots if a problem requests a small number of roots (ND) when there are thousands of roots below 1. In this case either the loading should be scaled, SHFSCL specified, or a smaller frequency range requested.
16. Because Lanczos performance is tuned for medium to large problems, this has caused difficulties with very small problems. Thus, by default, on problems with fewer than 20 degrees-of-freedom when the LAN method is selected, the method is switched to AHOU. The criteria for automatic switching is controlled by SYSTEM(359) on the NASTRAN entry.
17. V2 must be specified if DOMAINSOLVER ACMS or DOMAINSOLVER MODES is also specified in the Executive Control Section.
18. For buckling solutions, the Lanczos algorithm is most reliable if it is allowed to compute the lowest mode first, then the remainder in increasing order of magnitude. The lowest mode is usually the mode of most interest. If the V1 and V2 fields are left blank, an estimate of the first mode eigenvalue is found by a robust, efficient inverse iteration. If ND is set to 1, there is a high probability that the first mode will be computed reliably. If more modes are needed it is easier to fill out the other fields correctly once the location of the lowest mode is known.
19. For buckling solutions, if V1 is explicitly set to 0.0, negative eigenvalues will be calculated based on a negative shift value. This is done to avoid singularities resulting from a shift at 0.0. If V1 is set to a small positive value, then negative eigenvalues will not be calculated. This behavior was changed with the MSC Nastran 2010 release whereas before setting V1 to 0.0 yielded no negative eigenvalues. The best approach, however, is to follow the suggestion from Remark 19.
20. If Modules are present then this entry may only be specified in the main Bulk Data section.
