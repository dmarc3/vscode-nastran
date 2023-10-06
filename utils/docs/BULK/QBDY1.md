## [QBDY1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.QBDY1.xhtml) - Boundary Heat Flux Load for CHBDYj Elements, Form 1

Defines a uniform heat flux into CHBDYj elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QBDY1   SID     Q0      EID1    EID2    EID3    EID4    EID5    EID6    +       
+       EID7    EID8    -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QBDY1   109     1.-5    721                                                     
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QBDY1   SID     Q0      EID1    “THRU”  EID2                                    
QBDY1   109     1.-5    725     THRU    735                                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Q0        │ Heat flux into element.  (Real)                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ CHBDYj element identification numbers.  (Integer0 or “THRU”.  For “THRU” option EID2 > EID1.) │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. QBDY1 entries must be selected with the Case Control command LOAD = SID in order   to be used in static analysis.  The total power into an element is given by the equation:

     ![bulkqrs07272.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07272.jpg?_LANG=enus)  

2. QBDY1 entries must be referenced on a TLOADi Bulk Data entry through the EXCITEID specification for use in transient analysis.  The total power into an element is given by the equation:

     ![bulkqrs07274.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07274.jpg?_LANG=enus)  

     where the function of time  ![bulkqrs07276.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07276.jpg?_LANG=enus)  is specified on a TLOADi entry.

3. The sign convention for Q0 is positive for heat input.
