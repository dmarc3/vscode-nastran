## [MATFTG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATFTG1.xhtml) - Fatigue Material Properties

Defines fatigue material properties for time domain based SOLs 101, 103, 112 and frequency domain based SOLs 108 and 111.

#### Format (SOL 101, 103, 112):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATFTG  MID     CNVRT                                                           
        "STATIC"YS      UTS     CODE    TYPE    RR      SE      mp              
        RA                                                              
        “SN”    SRI1    b1      Nc1     b2      Nfc     SE      BTHRESH         
        “SNS1”                                                                  
        “SNS2”                                                                  
        “SNBR1”                                                                 
        “SNBR0”                                                                 
        M1      M2      M3      M4      MSS     RTHICK  nTHICK          
        SF-FXY  DE-FXY  TE-FXY  SF-MXY  DE-MXY  TE-MXY                  
        SF-FZ   DE-FZ   TE-FZ   SF-MZ   DE-MZ   TE-MZ                   
        "TABLE" VALUE1  TID1    VALUE2  TID2    VALUE3  TID3                    
        VALUE4  TID4    ...     ...     -etc.-                          
        "MMPDS" A1      A2      A3      A4                                      
        "EN"    Sf      b       c       Ef      n’      K’      Nc              
        SEe     SEp     SEc     Ne                                      
        “MATID” E       NU                                                      
        MID1    MID2    MID3    MID4    MID5    MID6    MID7            
        -etc.-                                                          
