__**[BARRIER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BARRIER.xhtml)**__   -   Barrier for Eulerian Transport

--------------------------------------------------------------------------------
Defines a barrier for transport in a Eulerian mesh. Used in SOL 700 only.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BARRIER BID     BCID    MESH    DIR     SKFRIC  
XMIN    XMAX    YMIN    YMAX    ZMIN    ZMAX    


```

--------------------------------------------------------------------------------
```text

Example:
BARRIER 100     20      


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
BID             Unique barrier number. (Integer > 0; Required)
BCID            Number of a set of BCSEG entries that define the element faces
                that are barriers to Eulerian transport. See Remark 4. (Integer
                > 0)
MESH            Denotes the ID of the Euler mesh to which the boundary condition
                has to be applied. See Remark 5. (Integer > 0)
DIR             Allowed values are NEGX, POSX, NEGY, POSY, NEGZ and POSZ. See
                Remark 6. (Character)
SKFRIC          Skin friction value. See Remark 8. (Real  0.0, 0.0)
XMIN-ZMAX       Defines a square by specifying the ranges of the x,y,z
                coordinates. For a square in for example the x-plane it is
                required that eitherXMIN = XMAX or that XMAX is left blank. See
                Remark 7. (Real)


```

--------------------------------------------------------------------------------
