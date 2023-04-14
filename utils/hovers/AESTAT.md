__**[AESTAT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AESTAT.xhtml)**__   -   Static Aeroelasticity Trim Variables

--------------------------------------------------------------------------------
Specifies rigid body motions to be used as trim variables in static
aeroelasticity.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AESTAT  ID      LABEL   


```

--------------------------------------------------------------------------------
```text

Example:
AESTAT  5001    ANGLEA  


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              Identification number of an aerodynamic trim variable degree-of-
                freedom.  See Remark 1. (Integer > 0)
LABEL           An alphanumeric string of up to eight characters used to
                identify the degree-of-freedom.  See Remark 1. (Character)


```

--------------------------------------------------------------------------------
