## [PSOLID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSOLID.xhtml) - Properties of Solid Elements

Defines the properties of solid elements (CHEXA, CPENTA, CPYRAM and CTETRA entries).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSOLID  PID     MID     CORDM   IN      STRESS  ISOP    FCTN                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSOLID  2       100     6       TWO     GRID    REDUCED PORO                    
```
```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)     │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT1, MAT4, MAT5,      │                                                 │
│           │ MAT9, MAT10, MATHP, MATPE1, or MATHE entry.       │                                                 │
│           │ (Integer > 0)                                     │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ CORDM     │ Identification number of the material coordinate  │                                                 │
│           │ system. See Remarks 3. and 4. (Integer;           │                                                 │
│           │ Default = 0, which is the basic coordinate        │                                                 │
│           │ system; see Remark 3.)                            │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ IN        │ Integration network. See Remarks 6., 7., 8., and  │                                                 │
│           │ 10. (Integer; Character, or blank)                │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ STRESS    │ Location selection for stress output. See Remarks │                                                 │
│           │ 9. and 10. (Integer; Character, or blank)         │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ ISOP      │ Integration scheme. See Remarks 6., 7., 8., and   │                                                 │
│           │ 10. (Integer; Character, or blank)                │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ FCTN      │ Fluid/Structure/Poroelastic element flag.         │                                                 │
│           │ (Character or blank; Default="SMECH")             │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ "FFLUID"                                          │ indicates a fluid element with frequency        │
│           │                                                   │ dependent rigid absorber properties             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ "PFLUID"                                          │ indicates a fluid element                       │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ "SMECH"                                           │ indicates a structural element                  │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ "PORO"                                            │ indicates an element of poroelastic medium, see │
│           │                                                   │ Remark 12.                                      │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ "PSLDSHL"                                         │ indicates an Actran structural solid-shell      │
│           │                                                   │ element, see Remark 13.                         │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```
#### Remarks:

1. PSOLID is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PSOLID property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PSOLID, PCOMPLS entries.

2. Isotropic (MAT1 or MAT4), anisotropic (MAT5 or MAT9), or fluid (MAT10) material properties may be referenced. If FCTN = “PFLUID” or “FFLUID”, then MID must reference a MAT10 entry. PFLUID and FFLUID are not available for SOL 700.

3. See the CHEXA, CPENTA, or CTETRA entry for the definition of the element coordinate systems. The material coordinate system (CORDM) may be the basic system (0 or blank), any defined system (Integer > 0), or the standard internal coordinate system of the element based on eigenvalue techniques to insure non bias in the element formulation designated as element coordinate system
(-1) or the element system (-2). The default value for CORDM is zero unless it is overridden by the NASTRAN statement with the CORDM keyword. When MAT9 entry is used, the coordinate system used effects the stiffness calculation of the element.

4. For the CPYRAM entry the element coordinate system is the same as the basic coordinate system. CORDM values of 0, -1, -2 or blank are treated to be identical to the basic coordinate system.

5. Advanced nonlinear solid elements identified through an additional PSLDN1 entry, or SPROPMAP > -1 in NLMOPTS, or IDAMP>0 in NLSTEP, and so on, in SOL 400 do not support: IN, ISOP, and FCTN. Also, in this case, CORDM=-1 is only supported for CHEXA elements. Fatal error is issued if CORDM < 0 is used for CPENTA and CTETRA.

 The following Remarks, DO NOT APPLY TO SOL 700.

6. For CHEXA and CPENTA elements with no midside nodes, reduced shear integration with bubble functions (ISOP = blank or “REDUCED” and IN = blank or “BUBBLE”) is the default. This is recommended because it minimizes shear locking and Poisson’s ratio locking and does not cause modes of deformation that lead to no strain energy. The effects of using nondefault values are as follows:

a. IN = “THREE” or 3 produces an overly stiff element.

b. If IN = “TWO” or 2 and the element has midside nodes, modes of deformation may occur that lead to no strain energy.

c. Standard isoparametric integration (ISOP = “FULL” or 1 and IN = “TWO” or 2; or “THREE” or 3) produces an element overly stiff in shear. This type of integration is more suited to nonstructural problems.

d. In SOL105 the default reduced integration scheme often produces spurious modes in which case it is recommended that ISOP="FULL" and IN="THREE" be used.

7. IN = “BUBBLE” is not allowed for CTETRA elements or for CHEXA and CPENTA elements with midside nodes.

8. If you use IN = “BUBBLE” for CTETRA elements, NASTRAN internally switch to IN=2 if you have 4-noded CTETRA element and IN=3 greater than 4 nodes.

9. Stress output may be requested at the Gauss points (STRESS = “GAUSS” or 1) of linear CHEXA and CPENTA elements (i.e. elements with no midside nodes). Gauss point output is available for the linear and quadratic CTETRA and CPYRAM elements (i.e. elements with or without midside nodes).

10. The following tables indicate the allowed options and combination of options. If a combination not found in the table is used, then a warning message will be issued and default values will be assigned for all options.

11. The gauss point locations for the solid elements are documented in  Nonlinear Analysis   in the  MSC Nastran Reference Guide.

12. PSOLID entry with FCTN="PORO" must select MATPE1 identification number in MID field and should be used only for trim component under 'BEGIN TRMC=trimid'.

```text
┌──────────────┬─────────────────┬──────────────────┐
│ CHEXA        │ Integration     │ IN               │
├──────────────┼─────────────────┼──────────────────┤
│ SOLs 106,    │ SOL 700         │                  │
│ 129, 400     │                 │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 8 Node       │ 2x2x2 Reduced   │ BUBBLE or Blank  │
│              │ Shear with      │ or 0 (Default)   │
│              │ Bubble Function │                  │
│              │ (default)       │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 2x2x2        │ TWO or 2        │                  │
│ Reduced      │                 │                  │
│ Shear Only   │                 │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 2x2x2        │ FULL or 1       │ No               │
│ Standard Iso │                 │                  │
│ parametric   │                 │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 3x3x3        │ THREE or 3      │ Blank or GRID    │
│ Reduced      │                 │                  │
│ Shear Only   │                 │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 3x3x3        │ FULL or 1       │ No               │
│ Standard Iso │                 │                  │
│ parametric   │                 │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 9--20 Node   │ 2x2x2 Reduced   │ TWO or 2         │
│              │ Shear Only      │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 2x2x2        │ FULL or 1       │ No               │
│ Standard Iso │                 │                  │
│ parametric   │                 │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 3x3x3        │ Blank or THREE  │ Blank or REDUCED │
│ Reduced      │ or 3 (Default)  │ (Default*)       │
│ Shear Only   │                 │                  │
│ (default)    │                 │                  │
├──────────────┼─────────────────┼──────────────────┤
│ 3 x3x3       │ FULL or 1       │ No               │
│ Standard Iso │                 │                  │
│ parametric   │                 │                  │
├──────────────┼─────────────────┼──────────────────┤
│ *REDUCED is  │                 │                  │
│ the default  │                 │                  │
│ only for     │                 │                  │
│ structural   │                 │                  │
│ elements (FC │                 │                  │
│ TN=“SMECH”). │                 │                  │
│ ** Requires  │                 │                  │
│ PARAM,MRALIA │                 │                  │
│ S            │                 │                  │
└──────────────┴─────────────────┴──────────────────┘
```
```text
┌──────────────┬─────────────────┐
│ CPENTA       │ Integration     │
├──────────────┼─────────────────┤
│ SOLs 106,    │ SOL 700         │
│ 129, 400     │                 │
├──────────────┼─────────────────┤
│ 6 Node       │ 2x3 Reduced     │
│              │ Shear with      │
│              │ Bubble Function │
│              │ (Default)       │
├──────────────┼─────────────────┤
│ 2x3 Reduced  │ TWO or 2        │
│ Shear Only   │                 │
├──────────────┼─────────────────┤
│ 2x3 Standard │ FULL or 1       │
│ Isoparametri │                 │
│ c            │                 │
├──────────────┼─────────────────┤
│ 3x7 Reduced  │ THREE or 3      │
│ Shear Only   │                 │
├──────────────┼─────────────────┤
│ 3x7 Standard │ FULL or 1       │
│ Isoparametri │                 │
│ c            │                 │
├──────────────┼─────────────────┤
│ 7-15 Node    │ 2x3 Reduced     │
│              │ Shear Only      │
├──────────────┼─────────────────┤
│ 2x3 Standard │ FULL or 1       │
│ Isoparametri │                 │
│ c            │                 │
├──────────────┼─────────────────┤
│ 3x7 Reduced  │ Blank or THREE  │
│ Shear Only   │ or 3 (Default)  │
│ (default)    │                 │
├──────────────┼─────────────────┤
│ 3x7 Standard │ FULL or 1       │
│ Isoparametri │                 │
│ c            │                 │
├──────────────┼─────────────────┤
│ ** Requires  │                 │
│ PARAM,MRALIA │                 │
│ S            │                 │
├──────────────┼─────────────────┤
│ *REDUCED is  │                 │
│ the default  │                 │
│ only for     │                 │
│ structural   │                 │
│ elements (FC │                 │
│ TN=“SMECH”). │                 │
└──────────────┴─────────────────┘
```
```text
┌──────────────┬──────────────────┐
│ CTETRA       │ Integration      │
├──────────────┼──────────────────┤
│ SOLs 106,    │ SOL 700          │
│ 129, 400     │                  │
├──────────────┼──────────────────┤
│ 4 Node       │ 1-Point Standard │
│              │ Isoparametric    │
│              │ (Default)        │
├──────────────┼──────────────────┤
│ 5-Point      │ THREE or 3       │
│ Standard Iso │                  │
│ parametric   │                  │
├──────────────┼──────────────────┤
│ 5-10 Node    │ 5-Point Standard │
│              │ Isoparametric    │
├──────────────┼──────────────────┤
│ **Requires P │                  │
│ ARAM,MRALIAS │                  │
└──────────────┴──────────────────┘
```
Table 0-30  

```text
┌──────────────┬──────────────────┬────────────────┐
│ CPYRAM       │ Integration      │ IN             │
├──────────────┼──────────────────┼────────────────┤
│ SOL 400      │ SOL 700          │                │
├──────────────┼──────────────────┼────────────────┤
│ 5 Node       │ 5-Point Standard │ Not applicable │
│              │ Isoparametric    │                │
│              │ (Default)        │                │
├──────────────┼──────────────────┼────────────────┤
│ 5-Point      │ Not applicable   │ Blank or GRID  │
│ Standard Iso │                  │                │
│ parametric   │                  │                │
├──────────────┼──────────────────┼────────────────┤
│ 13 Node      │ 8-Point Standard │ Not applicable │
│              │ Isoparametric    │                │
└──────────────┴──────────────────┴────────────────┘
```
CPYRAM Entry Options

13. PSOLID entry with FCTN="PSLDSHL" must select MAT1 identification number in MID field and should be used for trim component under 'BEGIN TRMC=trimid' only. An Actran solid-shell is used to model transverse solid elements, with a thickness direction. Actran's shell element library features this unique proprietary formulation ensuring that no thickness locking and no shear locking effects occur, even for very thin solid shells. Each node supports three translational degrees of freedom (displacements along x, y and z directions).

