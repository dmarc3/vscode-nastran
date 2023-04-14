__**[BCMATL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCMATL.xhtml)**__   -                                    3D              Contact Region          by      Element         Materials

--------------------------------------------------------------------------------
Defines                 a    3D                   contact region                 by   element                 material.All                   elementswith                  the   specified                materialsdefine                 a    contact                 body  used                  in   SOL                   700.  

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCMATL  ID      IM1     IM2     IM3     IM4     IM5     IM6     IM7     
IM8     IM9     etc.    


```

--------------------------------------------------------------------------------
```text

Example:
BCMATL  1001    101     201     301     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              IdentificationofadeformablesurfacecorrespondingtoaBSIDvalueonthe
                BCBODYentryiftheCaseControlcommand,BCONTACT=BCMATLisspecified.Al
                lelementscorrespondingtothematerialIDsspecifiedmaypotentiallycom
                eintocontact.SeeRemark1.(Integer>0)
IMi Material ID. A minimum of one entry is required. (Integer)


```

--------------------------------------------------------------------------------
