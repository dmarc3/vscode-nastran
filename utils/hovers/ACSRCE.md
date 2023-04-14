__**[ACSRCE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACSRCE.xhtml)**__   -   Acoustic Source Specification

--------------------------------------------------------------------------------
Defines acoustic source as a function of power vs. frequency.
Source Strength A        =    1    2        f    -------- 8        CP f          ---------------------        e    i       2        f        +            
C    B           =    

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ACSRCE  SID     EXCITEIDDELAYI/ DELAYR  DPHASEI/DPHASER TP/RP   RHO     B       


```

--------------------------------------------------------------------------------
```text

Example:
ACSRCE  103     11      20      5.0     12      1.0     15.0    


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
SID             Load set identification number. See Remarks 1. and 3. (Integer >
                0)
EXCITEID        Identification number of DAREA, FBALOAD (in FRF Based Assembly
                or FBA process) or SLOAD entry set the defines .  See Remark 6.
                (Integer > 0)
A                
DELAYI          Identification number of DELAY or FBADLAY (in FRF Based Assembly
                or FBA process) Bulk Data entry that defines time delay . See
                Remarks 4. and 5.(Integer > 0 or blank)


DELAYR          Value of time delay  that will be used for all fluid degrees-of-
                freedom that are excited by this dynamic load entry. See Remark
                5. (Real orblank)
DPHASEI         Identification number of DPHASE or FBAPHAS (in FRF Based
                Assembly or FBA process) Bulk Data entry that defines phase
                angle . (See Remarks4. and 5. (Integer > 0 or blank)


DPHASER         Value of phase angle  (in degrees) that will be used for all
                fluid degrees-of-freedom that are excited by this dynamic load
                entry. See Remark5. (Real or blank)
P f  
TP              Identification number of a TABLEDi entry that defines power
                versus frequency, .  (Integer > 0)
RP              Value of power P to be used for all frequencies (Real, non-zero)
RHO             Density of the fluid.  (Real > 0.0)
B               Bulk modulus of the fluid.  (Real > 0.0)


```

--------------------------------------------------------------------------------
