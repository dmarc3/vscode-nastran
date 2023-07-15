## [MDWELD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDWELD.xhtml) - Weld or Fastener Element Connection Between Two Modules

Defines a weld or fastener connecting two surface patches or points between two Modules.

#### Format PARTPAT:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  EWID    PWID    GS      “PART...GA      GB              MCID            
        PIDA    PIDB                    MODA    MODB                            
        XS      YS      ZS                                                      
```
#### Example:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  101     8       203     PARTPAT                                         
        21      33                      11      21                              
```
#### <span></span>

#### Alternate formats and examples:

#### Format ELPAT:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  EWID    PWID    GS      “ELPAT” GA      GB              MCID            
        SHIDA   SHIDB                   MODA    MODB                            
        XS      YS      ZS                                                      
```
#### Example:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  103     5       403     ELPAT                                           
        309     511                     11      21                              
```
#### <span></span>

#### Format ELEMID:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  EWID    PWID    GS      “ELEMID”GA      GB              MCID            
        SHIDA   SHIDB   MODS            MODA    MODB                            
```
#### <span></span>

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  103     5       403     ELEMID                                          
        309     511                     11      12                              
```
#### Format GRIDID:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  EWID    PWID    GS      “GRIDID”GA      GB      SPTYP   MCID            
                                        MODA    MODB                            
        GA1     GA2     GA3     GA4     GA5     GA6     GA7     GA8             
        GB1     GB2     GB3     GB4     GB5     GB6     GB7     GB8             
```
#### <span></span>

#### Example:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  7       29      233     GRIDID                  QT                      
                                        11      21                              
        15      28      31      35      46      51      55      60              
        3       5       8                                                       
```
#### <span></span>

#### Format ALIGN:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  EWID    PWID            “ALIGN” GA      GB              MCID            
                                        MODA    MODB                            
```
#### <span></span>

#### Example:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDWELD  7       29              ALIGN   103     259                             
                                        11      21                              
```
#### <span></span>

```text
┌────────────┬──────────────────────────────────┬───────────────────────────┬───────────────────────────────┐
│ Describer  │ Meaning                          │ Type                      │ Default                       │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ EWID       │ MDWELD element identification    │ 0 < Integer < 100,000,000 │ Required                      │
│            │ number. See Remark 1 under       │                           │                               │
│            │ CWELD.                           │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ PWID       │ Property identification number   │ Integer > 0               │ Required                      │
│            │ of a PWELD entry.                │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ GS         │ Identification number of a grid  │ Integer > 0 or blank      │                               │
│            │ point which defines the location │                           │                               │
│            │ of the connector. GRID entry for │                           │                               │
│            │ GS must be defined in main Bulk  │                           │                               │
│            │ Data section only (Module 0)     │                           │                               │
│            │ except for a point-to-patch      │                           │                               │
│            │ connection with OPTION=”ELEMID”  │                           │                               │
│            │ in which case GS must be defined │                           │                               │
│            │ in Module MODS. See Remarks      │                           │                               │
│            │ 2. and 3. under CWELD.           │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│            │ Character string indicating the  │ Character                 │ Required                      │
│            │ type of connection. The format   │                           │                               │
│            │ of the subsequent entries        │                           │                               │
│            │ depends on the type. “PARTPAT”,  │                           │                               │
│            │ for example, indicates that the  │                           │                               │
│            │ connectivity of surface patch A  │                           │                               │
│            │ to surface patch B is defined    │                           │                               │
│            │ with two property identification │                           │                               │
│            │ numbers of PSHELL entries, PIDA  │                           │                               │
│            │ in Module MODA and PIDB in       │                           │                               │
│            │ Module MODB, respectively. The   │                           │                               │
│            │ “PARTPAT” format connects,       │                           │                               │
│            │ depending on the diameter, many  │                           │                               │
│            │ elements per patch. See Remark   │                           │                               │
│            │ 4. under CWELD.                  │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ GA, GB     │ Grid point identification        │ Integer > 0 or blank      │ Blank                         │
│            │ numbers of piercing points on    │                           │                               │
│            │ surface A and surface B,         │                           │                               │
│            │ respectively. GRID entries for   │                           │                               │
│            │ GA and GB must be defined in the │                           │                               │
│            │ main Bulk Data section only      │                           │                               │
│            │ (Module 0) except for            │                           │                               │
│            │ OPTION=”ALIGN”. See Remark 5.    │                           │                               │
│            │ under CWELD.                     │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ MCID       │ Specifies the element stiffness  │ Integer > -1 or blank     │ Default = -1                  │
│            │ coordinate system. See Remark    │                           │                               │
│            │ 16. under CWELD                  │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ MODS       │ Module ID that contains GRID     │ Integer ≥ 0               │ Default = 0                   │
│            │ entry for GS. Only used for      │                           │                               │
│            │ point-to-patch connection with   │                           │                               │
│            │ OPTION=’ELEMID”.                 │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ MODA, MODB │ Module IDs that contain the      │ Integer ≥ 0               │ Default = 0                   │
│            │ surface patches defined by (1)   │                           │                               │
│            │ property entries PIDA and PIDB,  │                           │                               │
│            │ (2) element entries SHIDA and    │                           │                               │
│            │ SHIDB or (3) GRID entries GAi    │                           │                               │
│            │ and GBi, respectively.           │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ PIDA, PIDB │ Property identification numbers  │ Integer > 0               │ Required for “PARTPAT”        │
│            │ of PSHELL entries defining       │                           │                               │
│            │ surface A in Module MODA and B   │                           │                               │
│            │ in Module MODB, respectively.    │                           │                               │
├────────────┼──────────────────────────────────┼───────────────────────────┼───────────────────────────────┤
│ XS, YS, ZS │ Coordinates of spot weld         │ Real                      │ Required if GS and GA are not │
│            │ location in basic. See Remark 2. │                           │ defined.                      │
│            │ under CWELD.                     │                           │                               │
└────────────┴──────────────────────────────────┴───────────────────────────┴───────────────────────────────┘
```
#### <span></span>

