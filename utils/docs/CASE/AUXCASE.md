## [AUXCASE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AUXCASE.Case.xhtml) - Auxiliary Model Case Control Delimiter

Indicates (delimits) the beginning of Case Control commands for an auxiliary model in SOL 200.

#### Format:
```nastran
AUXCASE
```

#### Examples:
```nastran
AUXCAS
AUXC
```

#### Remarks:

1. AUXCASE commands must follow the primary model Case Control commands.
2. All Case Control commands following this entry are applicable until the next AUXCASE command, or the BEGIN BULK delimiter. Commands from preceding Case Control Sections are ignored.
3. Each auxiliary model Case Control must be delimited with the AUXCASE command.
4. The AUXMODEL command is used to associate the auxiliary model Case Control with a particular auxiliary model.
