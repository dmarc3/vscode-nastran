## [RCONN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RCONN.xhtml) - Rigid Connection

Defines a rigid connection between the different parts of Lagrangian meshes (tied surfaces). Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RCONN   CID     STYPE   MTYPE   SID     MID     OPTION                  +       
+                                                                       +       
+       CLSGAP  GAPDIS  GAPDISV                                                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RCONN   7       GRID    SURF    3       7       NORMAL                          
```

        See link for table.

#### Remarks

1. The RCONN entry can be used to define three types of connection :
     - Two Surfaces Tied Together.
     - Define secondary and primary segments representing the two surfaces to be tied together. There should not be a gap between the two sets of segments. The two surfaces are tied together during the analysis.
     - Grid Points Tied to a Surface.
     - If STYPE is set to GRID and OPTION is set to NORMAL, the secondary entities comprise discrete grid points that are tied to the primary surface during the analysis. The grid points must lie on the surface.
     - Shell Edge Tied to a Shell Surface.
     - If STYPE is set to GRID and OPTION is set to SHELL, the edges of shell or beams elements can be tied to the faces of other shells. The grid points attached to the edge of the shells/beams must be selected as the secondary grid points. The shell surface to which they are tied must be selected as the primary surface. The two sets will then be tied together throughout the analysis. All degrees of freedom will be coupled.
2. The CLSGAP entry enables you to define two different meshes that are not coincident over the primary/secondary interface. If the option is set to YES, the secondary surface becomes coincident (according to projections) with the primary surface.
3. The search method of the contact algorithm is used to find the closest primary face. The tolerance defined with the GAPDIS/GAPDISV fields is similar to the monitoring distance defined on the CONTACT entry with the MONDIS/ MONDISV fields.
4. The use of the gap closing CLSGAP can cause an element to collapse. This may happen if the GAPDISV tolerance is set to a value greater than the length of the side of an element.
5. When a solid and a shell mesh are tied together, the rotational degrees of freedom of the shell grid points are not coupled.
6. When OPTION=SHELL and CLSGAP=NO, the time step scale factor will be set to 0.4. This can be overwritten by:

     ```nastran
     PARAM*, STEPFCTRCONN, xxx
     ```
