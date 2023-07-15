## [QHBDY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.QHBDY.xhtml) - Boundary Heat Flux Load

Defines a uniform heat flux into a set of grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QHBDY   SID     FLAG    Q0      AF      G1      G2      G3      G4              
        G5      G6      G7      G8                                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
QHBDY   2       AREA4   20.0            101     102     104     103             
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)                                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLAG      │ Type of face involved (must be one of the following:  “POINT”, “LINE”, “REV”, “AREA3”, “AREA4”, │
│           │ “AREA6”, “AREA8”)                                                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Q0        │ Magnitude of thermal flux into face.  Q0 is positive for heat into the surface.  (Real)         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AF        │ Area factor depends on type.  (Real > 0.0 or blank)                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification of connected grid points.  (Integer > 0 or blank)                     │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The continuation entry is optional.

2. For use in steady state analysis, the load set is selected in the Case Control Section (LOAD = SID).

3. In transient analysis, SID is referenced by a TLOADi Bulk Data entry through the EXCITEID specification.  A function of time  ![bulkqrs07298.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07298.jpg?_LANG=enus)  defined on the TLOADi entry multiplies the general load.   ![bulkqrs07300.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07300.jpg?_LANG=enus)  specifies time delay.  The load set identifier on the TLOADi entry must be selected in Case Control (DLOAD = SID) for use in transient analysis.  If multiple types of transient loads exist, they must be combined by the DLOAD Bulk Data entry.

4. The heat flux applied to the area is transformed to loads on the points.  These points need not correspond to an HBDY surface element.

5. The flux is applied to each point i by the equation

![bulkqrs07302.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07302.jpg?_LANG=enus)  

6. The number of connected points for the types are 1 (POINT), 2 (LINE, REV), 3 (AREA3), 4 (AREA4), 4-6 (AREA6), 5-8 (AREA8).

7. The area factor AF is used to determine the effective area for the POINT and LINE types.  It equals the area and effective width, respectively. .  For axisymmetric elements, the magnitude of the area factors should account for an integration over the entire circumference (i.e., 2pi radians). Note that the REV option can be used to apply the heat flux along the edges of axisymmetric elements.  AF is not used for the other types, which have their area defined implicitly and must be left blank.

8. The type of face (FLAG) defines a surface in the same manner as the CHBDYi Bulk Data entry.  For physical descriptions of the geometry involved, see the CHBDYG discussion.

