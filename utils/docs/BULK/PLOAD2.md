## [PLOAD2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLOAD2.xhtml) - Uniform Normal Pressure Load on a Surface Element

Defines a uniform static pressure load applied to CQUAD4, CSHEAR, or CTRIA3 two-dimensional elements.

#### Format:<span></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD2  SID     P       EID1    EID2    EID3    EID4    EID5    EID6            
        EID7    EID8    -etc.-                                                  
```
#### <span></span>

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD2  21      -3.6            4       16              2                       
```
#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD2  SID     P       EID1    “THRU”  EID2                                    
PLOAD2  1       30.4    16      THRU    48                                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. (Integer > 0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ P         │ Pressure value. (Real)                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ Element identification number. (Integer > 0 or blank; for the “THRU” option, EID1 < EID2.) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

2. At least one positive EID must be present on each PLOAD2 entry.

3. If the alternate form is used, all elements EID1 through EID2 must be two-dimensional.

4. The direction of the pressure is computed according to the right-hand rule using the grid point sequence specified on the element entry. Refer to the PLOAD entry.

5. All referenced elements must exist (closed list) for residual only runs and are not required to exist (open list) for superelement runs; and they cannot be hyperelastic for either.

6. The follower force effects due to loads from this entry are included in the stiffness in all linear solution sequences that calculate a differential stiffness. The solution sequences are SOLs 103, 105, 107 to 112, 115 and 116 (see also the parameter  ). In addition, follower force effects are included in the force balance in the nonlinear static and nonlinear transient dynamic solution sequences, SOLs 106, 129, 153, 159 and 400, if geometric nonlinear effects are turned on with PARAM,LGDISP,1. The follower force stiffness is included in the nonlinear static solution sequences (SOLs 106, 153 and 400) but not in the nonlinear transient dynamic solution sequences (SOLs 129 and 159).

