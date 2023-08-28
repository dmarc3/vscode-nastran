## [COUPLE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.COUPLE.xhtml) - General Euler-Lagrange Coupling Surface

Defines a coupling surface that acts as the interface between an Eulerian (finite volume) and a Lagrangian (finite element) domain. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUPLE  CID     BSID    COVER   REVERSE CHECK   PORID   OPTID   CTYPE   +       
+       INFID   HTRID   FS      FK      EXP     INTID                   +       
+       SET1ID  MESHID  TDEAC   COUP1FL HYDSTAT SKFRIC  COHFRID                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
COUPLE  100     37      INSIDE  ON      ON                              +       
+                               0.3     0.0                                     
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CID       │ Unique number of a COUPLE entry. (Integer > 0;    │                                                   │
│           │ Required)                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BSID      │ Number of a BSURF, BCBOX, BCPROP, BCMATL or BCSEG │                                                   │
│           │ entry defining the coupling surface. (Integer >   │                                                   │
│           │ 0; Required)                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COVER     │ The processing strategy for Eulerian elements     │                                                   │
│           │ inside and outside of the coupling surface.       │                                                   │
│           │ (Character, INSIDE)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ INSIDE                                            │ The Eulerian elements inside the closed volume of │
│           │                                                   │ the coupling surface are not processed.           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OUTSIDE                                           │ The Eulerian elements outside the closed volume   │
│           │                                                   │ of the coupling surface are not processed         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NONE                                              │ The Eulerian elements on both sides of the        │
│           │                                                   │ coupling surface are processed.                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ REVERSE   │ Auto-reverse switch for the coupling surface      │                                                   │
│           │ segments. (Character, ON)                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ON                                                │ If required, the normals of the coupling surface  │
│           │                                                   │ segments are automatically reversed so that they  │
│           │                                                   │ all point in the same general direction as to     │
│           │                                                   │ give a positive closed volume.                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OFF                                               │ The segments are not automatically reversed. The  │
│           │                                                   │ user is responsible for defining the correct      │
│           │                                                   │ general direction of the segment normals.         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CHECK     │ Check switch for coupling surface segments.       │                                                   │
│           │ (Character, ON)                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ ON                                                │ The normals of the segments are checked to verify │
│           │                                                   │ that they all point in the same general direction │
│           │                                                   │ and yield a positive closed volume.               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ OFF                                               │ The segments are not checked. It the              │
│           │                                                   │ responsibility of the user to ensure that the     │
│           │                                                   │ direction of the segment normals yield a positive │
│           │                                                   │ closed volume.                                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ When “REVERSE” is set to “ON”, the “CHECK” option │                                                   │
│           │ will be automatically activated.                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PORID     │ Number of a set of “LEAKAGE” entries that define  │                                                   │
│           │ the porosity for the BSURF entries. (Integer > 0, │                                                   │
│           │ 0 (no porosity))                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ OPTID     │ Not available for the Roe solver Number of a set  │                                                   │
│           │ of “COUOPT” entries that define special options   │                                                   │
│           │ for the BSURF entries (Integer > 0, 0 (no special │                                                   │
│           │ options))                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CTYPE     │ Not available for the Roe solver Coupling surface │                                                   │
│           │ type definition. (Character, STANDARD)            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ STANDARD                                          │ Standard Euler-Lagrange interaction.              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ AIRBAG                                            │ Coupling for airbag applications. It is           │
│           │                                                   │ equivalent to the standard coupling algorithm     │
│           │                                                   │ with the following exceptions that tailor the     │
│           │                                                   │ solution for airbag applications:                 │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │                                                   │ Inflow through a porous (sub)-surface will only   │
│           │                                                   │ occur when there is already some material (gas)   │
│           │                                                   │ in the Eulerian element.                          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │                                                   │ Almost empty Eulerian elements will be            │
│           │                                                   │ automatically eliminated. The standard algorithm  │
│           │                                                   │ redistributes the small mass to the must suitable │
│           │                                                   │ neighbor elements.                                │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ INFID     │ Number of a set of “ABINFL” entries that define   │                                                   │
│           │ the inflator(s) on the subsurface(s) of the       │                                                   │
│           │ coupling surface. Not available for the Roe       │                                                   │
│           │ solver. (Integer > 0, 0 (no inflators))           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ HTRID     │ Number of a set of “HEATLOS” entries that define  │                                                   │
│           │ the heat transfer definition(s) on the            │                                                   │
│           │ subsurface(s) of the coupling surface. Not        │                                                   │
│           │ available for the Roe solver. (Integer > 0, 0 (no │                                                   │
│           │ heat transfer))                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FS        │ Static friction coefficient. See Remark 6. Not    │                                                   │
│           │ available for the Roe solver. (Real > 0.0, 0.0)   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FK        │ Kinetic friction coefficient. See Remark 6. Not   │                                                   │
│           │ available for the Roe solver. (Real > 0.0, 0.0)   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EXP       │ Exponential decay coefficient. See Remark 6. Not  │                                                   │
│           │ available for the Roe solver. (Real > 0.0, 0.0)   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ INTID     │ ID of an INITGAS entry specifying initial gas     │                                                   │
│           │ composition for the Euler mesh. See Remark        │                                                   │
│           │ 7. (Integer > 0, 0 (no initial gas composition))  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SET1ID    │ The number of a SET1 entry, which defines the     │                                                   │
│           │ Eulerian elements associated with this coupling   │                                                   │
│           │ surface. See Remark 8. (Integer > 0; Default =    │                                                   │
│           │ blank)                                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MESHID    │ ID of a MESH entry, which defines the Eulerian    │                                                   │
│           │ mesh associated with this coupling surface. See   │                                                   │
│           │ Remark 8. (Integer > 0; Default = blank)          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TDEAC     │ Time of deactivation of the coupling surface and  │                                                   │
│           │ the associated Eulerian mesh. (Real > 0.0, 1.E20) │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COUP1FL   │ The number of a COUP1FL entry, which defines the  │                                                   │
│           │ surrounding variables for the coupling surface    │                                                   │
│           │ when its segments fail. See Remark 9. (Integer >  │                                                   │
│           │ 0; Default = blank)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ HYDSTAT   │ The number of a HYDSTAT entry, which specifies a  │                                                   │
│           │ hydrostatic preset. The preset is applied to all  │                                                   │
│           │ Euler element specified by the SET1ID and MESHID. │                                                   │
│           │ See Remark 11. (Integer > 0, 0 (no hydrostatic    │                                                   │
│           │ preset)                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SKFRIC    │ Skin friction value. See Remark 13. (Real > 0.0,  │                                                   │
│           │ 0.0)                                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COHFRID   │ Number of a set of COUCOHF entries that define    │                                                   │
│           │ the cohesive friction on the subsurface(s) of the │                                                   │
│           │ coupling surface.(I> 0 Default = blank)           │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. All coupling surfaces must form a multi-faceted closed volume. If necessary, additional segments must be defined to achieve the closed volume. The closed volume must intersect at least one Euler element initially.
2. All segments must de attached to the face of an element. Dummy elements can be used to define any additional segments that are required to create the closed volume.
3. The normals of all segments that from the coupling surface must point in the same general direction and result in a positive closed volume. Setting the “REVERSE” option to “ON” ensures that this condition is satisfied, regardless of the initial definition of the segments.
4. The “COVER” field determines how Eulerian elements that are inside and outside of the coupling surface are processed. The default setting of INSIDE is appropriate for most of the problems. In the majority of analyses, the Eulerian material flows around the outside of the coupling surface. Therefore, the Eulerian elements that fall within the coupling surface do not contain material. For some specific applications, such as airbag inflation, the Eulerian material (gas) is completed contained within the coupling surface. In these cases, the “COVER” definition should be set to OUTSIDE.
5. By default the fast coupling algorithm is used. The algorithm then used is substantially faster than the general coupling. The restriction is that you cannot use an arbitrarily shaped Euler mesh with the fast coupling algorithm. All element faces of the Euler mesh must have their normal pointing in any of the three basic coordinate directions. If you want to use the general coupling algorithm, you can define the parameter “DYPARAM,FASTCOUP,NO” in the input file.
6. The friction model implemented for the coupling algorithm is a simple Coulomb friction definition. The friction coefficient  ![bulkc202768.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202768.jpg?_LANG=enus)  is defined as:

     ![bulkc202770.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202770.jpg?_LANG=enus)  

     where  ![bulkc202772.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202772.jpg?_LANG=enus)  is the static friction coefficient,  ![bulkc202774.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202774.jpg?_LANG=enus)  is the kinetic friction coefficient,  ![bulkc202776.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202776.jpg?_LANG=enus)  the exponential decay coefficient and  ![bulkc202778.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202778.jpg?_LANG=enus)  the relative sliding at the point of contact.

7. An initial gas composition is for use with the single-material hydrodynamic Euler solver and an ideal-gas equation of state (EOSGAM) only.
8. Multiple coupling surfaces are available when you associate one Eulerian domain with a single coupling surface by either using the SET1ID or the MESHID option. Note that only one of the two options may be set and will work only in combination with the fast coupling algorithm.
9. The COUP1FL option is available and valid only in combination with the fast coupling algorithm with the failure option (DYPARAM,FASTCOUP, ,FAIL). If no number is given, the default values of the surrounding variables will be used; the density (RHO) is set equal to the reference density as defined on the MATDEUL entry. By default, the other variables (SIE, XVEL, YVEL and ZVEL) are set equal to zero.
10. If an ACTIVE entry is present, its definition is ignored in case the TDEAC value is defined in combination with the fast coupling algorithm.
11. If there is only one coupling surface and no adaptive meshing is used, the HYDSTAT field can be left blank. To impose a boundary condition that matches the hydrostatic initialization, the PORHYDS entry can be used.
12. A mixture of BSURF, BCBOX, BCPROP, BCMATL or BCSEG with the same BSID is allowed. However multiple BSID of the same type is not allowed. When using this option, special care must be taken to assure the same element is not part of multiple BSID definitions.
13. The skin friction is defined as:

     ![bulkc202780.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202780.jpg?_LANG=enus) 
 
     Here,  ![bulkc202782.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202782.jpg?_LANG=enus)  denotes the shear friction in an Euler element adjacent to a couple surface segment where  ![bulkc202784.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202784.jpg?_LANG=enus)  is the density and u is the tangential relative velocity in the Euler element that is adjacent to a couple surface segment.

     SKFRIC will only be used when VISC has been set on either an EOSGAM or an EOSPOL entry. If VISC has been set and if SKFRIC has not been set then a no slip condition will be prescribed at the interface between fluid and structure.

14. If the coupling surface is a structural solid then Sol700 can automatically create a coupling surface for the solid. This coupling surface consists of the boundary faces of the solid. To activate this, a BCPROP has to be created for the solid and the BCPROP has to be used for the BSID of the COUPLE entry.
15. Option NONE requires the use of DYPARAM, AUTCOUP. For details refer to this DYPARAM.
16. When BSID refers to a ID of a BCPROP or BCMATL, only properties of shell elements can be referenced. All solid elements referenced with the same PID or MID will be ignored. Use BCSEG to reference faces of solid elements.
