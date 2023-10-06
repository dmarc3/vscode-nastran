## [CSEAM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSEAM.xhtml) - A Shell Patch SEAM Connection

Defines a SEAM connecting two surface patches.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSEAM   EID     PID     SMLN    CTYPE   IDAS    IDBS    IDAE    IDBE    +       
+       GS      GE                                                              
```

#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSEAM   EID     PID             CTYPE   IDAS    IDBS    IDAE    IDBE    +       
+       XS      YS      ZS      XE      YE      ZE                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSEAM   552     297                     43      48                      +       
+       30422   77987                                                           
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

     See link for remarks.