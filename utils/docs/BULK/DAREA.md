## [DAREA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DAREA.xhtml) - Load Scale Factor

Defines scale (area) factors for static and dynamic loads.  In dynamic analysis, DAREA is used in conjunction with ACSRCE, RLOADi and TLOADi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DAREA   SID     P1      C1      A1      P2      C2      A2                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DAREA   3       6       2       8.2     15      1       10.1                    
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number. (Integer > 0)                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Pi        │ Grid, extra, or scalar point identification number. (Integer > 0)                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number. (Integer 1 through 6 for grid point; blank or 0 for extra or scalar point.) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ai        │ Scale (area) factor. (Real)                                                                   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. One or two scale factors may be defined on a single entry.

2. Refer to RLOAD1, RLOAD2, TLOAD1, TLOAD2, or ACSRCE entries for the formulas that define the scale factor Ai in dynamic analysis.

3. Component numbers refer to the displacement coordinate system.

4. In dynamic analysis, DAREA entries may be used with LSEQ Bulk Data entries if LOADSET is specified in Case Control. The LSEQ and static load entries will be used to internally generate DAREA entries.

5. If DAREA is referenced by a GUST entry, Pi must be defined. However, it is only used if selected through a DLOAD Case Control command. WG from the GUST entry is used instead of Ai when requested via a GUST entry.

6. All DAREA entries corresponding to all grid and scalar points are automatically converted internally by the program to equivalent FORCE/MOMENT/SLOAD entries (as appropriate)  if there are no LSEQ Bulk Data entries .

7. In superelement analysis, DAREA may be used to specify loads not only on the interior points of the residual, but also on the interior points of upstream superelements  if there are no LSEQ Bulk Data entries .

8. In static analysis, DAREA entries may be used  only if there are no LSEQ Bulk Data entries . They are ignored if there are any LSEQ Bulk Data entries.

