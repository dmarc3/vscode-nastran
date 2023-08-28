## [NLTOL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NLTOL.xhtml)

![parameters01785.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01785.jpg?_LANG=enus)  

NLTOL establishes defaults for the CONV, EPSU, EPSP and EPSW fields of NLPARM Bulk Data entry for nonlinear static and heat transfer analysis according to the following table:

```text
┌───────────┬──────────────────────────────────────────────────┐
│ NLTOL     │ Level of Accuracy                                │
├───────────┼──────────────────────────────────────────────────┤
│ 0         │ Very high                                        │
├───────────┼──────────────────────────────────────────────────┤
│ 1         │ High                                             │
├───────────┼──────────────────────────────────────────────────┤
│ 2         │ Engineering Design                               │
├───────────┼──────────────────────────────────────────────────┤
│ 3         │ Preliminary Design                               │
└───────────┴──────────────────────────────────────────────────┘
```

See Remark  16.  of the NLPARM entry for further details and corresponding default NLPARM field values.

