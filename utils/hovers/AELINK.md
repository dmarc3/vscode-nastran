__**[AELINK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AELINK.xhtml)**__   -   Links Aeroelastic Variables

--------------------------------------------------------------------------------
Defines relationships between or among AESTAT and AESURF entries, such that:
n        +        0.0   =    
u    D    Ci   u    i    I    
i    1    =    
Where:
u D
= dependent variable
u    i    I    
= independent variable

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AELINK  ID      LABLD   LABL1   C1      LABL2   C2      LABL3   C3      
LABL4   C4      -etc.-  


```

--------------------------------------------------------------------------------
```text

Example:
AELINK  10      INBDA   OTBDA   -2.0    


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              If an integer > 0 is specified, this is the TRIM set ID selected
                in Case Control and the AELINK only applies to that subcase. If
                an integer valueof 0 or the character string “ALWAYS” is
                specified, this AELINKis applicable toall subcases.  (Integer >
                0 or the“ALWAYS” character string.)
LABLD           Character string to identify the dependent aerodynamic variable.
                (Character)
LABLi Character string to identify the i-th independent aerodynamic variable.
(Character)
Ci Linking coefficient for the i-th variable.  (Real)


```

--------------------------------------------------------------------------------
