## [RADM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RADM.xhtml) - Radiation Boundary Material Property

Defines the radiation properties of a boundary element for heat transfer analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADM    RADMID  ABSORP  EMIS1   EMIS2   EMIS3   EMIS4   EMIS5   EMIS6           
        EMIS7   -etc.-                                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RADM    11              .45     .33     .29     .20     .17     .13             
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMID    │ Material identification number.  (Integer > 0)                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ABSORP    │ Surface absorptivity or the temperature function curve multiplier if ABSORP is variable.  See     │
│           │ Remark 2. (0.0 < Real < 1.0)                                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EMISi     │ Surface emissivity at wavelength LAMBDAi or the temperature function curve multiplier if EMISi is │
│           │ variable  (See the RADBND entry.)  (0.0 < Real < 1.0)                                             │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The RADM entry is directly referenced only by one of the CHBDYE, CHBDYG, or CHBDYP type surface element entries.

2. For radiation enclosure problems, ABSORP is set equal to emissivity.  For QVECT loads, absorptivity is specified by ABSORP.

3. If there is more than one EMISi, then:

     • There must be a RADBND entry.

     • The number of EMISi may not exceed the number of LAMBDAi on the RADBND entry.

     • The emissivity values are given for a wavelength specified by the corresponding LAMBDAi on the RADBND entry.  Within each discrete wavelength band, the emissivity is assumed to be constant.

     • At any specific wavelength and surface temperature, the absorptivity is exactly equal to the emissivity.

4. To perform any radiation heat transfer exchange, the user must furnish PARAM entries for:

     • TABS to define the absolute temperature scale.

     • SIGMA  ![bulkqrs07374.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07374.jpg?_LANG=enus)  to define the Stefan-Boltzmann constant in appropriate units.

