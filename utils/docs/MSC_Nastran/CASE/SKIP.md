## [SKIP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SKIP.Case.xhtml) - Case Control Processing Delimiter

Activates or deactivates the execution of subsequent commands in Case Control (including plot commands).

#### Format:

![casecontrol4a01350.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01350.jpg?_LANG=enus)  

#### Example:

```nastran
SKIPOFF
```

#### Remarks:

1. SKIPON and SKIPOFF commands may appear as many times as needed in the Case Control Section.
2. Commands that are skipped will be printed.
3. SKIPON ignores subsequent commands until either a SKIPOFF or BEGIN BULK command is encountered. This allows the user to omit requests without deleting them from the data. In the following example, plot commands will be skipped.

```nastran
TITLE     =     EXAMPLE
SPC     =     5
LOAD     =     6
SKIPON     $     SKIP PLOT REQUEST
OUTPUT (PLOT)
SET 1 INCLUDE ALL
FIND
PLOT
BEGIN BULK
```
