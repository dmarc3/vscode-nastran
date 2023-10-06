## [MATTVE ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATTVE.xhtml) - Thermo-Visco-Elastic Material Properties

Specifies temperature-dependent visco-elastic material properties in terms of Thermo-Rheologically Simple behavior to be used for quasi-static or transient dynamic analysis in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTVE  MID     functionRT      ENER    FRACT   TDIF    TREF    NP      +
+       A1      A2                                                      +
+       C0      C1      C2      C3      C4      etc.                    +
+       W0      W1      W2      W3      W4      etc.                    +
+       T0      T1      T2      T3      T4      etc.                    +
+       IFICT                                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATTVE  100     WLF     100.                                                  
          0.8   1.2                                                           
MATTVE  101     POWER   100.                                    11            
          0     0.0                                                           
          1     .99     .98     .97     .96     .95     .94     .93     W0-7  
          0.92  .915    .914                                            W8-10 
MATTVE  102     NARA            4.3E-8  .75     200.    400.    11            
          0     0.0                                                           
          1     .99     .98     .97     .96     .95     .94     .93     W0-7  
          0.92  .915    .914                                            W8-10 
        235     234.    233.    232.    231.    230.    229.    228.    T0-7  
        227     226.    225.                                            T8-10 
MATTVE  103     USER    345.                                    8             
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ Identification number. See Remark 1. (Integer >   │                                                   │
│           │ 0)                                                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Function  │ Name of the shift function. See Remarks 2. and    │                                                   │
│           │ 3. (Character)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ WLF                                               │ Williams-Landell-Ferry form, Requires A1 and A2.  │
│           │                                                   │ (Default)                                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ POWER                                             │ power series form                                 │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NARA                                              │ Narayanaswamy model                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ USER                                              │ specify the shift function with a user subroutine │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RT        │ Enter the reference or glass transition           │                                                   │
│           │ temperature. (Real; Default = 0.)                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ENER      │ Used for NARA model only, enter the activation    │                                                   │
│           │ energy divided by the gas constant Q/R. (Real; no │                                                   │
│           │ Default)                                          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FRACT     │ Used for NARA only, enter the fraction parameter. │                                                   │
│           │ (Real; no Default)                                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TDIF      │ Used for NARA only, enter the temperature shift   │                                                   │
│           │ between your temperature and absolute temperature │                                                   │
│           │ for calculating fictitive temperatures. (Real; no │                                                   │
│           │ Default)                                          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TREF      │ Used for NARA only, enter the reference           │                                                   │
│           │ temperature for structural relaxation. (Real; no  │                                                   │
│           │ Default)                                          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NP        │ For POWER, enter the number of coefficients in    │                                                   │
│           │ the power series representation. For NARA, NP is  │                                                   │
│           │ the member of terms in the Proxy series.          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ A1, A2    │ For WLF model enter the constants A1 and A2. For  │                                                   │
│           │ other models, enter 0.0 for A1 and A2. Do not     │                                                   │
│           │ enter a blank line as it will be stripped out.    │                                                   │
│           │ (Real; no Default)                                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Ci        │ Coefficients of the shift function, enter NP      │                                                   │
│           │ values for POWER only. Do not enter Ci for NARA.  │                                                   │
│           │ (Real; no Defaults)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Wi        │ For NARA model only, enter the weighting factors  │                                                   │
│           │ in increasing order of subscript. Enter NP        │                                                   │
│           │ values. For WLF and POWER, skip these values.     │                                                   │
│           │ (Real; no Defaults)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Ti        │ For the NARA model only, enter the relaxation     │                                                   │
│           │ time values in increasing order of subscript.     │                                                   │
│           │ Enter NP values. For WLF and POWER, skip these    │                                                   │
│           │ values. (Real; no Defaults)                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ IFICT     │ For NARA model only, enter initial fictive        │                                                   │
│           │ temperature (Integer > 0)                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 1=                                                │ Initial temperature                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 2=                                                │ Structural relaxation reference temperature       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 3=                                                │ 0.0 (default)                                     │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The MATVE Bulk Data entry with the same MID must exist for MATTVE to be effective.  
2. The viscoelastic behavior is especially noticeable in the organic high polymers. There are many different kinds of such materials including various plastics, natural and synthetic rubbers. Their mechanical properties depend strongly on temperature, and these properties change drastically in the vicinity of a critical temperature called the glass-transition temperature  ![bulkno05842.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05842.jpg?_LANG=enus) . The polymer well below  ![bulkno05844.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05844.jpg?_LANG=enus)  is an organic glass with a relatively high modulus. The viscoelastic behavior predominates in the transition range around  ![bulkno05846.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05846.jpg?_LANG=enus) . The polymer above the transition region (but below the melting point) becomes a rubbery solid with a low modulus.

     Polymers are broadly classified as amorphous polymers and polycrystalline polymers. Under stress-relaxation at a constant strain in the glass-transition region temperature, the amorphous polymer exhibits a phase change over time from the glassy state to the rubbery state. The response is manifested in the shear modulus as a function of time, in which initially high shear modulus changes into low shear modulus. The relaxation curve of the modulus in a log-log scale plot appears as a flat plateau of glassy modulus  ![bulkno05848.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05848.jpg?_LANG=enus)  shifting down to the equilibrium modulus  ![bulkno05850.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05850.jpg?_LANG=enus)  at the rubbery plateau. Such a relaxation behavior of the amorphous polymer is observed even when the temperature is well below  ![bulkno05852.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05852.jpg?_LANG=enus)  for a prolonged period of time in a very slow process. A similar behavior is found in the rubbery elastic region, but the process is faster.  

     Fortunately, the mechanical properties of amorphous polymers obey a time-temperature superposition principle, which allows the use of data obtained at different temperatures to extend the time scale at any given temperature. For such a behavior, the amorphous polymer is characterized as thermo-rheologically simple (TRS). Since the relaxation process extends several decades on the logarithmic time scale at lower temperatures, it is not feasible to determine the whole curve by a constant strain test at one temperature. Instead, the relaxation characteristics are measured at elevated temperatures in reduced time scale. Then the polymers exhibit a translational shift of all the characteristic responses with a change of temperature along the logarithmic time axis. This shift occurs parallel to the time axis without a change in properties: glassy and rubbery moduli. The modulus curve shifts towards shorter time with an increased temperature.

