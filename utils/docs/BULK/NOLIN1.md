## [NOLIN1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NOLIN1.xhtml) - Nonlinear Load as a Tabular Function

Defines a forcing function for transient response or nonlinear harmonic response of the form

(0-24) Function of displacement:   ![bulkno06198.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06198.jpg?_LANG=enus)  or  ![bulkno06200.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06200.jpg?_LANG=enus)

(0-25) Function of velocity:   ![bulkno06202.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06202.jpg?_LANG=enus)  or  ![bulkno06204.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06204.jpg?_LANG=enus)

where  t  is time,  f  is frequency and  ![bulkno06206.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06206.jpg?_LANG=enus)  and  ![bulkno06208.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06208.jpg?_LANG=enus)  are the displacement and velocity at point GJ in the direction of CJ.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NOLIN1  SID     GI      CI      S       GJ      CJ      TID                     
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NOLIN1  21      3       4       2.1     3       10      6                       
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
┌─────┬──────────────────────────────────────────────────────────┐
│ TID │ Identification number of a TABLEDi entry.  (Integer > 0) │
└─────┴──────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Nonlinear loads must be selected with the Case Control command NONLINEAR = SID.

2. Nonlinear loads may not be referenced on DLOAD entry.

3. All degrees-of-freedom referenced on NOLIN1 entries must be members of the solution set.  This means the e-set (EPOINT entry) for modal formulation and the d-set for direct formulation.

4. Nonlinear loads as a function of velocity   are denoted by components ten greater than the actual component number; i.e., a component of 11 is component 1 (velocity).  The velocity is determined by

         ![bulkno06210.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06210.jpg?_LANG=enus)

     where  ![bulkno06212.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06212.jpg?_LANG=enus)  is the time step interval and  ![bulkno06214.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06214.jpg?_LANG=enus)  is the displacement of GJ-CJ for the previous time step.

5. The time step algorithm in transient solution sequences may loose unconditional stability when this load entry is used. In most practical cases, the time step size chosen to reach a certain accuracy is below the stability limit. It is recommended to decrease the time step if results diverge. Additional recommendations are outlined in the user guides.

6. When enforced motion is used, the NOLIN1 requires that PARAM,ENFMETH,ABS be specified because the generated loads are a function of total displacement and not relative displacement.

7. An alternate option for averaging nonlinear loads is available with DIAG 10, although it is  not  recommended.

