## [DRESP1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DRESP1.xhtml) - Design Sensitivity Response Quantities

Defines a set of structural responses that is used in the design either as constraints or as an objective.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DRESP1  ID      LABEL   RTYPE   PTYPE   REGION  ATTA    ATTB    ATT1            
        ATT2    -etc.-                                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DRESP1  1       DX1     STRESS  PROD    2       3               102             
        103                                                                     
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DRESP1  10      BMWW    WMPID   PSHELL          10              10              
        20      30                                                              
```
```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID          │ Unique entry identifier. (Integer > 0)                                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL       │ User-defined label. (Character, no default)                                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RTYPE       │ Response type. See Table 10. (Character)                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PTYPE       │ Element flag (PTYPE = “ELEM”) or property entry name. Used with element type responses (stress,    │
│             │ strain, force, etc.) to identify the property type, since property entry IDs are not unique across │
│             │ property types. (Character: “ELEM”, “PBAR”, “PSHELL”, etc.)                                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REGION      │ Region identifier for constraint screening. See Remark 10. for defaults. (Integer > 0)             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATTA, ATTB, │ Response attributes. See Table 10. (Integer > 0 or Real or blank)                                  │
│ ATTi        │                                                                                                    │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
```text
┌──────────────┬──────────────────────────────────┬──────────────────────────────────┐
│ Response     │ Response Attributes              │                                  │
│ Type (RTYPE) │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ATTA (Intege │ ATTB (Integer > 0 or Real > 0.0) │ ATTI (Integer > 0)               │
│ r > 0)       │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ WEIGHT       │ Row Number (1 < ROW < 6) See     │ Column Number (1 < COL < 6)      │
│              │ Remark 23.                       │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ VOLUME       │ Blank                            │ Blank                            │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FRMASS See   │ Blank                            │ Blank                            │
│ Remarks      │                                  │                                  │
│ 27. & 28.    │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ COMP See     │ Blank                            │ Blank                            │
│ Remark 27.   │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ EIGN         │ Normal Modes Mode Number. See    │ Approximation Code.  See Remark  │
│              │ Remark 32.                       │ 19.                              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ CEIG         │ Complex Eigenvalue Mode Number.  │ ALPHA or OMEGA (Default = ALPHA) │
│              │ (Integer > 0)                    │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FREQ         │ Normal Modes Mode Number. See    │ Approximation Code.  See Remark  │
│              │ Remarks 18. and 32.              │ 19.                              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ LAMA         │ Buckling Mode Number             │ Approximation Code.  See Remark  │
│              │                                  │ 19.                              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ DISP         │ Displacement Component           │ Blank or Mode Number             │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ STRAIN       │ Strain Item Code                 │ Blank or Mode Number             │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ESE          │ Strain Energy Item Code See      │ Blank or Mode Number             │
│              │ Remark 20.                       │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ STRESS       │ Stress Item Code                 │ Blank or Mode Number             │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FORCE        │ Force Item Code                  │ Blank or Mode Number             │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FATIGUE      │ Fatigue Item Code. See Remark    │ ID of a FATIGUE case control.    │
│ (pseudo-     │ 42.                              │ See Remark 39.                   │
│ static)  See │                                  │                                  │
│ Remark 38.   │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FRFTG        │ Fatigue Item Code. See Remark    │ ID of a FATIGUE case control.    │
│ (frequency   │ 42.                              │  See Remark 39.                  │
│ response -   │                                  │                                  │
│ random       │                                  │                                  │
│ vibration    │                                  │                                  │
│ fatigue) See │                                  │                                  │
│ Remark 38.   │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ SPCFORCE     │ SPC Force Component              │ Blank                            │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ CSTRAIN See  │ Strain Item Code                 │ LAMINA Number or GPLYIDi         │
│ Remark 2.    │                                  │ (Integer; Default = 1)           │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ CSTRESS See  │ Stress Item Code                 │ LAMINA Number or GPLYIDi         │
│ Remark 2.    │                                  │ (Integer; Default = 1)           │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ CFAILURE See │ Failure Indices Item Code        │ LAMINA Number or GPLYIDi         │
│ Remark 2.    │                                  │ (Integer; Default = 1)           │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ CSTRAT See   │ Composite Strength Ratio Item    │ LAMINA Number or GPLYIDi         │
│ Remark 2.    │ Code                             │ (Integer; Default = 1)           │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ TOTSE (Total │ Blank                            │ Blank or Mode Number             │
│ Strain       │                                  │                                  │
│ Energy)      │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ GPFORCE      │ GPFORCE Component Code (1-6;     │ Blank                            │
│              │ see Remark 24.)                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ GPFORCP      │ Grid Point (see Remark 25.)      │ Blank                            │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ABSTRESS     │ Arbitrary Beam Stress Item Code  │ Blank                            │
│              │ (see Remark 29.)                 │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FRDISP       │ Displacement Component           │ Frequency Value.  (Blank;        │
│              │                                  │ Real > 0.0 or Character) See     │
│              │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ PRES         │ Acoustic Pressure Component (= 1 │ Frequency Value. (Blank; Real    │
│              │ or 7)                            │ > 0.0 or Character) See          │
│              │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FRVELO       │ Velocity Component               │ Frequency Value.  (Blank;        │
│              │                                  │ Real > 0.0 or Character) See     │
│              │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FRACCL       │ Acceleration Component           │ Frequency Value.  (Blank;        │
│              │                                  │ Real > 0.0 or Character) See     │
│              │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FRSPCF       │ SPC Force Component              │ Frequency Value.  (Blank;        │
│              │                                  │ Real > 0.0 or Character) See     │
│              │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FRSTRE       │ Stress Item Code                 │ Frequency Value.  (Blank;        │
│              │                                  │ Real > 0.0 or Character) See     │
│              │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FRFORC       │ Force Item Code                  │ Frequency Value.  (Blank;        │
│              │                                  │ Real > 0.0 or Character) See     │
│              │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ PSDDISP      │ Displacement Component (see      │ Frequency Value. (Blank; Real    │
│              │ Remarks 26. and 30.)             │ > 0.0 or Character). See Remarks │
│              │                                  │ 15. and 20.                      │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ PSDVELO      │ Velocity Component (see Remarks  │ Frequency Value (Blank; Real     │
│              │ 26. and 30.)                     │ > 0.0 or Character). See Remarks │
│              │                                  │ 15. and 20.                      │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ PSDACCL      │ Acceleration Component (see      │ Frequency Value. (Blank; Real    │
│              │ Remarks 26. and 30.)             │ > 0.0 or Character). See Remarks │
│              │                                  │ 15. and 20.                      │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ RMSDISP      │ Displacement Component (see      │ RANDPS ID                        │
│              │ Remark 30.)                      │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ RMSVELO      │ Velocity Component (see Remark   │ RANDPS ID                        │
│              │ 30.)                             │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ RMSACCL      │ Acceleration Component (see      │ RANDPS ID                        │
│              │ Remark 30.)                      │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ACPWR        │ Blank                            │ Frequency Value.  (Blank;        │
│ (Acoustic    │                                  │ Real > 0.0 or Character) See     │
│ Power        │                                  │ Remarks 15. and 20.              │
│ radiated     │                                  │                                  │
│ through a    │                                  │                                  │
│ panel) See   │                                  │                                  │
│ Remark 33.   │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ACINTS       │ Blank                            │ Frequency Value.  (Blank;        │
│ (Acoustic    │                                  │ Real > 0.0 or Character) See     │
│ Intensity)   │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ AFPRES       │ Acoustic Pressure Component      │ Frequency Value.  (Blank;        │
│ (Acoustic    │ (Integer = 1 or 7)               │ Real > 0.0 or Character) See     │
│ Pressure for │                                  │ Remarks 15. and 20.              │
│ AFPM) See    │                                  │                                  │
│ Remark 34.   │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ AFINTS       │ Component Code - 0 - normal to   │ Frequency Value.  (Blank;        │
│ (Acoustic    │ AFPM, 1 - x-dir 2 - y-dir 3 -    │ Real > 0.0 or Character) See     │
│ Intensity    │ z-dir                            │ Remarks 15. and 20.              │
│ for AFPM)    │                                  │                                  │
│ See Remark   │                                  │                                  │
│ 34.          │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ AFVELO       │ Component Code - 11 - Real/Mag   │ Frequency Value.  (Blank;        │
│ Velocity for │ in x-dir 12 - Real/Mag in y-dir  │ Real > 0.0 or Character) See     │
│ AFPM) See    │ 13 - Real/Mag in z-dir 71 -      │ Remarks 15. and 20.              │
│ Remark 34.   │ Img/Ph in x-dir 72 - Img/Ph in   │                                  │
│              │ y-dir 73 - Img/Ph in z-dir       │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ AFPWR        │ Blank                            │ Frequency Value.  (Blank;        │
│ (Acoustic    │                                  │ Real > 0.0 or Character) See     │
│ Power for    │                                  │ Remarks 15. and 20.              │
│ AFPM) See    │                                  │                                  │
│ Remark 34.   │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ DYSTIFF      │ Dynamic Stiffness Component      │ Frequency Value.  (Blank;        │
│              │                                  │ Real > 0.0 or Character) See     │
│              │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ ERP See      │ ERP Item Code                    │ Frequency Value.  (Blank;        │
│ Remarks      │                                  │ Real > 0.0 or Character) See     │
│ 40. and 41.  │                                  │ Remarks 15. and 20.              │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ TDISP        │ Displacement Component           │ Time Value.  (Blank; Real; or    │
│              │                                  │ Character) See Remarks 16. and   │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ TVELO        │ Velocity Component               │ Time Value.  (Blank; Real, or    │
│              │                                  │ Character) See Remarks 16. and   │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ TACCL        │ Acceleration Component           │ Time Value.  (Blank; Real, or    │
│              │                                  │ Character) See Remarks 16. and   │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ TSPCF        │ SPC Force Component              │ Time Value.  (Blank; Real, or    │
│              │                                  │ Character) See Remarks 16. and   │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ TSTRE        │ Stress Item Code                 │ Time Value.  (Blank; Real, or    │
│              │                                  │ Character) See Remarks 16. and   │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ TFORC        │ Force Item Code                  │ Time Value.  (Blank; Real, or    │
│              │                                  │ Character) See Remarks 16. and   │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ STMONP1      │ Component See Remark 35.         │ Blank                            │
│ Structural   │                                  │                                  │
│ MONPNT1      │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ STMOND1      │ Component See Remark 35.         │ Blank                            │
│ Structural   │                                  │                                  │
│ MONDSP1      │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ MONPNT3      │ Component See Remark 35.         │ Blank                            │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ AEMONP1      │ Component See Remark 35.         │ Blank                            │
│ Aerodynamic  │                                  │                                  │
│ MONPNT1      │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ AEMOND1      │ Component See Remark 35.         │ Blank                            │
│ Aerodynamic  │                                  │                                  │
│ MONDSP1      │                                  │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ TRIM         │ AESTAT or AESURF entry ID        │ Blank                            │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ STABDER      │ AESTAT or AESURF entry ID        │ Restraint Flag. (Integer 0 or 1) │
│              │                                  │  See Remark 13.                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ FLUTTER      │ Blank                            │ Blank                            │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ DIVERG       │ Divergence Root Number See       │ Blank                            │
│              │ remark 37.                       │                                  │
├──────────────┼──────────────────────────────────┼──────────────────────────────────┤
│ WMPID See    │ MID                              │ SEID                             │
│ Remarks      │                                  │                                  │
│  43. and 44. │                                  │                                  │
└──────────────┴──────────────────────────────────┴──────────────────────────────────┘
```
#### Remarks:

