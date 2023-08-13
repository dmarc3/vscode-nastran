## [STOCHASTICS (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.STOCHASTICS.Case.xhtml) - Randomization of Model Parameters

Request randomization of all or selected subsets of model parameters.

#### Format:

![casecontrol4a01364.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01364.jpg?_LANG=enus)  

#### Examples:

```nastran
STOCHASTICS=10
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ All real values of C-entries, M-entries, P-entries, loading entries, and SPCD entries are to be │
│           │ randomized.                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a STOCHAS Bulk Data entry (Integer > 0).                           │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one STOCHASTICS command may appear in the Case Control Section and should appear above all SUBCASE commands.
2. The STOCHASTICS = n command may be used to request randomizing a set of analysis model parameters with user specified statistics. (See Remark 1 of the STOCHAS Bulk Data entry.)
3. The default (STOCHASTICS = all) randomizes all scalar analysis model parameters that are real values on the C-entries, M-Entries, P-entries, all loading entries, and SPCD entries with default coefficients of variance (0.05) and multipliers of standard deviations (m=3.).
4. This command will only invoke a single Nastran randomization run. Separate runs can be submitted to achieve different randomizations.
