## [SUBTITLE (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SUBTITLE.Case.xhtml) - Output Subtitle

Defines a subtitle that will appear on the second heading line of each page of printer output.

#### Format:

```nastran
SUBTITLE=subtitle
```

#### Example:

```nastran
SUBTITLE=PROBLEM NO. 5-1A
```

```text
┌───────────┬───────────────────────┐
│ Describer │ Meaning               │
├───────────┼───────────────────────┤
│ subtitle  │ Any character string. │
└───────────┴───────────────────────┘
```

#### Remarks:

1. SUBTITLE appearing under a SUBCASE command will appear in the output for that subcase only.
2. SUBTITLE appearing before all SUBCASE commands will appear in the output for all subcases except those in Remark 
3. If no SUBTITLE command is present, the subtitle line will be blank.
4. The subtitle also appears on plotter output.
