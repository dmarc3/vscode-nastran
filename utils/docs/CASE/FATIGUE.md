## [FATIGUE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FATIGUE.Case.xhtml) - Fatigue Output Request

Requests one or more fatigue analyses for use in pseudo-static (SOL 101), modal (SOL 103), modal transient (SOL 112), and frequency response (SOL 108 and SOL 111) runs.

#### Format (SOL 101, 103, 112, 200 with ANALYSIS=STATICS):

![casecontrol4a00974.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00974.jpg?_LANG=enus)  

#### Format (SOL 108, 111, 200 with ANALYSIS=DFREQ or MFREQ) (See Remark 12):

![casecontrol4a00976.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00976.jpg?_LANG=enus)  


#### Examples:

```nastran
FATIGUE=100
SET 99 = 100, 200 
FATIGUE(SET)=99
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Printed output will be presented as a tabular listing of elements for each fatigue analysis or     │
│              │ event. In the case of duty cycle, where multiple events are output (EVNTOUT=1 on FTGSEQ bulk       │
│              │ data), each event is presented as a separate fatigue analysis. Output written to the OEFTG data    │
│              │ blocks is always in SORT1 format.                                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Printed output will be presented as a tabular listing of events for each element, node, or angle.  │
│              │ This is only applicable for duty cycle (loading sequences with more than one event - EVNTOUT=1 on  │
│              │ FTGSEQ bulk data). If there is only one event, the output is identical to SORT1. Output written to │
│              │ the OEFTG data blocks is always in SORT1 format.                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                    │
│ (blank)      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command), while  │
│ the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2 and │
│ .h5 file can be created simultaneously. Note .xdb file is being deprecated.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORMAT       │ Request that fatigue be output in specific file formats. See Remark 6. and 11.                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STROUT       │ Request that certain stress or strain output be included. See Remarks 13. and 14.                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CODE         │ Codes for specific file format or stress output. See Remark 6., 11., and 13.                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BULK         │ Specifies that the n refers directly to bulk data IDs of FTGSEQ/ FTGLOAD, FTGPARM and FTGDEF       │
│              │ entries of the same ID (default) to process.                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SET          │ Specifies that the n refers to a previously appearing SET ID (SOL 101, 103, & 112 only) containing │
│              │ the IDs of FTGSEQ/FTGLOAD, FTGPARM, FTGDEF bulk data entries to process. This is a mechanism to    │
│              │ request multiple fatigue output requests in a single analysis run.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STATICS      │ SOL 200 only. Specifies the FATIGUE case control is for ANALYSIS=STATICS subcases in a SOL 200     │
│              │ optimization run. This is the default if not specified. See Remark 9.                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FREQ DFREQ   │ SOL 200 only. Either of these specifies the FATIGUE case control is for frequency response         │
│ MFREQ        │ (ANALYSIS=MFREQ or DFREQ) subcases in a SOL 200 optimization run. This is not the default and must │
│              │ be specified if the FATIGUE case control is referenced on a DRESP1 of type FRFTG. See Remark 9.    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ ID of FTGSEQ/FTGLOAD, FTGPARM, FTGDEF bulk data entries of the same ID (BULK option) to process,   │
│              │ or ID of a previously occurring SET case control entry (SET option) containing the IDs of the      │
│              │ FTGSEQ/FTGLOAD, FTGPARM, FTGDEF bulk data entries to process (SOL 101, 103, & 112 only).           │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
