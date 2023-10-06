## [LDLABEL (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.LDLABEL.Case.xhtml) - Label assigned to a subcase (static load case) in the external superelement creation run

Assigns a character string to an external superelement creation run's subcase in order to identify the static load in the assembly run.

#### Format:

```nastran
LDLABEL [=load_label]
```

#### Example:

```nastran
LDLABEL
LDLABEL=GRAVITY LOAD ON THE OUTBOARD NACELLE
```

```text
┌────────────┬───────────────────────┐
│ Describer  │ Meaning               │
├────────────┼───────────────────────┤
│ load_label │ Any character string. │
└────────────┴───────────────────────┘
```

#### Remarks:

1. The LDLABEL command is used only when the EXTSEOUT command is specified.
2. If the LDLABEL is specified in any subcase but not all subcases then the following defaults will be applied to those subcases without LDLABEL in the following order:
     - LABEL inside the subcase
     - If no LABEL, then SUBTITLE inside the subcase
     - If no SUBTITLE, then TITLE inside the subcase
     - If it is desired that the default logic is to be applied to all subcases then specify LDLABEL with no argument above all subcases.
3. If the same load_label is specified in more than one SUBCASE then a User Warning Message will be issued.
4. Load_label may be referenced on the   Bulk Data entry.
