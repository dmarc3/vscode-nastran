## [DTI,SPECSEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DTI.SPECSEL.xhtml) - Response Spectra Input Correlation Table

Correlates spectra lines specified on TABLED1 entries with damping values.

#### Format:

```text
┌─────┬─────────┬───────┬──────┬───────┬──────┬───────┬────────┬───────┬────┐
│ 1   │ 2       │ 3     │ 4    │ 5     │ 6    │ 7     │ 8      │ 9     │ 10 │
├─────┼─────────┼───────┼──────┼───────┼──────┼───────┼────────┼───────┼────┤
│ DTI │ SPECSEL │ RECNO │      │ TYPE  │ TIDl │ DAMP1 │ TID2   │ DAMP2 │    │
├─────┼─────────┼───────┼──────┼───────┼──────┼───────┼────────┼───────┼────┤
│     │ TID3    │ DAMP3 │ TID4 │ DAMP4 │ TID5 │ DAMP5 │ -etc.- │       │    │
└─────┴─────────┴───────┴──────┴───────┴──────┴───────┴────────┴───────┴────┘
```
#### Example:

```text
┌─────┬─────────┬──────┬───┬───┬─────┬───┬─────┐
│ DTI │ SPECSEL │ 1    │ A │ 1 │ .02 │ 2 │ .04 │
├─────┼─────────┼──────┼───┼───┼─────┼───┼─────┤
│     │ 3       │ 0.06 │   │   │     │   │     │
├─────┼─────────┼──────┼───┼───┼─────┼───┼─────┤
│ DTI │ SPECSEL │ 3    │ V │ 4 │ .01 │   │     │
└─────┴─────────┴──────┴───┴───┴─────┴───┴─────┘
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RECNO     │ Spectrum number. (Integer > 0)                                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Type of spectrum. (Character: “A” for acceleration, “V” for velocity, or “D” for displacement.) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TIDi      │ TABLED1 entry identification number. (Integer > 0)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMPi     │ Damping value assigned to TIDi. (Real)                                                          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The RECNO is the number of the spectrum defined by this entry. It is referenced on DLOAD Bulk Data entries.

2. The TIDi, DAMPi pairs list the TABLEDl entry, which defines a line of the spectrum and the damping value assigned to it. The damping value is in the units of fraction of critical damping.

3. This entry is placed in the database automatically. Once stored, the Bulk Data entry may be removed from the input file.

