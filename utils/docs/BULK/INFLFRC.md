## [INFLFRC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.INFLFRC.xhtml) - Hybrid Inflator Gas Fraction Definition

Defines the gas fractions as a function of time for hybrid inflators. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLFRC FRACID  TYPE                                                            
        “TIME”  TIME1   FRAC1   FRAC2   FRAC3   etc.                            
        “TIME”  TIME2   FRAC1   FRAC2   FRAC3   etc.                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLFRC 12                                                                      
        TIME    14.0E-3 11.342  13.391  9.626   57.019  7.31    1.312           
        0.0     0.1     0.2                                                     
        TIME    14.1E-3 43.332  6.2817  4.5155  26.747  3.4291  0.4898          
        15.077  0.0     0.4                                                     
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRACID    │ Unique number of an INFLFRC entry.(Integer > 0, required.)                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Specifies whether mass fractions or molar fractions will be given (Character, default=MASS.) │
│           │ MASS  The fractions on INFLFRC are mass fractions. MOLAR  The fractions on INFLFRC are molar │
│           │ fractions. See Remark 5.                                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TIMEID    │ Defines a new line of data (Character, required.) TIME  Specifies that data for a new time   │
│           │ increment will be given. See Remark 3.                                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TIMEi     │ Time for which the gas fractions are given. (Real³0.0, required.)                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRACi     │ Fraction of gas i at the specified time..See Remark 7. (Real³0.0, required.)                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The INFLFRC entry is referenced with FRACID from an AIRBAG entry with the option “INFLATOR” or from INFLHB.

2. Fraction values of the inflowing gas will be linearly interpolated between the specified time increments.

3. Use as many continuation lines as necessary to completely define the gas fractions. The data for a time step are preceded by a TIME keyword. Missing entries will be set to 0.0.

4. The order of the gases for which the fractions are specified is identical to the order in which the gases are specified on the AIRBAG entry with the option “INFLATOR”.

5. At least one line of gas fractions must be given.

6. If molar fractions (TYPE=MOLAR) are to be used, the universal gas constant must be specified through PARAM, UGASC.

7. At least one of the fractions for each time step must have a value greater than 0.0.

8. Fractions for each timestep should add up to 1.0. If this is not the case, they will be scaled so that they do.

