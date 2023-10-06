## [ACMODL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACMODL.xhtml) - Fluid-Structure Interface Parameters

Optional entry to define modeling parameters for Fluid-Structure Interface.

#### Format:

(If METHOD=“BW”)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACMODL  INTER   INFOR   FSET    SSET    NORMAL  METHOD  SKNEPS  DSKNEPS         
        INTOL   ALLSSET SRCHUNIT                                                
```
(If METHOD=“CP”)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACMODL  INTER   INFOR   FSET    SSET    NORMAL  METHOD                          
```
#### Example(s):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ACMODL  IDENT                           NORMAL                                  
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTER     │ Type of structure-fluid interface. (Character = “IDENT” or “DIFF”; Default = “DIFF”)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INFOR     │ For METHOD = “BW” and INTER = “DIFF”, indicates if FSET and SSET are used to define the fluid-     │
│           │ structure interface, “NONE” if not used, and whether they contain grids or elements.               │
│           │ (Character = “GRIDS”, “ELEMENTS”, “ALL”, or “NONE”, Default = “NONE”) For METHOD = “CP” and        │
│           │ INTER = “DIFF”, indicates if FSET and SSET are used to define the fluid-structure interface,       │
│           │ “NONE” if not used. See Remark 10. (Character = “ALL”, or “NONE”, Default = “NONE”)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSET      │ Optional identification of a SET1 entry that contains a list of fluid elements or grids on the     │
│           │ fluid "skin". See Remark 2. If Modules are present and the MDFSET entry is to be used instead of   │
│           │ SET1 then set FSET to -1. (Integer -1 or >0 or blank).                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SSET      │ Optional identification of a SET1 entry that contains a list of structural elements or grids on    │
│           │ the structure-fluid interface. See Remark 2. If Modules are present and the MDSSET entry is to be  │
│           │ used instead of SET1 then set SSET to -1. (Integer -1 or >0 or blank).                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORMAL    │ Fluid normal tolerance. See Remark 5. (Real; Default = 1.0 (Real; .001 for IDENT)                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ Default = “BW” “BW” = Body in White method “CP” = Closed Pressure Vessel Method See Remarks        │
│           │ 10. and 11.                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SKNEPS    │ Fluid skin growth tolerance. (Real; Default 0.5)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DSKNEPS   │ Secondary fluid skin growth tolerance (Real; Default .75)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTOL     │ Tolerance of inward normal.  (Real; Default .5)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALLSSET   │ If “NO” then SSET structure is searched and coupled if found. If ‘YES’ then all the structure      │
│           │ given by SSET is coupled. (Character = ‘YES’, or ‘NO’; Default = ‘NO’)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SRCHUNIT  │ Search units. (Character=‘ABS’ for absolute model units or ‘REL’ for relative model units based on │
│           │ element size; Default = ‘REL’)                                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Only one ACMODL entry is allowed. In general, for large irregular models, it is recommended that, initially, this entry not be used, so the defaults will be applied.

2. For METHOD = “BW” and INTER = “DIFF” (Default), FSET and SSET refer to either grids or elements as selected below. For INTER = “IDENT”, FSET and SSET refer to grids.

        - For INTER = “DIFF”, INFOR = “ELEMENTS”, for FSET, the search algorithm is restricted to elements referenced by FSET. For SSET, the search algorithm is restricted to elements referenced by SSET. This allows the user to de-select specific structural faces of a solid structural element. Both these sets are optional and the user can have one without the other.

        - For INTER = “DIFF”, INFOR = “GRIDS”, for FSET, the search algorithm is restricted to grids referenced by FSET. This allows the user to deselect fluid grids. Fluid grid selection is the only way to deselect specific fluid faces. For SSET, the search algorithm is restricted to grids referenced by SSET. This allows the user to de-select structural grids. Both these sets are optional and the user can have one without the other.

        - For INTER = “IDENT”, INFOR = “ALL”, the points referenced by FSET and SSET must lie exactly on the fluid-structure interface. These sets are optional, but if used, both must be present or no fluid interface is calculated.

3. For INTER = “DIFF”, a .PCH file is created with a SET1 representing the fluid “skin” and a SET1 representing the structure interface. This file is useful for graphic post-processing for viewing the interface. It also produces the sets that can be used as FSET and SSET.

4. For ALLSSET = ‘NO’ (default) the elements and grids determined by the couplings algorithm are written to the .PCH file. The user can then deselect elements or grids as defined by the .PCH file by editing them out of the SET1 entries defined in the file and referencing the edited SET1 with the SSET. To add structural elements that the coupling algorithm did not include in the .PCH file, it is not sufficient to just include them on the SET1 entry referenced by SSET. In addition, ALLSSET = ‘YES’ must be specified.

5. NORMAL determines the height of the fluid box in the outward normal direction to the fluid surface. The fluid box is used to locate the structural elements used in defining the fluid-structure coupling matrix. If L is the smallest edge of the fluid element surface, then the height of the box is L x NORMAL.

     For INTER = “IDENT”, NORMAL = .001 is the default and represents a tolerance, in units of length, used in determining the fluid-structure interface.

6. SKNEPS represents the enlargement of the plane of the fluid surface used to define the search box. The diagonal distance from the center of the fluid surface to each surface grid is pushed out (diagonal x (1. + SKNEPS)).

![bulkab02029.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02029.jpg?_LANG=enus)

7. DSKNEPS represents a secondary enlargement of the plane of the fluid surface used to define the search box if SKNEPS fails to find ANY structural elements. The diagonal distance from the center of the fluid surface to each surface grid is pushed out (diagonal x (1. + DSKNEPS)).

8. INTOL represents a normal direction into the fluid for the case when the fluid protrudes past the structural interface. It is defined as L x INTOL where L is the smallest edge of the fluid element surface.

9. The BW method is summarized in the following table:
        
        ....

10. The default METHOD is the “BW” searching algorithm that requires a special license.

     The pre-Version 2004 method is selected with METHOD = “CP” in which:

     - The search box is not used so the SKNEPS, DSKNEPS, INTOL, ALLSET, SRCHUNIT fields are ignored.

     - If INFOR = ‘ALL’ (METH = ‘CP’ only), then both FSET and SSET must be specified and matching is checked at only those grid points referenced by FSET and SSET.

     - FSET and SSET refer to grids.

     - NORMAL = blank is the default (recommended), 1.  <  NORMAL  <  10. gets acceptable results. In this case, NORMAL represents a maximum cutoff value measured in physical units. When NORMAL = ‘blank’, Nastran will compute the cutoff value.

     This field replaces the pre-Version 2004 FSTOL field. Different units are also used so pre-Version 2004 FSTOL values may need to be changed to obtain the same results.

11. METH = ‘CP’ is not recommended when complex acoustic cavities (such as body in white automotive models) exist in the model.

12. If Modules are present then this entry may only be specified in the main Bulk Data section.

