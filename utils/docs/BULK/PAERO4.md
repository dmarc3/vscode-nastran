## [PAERO4](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAERO4.xhtml) - Aerodynamic Strip Properties

Defines properties of each strip element for Strip theory.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO4  PID     CLA     LCLA    CIRC    LCIRC   DOC1    CAOC1   GAPOC1          
        DOC2    CAOC2   GAPOC2  DOC3    CAOC3   GAPOC3  -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO4  6001    1       501     0       0       0.0     0.0     0.0             
        0.50    0.25    0.02    0.53    0.24    0.0                             
```
PID

Property identification number. (Integer > 0)

CLA

Select Prandtl-Glauert correction. (Integer = -1, 0, 1; Default = 0)

-1

Compressibility correction made to lift curve slope data for a reference Mach number.

0

No correction and no list needed. (Default)

+1

No correction and lift curve slope provided by a list as a function of strip location and Mach number.

LCLA

Identification number of the AEFACT entry that lists the lift curve slope on all strips for each Mach number on the MKAEROi entry. See Remark 7(b.) below. (Integer = 0 if CLA = 0, > 0 if CLA0)

CIRC

Select Theodorsen’s function  or the number of exponential coefficients used to approximate . (Integer = 0, 1, 2, 3; Default = 0; Must be zero if CLA0.)

0

Theodorsen function.

1, 2, 3

Approximate function with  n = 1, 2, 3.

LCIRC

Identification number of the AEFACT entry that lists the  values for each Mach number. See Remark 7c., 7d., and 7e. below; variable ’s and ’s for each mi on the MKAEROi entry. (Integer = 0 if CIRC = 0, > 0 if CIRC0)

DOCi

d/c

distance of the control surface hinge aft of the quarter-chord divided by the strip chord. (Real > 0.0)

CAOCi

 

control surface chord divided by the strip chord. (Real > 0.0)

GAPOCi

g/c

control surface gap divided by the strip chord. (Real > 0.0)

--------------------

#### Remarks:

1. PAERO4 is required for Strip theory with three fields (DOCi, CAOCi, GAPOCi) specified per strip.

2. If CLA = -1, lift curve slope data at one Mach number are needed on the AEFACT entry.

3. If CAOCi = 0.0, there is no control surface.

4. If GAPOCivb = 0.0, there is   no slot flow.

5. If GAPOCi < 0.01, then 0.01 is   used.

6. Embedded blank fields are not permitted.

7.  lists the lift curve slope or lag function selection and the AEFACT entry formats used for Strip theory:

Theodorsen Function

Data Type Input

Parameter Combinations

Number of Words

Entry Format Index

CLA

LCLA

CIRC

LCIRC

Exact

Lift Curve Slope

 

0

0

0

0

No AEFACT entry required

 Input, Uses Prandtl-Glauert Correction

-1

ID

0

0

(NSTRIP+1)

a.

 Input, for All m’s on MKAERO Entry

1

ID

0

0

(NSTRIP+1)*NMACH                                 b.

Approximate Coefficients

, etc.

0

0

1

ID

4*NMACH

c.

0

0

2

ID

6*NMACH

d.

0

0

3

ID

8*NMACH

e.

--------------------

     Entry Format

a. AEFACT, ID,  ![bulkp06360.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06360.jpg?_LANG=enus)

b. AEFACT, ID,  ![bulkp06362.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06362.jpg?_LANG=enus) ,  ![bulkp06364.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06364.jpg?_LANG=enus) , for all m on MKAEROi data entry

c. AEFACT, ID,  ![bulkp06366.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06366.jpg?_LANG=enus) , etc.

d. AEFACT, ID,  ![bulkp06368.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06368.jpg?_LANG=enus) , etc.

e. AEFACT, ID,  ![bulkp06370.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06370.jpg?_LANG=enus)  etc.

8. A control surface rotation is   positive when the trailing edge moves in the negative z-direction of   the aerodynamic element coordinate system; see the  MSC Nastran: Aeroelastic Analysis User’s Guide .

