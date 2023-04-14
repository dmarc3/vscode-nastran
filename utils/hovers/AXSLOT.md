__**[AXSLOT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AXSLOT.xhtml)**__   -   Axisymmetric Slot Analysis Parameters

--------------------------------------------------------------------------------
Defines the harmonic index and the default values for acoustic analysis entries.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AXSLOT  RHOD    BD      N       WD      MD      


```

--------------------------------------------------------------------------------
```text

Example:
AXSLOT  0.003   1.5+2   3       0.75    6       


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
RHOD            Default density of fluid in units of mass/volume.  (Real > 0.0
                or blank)
BD              Default bulk modulus of fluid in units of force/volume ratio
                change.  (Real  0.0 or blank)
N               Harmonic index number.  (Integer > 0 or blank)
WD              Default slot width.  (Real  > 0.0 or blank)
MD              Default number of slots.  (Integer > 0 or blank)


```

--------------------------------------------------------------------------------
