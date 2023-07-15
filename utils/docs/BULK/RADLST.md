## [RADLST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RADLST.xhtml) - Listing of Enclosure Radiation Faces

Identifies the individual CHBDYi surface elements that comprise the entire radiation enclosure.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADLST  ICAVITY MTXTYP  EID1    EID2    EID3    EID4    EID5    EID6            
        EID7    -etc.-                                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADLST  2       1       2       3       4       5       6       7               
```
```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ICAVITY   │ Unique cavity identification number that links a  │                                                   │
│           │ radiation exchange matrix with its listing of     │                                                   │
│           │ enclosure radiation faces.  (Integer > 0)         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MTXTYP    │ Type of radiation exchange matrix used for this   │                                                   │
│           │ cavity.  (Integer < 4 and0; Default = 1 for an    │                                                   │
│           │ enclosure without an ambient element.  Default =  │                                                   │
│           │ 4 for an enclosure with an ambient element as     │                                                   │
│           │ specified on the RADCAV entry.)                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │ Symmetric view factor matrix [F] and              │
│           │                                                   │ nonconservative radiation matrix [R].             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2                                                 │ Symmetric exchange factor matrix  and             │
│           │                                                   │ conservative radiation matrix [R].                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 3                                                 │ Unsymmetric exchange factor matrix  and           │
│           │                                                   │ conservative radiation matrix [R].                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 4                                                 │ Symmetric view factor matrix [F] and conservative │
│           │                                                   │ radiation matrix [R].                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ -n                                                │ The first n CHBDYi elements may lose energy to    │
│           │                                                   │ space but the remainder may not.  Symmetric       │
│           │                                                   │ exchange factor matrix [F] and nonconservative    │
│           │                                                   │ radiation matrix [R].                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EIDi      │ Identification numbers for the CHBDYi elements in │                                                   │
│           │ this radiation cavity.  (Integer0 or “THRU”)      │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. A radiation EIDi list isolates those CHBDYi surface element faces that are to communicate in a radiation enclosure.  View-factor calculation and RADMTX formation for an enclosure is performed only for (or among) those faces identified within the same RADCAV.

2. A radiation exchange matrix (RADMTX) can only reference one radiative face list (RADLST).  The companion RADCAV, RADLST, and RADMTX must share a unique ICAVITY.

3. For each EIDi, the appropriate CHBDYi element is located, and the proper RADM entry ID field found.

4. If the radiation exchange matrix or any radiation boundary conditions are available from an external source, the RADMTX must be user generated.

5. Multiple RADLST entries may be specified.

6. If any RADLST entry is changed or added on restart then a complete re-analysis may be performed. Therefore, RADLST entry changes or additions are not recommended on restart.

