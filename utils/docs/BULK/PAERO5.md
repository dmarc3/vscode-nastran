## [PAERO5](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAERO5.xhtml) - Aerodynamic Panel Property

Defines properties of each strip element for Piston theory.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO5  PID     NALPHA  LALPHA  NXIS    LXIS    NTAUS   LTAUS                   
        CAOC1   CAOC2   CAOC3   CAOC4   CAOC5                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO5  7001    1       702     1       701     1       700                     
        0.0     0.0     5.25    3.99375 0.0                                     
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Unique Integer > 0)                                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NALPHA    │ Number of angle of attack  values to be input for each Mach number (mi) on the MKAERO1 or MKAERO2 │
│           │ entry. (Integer > 0)                                                                              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
NALPHA

Meaning

1

 is the same value for all strips; enter one value, in units of degrees, on the AEFACT entry for each Mach number.

Number of Strips

 is different for each strip; enter ’s, in units of degrees, in the following order:   , etc.

--------------------

```text
┌────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ LALPHA │ ID number of the AEFACT entry that lists the ’s for the strips at each Mach number in the MKAERO1 │
│        │ or MKAERO2 entry. (Integer > 0)                                                                   │
├────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NXIS   │ Number of dimensionless chord coordinates  to be input.  (Integer > 0, Default = 0)               │
└────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
NXIS

Meaning

0

No ’s are required. (Default)

1

’s are the same for all strips; enter values for one strip on the AEFACT entry ( if NTHICK > 0, or  and  if NTHICK = 0)

Number of Strips

’s have to be input for each strip (, , ,  , if NTHICK > 0, or , , , , ,  ,  ,   if NTHICK = 0)

--------------------

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ LXIS  │ Identification number of AEFACT entry that lists the  values for the strip in order indicated by   │
│       │ values of NXIS and NTHICK. (Integer = 0 if  = 0 and NTHICK > 0 or LXIS > 0 if  = 0 and/or NTHICK = │
│       │ 0)                                                                                                 │
├───────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NTAUS │ Parameter used to select the number of thickness ratio  values to be input. (Integer > 0, Default  │
│       │ = 0)                                                                                               │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
NTAUS

Meaning

0

No ’s are required. (Default)

1

’s are the same for all strips; enter (, , ) values for one strip on AEFACT entry.

Number of Strips

’s must to be input for each strip on an AEFACT entry in the following order:

(, , , , , , , , , )

--------------------

```text
┌───────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ LTAUS │ Identification number of AEFACT entry that lists the τ values for the strips. (Integer = 0 or │
│       │ blank if NTAUS = 0, LTAUS > 0 if NTAUS > 0)                                                   │
├───────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ CAOCi │ = control surface chord divided by the strip chord. (Real > 0.0)                              │
└───────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The continuation entry is required for Piston theory with one entry (CAOCi) per strip.

2. Embedded blank fields are not allowed on the continuation entry.

3. If CAOCi = 0.0, there is no control surface.

4.  lists the thickness data input and AEFACT entry format used for Piston theory.

```text
┌──────────────┬──────────────┬───────────┬──────────────┬───────┐
│ Type of      │ Parameter    │ Number of │ Entry Format │       │
│ Input        │ Combinations │ Words     │ Index        │       │
├──────────────┼──────────────┼───────────┼──────────────┼───────┤
│ CAOG         │ NGHICK       │ NXIS      │ LXIS         │ NTAUS │
├──────────────┼──────────────┼───────────┼──────────────┼───────┤
│ No control   │ 0.           │ ID(a)     │ 0            │ 0     │
│ surfaces,    │              │           │              │       │
│ Integrals    │              │           │              │       │
│ input are    │              │           │              │       │
│ same for all │              │           │              │       │
│ strips       │              │           │              │       │
├──────────────┼──────────────┼───────────┼──────────────┼───────┤
│ With control │              │ ID(b)     │ 1            │ ID(c) │
│ surfaces,    │              │           │              │       │
│ Integrals    │              │           │              │       │
│ input, same  │              │           │              │       │
│ hinge on all │              │           │              │       │
│ strips       │              │           │              │       │
├──────────────┼──────────────┼───────────┼──────────────┼───────┤
│ With control │              │ ID(b)     │ NSTRIP       │ ID(d) │
│ surfaces,    │              │           │              │       │
│ Integrals    │              │           │              │       │
│ input,       │              │           │              │       │
│ variable     │              │           │              │       │
│ hinge        │              │           │              │       │
├──────────────┼──────────────┼───────────┼──────────────┼───────┤
│ No control   │ 0.0          │ 0         │ 1            │ ID(f) │
│ surfaces,    │              │           │              │       │
│ thickness    │              │           │              │       │
│ inputs are   │              │           │              │       │
│ same for all │              │           │              │       │
│ strips       │              │           │              │       │
├──────────────┼──────────────┼───────────┼──────────────┼───────┤
│ With control │              │ 0         │ 1            │ ID(f) │
│ surfaces,    │              │           │              │       │
│ thickness    │              │           │              │       │
│ inputs are   │              │           │              │       │
│ same for all │              │           │              │       │
│ strips       │              │           │              │       │
├──────────────┼──────────────┼───────────┼──────────────┼───────┤
│ With control │              │ 0         │ NSTRIP       │ ID(h) │
│ surfaces,    │              │           │              │       │
│ thickness    │              │           │              │       │
│ inputs vary  │              │           │              │       │
│ for strips   │              │           │              │       │
└──────────────┴──────────────┴───────────┴──────────────┴───────┘
```
     Entry Format

