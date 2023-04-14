__**[ATBJNT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ATBJNT.xhtml)**__   -   Interface to ATB Joints- SOL 700

--------------------------------------------------------------------------------
This entry can only be used together with the ATBSEG entries that this joint connects. The ATBSEG entries overwrite the position and orientation of the ATB segments as specified in the ATB input file. The ATBJNT entry can be used to create a Bulk Data file containing elements and grid points to visualize the ATB segment together with its joints. This visualization of the joints makes it possible to position the ATB model in any available preprocessor. Used in SOL700 only.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ATBJNT  ID      NAME    
+       G0      G1      G2      G3      EID1    EID2    EID3    
+       G4      G5      G6      G7      EID4    EID5    EID6    


```

--------------------------------------------------------------------------------
