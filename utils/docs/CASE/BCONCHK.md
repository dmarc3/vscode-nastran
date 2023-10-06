## [BCONCHK (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BCONCHK.Case.xhtml) - Contact Model Check

This entry is used to activate contact model check before analysis in SOL 101, 103, 105, 107~112, 200 and 400.

With the contact model check, the initial contact status is checked and output. Displacement-like vectors and norm distance of active nodes to the corresponding contact body and distance to the body are generated. Sign of the distance stands for its status: positive for gap; 0.0 on surface; negative for penetration. It is a global case control and must be above SUBCASE.

Note that BCONCHK does not support BCONTACT=ALLBODY, i.e., no contact status check is reported when BCONTACT=ALLBODY.

#### Format:

![casecontrol4a00824.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00824.jpg?_LANG=enus)  

#### Example:

```nastran
BCONCHK(PRINT)= Run
```

```text
┌──────────────┬──────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                      │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                              │
│ (blank)      │                                                              │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                              │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ PLOT         │                                                              │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or  │
│ the POST Case Control command), while the .h5 binary database file will be  │
│ generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2    │
│ and .h5 file can be created simultaneously. Note .xdb file is being         │
│ deprecated.                                                                 │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ RUN          │ Execute contact model check and proceed analysis normally.   │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ STOP         │ Only run contact check and exit job before normal analysis.  │
├──────────────┼──────────────────────────────────────────────────────────────┤
│ STEP         │ Execute contact check at each output request LOAD/TIME step. │
└──────────────┴──────────────────────────────────────────────────────────────┘
```
