## [ROTORSE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.ROTORSE.xhtml) - Rotor Superelement Identification

Specifies grids that compose the rotor line model. An alternate to the ROTORG entry when superelements are used.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORSE ROTORID SEID    SEOPT                                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORSE 10      1                                                               
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTORID   │ Identification number of rotor line model. (Integer > 0; Required). See Remark 1.             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number of rotor superelement. (Integer > 0; Required)             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEOPT     │ Form of superelement for calculation of gyroscopic terms. (Integer = 1 or 2; Default = 1) See │
│           │ Remark 3.                                                                                     │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ROTORIDs of ROTORSE entries may not be the same as the ROTORIDs of ROTORAX entries or ROTORG entries.
2. A ROTORSE entry can be used when the rotor is placed in a superelement.
3. The rotor line model may be the boundary of a 3D rotor superelement or the rotor line model may be a superelement itself. SEOPT is chosen to distinguish between these cases. The options are:

     1- If the user has a 3D model of the rotor and places it in a superelement with SEID, the boundary (a-set) of this superelement must consist of no more and no less than the collinear rotor line model. This will be checked. Specify SEOPT as 1 to identify this configuration. When this option is used, the A-set matrices of the superelement are used to calculate the gyroscopic terms. This option should be used for external superelements.

     2- If the user has a line model of the rotor and places it in a superelement with SEID, this superelement (g-set) may be partially or completely reduced in the SE reduction process. This superelement must consist of no more and no less than the rotor line model. Specify SEOPT as 2 to identify this configuration. When this option is used, the G-set matrices of the superelement are used to calculate the gyroscopic terms.

4. Rotors specified using the ROTORSE entry can be connected directly to the support structure. In contrast, rotors specified using the ROTORG entry must employ rigid elements to keep the rotor disconnected from the support in the G-set of the residual structure.
5. Static and component mode reduction of the rotor line model are supported when using ROTORSE entries.
