__**[ATBSEG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ATBSEG.xhtml)**__   -   Interface to ATB Segments- SOL 700

--------------------------------------------------------------------------------
Defines the position and orientation of the ATB segments. The position and
orientation as specified on the G.2 and G.3 entries in the ATB input file will
be overruled by the definitions given here.
This entry can be used to create a Bulk Data file containing elements and grid points to visualize the ATB segment, together with the contact ellipsoid and the joints it is connected by. See also ATBJNT and DYPARAM, ATBSEG. Used in SOL700 only.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ATBSEG  ID      NAME    COVER   NUMELM  GSTART  ESTART  MID     PIDCOV  
+       G0      G1      G2      G3      EID1    EID2    EID3    PIDCG   


```

--------------------------------------------------------------------------------
