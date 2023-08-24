## [SPLINE7](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPLINE7.xhtml) - Finite Beam Spline

Defines a 6DOF finite beam spline for interpolating motion and/or forces between two meshes.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE7 EID     CAERO   AELIST          SETG    DZ      DTOR    CID     +       
+                               USAGE   METHOD  DZR     IA2     EPSBM           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPLINE7 5       8       12              60                      3       +       
+                               BOTH    FBS6                                    
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique spline identification number. (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CAERO     │ Aero panel (CAEROi entry ID) that is to be interpolated. See Remark 6. (Integer > 0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AELIST    │ Identification of an AELIST entry listing the boxes or aerodynamic grid points to be interpolated  │
│           │ using this spline. See Remark 2. (Integer > 0)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SETG      │ Refers to an SETi entry that lists the structural grid points to which the spline is attached.     │
│           │ (Integer > 0)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DZ        │ Linear attachment flexibility. (Real > 0.0; Default = 0.0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DTOR      │ Ratio of the beam bending stiffness to the beam torsional stiffness. See Remark 3.. (Real > 0.0;   │
│           │ Default = 1.0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ USAGE     │ Spline usage flag to determine whether this spline applies to the force transformation,            │
│           │ displacement transformation or both. FORCE, DISP or BOTH. See Remark 4. (Character, Default =      │
│           │ BOTH)                                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Rectangular coordinate system that defines the y-axis of the spline and the xy- and yz-planes for  │
│           │ bending. Not used for bodies, CAERO2. (Integer > 0)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ Method for the spline fit. Either FBS3 or FBS6. See Remark 5. (Character; Default = FBS6)          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DZR       │ Rotational attachment flexibility. (Real > 0.0; Default = 0.0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IA2       │ Ratio of the beam bending stiffness to the beam extensional stiffness. (Real > 0.0; Default = 1.0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPSBM     │ Ratio of the minimum beam length to the total beam length. See Remark 7. (Real > 0.0; Default =    │
│           │ 0.01)                                                                                              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
