## [FLUTTER](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FLUTTER.xhtml) - Aerodynamic Flutter Data

Defines data needed to perform flutter analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLUTTER SID     METHOD  DENS    MACH    RFREQ   IMETH   NVALUE/ EPS     +       
+                                                       OMAX                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLUTTER 19      K       119     219     319     S       5       1.-4            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ Flutter analysis method.  (Character: “K” for K method, “PK” for PK method, “PKNL” for PK method   │
│           │ with no looping, “PKS” for PK sweep method, “PKNLS” for PK sweep method with no looping, “KE” for  │
│           │ the K method restricted for efficiency.) See Remark 9.                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DENS      │ Identification number of an FLFACT entry specifying density ratios to be used in flutter analysis. │
│           │ (Integer > 0)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MACH      │ Identification number of an FLFACT entry specifying Mach numbers  to be used in flutter analysis.  │
│           │ (Integer > 0)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RFREQ (or │ Identification number of an FLFACT entry specifying reduced frequencies  to be used in flutter     │
│ VEL)      │ analysis; for the “PKx” methods, the velocities FLFACT entry is specified in this field.           │
│           │  (Integer > 0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IMETH     │ Choice of interpolation method for aerodynamic matrix interpolation. See Remark 6. (Character:     │
│           │  “L” = linear, “S” = surface; “TCUB” = termwise cubic; Default = “L”.)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NVALUE    │ Number of eigenvalues beginning with the first eigenvalue for output and plots. (Integer > 0;      │
│           │ Default is the number of modal degrees-of-freedom (uh).)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OMAX      │ For the PKS and PKNLS methods, OMAX specifies the maximum frequency, in Hz., to be used in he      │
│           │ flutter sweep. (Real > 0.0; Default = maximum normal mode eigenfrequency)                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPS       │ Convergence parameter for k. Used in the PK and PKNL methods only. See Remark 4. (Real > 0.0;      │
│           │ Default = .) See Remark 9. for the meaning of EPS when the PKS or PKNLS methods are being used.    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The FLUTTER entry must be selected with the Case Control command FMETHOD = SID.
2. The density is given by  ![bulkfgil03682.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03682.jpg?_LANG=enus) , where RHOREF is the reference value specified on the AERO entry and DENS is the density ratio specified on the FLFACT entry.
3. The reduced frequency is given by  ![bulkfgil03684.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03684.jpg?_LANG=enus) , where REFC is given on the AERO entry,  ![bulkfgil03686.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03686.jpg?_LANG=enus)  is the circular frequency, and  V  is the velocity.  If  ![bulkfgil03688.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03688.jpg?_LANG=enus) , as specified on the FLFACT entry, then only the K method may be specified and the Inverse Power method of eigenvalue extraction (INV on the EIGC entry) must be used.  Aeroelastic divergence analysis is more appropriately performed using one of the “PKx” methods.
4. For the PK and PKNL methods, an eigenvalue is accepted when:

![bulkfgil03690.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03690.jpg?_LANG=enus)              for  ![bulkfgil03692.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03692.jpg?_LANG=enus)

![bulkfgil03694.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03694.jpg?_LANG=enus)     for  ![bulkfgil03696.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03696.jpg?_LANG=enus)

5. When one of the “PKx” methods is selected, physical displacements will only be generated for the velocities on the FLFACT that are specified as negative values of the requested velocity.  Also, structural damping as specified on the GE field of MATi entries is ignored.
6. If IMETH = “L”, a linear interpolation is performed on reduced frequencies at the Mach numbers specified on the FLFACT entry using the MKAEROi entry Mach number that is closest to the FLFACT entry Mach number.  For IMETH = “S”, a surface interpolation is performed across Mach numbers and reduced frequencies.  For IMETH = “TCUB” a termwise cubic interpolation on reduced frequency is used. IMETH = “S” is only available for the “K” and “KE” flutter methods. IMETH = “TCUB” is only available for the “PKx” methods. For the “PKx” methods, IMETH = “S” or “L” or blank provides linear interpolation while “TCUB” provides a termwise cubic interpolation.
7. For the “K”, “KE”, “PK”, and “PKS” methods, all combinations of the FLFACT entry are analyzed.  For the “PKNL” and “PKNLS” methods, only ordered pairs are analyzed; i.e.,  ![bulkfgil03698.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03698.jpg?_LANG=enus) .  For the PKNL and PKNLS methods, equal number of densities, Mach numbers and velocities must be specified.
8. “K” and “KE” methods are not supported for design sensitivity and optimization.
9. The PKS and PKNLS methods determine flutter eigenvalues by performing a sweep of equally spaced reduced frequencies ranging from  ![bulkfgil03700.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03700.jpg?_LANG=enus)  through  ![bulkfgil03702.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03702.jpg?_LANG=enus) . The number of intervals is calculated using NINT = INT(1.0/EPS).
10. 
     - The PK method uses only real matrix terms for computing the flutter solution. This means any imaginary terms in any of the matrices, M, B, or K are ignored with the PK method and the imaginary part of the aerodynamic matrix is added as a real matrix to the viscous damping matrix B.
     - For the KE method, the B matrix is ignored while complex stiffness forms of structural damping are supported. Modal viscous damping (TABDMP1 input) will be included when the KDAMP parameter is set to -1.
     - The K method supports all forms of damping.
11. METHOD=K requires a CMETHOD in Case Control pointing to an EIGC Bulk Data entry. It is recommended that the number of roots requested on the EIGC entry be twice the number of normal modes used in the modal flutter analysis.