```
#### Format (SOL 108, 111):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATFTG  MID     CNVRT   MATOUT                                                  
        "STATIC"YS      UTS             TYPE                                    
        “SN””   SRI1    b1      Nc1     b2      Nfc                             
        "TABLE" VALUE1  TID1                                                    
        "MMPDS" A1      A2      A3      A4                                      
        "EN"    Sf      b       c       Ef      n’      K’      GAMMA           
        SEe     SEp     SEc     Ne                      TOLER           
        “MATID” E       NU                                                      
        MID1    MID2    MID3    MID4    MID5    MID6    MID7            
        -etc.-                                                          
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATFTG  9                                                                       
        STATIC  430     682     99                                              
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATFTG  9                                                                       
        STATIC  430     682                             0.1                     
        SN      3095    -0.1339 1.e8    0.0     1.e8                            
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATFTG  9                                                                       
        STATIC  430     682                             0.1                     
        MATID   2.1e5   0.3                                                     
                9       THRU    15      18                                      
```
```text
┌──────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer    │ Meaning                                           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID          │                                                   │ Unique material ID that matches the               │
│              │                                                   │ identification of a MAT1 entry unless the MATID   │
│              │                                                   │ line is supplied (Integer>0). See Remark 1.       │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CNVRT        │ Conversion factor.  See Remark 2. regarding       │                                                   │
│              │ units.                                            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MATOUT       │ SOL 108, 111 only. This is a debug option for     │                                                   │
│              │ writing the fully derived material curve to a     │                                                   │
│              │ file (Integer 0 or 1; Default = 0).               │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ STATIC       │                                                   │ Required flag indicating that yield and/or        │
│              │                                                   │ ultimate tensile strengths and other common       │
│              │                                                   │ parameters are supplied (Character=STATIC). See   │
│              │                                                   │ Remark 3. and 4.                                  │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ YS                                                │ Yield strength (Valid range equivalent in MPa:    │
│              │                                                   │ 50.0 £ Real £ 3000).  See Remark 2. regarding     │
│              │                                                   │ units.                                            │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ UTS                                               │ Ultimate tensile strength (Valid range equivalent │
│              │                                                   │ in MPa: 100.0 £ Real £ 4000). See Remark          │
│              │                                                   │ 2. regarding units.                               │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ CODE                                              │ SOL 101, 103, 112 only. Material code used in     │
│              │                                                   │ automatically generating S-N or e-N data curves   │
│              │                                                   │ and for surface finish correction.  See Remark 3. │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ TYPE                                              │ SOL 101, 103, 112: Specification of the type of   │
│              │                                                   │ S-N curves defined using the TABLE flag (no       │
│              │                                                   │ Default). See Remark 4.  SOL 108, 111:            │
│              │                                                   │ Specification as to whether material definitions  │
│              │                                                   │ are specified as RANGE or AMPLitude. See Remark   │
│              │                                                   │ 4.                                                │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ RR                                                │ SOL 101, 103, 112 only. R-ratio of test used to   │
│              │                                                   │ create S-N or ε-N curve. (-1.0e30 ≤ Real ≤ 1.0,   │
│              │                                                   │ Default=-1.0, fully reversed loading).            │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SE                                                │ SOL 101, 103, 112 only. Standard Error of Log(N). │
│              │                                                   │ (0.0 ≤ Real ≤ 10.0, Default=0.1).                 │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ mp                                                │ SOL 101, 103, 112 only. Plastic Poisson’s Ratio.  │
│              │                                                   │ (0.45≤ Real ≤ 0.55, Default=0.5).                 │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ RA                                                │ SOL 101, 103, 112 only. Percentage reduction in   │
│              │                                                   │ area used for deriving ε-N data for metals of     │
│              │                                                   │ type “other” (TYPE field = 200-207 or >300).      │
│              │                                                   │ (0.0<Real≤100.0; no Default).                     │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SN SNS1/SNS2 │ Flag indicating the definition of an S-N curve(s) │                                                   │
│ SNBR1/SNBR0  │ follow (Character = SN, optional). See Remark     │                                                   │
│              │ 5. and 7. and 8.                                  │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SRI1                                              │ Stress range intercept. (Valid range equivalent   │
│              │                                                   │ in MPa: 1.0 ≤ Real ≤ 2.5e4, no Default). See      │
│              │                                                   │ Remark 2 regarding units.                         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ b1                                                │ First fatigue strength exponent. (-1.0 < Real<    │
│              │                                                   │ -0.02, no Default)                                │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ Nc1                                               │ In 1-segment S-N curve, the cycles limit of       │
│              │                                                   │ endurance.  In 2-segment S-N curve, this is the   │
│              │                                                   │ fatigue transition point. Both are defined in     │
│              │                                                   │ cycles. (1.0 ≤ Real ≤ 1.0E25; no Default).        │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ b2                                                │ Second fatigue strength exponent.  It is zero     │
│              │                                                   │ when defining 1-segment S-N curve; (-0.5 < Real ≤ │
│              │                                                   │ 0.0, Default=0.0).                                │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ Nfc                                               │ Fatigue cutoff. (1.e-9 ≤ Real ≤ 1.0e30;           │
│              │                                                   │ Default=1.0e30).                                  │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SE                                                │ SOL 101, 103, 112 only. Standard Error of Log(N). │
│              │                                                   │ (0.0 ≤ Real ≤ 10.0, Default=0.1).  SE from        │
│              │                                                   │ “STATIC” line will be used if left blank.         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ BTHRESH                                           │ SOL 101, 103, 112 only. Threshold value of the    │
│              │                                                   │ bending (r) ratio used in interpolation between   │
│              │                                                   │ “stiff” and “flexible” SN curves for fatigue      │
│              │                                                   │ analysis of seam welds. (0.0 ≤ Real ≤ 0.999;      │
│              │                                                   │ Default=0.5)                                      │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ M1 - M4                                           │ SOL 101, 103, 112 only. Mean stress slope         │
│              │                                                   │ parameters M1 through M4 representing sensitivity │
│              │                                                   │ to mean stress in four (4) regimes of R-ratio as  │
│              │                                                   │ plotted on a constant life Haigh diagram and used │
│              │                                                   │ in FKM mean stress correction. (-0.99 ≤ Real      │
│              │                                                   │ ≤ 0.0; Default = blank).  See Remark 6.           │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ MSS                                               │ SOL 101, 103, 112 only. Mean stress sensitivity   │
│              │                                                   │ factor, used only for fatigue analysis of spot    │
│              │                                                   │ welds with CORR=SIMPLE on the FTGPARM entry. (0.0 │
│              │                                                   │ ≤ Real ≤ 1.0, Default=blank). This mean stress    │
│              │                                                   │ correction method is a simplified version of the  │
│              │                                                   │ FKM method where M1=M2=M3=M4=-MSS.                │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ RTHICK                                            │ SOL 101, 103, 112 only. Reference                 │
│              │                                                   │ thickness/threshold (in consistent model length   │
│              │                                                   │ units) for sheet thickness correction used in     │
│              │                                                   │ fatigue analysis of seam welds. Ignored if        │
│              │                                                   │ THICK=0 on the FTGPARM entry for “SEAMW”. Must be │
│              │                                                   │ supplied if THICK=1. (Real ≥ 1.0e-9; Default=1.0) │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ nTHICK                                            │ SOL 101, 103, 112 only. Sheet thickness           │
│              │                                                   │ correction exponent used in the fatigue analysis  │
│              │                                                   │ of seam welds. Ignored if THICK=0 on the          │
│              │                                                   │ FTGPARM entry for “SEAMW”. Must be supplied if    │
│              │                                                   │ THICK=1. (Real; Default=0.16667)                  │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SF-FXY SF-MXY SF-FZ SF-MZ                         │ SOL 101, 103, 112 only. Scale factor for stress   │
│              │                                                   │ due to FX or FY (shear forces), MX or MY (bending │
│              │                                                   │ moments), FZ (axial force), and MZ (torsion),     │
│              │                                                   │ respectively (Real, Default = blank) used in      │
│              │                                                   │ fatigue analysis of spot welds only. See Remark   │
│              │                                                   │ 9.                                                │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ DE-FXY DE-MXY DE-FZ DE-MZ                         │ SOL 101, 103, 112 only. Diameter exponent for     │
│              │                                                   │ stress due to FX or FY (shear forces), MX or MY   │
│              │                                                   │ (bending moments), FZ (axial force), and MZ       │
│              │                                                   │ (torsion), respectively (Real, Default = blank)   │
│              │                                                   │ used in fatigue analysis of spot welds only. See  │
│              │                                                   │ Remark 9.                                         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ TE-FXY TE-MXY TE-FZ TE-MZ                         │ SOL 101, 103, 112 only. Thickness exponent for    │
│              │                                                   │ stress due to FX or FY (shear forces), MX or MY   │
│              │                                                   │ (bending moments), FZ (axial force), and MZ       │
│              │                                                   │ (torsion), respectively (Real, Default = blank)   │
│              │                                                   │ used in fatigue analysis of spot welds only. See  │
│              │                                                   │ Remark 9.                                         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TABLE        │                                                   │ Flag indicating the definition of S-N curves as a │
│              │                                                   │ number of tables follows (Character=TABLE;        │
│              │                                                   │ optional). See Remark 5.                          │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ VALUEi                                            │ SOL 101, 103, 112: The constant mean stress,      │
│              │                                                   │ R-ratio, or life (in cycles) of this particular   │
│              │                                                   │ S-N curve. (Real; no Default). See Remark 2       │
│              │                                                   │ regarding units. SOL 108, 111: This should be     │
│              │                                                   │ specified as 1.0 as only one curve is supported   │
│              │                                                   │ and should be defined as zero mean.               │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ TIDi                                              │ SOL 101, 103, 112: A TABLEM1 ID defining the S-N  │
│              │                                                   │ curve of stress range (y) vs. life (x) (in        │
│              │                                                   │ cycles) for this particular S-N curve, or mean    │
│              │                                                   │ stress (x) vs. stress amplitude (y) for constant  │
│              │                                                   │ life (Haigh diagram) curves (Integer>0). See      │
│              │                                                   │ Remark 2. regarding units. SOL 108, 111: A        │
│              │                                                   │ TABLEM1 (may cause unintended recalculation of    │
│              │                                                   │ eigenvalues if used in RESTART job) or TABRND1 ID │
│              │                                                   │ defining the S-N curve of stress (y) vs. life (x) │
│              │                                                   │ (in cycles). Only one curve is allowed.and should │
│              │                                                   │ be defined at zero mean. See Remark 2. regarding  │
│              │                                                   │ units.                                            │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MMPDS        │                                                   │ SOL 101, 103, 112, 108, 111 only. Flag indicating │
│              │                                                   │ the definition of an S-N curve based on the MMPDS │
│              │                                                   │ S-N approach (Character-MMPDS; optional). See     │
│              │                                                   │ Remark 5.                                         │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ A1 A2 A3 A4                                       │ Coefficients or exponent of the standard MMPDS-01 │
│              │                                                   │ material equation (must be defined in units-KSI   │
│              │                                                   │ based on amplitude). (Real; typical ranges        │
│              │                                                   │ 5<=A1<=110; -47<=A2<=-1.0, 0.1<=A3<=1.0;          │
│              │                                                   │ 0.0<=A4<=114; no Default). CNVRT is not applied   │
│              │                                                   │ to these values at all - it is ignored!           │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EN           │                                                   │ Flag indicating the definition of an e-N curve is │
│              │                                                   │ to follow. (Character=EN; optional). See Remark   │
│              │                                                   │ 5..                                               │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ Sf                                                │ Fatigue strength coefficient (Valid range         │
│              │                                                   │ equivalent in MPa: 50.0 ≤ Real ≤ 4000.0; no       │
│              │                                                   │ Default). See Remark 2. regarding units.          │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ b                                                 │ Fatigue strength exponent (-0.5 ≤ Real ≤ -2.0e-3; │
│              │                                                   │ no Default).                                      │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ c                                                 │ Fatigue ductility exponent. (-1.2 ≤ Real ≤ -0.15; │
│              │                                                   │ no Default).                                      │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ Ef                                                │ Fatigue ductility coefficient, (0.001≤ Real ≤     │
│              │                                                   │ 10.0; no Default).                                │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ n’                                                │ Cyclic strain-hardening exponent, (5.0e-3 ≤ Real  │
│              │                                                   │ ≤ 0.5; no Default).                               │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ K’                                                │ Cyclic strength coefficient, (Valid range         │
│              │                                                   │ equivalent in MPa: 50 ≤ Real ≤ 1.2e4); no         │
│              │                                                   │ Default). See Remark 5. regarding units.          │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ Nc                                                │ SOL 101, 103, 112 only. Cut-off (reversals),      │
│              │                                                   │ (1.0e5 ≤ Real ≤ 1.0e24; Default=2.0e8).           │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ GAMMA                                             │ SOL 108, 111 only. Additional coefficient needed  │
│              │                                                   │ for the Walker equation, (0.0≤ Real ≤ 1.0;        │
│              │                                                   │ Default=0.0).                                     │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SEe                                               │ SOL 101, 103, 112 only. Standard Error of Log(e)  │
│              │                                                   │ (elastic), (0.0 ≤ Real ≤ 10.0; Default=0.0).      │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SEp                                               │ SOL 101, 103, 112 only. Standard Error of Log(e)  │
│              │                                                   │ (plastic), (0.0 ≤ Real ≤ 10.0; Default=0.0 ).     │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ SEc                                               │ SOL 101, 103, 112 only. Standard Error of Log(e)  │
│              │                                                   │ (cyclic), (0.0 ≤ Real ≤ 10.0; Default=0.0).       │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ Ne                                                │ SOL 101, 103, 112 only. Endurance Limit           │
│              │                                                   │ (Reversals), (1.0 e-9≤ Real ≤ 1.0e25;             │
│              │                                                   │ Default=2.0e8).                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ TOLER                                             │ SOL 108, 111 only. Parameter used for frequency   │
│              │                                                   │ based strain life analysis with Neuber notch      │
│              │                                                   │ correction in vibration fatigue only.             │
│              │                                                   │ (Real>=1e-10, Default = 1e-5)                     │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MATID        │                                                   │ Flag indicating that a list of MAT1 IDs is to     │
│              │                                                   │ follow. See Remark 1.                             │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ E                                                 │ Young’s modulus, (Valid range equivalent in MPa:  │
│              │                                                   │ Real>0.0, no Default).                            │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ NU                                                │ Elastic Poisson’s ratio. (0.25 ≤ Real ≤ 0.35,     │
│              │                                                   │ Default = 0.3)                                    │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ MIDi                                              │ IDs of existing MAT1 entries to which this MATFTG │
│              │                                                   │ entry will be linked. At least one ID must be     │
│              │                                                   │ supplied. The "THRU" keyword is supported.        │
└──────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. Element properties must reference MAT1 entries in order to be linked to a MATFTG entry as only metal fatigue analysis of isotropic materials is supported. The MID must match that of an existing MAT1 entry called out by the property entry (e.g. PSHELL) unless the “MATID” line is provided, in which case all the MIDi referenced on the “MATID” line are then linked to the MATFTG entry. When the “MATID” line is used, E (required) and NU (optional) must be provided on this line as the code has no way of knowing from which referenced MAT1 this data should be extracted. Young’s Modulus (E) and elastic Poisson’s ratio (NU) are extracted from the corresponding MAT1 entry of the same ID when no “MATID” line is present. Usage of E and NU in the fatigue analysis itself is dependent on the type of fatigue analysis requested and fatigue material properties provided. Young's Modulus (E) is mainly used for deriving S-N or e-N data when none is provided. If the “MATID” line is used, and a MAT1 of the same ID also exists, that MAT1 ID must be in the MIDi list or it will be ignored in the analysis. In other words, when the “MATID” line is used, only the supplied MIDi IDs are used in the fatigue analysis. 

2. The CNVRT field is only used if fatigue material stress based parameters are directly input using the "STATIC," "SN," "EN," or "TABLE," methods.  It is used to allow the user to input the fatigue material stress related parameters, (YS, UTS, SRI1, VALUEi, TIDi, A, B, Eb, K) in different units other than the model's consistent units.  Example:  model is producing stresses in PSI units, fatigue material parameters input in MPa, the CNVRT factor should be 145.0377 to convert MPa to PSI. Note that the y-values of any referenced TABLEM1 entries are also converted for the S-N method or both the x- and y-values when TYPE=LIFE (Haigh curves). It is also necessary to use the DTI,UNITS for defining the model's stress units. See DTI,UNITS. (Real; Default=1.0)

3. F or SOLs 101, 103, and 112 , if only STATIC is supplied, then for standard S-N or  ε -N analysis, the S-N or  ε -N curve is derived using the UTS and a material CODE. For fatigue analysis of spot or seam welds, a standard material set is used based on CODE, and UTS can be set to any valid number as the UTS from the standard material set will be used instead (only ferrous and aluminum codes are valid for spot/seam welds). Valid codes are listed in   below. At a minimum UTS must be supplied along with the material CODE and E on MAT1, or an error will be issued. If either flag (SN or EN) is present, then the automatic generation is suppressed if all the data necessary to define S-N or  ε -N curves are given. For SN, these fields are SRI1, b1, Nc1. For EN, these fields are Sf, b, c, Ef, n’, K’. Either all of them are present, in which case they are used directly, or all of them are omitted, in which case the parameters are derived as mentioned above. The determination as to whether S-N or  ε -N curves are generated is determined by the TYPE field set on the FTGPARM entry. If surface finish corrections are to be applied, CODE is also required (see PFTG entry). When curves are derived, the specified CODE gets internally converted to a generic code  ferrous =99 for CODE<100,  aluminum =100 for 100  ≤  CODE  <  200,  other =0 for 200  ≤  CODE  <  300, or  titatnium =300 for 300  ≤  CODE < 400. When SN or EN flags exist, the generic code is set to  other , but the CODE is used as given.

     F or SOLs 108, and 111 , if only STATIC is supplied, see Remark  5.  

4. For SOLs 101, 103, and 111 : TYPE can be set to MEAN (or AMEAN), RRATIO (or ARRATIO), or LIFE (or ALIFE) for constant mean, R-ratio, or life (Haigh diagrams), respectively, when using the “TABLE” flag. When using multiple S-N curves for mean stress correction, CORR=INTERP on FTGPARM must be used. In this case, for RRATIO, a curve at R=-1 is required and for MEAN, a curve at zero (0) mean is required. MEAN vs. AMEAN, or RRATIO vs. ARRATIO, or LIFE vs. ALIFE indicates the stress type of the curves is range or amplitude, respectively.

     For SOLs 108 and 111 : TYPE can be set to AMPL or RANGE to indicate that the S-N curve is defined as amplitude or range and is applicable for the SN and TABLE lines.

5. For SOLs 101, 103, and 111 : If an S-N analysis is specified (TYPE field on FTGPARM entry) but no S-N curve is supplied, an error will be issued.  If an  ε -N analysis is specified but no  ε -N curve is supplied, an error will be issued.  The STATIC data is required if SN or EN flags are specified on the MATFTG entry. The SN and TABLE flags are generally mutually exclusive. When both SN and TABLE lines are defined, if TYPE is set, the SN parameters (SRI1, b1, Nc1, b2) will be ignored. EN flag may be present with SN or TABLE flags, but one or the other will be ignored based on the type of analysis as set using the TYPE field on the FTGPARM entry. See Remark   and   for other “SNS1/SNS2/SNBR1/SNBR2” definitions.

     If MMPDS is used, the MMPDS mean stress correction is automatically applied by default (CORR=MMPDS on FTGPARM entry).

     For SOLs 108 and 111 : The STATIC line is required and at least one of SN, TABLE, MMPDS, or EN lines. If no SN, TABLE, MMPDS, or EN lines are present, then the fatigue analysis is skipped and only the random vibration analysis is performed 1 . The use of the TYPE field in the FTGPARM entry has limited affect. Please note: If only SN data is present, it is used by default. If only EN data is present, it is used by default. The SN, TABLE, and MMPDS entries are mutually exclusive and if more are present for any particular MID, then the following hierarchical rule is implemented to choose which to use: MMPDS, TABLE, SN. If both SN and EN are defined for a particular MID, EN is selected by default unless TYPE on the FTGPARM is set, in which case the corresponding SN or EN definition is used. However, TYPE is ignored if the corresponding material definition is not present, and the material definition used is then based on the hierarchy just defined.

6. For SOLs 101, 103, and 111 : Mean stress sensitivity: M1 for R>1; M2 for - ∞  < R < 0; M3 for 0<R<0.5; M4 for 0.5<R<1. If M  are undefined, and the material type (CODE) is given , all the parameters will be estimated using empirically defined rules for the FKM mean stress correction method. If only M  is defined, then M  and M  will be set to zero and M  to M /3.

7. For SOLs 101, 103, and 111 : The “SN” line is used for the definition of standard SN parameters for any SN analysis. In the case of fatigue analysis of spot welds, “SNS1” and “SNS2” are used to define the SN curves of the top and bottom sheets to which the spot weld is connected and “SN” is used to define the SN curve of the weld nugget. If no “SN”, “SNS1”, or “SNS2” flags are present, generic SN parameters are used for steel or aluminum per the material CODE supplied. See   for default values used in this case. If CODE is blank, steel is assumed. If only one of the flags is provided, then “SN” = “SNS1” = “SNS2”. If “SNS1” or “SNS2” is missing but the other is present, then “SNS1” = “SNS2”. If “SNS1” and “SNS2” are defined, but not “SN”, then “SN” = “SNS1”.

8. For SOLs 101, 103, and 111 : The “SN” line is used for the definition of standard SN parameters for any SN analysis. In the case of fatigue analysis of seam welds, “SNBR1” and “SNBR0” are used to define the flexible (bending ratio=1.0) and stiff (bending ratio=0.0) SN curves. If no “SN”, “SNBR1”, or “SNBR0” flags are present, generic SN parameters are used for steel or aluminum per the material CODE supplied. See   for default values used in this case. If CODE is blank, steel is assumed. If only “SN” is supplied, then the “SN” parameters are used for both “SNBR1” and SNBR0”. If “SNBR1” or “SNBR0” is missing but the other is present, then “SNBR1” = “SNBR0”. The 3rd and 4th lines of data for these keywords should not be entered as they are applicable to fatigue analysis of spot welds only, and not for seam welds.

9. For SOLs 101, 103, and 111 : If SF, DE, & TE values are not supplied, default values are used based on material CODE for steel or aluminum. See   and  . These should only be entered for fatigue analysis of spot welds and not for anything else.

Table 0-15    Table of Material CODEs

```text
┌──────┬──────────────────────────────────────────────────────────────────────────────┐
│ CODE │ Description                                                                  │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 1    │ Flake cast iron (FCI)                                                        │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 2    │ Ferritic cast iron with compacted graphite (FCICG)                           │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 3    │ Pearlitic cast iron with compacted graphite (PCICG)                          │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 4    │ Bainitic cast iron with compacted graphite (BCICG)                           │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 5    │ Ferritic cast iron with spheroidal graphite (FCISG)                          │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 6    │ Ferrite/pearlite cast iron with spheroidal graphite (FPCISG)                 │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 7    │ Pearlitic cast iron with spheroidal graphite (PCISG)                         │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 8    │ Bainitic cast iron with spheroidal graphite (BCISG)                          │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 9    │ Cast steel with less than 0.2% carbon (CSL2C)                                │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 10   │ Normalized cast steel with 0.2-0.4% carbon (NCS24C)                          │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 11   │ Quenched & tempered cast steel with 0.2-0.4% carbon (QTCS24)                 │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 12   │ Normalized cast steel with 0.4-0.7% carbon (NCS47)                           │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 13   │ Plain carbon wrought steel with < 0.2% carbon (PCWS)                         │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 14   │ Hot rolled/normalized plain carbon wrought steel, 0.2-0.4% carbon (HNPCWS24) │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 15   │ Quenched & tempered cast steel with 0.4-0.7% carbon (QTCS47)                 │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 16   │ Quenched & tempered plain carbon wrought steel, 0.2-0.4% carbon (QTPCWS24)   │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 17   │ Hot rolled/normalized plain carbon wrought steel, 0.4-0.7% carbon (HNPCWS47) │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 18   │ Quenched & tempered plain carbon wrought steel, 0.4-0.7% carbon (QTPCWS47)   │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 19   │ Normalized low alloy wrought steel (NLAWS)                                   │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 20   │ Quenched & tempered low alloy wrought steel (QTHSLAWS)                       │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 21   │ Normalized Ni/Cr/Mo wrought steel (NNCMWS)                                   │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 22   │ Quenched & tempered Ni/Cr/Mo wrought steel (QTNCMWS)                         │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 23   │ Austenitic stainless steel (ASS)                                             │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 24   │ Ferritic stainless steel (FSS)                                               │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 25   │ Martensitic stainless steel (MSS)                                            │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 26   │ Annealed plain carbon wrought steel, 0.2-0.4% carbon (APCWS24)               │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 27   │ Annealed plain carbon wrought steel, 0.4-0.7% carbon (APCWS47)               │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 28   │ Normalized carbon/manganese steel (MCMS)                                     │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 29   │ Quenched and tempered carbon/manganese steel (QTCMS)                         │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 30   │ Hardened chromium steel (HCS)                                                │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 31   │ Quenched and tempered chromium steel (QTCS)                                  │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 99   │ Steel of unknown heat treatment (STEEL)                                      │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 100  │ Wrought aluminum (WA)                                                        │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 101  │ Wrought aluminum-copper alloy (WACA)                                         │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 102  │ Wrought aluminum-manganese alloy (WAMNA)                                     │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 103  │ Wrought aluminum-magnesium alloy (WAMGA)                                     │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 104  │ Wrought aluminum-magnesium-silicon alloy (WAMGSA)                            │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 105  │ Wrought aluminum-zinc alloy (WAZA)                                           │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 106  │ Cast aluminum alloy (CAA)                                                    │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 107  │ Wrought complex special purpose aluminum alloys (WCSPAA)                     │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 200  │ Wrought copper (WCU)                                                         │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 201  │ Wrought brass (WBR)                                                          │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 202  │ Wrought aluminum bronze (WABR)                                               │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 203  │ Cupronickel (CUPNI)                                                          │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 204  │ Nickel silver (NIAG)                                                         │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 205  │ Wrought phosphor bronze (WPHBR)                                              │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 206  │ Wrought copper beryllium (WCUBE)                                             │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 207  │ Cast copper alloys (CCUA)                                                    │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 300  │ Titanium alloy (TA)                                                          │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 400  │ Wrought magnesium alloys (WMGA)                                              │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 401  │ Cast magnesium alloys (CMGA)                                                 │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 500  │ Fusible alloys, solders (FUSSOL)                                             │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 600  │ Cast zinc alloys (CZINCA)                                                    │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 700  │ Wrought nickel alloys (WNIA)                                                 │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 701  │ Cast nickel alloys (CNIA)                                                    │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 800  │ Precious metals (PRECMET)                                                    │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 900  │ Clad materials (CLADMAT)                                                     │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 1000 │ Thermoplastics (THERPLAS)                                                    │
├──────┼──────────────────────────────────────────────────────────────────────────────┤
│ 1001 │ Thermosetting plastics (TSETPLAS)                                            │
└──────┴──────────────────────────────────────────────────────────────────────────────┘
```
Table 0-16    Spot and Seam Weld Fatigue Analysis SN Curve Defaults

```text
┌────────────┬─────────────┬──────────────┬────────────┬──────────────┬────────────┐
│ Property   │ Generic     │ Generic      │ Generic    │ Generic      │            │
│            │ Nugget Spot │ Top/Bottom   │ Flexible   │ Stiff Seam   │            │
│            │ Weld        │ Sheet Spot   │ Seam Weld  │ Weld (r=0)   │            │
│            │             │ Weld         │ (r=1)      │              │            │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ CODE       │ steel <100  │ alum 100-199 │ steel <100 │ alum 100-199 │ steel <100 │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ UTS (MPa)* │ 4000        │ 4000         │ 4000       │ 4000         │ 1.8E4      │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ YS (MPa)   │ 355         │ 150          │ 355        │ 150          │ Blank      │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ E (MPa)    │ 2.1E5       │ 7E4          │ 2.1E5      │ 7E4          │ 2.1E5      │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ SRI1 (MPa) │ 2100        │ 2462         │ 2900       │ 2462         │ 3.6E4      │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ b1         │ -0.1667     │ -0.2         │ -0.1667    │ -0.2         │ -0.3333    │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ Nc1        │ 1E6         │ 1E7          │ 1E6        │ 1E7          │ 1E7        │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ b2         │ -0.09091    │ -0.1111      │ -0.09091   │ -0.1111      │ -0.3333    │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ SE         │ 0.334       │ 0.33         │ 0.33       │ 0.33         │ 0.4        │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ RR         │ 0.0         │ 0.0          │ 0.0        │ 0.0          │ -1.0       │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ Nfc        │ 1E30        │ 1E30         │ 1E30       │ 1E30         │ 1E30       │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ MSS        │ 0.1         │ 0.2          │ 0.1        │ 0.2          │ Blank      │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ M1         │ Blank       │ Blank        │ Blank      │ Blank        │ Blank      │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ M2         │ -0.1        │ -0.2         │ -0.1       │ -0.2         │ -0.25      │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ M3         │ -0.1        │ -0.2         │ -0.1       │ -0.2         │ -0.1       │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ M4         │ Blank       │ Blank        │ Blank      │ Blank        │ -0.1       │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ BTHRESH    │ Blank       │ Blank        │ Blank      │ Blank        │ Blank      │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ RTHICK     │ Blank       │ Blank        │ Blank      │ Blank        │ 1 (mm)     │
├────────────┼─────────────┼──────────────┼────────────┼──────────────┼────────────┤
│ nTHICK     │ Blank       │ Blank        │ Blank      │ Blank        │ 0.16667    │
└────────────┴─────────────┴──────────────┴────────────┴──────────────┴────────────┘
```
```text
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ *Both Spot Weld and Seam Weld fatigue analyses use structural stresses, which do not relate to UTS. Corrections based on UTS do no apply to welds. │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
Table 0-17    Steel Scale Factor, Diameter & Thickness Exponent Defaults 
 
 
for Fatigue Analysis of Spot Welds

