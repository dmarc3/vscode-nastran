## [CMSENRGY (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.CMSENRGY.Case.xhtml) - Component Modal Synthesis Energy Output Request

Requests the form and type of component modal synthesis (CMS) energy output.

#### Format:

![casecontrol4a00840.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00840.jpg?_LANG=enus)  

#### Example:

```nastran
CMSENRGY (PHASE,RESPONSE=FORCED,CMSE=TOTAL,CMKE=QSET) = ALL
SET 1001 = 10,40
CMSENRGY (PUNCH,PRINT,RESPONSE=BOTH,CMSE=ALL,FILTER=0.01) = 1001
```

```text
┌──────────────┬─────────────────────────────────────────────────┐
│ Describer    │ Meaning                                         │
├──────────────┼─────────────────────────────────────────────────┤
│ PRINT or     │                                                 │
│ (blank)      │                                                 │
├──────────────┼─────────────────────────────────────────────────┤
│ PUNCH        │                                                 │
├──────────────┼─────────────────────────────────────────────────┤
│ PLOT         │                                                 │
├──────────────┼─────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with         │
│ “PARAM,POST, X” (or the POST Case Control command), while the  │
│ .h5 binary database file will be generated with “HDF5OUT”      │
│ entry specified in Bulk Data Section. Both .op2 and .h5 file   │
│ can be created simultaneously. Note .xdb file is being         │
│ deprecated.                                                    │
├──────────────┼─────────────────────────────────────────────────┤
│ ESORT        │ Keyword selecting one of the output sorting     │
│              │ options: MODE, ASCEND, or RATIO.                │
├──────────────┼─────────────────────────────────────────────────┤
│              │ MODE                                            │
├──────────────┼─────────────────────────────────────────────────┤
│              │ ASCEND                                          │
├──────────────┼─────────────────────────────────────────────────┤
│              │ RATIO                                           │
├──────────────┼─────────────────────────────────────────────────┤
│ RESPONSE     │ Keyword selecting the types of results to be    │
│              │ produced.                                       │
├──────────────┼─────────────────────────────────────────────────┤
│              │ BOTH                                            │
├──────────────┼─────────────────────────────────────────────────┤
│              │ MODAL                                           │
├──────────────┼─────────────────────────────────────────────────┤
│              │ FORCED                                          │
├──────────────┼─────────────────────────────────────────────────┤
│ CMSE         │ Keyword requesting output of CMS strain energy  │
│              │ ratios.                                         │
├──────────────┼─────────────────────────────────────────────────┤
│ CMKE         │ Keyword requesting output of CMS kinetic energy │
│              │ ratios.                                         │
├──────────────┼─────────────────────────────────────────────────┤
│ CMDE         │ Keyword requesting output of CMS damping energy │
│              │ ratios.                                         │
├──────────────┼─────────────────────────────────────────────────┤
│              │ ALL                                             │
├──────────────┼─────────────────────────────────────────────────┤
│              │ NONE                                            │
├──────────────┼─────────────────────────────────────────────────┤
│              │ TOTAL                                           │
├──────────────┼─────────────────────────────────────────────────┤
│              │ QSET                                            │
├──────────────┼─────────────────────────────────────────────────┤
│ FILTER       │ Keyword specifying the value of the printed     │
│              │ output data filter.                             │
├──────────────┼─────────────────────────────────────────────────┤
│              │ fratio                                          │
├──────────────┼─────────────────────────────────────────────────┤
│ TOPN         │ Keyword specifying the number of largest CMS    │
│              │ energy ratios to be output.                     │
├──────────────┼─────────────────────────────────────────────────┤
│              │ m                                               │
├──────────────┼─────────────────────────────────────────────────┤
│              │ n                                               │
├──────────────┼─────────────────────────────────────────────────┤
│              │ ALL                                             │
├──────────────┼─────────────────────────────────────────────────┤
│              │ NONE                                            │
└──────────────┴─────────────────────────────────────────────────┘
```

#### Remarks:

1. The CMSENRGY command may be requested in the modal solution sequences (SOLs 110, 111, 112, 145, 146, 200) and the real eigenvalue analysis solution sequences (SOLs 103 and 106). It is intended for use when superelements are defined and component modal synthesis techniques are employed. (See the MODALKE and MODALSE Case Control commands for other options.)
2. ESORT, FILTER, and TOPN describers apply only to QSET results output. TOTAL results output is always in increasing order of superelement ID number.
3. QSET CMS energy ratios are output in increasing order of component mode number unless the ESORT keyword specifies a particular sorting order. If a sorting order is specified, the magnitude of the energy ratio is sorted. DESCEND can be used as a synonym for RATIO.
4. The FILTER keyword specifies an absolute value that is used to limit the amount of printed output produced. It is applied to the magnitude of the CMS energy ratio. If the CMS energy ratio magnitude is less than fratio for any natural mode, no output for that natural mode is produced. THRESH can be used as a synonym for FILTER.
5. In order to obtain unforced response (RESPONSE=BOTH or MODAL) output in SOL 111 and SOL 112, a subcase containing the ANALYSIS = MODES option must be present.
6. For modal transient response solution sequences, response quantities are real numbers. There are no imaginary terms. Therefore, polar representations of the data have no meaning.
