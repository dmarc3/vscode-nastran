## [ABINFL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ABINFL.xhtml) - Inflator Model to be Used With GBAG or COUPLE Entries

Defines an inflator model suited for airbag analyses. The inflator model is defined as part of the GBAG or COUPLE surface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABINFL  CID     INFID   SUBID   INFTYPE INFTYPIDCOEFF   COEFFV                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABINFL  201     1       120     INFLHB  11              0.012                   
```
```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CID       │ Unique number of a ABINFL entry. (Integer > 0;    │                                                   │
│           │ Required)                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ INFID     │ Number of a set of ABINFL entries NFID must be    │                                                   │
│           │ referenced from a GBAG or COUPLE entry. (Integer  │                                                   │
│           │ > 0; Required)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SUBID     │ Number of a BSURF, BCBOX, BCPROP, BCMATL or       │                                                   │
│           │ BCSEG, which must be a part of the as defined on  │                                                   │
│           │ the GBAG or COUPLE entry. (Integer > 0; Required) │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ INFTYPE   │ Defines the type of inflator. (Character;         │                                                   │
│           │ Required)                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ INFLTR                                            │ The INFLTR logic is used to model inflators in an │
│           │                                                   │ air bag.                                          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ INFLHB                                            │ The INFLHB logic is used to model hybrid          │
│           │                                                   │ inflators in an air bag.                          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ INFLCG                                            │ The INFLCG logic models a cold gas inflator.      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ INFLTNK                                           │ The INFLTNK logic models the inflator properties  │
│           │                                                   │ (mass flow rate and inflator gas temperature)     │
│           │                                                   │ calculated from the empirical results.            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ INFTYPID  │ Number of the entry selected under INFTYPE, for   │                                                   │
│           │ example, INFLTR,INFTYPID. (Integer > 0; Required) │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COEFF     │ Method of defining the area coefficient.          │                                                   │
│           │ (Character, CONSTANT)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ The area coefficient is constant and specified on │
│           │                                                   │ COEFFV.                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                             │ The area coefficient varies with time. COEFFV is  │
│           │                                                   │ the number of a TABLED1 entry giving the          │
│           │                                                   │ variation with time.                              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COEFFV    │ The area coefficient or the number of a TABLED1   │                                                   │
│           │ entry depending on the COEFF entry. (0.0 < Real < │                                                   │
│           │ 1.0 or 1 > 0)                                     │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. The INFLTR or INFLHB inflator geometry and location is defined by a BSURF, BCBOX, BCPROP, BCMATL or BCSEG. The area of the hole through which the gas enters is equal to the area of the subsurface multiplied by COEFFV. A value of COEFFV = 1.0 will open up the complete subsurface area, while a value of COEFFV = 0.0 will result in a closed inflator area with no inflow.

2. This allows for setting up the exact same model for either a uniform pressure model or an Euler Coupled model. This makes it possible to set up the model using the switch from full gas dynamics to uniform pressure (GBAGCOU).

