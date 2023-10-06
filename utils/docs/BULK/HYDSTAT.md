## [HYDSTAT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HYDSTAT.xhtml) - Hydrostatic Preset of Density in Euler Elements

Initializes the Euler element densities in accordance to a hydrostatic pressure profile. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HYDSTAT HID     MID     GID     CID     XCG     YCG     ZCG     PATM            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HYDSTAT 101     4                       0.0     0.0     0.0     100000.         
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ HID          │ Identification number of the HYDSTAT entry referenced from the COUPLE entry. (Integer > 0;    │
│              │ Required)                                                                                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID          │ Material MATDEUL id to which the hydrodynamic pressure profile will be applied. (Integer > 0; │
│              │ Required)                                                                                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ GID          │ Number of a grid point at the free surface. See Remark 4. (Integer > 0)                       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID          │ Local coordinate system. See Remark 4. (Integer > 0)                                          │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ XCG,YCG, ZCG │ Coordinates of a point at the free surface. See Remark 4. (Real)                              │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PATM         │ Pressure at free surface. (Real; Required)                                                    │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. It is assumed that each Euler domain contains at most two Eulerian materials and includes the GRAV entry. One material has to be a fluid using EOSPOL the other a gas or void. This EOSPOL material is given by the MID entry. The interface between gas and fluid is the free surface and is assumed to be normal to the gravity vector as specified on the GRAV entry. For example if the gravity vector points in the z-direction then the interface between the gas and the fluid has to be horizontal.  
2. The hydrostatic preset changes the density of the fluid like material in order to conform to the hydrostatic preset. It overrules the material densities as specified on the TICEL and TICVAL entries. Densities of the gas like material are not changed.
3. The free surface has to match with material fractions as defined in the initialization of Euler elements by the TICEL and TICEUL entries. The hydrostatic preset only changes densities, it does not change material fractions.
4. There are two options to enter the location of the free surface. The first option is to enter a grid point number. In that case the fields CID and XCG-ZCG have to be left blank. The GRIDPOINT entry already has the option of using a local coordinate system. When coordinates are used then the field GID has to be left blank.
5. If there is no structural grid point indicating the free surface then a new grid point can be defined that will only be used for determining the free surface level. If the Gravity vector points in the z-direction, only the z-coordinate of the grid point will be used. The x and y ordinate can be chosen arbitrarily. Similar remarks hold when the gravity vector is in one of the other coordinate directions. The same holds when using coordinates instead of a grid point.
6. PATM should be equal to the pressure in the air.
7. When coupling surfaces are present then the HYDSTAT ID needs to be referenced by at least one coupling surface. For each coupling surface a different HYDSTAT entry can be defined. Several COUPLE entries can refer to the same HYDSTAT ID.  If no HYDSTAT ID is specified on a COUPLE entry then Euler elements associated to this coupling surface will not be initialized with a hydrostatic preset.
