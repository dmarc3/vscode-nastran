## [QBDY2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.QBDY2.xhtml) - Boundary Heat Flux Load for CHBDYj Elements, Form 2

Defines grid point heat flux into CHBDYj elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QBDY2   SID     EID     Q01     Q02     Q03     Q04     Q05     Q06             
        Q07     Q08                                                             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QBDY2   109     721     1.-5    1.-5    2.-5    2.-5                            
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Identification number of an CHBDYj element.  (Integer > 0)                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ Q0i       │ Heat flux at the i-th grid point on the referenced CHBDYj element.  (Real or blank) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. QBDY2 entries must be selected with the Case Control command LOAD=SID in order to be used in static analysis.  The total power into each point i on an element is given by

![bulkqrs07278.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07278.jpg?_LANG=enus)  

2. QBDY2 entries must be referenced on a TLOADi Bulk Data entry through the EXCITEID specification for use in transient analysis.  All connected grid points will have the same time function but may have individual delays.  The total power into each point i on an element is given by

![bulkqrs07280.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07280.jpg?_LANG=enus)  

     where  ![bulkqrs07282.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07282.jpg?_LANG=enus)  is a function of time specified on a TLOADi entry.

3. The sign convention for Q0i is positive   for heat flux input to the element.

