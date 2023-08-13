## [TLOAD1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TLOAD1.xhtml) - Transient Response Dynamic Excitation, Form 1

Defines a time-dependent dynamic load or enforced motion of the form

![bulktuv08037.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08037.jpg?_LANG=enus)

for use in transient response analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TLOAD1  SID     EXCITEIDDELAY...TYPE    TID/F   US0     VS0                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TLOAD1  5       7       15      LOAD    13                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Integer > 0) See Remarks 1. and 5.                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCITEID  │ Identification number of a static load set or a DAREA or SPCD entry set or a thermal load set (in  │
│           │ heat transfer analysis) that defines . See Remarks 2. and 3. (Integer > 0)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAYI    │ Identification number of DELAY Bulk Data entry that defines time delay . See Remark 8. and 13.     │
│           │ (Integer > 0 or blank)                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAYR    │ Value of time delay  that will be used for all degrees-of-freedom that are excited by this dynamic │
│           │ load entry. See Remark 8. and 13. (Real or blank)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Defines the type of the dynamic excitation.  See Remarks 2. , 3. and 12. (Integer, character or    │
│           │ blank; Default = 0)                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID/F     │ Identification number of TABLEDi entry that gives .  (Integer > 0). Value of F to be used for all  │
│           │ times.  (Real, non-zero)                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ US0       │ Factor for initial displacements of the enforced degrees-of-freedom. See Remarks 9., 11. and 13.   │
│           │ (Real; Default = 0.0)                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VS0       │ Factor for initial velocities of the enforced degrees-of-freedom. See Remarks 10., 11. and 13.     │
│           │ (Real; Default = 0.0)                                                                              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
