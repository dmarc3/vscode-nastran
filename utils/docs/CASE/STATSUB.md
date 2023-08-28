## [STATSUB (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.STATSUB.Case.xhtml) - Static Solution Selection for Differential Stiffness

Selects the static solution to use in forming the differential stiffness for static analysis, buckling analysis, normal modes, complex eigenvalue, frequency response and transient response analysis.

#### Format:

![casecontrol4a01362.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01362.jpg?_LANG=enus)  

#### Examples:

```nastran
STATSUB=23
STAT=4
STATSUB(PREL)=7
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BUCKLING  │ Subcase ID number corresponding to static subcase of buckling or varying load (Default in buckling │
│           │ analysis).                                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRELOAD   │ Subcase ID number corresponding to static subcase of preload or constant load (Default in dynamic  │
│           │ analysis).                                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Subcase identification number of a prior subcase specified for static analysis (Integer  >  0).    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. STATSUB may be used in SOLs 101,103, 105, 107 through 112, 115, 116, 200 and SOL 400 (ANALYSIS = BUCKLING only in SOL 200 and SOL 400).
2. STATSUB must be specified in the same subcase that contains the METHOD selection for buckling or normal modes, CMETHOD for complex eigenvalue analysis, TSTEP for transient response, and FREQ for frequency response.
3. In SOL 105, if it is intended that results from the first static subcase are used to compute the differential stiffness, then the STATSUB command is not required. That is, the default for STATSUB is the first static subcase identification. In SOLs 101, 103 and 107 through 112, 115, and 116, STATSUB must reference a separate static subcase.
4. In dynamic analysis, only one STATSUB command may be specified in each dynamic subcase. In buckling analysis with a preload, both STATSUB (BUCKLING) and STATSUB(PRELOAD) must be specified in each buckling subcase. STATSUB(PRELOAD) is not supported in SOL 200 or SOL 400. Buckling Analysis with a preload is not supported in SOL 200 and SOL 400.
5. In dynamic analysis, any subcase that does not contain a CMETHOD command in SOLs 107 and 110, a FREQUENCY command in SOLs 108 and 111, and a TSTEP command in SOLs 109 and 112, will be treated as a static subcase.
6. SOL 200 supports linear buckling analysis only, but do not support post-buckling (nonlinear buckling analysis)
7. In versions prior to 2018, if it was desired to have a dynamic subcase  with  the effects of preload and another subcase  without  the effects of preload, then a static subcase with null load was required and its ID was referenced by STATSUB in the dynamic subcase  without  the effects of preload. In version 2018, STATSUB in the dynamic subcase  without  the effects of preload is no longer required. If the STATSUB is not removed and still references the static subcase with null load, then User Fatal Message 9244 will be issued.
