## [TIM2PSD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TIM2PSD.xhtml) - FFT conversion tool for use in random vibration fatigue analysis

Fast Fourier Transformation (FFT) conversion tool for use in SOL 108 or SOL 111 random vibration fatigue analysis. This entry is used to convert time history data into power spectral density (PSD) functions directly input to the fatigue analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TIM2PSD ID      SRATE   WINDOW  FORMAT  MEANS   NSKIP                           
        “EVENT” EVNTID1                                 T1      δ1              
                EVNTID2                                 T2      δ2              
                ...                                                             
                EVNTIDn                                 Tn      δn              
        “DELETE”EVNTID1 Ti1_1   Tf1_1   Ti2_1   Tf2_1   Ti3_1   Tf3_1           
                EVNTID2 Ti1_2   Tf1_2   Ti2_2   Tf2_2   Ti3_2   Tf3_2           
                ...                                                             
                EVNTIDn Ti1_n   Tf1_n   Ti2_n   Tf2_n   Ti3_n   Tf3_n           
        “MAP”   LCID1   CHAN1   LCID2   CHAN2   LCID3   CHAN3                   
                LCID4   CHAN4   ...     -etc.-                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TIM2PSD 42      512.0   HANNING CSV     YES     1                               
        EVENT   80001                                   2.0     1.0             
                80002                                   1.0     0.5             
                80003                                   2.0     1.0             
        DELETE  80001   1.1     1.9                                             
        MAP     1       3       2       5       3       7                       
```
```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID           │ Unique identification number referenced by FATIGUE case control, otherwise TIM2PSD entry is        │
│              │ ignored (Integer > 0).                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SRATE        │ Number of samples per second (required) - thus dt = 1/SRATE (Real; No Default).                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WINDOW       │ Window function to use. Choices are HANNING or NONE. This is applied to the "block" of data        │
│              │ extracted from the total time signal. (Character; Default = HANNING).                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORMAT       │ Format of time signal files (RPC or CSV) (Character; Default = CSV). RPC files are binary channel  │
│              │ data usually with the .rsp file extension. CSV files are typical MS Excel comma separated files in │
│              │ which the channels are in the columns (i.e. three columns of data is three channels of data -      │
│              │ y-values only. x-values assumed to be in ascending order with no regards to length of time between │
│              │ points).                                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MEANS        │ Used to decide if overall signal mean values are to be calculated (YES or NO) (Character; Default  │
│              │ = NO). Currently this is only calculated and not applied in the analysis. Ignored if no mean       │
│              │ stress correction specified on FTGPARM entry.                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSKIP        │ Number of header lines to skip if an FORMAT=CSV file (Integer>=0; Default=0).                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ The next     │                                                                                                    │
│ continuation │                                                                                                    │
│ lines are    │                                                                                                    │
│ required and │                                                                                                    │
│ repeat for   │                                                                                                    │
│ as many      │                                                                                                    │
│ Events as    │                                                                                                    │
│ necessary.   │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EVENT        │ Flag indicating that event parameters are to follow (one optional set for each event).             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EVNTIDi      │ Number of this Event - must correspond to the TID of a FTGLOAD entry of TYPE=PSD that is           │
│              │ referenced by an active FTGEVNT entry. (Note: it is NOT the actual FTGEVNT ID).                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti           │ Length of window function in time for this Event (Real>0.0; no Default).                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ δi           │ Overlap or gap in time between windows for this Event (real) (+ means overlap) (Real>=0.0; Default │
│              │ = 0.0).                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ The next     │                                                                                                    │
│ continuation │                                                                                                    │
│ lines are    │                                                                                                    │
│ optional and │                                                                                                    │
│ can repeat   │                                                                                                    │
│ for as many  │                                                                                                    │
│ Events as    │                                                                                                    │
│ necessary.   │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELETE       │ Flag indicating that event parameters are to follow for signal deletion. For any Event, time value │
│              │ pairs can be specified for deleting up to three (3) portions of thetime signal for each Event.     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EVNTIDi      │ Number of this Event - correspond to a previously defined EVNTIDi in the “EVENT” section above.    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Tii_i Tfi_i  │ Used to specify sections in an Event (defined by pairs of time values t1-t2, t3-t4, t5-t6) to      │
│              │ delete from Event files before FFT process is applied (Real>0; t1<=t2<=t3<t=4<=…; no Defaults; if  │
│              │ none are specified, entire signal is used). Only three (3) delete pairs per event are currently    │
│              │ supported.                                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ The next     │                                                                                                    │
│ continuation │                                                                                                    │
│ lines are    │                                                                                                    │
│ optional and │                                                                                                    │
│ only         │                                                                                                    │
│ necessary if │                                                                                                    │
│ the SUBCASEs │                                                                                                    │
│ correspondin │                                                                                                    │
│ g to the     │                                                                                                    │
│ channel data │                                                                                                    │
│ is not one-  │                                                                                                    │
│ to-one.      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAP          │ Flag used to map the channel data and load case (SUBCASE) IDs.                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LCIDi        │ SUBCASE of transfer function (TF) corresponding to ith load event. SUBCASEs must be in ascending   │
│              │ order in the Case Control! There cannot be more SUBCASEs listed than there are channels of data in │
│              │ the CSV/RPC files.                                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CHANi        │ Channel # corresponding to ith load event. Channels must be referenced in ascending order and      │
│              │ cannot be repeated.                                                                                │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
