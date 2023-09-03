## [MATF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATF.xhtml) - Material Failure Model

Specifies failure model properties for linear elastic materials to be used for static, quasi static or transient dynamic analysis. Up to three criteria may be specified for each material. For progressive failure (ITYPE=2) only the first criterion will contribute to failure. The other two, if specified, will only provide output of failure index. SOL 400 (only with extended property entries), and all linear solution sequences between SOL101 and SOL112 (only with CPYRAM or CHEXA/PCOMPLS) are supported.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATF    MID     ITYPE                                                   +
+       “CRI”   Crite...V11     V12     V13     V14     V15     V16     1st
+       V17     V18     V19     Find1   V110    V111    V12     W11     +
+       W12     W13     W14     W15     W16     W17     W18     W19     +
+       “PF”    A1      A2      A3      A4      A5                      +
+       “CRI”   Crite...V21     V22     V23     V24     V25     V26     2nd
+       V27     V28     V29     Find2   V210    V211    V22     W21     +
+       W22     W23     W24     W25     W26     W27     W28     W29     +
+       “CRI”   Crite...V31     V32     V33     V34     V35     V36     3rd
+       V37     V38     V39     Find3   V310    V311    V32     W31     +
+       W32     W33     W34     W35     W36     W37     W38     W39
```

#### Example 1 (3 Criteria, no progressive failure):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATF    100     0                                                       +  
+       CRI     1       2500.   4000.   2500.   4000.   2000.   3000.   1st
+       4500.   4500.   4500.                                           +  
+                                                                       +  
+       CRI     7       2500.   3000.   1500.   2000.                   2nd
+       1000.   1000.                                                   +  
+       .11     .06     .1      .05     .075    .03     .03     .03     +  
+       CRI     4       2500.   4000.   2500.   4000.   2000.   3000.   3rd
+       4500.   4500.   4500.                                              
```

