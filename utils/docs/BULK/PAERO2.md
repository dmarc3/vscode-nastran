## [PAERO2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAERO2.xhtml) - Aerodynamic Body Properties

Defines the cross-sectional properties of aerodynamic bodies.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO2  PID     ORIENT  WIDTH   AR      LRSB    LRIB    LTH1    LTH2            
        THI1    THN1    THI2    THN2    THI3    THN3                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO2  2       Z       6.0     1.0     22      91      100                     
        1       3                                                               
```
```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number. (Integer > 0)                                                      │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ORIENT     │ Orientation flag. Type of motion allowed for bodies. Refers to the aerodynamic coordinate system   │
│            │ of ACSID. See AERO entry. (Character =  “Z”, “Y”, or “ZY”)                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WIDTH      │ Reference half-width of body and the half-width of the constant width interference tube. (Real >   │
│            │ 0.0)                                                                                               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AR         │ Aspect ratio of the interference tube (height/width). (Real > 0.0)                                 │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LRSB       │ Identification number of an AEFACT entry containing a list of slender body half-widths at the end  │
│            │ points of the slender body elements. If blank or zero, the value of WIDTH will be used. (Integer > │
│            │ 0 or blank)                                                                                        │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LRIB       │ Identification number of an AEFACT entry containing a list of interference body half-widths at the │
│            │ end points of the interference elements. If blank or zero, the value of WIDTH will be used.        │
│            │ (Integer > 0 or blank)                                                                             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LTH1, LTH2 │ Identification number of AEFACT entries for defining θ arrays for interference calculations.       │
│            │ (Integer > 0)                                                                                      │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THIi, THNi │ The first and last interference element of a body to use the array; the others use the  array.     │
│            │ (Integer > 0)                                                                                      │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The half-widths (given on AEFACT entries referenced in fields 6 and 7) are specified at division points. The number of entries on an AEFACT entry used to specify half-widths must be one greater than the number of elements.

2. The half-width at the first point (i.e., the nose) on a slender body is usually 0.0;   thus, it is recommended (but not required) that the LRSB data is supplied with a zero first value.

3. THIi and THNi are interference element numbers on a body. The first element is one for each body.

4. A body is represented by a slender body surrounded by an interference tube. The slender body creates the downwash due to the motion of the body, while the interference tube represents the effects upon panels and other bodies.

![bulkp06314.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06314.jpg?_LANG=enus)

Figure 0-67 Idealization of Aerodynamic Body

5. The angles  ![bulkp06316.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06316.jpg?_LANG=enus)  and  ![bulkp06318.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06318.jpg?_LANG=enus)  are input in degrees using the aerodynamic element coordinate system as the reference coordinate system for defining the theta points.

6. Distribution of the theta points need not be uniform. A theta point must be placed a finite distance from any aerodynamic box edge; preferably the box edge would be equidistant from any two theta points. This aerodynamic coordinate system is defined on the AERO Bulk Data entry.

7. For half models, the theta arrays LTH1 and LTH2 should encompass a full 360 degree range.

