## [ESE (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ESE.Case.xhtml) - Element Strain Energy Output Request

Requests the output of the strain energy in selected elements.

#### Format:

![casecontrol4a00928.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00928.jpg?_LANG=enus)  

#### Examples:

```nastran
ESE=ALL
ESE (PUNCH, THRESH=.0001)=19
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                    │
│ (blank)      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command), while  │
│ the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2 and │
│ .h5 file can be created simultaneously. Note .xdb file is being deprecated.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AVERAGE      │ Requests average energy in frequency response analysis only.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AMPLITUDE    │ Requests amplitude of energy in frequency response analysis only.                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PEAK         │ Requests peak energy for frequency response analysis only. PEAK is the sum of AVERAGE and          │
│              │ AMPLITUDE.                                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRESH       │ Energies for elements having an energy value of less than p% will be suppressed in all output      │
│              │ files: print, punch, plot, .op2, and .xdb. THRESH overrides the value of TINY described in Remark  │
│              │ 1. (Default = 0.001).                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPERCENT    │ Do not compute TOTAL ENERGY OF ALL ELEMENTS IN PROBLEM and PERCENT OF TOTAL. The values will       │
│              │ appear as zeros. Sparse data recovery and NOPERCENT can result in significant reduction in         │
│              │ computing resources. But if RTYPE=TOTSE appears on a DRESP1 entry then full data recovery is       │
│              │ necessary and no savings will be realized.                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Energy values for all elements will be computed.                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number. Energy for all elements specified on the SET n command will be          │
│              │ computed. The SET n command must be specified in the same subcase as the ESE command, or above all │
│              │ subcases (Integer  > 0).                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Element strain energy will not be output.                                                          │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If THRESH = p is not specified, then p defaults to the values specified by user parameter TINY.
2. The energy calculations include the contribution of initial thermal strain.
3. Energy density (element strain energy divided by element volume) is also computed in some solution sequences. It can be suppressed by use of PARAM,EST,-1.
4. For frequency response analysis, the energy may be computed in one of three ways as selected by

AVERAGE:

![casecontrol4a00932.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00932.jpg?_LANG=enus)  
 
AMPLITUDE:

![casecontrol4a00934.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00934.jpg?_LANG=enus) 
 
PEAK:

![casecontrol4a00936.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00936.jpg?_LANG=enus)  

5. In SOLs 111 and 112, ESE is not available if both PARAM,DDRMM,0 and PARAM,SPARSEDR,NO are specified.
6. Element data recovery for thermal loads is not currently implemented in dynamics.
7. Element strain energy is available for nonlinear static analysis (SOL 106). However, in a normal modes analysis in SOL 106 with PARAM,NMLOOP (or ANALYSIS=MODES) or a PARAM NMLOOP restart into SOL 103, energies are computed for elements with linear properties only. ESE output request is also available in SOL 400 linear and nonlinear static analyses as well as multi-disciplinary and linear perturbation analyses using MODES and MCEIG types of analysis. All other nonlinear solution sequences do not support element strain energy output.
8. The strain energy for nonlinear elements is calculated by integrating the specific energy rate, the inner product of strain rate, and stress over element volume and time.
(5-10) ![casecontrol4a00944.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00944.jpg?_LANG=enus)
Loads from temperature changes are included in Eq.  (5-10) . If we assume a linear variation of temperatures from subcase to subcase, then the strain energy in Eq.  (5-10)  for the special case of linear material and geometry becomes
(5-11) ![casecontrol4a00954.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00954.jpg?_LANG=enus)
where  ![casecontrol4a00956.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00956.jpg?_LANG=enus)  is the element load vector for temperature differences.
For linear elements, the default definition of element strain energy is
(5-12) ![casecontrol4a00958.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00958.jpg?_LANG=enus)
where  ![casecontrol4a00960.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00960.jpg?_LANG=enus)  is the element load vector for temperature differences and element deformation.
In Eq.  (5-12) , the temperatures are assumed to be constant within a subcase. The default definition of the strain energy for linear elements differs from the definition for nonlinear elements by a factor of 1/2 in the temperature loads. To request the strain energy for linear elements using Eq.  (5-11) , set the parameter XFLAG to 2; the default value for XFLAG is 0, which uses Eq.  (5-12)  for the strain energy of linear elements.
9. The usages of REPCASE and OMODES Case Control directives is not supported for ESE, EKE, EDE and GPFO output selections and should not be used.
10. If there are any frequency dependent CBUSH elements present, and PARAM, BUSHNM, NO; then all CBUSH elements will be excluded from the element strain energy output.
11. For transient response, ESE is computed in a quasi-static manner at each time step: ![casecontrol4a00962.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00962.jpg?_LANG=enus) ; where K  is elemental stiffness and u is displacement.
