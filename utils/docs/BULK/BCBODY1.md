## [BCBODY1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBODY1.xhtml) - Flexible or Rigid Contact Body in 2D and 3D (New Form)

Defines a flexible or rigid contact body in 2D or 3D used in SOLs 101, 400, and 700 only.

If the body is rigid, this entry may refer to BCRIGID entry by the BCRGID field to describe the body. See Remark  1.  for an important note regarding how to define the outward direction of rigid bodies (which must point towards a flexible body for contact to occur).

Deformable bodies are described using as many standard elements as necessary and are specified by the BSID field with BEHAV=DEFORM. Unless shrink fit or interference fit is being analyzed, deformable bodies should not be inside other deformable bodies when the thickness of each body is taken into account.

#### Format: (SOLs 101 and 400 only)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBODY1 BID     BPID    DIM     BEHAV   BSID    BCRGID  BCGOUT                  
```

#### Format: (SOL 700 only)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBODY1 BID                             BSID                                    
```

#### Examples of Deformable and Rigid Contact:

#### Example 1 -- Typical deformable body

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBODY1 94      3001            DEFORM  103                                     
```

#### Example 2 -- Simple rigid patch (see Remark 1. for rigid bodies)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBODY1 6       3001            RIGID   206     115                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID       │ Unique contact body identification number referenced by BCONECT, BCHANGE, or BCMOVE. (Integer > 0; │
│           │ Required)                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BPID      │ Parameter identification number of a BCBDPRP entry. (Integer > 0 or blank) Ignored in SOL 700. See │
│           │ Remark 2.                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIM       │ Dimension of body. (Character; Default= 3D) Ignored in SOL 700. DIM=2D: planar body in x-y plane   │
│           │ of the basic coordinate system, composed of 2D elements or curves. DIM=3D: any 3D body composed of │
│           │ rigid surfaces, shell elements or solid elements.                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHAV     │ Behavior of curve or surface (Character; Default = DEFORM) Ignored in SOL 700. DEFORM body is      │
│           │ deformable; RIGID body is rigid (See Remark 1.); SYMM body is a symmetry rigid body; HEAT          │
│           │ indicates body is a heat-rigid body (See Remark 3..).                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BSID      │ For SOLs 101 and 400: Identification number of a BSURF or BCPROP entry if BEHAV=DEFORM or HEAT, or │
│           │ identification number of a BCRGSRF, BCPATCH, BCBZIER, BCNURB2, or BCNURBS entry if BEHAV=RIGID or  │
│           │ SYMM (See Remark 4.). For SOL 700: Identification number (RBID) of a BSURF, BCBOX, BCPROP, BCMATL, │
│           │ BCSEG, BCGRID or BCELIPS entry. (Integer > 0).                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCRGID    │ For SOLs 101 and 400: Identification number of a BCRIGID entry if BEHAV=RIGID or SYMM. Ignored in  │
│           │ SOL 700. (Integer > 0)                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCGOUT    │ Reference point in basic coordinate system to calculate the global resultant contact force/moment  │
│           │ (integer)                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ -1        │ Origin                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 0         │ Estimated centroid of deformable body (default)                                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. WARNING: For rigid contact, the right hand rule determines the interior side of the rigid surface. A deformable surface which contacts a rigid surface must be on the exterior side of the rigid surface (i.e., in the direction opposite to the right hand rule). If a rigid surface is described backwards, contact will not occur because the deformable body is already inside the rigid body at the start of the analysis.
2. If BPID field is blank, then default values are set for the parameters defined in BCBDPRP entry.
3. For pure thermal analysis, BEHAV=DEFORM and BEHAV=HEAT are identical. However, in coupled thermal-mechanical analysis, BEHAV=DEFORM specifies a deformable in mechanical analysis part, while BEHAV=HEAT defines a rigid meshed body in mechanical analysis part.
4.  If BCRGSRF entry does not exist, BCBODY1 entry can refer to one of the identification number of BCPATCH, BCBZIER, BCNURB2, or BCNURBS entry directly (RBID).
