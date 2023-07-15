## [CSHEAR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSHEAR.xhtml) - Shear Panel Element Connection

Defines a shear panel element and effective extensional stiffener rods.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSHEAR  EID     PID     G1      G2      G3      G4                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSHEAR  3       6       1       5       3       7                               
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number.  (0 < Integer < 100,000,000)                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PSHEAR entry.  (Integer > 0; Default = EID) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers of connection points.  (Integer > 0; )        │
└───────────┴─────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.

2. Grid points G1 through G4 must be ordered consecutively around the perimeter of the element.

3. All interior angles must be less than 180 ° .

![bulkc202998.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202998.jpg?_LANG=enus)

Figure 0-29 CSHEAR Element Connection and Coordinate System

![bulkc203000.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203000.jpg?_LANG=enus)

Figure 0-30 CSHEAR Element Corner Forces and Shear Flows

4. The parameter entry MDLPRM,SHEARP,GARVEY(default) selects the standard Garvey shear panel. MDLPRM,SHEARP,HARDER selects the Harder shear panel: The Harder panel is based on the following:
Consider the following quadrilateral shear panel.

![cshear3.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/cshear3.png?_LANG=enus)

The shear stress  ![bulkc203002.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203002.jpg?_LANG=enus)  is related to the shear strain by the relationship  ![bulkc203004.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203004.jpg?_LANG=enus)  where G is the shear modulus.

Determining the value for shear for the general quadrilateral shown is a heuristic process. For the Harder element it is determined in the following manner. The strain along a diagonal such as L13 is found from the expression (or Mohr's circle):

![bulkc203006.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203006.jpg?_LANG=enus)  

With a similar expression for  ![bulkc203008.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203008.jpg?_LANG=enus) , where  ![bulkc203010.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203010.jpg?_LANG=enus) . For shear panels, the direct strains are negligible compared to the shear strain. For a rectangular shear panel  ![bulkc203012.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203012.jpg?_LANG=enus)  and we have  ![bulkc203014.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203014.jpg?_LANG=enus)  or  ![bulkc203016.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203016.jpg?_LANG=enus) .

In the above, the subscripts have been dropped from the term for shear strain. The Harder shear panel uses this definition for the measure of shear strain in the general quadrilateral. For a rectangular panel it is exact. For a reasonable panel it is within an error of < 1 degree. To insure reasonableness, all the geometry checks required by the Garvey element are still performed.

#### Stress Recovery:

The output for either the Garvey or the Harder panel is the same with the following exception:

```text
┌──────────────┬───────────────┐
│ MAX SHEAR    │ AVG SHEAR     │
├──────────────┼───────────────┤
│ MAX()        │               │
├──────────────┼───────────────┤
│ MAX()        │ (q-Equiv) / t │
├──────────────┼───────────────┤
│ For both     │               │
│ Garvey and   │               │
│ Harder       │               │
│ panels,      │               │
│ q-Equiv is   │               │
│ the shear    │               │
│ flow on      │               │
│ which all    │               │
│ stress       │               │
│ calculations │               │
│ are based.   │               │
└──────────────┴───────────────┘
```
