__**[BAROR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BAROR.xhtml)**__   -   CBAR Entry Default Values

--------------------------------------------------------------------------------
Defines default values for field 3 and fields 6 through 8 of the CBAR entry.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BAROR           PID                             X1      X2      X3      OFFT    


```

--------------------------------------------------------------------------------
```text

Example:
BAROR           39                              0.6     2.9     -5.87   GOG     
Alternate Format and Example:
BAROR           PID                             G0              OFFT    
BAROR           39                              18              GOG     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
PID             Property identification number of the PBAR entry.  (Integer > 0
                or blank)
v
X1, X2, X3      Components of orientation vector , from GA, in the displacement
                coordinate system at GA (default), or in the basic coordinate
                system. See Remark5. (Real)
v
G0              Alternate method to supply the orientation vector , using grid
                point G0.  The direction of  is from GA to G0.  is then
                translated to End A.(Integer > 0;  or GB on CBAR entry)
v v
G0              GA 
OFFT            Offset vector interpretation flag. See Remark 5. (Character or
                blank)


```

--------------------------------------------------------------------------------
