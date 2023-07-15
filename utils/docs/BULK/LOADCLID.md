## [LOADCLID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LOADCLID.xhtml) - Define Solution Load Combinations Using Part Load ID

Define a loading combination in PAA using the Load ID from SUBCASEs of the Parts.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCLIDLID     S                                                               
        S1      LID1                                                            
        PARTN...        
        S2      LID2                                                            
        PARTN...        
        Etc.                                                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCLID202     1.00                                                            
        1.00    101                                                             
        first...        
        1.0     301                                                             
        secon...        
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ LID       │ Load set ID. Selected by the LOAD Case Control command. (Integer > 0)                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ S         │ Overall scale factor. (Similar to LOAD Bulk Data entry) (Real < > 0)                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ Si        │ Scale factor applied to Load ID loads. (Real < > 0)                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ LIDi      │ Load ID specified during GENERATE by LOAD or CLOAD Case Control directive. (Integer > 0) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ PARTNAMEi │ Name of Part. (64 -Characters maximum)                                                   │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. LOADCLID entries are used only in the COMBINE and SOLVE steps of PAA processing.

2. The LOADCLID allows a loading combination to be created using the Load id (LIDi) from case control. In each PAA run, each SUBCASE may have a LIDi provided. These are used by the LOADCLID to define a loading combination.

3. As with other loading entries, all loads with the same LID are combined. Therefore, care must be exercised when using loading combinations.

