## [QVECT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.QVECT.xhtml) - Thermal Vector Flux Load

Defines thermal vector flux from a distant source into a face of one or more CHBDYi boundary condition surface elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QVECT   SID     Q0      TSOUR   CE      E1 or...E2 or...E3 or...CNTRLND +       
+       EID1    EID2    -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QVECT   10      20.0    1000.0          1.0     1.0     1.0     101             
        20      21      22      23                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Q0        │ Magnitude of thermal flux vector into face.  (Real or blank)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TSOUR     │ Temperature of the radiant source.  (Real or blank)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CE        │ Coordinate system identification number for thermal vector flux.  See Remark 9. (Integer > -1 or   │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ei        │ Vector components (direction cosines in coordinate system CE) of the thermal vector flux.  (Real;  │
│           │ Default = 0.0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TIDi      │ TABLEDi entry identification numbers defining the components as a function of time.  (Integer > 0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNTRLND   │ Control point.  (Integer > 0; Default = 0)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ Element identification number of a CHBDYE, CHBDYG, or CHBDYP entry. (Integer > 0) Key word "THRU"  │
│           │ can be used to assist the listing with ascending order of EIDi                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The continuation entry is required.
2. If the coordinate system CE is not rectangular, then the thermal vector flux is in different directions for different CHBDYi elements.  The direction of the thermal vector flux over an element is aligned to be in the direction of the flux vector at the geometric center of the element.  The geometric center is measured using the grid points and includes any DISLIN specification on the VIEW entry for TYPE=LINE CHBDYi elements.  The flux is presumed to be uniform over the face of each element; i.e., the source is relatively distant.
3. For use in steady-state analysis, the load set is selected in the Case Control Section (LOAD = SID).  The total power into an element is given by:

     - If CNTRLND = 0 then,  ![bulkqrs07304.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07304.jpg?_LANG=enus) .

     - If CNTRLND > 0 then,  ![bulkqrs07306.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07306.jpg?_LANG=enus) .

     where

          See link for definitions.

4. If the absorptivity is constant, its value is supplied by the ABSORP field on the RADM entry.  If the absorptivity is not a constant, the thermal flux is assumed to have a wavelength distribution of a black body at the temperature TSOUR.
     - For a temperature-dependent absorptivity, the element temperature is used to determine  ![bulkqrs07318.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07318.jpg?_LANG=enus) .
     - For a wavelength-dependent absorptivity, the integration of the flux times  ![bulkqrs07320.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07320.jpg?_LANG=enus)  is computed for each wavelength band.  The sum of the integrated thermal fluxes over all the wavelength bands is Q0.  The wave bands are specified with the RADBND entry.
     - The user has the responsibility of enforcing Kirchhoff’s laws.
5. In transient analysis, SID is referenced by a TLOADi Bulk Data entry through the EXCITEID specification.  A function of time  ![bulkqrs07322.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07322.jpg?_LANG=enus)  defined on the TLOADi entry multiplies the general load.   ![bulkqrs07324.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07324.jpg?_LANG=enus)  provides any required time delay.   ![bulkqrs07326.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07326.jpg?_LANG=enus)  is a function of time specified on the TLOADi entry.  The value of  is calculated for each loaded grid point.  The load set identifier on the TLOADi entry must be selected in Case Control (DLOAD = SID) for use in transient analysis.  If multiple types of transient loads exist, they must be combined by the DLOAD Bulk Data entry.

     The total power into an element is given by:

     - If CNTRLND = 0 then,  ![bulkqrs07328.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07328.jpg?_LANG=enus) .

     - If CNTRLND > 0 then,

     ![bulkqrs07330.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07330.jpg?_LANG=enus) .

6. If the referenced face is of TYPE = ELCYL, the power input is an exact integration over the area exposed to the thermal flux vector.
7. If the referenced face is of TYPE = REV, the thermal flux vector must be parallel to the axis of symmetry if an axisymmetric boundary condition is to be maintained.
8. When applied to a surface element associated with a radiation enclosure cavity, any incident energy that is not absorbed  ![bulkqrs07332.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07332.jpg?_LANG=enus)  is lost from the system and is not accounted for in a reflective sense  ![bulkqrs07334.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07334.jpg?_LANG=enus) .
9. If a heat flux normal to the surface is desired, set CE to -1. This allows a nondirectional temperature dependent heat load on the CHBDYi. the RADMT scale factor times Q0 equals to the total power. Remember that the absorptivity must fall between 0.0 and 1.0, (see the RADMT Bulk Data entry).