a. AEFACT, ID,  ![bulkp06474.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06474.jpg?_LANG=enus) ,  ![bulkp06476.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06476.jpg?_LANG=enus) ,  ![bulkp06478.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06478.jpg?_LANG=enus) ,  ![bulkp06480.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06480.jpg?_LANG=enus) ,  ![bulkp06482.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06482.jpg?_LANG=enus) ,  ![bulkp06484.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06484.jpg?_LANG=enus)

b. AEFACT, ID,  ![bulkp06486.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06486.jpg?_LANG=enus) ,  ![bulkp06488.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06488.jpg?_LANG=enus) ,  ![bulkp06490.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06490.jpg?_LANG=enus) ,  ![bulkp06492.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06492.jpg?_LANG=enus) ,  ![bulkp06494.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06494.jpg?_LANG=enus) .,  ![bulkp06496.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06496.jpg?_LANG=enus) ,  ![bulkp06498.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06498.jpg?_LANG=enus) ,  ![bulkp06500.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06500.jpg?_LANG=enus) ,  ![bulkp06502.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06502.jpg?_LANG=enus) ,  ![bulkp06504.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06504.jpg?_LANG=enus) ,  ![bulkp06506.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06506.jpg?_LANG=enus)

c. AEFACT, ID,  ![bulkp06508.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06508.jpg?_LANG=enus)

d. AEFACT, ID,  ![bulkp06510.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06510.jpg?_LANG=enus)

e. AEFACT, ID,  ![bulkp06512.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06512.jpg?_LANG=enus)

f. AEFACT, ID,  ![bulkp06514.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06514.jpg?_LANG=enus)

g. AEFACT, ID,  ![bulkp06516.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06516.jpg?_LANG=enus)

![bulkp06518.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06518.jpg?_LANG=enus)  

h. AEFACT, ID,  ![bulkp06520.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06520.jpg?_LANG=enus)

5. The following table lists the angle-of-attack distribution and AEFACT entry formats used for Piston theory.

```text
┌──────────────┬────────────────────────┬─────────────────┐
│ Type of      │ Parameter Combinations │ Number of Words │
│ Distribution │                        │                 │
├──────────────┼────────────────────────┼─────────────────┤
│ NALPHA       │ LALPHA                 │                 │
├──────────────┼────────────────────────┼─────────────────┤
│ Equal angle  │ 1                      │ ID              │
│ of attack on │                        │                 │
│ all strips   │                        │                 │
├──────────────┼────────────────────────┼─────────────────┤
│ Unequal      │ NSTRIP                 │ ID              │
│ angle of     │                        │                 │
│ attack       │                        │                 │
└──────────────┴────────────────────────┴─────────────────┘
```
     Entry Format

a. AEFACT, ID,  ![bulkp06522.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06522.jpg?_LANG=enus) ,

b. AEFACT, ID,  ![bulkp06524.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06524.jpg?_LANG=enus) , etc., for all m on MKAEROi entry.

c. A control surface rotation is positive when the trailing edge moves in the negative z-direction of the aerodynamic element coordinate system; see the  MSC Nastran: Aeroelastic Analysis User’s Guide .