(Note: The 4th and 6th lines cannot be entirely blank and the last line of the 3rd criteria has been omitted.)

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT1, MAT2, MAT8,      │                                                   │
│           │ MATORT or MAT9 entry. See Remarks 1. and          │                                                   │
│           │ 2. (Integer > 0; no Default)                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ITYPE     │ Flag to invoke progressive failure. (Integer;     │                                                   │
│           │ Default = 0)                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 0                                                 │ No progressive failure, compute failure indices   │
│           │                                                   │ only.                                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2                                                 │ Gradual selective stiffness degradation.          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 3                                                 │ Immediate selective stiffness degradation.        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “CRI”     │ Enter the character string “CRI” to start input   │                                                   │
│           │ data for a failure criterion.                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CRI67     │ Used with the alternate format only. (Integer; no │                                                   │
│           │ Default; Required) It is highly recommended that  │                                                   │
│           │ only one criterion be used. However, up to three  │                                                   │
│           │ criteria from the list under Criteria below can   │                                                   │
│           │ be specified in a packed list as follows:         │                                                   │
│           │ 1000000*ITYPE+10000*C3+100*C2+C1 where C1, C2, C3 │                                                   │
│           │ are integer values for the various Criteria       │                                                   │
│           │ listed.                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Criterion │ Select an integer corresponding to the failure    │                                                   │
│           │ criterion to be applied. (Integer; no Default) Up │                                                   │
│           │ to three failure criteria may be specified for    │                                                   │
│           │ each MID.                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │ For maximum stress criterion. (See Remark 3.)     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2                                                 │ For maximum strain criterion. (See Remark 4.)     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 3                                                 │ For Hill failure criterion. (See Remark 5.)       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 4                                                 │ For Hoffman failure criterion. (See Remark 6.)    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 5                                                 │ Tsai-Wu failure criterion. (See Remark 7.)        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 7                                                 │ Hashin failure criterion. (See Remark 8.)         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 8                                                 │ Puck failure criterion. (See Remark 9.)           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 10                                                │ Hashin-Tape (See Remark )                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 11                                                │ Hashin-Fabric (See Remark )                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 13                                                │ User-defined criterion with user subroutine UFAIL │
│           │                                                   │ See Remark 11.                                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ See the respective remark for the meaning of      │                                                   │
│           │ material data.                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Stress limit i for criterion j. See Remarks for   │                                                   │
│           │ meaning and default.                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Strain limit i for criterion j. See Remarks for   │                                                   │
│           │ meaning and default.                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Failure index scale factor for criterion j. Used  │                                                   │
│           │ for criteria 3, 4, and 5. (Real > 0.0, or blank,  │                                                   │
│           │ Default = 1.0)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “PF”      │ Enter the character string “PF” to start          │                                                   │
│           │ progressive failure input data if ITYPE is 2 or   │                                                   │
│           │ 3.  If the defaults are to be taken, the PF line  │                                                   │
│           │ may be omitted. Only the first criterion uses the │                                                   │
│           │ PF line. (Character; no Default)                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ A1        │ Residual stiffness fraction.  For ITYPE=2, the    │                                                   │
│           │ stiffness is not reduced beyond this fraction of  │                                                   │
│           │ the initial stiffness. For ITYPE=3, this is the   │                                                   │
│           │ fraction of initial stiffness upon failure. (Real │                                                   │
│           │ > 0.0, Default = 0.01)                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ A2        │ Leave blank except for Criterion values listed    │                                                   │
│           │ below.                                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=7 (Hashin)  A2 is the factor for E2     │                                                   │
│           │ reduction due to matrix compression failure.      │                                                   │
│           │  Takes values between 0.0 and 1.0 and defaults to │                                                   │
│           │ 0.0 where E2 is reduced in the same way as for    │                                                   │
│           │ matrix tension.  A value of 1.0 leads to no E2    │                                                   │
│           │ reduction due to matrix compression failure.      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=8 (Puck) - Same as for Criterion=7      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=10 (Hashin Tape) - Same as for          │                                                   │
│           │ Criterion=7                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ A3        │ Leave blank except for the Criterion values       │                                                   │
│           │ listed below.                                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=7 (Hashin)  A3 is the factor for G12    │                                                   │
│           │ reduction relative to E2 reduction.  It takes     │                                                   │
│           │ values between 0.0 and 1.0 and defaults to 0.0    │                                                   │
│           │ where G12 is reduced in the same way as E2.  A    │                                                   │
│           │ value of 1.0 leads to no G12 reduction.           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=8 (Puck) - Same as for Criterion=7      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=10 (Hashin Tape) - Same as for          │                                                   │
│           │ Criterion=7                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ A4        │ Leave blank except for the Criterion values       │                                                   │
│           │ listed below                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=7 (Hashin)  A4 is the factor for E3     │                                                   │
│           │ reduction due to fiber failure.  It takes values  │                                                   │
│           │ between 0.0 and 1.0 and defaults to 0.0 where E3  │                                                   │
│           │ is reduced in the same way as E1.  A value of 1.0 │                                                   │
│           │ leads to an E3 reduction due to E2 only.  Values  │                                                   │
│           │ between 0.0 and 1.0 lead to a mixture of          │                                                   │
│           │ degradation from matrix and fiber failure.        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=8 (Puck) - Same as for Criterion=7      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=10 (Hashin Tape)- Same as for           │                                                   │
│           │ Criterion=7.                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ A5        │ Leave blank except for the Criterion values       │                                                   │
│           │ listed below                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=7 (Hashin)  A5 is the factor for G12    │                                                   │
│           │ reduction from fiber failure and takes values     │                                                   │
│           │ between 0.0 and 1.0,  It defaults to 0.0 where    │                                                   │
│           │ G12 reduces to matrix failure.  A value of 1.0    │                                                   │
│           │ leads to G12 reduction due to only fiber failure. │                                                   │
│           │  Values between 0.0 and 1.0 lead to a mixture of  │                                                   │
│           │ degradation from matrix and fiber failure.        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=8 (Puck) - Same as for Criterion=7      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Criterion=10 (Hashin Tape)  - Same as for         │                                                   │
│           │ Criterion=7                                       │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The MATF Bulk Data entry contains supplementary data for failure index calculation and failure prediction of the elastic materials with the same MID. If this capability is used in nonlinear analysis, MATF can activate a progressive failure process.
2. Progressive failure behavior for various materials can be simulated using the MATF Bulk Data entry. Failure occurs when any one of the specified failure criterion is satisfied; that is, the calculated failure index exceeds 1.0. Upon failure, the elastic moduli are reduced. This is done differently depending on failure criterion. The behavior up to the failure point is linear elastic. After failure the behavior is still elastic but with a different stiffness. The option should not be combined with other material nonlinearities like plasticity.
3. According to the Maximum Stress Criterion, six failure indices  ![bulkno04883.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04883.jpg?_LANG=enus)  are calculated as follows:

     ![bulkno04885.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04885.jpg?_LANG=enus) 
 
     ![bulkno04887.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04887.jpg?_LANG=enus) 
 
     ![bulkno04889.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04889.jpg?_LANG=enus)  

     ![bulkno04891.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04891.jpg?_LANG=enus)  

     ![bulkno04893.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04893.jpg?_LANG=enus)  

     ![bulkno04895.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04895.jpg?_LANG=enus)  

     where the indices (x, y, z) denote material coordinate direction.

     ![bulkno04897.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04897.jpg?_LANG=enus) : maximum allowable stress in the x-direction in tension. Real > 0.0, no Default.

     ![bulkno04899.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04899.jpg?_LANG=enus) : maximum allowable stress in the x-direction in compression. Real > 0.0 or blank; Default  ![bulkno04901.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04901.jpg?_LANG=enus)

     ![bulkno04903.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04903.jpg?_LANG=enus) : maximum allowable stress in the y-direction in tension. Real > 0.0, no Default.

     ![bulkno04905.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04905.jpg?_LANG=enus) : maximum allowable stress in the y-direction in compression. Real > 0.0 or blank; Default  ![bulkno04907.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04907.jpg?_LANG=enus)

     ![bulkno04909.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04909.jpg?_LANG=enus) : maximum allowable stress in the z-direction in tension. Real > 0.0; no Default

     ![bulkno04911.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04911.jpg?_LANG=enus) : maximum allowable stress in the z-direction in compression. Real > 0.0 or blank; Default  ![bulkno04913.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04913.jpg?_LANG=enus)

     ![bulkno04915.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04915.jpg?_LANG=enus) : maximum allowable in-plane shear stress. Real > 0.0 no Default

     ![bulkno04917.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04917.jpg?_LANG=enus) : maximum allowable yz shear stress. Real > 0.0 or blank; Default  ![bulkno04919.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04919.jpg?_LANG=enus)

     ![bulkno04921.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04921.jpg?_LANG=enus) : maximum allowable zx shear stress. Real > 0.0 or blank; Default  ![bulkno04923.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04923.jpg?_LANG=enus)

