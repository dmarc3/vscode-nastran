## [FLOWC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FLOWC.xhtml) - Cyclic Flow Boundary Condition

Defines the properties of a material for the boundaries of a Eulerian mesh.

Inflow values can be taken from another boundary condition. This allows cyclic or periodic boundary

conditions. Likewise, the outflow of material goes into the other boundary condition.

FLOWC entries have to be defined in pairs. The  FID  on one entry has to be equal to  FID2  of the other

entry. For example

FLOWC,10,30,20

FLOWC,20,40,10

For FLOWC boundaries, mass flow summaries can be created as time history. Used in SOL700 only

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOWC   FID     BCID    TYPE    MESH    DIR     FID2                    +       
+       XMIN    XMAX    YMIN    YMAX    ZMIN    ZMAX                    +       
+       METHOD  TID                                                             
                                                                                
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOWC   1       122     2                                                       
+                                                                               
+       2       1                                                               
                                                                                
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FID     Uniqu...
BCID    Numbe...
TYPE    Flow boundary types. See Remarks 2.and 3. (Character; Required)
        IN: Only inflow is allowed. The inflow velocity and pressure can be optionally specified. If not given, the values in the adjacent Euler element will be used. The same holds for the density and sie.
        OUT: Only outflow is allowed. The inflow velocity and pressure can be optionally specified. If not given, the values in the adjacent Euler element will be used. The outflow boundary will always use material mixture as present in the adjacent Euler element.
        BOTH: Material is allowed to flow in or out. In or outflow is based on the direction of the velocity in the adjacent Euler element. Only pressure can be optionally defined. If not given the pressure in the adjacent Euler element will be taken.
MESH    Denot...
DIR     Allow...
FID2    Refer...
XMIN-...Defin...
METHOD  Method describing how material properties and pressure are mapped going from one boundary to the other. (Integer > 0; Default=1)
        1.Map both velocity, material flow properties, and pressure loads one-to-one.
        2.Map velocity, material flow one-to-one. Pressure is given by element pressures.
        3.Inflow is taken as the average of outflow properties. This applies to both velocity and material properties. Pressure is given by element pressures.
TID     TABLE...
```
#### Remarks:

1. LID must be referenced by a TLOAD1 entry.

2. TLOAD entries referencing FLOW entries must have the TID field blank or zero.

3. BCID is optional. If used, all other inputs are ignored. If not used, the flow boundary can be defined by either using DIR or by using XMIN, XMAX, YMIN, etc.

4. The MESH-ID is only used when multiple Euler domains have been defined and when BCID is blank. If multiple Euler domains have been defined but if the MESH-ID is blank all Euler domains will be considered in assigning the boundary condition.

5. DIR is optional. It will only be used when BCID is blank. When DIR is used XMIN, XMAX, YMIN etc. are ignored.

6. XMIN, XMAX, YMIN, etc. are only used when both BCID and DIR are blank. If neither the MIN nor MAX value has been set the default value is respectively -1E+20 and 1E+20 for the MIN and MAX value. If the MIN value has been set the default value of the MAX value is the Min value.

7. FLOWC can be used to specify flow boundaries for CHEXA's and also for Euler element created by the MESH,BOX option.

8. FLOWC is only supported by the multi-material Euler solver.

9. To enable using the outflow values of FID2 as the inflow values for FID, the boundary faces of FID and FID2 are mapped onto each other. For this mapping, only translations and rotations around coordinate axes are permitted.

10. Consider a cubic Euler mesh and that material flows from the left to the right. At the right side, the boundary condition is imposed

     FLOWC,4,30,,5

     and at the left side

     FLOWC,5,40,,4

     These definitions cause all material that flows out of the right side boundary into the left side boundary. Moreover, the Euler element pressures on the right side are put on the Euler elements of the left boundary condition.

     In practice, it may be useful to skip the coupling between the two boundaries with regard to pressure. This can be done by setting METHOD equal to 2.

     With these definitions, material from boundary 4 still flows into boundary 5 but pressure boundaries are transmitting.

11. TID is useful if several objects have identical outflow that is used as inflow by another object. Then only one object has to be modeled. To account for the other objects when defining inflow, the scale factor can be used. It can also be used to turn off in and outflow. When TID is set, either METHOD=2 or METHOD=3 are recommended and METHOD=1 should not be used.

12. It is allowed that the definition of the FLOWC entry overlaps with FLOW definitions. In that case, the FLOWC definition overrules the other ones

