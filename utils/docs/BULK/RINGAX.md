## [RINGAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RINGAX.xhtml) - Conical Shell Ring

Defines a ring for conical shell problems.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RINGAX  ID              R       Z                       PS                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RINGAX  3               2.0     -10.0                   162                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Ring identification number.  See Remark 6. (Integer > 0)                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ R         │ Ring radius.  (Real > 0.0)                                                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Z         │ Ring axial location.  (Real)                                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PS        │ Permanent single-point constraints.  (Any unique combination of the Integers 1 through 6 with no │
│           │ embedded blanks.)                                                                                │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. RINGAX is allowed only if an AXIC entry is also present.
2. The number of degrees-of-freedom defined is  ![bulkqrs07458.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07458.jpg?_LANG=enus)  where  H  is the harmonic count and NPS is the number of digits in field 8. (See  ).
3. RINGAX identification numbers must be unique with respect to all other POINTAX, RINGAX, and SECTAX identification numbers.
4. For a discussion of the conical shell problem, see    in the  MSC Nastran Reference Guide.
5. Constraints may be necessary to avoid matrix singularities.  The CONEAX element has no stiffness for rotation about the normal.  In addition, there is   no stiffness for rotation about V (see  ) when transverse shear flexibility is not included.

     ![bulkqrs07460.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07460.jpg?_LANG=enus)
     
     Figure 0-98 RINGAX Coordinate System

6. In order to reference this entry on a SET Case Control command, the ID must be modified by  ![bulkqrs07462.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07462.jpg?_LANG=enus)  where n is the harmonic number plus one and ID(n) is the value specified on the SET entry.
