## [MATTHE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATTHE.xhtml) - Hyperelastic Material - Temperature Dependence

Specifies temperature-dependent properties of hyperelastic (rubber-like) materials (elastomers) for nonlinear (large strain and large rotation) analysis in SOLs 106, 129 and SOL 400 only.

#### Format 1 (Default): Generalized Mooney-Rivlin model (Model=Mooney).  The first two lines are required, the others may be omitted depending on how many terms are desired.)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTHE  MID     Model           T(K)    T(RHO)  T(Texp)         T(GE)           
        T(C10)  T(C01)  T(D1)                                                   
        T(C20)  T(C11)  T(C02)  T(D2)                                           
        T(C30)  T(C21)  T(C12)  T(C03)  T(D3)                                   
        T(C40)  T(C31)  T(C22)  T(C13)  T(C04)  T(D4)                           
        T(C50)  T(C41)  T(C32)  T(C23)  T(C14)  T(C05)  T(D5)                   
```
#### Format 2: Ogden Model

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTHE  MID     Model           T(K)    T(RHO)  T(Texp)         T(GE)           
        T(D1)   T(D2)   T(D3)   T(D4)   T(D5)                                   
```
#### Format 3: Arruda-Boyce model or Gent Model (Model = Aboyce or Gent)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTHE  MID     Model           T(K)    T(RHO)  T(Texp)         T(GE)           
        T(NKT)  T(N/E)  T(Im)                                                   
        T(D1)   T(D2)   T(D3)   T(D4)   T(D5)                                   
```
#### Example - Format 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTHE  1       Monney                                                          
        10      1       100                                                     
        20      11      2       200                                             
        30      21      12      3       300                                     
        40      31      22      13      4       400                             
        50      41      32      23      14      5       500                     
```
#### Example - Format 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTHE  1       Ogden                                                           
                                                                                
                                                                                
                                                                                
        100     200     300     400     500                                     
```
#### Example - Format 3:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTHE  1       Aboyce                                                          
        1       2                                                               
        100     200     300     400     500                                     
```
```text
┌───────────┬──────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MID       │ Identification number of a MATHE entry. See      │                                                  │
│           │ Remark 1. (Integer > 0; no Default)              │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ Model     │ Select hyperelastic material model form.         │                                                  │
│           │ (Character; Default = Mooney)                    │                                                  │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ Mooney                                           │ For generalized Mooney-Rivlin hyperelastic model │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ Ogden                                            │ For Ogden hyperelastic model                     │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ Foam                                             │ For Foam model                                   │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ Aboyce                                           │ For Arruda-Boyce strain energy model             │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ Gent                                             │ For Gent strain energy model                     │
├───────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ T(Value)  │ Identification number of a TABLEMi entry for the │                                                  │
│           │ temperature variation of the matching value from │                                                  │
│           │ the MATHE entry - see the MATHE entry for the    │                                                  │
│           │ definition of each coefficient value. (Integer;  │                                                  │
│           │ Default = 0 which means no table variation for   │                                                  │
│           │ that particular value)                           │                                                  │
└───────────┴──────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```
#### Remarks:

1. The MATTHE entry must have the same ID as the corresponding MATHE entry. Each table ID on the MATTHE entry corresponds to a parameter on the MATHE entry.

2. If the thermal expansion coefficient is temperature-dependent, the thermal strain is computed as

     ![bulkno05830.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05830.jpg?_LANG=enus)  

     where  ![bulkno05832.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05832.jpg?_LANG=enus)  is the reference temperature at which measurement of the thermal expansion coefficient is based,  ![bulkno05834.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05834.jpg?_LANG=enus)  is an initial temperature, and  ![bulkno05836.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05836.jpg?_LANG=enus)  is the thermal expansion coefficient at the initial temperature  ![bulkno05838.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05838.jpg?_LANG=enus) .    If the thermal expansion is not temperature-dependent, the thermal strain expression is reduced to the usual expression:

     ![bulkno05840.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05840.jpg?_LANG=enus)  

3. If experimental data is provided, it is expected that the user has the data for multiple tests of the same type at different temperatures. The use of TABLEST’s for this entry is not presently available. If experimental data is used to define the constants, use a GUI to define the constants at each temperature, enter the baseline values on the MATHE entry and the variation of each coefficient using TABLEMi.

