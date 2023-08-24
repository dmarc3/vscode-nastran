## [DEFORM (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DEFORM.Case.xhtml) - Element Deformation Static Load

Selects the element deformation set.

#### Format:

```nastran
DEFORM=n
```

#### Example:

```nastran
DEFORM=27
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of DEFORM Bulk Data entries (Integer  >  0). │
└───────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DEFORM Bulk Data entries will   not be used unless selected by the DEFORM command in the Case Control Section.
2. DEFORM is only applicable in linear statics, inertia relief, differential stiffness, and buckling problems (SOLs 101, 105, 114, and 200), and will produce a fatal message in other solution sequences.
3. The total load applied will be the sum of external (LOAD), thermal (TEMP(LOAD)), element deformation (DEFORM), and constrained displacement loads (SPC, SPCD).
4. Static, thermal, and element deformation loads should have unique identification numbers.
5. In the superelement solution sequences, if the DEFORM Case Control command is used in a cold start, it must also be specified in the restart.
