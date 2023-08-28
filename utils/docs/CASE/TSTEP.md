## [TSTEP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TSTEP.Case.xhtml) - Transient Time Step Set Selection

Selects integration and output time steps for linear or nonlinear transient analysis.

#### Format:

```nastran
TSTEP=n
```

#### Example:

```nastran
TSTEP=731
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a TSTEP or  Bulk Data entry (Integer  > 0). │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A TSTEP entry must be selected to execute a linear transient analysis (SOLs 109 or 112) and  for a nonlinear transient analysis (SOLs 129 and 159).
2. A  entry must be selected in each subcase to execute a nonlinear transient problem.
3. For the application of time-dependent loads in modal frequency response analysis (SOLs 111 and 146), the TSTEP entry must be selected by the TSTEP command. The time-dependent loads will be recomputed in frequency domain by a Fourier transform.
4. In one subcase or STEP for SOL 400, users should only specify one of TSTEP, TSTEPNL or NLSTEP.
5. If NLSTEP specified, TSTEP command will be ignored.
