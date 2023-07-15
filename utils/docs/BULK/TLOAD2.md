## [TLOAD2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TLOAD2.xhtml) - Transient Response Dynamic Excitation, Form 2

Defines a time-dependent dynamic excitation or enforced motion of the form

![bulktuv08057.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08057.jpg?_LANG=enus)  

for use in a transient response problem, where  ![bulktuv08059.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08059.jpg?_LANG=enus)

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TLOAD2  SID     EXCITEIDDELAY...TYPE    T1      T2      F       P               
        C       B       US0     VS0                                             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TLOAD2  4       10      5.0             2.1     4.7     12.0                    
        2.0                                                                     
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. See Remarks 1. and 6. (Integer > 0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCITEID  │ Identification number of a static load set or a DAREA or SPCD entry set or a thermal load set (in  │
│           │ heat transfer analysis) that defines .  See Remarks 2. and 3. (Integer > 0)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAYI    │ Identification number of DELAY Bulk Data entry that defines time delay . See Remark 5.             │
│           │ (Integer > 0 or blank)                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELAYR    │ Value of time delay  that will be used for all degrees-of-freedom that are excited by this dynamic │
│           │ load entry. See Remark 5. (Real or blank)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Defines the type of the dynamic excitation.  See Remarks 2. and 3. (Integer; character or blank;   │
│           │ Default = 0)                                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T1        │ Time constant.  (Real > 0.0)                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T2        │ Time constant.  (Real; T2 > T1)                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F         │ Frequency in cycles per unit time.  (Real > 0.0; Default = 0.0)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P         │ Phase angle in degrees.  (Real; Default = 0.0)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Exponential coefficient.  (Real; Default = 0.0)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Growth coefficient.  (Real; Default = 0.0)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ US0       │ Factor for initial displacements of the enforced degrees-of-freedom. See Remarks 9., 11. and 15.   │
│           │ (Real; Default = 0.0)                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VSO       │ Factor for initial velocities of the enforced degrees-of-freedom. See Remarks 10., 11. and         │
│           │ 15.(Real; Default = 0.0)                                                                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