1. Stress, strain, force, fatigue and ERP item codes can be found in  . For stress or strain item codes that have dual meanings, such as von Mises or maximum shear, the option specified in the Case Control Section will be used; i.e., STRESS(VONM) or STRESS(MAXS).

2. RTYPE = “CSTRESS”, “CSTRAIN”, “CFAILURE”, and “CSTRAT” are used only with the PCOMP/PCOMPG entry. “CSTRESS” and “CSTRAIN” item codes are described under Table 1 (Element Stress/Strain Item Codes) in  . “CFAILURE” and “CSTRAT” item codes are described under Table 2 (Element Force Item Codes) in  . Only force item codes that refer to failure indices of direct stress and interlaminar shear stress are valid.

     The CFAILURE and CSTRAT response types requires the following specifications on the applicable entries:

     • Failure theory in the FT field on PCOMP/PCOMPG entry.

     • Allowable bonding shear stress in the SB field on PCOMP/PCOMPG entry.

     • Stress limits in the ST, SC, and SS fields on all MATi entries.

     • When the PCOMPG is invoked, there is no default for the ATTB field.

3. ATTB can be used for responses of weight, composite laminae, dynamics, real and complex eigenvalues, WMPID and stability derivatives. For eigenvector responses, such as DISP, the ATTB identifies the mode of interest. For other responses, this field must be blank.

