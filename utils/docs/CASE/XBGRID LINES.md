## [XBGRID LINES](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.XBGRID.LINES.xhtml) - Plot X-Axis Grid Lines

Controls the drawing of the grid lines parallel to the x-axis at the y-axis tic marks on lower half frame curves only.

#### Format:

![casecontrol4c01479.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/../../../assets/casecontrol4c01479.jpg?_LANG=enus)  

```text
┌────────────┬──────────────────────────────────────────────┐
│ Describers │ Meaning                                      │
├────────────┼──────────────────────────────────────────────┤
│ YES        │ Plot the x-axis grid lines.                  │
├────────────┼──────────────────────────────────────────────┤
│ NO         │ Do not plot the x-axis grid lines (Default). │
└────────────┴──────────────────────────────────────────────┘
```

#### Remarks:

1. XBGRID applies to lower half frame curves only.

2. See related command YBGRID LINES.
