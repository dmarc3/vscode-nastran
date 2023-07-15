## [HEATLOS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HEATLOS.xhtml) - Heat Loss Through Convection or Radiation of the Airbag Surface - SOL 700

Defines the heat-transfer model to be used with GBAG or COUPLE. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HEATLOS HID     HTRID   SUBID   HTRTYPE HTRTYPIDCOEFF   COEFFV                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HEATLOS 101     83              HTRCONV 2       TABLE   14                      
```
```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ HID       │ Unique number of a HEATLOS entry. (Integer > 0;  │                                                   │
│           │ Required)                                        │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ HTRID     │ Number of a set of HEATLOS entries HTRID must be │                                                   │
│           │ referenced from a GBAG or COUPLE entry. (Integer │                                                   │
│           │ > 0; Required)                                   │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SUBID     │ (Integer > 0, 0)                                 │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ > 0                                              │ Number of a BSURF, BCBOX, BCPROP, BCMATL or       │
│           │                                                  │ BCSEG, which must be a part of the surface as     │
│           │                                                  │ defined on the GBAG or COUPLE entries.            │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ = 0                                              │ HEATLOS definitions are used for the entire       │
│           │                                                  │ surface as defined on the GBAG or COUPLE entries. │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ HTRTYPE   │ Defines the type of heat transfer. (Character;   │                                                   │
│           │ Required)                                        │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HTRCONV                                          │ The HTRCONV logic is used to model heat transfer  │
│           │                                                  │ through convectionion in an air bag. The area of  │
│           │                                                  │ convection through which the energy is            │
│           │                                                  │ transported is equal to the area of the           │
│           │                                                  │ subsurface multiplied by COEFFV. A value of       │
│           │                                                  │ COEFFV = 1.0 will expose the complete subsurface  │
│           │                                                  │ area, while a value of COEFFV = 0.0 will result   │
│           │                                                  │ in no heat transfer through the subsurface.       │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HTRRAD                                           │ The HTRRAD logic is used to model heat transfer   │
│           │                                                  │ through radiation in an air bag. The area of      │
│           │                                                  │ convection through which the energy is            │
│           │                                                  │ transported is equal to the area of the           │
│           │                                                  │ subsurface multiplied by COEFFV. A value of       │
│           │                                                  │ COEFFV = 1.0 will expose the complete subsurface  │
│           │                                                  │ area, while a value of COEFFV = 0.0 will result   │
│           │                                                  │ in no heat transfer through the subsurface.       │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ HTRTYPID  │ Heat transfer ID. References existing HTRTYPE    │                                                   │
│           │ entry. (Integer > 0; Required)                   │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COEFF     │ Method of defining the area coefficient.         │                                                   │
│           │ (Character, CONSTANT)                            │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                         │ The area coefficient is constant and specified on │
│           │                                                  │ COEFFV.                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                            │ The area coefficient varies with time. COEFFV is  │
│           │                                                  │ the number of a TABLED1 entry giving the          │
│           │                                                  │ variation with time.                              │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COEFFV    │ The area coefficient or the number of a TABLED1  │                                                   │
│           │ entry depending on the COEFF entry. (0.0 < R     │                                                   │
│           │ < 1.0 or 1 > 0, 1.0)                             │                                                   │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
#### Remarks

1. A combination of multiple HEATLOS with different HTRTYPEs is allowed.

2. It allows for setting up the exact same model for either a uniform pressure model (GBAG to HEATLOS) or an Eulerian model (COUPLE to HEATLOS). It is then possible to set up the model using the switch from full gas dynamics to uniform pressure (GBAGCOU).

3. For the same BSURF multiple, different types of heat transfer may be defined.

4. A more detailed description can be found in Porosity in Air Bag for more details.