4. All grids associated with a DRESP1 entry are considered to be in the same region for screening purposes. Only up to   NSTR displacement constraints (see DSCREEN entry) per group per load case will   be retained in the design optimization phase.

5. DRESP1 identification numbers must be unique with respect to DRESP2 identification numbers.

6. If PTYPE = “ELEM”, the ATTi correspond to element identification numbers.

7. If RTYPE = “DISP”, “SPCFORCE”, “GPFORCE”, “TDISP”, “TVELO”, “TACCL” or “TSPCF”, multiple component numbers (any unique combination of the digits 1 through 6 with no embedded blanks) may be specified on a single entry.  Multiple response components may not be used on any other response types.

8. If RTYPE = “FRDISP”, “FRVELO”, “FRACCL”, or “FRSPCF” only one component number may be specified in the ATTA field.  Numbers 1 through 6 correspond to real (or magnitude) components and 7 through 12 imaginary (or phase) components.  If more than one component for the same grid is desired, then a separate entry is required.

9. Real/imaginary representation is the default for complex response types.  Magnitude/phase representation must be requested by the corresponding Case Control command; e.g., DlSP(PHASE) = ALL for FRDISP type responses.

10. REGION is used for constraint screening.  The NSTR field on DSCREEN entries gives the maximum number of constraints retained for each region per load case.

     IF RTYPE = “WEIGHT”, “VOLUME”, “LAMA”, “EIGN”, “FREQ”, “CEIG”, “TOTSE”, “RMSDISP”, “RMSVELO”, “RMSACCL”, no REGION identification number should be specified. If the region field is left blank for a grid response, one region is created for each DRESP1 ID. If the region field is left blank for an element response, one region is created for each property ID invoked.  Usually, the default value is appropriate.

     If the REGION field is not blank, all the responses on this entry as well as all responses on other DRESP1 entries that have the same RTYPE and REGION identification number will be grouped into the same region.

