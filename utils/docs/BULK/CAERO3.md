## [CAERO3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAERO3.xhtml) - Aerodynamic Panel Element Configuration

Defines the aerodynamic edges of a Mach Box lifting surface.  If no cranks are present, this entry defines the aerodynamic Mach Box lifting surface.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO3  EID     PID     CP      LISTW   LISTC1  LISTC2                  +       
+       X1      Y1      Z1      X12     X4      Y4      Z4      X43             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO3  2000    2001    0       22      33                              +       
+       1.0     0.0     0.0     100.    17.     130.    0.      100.            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PAERO3 entry.  (Integer > 0)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Coordinate system for locating points 1 and 4.  (Integer > 0; Default = 0)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LISTW     │ Identification number of an AEFACT entry that lists (x,y) pairs for structural interpolation of    │
│           │ the wing.  (Integer > 0)                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Identification number of AEFACT entries that list (x,y) pairs for control surfaces, if they exist. │
│           │  (Integer > 0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Location of points 1 and 4 in coordinate system CP.  (Real)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X12, X43  │ Edge chord lengths in the aerodynamic coordinate system.  (Real > 0, )                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. EID must be unique with respect to all other element identification numbers.
2. The (x,y) pairs on LISTW, LISTC1 and LISTC2 AEFACT entries are in the aero element coordinate system (see  ).  The (x,y) pairs define a set of aerodynamic grid points that are independent of Mach number and are selected by the user to be representative of the planform and motions of interest.  The (x,y) pairs must be sufficient in number and distribution such that:  the surface spline provides an accurate interpolation between them and the Mach Box centers that are variously located on the planform as a function of Mach number (a complete description of the Mach Box Method is given in the  MSC Nastran Aeroelastic Analysis User’s Guide ).
3. The (x,y) pairs are numbered sequentially, beginning with EID for LISTW, then LISTC1, and finally for LISTC2.  On SPLINEi entries, the box numbers (BOX1 and BOX2 on SPLINE1, ID1 and ID2 on SPLINE2, and UKID on SPLINE3) refer to the (x,y) pair sequence number appropriate for the surface (primary, or first or second control) being splined.
4. If cranks and/or control surfaces exist, their locations are given on the PAERO3 entry.
5. The numbering system and coordinate system are shown below:

![bulkc102312.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102312.jpg?_LANG=enus)

Figure 9-6 CAERO3 Element Configuration

```text
┌──────────┬─────────────────────────┬────┐
│ Planform │ Control                 │    │
│ Corners  │                         │    │
├──────────┼─────────────────────────┼────┤
│ 1        │ Leading edge, inboard   │ 7  │
├──────────┼─────────────────────────┼────┤
│ 2        │ Trailing edge, inboard  │ 8  │
├──────────┼─────────────────────────┼────┤
│ 3        │ Trailing edge, outboard │ 9  │
├──────────┼─────────────────────────┼────┤
│ 4        │ Leading edge, outboard  │ 10 │
├──────────┼─────────────────────────┼────┤
│ Cranks   │ Control (if two)        │    │
├──────────┼─────────────────────────┼────┤
│ 5        │ Leading edge            │ 9  │
├──────────┼─────────────────────────┼────┤
│ 6        │ Trailing edge           │ 10 │
├──────────┼─────────────────────────┼────┤
│          │                         │ 11 │
├──────────┼─────────────────────────┼────┤
│          │                         │ 12 │
└──────────┴─────────────────────────┴────┘
```

6. The CAERO3 entry is only supported in SOL 145, SOL 200 with ANALYSIS=FLUT and in SOL 146 with mechanical loads. Gust response in SOL 146 is not supported for the CAERO3.
