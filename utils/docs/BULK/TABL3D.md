## [TABL3D](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABL3D.xhtml) - Multi-Dimensional Table

Specifies a table where an entry can be a function of up to 4 variables such as strain, temperature, strain rate, etc. for SOL 400.

#### Format 0: Simple Table Type 0 - entry is a function of only one variable:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABL3D0 ITID            KIND    EXTRP   ITIDS   ITIDB   SM                      
        X1      Y1      X2      Y2      X3      Y3      X4      Y4              
        X5      Y5      -etc.-                                                  
```
#### Format 1: Multi-Dimensional Table Type 1 - entry is a function of 2, 3, or 4 variables, data entered one row at a time

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABL3D1 ITID    NV      KIND1   KIND2   KIND3   KIND4   NW1     NW2             
        NW3     NW4     EXTRP1  EXTRP2  EXTRP3  EXTRP4                          
        ITIDS1  ITIDB1  ITIDS2  ITIDB2  ITIDS3  ITIDB3  ITIDS4  ITIDB4          
        SM1     SM2     SM3     SM4                                             
        X11     X12     X13     X14     X15     X16     -etc.-                  
        X21     X22     X23     X24     X25     X26     -etc.-          Enter...
        X31     X32     X33     X34     X35     X36     -etc.-          Enter...
        X41     X42     X43     X44     X45     X46     -etc.-          Enter...
        Y1      Y2      Y3      Y4      Y5      Y6      -etc.-          See R...
```
#### Format 2: Multi-Dimensional Table Type 2- entry is a function of 2, 3, or 4 variables, data entered one point at a time

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABL3D2 ITID    NV      KIND1   KIND2   KIND3   KIND4   NW1     NW2             
        NW3     NW4     EXTRP1  EXTRP2  EXTRP3  EXTRP4                          
        ITIDS1  ITIDB1  ITIDS2  ITIDB2  ITIDS3  ITIDB3  ITIDS4  ITIDB4          
        SM1     SM2     SM3     SM4                                             
        X11     X12     X13     X14     X15     X16     -etc.-                  
        X21     X22     X23     X24     X25     X26     -etc.-          Enter...
        X31     X32     X33     X34     X35     X36     -etc.-          Enter...
        X41     X42     X43     X44     X45     X46     -etc.-          Enter...
        Y1      Y2      Y3      Y4      Y5      Y6      -etc.-          See R...
