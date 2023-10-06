## [ESLMPC1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ESLMPC1.xhtml)

Default = 0

This parameter applies only to the ESLNRO jobs with 3D contact. Its default has different meanings depending on the type of contact applications. As the default, for a glued contact ESLNRO job, a linear response optimization task will include a set of MPC entries that are created from the nonlinear analysis. For a touching contact ESLNRO job, the linear response optimization task will not include the MPC entries by default. Setting ESLMPC1 to a positive number will turn on the MPC inclusion.

```text
┌───┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ 1 │ uses the MPC entries created from the nonlinear analysis at the converged nonlinear analysis. │
├───┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2 │ uses the MPC entries created at the beginning of the very first nonlinear analysis.           │
└───┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
