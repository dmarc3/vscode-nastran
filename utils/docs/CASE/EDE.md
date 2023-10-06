## [EDE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.EDE.Case.xhtml) - Element Energy Loss Per Cycle Output Request

Requests the output of the energy loss per cycle in selected elements.

#### Format:

![casecontrol4a00862.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00862.jpg?_LANG=enus)

#### Examples:

```nastran
EDE=ALL
EDE(PUNCH, THRESH=.0001)=19
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
│ AVERAGE      │ Requests average energy (in frequency response analysis only) (Default).                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AMPLITUDE    │ Requests amplitude of energy (in frequency response analysis only).                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PEAK         │ Requests peak energy (for frequency response analysis only). PEAK is the sum of AVERAGE and        │
│              │ AMPLITUDE.                                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRESH       │ Energies for elements having an energy value of less than p% will be suppressed in all output      │
│              │ files: print, punch, plot, .op2, and .xdb. THRESH overrides the value of TINY described in Remark  │
│              │ 1. (Default = 0.001).                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPERCENT    │ Do not compute TOTAL ENERGY OF ALL ELEMENTS IN PROBLEM and PERCENT OF TOTAL. The values will       │
│              │ appear as zeros. Sparse data recovery and NOPERCENT can result in significant reduction in         │
│              │ computing resources. But if RTYPE=TOTSE appears on a DRESP1 entry then full data recovery is       │
│              │ necessary and no savings will be realized.                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Energy for all elements will be computed.                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number. Energy for all elements specified on the SET n command will be          │
│              │ computed. The SET n command must be specified in the same subcase as the EDE command, or above all │
│              │ subcases (Integer > 0).                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Element energy loss will not be output.                                                            │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If THRESH = p is not specified, then p defaults to the values specified by user parameter TINY.
2. The energy calculations include the contribution of initial thermal strain.
3. Energy density (element energy divided by element volume) is also computed in some solution sequences. It can be suppressed by use of PARAM,EST,-1.
4. For frequency response analysis, the energy may be computed in one of three ways as selected by

AVERAGE:

![casecontrol4a00866.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00866.jpg?_LANG=enus)  
 
AMPLITUDE:

![casecontrol4a00868.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00868.jpg?_LANG=enus)  
 
PEAK:

![casecontrol4a00870.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00870.jpg?_LANG=enus)  
 
5. In SOLs 111 and 112, EDE is not available if both PARAM,DDRMM,0 and PARAM,SPARSEDR,NO are specified.
6. Only damping from the viscous dampers (e.g., CVISC, CDAMPi, etc.) are included. Structural damping is not included in the calculation.
7. The usages of REPCASE and OMODES Case Control directives is not supported for ESE, EKE, EDE and GPFO output selections and should not be used.
8. If there are any frequency dependent CBUSH elements present, and PARAM, BUSHNM, NO; then all CBUSH elements will be excluded from the element energy loss output.
9. For transient response, EDE is computed in a quasi-static manner at each time step: ![casecontrol4a00878.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00878.jpg?_LANG=enus) ; where B  is elemental damping and v and u are velocity and displacement respectively.
