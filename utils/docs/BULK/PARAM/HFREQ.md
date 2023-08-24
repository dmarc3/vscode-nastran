## [HFREQ,  HFREQFL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.HFREQ.HFREQFL.xhtml)

Default    = 1.+30

The parameters LFREQ, HFREQ, LFREQFL, and HFREQFL specify the frequency range in cycles per unit time of the modes to be used in the modal formulations. (LFREQ and LFREQFL are the lower limits and HFREQ and HFREQFL are the upper limits). In coupled fluid-structure analysis, HFREQ and LFREQ are applied to the structural portion of the model and HFREQFL and LFREQFL are applied to fluid portion of the model. The default for HFREQ and HFREQFL will usually include all   vectors computed. Related parameters are LMODES and LMODESFL.

```text
┌───────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ If the MODESELECT Case Control command is used, it takes precedence over the parameters LMODES,  │
│       │ LFREQ and HFREQ (or LMODESFL, LFREQFL and HFREQFL if MODESELECT refers to fluid modes).  For the │
│       │ hierarchy of usage when the MODESELECT Case Control command is used in conjunction with these    │
│       │ parameters, refer to the Remarks in the description of the MODESELECT Case Control command. See  │
│       │ also the FLSFSEL Case Control command for an alternative selection.                              │
└───────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
