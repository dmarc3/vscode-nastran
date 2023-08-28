## [MFREQUENCY (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MFREQUENCY.Case.xhtml) - Master Frequency Set Selection Frequency Response

Selects the set of forcing frequencies to be used in frequency analysis as master frequencies for K, B, and K4 matrix generation at each master frequency, in frequency dependent analysis.

#### Format:

![casecontrol4a01146.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01146.jpg?_LANG=enus)  ```

#### Example:

```nastran
MFREQ (TOL=.15)   ?   Nastran will generate a master frequency list with TOL=.15
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Linear    │ Linear interpolation will be used between master frequencies to compute K, B, and K4 matrices      │
│           │ found on selected Case Control FREQ entry. (Character, Default)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Log10     │ Log interpolation will be used between master frequencies to compute K, B, and K4 matrices found   │
│           │ on selected FREQ entry. (Character)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOL       │ For the default option AUTO, for frequency dependent TABLEDi entries associated with the presence  │
│           │ of any MAT1F, MAT2F, MAT8F, MAT9F entries or the combined presence of any MAT1F, MAT2F, MAT8F,     │
│           │ MAT9F entries and any PBUSHT, PELAST, PDAMPT entries a master frequency will be selected whenever  │
│           │ there is a TOL jump in any table value. A TOL=0.0 is the same as NOAUTO. (Real ≥0.0)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AUTO      │ For frequency dependent analysis associated with the presence of any MAT1F, MAT2F, MAT8F, MAT9F    │
│           │ entries or the combined presence of any MAT1F, MAT2F, MAT8F, MAT9F entries and any PBUSHT, PELAST, │
│           │ PDAMPT entries, Nastran will automatically, depending on associated frequency dependent TABLEDi    │
│           │ entries and the required Case Control FREQ=m entry, generate a series of master frequencies.       │
│           │ (Character, Default). If the user has supplied a Case Control MFREQ entry pointing to a FREQ,      │
│           │ FREQ1, or FREQ2 bulk data entry, Nastran will use the user supplied entry and its associated       │
│           │ frequency list.                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOAUTO    │ If the user has not supplied a MFREQ Case Control entry and the analysis meets the requirements of │
│           │ AUTO above, then NOAUTO will prevent the generation of master frequencies. In this case, the       │
│           │ required Case Control FREQ will be used for all frequencies. And all frequencies are considered    │
│           │ master frequencies. (Character)                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of FREQ, FREQ1, and FREQ2 Bulk Data entries. (Integer > 0)               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. Both direct frequency and modal frequency allow, through MAT1F, MAT2F, MAT8F, MAT9F, and PBUSHT, PELAST, PDAMPT entries frequency dependent analysis. The presence of any active MAT1F, MAT2F, MAT8F, or MAT9F entry or the combined presence of any MAT1F, MAT2F, MAT8F, MAT9F entries and any PBUSHT, PELAST, PDAMPT entries a master frequency will initiate the master frequency feature in frequency analysis.
2. MFREQ should be above or in the first subcase.
3. The K, B, and K4 matrices, at master frequencies, are formed in the standard way, using material and property values at the associated current master frequency.
4. For frequencies selected between master frequencies, interpolation of the K, B, and, K4 matrices are performed. These interpolated frequencies are selected using the required Case Control FREQ=m entry.
5. Interpolation between master frequencies K lm  and K 2m i is K  = (d  K lm ij + d  K 2m ij)/(d  + d2) where.
     For Linear:
     d1 = (f-f1);    d2 = (f2 – f)
     For Log10:
     d1 = (log10(f) – log10(f1));   d2 = (log10(f2) – log10(f))
6. For master frequencies there is full displacement, velocity, acceleration type data recovery as well as full element force and stress type data recovery.
7. For interpolated frequencies, there is only (a-set) or modal (h-set) displacement, velocity, acceleration type data recovery. Because, the solution of interpolated frequencies is based on interpolated K, B, and K4, the element stress and force data will be less accurate as the interpolated frequency gets farther from a master frequency. This is, also true, for fluid data recovery such as Panel Participation Factors.
     If accurate element results are required at specific frequencies, then MFREQ=n should be used to define Master frequencies. If accurate element results are required at all frequencies, then the user should either set MFREQ to the same set as defined on the Case Control Command FREQ=n or set MFREQ=NOAUTO.
