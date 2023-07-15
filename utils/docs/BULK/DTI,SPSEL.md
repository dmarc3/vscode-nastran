## [DTI,SPSEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DTI.SPSEL.xhtml) - Response Spectra Generation Correlation Table

Correlates output requests with frequency and damping ranges.

#### Format:

```text
┌─────┬───────┬───────┬───────┬────────┬────┬────┬────┬────┬────┐
│ 1   │ 2     │ 3     │ 4     │ 5      │ 6  │ 7  │ 8  │ 9  │ 10 │
├─────┼───────┼───────┼───────┼────────┼────┼────┼────┼────┼────┤
│ DTI │ SPSEL │ RECNO │ DAMPL │ FREQL  │ G1 │ G2 │ G3 │ G4 │    │
├─────┼───────┼───────┼───────┼────────┼────┼────┼────┼────┼────┤
│     │ G5    │ G6    │ G7    │ -etc.- │    │    │    │    │    │
└─────┴───────┴───────┴───────┴────────┴────┴────┴────┴────┴────┘
```
#### Example:

```text
┌─────┬───────┬────┬───┬───┬────┬────┬────┬────┐
│ DTI │ SPSEL │  1 │ 2 │ 1 │ 11 │ 12 │    │    │
├─────┼───────┼────┼───┼───┼────┼────┼────┼────┤
│ DTI │ SPSEL │  2 │ 4 │ 3 │ 1  │ 7  │ 11 │ 12 │
├─────┼───────┼────┼───┼───┼────┼────┼────┼────┤
│     │ 13    │ 14 │   │   │    │    │    │    │
└─────┴───────┴────┴───┴───┴────┴────┴────┴────┘
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMPL     │ Identification number of the FREQ, FREQ1, or FREQ2 Bulk Data entry that specifies the list of │
│           │ damping values. (Integer > 0)                                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ FREQL     │ Identification number of the FREQi Bulk Data entry that specifies the list of frequencies.    │
│           │ (Integer > 0)                                                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point number where response spectra will be calculated. (Integer > 0)                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ RECNO     │ Record number of spectra to be generated. (Sequential integer beginning with 1.)              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. This table is used in SOLs 109 and 112.

2. Damping values are in the units of fraction of critical damping.

3. Output of response spectra requires the use of the XYPLOT...SPECTRA(RECNO)/Gi... command, where Gi is restricted to the grid points listed on the (RECNO) record of this entry.

4. The SPSEL table is stored in the database automatically in SOLs 109 and 112. Once stored, the Bulk Data entry may be removed from the input file.

5. There must be case control output request for displacements and velocities of the points to be output.  For example you could use case control commands:

DISP(PLOT) = ALL

VELO(PLOT) = ALL

