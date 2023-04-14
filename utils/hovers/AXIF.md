__**[AXIF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AXIF.xhtml)**__   -   Fluid Related Axisymmetric Parameters

--------------------------------------------------------------------------------
Defines basic parameters and the existence of an axisymmetric fluid analysis.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AXIF    CID     G       DRHO    DB      NOSYM   F       
N1      N2      N3      N4      N5      -etc.-  


```

--------------------------------------------------------------------------------
```text

Example:
AXIF    2       32.2    0.12    2.4+5   YES     
1       2       3               4               7       10      
Alternate Formats and Examples of Continuation Data:
N1      “THRU”  Ni      
0       THRU    10      
N1      “THRU”  Ni      “STEP”  NS      
0       THRU    9       STEP    3       
AXIF    100     -386.0          0.0     NO      
0       THRU    50      STEP    5       
52
54      THRU    57      
61      THRU    65      
68              71              72      75      
81 92


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
CID             Fluid coordinate system identification number. (Integer > 0)
G               Value of gravity for fluid elements in the axial direction.
                (Real)
DRHO            Default mass density for fluid elements. (Real > 0.0 or blank)
DB              Default bulk modulus for fluid elements. (Real)
NOSYM           Request for nonsymmetric (sine) terms of series. (Character:
                “YES” or “NO”)
Describer       Meaning         
Ni Harmonic numbers for the solution, represented by an increasing sequence of
integers. On continuation entries, without the “THRU” option, blank fields are
ignored. “THRU” implies all numbers including upper and lower harmonics. (0 <
Integer < 100, or Character: “THRU”, “STEP” or blank)
NS              EveryNSthstepoftheharmonicnumbersspecifiedinthe“THRU”rangeisused
                forsolution.Iffield5is“STEP”,Ni=i*NS+N1wherei
                isthenumberofharmonics.(Integer)


```

--------------------------------------------------------------------------------
