## [DAMPING](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DAMPING.xhtml) - Parameter and Hybrid Damping Specification

Specifies the values for parameter damping and/or selects optional HYBRID damping.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DAMPING ID      G       ALPHA1  ALPHA2  HYBRID  GEFACT  ROTSEP          +       
+       W3      W4      WH                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DAMPING 100     .02                                     NO                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Damping entry identification number. (Integer > 0; no Default)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Structural damping coefficient, see Remark 1. (Real; Default = 0.0)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA1    │ Scale factor for mass portion of Rayleigh damping, see Remark 4. (Real; Default = 0.0)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA2    │ Scale factor for stiffness portion of Rayleigh damping, see Remark 4. (Real; Default = 0.0)        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HYBRID    │ Identification number of HYBDAMP entry for hybrid damping, see Remarks 5. and 6. (Integer > 0;     │
│           │ Default = 0)                                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GEFACT    │ Scale factor for material damping. See Remark 1.and Remark 3. (Real; Default = 1.0)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTSEP    │ Remove rotor stiffness, mass, and structural damping from the hybrid damping calculation           │
│           │ (Character: YES or NO; Default=YES)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ W3        │ Average frequency for calculation of structural damping in transient response, see Remark 7. (Real │
│           │ > 0.0; Default = 0.0)                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ W4        │ Average frequency for calculation of material damping in transient response, see Remark 7. (Real > │
│           │ 0.0; Default = 0.0)                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WH        │ Average frequency for calculation of hybrid ‘structural’ damping in transient response, see Remark │
│           │ 7. (Real > 0.0; Default = 0.0)                                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The DAMPING entry is referenced by the RSDAMP or SEDAMP Case Control commands. If a DAMPING entry is selected in the Case Control, the DAMPING values, including defaults, will override parameter inputs.
2. All damping selections are cumulative.
3. Structural damping specified by the G and GEFACT entries will replace any structural damping by:

     ![bulkde03136.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03136.jpg?_LANG=enus)  

     The GFACT value used is GFACT = GE (default=0.0) * GEFACT (default=1.0) where GE is the structural damping value on the material entry.

4. Rayleigh viscous damping is calculated as:

     ![bulkde03138.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03138.jpg?_LANG=enus)  

5. Hybrid damping on the residual structure is only active for direct solution sequences. For modal solution sequences, the SDAMP Case Control request should be used.
6. Hybrid damping for superelements uses modes that are calculated using the superelement mass and stiffness matrices before upstream superelements are added and before SPC or MPC constriants are imposed. These matrices are known as the JJ-type matrices.
7. The W3, WR4 and WH  values are used in transient response only. A zero value (default) will result in no damping. The equivalent viscous damping is calculated as:

     ![bulkde03140.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03140.jpg?_LANG=enus)  

8. For rotordynamic analyses (RGYRO in the Case Control Section), the DAMPING calculations for the residual structure (RSDAMP) are performed without any rotor contributions (support structure only).
9. Rayleigh damping is designed to be applied only at Superelement, Part Superelement, or External Superelement residual assembly time. It is not applied in individual Parts or External superelements.
10. If Modules are present then this entry may only be specified in the main Bulk Data section.
11. The units of W3, W4, and WH are radians per unit time.

#### Examples:

1. Specify a structural damping coefficient of 0.03 for the residual structure for frequency response.

##### Case Control:

```nastran
RSDAMP=100
```

##### Bulk Data:

```nastran
DAMPING, 100, 0.03
```

2. Specify a structural damping coefficient of 0.03 for the residual structure for transient response (use a “natural” frequency of 100 Hz)

##### Case Control:

```nastran
RSDAMP=100
```

##### Bulk Data:

```nastran
DAMPING, 100, 0.03, 
, 628.3
```

3. Specify hybrid damping for superelement 1. Use modal damping of two percent critical for the first 6 modes.

##### Case Control:

```nastran
SUBCASE 1 
  SUPER=1 
  SEDAMP=100
```

##### Bulk Data:

```nastran
DAMPING, 100, , , , 101 
HYBDAMP, 101, 102, 1001 
EIGRL, 102, , , 6 
TABDMP1, 1001, CRIT, 
, 0.0, 0.02, 1000.0, 0.02, ENDT
```
