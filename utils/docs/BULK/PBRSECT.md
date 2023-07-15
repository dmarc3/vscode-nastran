## [PBRSECT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBRSECT.xhtml) - Arbitrary Cross-Section for CBAR

Defines the shape of arbitrary cross-section for CBAR element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBRSECT PID     MID     FORM    NSM                                             
        Data ...
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBRSECT 1       10      GS                                                      
        OUTP=...        
PBRSECT 1       10      CP                                                      
        OUTP=...        
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                          │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                    │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                    │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ FORM      │ Cross-section form. (Character) See Remark 1.                    │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ NSM       │ Non-structural mass per unit length. (Real > 0.0; Default = 0.0) │
└───────────┴──────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Options for FORM are

GS

General Section

OP

Open Profile

CP

Closed Profile

--------------------

2. Keywords for describing the arbitrary cross-section:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
For G...
OUTP    =       value...
For G...
INP(id) =       value...
For O...
BRP(id) =       value(Integer > 0); points to the ID of a SET1 or SET3 that specifies a BRanch. The rules for BRP are:
                ◾BRP must start from and/or end on OUTP.
                ◾Segment length, defined as distance between two neighboring points on BRP or OUTP, is preferably to be longer than the segment thickness. Closely spaced points creates denser mesh for the cross section and does not increase accuracy of properties significantly.
T(id)   =       [value(real > 0.0),PT=(pid1,pid2)]; specifies the thickness of a segment in profile. PT=(pid1,pid2) defines the end points of a straight line segment. The rules for T(id) are:
                ◾For CP and OP, it is a requirement to have a T(id) without PT=(pid1,pid2) to serve as a default thickness for all segments which do not have its thickness specified. This requirement is valid even when the thickness for every segment is specified.
                ◾pid1 and pid2 under PT=( ) do not need to be neighboring points of a SET. However, pid1 and pid2 must hold its position as in SETx for OUTP and/or BRP.
                ◾Same segment may be covered by different T(id). T(id) are processed sequentially as specified. The thickness of the last T(id) for a segment is used as the thickness of a segment. Use 'PARAM,ARBMNOW,1' to turn off segment property overwrite.
                ◾For CP, T(id) of segment that close the profile must have (pid1=ID of last point in OUTP, pid2=ID of first point in OUTP). Note that, if input for pid1 and pid2 are reversed, T(id) will cover all segments in OUTP except the one that close the profile.
NSM     =       value...
(id)    =       integ...
```
3. Stress data recovery points are selected automatically from all points of a PBRSECT with GS form. The points with maximum and/or minimum coordinates in X1 and/or X2 axes are more likely to be picked. For PBRSECT with CP or OP form, the stress data recovery points are selected from points with computed coordinates that actually encircle the profile. Similar to GS form, the points with extreme coordinates are more likely to be selected.

4. Only the POINT entry ID should be listed under SET1 or SET3 entries which, in turn, are referenced by OUTP, INP and BRP. In addition, the POINT entry for defining an arbitrary beam cross section must have the CP and X3 fields left blank.

5. See Remark   of the PBMSECT entry for the theory used to compute the cross-sectional properties.

![bulkp06778.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06778.jpg?_LANG=enus)

Figure 0-81 Arbitrary Cross-Section Definition

6. PBRSECT is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBRSECT property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBAR, PBARL, PBRSECT entries.

