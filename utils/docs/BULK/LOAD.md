## [LOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LOAD.xhtml) - Static Load Combination (Superposition)

Defines a static load as a linear combination of load sets defined via FORCE, MOMENT, FORCE1, MOMENT1, FORCE2, MOMENT2, DAREA (if these entries have been converted), PLOAD, PLOAD1, PLOAD2, PLOADB3, PLOAD4, PLOADX1, SLOAD, RFORCE, and GRAV, ACCEL and ACCEL1 entries. In addition, all the thermal loads are also supported in the NASTRAN thermal analysis (SOL 153 and SOL 400 with analysis=hstat) such as QBDY1, QBDY2, QBDY3, QVECT, QVOL, SLOAD, QHBDY Bulk Data entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOAD    SID     S       S1      L1      S2      L2      S3      L3      +       
+       S4      L4      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOAD    101     -0.5    1.0     3       6.2     4                               
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ S         │ Overall scale factor.  (Real)                                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ Si        │ Scale factor on Li.  (Real)                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ Li        │ Load set identification numbers defined on entry types listed above.  (Integer > 0) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The load vector  ![bulkfgil04069.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04069.jpg?_LANG=enus)  is defined by

     ![bulkfgil04071.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04071.jpg?_LANG=enus)  

2. Load set IDs (Li) must be unique.
3. This entry must be used if acceleration loads (GRAV entry) are to be used with any of the other types.
4. In the static solution sequences, SID must be selected by the LOAD Case Control command. In dynamic solution sequences the EXCITEID of a RLOADi or TLOADi may refer to a LOAD entry.
5. A LOAD may be referenced by another LOAD entry. Nested LOAD references are permitted. A LOAD entry may not reference itself.
6. Note that the LOAD entry scaling for RFORCE uses the square root of the absolute S × Si in rotor dynamics. Thus it is recommended that the LOAD entry not be used with RFORCE in rotor dynamics with a value other than S=1.0 and Si=1.0 value. See Remark   of the RFORCE entry.
7. LOAD Bulk Data entry will not combine an SPCD load entry. In the static solution sequences, the set ID of the SPCD entry (SID) is selected by the LOAD Case Control command. In dynamic analysis refer to Remark   of the   entry.
8. If Modules are present then this entry may only be specified in the main Bulk Data section.
