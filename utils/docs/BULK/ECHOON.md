## [ECHOON](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.ECHOON.xhtml) - Activate Printed Echo

Marks the point or points in the input file to activate printed echo of the input file.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ECHOON                                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ECHOON                                                                          
```

#### Remarks:

1. This entry may also be used in the Executive Control and Case Control Sections. It is described in the Case Control command,  .
2. The companion to this entry is the ECHOOFF entry.
3. The ECHOON command is BEGIN BULK or BEGIN SUPER = n dependent. Its last time used does carry over between changes in BEGIN BULK or BEGIN SUPER = n commands. Also, the Case Control ECHO command should be above subcase level and the following is recommended: ECHO=UNSORT.
