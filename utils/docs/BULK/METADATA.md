## [METADATA](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.METADATA.xhtml) - Metadata for the input section

Defines the entry metadata.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
METADATAMETA                                                            +
+       METAINFO
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
METADATARear_Fender                                                     +
+       This is line 1 of metadata                                      +
+       This is line 2 of metadata                                      +
+       This is line 3 of metadata
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ META      │ Character handle of up to 24 characters identifying the metadata.                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ METAINFO  │ A open-ended list of strings of 64 characters that represents the user information. │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. META can include any character from defined bulk character set
2. METAINFO can contain basic Nastran characters and special symbols.
