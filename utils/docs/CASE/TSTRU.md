## [TSTRU (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TSTRU.Case.xhtml) - Temperature Set ID for a Structures Run

Defines a temperature set ID for a structures run based on a heat transfer subcase.

#### Format:

```nastran
TSTRU=n
```

#### Example:

```nastran
TSTRU=999
```

```text
┌───────────┬────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                    │
├───────────┼────────────────────────────────────────────────────────────┤
│ n         │ Set identification for use on TEMP(LOAD)=n or TEMP(INIT)=n │
└───────────┴────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. TSTRU should be placed in a heat transfer subcase.
2. If TSTRU does not explicitly appear in the heat transfer subcase, it is defaulted to TSTRU=heat transfer subcase ID.
3. In a structures run, a temperature set generated from a heat transfer run will override an existing temperature set with identical set ID defined with TEMP, TEMPD, TEMPP1, TEMPRB, or any combination.
4. TSTRU may be placed in the first subcase of a PARAM,HEATSTAT,YES run.
5. TSTRUs may be placed in each subcase of an APPHEAT run. The associated structural analysis then requires the following:

```nastran
ASSIGN heat_run=’heat transfer job name.MASTER’ 
DBLOC DATABLK=(UG,EST,BGPDTS,CASECCR/CASEHEAT) LOGICAL=heat_run
```

6. Heat transfer runs and structural runs must have the same mesh.
7. For nonlinear heat transfer SOL 106 or SOL 153, the INOUT field on the NLPARM Bulk Data entry must be blank or NO if the results of the run are to be transferred to a linear structures run.

```nastran
PARAM,NLHTLS,-1
```

The above parameter should be placed in the nonlinear heat run. This will place UG heat transfer on the database.
