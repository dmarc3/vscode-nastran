## [CSEAM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSEAM.xhtml) - A Shell Patch SEAM Connection

Defines a SEAM connecting two surface patches.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSEAM   EID     PID     SMLN    CTYPE   IDAS    IDBS    IDAE    IDBE            
        GS      GE                                                              
```
#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSEAM   EID     PID             CTYPE   IDAS    IDBS    IDAE    IDBE            
        XS      YS      ZS      XE      YE      ZE                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSEAM   552     297                     43      48                              
        30422   77987                                                           
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PSEAM entry. (Integer > 0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SMLN      │ SEAM line identification. See Remark 2. (CHAR or blank)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CTYPE     │ Connectivity search type. (Character) If CTYPE = “PSHELL”, IDAS and IDBS are property              │
│           │ identification numbers of PSHELL’s. (Default) If CTYPE = “ELEM”, IDAS and IDBS are element         │
│           │ identification numbers.                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDAS,IDBS │ Used to define patch A and B or the start of patch A or B for a tailored blank. See Remark         │
│           │ 4. (Integer > 0) If CTYPE = “PSHELL”, required property id defining patches A and B. If            │
│           │ CTYPE = “PSHELL” and IDAS = IDBS or IDBS = blank the patch will be considered as two-sided and the │
│           │ property identification numbers of PSHELL’s will be the same for both the top and bottom. See      │
│           │ Remark 6.  If CTYPE = “ELEM”, required element id defining patches A and B. IDASIDBS.              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDAE,IDBE │ Used to define the end of patch A and the end of patch B for a tailored blank. See Remark          │
│           │ 4. (Integer > 0 or blank) If CTYPE = “PSHELL”, property id defining patches A and B. If CTYPE =    │
│           │ ‘PSHELL’ and IDAE = IDBE or IDBE=blank the patch will be considered as two-sided and the property  │
│           │ identification numbers of PSHELL’s will be the same for both the top and bottom. If CTYPE =        │
│           │ “ELEM”, element id defining patches A and B. IDAEIDBE.                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GS, GE    │ Grid ids of piercing points on patches A and B of the Start and End of the SEAM. (Integer > 0)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XS,YS,ZS  │ Location of the SEAM Start. (Real or blank)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XE,YE,ZE  │ Location of the SEAM End. (Real or blank)                                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Element ID numbers must be unique with respect to all other element ID numbers.

2. With no embedded blanks any combination of up to eight of the acceptable characters in MSC Nastran may be employed for the SMLN entry.

     The seam line will be considered continuous between each connected element and where any two elements have a common face, the faces of the resulting internal CHEXA’s will be adjusted to a single common face. If a CSEAM’s GS or GE is not common to the GE or GS of any other CSEAM the faces will not be adjusted.

     A SMLN cannot have a branch.

3. GS and GE define the start and end points of the SEAM element. At these points and using the value W specified on the PSEAM entry, surface patches A and B are determined. Points are projected onto the surface patches A and B with the four points at end GS and the four points at end GE then used to form faces of a CHEXA element.

     The auxiliary points forming the faces of the CHEXA element are then connected to the physical grids of the patches. The number of unique physical grids per patch ranges from a possibility of 6 to 64 grids.

     The auxiliary points must have a projection on patches A and B, but they do not have to lie on patch A or B.

     A maximum of three shell elements of patch A and three shell elements of patch B can be connected with one CSEAM element, see  Figure 0-27 .

![bulkc202968.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202968.jpg?_LANG=enus)

Figure 0-27 Connected Shell Elements for a CSEAM Element

4. For CTYPE = ‘PSHELL’
If patch A is uniform in thickness, then only its IDAS is needed to define it.
If patch B is uniform in thickness, then only its IDBS is needed to define it.
If patch A has stepped tapering, then IDAS and IDAE are used to define it.
If patch B has stepped tapering, then IDBS and IDBE are used to define it.

5. Projection Algorithms for the CSEAM Elements

     Because of complex geometry, the user supplied start point GS may not have a projection SA and SB, and the end point GE may not have a projection EA and EB. Even though these four projection points are found, the program still has to find projections for the eight auxiliary points SA1, SA2, …, EB2, and EB1 of the HEXA. The default projection strategy can be changed by overwriting the default values of the flags and parameters in the SWLDPRM Bulk Data entry.

a. Find Projections for SA, SB, EA, and EB

For CTYPE = “PSHELL”, the program finds the closest shell grids to GS and GE. The shell elements that are connected to these closest grids are defined as the candidate shell elements. While looping through each candidate shell element to compute the projection of GS and GE onto that element, the program always tries to get the most accurate projection. Even though a projection is found with PROJTOL > 0.0, the program still continues the projection calculations using PROJTOL=0.0. If a projection is found with PROJTOL=0.0, that shell element will be selected as the connecting element. Otherwise, the shell element that gets projection with PROJTOL>0.0 is selected as EIDSA, EIDSB, EIDEA, or EIDEB. For CTYPE = “ELEM”, the above processes are skipped, because EIDSA, EIDSB, EIDEA, and EIDEB have already been specified by the user.

If GSTOL > 0.0 and the distance GS-SA, GS-SB, GE-EA, or GE-EB is greater than GSTOL, a UFM 7549 is issued and the CSEAM element is rejected.

If the projection of GS or GE lies outside the shell sheet, or the connected shell elements fail the geometry check with GMCHK > 0, the program will issue a UFM and the CSEAM element will be rejected.

If GMCHK > 0, the program checks errors of CSEAM across a cutout or over a corner with elements in plane. The program also computes the angle between the shell normal vectors of EIDSA and EIDEA and the angle between the shell normal vectors of EIDSB and EIDEB to check a corner with elements out of plane.

For CTYPE = “PSHELL”, if there is an error detected, the program loops back to compute the other possibility of projection until a correct connection is found or all candidate shell elements are processed. In the latter case, either UFM 7638 (the seam spans a cutout) or UFM 7667 (the seam spans a corner) will be issued. If GMCHK=2, the program also lists all candidate shell elements with their projection status for each connecting type after issuing a UFM. This will help the user to select the correct shell elements for EIDSA, EIDSB, EIDEA, and EIDEB.

For CTYPE=”ELEM”, the program only checks errors and issues UFM 7638 or 7667 for the kind of error encountered. No looping back will be performed.

If GMCHK > 0 and GSPROJ  >  0.0, the program also computes the angle between the shell normal vectors of EIDSA and EIDSB and the angle between the shell normal vectors of EIDEA and EIDEB. A UFM 7595 is issued if the angle between the shell normal vectors is greater than GSPROJ. By default, GSPROJ = 20 o , that means the shell patches A and B can be tilted relative to each other by not more than 20 o .

b. Find Projections of the Eight Auxiliary Points SA1, SA2, …, EB2, and EB1

After the projections for SA, SB, EA, and EB have been found, eight auxiliary points for an internal hexagonal polygon are formed. If the GS or GE of a CSEAM element is connected to the GE or GS of another CSEAM element, then the internal HEXA elements are adjusted to a common face.

If GSPROJ  >  0.0 and the angle between the face vectors parallel to the thickness direction of the internal HEXA and the normal vector of the shell element that gets projection exceeds GSPROJ, the program will skip picking this shell element and will proceed to process next candidate shell element.

The most common error condition occurs when the seam lies on the edge of the shell patches. Under this situation, half of the seam hangs outside the shell sheets ( Figure 0-28 ). It is required that each of the eight points has a projection. If at least one point does not have a projection and GSMOVE > 0, GS will be moved by W/2. Same algorithms apply to end E. The move will be repeated until either all projections are found or the number of moves reaches GSMOVE.

![bulkc202970.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202970.jpg?_LANG=enus)

Figure 0-28 Seam Weld at an Edge

c. Error Checks by GMCHK Parameter

The GMCHK parameter specified in the SWLDPRM Bulk Data entry checks the errors of CSEAM elements across cutouts or over corners. There are three allowable values of GMCHK.

     • GMCHK = 0 (Default) Do not check errors

     • GMCHK = 1 Check errors

     • GMCHK = 2 Check errors and output all candidate shell elements if there is an error encountered

If GMCHK is turned on, Nastran will perform the following checking while searching for the projected shell elements. Note that EIDSA is the shell element that gets projection from GS on shell A; EIDEA is the shell element that gets projection from GE on shell A. Same algorithms are applied to EIDSB and EIDEB for shell B.

d. Check the CSEAM Across a Cutout or Over a Corner with Elements in Plane

     • If EIDSA is equal to EIDEA, the seam lies within one element. No checks are required.

     • If EIDSA and EIDEA share two corner grids, these elements are adjacent. No checks are required.

     • If EIDSA and EIDEA share only one corner grid, the seam is over a corner. There are two exceptions:

     There exists a shell element (EIDMA) that shares two corner grids with EIDSA and EIDEA. Also, either the angle  ![bulkc202972.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202972.jpg?_LANG=enus)  between vector S 1 S 2  and vector E 1 E 4  is greater than CNRAGLI degrees or the middle point (M) of line segment S 2 E 4  projects to EIDSA, EIDMA, or EIDEA.

![bulkc202974.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202974.jpg?_LANG=enus)

![bulkc202976.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202976.jpg?_LANG=enus)

This shared grid is a shell grid of another two different shell elements.

![bulkc202978.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202978.jpg?_LANG=enus)

     • If EIDSA and EIDEA do not share any corner grid, Nastran will check if there is an element (EIDMA) lying between EIDSA and EIDEA. EIDMA must share two corner grids with EIDSA and another different one corner grid with EIDEA, or vice versa. The following five examples demonstrate the acceptable and failed cases.

EIDMA shares one edge with EIDSA and shares one corner grid with EIDEA. This case is acceptable.

![bulkc202980.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202980.jpg?_LANG=enus)

EIDMA shares one edge with IEDEA and shares one corner grid with EIDSA. This case is acceptable.

![bulkc202982.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202982.jpg?_LANG=enus)

EIDMA shares one corner grid with EIDSA and shares another corner grid with EIDEA. An error is detected because the seam spans a cutout.

![bulkc202984.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202984.jpg?_LANG=enus)

EIDMA shares one edge with EIDSA and shares another edge with EIDEA. This case is acceptable.

![bulkc202986.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202986.jpg?_LANG=enus)

There does not exist a single element that shares an edge or corner grid with EIDSA or EIDEA. An error is detected because the length of the seam spans more than three elements.

![bulkc202988.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202988.jpg?_LANG=enus)

e. Check the CSEAM Over a Corner with Elements Out of Plane

The CNRAGLO parameter is used to check the error of a seam over a corner with EIDSA and EIDEA not lying on a same plane. An error is detected if the angle  ![bulkc202990.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202990.jpg?_LANG=enus)  between the shell normal vectors of EIDSA and EIDEA is greater than CNRAGLO. The default value of CNRAGLO is 20 o . No angles will be checked if CNRAGLO = -1.

![bulkc202992.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202992.jpg?_LANG=enus)

f. Modeling Guidelines

When there exist multiple pairs of connections, it is recommended that either the GMCHK and GSPROJ flags be turned on to filter out tilted connections or the ELEM option be used to specify the IDs of the connected shell elements directly. For example, if EIDA1 is connected to EIDB2 or EIDA2 is connected to EIDB1, the element tangent vectors will be computed wrong and the auxiliary points will not be able to find connected shell elements.

![bulkc202994.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202994.jpg?_LANG=enus)

6. The projection algorithm for the two-sided option will be the same as in Remark   above once the two patches A and B have been established. The program will find the closest shell grids to GS and GE as usual for candidate shell elements for patch A.

     It will compute the normal for the candidate patch A (similar for GE) and for the candidate patch B. If the normals are approximately aligned (within a tolerance) the algorithm will proceed as in Remark  5.

     If the normals of the candidate patch’s A and B do not align within a specified tolerance, the algorithm will use another set of pairs of grids for candidate patches to find a new patch A and B. If their normals align within a specified tolerance it will proceed as in Remark  5.  If after processing all reasonable pairs of patches, no alignment of normals are found or the patches A and B at GE have different normal alignment from the patches A and B at GB, a user fatal will be issued.

```text
┌───────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ For the two-sided option, GS and GB must lie between patches A and B. Also, the shell elements    │
│       │ that get projections from GS/GE cannot share a common shell grid. This option always selects the  │
│       │ patch with the shell grids closest to GS/GE as patch A. Avoid having GS/GE exactly midway between │
│       │ the two patches.                                                                                  │
└───────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
7. If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark  10.  for that entry.

8. The CSEAM contributes to MASS if its PSEAM entry has an associated MATi entry with a non-zero density. PARAM,COUPMASS effects the mass calculation.  In SOL400, the behavior of this element in regard to large rotation is affected by the Case Control Command Rigid.

9. If partitioned superelements are present, then CSEAM is supported in the main Bulk Data section only.

