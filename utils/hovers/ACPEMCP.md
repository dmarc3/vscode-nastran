__**[ACPEMCP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACPEMCP.xhtml)**__   -   Trim Component Interface Coupling and Constraints Definition

--------------------------------------------------------------------------------
Defines the interface coupling conditions and constraints of a trim component.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ACPEMCP TID     SGLUED  SSLIDE  SOPEN   SIMPER  OOC     SPM     SAIRGAP 
SCUX    SCUY    SCUZ    SCRX    SCRY    SCRZ    SCFP    RID     


```

--------------------------------------------------------------------------------
```text

Example:
ACPEMCP         1               1002            1004            


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
TID              Identification number of trim component. (Integer>0; Required)
SGLUED          Identification number of SET1/SET3 entry of grids belonging to
                the solid-phase and/or structure volume elements in the trim
                component, whichare glued to a structure; see Remark 2.
                (Integer0 or Blank)
SSLIDE          Identification number of SET1/SET3 entry with grids belonging to
                the solid-phase and/or structure volume elements in the trim
                component, whichare in the sliding-contact to a structure; see
                Remark 3.(Integer0 or Blank)
SOPEN           Identification number of SET1/SET3 entry of grids belonging to
                the fluid-phase elements in the trim component, which has an
                open interface withthe cavities; see Remark 4. (Integer0 or
                Blank)
SIMPER          Identification number of SET1/SET3 entry of grids of the solid-
                phase and/or structure volume elements in the trim component,
                which has animpervious interface with the cavities; see Remark
                5. (Integer0 orBlank)
OOC             Number of blocks for Out-Of-Core solver, see remark 8.
                (Integer>1, Default=1)'
SPM             Flag for selecting single precision MUMPS for computing reduced
                impedance matrix, see Remark 9. (Integer>=0, default=0)
SAIRGAP         Identification number of SET1/SET3 entry with grids belonging to
                the solid-phase and/or structure volume elements in the trim
                component, whichare in contact with structure via air gap. See
                Remark 10.(Integer = 0 or Blank)
SCUX            ID of SET1/SET3 with which grid IDs in the trim component TID is
                zero-constrained in translation X direction of output coordinate
                system.
SCUY            ID of SET1/SET3 with which grid IDs in the trim component TID is
                zero-constrained in translation Y direction of output coordinate
                system.
Describer       Meaning         
SCRX            ID of SET1/SET3 with which grid IDs in the trim component TID is
                zero-constrained in rotation X direction of output coordinate
                system.
SCRY            ID of SET1/SET3 with which grid IDs in the trim component TID is
                zero-constrained in rotation Y direction of output coordinate
                system.
SCRZ            ID of SET1/SET3 with which grid IDs in the trim component TID is
                zero-constrained in rotation Z direction of output coordinate
                system.
SCFP            ID of SET1/SET3 with which grid IDs in the trim component TID is
                zero-constrained in fluid pressure.
RID             ID of a region of a TRMC. (Blank or Integer  0, Default=0).


```

--------------------------------------------------------------------------------
