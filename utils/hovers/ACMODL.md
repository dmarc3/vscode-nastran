__**[ACMODL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACMODL.xhtml)**__   -   Fluid-Structure Interface Parameters

--------------------------------------------------------------------------------
Optional entry to define modeling parameters for Fluid-Structure Interface.

--------------------------------------------------------------------------------
```text

Format:
(If METHOD=“BW”)
1       2       3       4       5       6       7       8       9       10      
ACMODL  INTER   INFOR   FSET    SSET    NORMAL  METHOD  SKNEPS  DSKNEPS 
INTOL   ALLSSET SRCHUNIT
(If METHOD=“CP”)
ACMODL  INTER   INFOR   FSET    SSET    NORMAL  METHOD  


```

--------------------------------------------------------------------------------
```text

Example(s):
ACMODL  IDENT                           NORMAL  


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
INTER           Type of structure-fluid interface. (Character = “IDENT” or
                “DIFF”; Default = “DIFF”)
INFOR           For METHOD = “BW” and INTER = “DIFF”, indicates if FSET and SSET
                are used to define the fluid-structure interface, “NONE” if not
                used, andwhether they contain grids or elements. (Character =
                “GRIDS”,“ELEMENTS”, “ALL”,or “NONE”, Default = “NONE”)
For METHOD = “CP” and INTER = “DIFF”, indicates if FSET and SSET are used to
define the fluid-structure interface, “NONE” if not used. See Remark 10.
(Character = “ALL”, or “NONE”, Default = “NONE”)
FSET            Optional identification of a SET1 entry that contains a list of
                fluid elements or grids on the fluid "skin". See Remark 2. If
                Modules arepresent and the MDFSET entry is to be used instead of
                SET1 then setFSET to -1.(Integer -1 or >0 or blank).
SSET            Optional identification of a SET1 entry that contains a list of
                structural elements or grids on the structure-fluid interface.
                See Remark 2. IfModules are present and the MDSSET entry is to
                be used insteadof SET1 then setSSET to -1. (Integer -1 or >0 or
                blank).
NORMAL          Fluid normal tolerance. See Remark 5. (Real; Default = 1.0
                (Real; .001 for IDENT)
METHOD
                Default=“BW”“BW”=BodyinWhitemethod“CP”=ClosedPressureVesselMetho
                dSeeRemarks10.and 11.
Describer       Meaning         
DSKNEPS         Secondary fluid skin growth tolerance (Real; Default .75)
INTOL           Tolerance of inward normal. (Real; Default .5)
ALLSSET         If “NO” then SSET structure is searched and coupled if found. If
                ‘YES’ then all the structure given by SSET is coupled.
                (Character = ‘YES’, or‘NO’; Default = ‘NO’)
SRCHUNIT        Search units. (Character=‘ABS’ for absolute model units or ‘REL’
                for relative model units based on element size; Default = ‘REL’)


```

--------------------------------------------------------------------------------
