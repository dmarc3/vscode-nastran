## [QBDY3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.QBDY3.xhtml) - Boundary Heat Flux Load for a Surface

Defines a uniform heat flux load for a boundary surface.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QBDY3   SID     Q0      CNTRLND EID1    EID2    EID3    EID4    EID5    +       
+       EID6    etc.                                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QBDY3   2       20.0    10      1       THRU    50      BY      2               
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Q0        │ Thermal heat flux load, or load multiplier.  Q0 is positive for heat flow into a surface.  (Real) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNTRLND   │ Control point for thermal flux load.  (Integer > 0; Default = 0)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ CHBDYj element identification numbers.  (Integer0 or “THRU” or “BY”)                              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. QBDY3 entries must be selected in Case Control (LOAD = SID) to be used in steady state.  The total power into a surface is given by the equation:

     - if  ![bulkqrs07286.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07286.jpg?_LANG=enus)  then  ![bulkqrs07288.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07288.jpg?_LANG=enus)

     - if  ![bulkqrs07290.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07290.jpg?_LANG=enus)  then  ![bulkqrs07292.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07292.jpg?_LANG=enus)

     where  ![bulkqrs07294.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07294.jpg?_LANG=enus)  is the temperature of the control point and is used as a load multiplier.

2. In transient analysis, SID is referenced by a TLOADi Bulk Data entry through the EXCITEID specification.  A function of time  ![bulkqrs07296.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07296.jpg?_LANG=enus)  defined on the TLOADi multiplies the general load, with  τ  specifying time delay.  The load set identifier on the TLOADi entry must be selected in Case Control (DLOAD = SID) for use in transient analysis.  If multiple types of transient loads exist, they must be combined by the DLOAD Bulk Data entry.
3. The CNTRLND multiplier cannot be used with any higher-order elements.
4. When using “THRU” or “BY”, all intermediate CHBDYE, CHBDYG, or CHBDYP elements must exist.
