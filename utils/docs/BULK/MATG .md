## [MATG ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATG.xhtml) - Gasket Material Properties

Specifies gasket material properties to be used in SOL 400.

#### Format:

```text
┌──────┬────────┬────────┬─────────┬────────┬────────┬─────────┬────────┬────────┬────┐
│ 1    │ 2      │ 3      │ 4       │ 5      │ 6      │ 7       │ 8      │ 9      │ 10 │
├──────┼────────┼────────┼─────────┼────────┼────────┼─────────┼────────┼────────┼────┤
│ MATG │ MID    │ IDMEM  │ BEHAV   │ TABLD  │ TABLU1 │ TABLU2  │ TABLU3 │ TABLU4 │    │
├──────┼────────┼────────┼─────────┼────────┼────────┼─────────┼────────┼────────┼────┤
│      │ TABLU5 │ TABLU6 │ TABLU7  │ TABLU8 │ TABLU9 │ TABLU10 │ YPRS   │ EPL    │    │
├──────┼────────┼────────┼─────────┼────────┼────────┼─────────┼────────┼────────┼────┤
│      │ GPL    │ GAP    │ TABYPRS │ TABEPL │ TABGPL │ TABGAP  │ N/A    │ N/A    │    │
└──────┴────────┴────────┴─────────┴────────┴────────┴─────────┴────────┴────────┴────┘
```
#### Example:

```text
┌──────┬──────┬─────┬───┬──────┬──────┬──────┬──────┬───────┐
│ MATG │ 100  │ 10  │ 0 │ 1001 │ 1002 │ 1003 │      │       │
├──────┼──────┼─────┼───┼──────┼──────┼──────┼──────┼───────┤
│      │      │     │   │      │      │      │ 100. │ 2500. │
├──────┼──────┼─────┼───┼──────┼──────┼──────┼──────┼───────┤
│      │ 950. │ 0.0 │   │      │      │      │      │       │
└──────┴──────┴─────┴───┴──────┴──────┴──────┴──────┴───────┘
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material ID number. (Integer)                                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDMEM     │ ID of MAT1 providing material behavior for membrane behavior. See Remarks. (Integer)             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHAV     │ Behavior type (presently only type 0 is supported). (Integer)                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABLD     │ ID of a TABLES1 table providing loading path of the gasket (pressure versus displacement). See   │
│           │ Remarks 1. and 3. (Integer)                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABLUi    │ ID of TABLES1 table providing unloading path(s) of the gasket (pressure versus displacement) can │
│           │ range from 1 to 10. If there is no unloading, no unloading tables need be entered. Leave fields  │
│           │ blank for tables that are not required. See Remarks. (Integer)                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YPRESS    │ Yield pressure. See Remark 4. (Real)                                                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPL       │ Tensile modulus (pressure per unit length). (Real)                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GPL       │ Transverse shear modulus (force per unit area). (Real)                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GAP       │ Initial gap (if present). (Real)                                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABYPRS   │ ID of TABLES1 table associated with yield pressure (not presently used). (Integer)               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABEPL    │ ID of TABLES1 table associated with tensile modulus (not presently used). (Integer)              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABGPL    │ ID of TABLES1 table associated with transverse shear modulus (not presently used). (Integer)     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABGAP    │ ID of TABLES1 table associated with initial gap (not presently used). (Integer)                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. MATG defines nonlinear properties in the thickness direction for compression only, designed for gasket-like materials. MATG has anisotropy only in the thickness direction, which is called normal anisotropy.

2. The MATG option can only be used with continuum composite elements, use PLCOMP.

3. The MATG entry defines the compressive behavior in thickness. The thickness direction is the principal direction (3) in 3-dimensional solids and (2) for 2-dimensional solids (plane strain and axisymmetric elements). Since MATG material allows only normal anisotropy, linear properties in MAT1 are required for in-plane behavior.

4. The initial yield pressure should match a point in table TABLD.

5. The loading path for the gasket is always in compression. However, it starts from the origin to initial yield pressure (nonlinear elastic range) and continues with strain hardening slope into the plastic region. All the data points are specified in the first quadrant.

6. As many as 10 unloading paths may be defined in the thickness direction using TABLS1 in pressure vs. gasket closure distance as in the loading path. All the unloading paths must start from zero pressure and end at the loading path in the plastic region. Unloading behavior at undefined paths will be interpolated between two adjacent unloading paths. The last point of the last specified unloading path signifies full compression, which does not allow any further closure beyond the point.

Element Thickness Direction for MATG

Runs Parallel from Face

To Face

Element T direction

G1-G2-G3-G4

G5-G6-G7-G8

--------------------

![bulkno05323.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05323.jpg?_LANG=enus)

Figure 0-60 Pressure-closure Relation of a Gasket

7. See associated MATTG entry for temperature variation of these properties.

8. All continuation cards must be entered.

9. MID, IDMEM, BEHAV, TABLD, TABLU1, YPRS, EPL and GPL must be non-zero.

10. Each unloading curve must begin with gasket pressure of 0.0. Subsequent unloading curves must start with larger closure distances (when gasket pressure is 0.0) than previous unloading curves.

11. Points on loading and unloading curves must be defined in order of increasing gasket pressure.

12. MATG may be referenced by “solid” composite elements only, via PCOMPLS linked to PSOLID and PSHLN2 linked to PLPLANE.

13. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

14. Result data recovery is not supported in SOL 400 when ANALSYS=MODES, MFREQ or DFREQ.

