## [LEAKAGE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LEAKAGE.xhtml) - Mass Loss Through Holes or Permeability of the GBAG or COUPLE Surface

Defines the porosity model to be used with GBAG or COUPLE. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LEAKAGE LID     PORID   SUBID   PORTYPE PORTYPIDCOEFF   COEFFV                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LEAKAGE 7       100     365     PERMEAB 63              0.99                    
```

```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ LID       │ Unique number of a LEAKAGE entry. (Integer > 0;  │                                                   │
│           │ Required)                                        │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PORID     │ Number of a set of LEAKAGE entries PORID must be │                                                   │
│           │ referenced from a GBAG or COUPLE entry. (Integer │                                                   │
│           │ > 0; Required)                                   │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SUBID     │ > 0                                              │ Number of a BSURF, BCBOX, BCPROP, BCMATL or       │
│           │                                                  │ BCSEG, which must be a part of the surface, as    │
│           │                                                  │ defined on the GBAG or COUPLE entry.              │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ = 0                                              │ LEAKAGE definitions are used for the entire       │
│           │                                                  │ surface as defined on the GBAG or COUPLE entry.   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PORTYPE   │ Defines the type of porosity. (Character;        │                                                   │
│           │ Required)                                        │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PORFLOW                                          │ The PORFLOW logic is used to model a constant     │
│           │                                                  │ flow boundary in the coupling surface. The flow   │
│           │                                                  │ boundary acts on the open area of the coupling    │
│           │                                                  │ surface. The open area is equal to the area of    │
│           │                                                  │ the (sub) surface multiplied by COEFFV. A hole    │
│           │                                                  │ can be modeled when COEFFV is set to 1.0. A       │
│           │                                                  │ closed area results for COEFFV = 0.0. The         │
│           │                                                  │ characteristics of the flow are defined on a      │
│           │                                                  │ PORFLOW entry, with ID as defined on the          │
│           │                                                  │ PORTYPID.                                         │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PORFLWT                                          │ The PORFLWT logic is used to model a time         │
│           │                                                  │ dependent flow boundary in the coupling surface.  │
│           │                                                  │ The flow boundary acts on the open area of the    │
│           │                                                  │ coupling surface. The open area is equal to the   │
│           │                                                  │ area of the (sub) surface multiplied by COEFFV. A │
│           │                                                  │ hole can be modeled when COEFFV is set to 1.0. A  │
│           │                                                  │ closed area results for COEFFV = 0.0. The         │
│           │                                                  │ characteristics of the flow are defined on a      │
│           │                                                  │ PORFLWT entry, with ID as defined on the          │
│           │                                                  │ PORTYPID.                                         │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PORHOLE                                          │ The PORHOLE logic can be used to model small      │
│           │                                                  │ holes in an air bag. A BSURF defines the hole.    │
│           │                                                  │ The open area of the hole is equal to the area of │
│           │                                                  │ the (sub) surface multiplied by COEFFV. A value   │
│           │                                                  │ of COEFFV = 1.0 will open up the complete area of │
│           │                                                  │ the hole, while a value of COEFFV = 0.0 will      │
│           │                                                  │ result in a closed hole. The characteristics for  │
│           │                                                  │ the flow are defined on a PORHOLE entry, with ID  │
│           │                                                  │ as defined on the PORTYPID.                       │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PERMEAB                                          │ The PERMEAB logic is used to model permeable air- │
│           │                                                  │ bag material. The permeable area can be defined   │
│           │                                                  │ for a BSURF or for the entire coupling surface.   │
│           │                                                  │ The velocity of the gas flow through the (sub)    │
│           │                                                  │ surface is defined as a linear or tabular         │
│           │                                                  │ function of the pressure difference between the   │
│           │                                                  │ gas inside the air bag and the environmental      │
│           │                                                  │ pressure. The function is specified on a PERMEAB  │
│           │                                                  │ entry, with ID as defined on the PORYPID. The     │
│           │                                                  │ area actually used for outflow is the subsurface  │
│           │                                                  │ area multiplied by the value of COEFFV            │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PORFGBG                                          │ The PORFGBG logic can be used to model gas flow   │
│           │                                                  │ through a hole in the coupling surface connected  │
│           │                                                  │ to a GBAG. A BSURF defines the hole. The open     │
│           │                                                  │ area of the hole is equal to the area of the      │
│           │                                                  │ surface multiplied by COEFFV. A value of COEFFV = │
│           │                                                  │ 1.0 will open up the complete area of the hole,   │
│           │                                                  │ while a value of COEFFV = 0.0 will result in a    │
│           │                                                  │ closed hole. The characteristics for the flow are │
│           │                                                  │ defined on a PORFGBG entry, with ID as defined on │
│           │                                                  │ the PORTYPID.                                     │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PERMGBG                                          │ The PERMGBG logic is used to model gas flow       │
│           │                                                  │ through a permeable area in the coupling surface  │
│           │                                                  │ connected to a GBAG. The permeable area can be    │
│           │                                                  │ defined for a BSURF or for the entire coupling    │
│           │                                                  │ surface. The velocity of the gas flow through the │
│           │                                                  │ (sub) surface is defined as a linear or tabular   │
│           │                                                  │ function of the pressure difference. This         │
│           │                                                  │ function is specified on a PERMGBG entry, with ID │
│           │                                                  │ as defined on the PORYPID. The area actually used │
│           │                                                  │ for outflow is the subsurface area multiplied by  │
│           │                                                  │ the value of COEFFV.                              │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PORFCPL                                          │ The PORFCPL logic can be used to model gas flow   │
│           │                                                  │ through a hole in the coupling surface connected  │
│           │                                                  │ to another coupling surface. A BSURF defines the  │
│           │                                                  │ hole. The open area of the hole is equal to the   │
│           │                                                  │ area of the (sub) surface multiplied by COEFFV. A │
│           │                                                  │ value of COEFFV = 1.0 will open up the complete   │
│           │                                                  │ area of the hole, while a value of COEFFV = 0.0   │
│           │                                                  │ will result in a closed hole. The characteristics │
│           │                                                  │ for the flow are defined on a PORFCPL entry, with │
│           │                                                  │ ID as defined on the PORTYPID.                    │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ PORHYDS                                          │ Prescribes a hydrostatic pressure profile.        │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PORTYPID  │ Porosity ID. References existing PORTYPE entry.  │                                                   │
│           │ (Integer > 0; Required)                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COEFF     │ Method of defining the porosity coefficient.     │                                                   │
│           │ (Character; CONSTANT)                            │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CONSTANT                                         │ The porosity coefficient is constant and          │
│           │                                                  │ specified on COEFFV.                              │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ TABLE                                            │ The porosity coefficient varies with time. COEFV  │
│           │                                                  │ is the number of a TABLED1 entry giving the       │
│           │                                                  │ variation with time.                              │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ COEFFV    │ The porosity coefficient or the number of a      │                                                   │
│           │ TABLED1 entry depending on the COEFF entry. (0.0 │                                                   │
│           │ < Real < 1.0 or Integer < 0, 1.0)                │                                                   │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The combination of multiple LEAKAGEs with different PORTYPEs is allowed.
2. It allows for setting up the exact same model for either a uniform pressure model (GBAG to LEAKAGE) or an Eulerian model (COUPLE to LEAKAGE). It is then possible to set up the model using the switch from full gas dynamics to uniform pressure (GBAGCOU).

The options PORFGBG and PERMGBG can be used to model air bags with multiple compartments.
