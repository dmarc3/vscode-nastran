## [SELOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SELOAD.xhtml) - Selects and/or Scales External Superelement Loads

Selects and/or scales external superelement loads identified by a label, subcase identification number, load case identification number or column number.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SELOAD  SID     S                                                               
        SEIDi   Si      LBLTYPi                                                 
        Label...        
        -etc.-                                                                  
        -etc.-          
```
#### Example:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SELOAD  11      1.0                                                             
        100     0.5                                                             
        edge ...        
        200     1.2     SUBID                                                   
        10              
```
#### <span></span>

```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID        │ LOAD Case Control command identification number if static analysis or EXCITEID on TLOADi and     │
│            │ RLOADi entries if dynamic analysis.                                                              │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S          │ Overall scale factor.                                                                            │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Si         │ Scale factor for this superelement's load vector                                                 │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LBLTYPi    │ Label type in the in the next entry: "LABEL" (default), "SUBID", "LOADID", or "COLNUM".          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Label      │ If LBLTYPi="LABEL" or "SUBCASE":  String assigned to a column in the external superelement load  │
│            │ matrix in the creation run by the LDLABEL Case Control command.                                  │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Subcase ID │ If LBLTYPi="SUBID": Subcase identification number associated with a column in the external       │
│            │ superelement load matrix.                                                                        │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Load ID    │ If LBLTYPi="LOADID": Load identification number associated with a column in the external         │
│            │ superelement load matrix.                                                                        │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Column     │ If LBLTYPi="COLNUM" or "COLUMN": Column number in the external superelement load matrix.  Column │
│ number     │ number allows for load selection in pre-V2021.4 external superelement export files (.op2, .op4,  │
│            │ .MASTER/.DBALL, or pch).                                                                         │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