11. REGION is valid only among the same type of responses.  Responses of different types will never be grouped into the same region, even if they are assigned the same REGION identification number by the user.

12. If RTYPE = “WEIGHT”, “VOLUME”, or “TOTSE” field ATTi = “ALL” implies total weight/volume/total strain energy of all superelements except external superelements, 0 implies residual only and i implies SEID=i. Default=“ALL”. RTYPE=“TOTSE” is not supported for shape optimization.

13. RTYPE = “STABDER” identifies a stability derivative response.  ATTB is the restraint flag for the stability derivative.  ATTB = 0 means unrestrained, and ATTB = 1 means restrained.  For example, ATTA = 4000, ATTB = 0, and ATT1 = 3 reference the unrestrained C  derivative for the AESTAT (or AESURF) entry ID = 4000.

14. RTYPE = “FLUTTER” identifies a set of damping responses.  The set is specified by ATTi:

     ATT1 = Identification number of a SET1 entry that specifies a set of modes.

     ATT2 = Identification number of an FLFACT entry that specifies a list of densities.

     ATT3 = Identification number of an FLFACT entry that specifies a list of Mach numbers.

     ATT4 = Identification number of an FLFACT entry that specifies a list of velocities.

     If the flutter analysis is type PKNL, it is necessary to put PKNL in the PTYPE field of this entry.

15. For RTYPE = “FRXXXX”, “PSDXXXX” ,  “PRES” and “ERP” a real value for ATTB specifies a frequency value in cycles per unit time. If a real ATTB value is specified, then the responses are evaluated at the closest excitation frequency.  The default for ATTB is all excitation frequencies. See Remark  for additional ATTB options. The OFREQ Case Control command has no effect on the selection of the frequencies.

16. For RTYPE = “TDISP”, “TVELO”, “TACCL”, “TSPCF”, “TFORC”, and “TSTRE”, ATTB specifies a time value.  If ATTB is specified, then the responses are evaluated at the closest time selected by the OTIME command.  The default for ATTB is all time steps selected by the OTIME command.

17. Intermediate station responses on CBAR elements due to PLOAD1 and/or CBARAO entries may not be defined on the DRESP1 entry.

18. RTYPE = “EIGN” refers to normal modes response in terms of eigenvalue (radian/time) 2 while RTYPE = “FREQ” refers to normal modes response in terms of natural frequency or units of cycles per unit time.

