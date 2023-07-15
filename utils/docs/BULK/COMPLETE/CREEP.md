## [CREEP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CREEP.xhtml) - Creep Characteristics

Defines creep characteristics based on experimental data or known empirical creep law. This entry will be activated if a MAT1, MAT2, or MAT9 entry with the same MID is used and the NLPARM entry is prepared for creep analysis. The creep formulation is principally suited for isotropic materials and, in general, when used with anisotropic materials may produce incorrect results. However, slightly anisotropic materials may produce acceptable results.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CREEP   MID     T0      EXP     FORM    TIDKP   TIDCP   TIDCS   THRESH  +       
+       TYPE    a       b       c       d       e       f       g               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CREEP   8       1100.           CRLAW                                   +       
+       121     6.985-6 2.444   7.032-4 0.1072  6.73-9  0.1479  3.0             
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID          │ Material identification number of a MAT1, MAT2, or MAT9 entry.  (Integer > 0)                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T0           │ Reference temperature at which creep characteristics are defined.  See Remark 2. (Real;           │
│              │ Default = 0.0)                                                                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXP          │ Temperature-dependent term, , in the creep rate expression.  See Remark 2. (0.0 < Real < 1.0;     │
│              │ Default = 1.0E-9)                                                                                 │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORM         │ Form of the input data defining creep characteristics.  (Character:  “CRLAW” for empirical creep  │
│              │ law, or “TABLE” for tabular input data of creep model parameters.)                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TIDKP,       │ Identification number of a TABLES1 entry, which defines the creep model parameters , , and ,      │
│ TIDCP, TIDCS │ respectively.  See Remarks 3. through 4. (Integer > 0)                                            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRESH       │ Threshold limit for creep process.  Threshold stress under which creep does not occur is computed │
│              │ as THRESH multiplied by Young’s modulus.  (0.0 < Real < 1.0E-3; Default = 1.0E-5)                 │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE         │ Identification number of the empirical creep law type.  See Remark 1. (Integer:  111, 112, 121,   │
│              │ 122, 211, 212, 221, 222, or 300)                                                                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ a through g  │ Coefficients of the empirical creep law specified in TYPE.  Continuation should not be specified  │
│              │ if FORM = “TABLE”.  See Remark 1. (Real)                                                          │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Two classes of empirical creep law are available.

#### Creep Law Class 1

The first creep law class is expressed as:

![bulkc202864.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202864.jpg?_LANG=enus)

Parameters  ![bulkc202866.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202866.jpg?_LANG=enus) ,  ![bulkc202868.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202868.jpg?_LANG=enus) , and  ![bulkc202870.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202870.jpg?_LANG=enus)  are specified in the following form, as recommended by Oak Ridge National Laboratory:

     See Link for definition

TYPE=ijk where i, j, and k are digits equal to 1 or 2, according to the desired function in the table above.  For example, TYPE=122 defines  ![bulkc202890.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202890.jpg?_LANG=enus) ,  ![bulkc202892.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202892.jpg?_LANG=enus) , and  ![bulkc202894.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202894.jpg?_LANG=enus) .

#### Creep Law Class 2

The second creep law class (TYPE=300) is expressed as:

![bulkc202896.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202896.jpg?_LANG=enus)

where the values of b and d must be defined as follows:

The above expression is determined by curve fitting using a Newton-Raphson procedure based on the expressions:

![bulkc202898.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202898.jpg?_LANG=enus)

where  ![bulkc202900.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202900.jpg?_LANG=enus)  is the effective stress and the nonlinear equation:

![bulkc202902.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202902.jpg?_LANG=enus)  

Then the creep model parameters are determined by:

![bulkc202904.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202904.jpg?_LANG=enus)  

![bulkc202906.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202906.jpg?_LANG=enus)  

![bulkc202908.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202908.jpg?_LANG=enus)  

To keep the solution of these expressions stable, the values of b and d are recommended to be defined as follows:

![bulkc202910.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202910.jpg?_LANG=enus)  

and

![bulkc202912.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202912.jpg?_LANG=enus)  

The coefficient g should be blank if TYPE = 112, 122, 222, or 212 and c, e, f, and g should be blank if TYPE = 300.  The coefficients a through g are dependent on the structural units; caution must be exercised to make these units consistent with the rest of the input data.

2. Creep law coefficients a through g are usually determined by least squares fit of experimental data, obtained under a constant temperature.  This reference temperature at which creep behavior is characterized must be specified in the T0 field if the temperature of the structure is different from this reference temperature.  The conversion of the temperature input ( ° F or  ° C) to  ° K (degrees Kelvin) must be specified in the PARAM,TABS entry as follows:

     PARAM,TABS,273.16 (If Celsius is used.)
     PARAM,TABS,459.69 (If Fahrenheit is used.)
     When the correction for the temperature effect is required, the temperature distribution must be defined in the Bulk Data entries (TEMP, TEMPP1 and/or TEMPRB), which are selected by the Case Control command TEMP(LOAD) = SID within the subcase.
     From the thermodynamic consideration, the creep rate is expressed as:

![bulkc202914.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202914.jpg?_LANG=enus)

where:

     See link for definitions.

If the creep characteristics are defined at temperature T0,   the creep rate at temperature   T   is corrected by a factor

![bulkc202924.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202924.jpg?_LANG=enus)

where:

     See link for definitions

3. Creep model parameters  K ,  C , and  C  represent parameters of the uniaxial rheological model as shown in  .

     Tabular values (X i , Y i ) in the TABLES1 entry correspond to  ![bulkc202932.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202932.jpg?_LANG=enus) ,  ![bulkc202934.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202934.jpg?_LANG=enus) ,   and ![bulkc202936.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202936.jpg?_LANG=enus)  for the input of  K p ,  C p , and  C s , respectively.  For linear viscoelastic materials, parameters  K p ,  C p , and  C s  are constant and two values of  ![bulkc202938.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202938.jpg?_LANG=enus)   must be specified for the same value of   K pi ,  C pi , and  C si .

![bulkc202940.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202940.jpg?_LANG=enus)

Figure 0-22 CREEP Parameter Idealization

Creep model parameters, as shown in  Figure 0-23  through  Figure 0-25 , must have positive values.  If the table look-up results in a negative value, the value will   be reset to zero and a warning message (TABLE LOOK-UP RESULTS IN NEGATIVE VALUE OF CREEP MODEL PARAMETER IN ELEMENT ID=****) will be issued.

![bulkc202942.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202942.jpg?_LANG=enus)

Figure 0-23  ![bulkc202944.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202944.jpg?_LANG=enus)  Versus  ![bulkc202946.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202946.jpg?_LANG=enus)  Example for CREEP

![bulkc202948.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202948.jpg?_LANG=enus)

Figure 0-24  ![bulkc202950.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202950.jpg?_LANG=enus)  Versus  ![bulkc202952.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202952.jpg?_LANG=enus)  Example for CREEP

![bulkc202954.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202954.jpg?_LANG=enus)

Figure 0-25  ![bulkc202956.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202956.jpg?_LANG=enus)  Versus  ![bulkc202958.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202958.jpg?_LANG=enus)  Example for CREEP

4. Creep analysis requires an initial static solution at  t  =  0 , which can be obtained by specifying a subcase that requests an NLPARM entry with DT = 0.0.
