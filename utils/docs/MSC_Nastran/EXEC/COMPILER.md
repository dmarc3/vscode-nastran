## [COMPILER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.COMPILER.xhtml) - DMAP Compiler Output Options

Requests compilation of a DMAP sequence and/or overrides defaults on the COMPILE statement.

#### Format:

![executive00673.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00673.jpg?_LANG=enus)  

#### Example:

```nastran
COMPILER=LIST
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LIST, NOLIST │ LIST requests the compilation listing of the solution sequence. NOLIST suppresses the listing.    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DECK, NODECK │ DECK requests that the DMAP source statements of the solution sequence be written to the PUNCH    │
│              │ file. NODECK suppresses the DECK option.                                                          │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REF, NOREF   │ REF requests a compilation cross reference. NOREF suppresses a compilation cross reference.       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GO, NOGO     │ GO requests the execution of the solution sequence following compilation. NOGO requests           │
│              │ termination following compilation.                                                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT, NOSORT │ SORT compiles subDMAPs in alphabetical order. NOSORT compiles subDMAPs in calling sequence order. │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. REF is equivalent to DIAG 4. LIST   is equivalent to DIAG 14. DECK is equivalent to DIAG 17.
2. NOGO is an alternative to NOEXE on the SOL statement.
3. This statement provides a means of obtaining a compilation or source listing, or both, of a complete solution sequence, including all the component subDMAPs.
4. See the COMPILE statement to compile a single subDMAP.
5. This statement also requests the automatic link of the solution sequence. Therefore, all objects must be created in the current run or obtained from the DBset such as USROBJ. See the COMPILE statement for how to create and store objects.
6. The COMPILER statement may be used to override the defaults of NOLIST, NOREF, NODECK on the COMPILE entry when they are not explicitly specified. However, COMPILER LIST produces a list of the entire solution sequence. If a listing of only specific subdmaps is desired, then COMPILER LIST should not be specified and the LIST request should be made on the COMPILE entry.

```nastran
COMPILER REF
COMPILE MYDMAP
```
