## [MCOHE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MCOHE.xhtml) - Interface Cohesive Zone Modeling Element Material Properties

Specifies material cohesive properties for a fully nonlinear element used to simulate the onset and progress of delamination in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MCOHE   MID     MODEL           TID                                             
        COHE    CRTOD   MAXOD   SNSR    EXP     VED     RRRD    SFC             
        SNER                                                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MCOHE   701     2               357                                             
        136.5   0.0     0.0     1.0     0.02    0.0             1.0             
```
```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ MID       │ Identification number of a MCOHE entry. (Integer  │                                         │
│           │ > 0) (See Remark 1.)                              │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ MODEL     │ (Integer > 0; Default = 1) (See Remark 3.)        │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ 1                                                 │ Bilinear model                          │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ 2                                                 │ Exponential model                       │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ 3                                                 │ Linear-exponential model                │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ -1                                                │ User Defined Subroutine (See Remark 2.) │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ TID       │ Table identifier for a combination of             │                                         │
│           │ TABLES1/TABLEST for cohesive energy vs            │                                         │
│           │ temperature. (Integer > 0; Default = 0)           │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ COHE      │ Cohesive energy. (Real > 0.0)                     │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ CRTOD     │ Critical opening distance. (Real > 0.0)           │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ MAXOD     │ Maximum opening displacement (bilinear model      │                                         │
│           │ only). (Real > 0.0)                               │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ SNSR      │ Shear Normal Stress Ratio. (Real > 0.0; Default = │                                         │
│           │ 1.0)                                              │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ EXP       │ Exponential decay factor (linear-exponential      │                                         │
│           │ model only). (Real > 0.0; Default = 1.0)          │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ VED       │ Factor for viscous energy dissipation. (Real >    │                                         │
│           │ 0.0; Default = 0.0)                               │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ RRRD      │ Reference rate of relative displacement. Used     │                                         │
│           │ only if . A value of 0.0 implies that the         │                                         │
│           │ reference rate will be automatically calculated.  │                                         │
│           │ (Real > 0.0; Default = 0.0)                       │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ SFC       │ Stiffening factor in compression. (Real > 0.0;    │                                         │
│           │ Default = 1.0)                                    │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ SNER      │ Shear Normal Energy Ratio. (Real > 0.0; Default   │                                         │
│           │ =1.0)                                             │                                         │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────┘
```
#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

2. User subroutine UCOHES is used. User must also use the MATUDS bulk data entry.

3. For details on model see Nonlinear User’s Guide (SOL 400).

