## [BCMOVE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCMOVE.xhtml) - Movement of Bodies in Contact

Defines movement of bodies in contact used in SOL 101 and SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCMOVE  ID      MTYPE                                                   +
+       IDRBOD1 IDRBOD2 IDRBOD3 etc.
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCMOVE  33      RELEASE                                                 +
+       1       3       5       7                                       +
BCMOVE  1       approach
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ID        │ Identification number referenced by a BCONTACT or │                                                  │
│           │ BCMOVE Case Control command within a SUBCASE or   │                                                  │
│           │ STEP. See Remark 1. (Integer > 0; Required)       │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MTYPE     │ Movement type. (Character; Default = APPROACH)    │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ APPROACH                                          │ All rigid bodies are moved so that they all make │
│           │                                                   │ contact with deformable bodies.                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ RELEASE                                           │ The contact condition is released for selected   │
│           │                                                   │ bodies.                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ SYNCHRON                                          │ All rigid bodies are moved until the first rigid │
│           │                                                   │ body makes contact with a deformable body.       │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ IDRBODi   │ Identification numbers of contact bodies to be    │                                                  │
│           │ released, for option RELEASE only. Points to      │                                                  │
│           │ BCBODY or BCBODY1 Bulk Data entries.              │                                                  │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. To place an entry in the loadcase 0, set ID=0, which does not need any corresponding Case Control command BCONTACT=0 or BCMOVE=0, and it is always executed automatically. To place an entry in any physical loadcase (SUBCASE or STEP), the ID must be selected by the Case Control command BCONTACT=ID or BCMOVE=ID. Note that if BCMOVE Case Control command exists, it always dominates the selection of BCMOVE Bulk Data entries. ID must be unique (only one BCMOVE per SUBCASE).
2. For MTYPE=APPROACH and MTYPE=SYNCHRON leave all following fields blank.
3. The APPROACH and SYNCHRON options apply to rigid contact surfaces only.
4. You may release a deformable body from contact with either a deformable or rigid body.
