## [NOLIN3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NOLIN3.xhtml) - Nonlinear Load as a Positive Variable Raised to a Power

Defines a forcing function for transient response or nonlinear harmonic response of the form

![bulkno06234.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06234.jpg?_LANG=enus)  or  ![bulkno06236.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06236.jpg?_LANG=enus)

where  t  is time,  f  is frequency and  ![bulkno06238.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06238.jpg?_LANG=enus)  may be a displacement or a velocity at point GJ in the direction of CJ.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NOLIN3  SID     GI      CI      S       GJ      CJ      A                       
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NOLIN3  4       102             -6.1    2       15      -3.5                    
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Nonlinear load set identification number.  (Integer > 0)                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GI        │ Grid, scalar, or extra point identification number at which the nonlinear load is to be applied. │
│           │  (Integer > 0)                                                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CI        │ Component number for GI.  (0 < Integer < 6; blank or zero if GI is a scalar or extra point.)     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S         │ Scale factor.  (Real)                                                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GJ        │ Grid, scalar, extra point identification number.  (Integer > 0)                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CJ        │ Component number for GJ according to the following table:                                        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
Type of Point

Displacement

Velocity

Grid

1 < Integer < 6

11 < Integer < 16

Scalar

Blank or zero

Integer = 10

Extra

Blank or zero

Integer = 10

--------------------

```text
┌───┬───────────────────────────────────────────┐
│ A │ Exponent of the forcing function.  (ReaI) │
└───┴───────────────────────────────────────────┘
```
#### Remarks:

1. Nonlinear loads must be selected with the Case Control command NONLINEAR = SID.

2. Nonlinear loads may not be referenced on a DLOAD entry.

3. All degrees-of-freedom referenced on NOLIN3 entries must be members of the solution set.  This means the e-set for modal formulation and the d-set for direct formulation.

4. Nonlinear loads may be a function of displacement  ![bulkno06240.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06240.jpg?_LANG=enus)  or velocity  ![bulkno06242.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06242.jpg?_LANG=enus) .  Velocities are denoted by a component number ten greater than the actual component number; e.g., a component of 16 is component 6 (velocity).  The velocity is determined by

     ![bulkno06244.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06244.jpg?_LANG=enus)  

     where  ![bulkno06246.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06246.jpg?_LANG=enus)  is the time step interval and  ![bulkno06248.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06248.jpg?_LANG=enus)  is the displacement of GJ-CJ   for the previous time step.

5. Use a NOLIN4 entry for the negative range of  ![bulkno06250.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06250.jpg?_LANG=enus) .

6. The time step algorithm in transient solution sequences may loose unconditional stability when this load entry is used. In most practical cases, the time step size chosen to reach a certain accuracy is below the stability limit. It is recommended to decrease the time step if results diverge. Additional recommendations are outlined in the user guides.

7. When enforced motion is used, the NOLIN3 requires that PARAM,ENFMETH,ABS be specified because the generated loads are a function of total displacement and not relative displacement.

8. An alternate option for averaging nonlinear loads is available with DIAG 10, although it is  not  recommended.

