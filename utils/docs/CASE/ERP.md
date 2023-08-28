## [ERP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ERP.Case.xhtml) - Equivalent Radiated Power Panel Participation Factor Output Request

Requests the form and type of ERP panel participation factor output for frequency or transient analysis.

#### Format:

![casecontrol4a00922.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00922.jpg?_LANG=enus)  

#### Examples:

```nastran
SET 17 = 10.,20.,30.,40.,80.,100. $ A list of frequencies

SET 25 = ROOF, DOORLF $ A list of ERP Panel names 
 
 
                      $ from a ERPPNL Bulk Entry

ERP ( PRINT,PUNCH,SOLUTION=17,KEY=frac ) = 25
```

```text
┌──────────────┬───────────────────────────────────────────────────┐
│ Describer    │ Meaning                                           │
├──────────────┼───────────────────────────────────────────────────┤
│ SORT1        │ Output is presented as a tabular listing of ERP   │
│              │ panels for each frequency.                        │
├──────────────┼───────────────────────────────────────────────────┤
│ SORT2        │ Output is presented as a tabular listing of       │
│              │ frequency for each ERP panel.                     │
├──────────────┼───────────────────────────────────────────────────┤
│ PRINT or     │                                                   │
│ (blank)      │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ PUNCH        │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ PLOT         │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with           │
│ “PARAM,POST, X” (or the POST Case Control command), while the    │
│ .h5 binary database file will be generated with “HDF5OUT” entry  │
│ specified in Bulk Data Section. Both .op2 and .h5 file can be    │
│ created simultaneously. Note .xdb file is being deprecated.      │
├──────────────┼───────────────────────────────────────────────────┤
│ SOLUTION     │ Keyword to select frequencies or time.            │
├──────────────┼───────────────────────────────────────────────────┤
│              │ ALL                                               │
├──────────────┼───────────────────────────────────────────────────┤
│              │ setf                                              │
├──────────────┼───────────────────────────────────────────────────┤
│              │ sett                                              │
├──────────────┼───────────────────────────────────────────────────┤
│ MPF          │ Requests the output of Modal Participation        │
│              │ Factors for ERP. See Remark 9.                    │
├──────────────┼───────────────────────────────────────────────────┤
│              │ ALL                                               │
├──────────────┼───────────────────────────────────────────────────┤
│              │ nlm                                               │
├──────────────┼───────────────────────────────────────────────────┤
│              │ NONE                                              │
├──────────────┼───────────────────────────────────────────────────┤
│ MPFSORT      │ Keyword selecting the sort type. Default is       │
│              │ sorting by increasing natural mode number. See    │
│              │ Remark 10.                                        │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Sorttype                                          │
├──────────────┼───────────────────────────────────────────────────┤
│ ELEMENT      │ Keyword to request element–by-element ERP output  │
├──────────────┼───────────────────────────────────────────────────┤
│ KEY          │ Keyword selecting the output item used to sort    │
│              │ the printed output. The default produces output   │
│              │ sorted on either frequency (SORT2) or ERP panel   │
│              │ name (SORT1). KEY=fraction produces output sorted │
│              │ in descending order of the fractional ERP value   │
│              │ of maximum ERP across all frequencies or time     │
│              │ steps of a panel.  KEY=time produces output       │
│              │ sorted on either time (SORT2) or ERP panel name   │
│              │ (SORT1). In transient the default KEY=frequency   │
│              │ will automatically become KEY=time.               │
├──────────────┼───────────────────────────────────────────────────┤
│ FILTER       │ Keyword specifying the value of a filter to be    │
│              │ applied to the printed output only. ERP values    │
│              │ are printed only if the fractional ERP value of   │
│              │ maximum ERP across all frequencies or time steps  │
│              │ of a panel exceeds the filter value.              │
├──────────────┼───────────────────────────────────────────────────┤
│ ERPRHO       │ Fluid density for Equivalent Radiated Power (ERP) │
│              │ analysis. This item is actually an MSC Nastran    │
│              │ parameter.                                        │
├──────────────┼───────────────────────────────────────────────────┤
│ ERPC         │ Phase speed of the fluid for Equivalent Radiated  │
│              │ Power (ERP) analysis. This item is actually an    │
│              │ Nastran parameter.                                │
├──────────────┼───────────────────────────────────────────────────┤
│ ERPRLF       │ Radiation loss factor. In frequency the scale     │
│              │ factor C = ERPRLF * (½ERPRHO * ERPC). In          │
│              │ transient the scale factor C = ERPRLF * (ERPRHO * │
│              │ ERPC).                                            │
├──────────────┼───────────────────────────────────────────────────┤
│ RHOCP        │ Scale factor used in dB computation. This item is │
│              │ actually an MSC Nastran parameter.                │
├──────────────┼───────────────────────────────────────────────────┤
│ ERPREFDB     │ Scale factor used in dB computation. This item is │
│              │ actually an MSC Nastran parameter.  The dB        │
│              │ calculation is ERPdB = 10 log .                   │
├──────────────┼───────────────────────────────────────────────────┤
│ CSV          │ Results will be written to a .csv file.           │
├──────────────┼───────────────────────────────────────────────────┤
│              │ unit                                              │
├──────────────┼───────────────────────────────────────────────────┤
│              │ setp                                              │
├──────────────┼───────────────────────────────────────────────────┤
│              │ NONE                                              │
└──────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. ERP is required to produce any ERP output and ERP request must appear either above SUBCASE level or within 1st SUBCASE.  Subsequent SUBCASEs, from 2nd onwards, may or may not have ERP request.
2. Output is generated in SORT2 by default. Unlike other Case Control requesting SORT2 format, the ERP command does not force all other output into SORT2 format.
3. FILTER has no effect on PUNCHed, CSV or OP2 output.
4. In addition to individual panel output a summary named ALLPANEL is produced. If there are multiple subcases, the panel name is formed from the serial subcase number (1-nsubc) and the characters ‘ALLP’ as in ALLP0002 unless the ERP command request output for ALL panels across the Subcases. In this case, the summary panel name ALLPANEL is retained.
5. Selectable frequencies are dependent on the presence of an OFREQ Case Control command.
6. ERPRHO, ERPC, ERPRLF, RHOCP, and ERPREFDB are actually PARAM,name,value entries.
7. The filter process avoids printing ERP for cases where ERP/ERPMAX is less than the FILTER value. ERPMAX is the maximum ERP value across all frequencies for a panel.
8. If output to a .csv file is requested, the file must be assigned with logical key USERFILE and FORM=FORMATTED, e.g.,
     ASSIGN USERFILE = myfile.csv UNIT=50 FORM=FORMATTED STATUS=NEW
9. The MPF of ERP will be computed with the same parameters, such as SOLUTION, csv, setp and etc.
10. MPFs for ERP are sorted by increasing order of natural frequencies unless the MPFSORT keyword specifies a different sorting order. If a sorting order is specified, the KEY keyword selects the item that is used for sorting. Since ERP is always positive, ABSA/ALGA and ABSD/ALGD will produce same sorting results.
11. Element ERP includes elements defined via ERPPNL and SET3.  For 3D element types, such as HEXA, PENTA and TETRA, element ERP includes those elements at the outer surface of the model.  For an element with multiple faces exposed, the element ERP is the summation of ERP of all exposed faces.
12. MPF for ERP and element ERP may increases the volume of output significantly.
