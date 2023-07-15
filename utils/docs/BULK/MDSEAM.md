## [MDSEAM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDSEAM.xhtml) - A Shell Patch SEAM Connection Between Two Modules

 Defines a SEAM connecting two surface patches in two Modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDSEAM  EID     PID     SMLN    CTYPE   IDAS    IDBS    IDAE    IDBE            
        GS      GE                                      MODA    MODB            
```
#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDSEAM  EID     PID             CTYPE   IDAS    IDBS    IDAE    IDBE            
        XS      YS      ZS      XE      YE      ZE      MODA    MODB            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDSEAM  552     297                     43      48                              
        30422   77987                                   15      32              
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PSEAM entry. (Integer > 0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SMLN      │ SEAM line identification. See Remark 2. under CSEAM. (CHAR or blank)                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CTYPE     │ Connectivity search type. (Character) If CTYPE = “PSHELL”, IDAS and IDBS are property              │
│           │ identification numbers of PSHELL’s. (Default) If CTYPE = “ELEM”, IDAS and IDBS are element         │
│           │ identification numbers.                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDAS,IDBS │ Used to define patch A and B in Modules MODA and MODB or the start of patch A or B for a tailored  │
│           │ blank in Modules MODA and MODB. See Remark 2. under CSEAM (Integer > 0) If CTYPE = “PSHELL”,       │
│           │ required property id defining patches A and B in Modules MODA and MODB. If CTYPE = “PSHELL” and    │
│           │ IDAS = IDBS or IDBS = blank the patch will be considered as two-sided and the property             │
│           │ identification numbers of PSHELL’s will be the same for both the top and bottom. See Remark        │
│           │ 6. under CSEAM. If CTYPE = “ELEM”, required element id defining patches A and B in Modules MODA    │
│           │ and MODB. IDAS ≠ IDBS.                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDAE,IDBE │ Used to define the end of patch A and the end of patch B for a tailored blank in Modules MODA and  │
│           │ MODB. See Remark 4. under CSEAM. (Integer > 0 or blank) If CTYPE = “PSHELL”, property id defining  │
│           │ patches A and B. If CTYPE = ‘PSHELL’ and IDAE = IDBE or IDBE=blank the patch will be considered as │
│           │ two-sided and the property identification numbers of PSHELL’s will be the same for both the top    │
│           │ and bottom. If CTYPE = “ELEM”, element id defining patches A and B in Modules MODA and MODB. IDAE  │
│           │ ≠ IDBE.                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GS, GE    │ Grid ids of piercing points on patches A and B of the Start and End of the SEAM. Their GRID        │
│           │ entries must be defined in the main Bulk Data section (Module 0). (Integer > 0)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XS,YS,ZS  │ Location of the SEAM Start. (Real or blank)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XE,YE,ZE  │ Location of the SEAM End. (Real or blank)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODA,MODB │ Module IDs that contain the surface patches defined by property or element entries IDAS/IDAE and   │
│           │ IDBS/IDBE, respectively (Integer ≥ 0).                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The MDSEAM entry must be defined in the main Bulk Data section only (Module 0).

2. See all remarks and figures under the CSEAM entry description. All remarks and figures under CSEAM apply to MDSEAM.