19. For RTYPE = LAMA, EIGN or FREQ, the response approximation used for optimization can be individually selected using the ATTB field when APRCOD = 1 is being used.

     For RTYPE = LAMA, ATTB = blank or 1 selects direct linearization, ATTB = 2 = inverse linearization.

     For RTYPE = EIGEN or FREQ, ATTB = blank = Rayleigh Quotient Approximation, = 1 = direct linearization, = 2 = inverse approximation.

     The default Rayleigh Quotient Approximation should be preferred in most cases.

     Character input for ATTB is available for RTYPE of “FRXXXX”, “PSDXXXX”, “TXXXX”, “PRES”, “ERP”, “ACPWR”, “ACINTS”, “AFPRES”, “AFINTS”, “AFVELO”, “AFPWR” and “DYSTIFF”. The character input represents a mathematical function and the options for character input are SUM, AVG, SSQ, RSS, MAX and MIN. The expression of mathematical function is shown as follows:

     ![bulkde03254.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03254.jpg?_LANG=enus)  

     ![bulkde03256.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03256.jpg?_LANG=enus)  

     ![bulkde03258.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03258.jpg?_LANG=enus)  

     ![bulkde03260.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03260.jpg?_LANG=enus)  

     ![bulkde03262.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03262.jpg?_LANG=enus)  

     ![bulkde03264.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03264.jpg?_LANG=enus)  

     where  ![bulkde03266.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03266.jpg?_LANG=enus)  is the response for a forcing frequency or time step. For example

     DRESP1,10,DX1,FRSTRE,ELEM,,3,AVG,10

     yields a response which is equal to the average stress for element 10 across all forcing frequencies.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAUTION!1.If the ID of a DRESP1 with ATTB character input is referenced by a DRESP2 using the "DRESP2" flag, the results of the mathematical function are used to evaluate the DRESP2.
        2.If the ID of a DRESP1 with ATTB character input is referenced by a DRESP2 using the "DRESP1" flag, the individual values of the DRESP1 are used to compute individual DRESP2 values and the mathematical function is not used by the DRESP2.
