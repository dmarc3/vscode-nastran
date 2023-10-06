## [PSLDN1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSLDN1.xhtml) - Nonlinear Property Extensions for a PSOLID Entry

Specifies additional nonlinear properties for solid elements that point to a PSOLID entry in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSLDN1  PID     MID     DIRECT          ANAL                            +       
+       “C4”    BEH4    INT4    BEH4H   INT4H                           +       
+       “C5”    BEH5    INT5    BEH5H   INT5H                           +       
+       “C6”    BEH6    INT6    BEH6H   INT6H                           +       
+       “C8”    BEH8    INT8    BEH8H   INT8H                           +       
+       “C10”   BEH10   INT10   BEH10H  INT10H                          +       
+       “C13”   BEH13   INT13   BEH13H  INT13H                          +       
+       “C15”   BEH15   INT15   BEH15H  INT15H                          +       
+       “C20”   BEH20   INT20   BEH20H  INT20H                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSLDN1  22      55      2                                                       
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of an existing PSOLID entry. (Integer > 0)                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. Remark 8.(Integer > 0)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIRECT    │ The layer direction for BEHi=SLCOMP. See Remark 5. (Integer, 1, 2, OR 3; Default = 1)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAL      │ Analysis type. ANAL = ‘IS’ - Implicit structural elements are being referred to. ANAL = ‘IH’ -     │
│           │ Implicit heat analysis elements are being referred to. ANAL = ‘ISH’ - Implicit structural and heat │
│           │ elements are being referred to. (Character Default ISH)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C4        │ Keyword indicating that two items following apply to elements with four corner grids. (Character)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C5        │ Keyword indicating that two items following apply to elements with five corner grids. (Character)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C8        │ Keyword indicating that two items following apply to elements with eight corner grids. (Character) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C10       │ Keyword indicating that two items following apply to elements with four corner grids and six       │
│           │ midside grids. (Character)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C13       │ Keyword indicating that two items following apply to elements with five corner grids and eight     │
│           │ midside grids. (Character)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C15       │ Keyword indicating that items following apply to elements with six corner and nine midside grids.  │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C20       │ Keyword indicating that two items following apply to elements with eight corner grids and twelve   │
│           │ midside grids. (Character)                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHi      │ Element structural behavior. See Remark 6. (Character default: SOLID for BEH4, BEH6, BEH8, BEH10,  │
│           │ BEH15, and BEH20)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTi      │ Integration scheme. See Remark 7. (Character default: L for INT4, INT6, and INT8; Q for INT10,     │
│           │ INT15, and INT20)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BEHiH     │ Element heat behavior. See Remark 6. (Character Default: SOLID for BEH4H, BEH6H, BEH8H, BEH10H,    │
│           │ BEH15, and BEH20H)                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTiH     │ Integration scheme. See Remark 7. (Character Default: L for INT4H, INT6H, and INT8H; Q for INT10H, │
│           │ INT15H, and INT20H)                                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PID must point to an existing PSOLID Bulk Data entry and is honored only in SOL 400.
2. The MID entry may point to MAT1, MAT9, MATORT, MATHE, or MATG entries and can be used to override the MID field on a PSOLID entry. The following table shows associated nonlinear entries. The association is established through the material entries having the same values as the MID entry.

        Caution: The primary MATORT, MATHE, and MATG entries and the secondary MATVE, MATVP, MATEP and MATF entries are only associated with a 3D Solid (CHEXA, CPENTA, CPYRAM and CTETRA) element if the Solid element refers to a PSLDN1 entry.

     The MID entry for nonlinear heat may point to MAT4 or MAT5 entries.

        See link for tables.

3. The keyword entries may occur in any order or not at all. If a keyword entry is missing, its defaults are assumed.
4. The following table describes layer orientation for BEH8=SLCOMP, INT8=L.

     ```text
     ┌─────────────┬───────────────────────┐
     │ Layer       │                       │
     │ Orientation │                       │
     ├─────────────┼───────────────────────┤
     │ DIRECT      │ Normal to Layer plane │
     ├─────────────┼───────────────────────┤
     │ 1           │ Element T direction   │
     ├─────────────┼───────────────────────┤
     │ 2           │ Element R direction   │
     ├─────────────┼───────────────────────┤
     │ 3           │ Element S direction   │
     └─────────────┴───────────────────────┘
     ```

5. In the following table, BEHi refers to the nonlinear structural behavior of the solid element. An  underlined  item delineates a default.

        See link for table.

6. In the following table, BEHiH refers to the heat behavior of the solid element. An  underlined  item delineates a default.

        See link for table.

7. Integration codes in Remark   are:

     ```text
     ┌──────────┬───────────────────────────────────────────────────────────────┐
     │ INT CODE │ Integration Type                                              │
     ├──────────┼───────────────────────────────────────────────────────────────┤
     │ L        │ Linear                                                        │
     ├──────────┼───────────────────────────────────────────────────────────────┤
     │ LRIH     │ Linear Reduced Integration Hourglass control (assumed strain) │
     ├──────────┼───────────────────────────────────────────────────────────────┤
     │ ASTN     │ Assumed STraiN enhanced formulation solid shell               │
     ├──────────┼───────────────────────────────────────────────────────────────┤
     │ Q        │ Quadratic                                                     │
     ├──────────┼───────────────────────────────────────────────────────────────┤
     │ QRI      │ Quadratic Reduced Integration                                 │
     └──────────┴───────────────────────────────────────────────────────────────┘
     ```

8. Structural damping is supported for elements which reference PSLDN1.
     - The structural damping coefficient, GE,  is supported for elements using the MAT1 or MAT9 entries.
     - Extended damping coefficients GEij are supported for elements using the MAT9 entries.
