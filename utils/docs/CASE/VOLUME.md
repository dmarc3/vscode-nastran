## [VOLUME](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.VOLUME.xhtml) - Volume Definition

Defines a volume for the calculation of grid point stresses, strains, or mesh stress discontinuities.

#### Format:

![casecontrol4c01511.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/../../../assets/casecontrol4c01511.jpg?_LANG=enus)  

#### Example:

```nastran
VOLUME 21 SET 2
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ id        │ Volume identification number.                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sid       │ Set identification number of a SET command that defines the elements in the volume. Either form of │
│           │ the SET command may be used. The default is all elements.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINCIPAL │ Requests principal stresses or strains, direction cosines, mean pressure, and von Mises equivalent │
│           │ stresses or strains to be calculated. If neither PRINCIPAL nor DIRECT is specified, then the       │
│           │ default is to output both.                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIRECT    │ Requests direct stress or strains, mean pressure stress, and von Mises equivalent stress to be     │
│           │ calculated. If neither PRINCIPAL nor DIRECT is specified, then the default is to output both.      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYSTEM    │ Used to specify the reference coordinate system used to define the output stress orientation       │
│           │ coordinate system.                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELEMENT   │ Specifies the element coordinate system.                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CORD cid  │ Specifies the coordinate system defined on a CORDij entry.                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BASIC     │ Specifies the basic coordinate system.                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. VOLUME commands must be specified after OUTPUT(POST).

2. The volume identification number must be referenced on a SET command appearing after OUTPUT(POST). The SET identification number may then be referenced on GPSTRESS, GPSTRAIN, STRFIELD, ELSDCON, and GPSDCON Case Control commands.

3. If ELEMENT is specified, element stresses or strains are not transformed.

4. In the preceding example, for all elements in SET 2:

     • Both PRINCIPAL and DIRECT stress are output.

     • The BASIC output system is used.

