## [LMODES, LMODESFL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.LMODES.LMODESFL.xhtml)

Default    = 0

LMODES and LMODESFL are the number of lowest modes to use in a modal formulation.  In coupled fluid-structure analysis, LMODES specifies the lowest modes of the structural portion of the model and LMODESFL the modes of the fluid portion of the model.  If LMODES (or LMODESFL) = 0, the retained modes are determined by the parameters LFREQ and HFREQ (or LFREQFL and HFREQFL).

In SOL 103, LMODES may be used to reduce the number of eigenvectors to be processed in data recovery which may significantly reduce the CPU and storage costs.

```text
┌───────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ If the MODESELECT Case Control command is used, it takes precedence over the parameters LMODES,  │
│       │ LFREQ and HFREQ (or LMODESFL, LFREQFL and HFREQFL if MODESELECT refers to fluid modes).  For the │
│       │ hierarchy of usage when the MODESELECT Case Control command is used in conjunction with these    │
│       │ parameters, refer to the Remarks in the description of the MODESELECT Case Control command. See  │
│       │ also the FLSFSEL Case Control command for an alternative selection.                              │
└───────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
