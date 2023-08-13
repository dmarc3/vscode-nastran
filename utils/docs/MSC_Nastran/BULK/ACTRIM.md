## [ACTRIM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACTRIM.xhtml) - ACTRAN Trimmed Material Matrices for SOL 108/111

Defines ACTRAN trimmed material matrices.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACTRIM  NAME    UNIT1   UNIT2   SCLR    SCLI                                    
```

#### Example(s):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACTRIM  FLOOR   31      32      2.0     0.5                                     
```

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field │ Context                                                                                            │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME  │ Name of the ACTRAN trimmed material matrices. See Remark 1. (One to eight alphanumeric characters, │
│       │ the first of which is alphabetic)                                                                  │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNIT1 │ Fortran unit number of mapped data from ACTRAN. See Remark 2. (Integer > 0)                        │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNIT2 │ Fortran unit number of property matrices from ACTRAN. See Remark 2. (Integer > 0)                  │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCLR  │ The real part of complex scale factor to be multiplied to ACTRAN matrices. (Real; Default = 1.0)   │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCLI  │ The imaginary part of complex scale factor to be multiplied to ACTRAN matrices. (Real; Default =   │
│       │ 0.0)                                                                                               │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. ACTRAN trimmed material matrices defined by this entry will be used for frequency response analysis if it is selected via the Case Control ACTRIM = NAME.
2. The following type of ASSIGN should be specified in the FMS section with the vacant unit number (see ASSIGN statements). The unit number cannot be selected doubly.

```nastran
ASSIGN INPUTT2=’ACTRAN_trimmed.f70’ UNIT=31
ASSIGN INPUTT4=’ACTRAN_trimmed.op4’ UNIT=32
```

3. Refer the ACTRAN manual for the details of exportation of the trimmed material matrix data for Nastran.