```text
┌─────────────┬──────────────┬───────────────────┬────────────────────┐
│ Steel (CODE │ Scale Factor │ Diameter Exponent │ Thickness Exponent │
│ < 100)      │              │                   │                    │
├─────────────┼──────────────┼───────────────────┼────────────────────┤
│ FX,FY       │ SF-FXY = 1.0 │ DE-FXY = 0.0      │ TE-FXY = 0.0       │
├─────────────┼──────────────┼───────────────────┼────────────────────┤
│ MX,MY       │ SF-MXY = 0.6 │ DE-MXY = 0.0      │ TE-MXY = 0.5       │
├─────────────┼──────────────┼───────────────────┼────────────────────┤
│ FZ          │ SF-FZ = 0.6  │ DE-FZ = 0.0       │ TE-FZ = 0.5        │
├─────────────┼──────────────┼───────────────────┼────────────────────┤
│ MZ          │ SF-MZ = 0.0  │ DE-MZ = 0.0       │ TE-MZ = 0.0        │
└─────────────┴──────────────┴───────────────────┴────────────────────┘
```
Table 0-18    Aluminum Scale Factor, Diameter & Thickness Exponent Defaults 
 
 
for Fatigue Analysis of Spot Welds

```text
┌─────────────┬──────────────┬───────────────────┬────────────────────┐
│ Aluminum    │ Scale Factor │ Diameter Exponent │ Thickness Exponent │
│ (100 ≤ CODE │              │                   │                    │
│ ≤ 200)      │              │                   │                    │
├─────────────┼──────────────┼───────────────────┼────────────────────┤
│ FX,FY       │ SF-FXY = 0.4 │ DE-FXY = 0.5      │ TE-FXY = -0.25     │
├─────────────┼──────────────┼───────────────────┼────────────────────┤
│ MX,MY       │ SF-MXY = 0.4 │ DE-MXY = 0.5      │ TE-MXY = -0.25     │
├─────────────┼──────────────┼───────────────────┼────────────────────┤
│ FZ          │ SF-FZ = 1.0  │ DE-FZ = 0.0       │ TE-FZ = 1.0        │
├─────────────┼──────────────┼───────────────────┼────────────────────┤
│ MZ          │ SF-MZ = 0.0  │ DE-MZ = 0.0       │ TE-MZ = 0.0        │
└─────────────┴──────────────┴───────────────────┴────────────────────┘
```
