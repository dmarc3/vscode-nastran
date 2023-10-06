## [FREQ5](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FREQ5.xhtml) - Frequency List, Alternate Form 5

Defines a set of frequencies used in the solution of modal frequency-response problems by specification of a frequency range and fractions of the natural frequencies within that range.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ5   SID     F1      F2      FR1     FR2     FR3     FR4     FR5     +       
+       FR6     FR7     -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ5   6       20.0    2000.0  1.0     0.6     0.8     0.9     0.95            
        1.05    1.1     1.2                                                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1        │ Lower bound of frequency range in cycles per unit time.  (Real > 0.0; Default = 0.0)             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F2        │ Upper bound of frequency range in cycles per unit time.  (Real > 0.0; F2 > F1; Default = 1.0E20) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRi       │ Fractions of the natural frequencies in the range F1 to F2.  (Real >  0.0)                       │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. FREQ5 applies only to modal frequency-response solutions (SOLs 111, 146, and 200) and is ignored in direct frequency response solutions.
2. FREQ5 entries must be selected with the Case Control command FREQUENCY = SID.
3. The frequencies defined by this entry are given by

     ![bulkfgil03824.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03824.jpg?_LANG=enus)

     where  ![bulkfgil03826.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03826.jpg?_LANG=enus)  are the natural frequencies in the range F1 through F2.

4. In the example above, the list of frequencies will be 0.6, 0.8, 0.9, 0.95, 1.0, 1.05, 1.1, and 1.2 times each natural frequency between 20 and 2000.  If this computation results in excitation frequencies less then F1 and greater than F2, those computed excitation frequencies are ignored.

     Excitation frequencies may be based on natural frequencies that are not within the range (F1 and F2) as long as the calculated excitation frequencies are within the range.  Similarly, an excitation frequency calculated based on natural frequencies within the range (F1 through F2) may be excluded if it falls outside the range.

5. Since the forcing frequencies are near structural resonances, it is important that some amount of damping be specified.
6. All FREQi entries with the same set identification numbers will be used. Duplicate frequencies will be ignored.  ![bulkfgil03828.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03828.jpg?_LANG=enus)  and  ![bulkfgil03830.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03830.jpg?_LANG=enus)  are considered duplicated if

     ![bulkfgil03832.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03832.jpg?_LANG=enus)  

     where DFREQ is a user parameter with a default of  ![bulkfgil03834.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03834.jpg?_LANG=enus) .  The values  ![bulkfgil03836.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03836.jpg?_LANG=enus)  and  ![bulkfgil03838.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03838.jpg?_LANG=enus)  are the maximum and minimum excitation frequencies of the combined FREQi entries.

7. In design optimization (SOL 200), the excitation frequencies are derived from the natural frequencies computed at each design cycle.
8. In modal analysis, solutions for modal DOFs from rigid body modes at zero excitation frequencies may be discarded. Solutions for nonzero modes are retained.
9. If Modules are present then this entry may only be specified in the main Bulk Data section.
