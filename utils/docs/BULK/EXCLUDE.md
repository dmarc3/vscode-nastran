## [EXCLUDE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EXCLUDE1.xhtml) - Ignore Bulk Data entries from primary to secondary Module

Specifies Bulk Data entries in the primary Module to be ignored in the secondary (or copied) Module.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EXCLUDE ENTRY1  ENTRY2  ENTRY3  -etc.,                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EXCLUDE SPC     FORCE                                                           
```

```text
┌───────────┬──────────────────────────────────────────┐
│ Describer │ Meaning                                  │
├───────────┼──────────────────────────────────────────┤
│ ENTRYi    │ Name of a Bulk Data entry to be ignored. │
└───────────┴──────────────────────────────────────────┘
```

#### Remarks:

1. A secondary Module may have its own BEGIN MODULE section but it is not required as long as the user is willing to accept all modeling data from the reference Module because, by default, all entries in the reference Module will be copied to the secondary Module. However, if the user wishes to exclude and/or replace some of the entries from the reference Module in the copy then he simply specifies at least one instance of the entry to be ignored. For example, if the user wants to ignore all FORCE entries from the reference Module then specify a single FORCE entry in the secondary Module's Bulk Data section. Alternatively, the user may specify a list of Bulk Data entries to ignore on the EXCLUDE Bulk Data entry in the secondary Module's Bulk Data section.
2. EXCLUDE must be specified in the secondary (or copied) Module's Bulk Data section.
3. GRID entries cannot be ignored or replaced and EXCLUDE,GRID will cause a fatal error.
4. See   for the definition of secondary (or copied) Modules.
