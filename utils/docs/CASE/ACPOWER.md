## [ACPOWER (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ACPOWER.Case.xhtml) - Acoustic Power Output Request

Requests output of the power radiated from the wetted surface. 
 
This Case Control command can be used in SOL 108 and SOL 111 only.

#### Format:

![casecontrol4a00726.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00726.jpg?_LANG=enus)  

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of panels for each excitation frequency.             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of excitation frequencies for each panel (Default).  │
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
│ CSV          │ Results will be written to a .CSV file. See Remark 1.                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ unit         │ Unit of the .csv file as used on the ASSIGN statement.                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Radiated power will be processed for the wetted surface and all panels.                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously defined set of panels. Radiated power will be processed for the │
│              │ wetted surface and all panels in the referenced set.                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Radiated power will not be processed. ACPOWER = NONE overrides an overall request.                 │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. If output to an .CSV file is requested, the file must be assigned with logical key “USERFILE” and FORM=FORMATTED, e.g.,
```nastran
ASSIGN USERFILE = ‘myfile.csv’ UNIT=50 FORM=FORMATTED STATUS=NEW
```
2. The mean radiated acoustic power per period (P ) is computed as:

     ![casecontrol4a00730.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00730.jpg?_LANG=enus)  

     where,  ![casecontrol4a00732.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00732.jpg?_LANG=enus)  is the complex conjugate transpose of the complex velocity of the wetted surface,  ![casecontrol4a00734.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00734.jpg?_LANG=enus)  is the coupling matrix, and  ![casecontrol4a00736.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00736.jpg?_LANG=enus)  is the acoustic pressure.

3. Nastran's ACPOWER may show different results from other software packages, such as Actran, due to the differences in handling the fluid damping. Nastran applies fluid damping to the fluid “stiffness” term while Actran applies fluid damping to the fluid "mass" term.

