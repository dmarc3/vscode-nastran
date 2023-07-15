## [PSHLN2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSHLN2.xhtml) - Nonlinear Property Extensions for a PLPLANE Entry

Specifies additional nonlinear properties for plane strain, plane stress, or axisymmetric elements that point to a PLPLANE entry in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHLN2  PID     MID     DIRECT  T       ANAL                                    
        “C3”    BEH3    INT3    BEH3H   INT3H                                   
        “C4”    BEH4    INT4    BEH4H   INT4H                                   
        “C6”    BEH6    INT6    BEH6H   INT6H                                   
        “C8”    BEH8    INT8    BEH8H   INT8H                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHLN2  22      98                                                              
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of an existing PLPLANE entry. (Integer > 0)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. Remarks 13. (Integer > 0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIRECT    │ The layer direction for BEHi=COMPS or AXCOMP. See Remark 6. (Integer = 1 or 2; Default = 1)        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ A thickness. (Real; Default = 1.0)                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAL      │ Analysis type. ANAL = ‘IS’ - Implicit structural elements are being referred to. ANAL = ‘IH’ -     │
│           │ Implicit heat analysis elements are being referred to. ANAL = ‘ISH’ - Implicit structural and heat │
│           │ elements are being referred to. (Character Default ISH)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C3        │ Keyword indicating that two items following apply to elements with three corner grids. (Character) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C4        │ Keyword indicating that two items following apply to elements with four corner grids. (Character)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C6        │ Keyword indicating that two items following apply to elements with three corner grids and three    │
│           │ midside grids. (Character)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C8        │ Keyword indicating that two items following apply to elements with four corner grids and four      │
│           │ midside grids. (Character)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHi      │ Element structural behavior. See Remark 7. (Character Default: PLSTRN for BEH3, BEH4, BEH6, and    │
│           │ BEH8)                                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTi      │ Integration scheme. See Remarks 7. and 10. (Character Default: L for INT3, INT4, Q for INT6 and    │
│           │ INT8)                                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHiH     │ Element heat behavior. See Remark 9. (Character Default: PLSTRN for BEH3H, BEH4H, BEH6H, and       │
│           │ BEH8H.                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTiH     │ Integration scheme. See Remarks 9. and 10. (Character Default: L for INT3H, L for INT4H, Q for     │
│           │ INT6H and INT8H)                                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The PID must point to an existing PLPLANE Bulk Data entry and is honored only in SOL 400. Since these are additional nonlinear properties to the PLPLANE, the PLPLANE must still have an associated MATHP.

2. It is REQUIRED to override the MID value on the PLPLANE entry.

3. The element must lie in the x-y plane of the basic system. The CID field of the PLPLANE entry is not valid for this entry.

4. The MID entry may point to MAT1, MAT3, MATHORT, MATHE, MATG or MATSMA entry and MUST be used to override the MID field on a PLPLANE entry. The following table shows associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

     Caution: The primary MAT1, MAT3, MAT8, MATORT, MATHE, and MATG entries and the secondary MATVE, MATVP, MATEP, MATF, MATS1, MATS3, MATS8, and MATSORT entries are only associated with a 2D or axisymmetric (CQUAD4, CQUAD, CQUAD8, CTRIA3, or CTRIA6) or (CTRIAX or CQUADX) element if the element refers to a PSHLN2 entry.

```text
┌──────────────┬─────────┐
│ Implicit     │         │
│ Structural   │         │
│ Materials    │         │
├──────────────┼─────────┤
│ MAT1         │ MAT2    │
├──────────────┼─────────┤
│ MATVE        │ <MATVE> │
├──────────────┼─────────┤
│ MATVP        │ MATVP   │
├──────────────┼─────────┤
│ MATEP        │ MATEP   │
├──────────────┼─────────┤
│ MATF         │ MATF    │
├──────────────┼─────────┤
│ MATS1        │         │
├──────────────┼─────────┤
│ <MATVE>      │         │
│ refers to    │         │
│ the          │         │
│ ALTERNATE    │         │
│ format for   │         │
│ type ORTHO   │         │
│ MAT1         │         │
│ applicable   │         │
│ to all BEHi  │         │
│ codes of 7   │         │
│ below,       │         │
│ except COMPS │         │
│ and AXCOMP.  │         │
├──────────────┼─────────┤
│ MAT3         │         │
│ axisymmetric │         │
│ orthotropic  │         │
│ applicable   │         │
│ only to      │         │
│ BEHi=AXSOLID │         │
│ code of 7    │         │
│ below.       │         │
├──────────────┼─────────┤
│ MAT8         │         │
│ orthotropic  │         │
│ applicable   │         │
│ only to      │         │
│ BEHi=PSTRS   │         │
│ code of 7    │         │
│ below.       │         │
├──────────────┼─────────┤
│ MATG for     │         │
│ BEH4=COMPS   │         │
│ or AXCOMP,   │         │
│ INT4=L only. │         │
│ MATG has an  │         │
│ associated   │         │
│ field IDMEM  │         │
│ that points  │         │
│ to a MAT1.   │         │
├──────────────┼─────────┤
│ With MATHE,  │         │
│ MATHP, and   │         │
│ MAT1 (with   │         │
│ MATS1 or     │         │
│ MATEP)       │         │
│ BEH3=IPS or  │         │
│ IAX with     │         │
│ INT3=L is    │         │
│ recommended. │         │
└──────────────┴─────────┘
```
Heat Materials

MAT4

MAT5

--------------------

```text
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ If heat analysis is being performed and the user wishes to override standard Nastran heat elements, the ANAL entry must be set to IH or ISH. If ISH is specified then the MAT1 and MAT4 or MAT1 and MAT5 must have the same ID. MID for structure entries must follow the uniqueness rules of the MAT1, MAT2, MAT3, MAT8, MAT9, MATORT, MATHP, MATHE, and MATG entries. MID for heat entries must follow the uniqueness rules of the MAT4 and MAT5 entries. The CTRIAX6 remains a valid nonlinear heat transfer element BUT cannot be used in conjunction with this entry because it lies in an x-z plane and not an x-y plane. │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
5. The keyword entries may occur in any order or not at all. If a keyword entry is missing, its defaults are assumed.

6. The following table describes layer orientation for BEHi=COMPS or AXCOMP.

```text
┌─────────────┬──────────────────────┐
│ Layer       │                      │
│ Orientation │                      │
├─────────────┼──────────────────────┤
│ DIRECT      │ Normal to Layer edge │
├─────────────┼──────────────────────┤
│ 1           │ Element Y direction  │
├─────────────┼──────────────────────┤
│ 2           │ Element X direction  │
└─────────────┴──────────────────────┘
```
*

7. In the following table, BEHi refers to the nonlinear structural behavior of 2D-solid elements. An  underlined  item delineates a default.

B

```text
┌──────────────┬───────────┐
│ Structural C │           │
│ lassificatio │           │
│ n of         │           │
│ Elements     │           │
├──────────────┼───────────┤
│ Element      │ BEHi CODE │
│ Structural   │           │
│ Type         │           │
├──────────────┼───────────┤
│ Plane Stress │ PSTRS     │
├──────────────┼───────────┤
│ Plane Strain │ PLSTRN    │
├──────────────┼───────────┤
│ Plane Strain │ COMPS     │
│ composite    │           │
├──────────────┼───────────┤
│ Axisymmetric │ AXSOLID   │
│ Solid        │           │
├──────────────┼───────────┤
│ Axisymmetric │ AXCOMP    │
│ Composite    │           │
├──────────────┼───────────┤
│ Incompressib │ IPS       │
│ le Plane     │           │
│ Strain       │           │
├──────────────┼───────────┤
│ Incompressib │ IAX       │
│ le           │           │
│ Axisymmetric │           │
├──────────────┼───────────┤
│ Only BEH4 =  │           │
│ COMPS or     │           │
│ AXCOMP with  │           │
│ INT4 = L may │           │
│ use the      │           │
│ MATG,        │           │
│ additionally │           │
│ they should  │           │
│ not use a    │           │
│ MAT1, MAT2,  │           │
│ MAT3, MAT8,  │           │
│ MATORT, or   │           │
│ MATHE as     │           │
│ they will    │           │
│ suffer from  │           │
│ hourglassing │           │
│ .            │           │
└──────────────┴───────────┘
```
8. Note for this entry with a BEHi=COMPS or AXCOMP, the THETA/MCID value on the element connection entry will be ignored.

9. In the table below, BEHiH refers to the nonlinear heat behavior of 2D-solid elements. An underlined item delineates a default.

```text
┌──────────────┬────────────┐
│ Heat Classif │            │
│ ication of   │            │
│ Elements     │            │
├──────────────┼────────────┤
│ Element Heat │ BEHiH CODE │
│ Type         │            │
├──────────────┼────────────┤
│ Planar Solid │ PLSTRN     │
├──────────────┼────────────┤
│ Axisymmetric │ AXSOLID    │
│ Solid        │            │
└──────────────┴────────────┘
```
10. Integration codes in Remarks   and   are:

B

```text
┌──────────┬───────────────────────────────────────────────────────────────┐
│ INT CODE │ Integration Type                                              │
├──────────┼───────────────────────────────────────────────────────────────┤
│ L        │ Linear                                                        │
├──────────┼───────────────────────────────────────────────────────────────┤
│ LRIH     │ Linear Reduced Integration Hourglass Control (assumed strain) │
├──────────┼───────────────────────────────────────────────────────────────┤
│ Q        │ Quadratic                                                     │
├──────────┼───────────────────────────────────────────────────────────────┤
│ QRI      │ Quadratic Reduced Integration                                 │
├──────────┼───────────────────────────────────────────────────────────────┤
│ QT       │ Quadratic with Twist                                          │
├──────────┼───────────────────────────────────────────────────────────────┤
│ LT       │ Linear with Twist                                             │
└──────────┴───────────────────────────────────────────────────────────────┘
```
11. For creep material defined through MATVP, VALC=0 must be set on NLMOPTS, for explicit formulation.

12. For shape memory materials defined through MATSMA, only the thermo-mechanical model is available.

13. The structural element damping coefficient, GE, is not supported on elements which reference PSHLN2.

