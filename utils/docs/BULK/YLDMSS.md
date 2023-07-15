## [YLDMSS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDMSS.xhtml) - Multi-Surface Yield Model for Snow

Defines the yield model for snow material. This entry must be used in combination with MATDEUL, EOSPOL and SHREL. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDMSS  YID     KC      T       CC      AC      BC      FC      FTU             
        7       0.149   82      1E-5    0.09    0.2     0.99    82              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDMSS  ALP0    DS                                                              
        -0.37   0.0                                                             
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ YID       │ Unique yield model number referenced from a MATDEUL entry. (Integer > 0; Required)   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ KC        │ Parameter related to the angle of friction. (Real > 0; Required)                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ Equivalent value of the snow cohesion. see Remark 5. (Real > 0; Required)            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ CC        │ Shape of the yield surface. See Remark 4. (Real > 0; Required)                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ AC        │ Hardening parameter for compression. See Remark 4. (Real > 0; Required)              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ BC        │ Hardening parameter for compression. See Remark 4. (Real > 0; Required)              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ FC        │ Factor to avoid singularity. See Remark 4. (0 < Real < 1; Default = 0.99)            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ FTU       │ Hydrostatic tensile strength. See Remark 6. (Real > 0; Default = T/3)                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ ALP0      │ Initial compressive volumetric plasticity strain. See Remark 4. (Real < 0; Required) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ DS        │ Softening modulus. See Remark. (Real > 0; Default = 0.0)                             │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```
