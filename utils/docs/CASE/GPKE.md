## [GPKE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GPKE.Case.xhtml) - Grid Point Kinetic Energy Output Request

Requests the output of the kinetic energy at selected grid points in normal modes analysis only.

#### Format:

![casecontrol4a01038.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01038.jpg?_LANG=enus)  

#### Examples:

```nastran
GPKE=ALL
GPKE (PRINT, PUNCH)=19
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT     │ The printer will be the output medium.                                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT   │ Generates, but does not print, grid point kinetic energy output.                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH     │ The punch file will be the output medium.                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ e         │ Minimum energy threshold. Only energies above this value will be printed and/or punched.         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Grid point kinetic energy for all grid points will be output.                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Only grid points with           │
│           │ identification numbers that appear on this SET command will be included in output (Integer > 0). │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Grid point kinetic energy for no points will be output.                                          │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Grid point kinetic energy is only available for normal modes analysis.
2. Both PRINT and PUNCH may be requested.
3. GPKE=NONE overrides an overall output request.
4. For models using the lumped mass formulation, the grid point kinetic energy can be used to examine the distribution of kinetic energy among the grid points. It is computed as:
![casecontrol4a01040.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01040.jpg?_LANG=enus)  
     where  ![casecontrol4a01042.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01042.jpg?_LANG=enus)  represents the mass-normalized eigenvectors so that the total grid point kinetic energy is scaled to be unity. Note that the operator  ![casecontrol4a01044.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01044.jpg?_LANG=enus)  indicates term-wise matrix multiplication.
5. The grid point kinetic energy output has limited meaning for a coupled mass formulation. Since this mass formulation produces a coupling of mass across grid points, the sharing of kinetic energy among grid points can occur. In general, this obscures the meaning of the computation as a means of identifying important model parameters to control modal behavior.
