## [ACLOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACLOAD.xhtml) - ACTRAN Acoustic Pressure Load Matrices for SOL 108/111

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACLOAD  SID     UNIT1   UNIT2   SCLR    SCLI    LSQID                           
```
#### Example(s):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACLOAD  101     41      42      1.5                                             
```
```text
┌───────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field │ Contests                                                                                         │
├───────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID   │ Set identification number. See Remark 1. (Integer > 0)                                           │
├───────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNIT1 │ Fortran unit number of mapped data from ACTRAN. See Remark 2. (Integer > 0)                      │
├───────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNIT2 │ Fortran unit number of property matrices from ACTRAN. See Remark 2. (Integer > 0)                │
├───────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCLR  │ The real part of complex scale factor to be multiplied to ACTRAN matrices. (Real; Default = 1.0) │
├───────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCLI  │ The imaginary part of complex scale factor to be multiplied to ACTRAN matrices. (Real; Default = │
│       │ 0.0)                                                                                             │
├───────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LSQID │ Load SeQuence IDentification number on an ACTRAN file with multiple load cases. (Integer > 0,    │
│       │ default=1).                                                                                      │
└───────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Dynamic excitation sets must be selected with the Case Control command DLOAD = SID for frequency response analysis.

2. The following type of ASSIGN should be specified in the FMS section with the vacant unit number (see ASSIGN statements). The unit number cannot be selected doubly.

```nastran
ASSIGN INPUTT2=’ACTRAN_pressure.f70’ UNIT=41
ASSIGN INPUTT4=’ACTRAN_pressure.op4’ UNIT=42
```

3. SID must be unique for all RLOAD1, RLOAD2, ACSRCE and ACLOAD entries.

4. Refer the ACTRAN manual for the details of exportation of the acoustic pressure load matrix data for Nastran.

5. The residual vectors for ACLOAD will not be computed.

6. Value of LSQID that is greater than the actual load cases in the ACTRAN file is a fatal error.

