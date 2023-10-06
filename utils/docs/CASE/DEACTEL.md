## [DEACTEL (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DEACTEL.Case.xhtml) - Elements to be Deactivated for SOL 400 Analysis

Indicates which DEACTEL Bulk Data entry is used to control the elements to be deactivated in a single physics job, or a particular physics pass of a coupled job. SOL 400 for NLSTATIC, and NLTRAN, as well Perturbation analyses only.

#### Format:

```nastran
DEACTEL=N
```

#### Example:

```nastran
DEACTEL=2
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ N         │ ID of a matching DEACTEL Bulk Data entry specifying the elements to be deactivated. │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Usage is limited to the first subcase (or prior to it), the first step or the first substep of a particular physics pass. Elements are deactivated at the start of the job or the start of the particular physics pass and remain deactivated for the entire job.
2. Elements deactivated can not be reactivated at later stage in the analysis.