```
20. Element strain energy item codes can be found under   in  . Only element strain energy and element strain energy density can be referenced on a DRESP1 entry. RTYPE=”ESE” is not supported for shape optimization.

21. For RTYPE=RMSDISP, RMSVELO, or RMSACCL the ATTB specifies the appropriate RANDPS ID.

22. Input other than 1 or 7 of ATTA field, acoustic pressure component, for PRES response type will be reset to 1 (if less than 7) or 7 (if greater than 6 and less than 13).

23. Design response weight is obtained from Grid Point Weight Generator for a reference point GRDPNT (see parameter GRDPNT). If GRDPNT is either not defined, equal to zero, or not a defined grid point, the reference point is taken as the origin of the basic coordinate system. Fields ATTA and ATTB refer to the row and column numbers of the rigid body weight matrix, which is partitioned as follows:

     ![bulkde03268.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03268.jpg?_LANG=enus)  

     The default values of ATTA and ATTB are 3, which specifies weight in the Z direction. Field ATT1 = “ALL” implies total weight of all superelements except external superelements. SEIDi refers to a superelement identification number. SEIDi = “0” refers to the residual superelement.  The default of ATT1 is blank which is equivalent to “ALL”.

24. For RTYPE = GPFORCE, the PTYPE field is used to designate the GRID ID at which the force is defined. Output that is produced using PARAM NOELOF > 0 is not supported for the DRESP1 entry.

25. For RTYPE = GPFORCP, the PTYPE field is blank. The grid point force is for the sum of all elements from the GRID ID listed in ATTA to the GRID (orient ID) listed in ATTi. This response corresponds to that produced with PARAM NOELP > 0. It is not necessary to set PARAM NOELP > 0 to compute the GPFORCP response.

26. For RTYPE = PSDXXXX, the PTYPE field specifies the RANDPS ID.

27. RTYPE=COMP (compliance of structures =  ![bulkde03270.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03270.jpg?_LANG=enus) ) and FRMASS (mass fraction of topology designed elements) entries are used for topology optimization or combined topology, sizing/shape optimization.

28. RTYPE=FRMASS can be used for topology and topometry optimization. For topology, FRMASS, is the mass divided by the mass calculated if all topology design variables are 1.0. FRMASS is calculated for designed elements only. FRMASS = 1.0 if all design variables are 1.0. For topometry, the initial FRMASS is defined as 1.0 for the initial design specified on the TOMVAR entries. For non-volume elements like CELAS, an artificial mass = 1.0 is assumed for each element.

29. Response type ABSTRESS is for element type code of 238 (CBAR) and 239 (CBEAM) only.

30. If a PSDxxxx or RMSxxxx response is being applied with RANDPS Bulk Data entries that include multiple subcases, the DESSUB or DESOBJ Case Control command that invokes the PSDxxxx or RMSxxxx response must be in the first subcase used by the RANDPS entry.

31. Response types, ESE, TOTSE, GPFORCE and GPFORCP are not supported for shape optimization.

32. For RTYPE=EIGN or FREQ, PTYPE field can be utilized to identify the source of the mode. Valid options are ‘STRUC’ or ‘FLUID’. The default is ‘STRUC’.

33. For RTYPE=ACPWR, PTYPE field can be utilized to identify the panel name. The default is ‘total’ which covers the whole interface between structural and fluid field.

34. For RTYPE=AFxxxx, PTYPE field can be utilized to specified the ID of Acoustic Field Point Mesh, AFPM.

35. For monitor point responses (RTYPE = STMONP1, STMOND1, MONPNT3 AEMONP1 or AEMOND1) the ATTA field specifies the components to be extracted.  These can be any subset of the integers 1 through 6 that appear on the monitor quantity with the NAME provided in the PTYPE field.  All of these responses can be invoked in a static aeroelastic (ANALYSIS=SAERO) subcase. STMOND1 and MONPNT3 can be invoked from a static  (ANALYSIS=STAT) subcase. The responses are not available in a dynamic response or normal modes subcase.  The response types have the following meaning:

a. STMONP1 – A structural MONPNT1

b. STMOND1 – A structural MONDSP1

c. MONPNT3 – A MONPNT3

d. AEMONP1 – An aerodynamic MONPNT1

e. AEMOND1 – An aerodynamic MONDSP1

     For all but the STMONP1, the response is the elastic monitor point value. For the STMONP1, it is the elastic “minus” inertial “plus” elastic applied load value.

36. For RTYPE-FRMASS, if the PID in the ATTi field is not blank, the PTYPE field must specify the type of property the PID references.

37. RTYPE=DIVERG is for subcases with ANALYSIS=DIVERG (aeroelastic static divergence). Only a single Mach number can be specified for this RTYPE.

38. For RTYPE = FATIGUE (pseudo-static fatigue), PTYPE must be set to ELEM or PSOLID, PSHELL, PBAR, PBEAM, or PWELD. For RTYPE = FRFTG (frequency response fatigue), PTYPE must be set to ELEM or PSOLID o r PSHELL. ATTB is the FID of a FATIGUE case control and must be the same FID for all RTYPEs of type FATIGUE or FRFTG. RTYPEs of type FATIGUE and FRFTG cannot be mixed; either all are RTYPE=FATIGUE or all are RTYPE=FRFTG.

39. If a FATIGUE case control references a SET ID, then ATTB must reference one of the IDs referenced by the SET. Design optimization using fatigue responses is currently limited to one fatigue analysis, that is, one loading sequence. Multiple fatigue responses referencing different loading sequences, i.e., FATIGUE case control IDs, will result in an error.

40. For the ERP response, the PTYPE field must be ERPPNL.

41. If the ATT1 field is blank for the ERP response, all panels are invoked.

42. Fatigue Item Codes can be found in  . Item codes that are available as design responses are 4-9 and 12 for the element centroid or first node/layer/location and the comparable items for ensuing nodes/layers/locations. The use of NODA on the FTGPARM entry is not supported.

43. For the WMPID (weight as a function of material and property ID), the following conventions apply:

a. ATTA is required, ATTB and ATTi are optional.

b. ATTB specifies the superelement with ATTB=0 indicating the residual, >0, indicates superelement ATTB and ATTB = ALL or blank means all superelements)

c.  The ATTi fields designate the property ID's of interest. If ATTi is specified, the associated property type (e.g., PSHELL) must be specified by the PTYPE input of field 5 on the DRESP1 entry.

d.  If there is no ATTi, all material with MID=ATTA will be used to generate the response.

e. If there are multiple ATTi, a single scalar weight is calculated that is the sum of the all the properties

f. Materials that are supported with this entry are: MAT1,MAT2, MAT3, MAT8, MAT9 and MAT10

g. Properties that are supported are: PSHELL, PROD, PBEAM, PTUBE, PSHEAR, PBAR, PSOLID, PBEND,PCOMP, PCOMPG, PBARL, PBEAML, PBRSECT and PBMSECT.

h. PARAM WTMASS is not applied to this response.

44. Certain restrictions apply for RTYPE=WMPID

a. The density of the material referenced on the ATTA field cannot also be designed using a DVMRELx entry

b. The property referenced on the ATTI field cannot also be invoked by a TOMVAR entry.

c. The WMPID response is supported for topology optimization or for shape sizing optimization, but not for both topology and shape sizing optimization.

