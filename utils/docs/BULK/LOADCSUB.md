## [LOADCSUB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LOADCSUB.xhtml) - Define Solution Load Combinations Using Subcase Number

Used only in PAA to define a loading combination using the LOADNAMEs used in Case Control for Parts.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCSUBLID     S                                                       +        
+       S1      SUB1                                                    +        
+       PARTNAME1                                                       +
+       S2      SUB2                                                    +        
+       PARTNAME2                                                       +
+       Etc.                                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCSUB1001    1.0
        1.0     1
        part_we_are_using_subcase_1_from
        1.0     3
        part_we_are_using_subcase_3_from
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ LID       │ Load set ID. Selected by the LOAD Case Control command. (Integer > 0)  │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ S         │ Overall scale factor. (Similar to LOAD Bulk Data entry) (Real < > 0)   │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ Si        │ Scale factor applied to Load ID loads. (Real < > 0)                    │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ SUBi      │ Subcase Number specified during GENERATE or COMBINE run. (Integer > 0) │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ PARTNAMEi │ Name of Part. (Character, C64)                                         │
└───────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. LOADCSUB entries are used only in the COMBINE and SOLVE steps of PAA processing.
2. The LOADCSUB allows a loading combination to be created using the SUBCASE ids from case control. In each PAA run, each SUBCASE has an id. These ids are used by the LOADCSUB to define a loading combination.
3. All loads with the same LID are combined. Therefore, care must be exercised when using loading combinations.
