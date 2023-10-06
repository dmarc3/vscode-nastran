## [TRIMGRP (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TRIMGRP.Case.xhtml) - Selection of Trim Component(s)

Selects a set of trim components for analysis.

#### Format:

![casecontrol4a01424.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01424.jpg?_LANG=enus)

#### Example:

```nastran
TRIMGRP=101
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALLTRMC   │ Process all TRMCs defined under 'BEGIN BULK TRMC=trimid' regardless if it is been selected in sid. │
│           │ This is the default option.                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SLTTRMC   │ Process only those TRMCs whose ID is selected in sid. It can be equal to or less than what are     │
│           │ been defined under 'BEGIN BULK TRMC=trimid'.                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sid       │ Set identification of a previously appearing SET command or TRIMID. (Integer>0).                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ All trim components present in the model are included in the analysis.                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ This is the default of TRIMGRP. No trim component is involved in the analysis.                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. TRIMGRP is used to select a group of trim components for analysis, including the calculation of trim component boundary coupling matrices.:
2. PEM capability is available in SOL 108, SOL 111 and SOL 200 with analysis=mfreq.
3. SUBCASEs without TRIMGRP will have the equivalent effect of TRIMGRP=none even with the presence of 'BEGIN TRMC' in the deck.
4. To run PEM job with multiple processors, additional information is available in 'Running PEM jobs' section of   in the   MSC Nastran Installation and Operations Guide .
5. For restart PEM job, TRIMGRP must remain the same as cold start PEM job and no changes to any TRMC should be observed. Otherwise, the PEM job should be run as cold start.
6. Collapsed logic is introduced to improve performance of large PEM jobs satisfy following requirements:
    - Same TRIMGRP for all SUBCASEs and
    - same master frequencies for all TRMCs. The activation of collapsed logic is automatic if requirements are met. With collapsed logic activated, restart job is restricted to the same TRIMGRP as cold start.
7. Following TRIMGRP case control commands have same effect which is to process all defined TRMCs:
    - TRIMGRP = ALL
    - TRIMGRP(alltrmc)=ALL
    - TRIMGRP(slttrmc)=ALL
8. If TRIMGRP is used in multiple SUBCASEs, SLTTRMC/ALLTRMC on TRIMGRP of above subcase level or first subcase will be utilized. SLTTRMC/ALLTRMC on TRIMGRP of second subcase and onwards will be ignored. Note that SLTTRMC on TRIMGRP of first subcase may be ignored if the union of all TRIMGRP means ALL TRMCs.
