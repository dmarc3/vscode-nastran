## [MATDIGI](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MATDIGI.xhtml) - Material Digimat

Defines material data for the advanced composites with Digimat from e-Xstream engineering (SOL 400 only). For more information about e-Xstream engineering and Digimat, please contact support@e-xstream.com or consult   http://www.e-xstream.com/

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATDIGI MID     UDID                                    RHO                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATDIGI 5       10                                      3000.                   
```

```text
┌───────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                       │
├───────────┼───────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0) │
├───────────┼───────────────────────────────────────────────┤
│ UDID      │ References UDNAME entry (Required, Integer>0) │
├───────────┼───────────────────────────────────────────────┤
│ RHO       │ Density (Real>0.0 or blank)                   │
└───────────┴───────────────────────────────────────────────┘
```

#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.
2. SOL400 uses only the MID, UDID and RHO entries. All other entries are ignored by SOL400.
3. The entry UDSESV is required input to define the number of state variables which will be used by MATDIGI. The number of state variables (NSTATS) must be larger than 1.
4. License feature NASTRAN_DIGIMAT must be present to use this feature. For parallel computations, NASTRAN_DIGIMAT_DMP must be present.
5. The use of MATDIGI is limited to shell and solid elements.
6. MATDIGI should not be used in SOL 400 perturbation steps.