```
```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ ITID      │ Table identification number.  (Integer > 0; no    │                                          │
│           │ Default)                                          │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ SM or SMi │ Flag to indicate smoothing of the table data.     │                                          │
│           │ (Integer; Default = 0)                            │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│           │ 0                                                 │ Do not smooth the data                   │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│           │ 1                                                 │ Smooth the data                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ NV        │ Number of variables the entry is a function of    │                                          │
│           │ (Integer, 1, 2, 3, or 4; no Default)              │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ KIND or   │ “Independent” variable type (such as strain,      │                                          │
│ KINDi     │ temperature, Integer > 0; no Default; see         │                                          │
│           │ Table 0-32 for application values)                │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ EXTRP or  │ Extrapolation flag. (Integer; Default = 2)        │                                          │
│ EXTRPi    │                                                   │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│           │ 1                                                 │ Do not allow extrapolation               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│           │ 2                                                 │ Allow extrapolation (both ends of curve) │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ ITIDS or  │ Table IDs meant for future expansion to reference │                                          │
│ ITIDSi,   │ other tables from this table when trying to       │                                          │
│ ITIDB or  │ evaluate this table outside its defined range.    │                                          │
│ ITIDBi    │ Currently not used, leave blank.                  │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Nwi       │ Number of X values of each variables. (i can      │                                          │
│           │ range from 1 to 4) (Integer > 0; no Default)      │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Xi or Xij │ Value of “independent” variable such as strain,   │                                          │
│           │ temperature, ... (Real; no Default)               │                                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────┤
│ Yi        │ Value of the quantity desired such as stress,     │                                          │
│           │ Poisson’s ratio, ... (Real; no Default)           │                                          │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────┘
```
The “Independent” variable(s) should be selected from  Table 0-32 :

Independent Variable Type

1

time

26

 coordinate

51

wavelength (used in spectral radiation)

2

normalized time

27

 

52

creep strain

3

increment number

28

contact force 

53

pressure or primary quantity in diffusion

4

normalized increment time

29

not available

54

equivalent strain rate for non-Newtonian viscosity

5

x coordinate

30

 (normal stress)

55

normalized arc distance

6

y coordinate

31

not available

56

distance to other contact surface (near contact only)

7

z coordinate

32

not available

57

terms of series

8

 

33

 

(see throat)

58

hydrostatic stress

9

 angle

34

Not available

59

hydrostatic strain

10

mode number

35

Not available

60

Not available

11

frequency

36

Not available

61

Not available

12

temperature

37

gasket closure distance

62

2nd state variable

13

function

38

displacement magnitude

63

3rd state variable

14

fourier

39

stress rate

64

4th state variable

15

 (equivalent plastic strain)

40

experimental data

65

5th state variable

16

 (equivalent strain rate)

41

porosity

66

not available

17

Not available

42

void ratio

67

not available

18

arc length

43

 (equivalent creep strain rate)

68

not available

19

relative density (not available for shells)

44

minor principal strain

69

equivalent mechanical strain

20

 (equivalent stress)

45

distance from neutral axis
(-1/2, +t/2)

70

1st strain invariant

21

not available

46

normalized distance from neutral axis (-1, +1)

71

2nd strain invariant

22

velocity

47

local x-coordinate of layer point for open or closed section beam

72

3rd strain invariant

23

not available

48

local y-coordinate of layer point for open or closed section beam

73

local strain component

24

 coordinate

49

not available

74

damage

25

 coordinate

50

not available

75

accumulated crack growth

76

relative sliding velocity

--------------------

#### Remarks (General):

1. Independent Variable Types marked as ‘NOT AVAILABLE’ are not available in SOL 400.

2. Dependent quantities cannot be arbitrary functions of the Independent Variable Types shown in  . For e.g., Young’s Modulus can be varied with Temperature and Space but cannot be varied with Time. Incorrect tabular settings that are not allowed will be errored out by the program.

3. For time-independent materials, dependent variables (i.e., yield stress) can typically be defined only as a function of temperature, stress/strain data or coordinates. For time-dependent materials, (e.g., creep coefficient), properties can also be defined as a function of time.

4. For contact dependent variables, (i.e., friction coefficient) can typically be defined as a function of temperature, contact body quantities like normal stress, body force, distance from body, relative velocity, etc.

5. If the independent variable is out of range of the table, the user can indicate if the last point in the table should be used or if the table should be extrapolated. Extrapolation means the table is continued with its first or last slope. Care should be taken with extrapolation, particularly for material properties.

6. Independent variable types for coordinates (5, 6, 7) depend on the type of analysis flagged. For a small strain or Total Lagrange or non-mechanical analysis, these coordinates refer to the original coordinates. For Updated Lagrange mechanical analysis, these coordinates refer to the updated

7. At present, options to specify additional tables using ITIDS, ITIDB, ITIDS1, ITIDB1, … ITIDS4, ITIDB4are not active and will be ignored if entered.

8. Independent variable types are typically specified for materials or contact. When material properties are varied through TABL3DX, the tables are honored only for elements with property extensions. For e.g., if TABL3D0 is used in conjunction with MATEP for a CHEXA mesh with PSOLID properties, then the elements should be given the PSLDN1 property extension for the table to be valid. Note that, with default property mapping (NLMOPTS,SPROPMAP,0), the property extensions will be added automatically based on the rules specified in Remark   of the NLMOPTS entry.

9. The strains and stresses identified as independent variables depend n the parameters flagged for large displacement.

a. For PARAM,LGDISP,-1, the strains and stresses are engineering quantities.

b. For PARAM,LGDISP,n (n > 0) or with NLMOPTS,LRGSTRN,n (n > 0), the strains are typically Logarithmic strains and the stresses are Cauchy Stresses.

