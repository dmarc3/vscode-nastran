## [RKSCHEME](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.RKSCHEME.xhtml)

Default = Remark  1. , SOL 700 only

Defines the type of time-integration scheme used in the Riemann solution-based Euler solvers.

#### Format:

```nastran
PARAM,RKSCHEME,NUMBER
```

#### Example:

```nastran
PARAM,RKSCHEME,3
```

```text
┌────────┬─────────────────────────────────────────────┐
│ NUMBER │ Number of Runge-Kutta stages. (Integer > 0) │
└────────┴─────────────────────────────────────────────┘
```
#### Remarks:

1. This parameter can be used in combination with the original Roe solver and the improved full 2 nd  order fluid- and gas Euler solver. The default number of stages depends on the spatial accuracy of the solution scheme. One stage is used for first order spatial accuracy, and three stages for second order spatial accuracy.

2. It is recommended that the user leave the setting to the default values as defined depending on the selected spatial accuracy of the solution.

3. It has been found that in some cases with fluid flows, it may be necessary to manually limit the time step to a fixed and lower value than the scheme determines. These occasions are noticeable when you view a contour plot of the pressure. The user may find that the pressure field looks like a checkerboard. This is then caused by a numerical instability due to a time step that is too large for the fluid flow. The face fluxes are always correct but the element values get decoupled due to the time integration instability. Lowering the time step to about half the maximum value the scheme determines solves this problem. Please note that this significantly slows down the computation! Since this problem rarely occurs we have chosen not to automatically limit the time step to a lower value for performance reasons. However, the user needs to be aware that the analysis may exhibit the aforementioned behavior.

