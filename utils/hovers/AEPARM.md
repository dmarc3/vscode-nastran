__**[AEPARM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEPARM.xhtml)**__   -   General Controller for Use in Trim

--------------------------------------------------------------------------------
Defines a general aerodynamic trim variable degree-of-freedom (aerodynamic extra
point). The forces associated with this controller will be derived from AEDW,
AEFORCE and AEPRESS input data.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AEPARM  ID      LABEL   UNITS   


```

--------------------------------------------------------------------------------
```text

Example:
AEPARM  5       THRUST  LBS     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              Controller identification number. (Integer > 0)
LABEL           Controller name. See Remark 1. (Character)
UNITS            Label used to describe the units of the controller values.
                (Character)


```

--------------------------------------------------------------------------------
