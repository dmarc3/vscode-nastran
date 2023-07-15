## [NOLIN4](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NOLIN4.xhtml) - Nonlinear Load as a Negative Variable Raised to a Power

Defines a forcing function for transient response or nonlinear harmonic response of the form

![bulkno06252.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06252.jpg?_LANG=enus)  or  ![bulkno06254.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06254.jpg?_LANG=enus)

where  t  is time,  f  is frequency and  ![bulkno06256.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06256.jpg?_LANG=enus)  may be a displacement or a velocity at point GJ in the direction of CJ.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NOLIN4  SID     GI      CI      S       GJ      CJ      A                       
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NOLIN4  2       4       6       2.0     101             16.3                    
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
│ GJ        │ Grid, scalar, or extra point identification number.  (Integer > 0)                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CJ        │ Component number for GJ according to the following table:                                    │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
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
┌───┬───────────────────────────────────────┐
│ A │ Exponent of forcing function.  (Real) │
└───┴───────────────────────────────────────┘
```
#### Remarks:

1. Nonlinear loads must be selected with the Case Control command NONLINEAR = SID.

2. Nonlinear loads may not be referenced on a DLOAD entry.

3. All degrees-of-freedom referenced on NOLIN4 entries must be members of the solution set.  This means the e-set for modal formulation and the d-set for direct formulation.

4. Nonlinear loads may be a function of displacement  ![bulkno06258.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06258.jpg?_LANG=enus)  or velocity  ![bulkno06260.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06260.jpg?_LANG=enus) .  Velocities are denoted by a component number ten greater than the actual component number; i.e., a component of 10 is component 0 (velocity).  The velocity is determined by

     ![bulkno06262.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06262.jpg?_LANG=enus)  

     where  ![bulkno06264.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06264.jpg?_LANG=enus)  is the time step interval and  ![bulkno06266.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06266.jpg?_LANG=enus)  is the displacement of GJ-CJ for the previous time step.

5. Use a NOLIN3 entry for the positive range of  ![bulkno06268.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06268.jpg?_LANG=enus) .

6. The time step algorithm in transient solution sequences may loose unconditional stability when this load entry is used. In most practical cases, the time step size chosen to reach a certain accuracy is below the stability limit. It is recommended to decrease the time step if results diverge. Additional recommendations are outlined in the user guides.

7. When enforced motion is used, the NOLIN4 requires that PARAM,ENFMETH,ABS be specified because the generated loads are a function of total displacement and not relative displacement.

8. An alternate option for averaging nonlinear loads is available with DIAG 10, although it is  not  recommended.

