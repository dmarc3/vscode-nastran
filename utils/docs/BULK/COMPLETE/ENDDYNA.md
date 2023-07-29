## [ENDDYNA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.ENDDYNA.xhtml) - Defines the End of Direct Text to Dytran

All entries between TODYNA and ENDDYNA will be passed directly by SOL 700 to Dytran. Used in SOL 700 only.

#### Format:

```nastran
ENDDYNA                                                                         
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TODYNA                                                                          
MAT1    345     29.0E6  0.285   0.0004                                          
ENDDYNA                                                                         
```

#### Remarks:

See  TODYNA  for details of how this entry is used.
