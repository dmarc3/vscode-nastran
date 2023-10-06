## [CRAC3D](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CRAC3D.xhtml) - Three-Dimensional Crack Tip Element

Defines a three-dimensional crack tip element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CRAC3D  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10     G11     G12     G13     G14     +       
+       G15     G16     G17     G18     G19     G20     G21     G22     +       
+       G23     G24     G25     G26     G27     G28     G29     G30     +       
+       G31     G32     G33     G34     G35     G36     G37     G38     +       
+       G39     G40     G41     G42     G43     G44     G45     G46     +       
+       G47     G48     G49     G50     G51     G52     G53     G54     +       
+       G55     G56     G57     G58     G59     G60     G61     G62     +       
+       G63     G64                                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CRAC3D  113     101     2       5       7       8       4       10      +       
+       11      14      15      17              3       6       9       +       
+       12              16              102     105     107     108     +       
+       104     110     111     114     115     117             103     +       
+       106     109     112             116             202     205     +       
+       207     208     204     210     211     214     215     217     +       
+       225     226                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number.  (0 < Integer < 100,000,000)            │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PRAC3D entry.  (Integer < 0)       │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers of connection points.  (Integer > 0) │
└───────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. CRAC3D is a dummy element and requires the presence of this Bulk Data entry:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ADUM9   64      0       6       0       CRAC3D                                  
```

2. Element identification numbers should be unique with respect to all other element identification numbers.
3. This element, including grid point numbering conventions, is shown in   and  .  Grid points G1 through G10, and G19 through G28 are required; midside and surface grid points G11 through G18, G29 through G36, and G37 through G64 are optional.  Either all or none of grid points G37 through G46 should be present.  A fatal error message will be issued for partial connectivity.
4. The ratio of the element dimensions in the y to x axis shown for the element coordinate system in   should be in the range 2.0 to 0.5.
5. For the symmetric half-crack option Grid Points G1 through G7, and G19 through G25 are required, whereas grid points G11 through G14, G29 through G32, and G37 through G42 are optional.  Grid points G8 through G10, G15 through G18, G26 through G28, G33 through G36, G43 through G46, G51 through G55, and G60 through G64 should not be specified to invoke this option.
6. It is recommended that both the faces (formed by grid points G2 through G18 and grid points G20 through G36) and the midplane (formed by grid points G37 through G46 and grid points G37 through G46) be planar.  It is also recommended that midside grid points G37 through G46 be located within the middle third of the edges.
7. The midside nodes on both the faces should be defined in pairs.  For example, if grid point G11 is not defined, then grid point G29 should not be defined and vice versa.
8. The stresses and stress intensity factors are calculated with the assumptions that grid points G2 and G10, G20 and G28, and G38 and G46 are coincident.  Deviation from this condition will produce erroneous results.
9. The stress output is interpreted as shown in  Crack Tip Elements (CRAC2D, CRAC3D)  in the  MSC Nastran Reference Guide .
10. As depicted in   and  , the element is a right-handed element. Thus define the vectors  ![bulkc202846.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202846.jpg?_LANG=enus)  and  ![bulkc202848.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202848.jpg?_LANG=enus) , then the cross-product  ![bulkc202850.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202850.jpg?_LANG=enus)  points to the face defined by G19, G20, ...

![bulkc202852.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202852.jpg?_LANG=enus)

Figure 0-20 CRAC3D Solid Crack Tip Element with Required Connection Points Only

![bulkc202854.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202854.jpg?_LANG=enus)

Figure 0-21 CRAC3D Solid Crack Tip Element with All Connection Points

