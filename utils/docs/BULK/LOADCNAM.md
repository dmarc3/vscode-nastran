## [LOADCNAM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LOADCNAM.xhtml) - Define Solution Load Combination by Load Name

Used only in PAA to define a loading combination using the LOADNAMEs used in Case Control for Parts.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCNAMLID     S                                                       +        
+       S1                                                              +        
+       LOADNAME1                                                       +
+       PARTNNAME1                                                      +
+       S2                                                              +        
+       LOADNAME2                                                       +
+       PARTNAME2                                                       +
+       Etc.                                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCNAM101     1.00                                                    +        
+       2.5                                                             +        
+       gravity_x                                                       +
+       outboard_right_side_engine_nacelle                              +
+       1.1                                                             +        
+       gravity_x_on_another_part                                       +
+       second_part_name                                                
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ LID       │ Load set ID. Selected by the LOAD Case Control command. (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ S         │ Overall scale factor. (Similar to LOAD Bulk Data entry) (Real < > 0)  │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ Si        │ Scale factor applied to LOADNAME loads. (Real < > 0)                  │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ LOADNAMEi │ Name of Load for that Part. (64 -Characters maximum)                  │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ PARTNAMEi │ Name of Part. (64 -Characters maximum)                                │
└───────────┴───────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. LOADCNAM entries are used only in the COMBINE and SOLVE steps of PAA processing.
2. The LOADCNAM allows a loading combination to be created using the LOADNAME from case control. In each PAA run, each SUBCASE may have a LOADNAME provided. These LOADNAMEs are used by the LOADCNAM to define a loading combination.
3. All loads with the same LID are combined. Therefore, care must be exercised when using loading combinations.
