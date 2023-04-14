__**[BCBOX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBOX.xhtml)**__   -             3D      Contact Region  

--------------------------------------------------------------------------------
```text

Example (for    Form    1):     
BCBOX   101             0       1001    1002    1003    1004    1005    1006    1007    1008    
R


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              Identification of a deformable surface corresponding to a BSID
                value on the BCBODY entry if the Case Control BCONTACT=BCBOX is
                specified. Allelements corresponding to the designated box may
                potentially comeinto contact.See Remark 1. (Integer > 0)
COORD           Enter COORD in field 3 if x,y,z coordinates of the box are to be
                specified rather than grid IDs. (Character)
HOW             A flag indicating whether an element is in the defined box or
                not. (Integer; Default = 0)
0 If only one grid point of an element is in the box, the entire element is
considered to be in the box.
1 All grid points comprising the element must be within the box,  otherwise the
element is considered outside of the box.
N1-N8           Enter 8 Grid IDs defining a box (hexa-like region) if the third
                field is blank. (Integer; Required if COORD is blank)


```

--------------------------------------------------------------------------------