3. The reduced ( ![bulkno05854.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05854.jpg?_LANG=enus) ), or pseudo, time is related to the actual time  ![bulkno05856.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05856.jpg?_LANG=enus)  through a shift function which is a function of temperature, i.e.,

     ![bulkno05858.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05858.jpg?_LANG=enus)            

     where  ![bulkno05860.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05860.jpg?_LANG=enus)  is a shift function in terms of temperature  ![bulkno05862.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05862.jpg?_LANG=enus)  at time  ![bulkno05864.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05864.jpg?_LANG=enus) . The shift function is a material property and must be determined experimentally. A shift function approximated by Williams-Landell-Ferry, known as WLF equation, has the form:

     ![bulkno05866.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05866.jpg?_LANG=enus)  

     where  ![bulkno05868.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05868.jpg?_LANG=enus)  is the reference temperature at which relaxation data are given and  ![bulkno05870.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05870.jpg?_LANG=enus)  are calibration constants obtained at this temperature. Notice that  ![bulkno05872.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05872.jpg?_LANG=enus)  if the reduced time is the same as the actual time. If  ![bulkno05874.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05874.jpg?_LANG=enus) , the deformation will be elastic.

     Another form of the shift function is available as a power series in  ![bulkno05876.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05876.jpg?_LANG=enus) , i.e.,

                 ![bulkno05878.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05878.jpg?_LANG=enus)

4. The WLF shift function requires A1 and A2. The power series can have a maximum 11 coefficients C0 through C10.

#### Note:

1. This entry matches the three options for SHIFT FUNCTION in Marc: William-Landell-Ferry, Power Series and Narayanaswamy models.