4. According to the Maximum Strain Criterion, 6 failure indices  ![bulkno04925.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04925.jpg?_LANG=enus)  are calculated as follows:

     ![bulkno04927.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04927.jpg?_LANG=enus) 

     ![bulkno04929.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04929.jpg?_LANG=enus) 

     ![bulkno04931.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04931.jpg?_LANG=enus)  

     ![bulkno04933.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04933.jpg?_LANG=enus)  

     ![bulkno04935.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04935.jpg?_LANG=enus)  

     ![bulkno04937.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04937.jpg?_LANG=enus)  

     where the indices (x, y, z) denote material coordinate direction.

     ![bulkno04939.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04939.jpg?_LANG=enus) : maximum allowable strain in the x-direction in tension. Real > 0.0, no Default.

     ![bulkno04941.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04941.jpg?_LANG=enus) : maximum allowable strain in the x-direction in compression. Real > 0.0 or blank; Default  ![bulkno04943.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04943.jpg?_LANG=enus)

     ![bulkno04945.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04945.jpg?_LANG=enus) : maximum allowable strain in the y-direction in tension. Real > 0.0, no Default.

     ![bulkno04947.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04947.jpg?_LANG=enus) : maximum allowable strain in the y-direction in compression. Real > 0.0 or blank; Default  ![bulkno04949.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04949.jpg?_LANG=enus)

     ![bulkno04951.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04951.jpg?_LANG=enus) : maximum allowable strain in the z-direction in tension. Real > 0.0; no Default

     ![bulkno04953.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04953.jpg?_LANG=enus) : maximum allowable strain in the z-direction in compression. Real > 0.0 or blank; Default  ![bulkno04955.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04955.jpg?_LANG=enus)

     ![bulkno04957.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04957.jpg?_LANG=enus) : maximum allowable shear strain in the xy plane. Real > 0.0 no Default

     ![bulkno04959.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04959.jpg?_LANG=enus) : maximum allowable shear strain in the yz plane. Real > 0.0 or blank; Default  ![bulkno04961.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04961.jpg?_LANG=enus)

     ![bulkno04963.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04963.jpg?_LANG=enus) : maximum allowable shear strain in the zx plane. Real > 0.0 or blank; Default  ![bulkno04965.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04965.jpg?_LANG=enus)

