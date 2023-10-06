## [CONV](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CONV.xhtml) - Heat Boundary Element Free Convection Entry

Specifies a free convection boundary condition for heat transfer analysis through connection to a surface element (CHBDYi entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONV    EID     PCONID  FLMND   CNTRLND TA1     TA2     TA3     TA4     +       
+       TA5     TA6     TA7     TA8                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONV    2       101     3       201     301                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ CHBDYG, CHBDYE, or CHBDYP surface element identification number.  (0 < Integer < 100,000,000)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PCONID    │ Convection property identification number of a PCONV entry.  (Integer > 0)                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLMND     │ Point for film convection fluid property temperature.  (Integer > 0; Default = 0)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNTRLND   │ Control point for free convection boundary condition.  (Integer > 0; Default = 0)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAi       │ Ambient points used for convection.  (Integer > 0 for TA1 and Integer > 0 for TA2 through TA8; │
│           │ Default for TA2 through TA8 is TA1.)                                                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The basic exchange relationship can be expressed in one of the following forms:
     - ![bulkc202656.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202656.jpg?_LANG=enus) , CNTRLND = 0
     - ![bulkc202658.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202658.jpg?_LANG=enus) ,  ![bulkc202660.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202660.jpg?_LANG=enus)
     - ![bulkc202662.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202662.jpg?_LANG=enus) , CNTRLND = 0
     - ![bulkc202664.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202664.jpg?_LANG=enus) ,  ![bulkc202666.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202666.jpg?_LANG=enus)

     EXPF is specified on the PCONV entry.

     (See  PCONV  entry for additional clarification of forms.)

2. The continuation entry is not required.
3. CONV is used with an CHBDYi (CHBDYG, CHBDYE, or CHBDYP) entry having the same EID.
4. The temperature of the film convection point provides the look up temperature to determine the convection film coefficient.  If FLMND=0, the reference temperature has several options.  It can be the average of surface and ambient temperatures, the surface temperature, or the ambient temperature, as defined in the FORM field of the PCONV Bulk Data entry.
5. If only one ambient point is specified then all the ambient points are assumed to have the same temperature.  If midside ambient points are missing, the temperature of these points is assumed to be the average of the connecting corner points.
6. See the Bulk Data entry,  , for an explanation of the mathematical relationships involved in free convection and the reference temperature for convection film coefficient.
