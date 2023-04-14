__**[BCGRID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCGRID.xhtml)**__   -   (SOL 700 only) Contact Node Region

--------------------------------------------------------------------------------
Grids to be included in contact analyses in SOL 700 only.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCGRID  CID     GID1    GID2    GID3    GID4    GID5    GID6    GID7    
GID8    GID9    GID10   GID11   GID12   GID13   -etc.-  


```

--------------------------------------------------------------------------------
```text

Example:
BCGRID  100     12      14      17      121     234     235     270     
309     1001    THRU    2000    BY      2       


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              Unique identification number of a “cloud” of grid points which
                can be used for contact or RCONN, BJOIN or WALL. (Integer > 0;
                Required)
GID1,           GID2,…
Gridpoint ID. THRU indicates a range to be used. BY is the increment to be used
within this range. (Integer  >  0; Required)


```

--------------------------------------------------------------------------------
