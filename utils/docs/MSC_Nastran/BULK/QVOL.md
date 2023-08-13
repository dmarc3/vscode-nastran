## [QVOL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.QVOL.xhtml) - Volume Heat Addition

Defines a rate of volumetric heat addition in a conduction element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QVOL    SID     QVOL    CNTRLND EID1    EID2    EID3    EID4    EID5    +       
+       EID6    etc.                                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QVOL    5       10.0    101     10      12      11      9                       
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification.  (Integer > 0)                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ QVOL      │ Power input per unit volume produced by a heat conduction element.  (Real)      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ CNTRLND   │ Control point used for controlling heat generation.  (Integer > 0; Default = 0) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ A list of heat conduction elements.  (Integer > 0 or “THRU” or “BY”)            │
└───────────┴─────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. EIDi has material properties (MAT4) that include HGEN, the element material property for heat generation, which may be temperature dependent.  This association is made through the element EID.  If HGEN is temperature dependent, it is based on the average element temperature.
2. QVOL provides either the constant volumetric heat generation rate or the load multiplier.  QVOL is positive for heat generation.  For steady-state analysis, the total power into an element is

     - If CNTRLND = 0, then  ![bulkqrs07336.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07336.jpg?_LANG=enus) .

     - If CNTRLND > 0, then  ![bulkqrs07338.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07338.jpg?_LANG=enus) .

     where  ![bulkqrs07340.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07340.jpg?_LANG=enus)  is the temperature multiplier.

3. For use in steady-state analysis, the load set is selected in the Case Control Section (LOAD = SID).
4. In transient analysis SID is referenced by a TLOADi Bulk Data entry. A function of time  ![bulkqrs07342.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07342.jpg?_LANG=enus)  defined on the TLOADi entry multiplies the general load where  ![bulkqrs07344.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07344.jpg?_LANG=enus)  specifies time delay. The load set identifier on the TLOADi entry must be selected in Case Control (DLOAD = SID) for use in transient analysis.  If multiple types of transient loads exist, they must be combined by the DLOAD Bulk Data entry.
5. For “THRU” or “BY”, all intermediate referenced heat conduction elements must exist.
6. The CNTRLND multiplier cannot be used with any higher-order elements.
7. QVOL is not supported for CQUADX and CTRIAX axisymmetric elements. It is supported for the CTRIAX6 element.
