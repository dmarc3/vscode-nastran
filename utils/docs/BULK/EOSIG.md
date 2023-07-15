## [EOSIG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EOSIG.xhtml) - Ignition and Growth Equation of State - SOL 700 only

Defines the properties of Ignition and Growth equation of state and the reaction rate equation used to model high explosives. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSIG   EID     UNITDEF DBEXPL  UNITCNV                                 +       
+               AE      BE      R1E     R2E     OMGE    I       G       +       
+       A       AP      BP      R1P     R2P     OMGP    X       Y       +       
+       Z       R       ECHEM   PRSTOL  ITRMAX                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSIG   10              LX17    SI                                              
```
```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ EID       │ Unique equation of state number referenced from   │                                         │
│           │ MATDEOL. (Integer > 0; Required)                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ UNITDEF   │ User-defined default unit for the inputs: See     │                                         │
│           │ Remarks 2. and 3. (Character)                     │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ CCGMS                                             │ m/g/ units                              │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ SI                                                │ International System units              │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ METRIC                                            │ Metric units                            │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ IMPER                                             │ imperial units                          │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ MMMG                                              │ mm/mg/ units                            │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ DBEXPL    │ Use explosive material from the database (See     │                                         │
│           │ Remarks 4. and 6.) (Character, NO). The following │                                         │
│           │ detonation materials are available in the data    │                                         │
│           │ base:                                             │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ NO                                                │ The database is not used. See Remark 5. │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ P94A                                              │ PBX-9404 (a) explosive                  │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ TATB                                              │ TATB explosive                          │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ PENT                                              │ PETN explosive                          │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ CTNT                                              │ Cast TNT explosive                      │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ LCOMPB                                            │ LANL COMP B explosive                   │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ MCOMPB                                            │ Military COMP B explosive               │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ P94B                                              │ PBX-9404 (b) explosive                  │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ LX17                                              │ LX-17 explosive                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ UNITCNV   │ User defined conversion units:  (Character; see   │                                         │
│           │ Remarks 2. and 3.)                                │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ CGMS                                              │ cm/g/ units                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ SI                                                │ International System units              │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ METRIC                                            │ Metric units                            │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ IMPER                                             │ Imperial units                          │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│           │ MMMGS                                             │ mm/mg/ units                            │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ AE        │ Constant  for un-reacted explosive. See Remark 5. │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ BE        │ Constant  for un-reacted explosive. See Remark 5. │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ R1E       │ Constant  for un-reacted explosive. See Remark 5. │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ R2E       │ Constant  for un-reacted explosive. See Remark 5. │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ OMGE      │ Constant  for un-reacted explosive                │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ I         │ First ignition coefficient. See Remark 5. (Real;  │                                         │
│           │ Required)                                         │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ G         │ Second ignition coefficient. See Remark 5. (Real; │                                         │
│           │ Required)                                         │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ A         │ Density ignition coefficient. See Remark 5.       │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ AP        │ Constant Ap for reacted product. See Remark 5.    │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ BP        │ Constant Bp for reacted product. See Remark 5.    │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ R1P       │ Constant R1p for reacted product. See Remark 5.   │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ R2P       │ Constant R2p for reacted product. See Remark 5.   │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ OMGP      │ Constant  for reacted product. See Remark 5.      │                                         │
│           │ (Real; Required)                                  │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ X         │ Surface burning exponent. See Remark 5. (Real,    │                                         │
│           │ 2./9.)                                            │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ Y         │ Surface burning exponent. See Remark 5. (Real,    │                                         │
│           │ 2./3.)                                            │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ Z         │ Pressure exponent. See Remark 5. (Real; Required) │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ R         │ Relative density exponent. See Remark 5. (Real,   │                                         │
│           │ .4)                                               │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ ECHEM     │ Chemical energy of high explosive per unit mass.  │                                         │
│           │ See Remark 5. (Real; Required)                    │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ PRSTOL    │ Tolerance for pressure equilibrium iterations in  │                                         │
│           │ mixed phase elements. (Real > 0, 1.E-6)           │                                         │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────┤
│ ITRMAX    │ Maximum number of iterations in pressure          │                                         │
│           │ equilibrium iterations. (Integer > 0, 16)         │                                         │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────┘
```
#### Remarks:

1. This equation of state can only be used with solid Eulerian elements.

2. The definition of the unit system in which the input values are defined is required information only in case you wish to have an automatic conversion to a different unit system as defined by the UNITCNV field. In case you are using the conversion mechanism, note that the density RHO in the corresponding MATDEUL entry will be interpreted in the unit system defined here.   defines sets of units available:

```text
┌─────────────┬──────────────────┬───────────────┬─────────────────┬───────────────────┬──────────────────┐
│ Quantity    │ CGµs             │ SI            │ Metric          │ Imperial          │ MMMGµs           │
├─────────────┼──────────────────┼───────────────┼─────────────────┼───────────────────┼──────────────────┤
│ Length      │ Centimeter (cm)  │ Meter (m)     │ Centimeter (cm) │ Inch (in)         │ Millimeter (mm)  │
├─────────────┼──────────────────┼───────────────┼─────────────────┼───────────────────┼──────────────────┤
│ Time        │ Microsecond (µs) │ Second (s)    │ Second (s)      │ Second (s)        │ Microsecond (µs) │
├─────────────┼──────────────────┼───────────────┼─────────────────┼───────────────────┼──────────────────┤
│ Mass        │ Gram (g)         │ Kilogram (kg) │ Gram (g)        │ Slug (lbf-s2/in)  │ Milligram (mg)   │
├─────────────┼──────────────────┼───────────────┼─────────────────┼───────────────────┼──────────────────┤
│ Force       │ Teradyne         │ Newton (N)    │ Dyne            │ Pound force (lbf) │ kN               │
├─────────────┼──────────────────┼───────────────┼─────────────────┼───────────────────┼──────────────────┤
│ Density     │ g/cm3            │ Kg/m3         │ g/cm3           │ lbf-s2/in4        │ mg/ mm3          │
├─────────────┼──────────────────┼───────────────┼─────────────────┼───────────────────┼──────────────────┤
│ Stress      │ Mbar             │ Pascal (Pa)   │ µbar            │ Lbf/in2           │ GPa              │
├─────────────┼──────────────────┼───────────────┼─────────────────┼───────────────────┼──────────────────┤
│ Energy      │ 1012 erg (Mbars- │ Joule (J)     │ Erg             │ Lbf-in            │ J                │
│             │ cm3)             │               │                 │                   │                  │
├─────────────┼──────────────────┼───────────────┼─────────────────┼───────────────────┼──────────────────┤
│ Temperature │ Kelvin (K)       │ Kelvin (K)    │ Kelvin (K)      │ Kelvin (K)        │ Kelvin (K)       │
└─────────────┴──────────────────┴───────────────┴─────────────────┴───────────────────┴──────────────────┘
```
3. The UNITCNV field defines the unit system to which the material parameters are converted. In case you are not using one of the database material models, you also have to define the default unit system (UNITDEF) in which you supplied the data.

4. You can use the database containing several detonation materials to start the analysis. The material data are taken from Lee/Tarver (Ref. 1) and Murphy/Lee (Ref. 2) papers in the Theory Manual. The equations of state parameters are given in the  .

5. The default setting for DBEXPL is NO, which means you should define the values in the input fields (fields 12 to 36). If the database material name is defined, all values in the input fields will be overridden. The reference density RHO defined on the corresponding MATDEUL entry will be set to the value from the database.

6. The default unit system for the material database parameters is the CGMS unit system. If you wish to use the material base data in a different unit system, you can specify this by defining the target unit system in the UNITCNV field.

7. You can define the shear property and yield model of the material with respectively SHXXX and YLDXX entry. Note that the unit system of data required in these entries should be consistent with the unit system defined in the UNITCNV field.

8. The IG equation of state cannot be used in combination with a spallation model.

9. The following JWL equation of state is used to calculate the pressure of the un-reacted explosive (in “solid” state):

     ![bulkde03472.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03472.jpg?_LANG=enus)  

     where:

```text
┌──────────────────────────────────────────────────┐
│ the relative density of the unreacted explosive. │
├──────────────────────────────────────────────────┤
│ the specified internal energy per unit mass of   │
│ the unreacted explosive                          │
├──────────────────────────────────────────────────┤
│ the initial density of the explosive             │
├──────────────────────────────────────────────────┤
│ the input constants of the unreacted explosive   │
└──────────────────────────────────────────────────┘
```
     Similarly, the pressure in the reaction products (in “gas” state) is defined by another JWL form as follows:

     ![bulkde03482.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03482.jpg?_LANG=enus)  

     where:

```text
┌───┬───────────────────────────────────────────────────┐
│ = │ the relative density of the unreacted explosive   │
├───┼───────────────────────────────────────────────────┤
│ = │ the specified internal energy per unit mass of    │
│   │ the unreacted explosive                           │
├───┼───────────────────────────────────────────────────┤
│ = │ the input constants of the reaction product. The  │
│   │ chemical reaction rate for conversion of un-      │
│   │ reacted explosive to reaction products is         │
│   │ described by the following reaction rate          │
│   │ equation:   here F denotes the burn fraction that │
│   │ is defined as the fraction of the explosive that  │
│   │ has already reacted. For more details concerning  │
│   │ the implementation of this equation of state,     │
│   │ please refer to the Theory Manual                 │
└───┴───────────────────────────────────────────────────┘
```
10. You can access the results of the un-reacted explosive and reaction products for IG elements. These EOSIG specific output variables are

```text
┌─────────┬─────────────────────────────────────────────────────────────────────┐
│ Keyword │ Description                                                         │
├─────────┼─────────────────────────────────────────────────────────────────────┤
│ SIE-E   │ Specific internal energy per unit mass of un-reacted explosive part │
├─────────┼─────────────────────────────────────────────────────────────────────┤
│ SIE-P   │ Specific internal energy per unit mass of reaction products part    │
├─────────┼─────────────────────────────────────────────────────────────────────┤
│ FMAT    │ Volume fraction                                                     │
├─────────┼─────────────────────────────────────────────────────────────────────┤
│ RHO-E   │ Density of un-reacted explosive part                                │
├─────────┼─────────────────────────────────────────────────────────────────────┤
│ RHO-P   │ Density of reaction products part                                   │
├─────────┼─────────────────────────────────────────────────────────────────────┤
│ MASS-E  │ Mass of un-reacted explosive part                                   │
├─────────┼─────────────────────────────────────────────────────────────────────┤
│ MASS-P  │ Mass of reaction products part                                      │
└─────────┴─────────────────────────────────────────────────────────────────────┘
```
     The output variables for the burn fraction are

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBURN   Solid...Burn ...
Euler...Not a...
IGBURN  Solid...Not a...
Euler...Burn ...
```
11. The ignition of IG material can be initiated by:

a. Compression of the IG material in a small region, where the compression originates from outside that region. This is the most physical method to initiate ignition. Examples are a shock wave entering the region, a flow boundary that supplies mass to the region and a plate or other structural part that compresses the region. In all these cases the IG material should be initialized with zero pressures. This can be achieved by not specifying the specific energy on the TICVAL entry that prescribes the initial state of the IG material.  The specific energy will be computed such that the initial pressure is zero.

b. Compression of the IG material in a small region where the compression originates within that region. This can be done by specifying either a density that exceeds the compression limit or a specific energy that gives rise to a sufficiently large pressure.

12. EID must unique among all EOSxx entries in one model .

