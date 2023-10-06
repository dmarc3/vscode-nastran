## [SET](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.SET.xhtml) - Set Definition Under OUTPUT(PLOT)

Defines a set of elements or grid point numbers to be plotted.

The SET command specifies sets of elements or grid points, corresponding to portions of the model, which may be referenced by PLOT and FIND commands. The SET command is required. Each set of elements defines, by implication, a set of grid points connected by those elements. The set may be modified by deleting some of its grid points. The elements are used for creating the plot itself and element labeling, while the grid points are used for labeling, symbol printing, and drawing deformation vectors.

#### Format:

![casecontrol4b01555.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01555.jpg?_LANG=enus)  

![casecontrol4b01557.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01557.jpg?_LANG=enus)  

![casecontrol4b01559.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01559.jpg?_LANG=enus)  

#### Examples:

1. SET 1 consists of elements 1, 5, 10, 11, 13, 14, 15, 20, 22, 24, and 26.

```nastran
SET 1=INCLUDE 1, 5, 10 THRU 15 EXCEPT 12, INCLUDE 20 THRU 26 BY 2
```

2. SET 2 consists of all CTRIA3 and CQUAD4 elements except element 21.

```nastran
SET 2=QUAD4 TRIA3 EXCEPT 21
```

3. SET 10 includes all CTRIAR elements plus elements 70 through 80.

```nastran
SET 10  TRIAR  INCLUDE ELEMENTS 70 THRU 80
```

4. SET 15 includes all elements from 15 to 20 and 26 to 100.

```nastran
SET 15=15 THRU 100 EXCEPT 21 THRU 25
```

5. SET 2 includes all elements except CTETRA elements.

```nastran
SET 2=ALL EXCEPT TETRA
```

```text
┌─────────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                      │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ n           │ Sets identification number (0 < Integer < 999999).                                           │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL         │ Selects all elements or grid points. See typei.                                              │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELEMENTS    │ Specifies that all identification numbers refer to elements.                                 │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRID POINTS │ Specifies that all identification numbers refer to grid points.                              │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ INCLUDE     │ Includes specified element or grid point identification numbers or elements in the set.      │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCLUDE     │ Excludes specified element or grid point identification numbers or element types in the set. │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCEPT      │ Modifies a prior ALL, INCLUDE, or EXCLUDE specification.                                     │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ typei       │ Element types. The allowed element types are (Character):                                    │
└─────────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
ELEMENT Typei on SET  |  ELEMENT Typei on SET 
TYPE    Command       |  TYPE    Command      
----------------------|-------------------------
CAXIF2  AXIF2         |  CQUAD   QUAD    
CAXIF3  AXIF3         |  CQUAD4  QUAD4   
CAXIF4  AXIF4         |  CQUAD8  QUAD8   
CBAR    BAR           |  CQUADR  QUADR   
CBEAM   BEAM          |  CQUADX  QUADX   
CBEND   BEND          |  CROD    ROD     
CBUSH   BUSH          |  CSHEAR  SHEAR   
CONEAX  CONE          |  CSLOT3  SLOT3   
CONROD  CONROD        |  CSLOT4  SLOT4   
CDUMi   DUMi          |  CTETRA  TETRA   
CFLUID2 FLUID2        |  CTRIAX6 TRIAX6  
CFLUID3 FLUID3        |  CTRIA3  TRIA3   
CFLUID4 FLUID4        |  CTRIA6  TRIA6   
CHBDYG  HBDY          |  CTRIAR  TRIAR   
CHBDYP  HBDY          |  CTRIAX  TRIAX   
CHEXA   HEXA          |  CTUBE   TUBE    
CPENTA  PENTA         |  CVISC   VISC    
PLOTEL  PLOTEL        |                  
```

```text
┌──────┬──────────────────────────────────────────────────┐
│ THRU │ Specifies a range of identification numbers.     │
├──────┼──────────────────────────────────────────────────┤
│ BY   │ Specifies an increment for a THRU specification. │
├──────┼──────────────────────────────────────────────────┤
│ inci │ Increment for THRU range (Integer  >  0).        │
└──────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. This form of the SET command can only be specified after an OUTPUT(PLOT) delimiter.

2. The INCLUDE, EXCLUDE, and EXCEPT specifications may be specified more than once in the same set. See previous examples.

3. Commas or spaces may be used as separators.

4. Not all of the identification numbers in a THRU range have to correspond to elements or grid points. For example, elements 2, 4, 7, and 9 may be selected with 2 THRU 9, even if elements 3, 5, 6, and 8 do not exist. This is called an open set. Note that large open sets can cause higher computational costs.
