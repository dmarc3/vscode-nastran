## [RADBC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RADBC.xhtml) - Space Radiation Specification

Specifies an CHBDYi element face for application of radiation boundary conditions.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADBC   NODAMB  FAMB    CNTRLND EID1    EID2    EID3    EID4    EID5    +       
+       EID6    EID7    -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADBC   5       1.0     101     10                                              
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ NODAMB    │ Ambient point for radiation exchange.  (Integer > 0)                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FAMB      │ Radiation view factor between the face and the ambient point.  (Real > 0.0)                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CNTRLND   │ Control point for radiation boundary condition.  (Integer > 0; Default = 0)                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ CHBDYi element identification number. (Integer > 0) Key words "THRU" and "BY" can be used to │
│           │ assist the listing with ascending order of EIDi                                              │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The basic exchange relationship is:

     - if CNTRLND = 0, then  ![bulkqrs07346.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07346.jpg?_LANG=enus)

     - if CNTRLND > 0, then

     ![bulkqrs07348.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07348.jpg?_LANG=enus)  

2. NODAMB is treated as a black body with its own ambient temperature for radiation exchange between the surface element and space.  No surface element that is a member of a radiation enclosure cavity may also have a radiation boundary condition applied to it.
3. Two PARAM entries are required when stipulating radiation heat transfer:

     - ABS defines the absolute temperature scale;  this value is added internally to any specified temperature given in the problem.  Upon solution completion, this value is subtracted internally from the solution vector.

     - SIGMA ( ![bulkqrs07350.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07350.jpg?_LANG=enus) ) is the Stefan-Boltzmann constant.

4. RADBC allows for surface radiation to space in the absence of any cavity behavior.  The emissivity is supplied from a RADM entry.
5. When using “THRU” or “BY”, all intermediate referenced CHBDYi surface elements must exist.
