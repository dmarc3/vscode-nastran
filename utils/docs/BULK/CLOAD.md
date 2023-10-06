## [CLOAD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CLOAD.xhtml) - Static Load Combination for Superelement Loads (Superposition)

Defines a static load as a linear combination of previously calculated superelement loads defined by the LSEQ entry in nonlinear static analysis (SOLs 106 or 153).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CLOAD   CID     S       S1      IDV1    S2      IDV2    S3      IDV3    +       
+       S4      IDV4    -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CLOAD   25      1.0     25.0    10      -1.0    101     2.2-1   604     +       
+       -62.0   62                                                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Combination identification number.  (Integer > 0)                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ S         │ Scale factor.  (Real)                                                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Si        │ Scale factors.  (Real)                                                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDVi      │ Identification numbers of load vectors (EXCITEID of a selected LSEQ entry) calculated for a │
│           │ superelement loads entry.  (Integer > 0)                                                    │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The CLOAD entry must be selected in the residual solution subcases of the Case Control with CLOAD = CID and must be used if loads are applied to upstream superelements in SOL 106 or 153.
2. The load vector defined is given by  ![bulkc102618.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102618.jpg?_LANG=enus)
3. The IDVi   field refers to a previously calculated load vector for the superelement via the LSEQ approach.  That is, a LOADSET keyword must have been selected in Case Control that in turn refers to one or more LSEQ entries in the Bulk Data Section.  The IDVi refers to the EXCITEID of such LSEQ entries.  For more details, see the Case Control commands   Bulk Data entry and the  .
4. In the CID or IDV fields, a CLOAD entry may not reference an identification number defined by another CLOAD entry.
