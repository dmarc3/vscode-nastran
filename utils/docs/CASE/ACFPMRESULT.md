## [ACFPMRESULT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ACFPMRESULT.Case.xhtml) - Acoustic Field Point Mesh Results Output Request

Requests output of field point mesh results. This Case Control command can be used in SOL 108 and SOL 111 only.

#### Format:

![casecontrol4a00722.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00722.jpg?_LANG=enus)  

```text
┌──────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                          │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as tabular listing of grid points for each excitation frequency         │
│              │ (Default).                                                                                       │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of excitation frequencies for each grid point.     │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                  │
│ (blank)      │                                                                                                  │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                  │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                  │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),      │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both  │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                            │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VELOCITY     │ Requests output of particle velocities (Default = NO).                                           │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real or imaginary) of complex output. Use of either REAL or IMAG    │
│              │ yields the same output.                                                                          │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.       │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POWER        │ Requests output of power through field point mesh (Default = YES).                               │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Results of all field point meshes, AFPMIDs, will be processed.                                   │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously defined set of field point mesh identifiers, AFPMIDs, Results │
│              │ will be processed for the field point meshes in this set only.                                   │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Field point mesh results will not be processed. ACFPMRESULT = NONE overrides an overall request. │
└──────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. If the acoustic model references multiple PACINF entries that do not have coincident pole locations and if the acoustic field point meshes contain element data, then a PACINFID parameter entry is required in the bulk data for each mesh to identify the PACINF bulk data entry that is used to define the location of the pole.  Data recovery operations require that the element surface normal vector point away from the pole location.
2. The member of set for ACFPMRESULT must be the IDs of 'BEGIN AFPM='; not GRID IDs or element IDs under a 'BEGIN AFPM='.