For the alternate formats, the describer meaning are described below: 

```text
┌──────────────┬──────────────────────────────────┬─────────────┬───────────────────────┐
│ Describer    │ Meaning                          │ Type        │ Default               │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ “ELPAT”      │ Character string indicating that │ Character   │ Required              │
│              │ the connectivity of surface      │             │                       │
│              │ patch A to surface patch B is    │             │                       │
│              │ defined with two shell element   │             │                       │
│              │ identification numbers, SHIDA in │             │                       │
│              │ Module MODA and SHIDB in Module  │             │                       │
│              │ MODB, respectively. The “ELPAT”  │             │                       │
│              │ format connects, depending on    │             │                       │
│              │ the diameter, many elements per  │             │                       │
│              │ patch. See Remark 6. under       │             │                       │
│              │ CWELD.                           │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ SHIDA, SHIDB │ Shell element identification     │ Integer > 0 │ Required for “ELPAT”  │
│              │ numbers of elements on patch A   │             │                       │
│              │ in Module MODA and B in Module   │             │                       │
│              │ MODB, respectively.              │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ “ELEMID”     │ Character string indicating that │ Character   │ Required              │
│              │ the connectivity of surface      │             │                       │
│              │ patch A to surface patch B is    │             │                       │
│              │ defined with two shell element   │             │                       │
│              │ identification numbers, SHIDA in │             │                       │
│              │ Module MODA and SHIDB in Module  │             │                       │
│              │ MODB, respectively. The “ELEMID” │             │                       │
│              │ format connects one shell        │             │                       │
│              │ element per patch. See Remark    │             │                       │
│              │ 7. under CWELD.                  │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ SHIDA, SHIDB │ Shell element identification     │ Integer > 0 │ Required for “ELEMID” │
│              │ numbers of elements on patch A   │             │                       │
│              │ in Module MODA and B in Module   │             │                       │
│              │ MODB, respectively.              │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ “GRIDID”     │ Character string indicating that │ Character   │ Required              │
│              │ the connectivity of surface      │             │                       │
│              │ patch A in Module MODA to        │             │                       │
│              │ surface patch B in Module MODB   │             │                       │
│              │ is defined with two sequences of │             │                       │
│              │ grid point identification        │             │                       │
│              │ numbers, GAi in Module MODA and  │             │                       │
│              │ GBi in Module B, respectively.   │             │                       │
│              │ The “GRIDID” format connects the │             │                       │
│              │ surface of any element. See      │             │                       │
│              │ Remark 8. under CWELD.           │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ SPTYP        │ Character string indicating      │ Character   │ Required for “GRIDID” │
│              │ types of surface patches A and   │             │                       │
│              │ B. SPTYP = “QQ”, “TT”, “QT”,     │             │                       │
│              │ “TQ”, “Q” or “T”. See Remark 9.  │             │                       │
│              │ under CWELD.                     │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ GAi          │ Grid identification numbers of   │ Integer > 0 │ Required for “GRIDID” │
│              │ surface patch A. GA1 to GA3 are  │             │                       │
│              │ required. Their GRID entries     │             │                       │
│              │ must be defined in Module MODA   │             │                       │
│              │ only. See Remark 10. under       │             │                       │
│              │ CWELD.                           │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ GBi          │ Grid identification numbers of   │ Integer > 0 │                       │
│              │ surface patch B. Their GRID      │             │                       │
│              │ entries must be defined Module   │             │                       │
│              │ MODB only. See Remark 10. under  │             │                       │
│              │ CWELD.                           │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ “ALIGN”      │ Character string indicating that │ Character   │ Required              │
│              │ the connectivity of surface A to │             │                       │
│              │ surface B is defined with two    │             │                       │
│              │ shell vertex grid points GA in   │             │                       │
│              │ Module MODA and GB in Module     │             │                       │
│              │ MODB, respectively. See Remark   │             │                       │
│              │ 11. under CWELD.                 │             │                       │
├──────────────┼──────────────────────────────────┼─────────────┼───────────────────────┤
│ GA, GB       │ Vertex grid identification       │ Integer > 0 │ Required for “ALIGN”  │
│              │ number of shell A and B,         │             │                       │
│              │ respectively. GA and GB GRID     │             │                       │
│              │ entries must be defined in       │             │                       │
│              │ Module MODA and Module MODB,     │             │                       │
│              │ respectively.                    │             │                       │
└──────────────┴──────────────────────────────────┴─────────────┴───────────────────────┘
```
#### Remarks:

1. The MDWELD entry must be defined in the main Bulk Data section only (Module 0).

2. See all remarks and figures under the CWELD entry description. All remarks and figures under CWELD apply to MDWELD.

