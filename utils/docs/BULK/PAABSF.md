## [PAABSF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAABSF.xhtml) - Frequency-Dependent Absorbers Element Property

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAABSF  PID     TZREID  TZIMID  S       A       B       K       RHOC            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAABSF  44      38      47                                                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches the identification number of the corresponding CAABSF  │
│           │ entry. (Integer > 0)                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TZREID    │ Identification number of a TABLEDi entry that defines the resistance as a function of frequency.   │
│           │ The real part of the impedence. See Remark 1. (Integer ³ 0 or blank)                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TZIMID    │ Identification number of a TABLEDi entry that defines the reactance as a function of frequency.    │
│           │ The imaginary part of the impedance. See Remark 1. (Integer ³ 0 or blank)                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S         │ Impedance scale factor. (Real; Default = 1.0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A         │ Area factor when 1 or 2 grid points are specified on the CAABSF entry. (Real > 0.0; Default = 1.0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Equivalent structural damping coefficient. See Remark 1. (Real > 0.0; Default = 0.0)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K         │ Equivalent structural stiffness coefficient. See Remark 1. (Real > 0.0; Default = 0.0)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHOC      │ Constant used in data recovery for calculating an absorption coefficient. RHO is the media         │
│           │ density, and C is the speed of sound in the media. (Real; Default = 1.0)                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. At least one of the four fields TZREID, TZIMID, B, or K must be specified.

2. If only one grid point is specified on the CAABSF entry, then the impedance  ![bulkp06288.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06288.jpg?_LANG=enus)  is the total impedance at the point. If two grids are specified, then the impedance is the impedance per unit length. If three or four points are specified, then the impedance is the impedance per unit area.   ![bulkp06290.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06290.jpg?_LANG=enus)  and  ![bulkp06292.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06292.jpg?_LANG=enus) .

3. The resistance represents a damper quantity B. The reactance represents a quantity of the type  ![bulkp06294.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06294.jpg?_LANG=enus) . The impedance is defined as  ![bulkp06296.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06296.jpg?_LANG=enus)  where  p  is the pressure and  ![bulkp06298.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06298.jpg?_LANG=enus)  is the velocity.

4. The impedance scale factor S is used in computing element stiffness and damping terms as:

![bulkp06300.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06300.jpg?_LANG=enus) (of shape functions)

![bulkp06302.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06302.jpg?_LANG=enus) (of shape functions)

     The value of  ![bulkp06304.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06304.jpg?_LANG=enus)  must be greater than machine epsilon--a machine dependent constant in the neighborhood of 1.E-15. The scale factor S can be used to ensure this constraint while retaining the same units.

5. The output for the element is specified by the STRESS Case Control command and consists of the resistance, reactance, and absorption coefficient. The absorption coefficient is defined as:

![bulkp06306.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06306.jpg?_LANG=enus)  

