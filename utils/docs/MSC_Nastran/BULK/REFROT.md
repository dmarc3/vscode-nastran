## [REFROT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.REFROT.xhtml) - Defines the reference rotor for non-reference rotors in residual (SE 0). Applicable only for Complex Eigenvalue analysis (SOL 107 / 110 / 200 / 400 (ANALYSIS=DCEIG or MCEIG))

Specifies the reference rotor for non-reference rotors.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
REFROT  RID     REFROTIDNFROTID1NFROTID2NFROTID3NFROTID4NFROTID5NFROTID6+       
+       NFROTID7NFROTID8-etc.-                                                  
```

or 

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
REFROT  RID     REFROTIDNFROTID1THRU    NFROTIDnBY      INC                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
REFROT  100     10      20      35      1       2       60      88              
        99      4001    100                                                     
```

or 

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
REFROT  100     10      20      THRU    100     BY      10                      
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
│ NFROTIDi  │ Specifies the non-reference rotor ID. (Integer > 0; Required; no Default)                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRU      │ Specifies a range of identification numbers. (Optional)                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BY        │ Specifies an increment for a THRU specification (Optional)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INC       │ ID number increment. (Integer)                                                                    │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Any REFROT bulk data entries with RID will be invoked for any subcase having a RGYRO=RID case control command. Multiple REFROT entries with same RID are allowed.
2. REFROTID and NFROTID fields assume the rotor IDs are in the residual structure (SE 0).
3. Any rotor whose id is used as REFROTID (in 3 rd  field) should have a valid RGYRO entry. REFROTID should match the RGYRO entry's REFROTR (4 th  field) entry. The 9 th  field in that RGYRO call should be 0 (meaning REFROTR rotor should be in the residual structure).
4. The same NFROTIDi (non-reference rotor id) should not be used on more than one REFROT entry. If a NFROTIDi is defined more than once, a User Fatal message will be issued. This is to make sure that each non-reference rotor can have only one reference rotor.
5. NFROTIDi (non-reference rotor ID) should not be used on any valid RGYRO definition.
6. All rotors in the residual structure (SE 0) should have either an individual RGYRO definition for it be reference rotor (or) use a REFROT entry to identify the reference rotor. If more than one RGYRO entry is used and a rotor does not have either one of these required valid definitions, a User Fatal Message will be issued. Alternately use only one RGYRO entry, which will be used as the reference rotor for all remaining rotors in the model.
