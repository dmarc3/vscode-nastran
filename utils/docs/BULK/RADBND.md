## [RADBND](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RADBND.xhtml) - Radiation Wavelength Band Definition

Specifies Planck’s second radiation constant and the wavelength breakpoints used for radiation exchange problems.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADBND  NUMBER  PLANCK2 LAMBDA1 LAMBDA2 LAMBDA3 LAMBDA4 LAMBDA5 LAMBDA6         
        LAMBDA7 etc.                                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADBND  6       14388.0 1.0     2.0     4.0     8.0     12.0                    
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ NUMBER    │ Number of radiation wave bands.  See Remarks.  (Integer > 1)          │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ PLANCK2   │ Planck’s second radiation constant.  See Remarks.  (Real > 0.0)       │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ LAMBDAi   │ Highest wavelength of the i-th wave band.  See Remarks.  (Real > 0.0) │
└───────────┴───────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Only one RADBND entry may be specified in the Bulk Data Section and must always be used in conjunction with the RADM entry.

2. PLANCK2 has the units of wavelength times temperature.  The same units of length must be used for LAMBDAi as for PLANCK2.  The units of temperature must be the same as those used for the radiating surfaces.  For example:   ![bulkqrs07352.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07352.jpg?_LANG=enus) .

3. The first wavelength band extends from 0 to LAMBDA1 and the last band extends from LAMBDAn to infinity, where  ![bulkqrs07354.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07354.jpg?_LANG=enus) .

4. Discontinuous segments in the emissivity versus wavelength piecewise linear curve must be treated as a wavelength band of zero width.

5. LAMBDAi must be specified in ascending order, and all LAMBDAi fields where i is greater than or equal to NUMBER must be blank.

6. If Modules are present then this entry may only be specified in the main Bulk Data section.

