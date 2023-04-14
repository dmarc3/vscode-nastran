__**[ABSNMVS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ABSNMVS.xhtml)**__   -   Meta data group String name/value pairs

--------------------------------------------------------------------------------
Associate String Name/Value pairs with meta data collectors (ABSTRCT).

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ABSNMVS ABSTID
NAME1 VAL1
NAME2 VAL2
-etc.-


```

--------------------------------------------------------------------------------
```text

Example:
1       2       3       4       5       6       7       8       9       10      
ABSNMVS 50
ABSNAME B pillar model year 2020
ABSDESC B pillar including locking bushing


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ABSTID          Unique identification number for meta data group (ABSTRCT).
                (Integer>0)
NAMEi Up to eight characters defining the name of this Name/Value pair.
(Character).
VALi Value of this Name/Value pair. May consist of any Character A-Z, or
numbers, and  underscore or dash. Limited to 56 characters. (Character).


```

--------------------------------------------------------------------------------
