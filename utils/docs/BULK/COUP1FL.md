## [COUP1FL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COUP1FL.xhtml) - Coupling Surface Failure

Defines the surrounding variables when a segment of a coupling surface fails. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUP1FL CFID    RHO     SIE     XVEL    YVEL    ZVEL    PRESSUREMATERIAL        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUP1FL 3       1.225   204082. 900.                                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ CFID      │ Unique ID of a COUP1FL entry referenced from the COUPLE entry. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Surrounding density. See Remark 2. (Real > 0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ SIE       │ Surrounding specific internal energy. See Remark 2. (Real)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ XVEL      │ Surrounding x-velocity. See Remark 2. (Real)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ YVEL      │ Surrounding y-velocity. See Remark 2. (Real)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ ZVEL      │ Surrounding x-velocity. See Remark 2. (Real)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ PRESSURE  │ Surrounding pressure. See Remark 4. (Real)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ MATERIAL  │ MATDEUL ID. Only used when the multi-material Euler solver is active. (Blank)          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry can only be used in combination with DYPARAM,FASTCOUP, ,FAIL and with either the HYDRO, MMHYDRO or MMSTREN Euler Solver. For restrictions on the use of COUP1FL refer to param,flow-method.  The coupling surface failure is associated with the element failure of the structure to which the surface is connected. Therefore, you have to define a failure model for the structure for the entry to take effect in the analysis.
2. For the first order Euler solvers no restriction apply to the values of the surrounding variables. For the Roe solver at least one of the surrounding variables should be defined. The default value of the density (RHO) will be set equal to the reference density as defined on the MATDEUL entry. By default, the other variables (SIE, XVEL, YVEL and ZVEL) are set equal to zero.
3. The coupling surface must only consist of CQUAD and/or CTRIA elements.
4. The field PRESSURE has to be left blank in combination with the Roe solver.
5. In combination with multi-material Euler only outflow of material is allowed. Each material in an outflow Euler element is transported. The materials are transported in proportion to their relative volume fractions.
