__**[BCMOVE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCMOVE.xhtml)**__   -                                    Movementof      Bodies  in      Contact 

--------------------------------------------------------------------------------
Defines             movementof               bodies in               contact used              in   SOL               101   and               SOL   400.  

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCMOVE  ID      MTYPE   
IDRBOD1 IDRBOD2 IDRBOD3 etc.    


```

--------------------------------------------------------------------------------
```text

Examples:
BCMOVE  33      RELEASE 
1       3       5       7       
BCMOVE  1       approach


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              Identification number referenced by a BCONTACT or BCMOVE Case
                Control command within a SUBCASE or STEP. See Remark 1. (Integer
                > 0; Required)
MTYPE           Movement type. (Character; Default = APPROACH)
APPROACH        All rigid bodies are moved so that they all make contact with
                deformable bodies.
RELEASE         The contact condition is released for selected bodies.
SYNCHRON        All rigid bodies are moved until the first rigid body makes
                contact with a deformable body.
IDRBODi Identification numbers of contact bodies to be released, for option
RELEASE only.  Points to BCBODY or BCBODY1 Bulk Data entries.


```

--------------------------------------------------------------------------------
