## [RBE2GS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RBE2GS.xhtml) - Internally Generate an RBE2 Element

Defines an RBE2 connecting the two closest grids to GS.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2GS  EID     GS      TYPE            TREF    R       CM      ALPHA           
        XS      YS      ZS      GNi     GMj                                     
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2GS  3       17                              1.3             6.5-6           
                                        56      99                              
```
#### Alternate Formats and Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2GS  EID     GS      TYPE                    R       CM      ALPHA           
        XS      YS      ZS      GNi     THRU    GNj                             
        GMk     THRU                                                            
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2GS  15      35                              -.66                            
                                88      THRU    107             15              
        76      88                                                              
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2GS  25                                      .66                             
        5.173   0.0     19.3185 88      99      108                             
        15      THRU    88                                                      
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2GS  35      28                              -.66                            
                                56      THRU    102             19              
        21      THRU    200                                                     
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RBE2GS  45      16                              -.66                            
                                56      THRU    102     1129                    
        1146    THRU    1200                                                    
```
```text
┌────────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer  │ Meaning                                           │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ EID        │ Element identification number.                    │                                                  │
│            │ (0 < Integer < 100,000,000)                       │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ GS         │ Search POINT or GRID point. (Integer ≥ 0 or       │                                                  │
│            │ blank)                                            │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TYPE       │ Connectivity: (Character)                         │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ blank                                             │ Search the complete model. (Default)             │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ NMFLIP                                            │ The independent and dependent DOF’s are          │
│            │                                                   │ interchanged.                                    │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ IIRBE2                                            │ The grids chosen will be the independent GN’s of │
│            │                                                   │ the two closest existing RBE2 elements.          │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ NMIIRBE2                                          │ Same as ‘IIRBE2’ except the independent and      │
│            │                                                   │ dependent grids are interchanged.                │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TREF       │ Reference temperature for the calculation of      │                                                  │
│            │ thermal loads. (Real; Default=0.0).               │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ R          │ Radius. (Real > 0, or < 0)                        │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ CM         │ Component number of dependent degrees-of-freedom  │                                                  │
│            │ for grid GM. (Integers 1 through 6 with no        │                                                  │
│            │ embedded blanks. Blank defaults to 123456)        │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ALPHA      │ Thermal expansion coefficient. (Real or blank)    │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ XS, YS, ZS │ Location of search point if GS is blank. Used     │                                                  │
│            │ only if GS=0 or blank. (Real or blank)            │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ GNi        │ List of grids to be excluded from candidate grids │                                                  │
│            │ for GN. If a GNi list is given it must end with   │                                                  │
│            │ an . (Integer > 0 or blank or “THRU”)             │                                                  │
├────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ GMj        │ List of grids to be excluded from candidate grids │                                                  │
│            │ for GM. If no GNi list is given and a GMj list is │                                                  │
│            │ present, then GNi must have an  entry. (Integer > │                                                  │
│            │ 0 or blank or “THRU”)                             │                                                  │
└────────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```
1. Element ID numbers must be unique with respect to all other element ID numbers.

