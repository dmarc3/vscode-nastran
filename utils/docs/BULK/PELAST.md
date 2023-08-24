## [PELAST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PELAST.xhtml) - Frequency Dependent or Nonlinear Elastic Property

Defines the frequency dependent or nonlinear properties for a PELAS Bulk Data entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PELAST  PID     TKID    TGEID   TKNID                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PELAST  44      38                                                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches the identification number on a PELAS entry.     │
│           │ (Integer > 0)                                                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ TKID      │ Identification number of a TABLEDi entry that defines the force per unit displacement vs.   │
│           │ frequency relationship. (Integer > 0; Default = 0)                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ TGEID     │ Identification number of a TABLEDi entry that defines the nondimensional structural damping │
│           │ coefficient vs. frequency relationship. (Integer > 0; Default = 0)                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ TKNID     │ Identification number of a TABELDi entry that defines the nonlinear force vs. displacement  │
│           │ relationship. (Integer > 0; Default = 0)                                                    │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PELAST entry may only be referenced by CELAS1 or CELAS3 elements in the residual structure which do not attach to any omitted degrees-of-freedom.
2. For frequency dependent modal frequency response the modes are computed using the nominal Ki values as specified on the PELAS entry.
3. The nominal values are used for all analysis types except frequency response and nonlinear analyses. For frequency dependent modal frequency response the system modes are computed using the nominal Ki values. The frequency-dependent values are used at every excitation frequency. For nonlinear analysis the nominal values for Ki should agree with the initial slope of the nonlinear force-displacement relationship defined by the PELAST, or the results will be unpredictable.
4. The following table summarizes the usage PELAST entry in various solution sequences

     See link for table.

5. PELAST is used in SOL 108 and SOL 111 when TKID or TGEID is specified. It is used in SOL 106, SOL 129 and SOL 400 when TKIND is specified. It is ignored in all other solution sequences.
6. The CELAS1/3 elements linear force computation F=K(U1-U2), conflicts with the below figure, in that an obvious tension loading produces a compressive force.

     ![PELAST_convention_spring.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/PELAST_convention_spring.png?_LANG=enus)

     The PELAST, TKNID option, for this loading, internally uses the F=K(U2-U1) when computing the element tangent matrix.  This allows for tension only loading, the use of a single sided load-deflection curve to compute the element stiffness.

     For element material nonlinear force and stress output, the default PELAST, TKNID option, the sign convention used is F=K(U2-U1).

     For a user desiring that the material nonlinear force and strain output, be consistent with the linear CELAS1/3 elements, the Nastran system cell NASTRAN DELTAU=1 is provided.

     The tangent stiffness is still computed using F=K(U2-U1), but for nonlinear force and stress output the convention is F= - K(U2-U1).

     While the PELAST, TKNID default option is more consistent with the figure above, in general for U1>U2, a compressive force will result. When tension or compression may occur, then the load deflection curves must be two sided curves as shown in the above figure.
