## [STRFIELD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.STRFIELD.Case.xhtml) - Grid Point Stress Output Request

Requests the computation of grid point stresses for graphical postprocessing and mesh stress discontinuities.

#### Format:

![casecontrol4a01376.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01376.jpg?_LANG=enus)  

#### Examples:

```nastran
STRFIELD=ALL
STRFIELD=21
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Grid point stress requests for all surfaces and volumes defined in the OUTPUT(POST) Section will │
│           │ be saved for postprocessing.                                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Only surfaces and volumes with  │
│           │ identification numbers that appear on this SET command, and in the OUTPUT(POST) Section, will be │
│           │ included in the grid point stress output request for postprocessing (Integer  >  0).             │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The STRFIELD command is required for the graphical display of grid point stresses in postprocessors that use the .xdb file (PARAM,POST,0), or when the GPSDCON or ELSDCON commands are specified, and does not provide printed output. The GPSTRESS command can be used to obtain printed output.
2. Only grid points connected to elements used to define the surface or volume are output. See the SURFACE and VOLUME Case Control commands.
3. Element stress output (STRESS) must be requested for elements referenced on requested SURFACE and VOLUME Case Control commands.
4. In nonlinear static and transient analysis, grid point stresses are computed only if parameter LGDISP is -1, which is the default. Also, in nonlinear transient analysis, grid point stresses are computed only for elements with linear material properties.
