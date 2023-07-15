## [MDFAST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDFAST.xhtml) - A Shell Patch Fastener Connection Between Two Modules

Defines a fastener with material orientation connecting two surface patches defined in two Modules.

#### Format:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDFAST  EID     PID     TYPE    IDA     IDB     GS      GA      GB              
        XS      YS      ZS                      MODA    MODB                    
```
#### <span></span>

#### Example using PROP:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDFAST  3       20      PROP    21      24      206                             
                                                        10      20              
```
#### <span></span>

#### Example using ELEM:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDFAST  7       70      ELEM    27      74      707                             
                                                        11      12              
```
#### <span></span>

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PFAST entry. (Integer > 0; Default = EID)                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Specifies the surface patch definition: (Character) If TYPE = ‘PROP’, the surface patch           │
│           │ connectivity between patch A and patch B is defined with two PSHELL (or PCOMP) properties with    │
│           │ property ids given by IDA and IDB. Under CFAST see Remark 1. and Figure 8-28. If TYPE = ‘ELEM’,   │
│           │ the surface patch connectivity between patch A and patch B is defined with two shell element ids  │
│           │ given by IDA and IDB. Under CFAST see Remark 1. and Figure 8-28.                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDA,IDB   │ Property id (for PROP option) or Element id (for ELEM option) defining patches A and B in Modules │
│           │ MODA and MODB, respectively. IDA≠IDB (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GS        │ Grid point defining the location of the fastener. Its GRID entry must be defined in the main Bulk │
│           │ Data section (Module 0). See also Remark 2. under CFAST. (Integer > 0 or blank)                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA,GB     │ Grid ids of piercing points on patches A and B. Their GRID entries must be defined in the main    │
│           │ Bulk Data section (Module 0). See also Remark 2. under CFAST. (Integer > 0 or blank)              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XS,YS,ZS  │ Location of the fastener in basic. Required if neither GS nor GA is defined. See also Remark      │
│           │ 2.under CFAST. (Real or blank)                                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODA,MODB │ Module IDs that contain the surface patches defined by property or element entries IDA and IDB    │
│           │ (Integer ≥ 0).                                                                                    │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The MDFAST entry must be defined in the main Bulk Data section only (Module 0).

2. See all remarks and figures under the CFAST entry description. All remarks and figures under CFAST apply to MDFAST.

