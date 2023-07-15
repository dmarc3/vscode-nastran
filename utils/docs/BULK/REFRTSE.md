## [REFRTSE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.REFRTSE.xhtml) - Define the reference rotor for non-reference rotors in any superelement. Applicable only for Complex Eigenvalue analysis (SOL 107 / 110 / 200 / 400 (ANALYSIS=DCEIG or MCEIG))

Specifies the reference rotor for non-reference rotors in superelements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
REFRTSE RID     REFROTIDREFROTSENFROTID1NFROTSE1NFROTID2NFROTSE2NFROTID3        
        NFROTSE2NFROTID4NFROTSE4                                                
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
REFRTSE 100     10      20      35      1       2       0       88              
        10      4001    100                                                     
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID       │ Identification number of RGYRO entry. Selected by Case Control command, RGYRO. (Required; no      │
│           │ Default). See Remark 1.                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFROTID  │ Specifies the reference rotor ID for all non-reference rotors entered in NFROTIDn field. (Integer │
│           │ > 0; Required; no Default)                                                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFROTSE  │ Specifies the reference rotor REFROTID Superelement ID (Integer; Default=0)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NFROTIDi  │ Specifies the non-reference rotor ID. (Integer > 0; Required; no Default)                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NFROTSEi  │ Specifies the non-reference rotor Superelement ID (Integer; Default=0)                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1.     REFRTSE bulk data entries with RID will be invoked for any subcase having RGYRO=RID. Multiple REFRTSE entries with the same RID are allowed.

2.     The rotor ID used as REFROTID (in 3 rd  field) and its superelement ID used as REFROTSE (in 4 th  field) should have a valid RGYRO entry. Meaning, REFROTID field should match RGYRO's REFROTR (4 th  field) and REFROTSE entry should match with same RGYRO's ROTRSEID (9 th  field).

3.         The same NFROTIDi and NFROTSEi combination (non-reference rotor in any superelement) should not be used in more than one REFRTSE definition with the same RID. If defined, User Fatal message will be issued. This is to make sure that non-reference rotors can have only one reference rotor.

4. NFROTIDi and NFROTSEi combination (non-reference rotor id) should not be used on a valid RGYRO definition.

5.         All rotors defined in any superelement should have either individual RGYRO definition for it if it is a reference rotor (or) use REFRTSE definition to identify its reference rotor. If a rotor does not have either one of these required valid definitions and there is more than one RGYRO entry with the RID, a User Fatal Message will be issued. Alternately use only one RGYRO entry, which will be used as the reference rotor for all remaining rotors in the model.

