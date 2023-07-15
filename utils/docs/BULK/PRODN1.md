## [PRODN1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PRODN1.xhtml) - Nonlinear Property Extensions for a PROD Entry

Specifies additional nonlinear properties for elements that point to a PROD entry in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRODN1  PID     MID                     ANAL                                    
        “C2”    BEH2    INT2    BEH2H   INT2H                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PRODN1  22      98                                                              
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of an existing PROD entry. (Integer > 0)                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. Remarks 7.(Integer > 0)                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAL      │ Analysis type. ANAL=‘IS’ - Implicit structural elements are being referred to. ANAL=‘IH’ -       │
│           │ Implicit heat analysis elements are being referred to. ANAL=‘ISH’ - Implicit structural and heat │
│           │ elements are being referred to. (Character Default ISH).                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C2        │ Keyword indicating that items following apply to elements with two end grids. (Character)        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEH2      │ Element structural behavior. See Remark 4. (Character Default ROD)                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT2      │ Integration scheme. See Remarks 4. and 5. (Character Default L)                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEH2H     │ Element heat behavior. See Remark 4. (Character Default ROD)                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT2H     │ Integration scheme. See Remarks 4. and 5. (Character Default L)                                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The PID above must point to an existing PROD Bulk Data entry and is honored only in SOL 400.

2. MID if blank (or 0) use the MID value on the PROD entry. If > 0 it will override the MID value on the PROD.

3. The MID entry may point to the MAT1 entry. The following table shows associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
Caution:The M...
```
     The MID entry for nonlinear heat may point to MAT4 or MAT5 entries.

```text
┌───────────────────────────────┐
│ Implicit Structural Materials │
├───────────────────────────────┤
│ MAT1                          │
├───────────────────────────────┤
│ MATVE                         │
├───────────────────────────────┤
│ MATVP                         │
├───────────────────────────────┤
│ MATEP                         │
├───────────────────────────────┤
│ MATF                          │
├───────────────────────────────┤
│ MATS1                         │
└───────────────────────────────┘
```
```text
┌───────────┬──────┐
│ Heat      │      │
│ Materials │      │
├───────────┼──────┤
│ MAT4      │ MAT5 │
└───────────┴──────┘
```
```text
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ If heat analysis is being performed and the user wishes to override standard Nastran heat elements, the ANAL entry must be set to IH or ISH. If ISH is specified then the MAT1 and MAT4 or MAT1 and MAT5 must have the same ID. MID for structure entries must follow the uniqueness rules of the MAT1, MAT2, MAT3, MAT8, MAT9, MATORT, MATHP, MATHE, and MATG entries. MID for heat entries must follow the uniqueness of the MAT4 and MAT5 entries. │
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
4. BEH2/BEH2H refers to the nonlinear structural/heat behavior of the ROD element. An  underlined  item delineates default.

Structural/Heat Classification of Elements

Element Structural/Heat Type

BEH2/BEH2H CODE

Integration Code

Element Type

# Nodes

Rod

ROD

L

ROD

2

--------------------

5. Integration codes in Remark   are:

INT CODE

Integration Type

L

Linear

--------------------

6. Any J, C, or NSM value on the PROD will be ignored.

7. The structural element damping coefficient, GE, is not supported on elements which reference PRODN1.

