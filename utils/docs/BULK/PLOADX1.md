## [PLOADX1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLOADX1.xhtml) - Pressure Load on Axisymmetric Element

Defines surface traction to be used with CAXISYM, CQUADX, CTRIAX, and CTRIAX6 axisymmetric elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOADX1 SID     EID     PA      PB      GA      GB      THETA                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOADX1 200     35      3.5     10.5    10      30      20.                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. (Integer > 0)                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (Integer > 0)                                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PA        │ Surface traction at grid point GA. (Real)                                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PB        │ Surface traction at grid point GB. (Real; Default = PA)                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB    │ Corner grid points. GA and GB are any two adjacent corner grid points of the element.       │
│           │ (Integer > 0)                                                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA     │ Angle between surface traction and inward normal to the line segment. (Real; Default = 0.0) │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

2. PLOADX1 is intended only for the CAXISYM, CQUADX, CTRIAX, and CTRIAX6 elements.
3. The surface traction is assumed to vary linearly along the element side between GA and GB.
4. The surface traction is input as force per unit area.  MSC Nastran converts this traction into equivalent nodal loads by integration over the surface.  For AXISYM and hyperelastic QUADX and TRIAX elements this integration is over one radian.  For TRIAX6 and axisymmetric harmonic QUADX and TRIAX elements this integration is over two pi radians.
5. THETA is measured counter-clockwise from the inward normal of the straight line between GA and GB, to the vector of the applied load, as shown in  ,  , and  . Positive pressure is in the direction of inward normal to the line segment.

     For the axisymmetric shell element (CAXISYM), the inward normal is established from the cross product  ![bulkp07174.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07174.jpg?_LANG=enus) , where  ![bulkp07176.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07176.jpg?_LANG=enus)  is the unit out-of-plane vector and  ![bulkp07178.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07178.jpg?_LANG=enus)  is the in-plane line segment from GA to GB (see  Figure 0-93 ).

     ![bulkp07180.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07180.jpg?_LANG=enus)
     
     Figure 0-91 Pressure Load on CTRIAX6 or CTRIAX Element
     
     ![bulkp07182.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07182.jpg?_LANG=enus)
     
     Figure 0-92 Pressure Load on CQUADX Element
     
     ![bulkp07184.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07184.jpg?_LANG=enus)
     
     Figure 0-93 Pressure Load on CAXISYM Element

6. Axisymmetric harmonic elements may have Harmonic "N" greater than zero.  For this case the "PA" and "PB" fields of the PLOADX1 entry are coefficients of COS(N*theta).  The PLOADX1 cannot supply azimuthal tractions on axisymmetric harmonic elements.