5. According to the Hill Failure Criterion, there is no distinction between tensile and compressive behavior. A single failure index is calculated as:

     ![bulkno04967.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04967.jpg?_LANG=enus)  

     where the indices (x, y, z) denote material coordinate direction.

     ![bulkno04969.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04969.jpg?_LANG=enus) : maximum allowable stress in the x-direction in tension. Real > 0.0, no Default.

     ![bulkno04971.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04971.jpg?_LANG=enus) : maximum allowable stress in the y-direction in tension. Real > 0.0, no Default.

     ![bulkno04973.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04973.jpg?_LANG=enus) : maximum allowable stress in the z-direction in tension. Real > 0.0; no Default

     ![bulkno04975.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04975.jpg?_LANG=enus) : maximum allowable in-plane shear stress. Real > 0.0 no Default

     ![bulkno04977.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04977.jpg?_LANG=enus) : maximum allowable yz shear stress. Real > 0.0 or blank; Default  ![bulkno04979.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04979.jpg?_LANG=enus)

     ![bulkno04981.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04981.jpg?_LANG=enus) : maximum allowable zx shear stress. Real > 0.0 or blank; Default  ![bulkno04983.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno04983.jpg?_LANG=enus)

6. The Hoffman Failure Criterion introduces distinction between tensile and compressive stresses to generalize the Hill Failure Criterion. A single failure index F is calculated as:

          See link for details.

7. The Tsai-Wu Failure Criterion is another generalization of the Hill Failure Criterion. A single failure index F is calculated as:
 
     ![bulkno05021.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05021.jpg?_LANG=enus)  

     where the indices (x, y, z) denote material coordinate direction.

     ![bulkno05023.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05023.jpg?_LANG=enus) : maximum allowable stress in the x-direction in tension. Real > 0.0, no Default.

     ![bulkno05025.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05025.jpg?_LANG=enus) : maximum allowable stress in the x-direction in compression. Real > 0.0 or blank; Default  ![bulkno05027.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05027.jpg?_LANG=enus)

     ![bulkno05029.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05029.jpg?_LANG=enus) : maximum allowable stress in the y-direction in tension. Real > 0.0, no Default.

     ![bulkno05031.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05031.jpg?_LANG=enus) : maximum allowable stress in the y-direction in compression. Real > 0.0 or blank; Default  ![bulkno05033.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05033.jpg?_LANG=enus)

     ![bulkno05035.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05035.jpg?_LANG=enus) : maximum allowable stress in the z-direction in tension. Real > 0.0; no Default

     ![bulkno05037.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05037.jpg?_LANG=enus) : maximum allowable stress in the z-direction in compression. Real > 0.0 or blank; Default  ![bulkno05039.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05039.jpg?_LANG=enus)

     ![bulkno05041.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05041.jpg?_LANG=enus) : maximum allowable in-plane shear stress. Real > 0.0 no Default

     ![bulkno05043.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05043.jpg?_LANG=enus) : maximum allowable yz shear stress. Real > 0.0 or blank; Default  ![bulkno05045.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05045.jpg?_LANG=enus)

     ![bulkno05047.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05047.jpg?_LANG=enus) : maximum allowable zx shear stress. Real > 0.0 or blank; Default  ![bulkno05049.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05049.jpg?_LANG=enus)

     ![bulkno05051.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05051.jpg?_LANG=enus) : interactive strength constant for the xy plane. Real; no Default

     ![bulkno05053.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05053.jpg?_LANG=enus) : interactive strength constant for the yz plane. Real; no Default

     ![bulkno05055.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05055.jpg?_LANG=enus) : interactive strength constant for the zx plane. Real; no Default

     The following restrictions apply to  ![bulkno05057.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05057.jpg?_LANG=enus) ,  ![bulkno05059.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05059.jpg?_LANG=enus)  and  ![bulkno05061.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05061.jpg?_LANG=enus) : 

     ![bulkno05063.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05063.jpg?_LANG=enus)       ![bulkno05065.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05065.jpg?_LANG=enus)       ![bulkno05067.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05067.jpg?_LANG=enus)

