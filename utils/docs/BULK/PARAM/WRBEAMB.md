## [WRBEAMB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.WRBEAMB.xhtml)

Integer, Default = 0

```text
┌────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  0 │ Write equivalent radius for all beams (see PARAM, BEAMBEA) whether beam-beam contact is            │
│    │ anticipated or not.  The equivalent radius is the 7th field of Marc’s GEOMETRY values for beam     │
│    │ type elements.                                                                                     │
├────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ -1 │ Do not write equivalent radius (7th field is blank).  This might be necessary for versions of Marc │
│    │ earlier than 2003.                                                                                 │
└────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