2. This entry will internally define a RBE2 element with the same ID of the RBE2GS entry. The grid assigned to GN will always be the independent grid. GM will be the dependent grid. If GS is a ‘POINT’ entry (or GS is blank and XYZ is specified), the first two grids that fall within the search radius  ![bulkqrs07418.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07418.jpg?_LANG=enus)  about GS (or XYZ) will be chosen as GN and GM. The closest to the search location will be the independent grid GN the next closest will be the dependent grid GM. Any grids contained in a GNi list will be excluded from the GN search and any grids contained in a GMj list will be excluded from the GM search. After GN and GM have been determined (with or without use of the exclusion lists for GNi and GMj (and if TYPE = ‘NMFLIP’, then GN and GM will be reversed.
If GS is ‘GRID’ entry, and is part of the physical model, i.e., it has physical structural elements attached to it, it will become GN the independent grid for the RBE2 to be generated. If it is in the GNi exclusion list, the next closest grid will be chosen. the closest grid within the search radius about  ![bulkqrs07420.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07420.jpg?_LANG=enus)  GN will be chosen as GM, the dependent grid. Any grids contained in a GNi list will be excluded from the GN search and any grids contained in a GMj list will be excluded from the GM search. After GN and GM have been determined (with our without use of the exclusion lists for GNi and GMj) and if TYPE = ‘NMFLIP’, then GN and GM will be reversed.
If GS is a ‘GRID’ entry, and is determined not to be part of the physical model, the first two grids that fall within the search radius  ![bulkqrs07422.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07422.jpg?_LANG=enus)  about GS (or XYZ) will be chosen as GN and GM. The closest to the search location will be the independent grid, GN, the next closest will be the dependent grid, GM. Any grids contained in a GNi list will be excluded from the GN search and any grids contained in a GMj list will be excluded from the GM search. After GN and GM have been determined (with or without use of the exclusion lists for GNi and GMj) and if TYPE=‘NMFLIP’, then GN and GM will be reversed. The GS grid will remain on the GEOM1 table for post-processing viewing purposes, but will not be part of the Nastran solution g-set. If TYPE=‘IIRBE2’, the two grids chosen for the RBE2 will be the independent GN’s of existing RBE2 elements whose independent grids lie within the search radius. If TYPE=‘NMIIRB2’, then GN and GM will be reversed. If no existing RBE2 elements have independent grids within the search radius or if only one existing RBE2 has an independent grid within the search radius, then a fatal message will be issued. POINT and GRID entries must be unique with respect to all other POINT and GRID entries. If TYPE=‘IIRB2’, it is recommended that PARAM,AUTOMSET,YES be used in the analysis run.

3. If  ![bulkqrs07424.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07424.jpg?_LANG=enus) , the two located grids GN and GM will be made coincident to the GS (or XYZ) location.

4. If CM is 123456 and GM is touching only solid elements, CM will be internally changed to 123. For solid elements, the grids GN and GM should always be coincident.

5. When Module GP4 is run, checks are made to insure that the selected grids, GN and GM, do not violate existing constraint sets. If a violation occurs a fatal message will be issued for the offending grids. These grids can be excluded from further search inclusion by specifying them on the GNi or GMj list. PARAM,AUTOMSET,YES will often prevent any violation.

6. If GS=0 or blank and XS, YX, ZS is not specified or if both GS and XS, YS, ZS are specified a fatal error will occur.

7. The end of a grid exclusion lists is indicated by the existence of “ ![bulkqrs07426.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07426.jpg?_LANG=enus) “ in the field following the last entry in the list. In the “thru” option, not all grids in the range need exist.

8. For superelement or part superelement connection the independent grid assigned to GN will be exterior to the superelement. The dependent grid GM will be an interior grid to the superelement. If the resulting RBE2 element, connects two different superelements, the element will be assigned to the superelement with the lower ID and the grid attached to the superelement with the higher ID will be moved to the superelement with the lower ID.

9. If the RBE2GS is listed on a SEELT entry, it will be placed as the SEELT directs. If say grid G1 lies in another superelement and G2 lies in the SEELT superelement, G1 will be moved to the SEELT defined superelement.

10. “THRU” should not be the first nonblank field of a continuation line. Blank fields are allowed in the exclusion lists for readability.

11. Use PARAM,SEP1XOVR,16 to print the grids found by each RBE2GS entry.

12. RBE2GS is not supported in the presence of part (BEGIN SUPER) superelements.

13. For the Lagrange method, the thermal expansion effect will be computed, if user supplies the thermal expansion coefficient ALPHA, and the thermal load is requested by the TEMPERATURE(INITIAL) and TEMPERATURE(LOAD) Case Control commands. The average temperature of the connected grid points is used as the temperature of the rigid body element. In this case, for the Lagrange method, PARAM, BAILOUT, -1 is activated within the solver.

14. Fluid Grids (Identified by a -1 in the CD field of the GRID entry) do not support the use of Rigid elements, use MPC entries.

