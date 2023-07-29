## [NOLIN2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NOLIN2.xhtml) - Nonlinear Load as the Product of Two Variables

Defines a forcing function for transient response or nonlinear harmonic response of the form

![bulkno06216.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06216.jpg?_LANG=enus)  or  ![bulkno06218.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06218.jpg?_LANG=enus)

where  t  is time,  f  is frequency and  ![bulkno06220.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06220.jpg?_LANG=enus)  and  ![bulkno06222.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06222.jpg?_LANG=enus)  can be either displacement or velocity at points GJ and GK in the directions of CJ and CK.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NOLIN2  SID     GI      CI      S       GJ      CJ      GK      CK              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NOLIN2  14      2       1       2.9     2       1       2                       
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Nonlinear load set identification number.  (Integer > 0)                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ GI        │ Grid, scalar, or extra point identification number at which nonlinear load is to be applied. │
│           │  (Integer > 0)                                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CI        │ Component number for GI.  (0 < Integer < 6; blank or zero if GI is a scalar or extra point.) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ S         │ Scale factor.  (Real)                                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ GJ, GK    │ Grid, scalar, or extra point identification number.  (Integer > 0)                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CJ, CK    │ Component number for GJ, GK according to the following table:                                │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌───────────────┬──────────────────────────────────────────┬───────────────────────────────────────────────┐
│ Type of Point │ Displacement                             │ Velocity                                      │
├───────────────┼──────────────────────────────────────────┼───────────────────────────────────────────────┤
│ Grid          │ 1 < Integer < 6                          │ 11 < Integer < 16                             │
├───────────────┼──────────────────────────────────────────┼───────────────────────────────────────────────┤
│ Scalar        │ Blank or zero                            │ Integer = 10                                  │
├───────────────┼──────────────────────────────────────────┼───────────────────────────────────────────────┤
│ Extra         │ Blank or zero                            │ Integer = 10                                  │
└───────────────┴──────────────────────────────────────────┴───────────────────────────────────────────────┘
```

#### Remarks:

1. Nonlinear loads must be selected with the Case Control command NONLINEAR=SID.
2. Nonlinear loads may not be referenced on a DLOAD entry.
3. All degrees-of-freedom referenced on NOLIN2   entries must be members of the solution set.  This means the e-set for modal formulation and the d-set for direct formulation.
4. GI-CI, GJ-CJ, and G
K-CK may be the same point.

5. Nonlinear loads may be a function of displacement  ![bulkno06224.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06224.jpg?_LANG=enus)  or velocity  ![bulkno06226.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06226.jpg?_LANG=enus) .  Velocities are denoted by a component number ten greater than the actual component number; i.e., a component of 10 is component 0 (velocity).  The velocity is determined by

     ![bulkno06228.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06228.jpg?_LANG=enus)  

     where  ![bulkno06230.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06230.jpg?_LANG=enus)  is the time step interval and  ![bulkno06232.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06232.jpg?_LANG=enus) is the displacement of GJ-CJ or GK-CK for the previous time step.

6. The time step algorithm in transient solution sequences may loose unconditional stability when this load entry is used. In most practical cases, the time step size chosen to reach a certain accuracy is below the stability limit. It is recommended to decrease the time step if results diverge. Additional recommendations are outlined in the user guides.
7. When enforced motion is used, the NOLIN2 requires that PARAM,ENFMETH,ABS be specified because the generated loads are a function of total displacement and not relative displacement.
8. An alternate option for averaging nonlinear loads is available with DIAG 10, although it is  not  recommended.