8. For modal frequency analysis, associated with master frequencies, residual vector methods for viscous and structural damping have been greatly enhanced and orthogonalization techniques are employed which require the removal of free – free modes. For this reason the structure must be statically constrained with the use of SUPORT entries. Case Control selectable SUPORT1 entries may also be used.
9. For preloading (STATSUB), with the presence of any MAT1F, MAT2F, MAT8F, MAT9F entries or the combined presence of any MAT1F, MAT2F, MAT8F, MAT9F entries and any PBUSHT, PELAST, PDAMPT entries, a fatal message will be issued.

```text
     *** USER FATAL MESSAGE 22711 (MTMD56)
         FREQUENCY case control command missing for frequency response analysis.
         STATSUB static loading is not currently supported for frequency dependent material/property.
```

10. PARAM, NMNLFRQ, REAL (Default=0.0) allows users to select material or property values for frequency dependent materials or properties at a desired frequency other than the “nominal” values specified on the MATi or PBUSH, PCOMP, PCOMPG, PDAMP, or PELAS entries. These values are used in determining the eigenvalue solution used in the modal frequency analysis.
11. If a user supplies a FREQ, FREQ1, or FREQ2 entry with a 0.0 value of forcing frequency the following message will be issued:

```text
     *** USER WARNING MESSAGE 22714 (SUBDMAP MFREQRS)
     Forcing frequency value of 0.0 detected, nominal (initial) material properties used.
     The rational for this selection is that 0.0 Hz is a static solution and SOL 101 would use material nominal.
```

12. Some examples of interaction between MFREQ=AUTO and an always required FREQ=m and interpolated values are as follows:
     If frequency dependent TABLEDi entries associated with the presence of  any MAT1F, MAT2F, MAT8F, MAT9F entries or the combined presence of any MAT1F, MAT2F, MAT8F, MAT9F entries and any PBUSHT, PELAST, PDAMPT entries are detected, and the user has not specified any MFREQ Case Control entries, then Nastran will automatically scan the TABLEDi entries. Nastran does this by using the required FREQ=m entry and for any TABLEDi where there is a TOL jump between two consecutive FREQ=m frequencies determining a “Master frequency”.

```nastran
SOL111
CEND
FREQ = 10   ?   Required
...
BEGIN BULK
FREQ1, 10, 10.0, 5.0, 78
...
MAT1,  2, 35.46,      , .49, 1.1-9
MAT1F, 2, 101,    103, 102   ?  All 3 Tables for E, G, NU required.
...
TABLED1, 101,
       ,.01, 7.3941, 50., 18.017, 100., 24.386, 200., 35.46,
       ,300., 44.45, 400., 51.264, 500., 56.321,  endt
tabled1 , 102
         ,.01, 0.49, 1000., 0.49,  endt
tabled1 , 103
       ,.01, 2.481, 50., 6.076, 100., 8.1832, 200., 11.899
       ,300., 14.916, 400., 17.203, 500., 18.90,  endt
tabled1, 200   ?   B ased   on say an active PBUSHT entry.
       ,.01, 0.4, 50., 0.65, 100., 0.78,200., 0.92
       ,300., 0.99, 400., 1.03, 500., 1.07, endt
```

Internally Nastran Generates in Case Control:

```nastran
MFREQ=11
```

Internally Nastran Generates in “Bulk Data”:

```nastran
FREQ, 11, 10., 15., 20., 30., 40., 50., 65.,
    ,85., 105., 130., 160., 190., 230., 275., 330.,
    ,400.
```

Where for the above, Nastran has based on the user supplied FREQ=10 Case Control entry, scanned all the active user supplied TABLEDi entries, and whenever there is a jump in table value of 10% (default TOL), it creates an entry into the master frequency list MFREQ=11.
MFREQ will issue the message:

```text
***AUTOMATIC MASTER FREQUENCY LIST HAS BEEN SELECTED FOR SUBCASE ID     1:
FREQ, 11, 10., 15., 20., 30., 40., 50., 65.,
    ,85., 105., 130., 160., 190., 230., 275., 330.,
    ,400.
```
