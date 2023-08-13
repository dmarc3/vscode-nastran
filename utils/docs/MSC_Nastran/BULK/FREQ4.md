## [FREQ4](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FREQ4.xhtml) - Frequency List, Alternate Form 4

Defines a set of frequencies used in the solution of modal frequency-response problems by specifying the amount of “spread” around each natural frequency and the number of equally spaced excitation frequencies within the spread.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ4   SID     F1      F2      FSPD    NFM                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ4   6       20.0    2000.0  0.30    21                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1        │ Lower bound of frequency range in cycles per unit time.  (Real > 0.0; Default = 0.0)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F2        │ Upper bound of frequency range in cycles per unit time.  (Real > 0.0; F2 > F1; Default = 1.0E20)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSPD      │ Frequency spread, +/- the fractional amount specified for each mode which occurs in the frequency  │
│           │ range F1 to F2.  (1.0 > Real > 0.0; Default = 0.10)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NFM       │ Number of evenly spaced frequencies per “spread” mode.  (Integer > 0; Default = 3; If NFM is even, │
│           │ NFM + 1 will be used.)                                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. FREQ4 applies only to modal frequency-response solutions (SOLs 111, 146, and 200 and is ignored in direct frequency-response solutions.
2. FREQ4 entries must be selected with the Case Control command FREQUENCY = SID.
3. There will be NFM excitation frequencies between  ![bulkfgil03796.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03796.jpg?_LANG=enus)  and  ![bulkfgil03798.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03798.jpg?_LANG=enus) , for each natural frequency in the range F1 to F2.
4. In the example above there will be 21 equally spaced frequencies across a frequency band of  ![bulkfgil03800.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03800.jpg?_LANG=enus)  to  ![bulkfgil03802.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03802.jpg?_LANG=enus)  for each natural frequency that occurs between 20 and 2000.  See   for the definition of frequency spread.

     ![bulkfgil03804.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03804.jpg?_LANG=enus)

     Figure 0-53 Frequency Spread Definition

     Excitation frequencies may be based on natural frequencies that are not within the range (F1 and F2) as long as the calculated excitation frequencies are within the range.  Similarly, an excitation frequency calculated based on natural frequencies within the range (F1 through F2) may be excluded if it falls outside the range.

5. The frequency spread can be used also to define the half-power bandwidth.  The half-power bandwidth is given by  ![bulkfgil03806.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03806.jpg?_LANG=enus) , where  ![bulkfgil03808.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03808.jpg?_LANG=enus)  is the damping ratio.  Therefore, if FSPD is specified equal to the damping ratio for the mode, NFM specifies the number of excitation frequency within the half-power bandwidth.  See   for the definition of half-power bandwidth.

     Figure 0-54 Half-Power Bandwidth Definition

6. Since the forcing frequencies are near structural resonances, it is important that some amount of damping be specified.
7. All FREQi entries with the same set identification numbers will be used.  Duplicate frequencies will be ignored.  ![bulkfgil03812.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03812.jpg?_LANG=enus)  and  ![bulkfgil03814.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03814.jpg?_LANG=enus)  are considered duplicated if

     ![bulkfgil03816.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03816.jpg?_LANG=enus)  

     where DFREQ is a user parameter with a default of  ![bulkfgil03818.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03818.jpg?_LANG=enus) .  The values  ![bulkfgil03820.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03820.jpg?_LANG=enus)  and  ![bulkfgil03822.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03822.jpg?_LANG=enus)  are the maximum and minimum excitation frequencies of the combined FREQi entries.

8. In design optimization (SOL 200), the excitation frequencies are derived from the natural frequencies computed at each design cycle.
9. In modal analysis, solutions for modal DOFs from rigid body modes at zero excitation frequencies may be discarded. Solutions for nonzero modes are retained.
10. If Modules are present then this entry may only be specified in the main Bulk Data section.
