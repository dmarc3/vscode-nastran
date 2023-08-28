## [PEMMAPC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.PEMMAPC.xhtml)

PEMMAPC is used to generate lists of GRD IDs of the coupling surfaces. 'PARAM,PEMMAPC,1' (default is 0) will produce following files in 'mapping_control' subdirectory of job submit directory.

```text
┌──────────────┬────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ For          │ SET ID                                         │ Generic File name                                 │
├──────────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Structure    │ 100000                                         │ <deckname>.<job                                   │
│ GID coupled  │                                                │ seq>.x_nas.structure_component1.set               │
│ with all     │                                                │                                                   │
│ TRMCs        │                                                │                                                   │
├──────────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Fluid GID    │ 200000                                         │ <deckname>.<job seq>.x_nas.fluid_component2.set   │
│ coupled with │                                                │                                                   │
│ all TRMCs    │                                                │                                                   │
├──────────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Structure    │ y00018xxxx for GLUED or z00018xxxx for SLIDING │ <deckname>.<job seq >.x_nas.structure_component1. │
│ GID coupled  │                                                │ trim_coupling.<xxxx>.<y or z>.set                 │
│ with         │                                                │                                                   │
│ TRIMID=xxxx  │                                                │                                                   │
│ only         │                                                │                                                   │
├──────────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Fluid GID    │ Y00028xxxx for OPEN or Z00028xxxx for IMPER    │ <deckname>.<job seq>.x_nas.fluid_component2.trim_ │
│ coupled with │                                                │ coupling.<xxxx>.<Y or Z>.set                      │
│ TRIMID=xxxx  │                                                │                                                   │
│ only         │                                                │                                                   │
├──────────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TRIMID=xxxx  │ xxxx90001                                      │ <deckname>.<job seq                               │
│ GID coupled  │                                                │ >.x_nas.interface<xxxx>.surface.1.set             │
│ with         │                                                │                                                   │
│ structure    │                                                │                                                   │
├──────────────┼────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TRIMID=xxxx  │ xxxx90002                                      │ <deckname>.<job seq                               │
│ GID coupled  │                                                │ >.x_nas.interface<xxxx>.surface.2.set             │
│ with fluid   │                                                │                                                   │
└──────────────┴────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
Guidelines for PARAM,PEMMAPC,1

1. PARAM,PEMMAPC,1' must be placed in the main bulk data section or under 'BEGIN BULK' to be effective.

2. Without 'PARAM,PEMNPART,n', PEMMAPC logic has a TRIM ID limit of less than 10000.

3. With 'PARAM,PEMNPART,n', PEMMAPC login has a TRIM ID limit of less than 100.

