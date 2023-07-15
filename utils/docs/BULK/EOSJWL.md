## [EOSJWL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EOSJWL.xhtml) - JWL Explosive Equation of State - SOL700

Defines the properties of a  JWL  equation of state commonly used to calculate the pressure  ![bulkde03496.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03496.jpg?_LANG=enus)   of the detonation products of high explosives

![bulkde03498.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03498.jpg?_LANG=enus)  

![bulkde03500.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03500.jpg?_LANG=enus)  

```text
┌────────────┬───┐
│            │ = │
├────────────┼───┤
│            │ = │
├────────────┼───┤
│            │ = │
├────────────┼───┤
│            │ = │
├────────────┼───┤
│            │ = │
├────────────┼───┤
│            │ = │
├────────────┼───┤
│ , , , , a, │   │
│ m, n and Q │   │
│ are        │   │
│ constants. │   │
└────────────┴───┘
```
The last term:  ![bulkde03524.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03524.jpg?_LANG=enus)  models afterburning.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSJWL  MID     A       B       R1      R2      OMEGA   P0      Q               
        a       m       N                                                       
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSJWL  37      5.2E11  0.77E11 4.1     1.1     0.34            0.0             
        0.0     0.0     0.0                                                     
```
#### Format and Example<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSJWL  MID     A       B       R1      R2      OMEGA   P0      Q       +       
EOSJWL  37      5.2E11  0.77E11 4.1     1.1     0.34            0.0     +       
```
#### <span></span>

```text
┌───┬─────┬─────┬─────┐
│ + │ a   │ m   │ n   │
├───┼─────┼─────┼─────┤
│ + │ 0.0 │ 0.0 │ 0.0 │
└───┴─────┴─────┴─────┘
```
#### <span></span>

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique equation of state number referenced from MATDEUL. (Integer > 0; Required) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ A         │ Constant A. (Real, 0.0)                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Constant B. (Real, 0.0)                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ R1        │ Constant R1. (Real, 0.0)                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ Ρ 2       │ Constant R2. (Real, 0.0)                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ OMEGA     │ Constant ω. (Real, 0.0)                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ P0        │ Initial pressure. See Remark 3. (Real, 0.0)                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ Q         │ Initial pressure. (Real, ≥ 0.0). see Remark 6.                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ a         │ Initial pressure (Real, 0.0). see Remark 6.                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ m         │ Initial pressure (Real, 0.0). see Remark 6.                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Initial pressure (Real, 0.0). see Remark 6.                                      │
└───────────┴──────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. This equation of state can be used only with Eulerian elements.

2. A  DETSPH  entry must be used to specify the detonation model.

3. This equation of state is discussed in  Dytran Theory Manual , Chapter 4: Models,  EOSJWL – JWL Equation of State .

4. In simulations with ideal gases, the JWL material needs to have an initial pressure to counter balance the pressure of the ideal gas. Similarly, in case of under calculations where an explosive is located at a certain depth,  P0  should be preset to equal the initial hydrostatic pressure.

5. The  DETSPH  definition of one EOSJWL material also applies to all other EOSJWL materials. Therefore, the blast wave of one explosive can ignite other explosives. To prevent this linked ignition,  PARAM , JWLDET , NOLINK  can be used.

6. By default the constants  a,m,n  and  Q  are zero, and afterburning is not taken into account. To model afterburning all the variables  Q, a, m  and  n  have to be set to positive constants. The extent of the afterburning can be checked by requesting the Euler element variable AFTERBURN. This variable equals  ![bulkde03526.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03526.jpg?_LANG=enus) . If the afterburning in an Euler element is complete then AFTERBURN = 1.0.

