## [DRSPAN (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DRSPAN.Case.xhtml) - Response Spanning Set Selection

Selects a set of DRESP1 entries for the current subcase that are to be used in a DRESP2 or DRESP3 response that spans subcases.

#### Format:

```nastran
DRSPAN=n
```

#### Example:

```nastran
DRSPAN=10
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command (Integer  >  0). │
└───────────┴───────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In SOL 200, DRESP2 or DRESP3 Bulk Data entries can invoke DRESP1 responses that span subcases if these DRESP1 responses have been identified using a DRSPAN Case Control command that references a SET request that identifies the DRESP1 Bulk Data entries.
2. Each DRESP1 identified must produce a scalar value.
3. The DRSPAN Case Control command must be at the subcase level, whereas the SET request can be specified above the subcase level.
4. DRESP2, or DRESP3 that SPANS subcases, cannot reference another DRESP2 and/or DRESP3.
5. DRSPAN must appear in every subcase in the file if the synthetic response is to span the subcases. The synthetic response via DRESP2 or DRESP3 must reference all DRESP1 IDs defined in SETs of DRSPAN. In DEQATN, all DRESP1 IDs should show up in the list of variables. For those DRESP1 IDs that are not needed, it can be dropped from the definition of equation(s).
6. To check the value of spanned response, set parameter P2 of DOPTPRM to a value equal to or larger then 8, see DOPTPRM for details. Note that verification requires performing hand calculation based on user-provided DEQATN for the spanned response.
