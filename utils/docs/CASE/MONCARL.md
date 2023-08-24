## [MONCARL (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MONCARL.Case.xhtml) - Control for Monte-Carlo simulation

Control for Monte-Carlo simulation using the non-parametric variability method (NPVM). This Case Control command can be used in SOL 111 only.

#### Format:

```nastran
MONCARL([NSAMPLE=m],[SEED=k],[OFFD= r])= n
```

#### Example:

```nastran
MONCARL(NSAMPLE=100)=5 
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSAMPLE = m │ Specifies the number of random samples, m ( Integer >=0, Default = 0).                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEED = k    │ Specifies the random number generator seed, k (Integer > 0, Default = 777).                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFD = r    │ Specifies the scale factor for off-diagonal entries of the random matrix, r (Real, Default = 1.0). │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n           │ Set identification number of a MONCARL Bulk Data entry (Integer > 0).                              │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one MONCARL command may appear in the Case Control Section and should appear above all SUBCASE commands.
2. Keeping in mind the size and the naively parallel nature of Monte-Carlo problem typical simulation would be run in a parallel mode. The parallel DMP simulation is restricted to Multi-Master mode in order to get a good scalable performance.  Multi-Master mode can be specified using "RUNOPT=MULTIPAR", in "DOMAINSOLVER" Executive Control statement, e.g.:

```nastran
DOMAINSOLVER ACMS (PARTOPT=DOF, RUNOPT=MULTIPAR)
```

3. Running the Monte-Carlo simulation in Nastran would result in a concatenated OP2, HDF5 and PCH file containing the response results of each random sample of Monte-Carlo simulation. Each random sample would appear as a unique subcase in the OP2, HDF5 and PCH file.
4. PLT Viewer (provided with Nastran) can be used to read the result of Monte-Carlo simulation to generate meaningful response statistics. Currently the PLT Viewer can only read HDF5 and “PCH files in SORT 1 format” (not OP2).
5. HDF5 is the recommended output method for reading into PLT Viewer. Use NASTRAN system cell (702) HDF5=1 to request HDF5 output.
