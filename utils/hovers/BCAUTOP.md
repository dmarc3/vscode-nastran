__**[BCAUTOP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCAUTOP.xhtml)**__   -   Automatic contact generation property.

--------------------------------------------------------------------------------
Specifies parameters for automatic contact generation (ACG). With ACG, the code automatically generates the contact bodies based on the grids and elements given, then establishes the contact pairs in which two contact bodies are in contact or may come into contact potentially based on the DISTANCE tolerance. Please refer to the section of Chapter 9: Contact, SOL 400 User’s Guide for details. 

--------------------------------------------------------------------------------
```text

Format:
etc
1       2       3       4       5       6       7       8       9       10      
BCAUTOP PID             Param1  Value1  Param2  Value2  Param3  Value3  
Param4  Value4  etc     


```

--------------------------------------------------------------------------------
```text

Example:
BCAUTOP                         CTYPE   PGLUE   DISTANCE        0.1     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
PID             Reserved for future use (integer >=0, default is 0)
Param(i) Name of a parameter. Allowable names are given below (Character).
Value(i) Value of the parameter. See below (Real, Integer or character). See
Remark  3.


```

--------------------------------------------------------------------------------
