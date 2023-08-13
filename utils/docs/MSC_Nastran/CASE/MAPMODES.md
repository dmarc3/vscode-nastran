## [MAPMODES (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MAPMODES.Case1.xhtml) - Perform mode mapping between two runs

Instructs MSC Nastran to either write the modes from the current run to an op2 file or map the modes from the current run to those from a prior run.

#### Format:

![casecontrol4a01100.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01100.jpg?_LANG=enus)  

#### Example:

```nastran
MAPMODES(BASELINE) = 50
MAPMODES(MAPPING) = 51
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BASELINE  │ The current run is a baseline run and the modes from this run will be written using OUTPUT2 to │
│           │ UNITNO.                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAPPING   │ The current run will perform mode-mapping using the modes written using OUTPUT2 to UNITNO in a │
│           │ previous run.                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNITNO    │ Unit number of an OUTPUT2 or INPUTT2 file assigned to the current run.                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Mode mapping is performed in two steps. In the initial (BASELINE) run, the mode shapes and eigenvalue table are written to an OUTPUT2 file. Otherwise, processing in the baseline run is unchanged, except that the CLEANVEC parameter is automatically set to YES to make the eigenvectors from repeated roots 'clean' and repeatable.
2. In the second step, the eigenvalue problem is solved, then the baseline modes are read in from UNITNO and cross-orthogonality is used to map the new modes into the same order as the baseline modes. Once again the CLEANVEC parameter is set to YES in this run to make the eigenvectors for repeated roots 'clean'.
3. Two parameters are used in the cross-orthogonality, MINORTHO (default=0.9) and MINORTHR (default = 0.7). These are the criteria used in the mode-mapping. In the original modes, the cross-orthogonality between a baseline mode and new mode must be greater than or equal to MINORTHO in order for the mapping to occur. Residual vectors are not real modes, so the cross-orthogonality requirement on those is MINORTHR.
4. If the mode mapping fails, the run will terminate with a fatal message containing the values of cross orthogonality calculated which could help guide MINORTHO and MINORTHR parameters choices.
5. If the mode mapping succeeds, an additional eigenvalue summary table will be printed with the subheading AFTER MODE MAPPING HAS BEEN PERFORMED. In this table, the MODE NO is the mode number in the baseline run and the EXTRACTION ORDER is the mode number in the mapping run. Note that the natural frequencies of the modes may not be in ascending order, as it is possible that the mode order may change with model changes.
