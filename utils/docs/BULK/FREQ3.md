## [FREQ3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FREQ3.xhtml) - Frequency List, Alternate 3

Defines a set of excitation frequencies for modal frequency-response solutions by specifying number of excitation frequencies between two modal frequencies.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ3   SID     F1      F2      TYPE    NEF     CLUSTER                         
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREQ3   6       20.0    2000.0  LINEAR  10      2.0                             
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number. (Integer > 0)                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1        │ Lower bound of modal frequency range in cycles per unit time. (Real > 0.0 for TYPE = LINEAR and    │
│           │ Real = 0.0 for TYPE = LOG)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F2        │ Upper bound of modal frequency range in cycles per unit time. (Real > 0.0; F2 > F1; Default = F1)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ LINEAR or LOG. Specifies linear or logarithmic interpolation between frequencies.  (Character;     │
│           │ Default = “LINEAR”)                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NEF       │ Number of excitation frequencies within each subrange including the end points. The first subrange │
│           │ is between F1 and the first modal frequency within the bounds. The second subrange is between      │
│           │ first and second modal frequencies between the bounds. The last subrange is between the last modal │
│           │ frequency within the bounds and F2. (Integer > 1; Default = 10)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CLUSTER   │ Specifies clustering of the excitation frequency near the end points of the range.  See Remark 6.  │
│           │ (Real > 0.0; Default = 1.0)                                                                        │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. FREQ3 applies only to modal frequency-response solutions (SOLs 111, 146, and 200) and is ignored in direct frequency response solutions.

2. FREQ3 entries must be selected with the Case Control command FREQUENCY = SID.

3. In the example above, there will be 10 frequencies in the interval between each set of modes within the bounds 20 and 2000, plus 10 frequencies between 20 and the lowest mode in the range, plus 10 frequencies between the highest mode in the range and 2000.

4. Since the forcing frequencies are near structural resonances, it is important that some amount of damping be specified.

5. All FREQi entries with the same set identification numbers will be used.  Duplicate frequencies will be ignored.  ![bulkfgil03768.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03768.jpg?_LANG=enus)  and  ![bulkfgil03770.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03770.jpg?_LANG=enus)  are considered duplicated if

     ![bulkfgil03772.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03772.jpg?_LANG=enus)  

     where DFREQ is a user parameter, with a default of  ![bulkfgil03774.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03774.jpg?_LANG=enus) .  ![bulkfgil03776.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03776.jpg?_LANG=enus)  an  ![bulkfgil03778.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03778.jpg?_LANG=enus)  are the maximum and minimum excitation frequencies of the combined FREQi entries.

6. CLUSTER is used to obtain better resolution near the modal frequencies where the response varies the most.  CLUSTER > 1.0 provides closer spacing of excitation frequency towards the ends of the frequency range, while values of less than 1.0 provide closer spacing towards the center of the frequency range.  For example, if the frequency range is between 10 and 20, NEF = 11, TYPE = “LINEAR”; then, the excitation frequencies for various values of CLUSTER would be as shown in  .

     ![bulkfgil03780.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03780.jpg?_LANG=enus)  

     where

```text
┌───┬───┬─────────────────────────────────────────────────┐
│   │ = │ is a parametric coordinate between -1 and 1     │
├───┼───┼─────────────────────────────────────────────────┤
│ k │ = │ varies from 1 to NEF (k = 1, 2, ..., NEF)       │
├───┼───┼─────────────────────────────────────────────────┤
│   │ = │ is the lower limit of the frequency subrange    │
├───┼───┼─────────────────────────────────────────────────┤
│   │ = │ is the upper limit of the subrange              │
├───┼───┼─────────────────────────────────────────────────┤
│   │ = │ is the k-th excitation frequency                │
├───┼───┼─────────────────────────────────────────────────┤
│   │ = │ is the frequency, or the logarithm of the       │
│   │   │ frequency, depending on the value specified for │
│   │   │ TYPE                                            │
└───┴───┴─────────────────────────────────────────────────┘
```
Excitation Frequency Number

 

CLUSTER

c=0.25

c-0.50

c-1.0

c-2.0

c-4.0

Excitation Frequencies in Hertz

1

-1.0

10.00

10.0

10.0

10.00

10.00

2

-0.8

12.95

11.8

11.0

10.53

10.27

3

-0.6

14.35

13.2

12.0

11.13

10.60

4

-0.4

14.87

14.2

13.0

11.84

11.02

5

-0.2

14.99

14.8

14.0

12.76

11.66

6

0.0

15.00

15.0

15.0

15.00

15.00

7

0.2

15.01

15.2

16.0

17.24

18.34

8

0.4

15.13

15.8

17.0

18.16

18.98

9

0.6

15.65

16.8

18.0

18.87

19.40

10

0.8

17.05

18.2

19.0

19.47

19.73

11

1.0

20.00

20.0

20.0

20.00

20.00

--------------------

7. In design optimization (SOL 200), the excitation frequencies are derived from the natural frequencies computed at each design cycle.

8. In modal analysis, solutions for modal DOFs from rigid body modes at zero excitation frequencies may be discarded. Solutions for nonzero modes are retained.

9. If Modules are present then this entry may only be specified in the main Bulk Data section.

