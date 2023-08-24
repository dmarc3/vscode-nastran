## [FFCONTR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FFCONTR.xhtml) - Closed Volume Intended for Fluid Filled Containers

Defines the pressure within a closed volume. Intended for the use in (partially) filled containers, where dynamic fluid effects are negligible, e.g. top loading and hot filling. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FFCONTR FFID    SID     FVOL    PATM    TEMPTAB DENSTAB TACTIVE                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FFCONTR 1       2       1.50E-030.1E6   10      20                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FFID      │ Unique FFCONTR identification number. (Integer > 0; Required)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Number of a BSURF, BCBOX, BCPROP, BCMATL or BCSEG entry defining the closed surface. (Integer > 0; │
│           │ Required)                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FVOL      │ Fluid volume in the container. (Real > 0.0; Required)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PATM      │ Atmospheric pressure. Used for determination of the constant  for . (Real > 0.0; Required)         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEMPTAB   │ A reference to a TABLED1 ID that specifies how temperature of the container changes in time.       │
│           │ (Integer > 0; Blank)                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DENSTAB   │ A reference to a TABLED1 ID that specifies how density of the container changes with temperature.  │
│           │ (Integer > 0; Blank)                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TACTIVE   │ Time at which the pressure computation of the bottle is started. Until this time the pressure      │
│           │ inside the bottle equals the ambient pressure. The volume of the bottle at TACTIVE will be used    │
│           │ for the initial pressure computation of the gas in the bottle.                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If TEMPTAB is not set, the gas above the fluid is assumed to be an ideal, iso-thermal gas:  ![bulkfgil03634.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03634.jpg?_LANG=enus) , where  ![bulkfgil03636.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03636.jpg?_LANG=enus)  is a constant. If TEMPTAB is set, the temperature is applied to both the fluid as well as the gas. Then the gas satisfies  ![bulkfgil03638.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03638.jpg?_LANG=enus) , where  T  is the temperature of the fluid.
2. The fluid is assumed incompressible.
3. The pressure is based on the uniform pressure gasbag algorithm, where the pressure is uniform in the volume, but variable in time.
4. Output for the fluid-filled container is available through a SURFOUT definition. The available variables are: PRESSURE, VOLUME, TEMPTURE, VOLGAS, VOLFLUID, GAUGEPRES and RHOFLUID.
5. The normals of the surface referenced by SID are reversed automatically if required.
6. Modeling guidelines are described in the “Getting Started” Section.
7. If DENSTAB is set then volume of the fluid changes according to

     ![bulkfgil03640.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03640.jpg?_LANG=enus)  

     Here  ![bulkfgil03642.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03642.jpg?_LANG=enus)  and  ![bulkfgil03644.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03644.jpg?_LANG=enus)  are initial values for temperature and fluid volume,  ![bulkfgil03646.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03646.jpg?_LANG=enus)  is the fluid density and T denotes the current temperature. If TEMPTAB is not set the DENSTAB entry will not be used.

8. At time=TACTIVE the gas is assumed to be in contact with the ambient pressure for the last time. This means that at Time = TACTIVE the pressure in the bottle equals the ambient pressure. After TACTIVE the bottle has been closed and there is no longer contact between ambient and gas inside the bottle. Any change in volume of the bottle or temperature or fluid will result in change of pressure of the gas inside the bottle.
