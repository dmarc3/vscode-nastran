## [ACCSSPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACCSSPT.xhtml) - Access Point Definition

Defines a grid interior to an external superelement whose motion will be retained in the residual structure of the assembled superelement model. This entry is used during the external superelement creation run and is valid only in external superelements. TR

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACCSSPT GID1    GID2    GIDi    etc                                             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACCSSPT 117     119                                                             
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ GIDi      │ Identification number of a grid point designated as an access point (Integer>0) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. An access point may only be defined in an external superelement.

2. Access point IDs must be unique across all external superelements.

3. Access points must be interior points in the external superelement.

4. Access points will be automatically placed in the m-set of the residual structure of the assembly and will have the same displacements in the residual structure as it does in the external superelement.

5. If the user needs the access points to be in the a-set, or if user needs to connect access points from different superelements via MPCs, the following two parameters are required:

```nastran
PARAM, SEP1XOVR, 128
PARAM, AUTOMSET, YES
```

6. If Modules are present then this entry may only be specified in the main Bulk Data section.