8. For the Hashin criterion four failure indices are calculated:

     ![bulkno05069.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05069.jpg?_LANG=enus)  

     ![bulkno05071.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05071.jpg?_LANG=enus)  

     ![bulkno05073.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05073.jpg?_LANG=enus)  

     ![bulkno05075.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05075.jpg?_LANG=enus)  

     where the indices (x, y, z) denote material coordinate direction.

     ![bulkno05077.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05077.jpg?_LANG=enus) : maximum fiber tensile stress. Real > 0.0, no Default.

     ![bulkno05079.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05079.jpg?_LANG=enus) : maximum fiber compressive stress. Real > 0.0 or blank; Default  ![bulkno05081.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05081.jpg?_LANG=enus)

     ![bulkno05083.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05083.jpg?_LANG=enus) : maximum matrix tensile stress. Real > 0.0, no Default.

     ![bulkno05085.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05085.jpg?_LANG=enus) : maximum matrix compressive stress. Real > 0.0 or blank; Default  ![bulkno05087.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05087.jpg?_LANG=enus) .

     ![bulkno05089.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05089.jpg?_LANG=enus) : maximum in plane shear stress. Real > 0.0 no Default

     ![bulkno05091.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05091.jpg?_LANG=enus) : maximum transverse shear stress; Default  ![bulkno05093.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05093.jpg?_LANG=enus)

