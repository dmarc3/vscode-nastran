__**[ACPMCP1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACPMCP1.xhtml)**__   -   Analytical Trim Component Interface Coupling and Constraints Definition

--------------------------------------------------------------------------------
Defines the interface coupling conditions of a 1D analytical trim component.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      ACPMCP1 TID     SGLUED SSLIDE SOPEN             SIMPER          RID     METHOD  


```

--------------------------------------------------------------------------------
```text

Example:
ACPMCP1 1       1002            1004    
1D


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
TID             Identification number of a trim component. (Integer > 0;
                Required)
SGLUED          Identification number of SET3 entry of PLTSURF surface mesh on
                the trimcomponent, which is glued to a structure. See Remark 2.
                (Integer  0 orBlank)
SSLIDE          Identification number of SET3 entry of PLTSURF surface mesh on
                the trimcomponent, which are in the sliding contact to a
                structure; see Remark3. (Integer  0 orBlank)
SOPEN           Identification number of SET3 entry of PLTSURF surface mesh on
                the trimcomponent, which has an open interface with the
                cavities. See Remark 4.(Integer  0 orBlank)
SIMPER          Identification number of SET3 entry of PLTSURF surface mesh on
                the trimcomponent, which has an impervious interface with the
                cavities; seeRemark 5. (Integer 0 or Blank)
RID             ID of a region of a TRMC. (Blank or Integer  0, Default=0)
METHOD          Modeling method of analytical trim. (Character = “1D” or Blank)


```

--------------------------------------------------------------------------------
