## [MAXMIN (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MAXMIN.Case.xhtml) - MAXMIN Survey Output Request (old form)

Specifies options for max/min surveys of certain output data associated with grid points.

#### Format:

![casecontrol4a01102.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01102.jpg?_LANG=enus)  

#### Example:

```nastran
MAXMIN (BOTH=10,CID=1000,DISP,COMP=T1/T3)=501
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAX       │ Specifies that only maximum values are to be output. See Remark 1.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIN       │ Specifies that only minimum values are to be output. See Remark 1.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH      │ Specifies that both maximum and minimum values are to be output. See Remark 1.                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VMAG      │ Specifies that vector magnitude resultants are to be output. See Remark 2.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ num       │ Specifies the maximum number of values that will be output. See Remark 3. (Integer > 0, Default =  │
│           │ 5).                                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Specifies the coordinate system frame of reference in which the max/min values will be output. See │
│           │ Remarks 1. and 3.                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GLOBAL    │ Requests output in the global coordinate system frame of reference.                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BASIC     │ Requests output in the basic coordinate system frame of reference.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ cid       │ Requests output in the local coordinate system defined by cid (Integer > 0).                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ oplist    │ Specifies a list of one or more standard Case Control commands for which max/min results are to be │
│           │ produced. The list may include any of DISP,SPCF, OLOAD,MPCF,VELO,ACCE, or ALL. See Remark 6        │
│           │ (Character, no Default).                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ list      │ Specifies a list of grid point degree of freedom component directions that will be included in the │
│           │ max/min survey output. The components are separated by slashes and are selected from T1, T2, T3,   │
│           │ R1, R2, and R3. See Remarks 4. and 5. (Character, Default=/T1/T2/T3/R1/R2/R3).                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ MAXMIN survey results for all points will be output.                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ MAXMIN survey results for no points will be output.                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command. The max/min results survey will be       │
│           │ output only for the points specified SET n (Integer > 0).                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MAXMIN command produces an algebraically ascending sorted list of the output quantities specified for all of the points in the selected set. MAX refers to the largest magnitude positive values, while MIN refers to the largest magnitude negative values. The output format is similar to that of displacement output. All components will be output for a grid point, and the order of the grid points will be in sort on the particular component that was surveyed. The output title contains the identification number of the set of points participating in the max/min output, the coordinate system frame of reference, the number of MAX and MIN values output, and the component that was surveyed. When the output being surveyed is in the global output coordinate system reference frame, and BASIC or a local output coordinate system is specified as cid, both the sorted system output and the original reference system output are displayed for the grid point if these systems are different.
2. Vector magnitude results are computed for both translations and rotations and are displayed under the T1 and R1 column headings. The presence of the COMP keyword is ignored.
3. The default value of 5 generates a minimum of 10 output lines for the BOTH option. There will be 5 maximum values and 5 minimum values produced. In addition, if coordinate system are involved, both surveyed and original data will be output. This could result in as many as 10 more lines of output for each surveyed component.
4. Multiple MAXMIN commands may be specified for a subcase. This permits different output quantities to have different MAXMIN specification within a subcase. For example,

```nastran
SET 501=1,3,5,7 THRU 99, 1001, 2001 
MAXMIN (DISP, COMP=T3) = 501 
MAXMIN (SPCF, COMP=T1/R3) = ALL
```

5. Scalar point output is included only if component T1 is included in the list.
6. MAXMIN output will only be generated for items in the oplist when there is an associated Case Control command present. For example, a DISP Case Control command must be present in order for the MAXMIN(DISP) = ALL command to produce output. Use of ALL keywords for the oplist requests MAXMIN output for all output commands acceptable to MAXMIN that are present in Case control Section.