9. For the Puck failure criterion five failure indices are calculated for the plane stress case and four for the general 3-D case.

     The first two failure indices are related to fiber failure and apply to both plane stress and 3-D case:

     Tensile fiber mode, for  ![bulkno05095.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05095.jpg?_LANG=enus)

     ![bulkno05097.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05097.jpg?_LANG=enus)  

     Compressive fiber mode, for  ![bulkno05099.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05099.jpg?_LANG=enus)

     ![bulkno05101.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05101.jpg?_LANG=enus)  

     For plane stress case, the next three failure indices are related to the matrix failure and are given as follows:

     ![bulkno05103.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05103.jpg?_LANG=enus)  

     ![bulkno05105.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05105.jpg?_LANG=enus)  

     ![bulkno05107.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05107.jpg?_LANG=enus)  

     where the parameters, R 1  and R 2  are as follows:

     ![bulkno05109.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05109.jpg?_LANG=enus)  

     ![bulkno05111.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05111.jpg?_LANG=enus)  

     Failure index for 3-D case is calculated based on stress,  ![bulkno05113.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05113.jpg?_LANG=enus)  and  ![bulkno05115.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05115.jpg?_LANG=enus)  on an arbitrary plane with inclination angle  ![bulkno05117.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05117.jpg?_LANG=enus) . The stresses are given by:

     ![bulkno05119.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05119.jpg?_LANG=enus)  

     ![bulkno05121.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05121.jpg?_LANG=enus)  

     ![bulkno05123.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05123.jpg?_LANG=enus)  

     For 3-D case, the next two failure indices related to matrix failure are given by:

     ![bulkno05125.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05125.jpg?_LANG=enus)  

     ![bulkno05127.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05127.jpg?_LANG=enus)  

     where P 1  and P 2  are given as:

     ![bulkno05129.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05129.jpg?_LANG=enus)  

     ![bulkno05131.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05131.jpg?_LANG=enus)  

     The following material parameters are used:

     ![bulkno05133.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05133.jpg?_LANG=enus)  = Maximum fiber tensile stress (Real > 0.0; no Default) 

     ![bulkno05135.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05135.jpg?_LANG=enus)  = Maximum fiber compressive stress (Real > 0.0 or blank; Default  ![bulkno05137.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05137.jpg?_LANG=enus) )

     ![bulkno05139.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05139.jpg?_LANG=enus)  = Maximum matrix tensile stress (Real > 0.0; no Default) 

     ![bulkno05141.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05141.jpg?_LANG=enus)  = Maximum matrix compressive stress (Real > 0.0 or blank; Default  ![bulkno05143.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05143.jpg?_LANG=enus) ) 
 
     ![bulkno05145.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05145.jpg?_LANG=enus)  = Maximum in-plane shear stress. (Real > 0.0; no Default)

     ![bulkno05147.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05147.jpg?_LANG=enus)  = p12c, slope 1 of failure envelope (Real > 0.0; no Default) 

     ![bulkno05149.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05149.jpg?_LANG=enus)  = p12t, slope 2 of failure envelope (Real > 0.0; Default  ![bulkno05151.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05151.jpg?_LANG=enus) ) 

     ![bulkno05153.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05153.jpg?_LANG=enus)  = p23c, slope 3 of failure envelope (Real > 0.0 or blank; Default; calculated internally; this is recommended for plane stress) 

     ![bulkno05155.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05155.jpg?_LANG=enus)  = p23t, slope 4 of failure envelope (Real > 0.0; Default  ![bulkno05157.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05157.jpg?_LANG=enus) , not used for plane stress)

     The Hashin-Tape criterion is a variant of the Hashin criterion adapted for tape type of materials. Four failure indices are calculated:

     ![bulkno05159.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05159.jpg?_LANG=enus)  

     ![bulkno05161.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05161.jpg?_LANG=enus)  

     ![bulkno05163.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05163.jpg?_LANG=enus)  

     ![bulkno05165.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05165.jpg?_LANG=enus) 

     ![bulkno05167.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05167.jpg?_LANG=enus)  = Maximum tape fiber tensile stress (Real > 0.0; no Default) 
     
     ![bulkno05169.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05169.jpg?_LANG=enus)  = Maximum tape fiber compressive stress (Real > 0.0 or blank; Default  ![bulkno05171.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05171.jpg?_LANG=enus) ) 

     ![bulkno05173.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05173.jpg?_LANG=enus)  = Maximum tape cross-fiber tensile stress (Real > 0.0; no Default) 

     ![bulkno05175.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05175.jpg?_LANG=enus)  = Maximum tape cross-fiber compressive stress (Real > 0.0 or blank; Default  ![bulkno05177.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05177.jpg?_LANG=enus) ) 

     ![bulkno05179.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05179.jpg?_LANG=enus)  = Maximum in-plane shear stress. (Real > 0.0; no Default) 

     ![bulkno05181.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05181.jpg?_LANG=enus)  = Maximum transverse shear stress. (Real > 0.0 or blank; Default  ![bulkno05183.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05183.jpg?_LANG=enus) ) 

     ![bulkno05185.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05185.jpg?_LANG=enus)  = Maximum z-x transverse shear stress. (Real > 0.0 or blank; Default  ![bulkno05187.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05187.jpg?_LANG=enus) ) 

     ![bulkno05189.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05189.jpg?_LANG=enus)  = Maximum fiber tensile stress for matrix compression (Real > 0.0 or blank; required if            ![bulkno05191.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05191.jpg?_LANG=enus) , otherwise not used) 

     ![bulkno05193.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05193.jpg?_LANG=enus)  = Contribution factor for  ![bulkno05195.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05195.jpg?_LANG=enus)  (Real 0.0 or 1.0; Default = 0.0)

     The Hashin-Fabric criterion is a variant of the Hashin criterion adapted for fabric type of materials. Six failure indices are calculated:

     ![bulkno05197.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05197.jpg?_LANG=enus)  

     ![bulkno05199.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05199.jpg?_LANG=enus)  

     ![bulkno05201.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05201.jpg?_LANG=enus)  

     ![bulkno05203.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05203.jpg?_LANG=enus)  

     ![bulkno05205.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05205.jpg?_LANG=enus)  

     ![bulkno05207.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05207.jpg?_LANG=enus)  

     ![bulkno05209.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05209.jpg?_LANG=enus)  = Maximum first fiber tensile stress (Real > 0.0; no Default) 

     ![bulkno05211.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05211.jpg?_LANG=enus)  = Maximum first fiber compressive stress (Real > 0.0 or blank; Default  ![bulkno05213.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05213.jpg?_LANG=enus) ) 

     ![bulkno05215.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05215.jpg?_LANG=enus)  = Maximum second cross-fiber tensile stress (Real > 0.0; no Default) 

     ![bulkno05217.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05217.jpg?_LANG=enus)  = Maximum second cross-fiber compressive stress (Real > 0.0 or blank; Default  ![bulkno05219.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05219.jpg?_LANG=enus) ) 

     ![bulkno05221.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05221.jpg?_LANG=enus)  = Maximum thickness tensile stress (Real > 0.0; no Default) 

     ![bulkno05223.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05223.jpg?_LANG=enus)  = Maximum thickness compressive stress ((Real > 0.0 or blank; Default =  ![bulkno05225.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05225.jpg?_LANG=enus) ) 

     ![bulkno05227.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05227.jpg?_LANG=enus)  = Maximum in-plane shear stress. (Real > 0.0; no Default) 

     ![bulkno05229.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05229.jpg?_LANG=enus)  = Maximum transverse shear stress. (Real > 0.0 or blank; Default  ![bulkno05231.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05231.jpg?_LANG=enus) ) 

     ![bulkno05233.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05233.jpg?_LANG=enus)  = Maximum z-x transverse shear stress. (Real > 0.0 or blank; Default  ![bulkno05235.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05235.jpg?_LANG=enus) ) 

10. A MATTF entry with the same MID as MATF may be used to specify the temperature variation of the failure criterion values.
11. User subroutine UFAIL is used along with option MATUDS.
12. In SOL 400, MATF is only supported for elements with property extensions. This implies that for such elements, PBAR / PBARL, PBEAM / PBEAML, PCOMP / PCOMPG, PROD, PSHEAR, PSHELL, PLPLANE and PSOLID should be associated with PBARN1, PBEMN1, PSHLN1, PRODN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively. Note that, prior to MD Nastran 2010, if the property extensions were missing, then the MATF data was not considered in the element's formulation. If the property extensions are missing, they are automatically added with default settings by the program unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.

     For non-composite material with MATF, only the first failure criteria is calculated and its failure index is outputted in NLOUT.

13. For the primary format, if only one criterion is needed and no data is required on the 3rd line, it can be omitted. If more than one criterion is needed, all 3 lines are required except for the last one. If the third line of the last one is not required, it may be omitted.
14. Stress limits such as ST, SC, SS,  ![bulkno05237.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05237.jpg?_LANG=enus) ,  ![bulkno05239.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05239.jpg?_LANG=enus) ,  ![bulkno05241.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05241.jpg?_LANG=enus) ,  ![bulkno05243.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05243.jpg?_LANG=enus)  in the MAT1, MAT2 and MAT8 entries are not used in SOL 400.
15. Stress and/or strain allowables in all directions should be defined if the default is not appropriate. Be sure not to set some of these values to low numbers.
16. If MAT8 with Hashin is used in SOL 400 run with PSLDN1 then Hashin FT will be ignored with an appropriate warning message to include MATF instead.
