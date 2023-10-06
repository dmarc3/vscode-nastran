## [GBAG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GBAG.xhtml) - Gas-Bag Pressure Definition

Defines the pressure within an enclosed volume. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GBAG    GID     BSID    TRIGGER TRIGGERVPORID   INFID   HTRID   INTID   +       
+                                                                       +       
+                                                                       +       
+       CPGAS   GPGASV  RGAS    PENV            REVERSE CHECK   PINIT   +       
+       TINIT   TENV                                                            
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GBAG    101     37                      11      12                      +       
+                                                                       +       
+                                                                       +       
+       CONSTANT1000.   297.0   101325.         ON      ON              +       
+       293.0                                                                   
```

```text
┌───────────┬──────────────────────────────────┬─────────────┐
│ Describer │ Meaning                          │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ GID       │ Unique gas-bag number.           │ I > 0       │
├───────────┼──────────────────────────────────┼─────────────┤
│ BSID      │ Identification number of a       │ I > 0       │
│           │ BSURF, BCBOX, BCPROP, BCMATL, or │             │
│           │ BCSEG entry defining the surface │             │
│           │ of the gas-bag.                  │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ TRIGGER   │ The time-dependent parameters    │ Character   │
│           │ are offset in time. TIME   The   │             │
│           │ offset is defined at TRIGGERV.   │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ TRIGGERV  │ The value of the offset in time. │ Real        │
├───────────┼──────────────────────────────────┼─────────────┤
│ PORID     │ Number of a set of LEAKAGE       │ Integer > 0 │
│           │ entries, that defines the        │             │
│           │ porosity (permeability) and      │             │
│           │ holes for the gas-bag surface    │             │
│           │ and/or subsurfaces.              │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ INFID     │ Number of a set of ABINFL        │ Integer > 0 │
│           │ entries, that defines the one or │             │
│           │ more inflators on subsurface(s)  │             │
│           │ of the GBAG surface.             │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ HTRID     │ Number of a set of HEATLOS       │ I > 0       │
│           │ entries, that defines the heat   │             │
│           │ transfer definitions for the     │             │
│           │ gas-bag surface and/or           │             │
│           │ subsurfaces.                     │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ INTID     │ ID of an INITGAS entry           │ I > 0       │
│           │ specifying the initial gas       │             │
│           │ composition for this GBAG.       │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ CPGAS     │ The variation of the specific    │ Character   │
│           │ heat constant at constant        │             │
│           │ pressure. CONSTANT  The specific │             │
│           │ heat is constant and specified   │             │
│           │ in CPGASV.                       │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ CPGASV    │ The specific heat of the gas.    │ Real        │
├───────────┼──────────────────────────────────┼─────────────┤
│ RGAS      │ Gas constant of the inflowing    │ Real        │
│           │ gas.                             │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ PENV      │ Environmental pressure           │ Real        │
│           │ surrounding the gas bag.         │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ REVERSE   │ Normal auto-reverse switch.      │ C           │
│           │ ON  The normals of the surface   │             │
│           │ are automatically reversed if    │             │
│           │ necessary so that they point in  │             │
│           │ the same direction and provide a │             │
│           │ positive volume. OFF  The        │             │
│           │ normals are not automatically    │             │
│           │ reversed.                        │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ CHECK     │ Normal checking switch. ON  The  │ C           │
│           │ normals of the surface are       │             │
│           │ checked to see if they all point │             │
│           │ in the same direction and        │             │
│           │ provide a positive volume.       │             │
│           │ OFF  The normals are not         │             │
│           │ checked. If REVERSE is set to    │             │
│           │ ON, CHECK is automatically set   │             │
│           │ to ON.                           │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ PINIT     │ Initial pressure inside the gas  │ Real        │
│           │ bag.                             │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ TINIT     │ Initial temperature inside the   │ Real        │
│           │ gas bag. See Remark 4.           │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ TENV      │ Environmental Temperature.       │ Real > 0    │
└───────────┴──────────────────────────────────┴─────────────┘
```

#### Remarks:

1. The BSURF entry referenced by the BSID field must form a closed volume.

2. The pressure in the gas bag is applied to all the faces of the outer boundary.

3. TINIT is the temperature of the gas inside the volume at  time =  0. At  time =  0, the mass of the gas inside the gas bag is calculated as

     ![bulkfgil03856.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03856.jpg?_LANG=enus)  

     where,  ![bulkfgil03858.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03858.jpg?_LANG=enus)  the initial pressure,  ![bulkfgil03860.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03860.jpg?_LANG=enus)  the volume,  ![bulkfgil03862.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03862.jpg?_LANG=enus)  the gas constant, and  ![bulkfgil03864.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03864.jpg?_LANG=enus)  the initial gas temperature.

4. The flow through exhaust openings, leakage areas and user-specified outflow rate is accumulated. The volumetric porosity contributes to the outflow of gas as

     ![bulkfgil03866.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03866.jpg?_LANG=enus)  

     where

```text
┌───┬───┬────────────────────────────┐
│ Q │ = │ volumetric flow rate       │
├───┼───┼────────────────────────────┤
│ r │ = │ density inside the bag     │
├───┼───┼────────────────────────────┤
│ p │ = │ pressure inside the bag    │
├───┼───┼────────────────────────────┤
│ R │ = │ gas constant               │
├───┼───┼────────────────────────────┤
│ T │ = │ temperature inside the bag │
├───┼───┼────────────────────────────┤
│   │ = │ mass outflow rate          │
└───┴───┴────────────────────────────┘
```

The value of  Q  can be specified as a constant, as a function of the pressure difference, or as a function of time. Negative values for the volumetric flow rate are not allowed, since this would mean inflow of outside air.

5. A mixture of BSURF, BCBOX, BCPROP, BCMATL or BCSEG with the same BSID is allowed. However multiple BSID of the same type is not allowed. When using this option, special care must be taken to assure the same element is not part of multiple BSID definitions.

