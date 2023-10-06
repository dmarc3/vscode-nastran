## [BCTABLE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCTABLE.xhtml) - Defines a Contact Table for General Contact

Defines a contact table used in SOL 101, 400 and 700. SOL 200 (without calling SOL 400) SOL 144, 145 and 146 can only support permanent glue. When SOL 200 calls SOL 400 (or say SOL 400 optimization), it can support all contact types. The BCTABL1 option is the preferred method to define a contact table.

#### Format: (SOLs 101 and 400 only)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTABLE ID      IDSCND  IDPRIM  NGROUP  COPTS   COPTM                   +       
+       “SECN...IDSEC1  ERROR   FNTOL   FRIC    CINTERF IGLUE           +       
+               ISEARCH ICOORD  JGLUE           DQNEAR                  +       
+               “FBSH”  FRLIM   BIAS    SLIDE   HARDS   COPTS1  COPTM1  +       
+               “BKGL”  BGSN    BGST    BGM     BGN                     +       
+               “SEGS”  PENALT  AUGDIST TPENALT STKSLP                  +       
+               “HHHB”  HCT     HCV     HNC     BNC     EMISS   HBL     +       
+                       HNL     BNL     HGLUE                           +       
+       “PRIM...IDPRIM1 IDPRIM2 IDPRIM3 IDPRIM4 IDPRIM5 IDPRIM6 IDPRIM7 +       
+               IDPRIM8 IDPRIM9 ...                                             
```

#### Format: (SOL 700 only)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTABLE ID      IDSCND  IDPRIM  NGROUP                                  +       
+       “SECN...IDSEC1                  FRIC            IGLUE           +       
+                               JGLUE                                   +       
+               FK      EXP     METHOD  ADAPT   THICK   THICKOF PENV    +       
+               FACT    TSTART  TEND    MAXPAR                          +       
+                       IADJ                                            +       
+                               IGNORE                                  +       
+                                                               AUTO    +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+                                                                       +       
+               SIDE    WEIGHT  MONDIS  MONDISV INITMON DAMPING         +       
+       "PRIM...IDPRIM1 IDPRIM2 IDPRIM3 IDPRIM4 IDPRIM5 IDPRIM6 IDPRIM7 +       
+               IDPRIM8 IDPRIM9 ...                                             
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTABLE 2                       3                                       +       
+       SECNDRY 10                      0.2                             +       
+       PRIMARY 20      30                                              +       
+       SECNDRY 20                      0.3                             +       
+       PRIMARY 10                                                      +       
+       SECNDRY 30                      0.2                             +       
+       PRIMARY 10                                                              
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTABLE 0       1       2       0                                               
```
