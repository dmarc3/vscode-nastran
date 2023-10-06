## [WETSENS (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.WETSENS.Case.xhtml) - Sensitivity Wetted Grids for SOL 108/111

Select SOLUTION frequencies and RESPONSE DOFs for the generation of sensitivity for wetted grids.

#### Format:

![casecontrol4a01469.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01469.jpg?_LANG=enus)  

#### Example:

```nastran
SET 81 = 100.0, 120.0
SET 91 = 11240/T3, 4001/T1
SET 95 = 9000000 THRU 9000050
$
WETSENS(RESPONSE=91,solution=81,WETTED) = 95
```

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                 │
│ (blank)      │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),     │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section.      │
│ Both .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                      │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRESH       │ The magnitude of element sensitivity less than p will be suppressed in all output files: print, │
│              │ punch, plot, .op2, and .xdb. (Default = 0.0).                                                   │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RESPONSE     │ Adjoint load response will be computed for unit load applied at grid point components in SET r. │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOLUTION     │ Frequency responses at these forcing frequencies, defined in setf, will be used for element     │
│              │ sensitivity computation. (Default=all forcing frequencies)                                      │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WETTED       │ Sensitivity for wetted grids will be computed and output.                                       │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SQWETT       │ Squared sensitivity for wetted grids will be computed and output.                               │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Sensitivities for all elements will be calculated.                                              │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number. Sensitivity for all elements specified on the SET n command will be  │
│              │ calculated. The SET n command must be specified in the same subcase as the ELSSENS command, or  │
│              │ above all subcases ( Integer > 0 ). The IDs in set n must be GID (grid ID).                     │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Elemental sensitivity will not be output.                                                       │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1.  Set r for RESPONSE on WETSENS is default to set r on ELSENS.  If no ELSENS in the deck, set r for WETSENS must be provided.
2.  The equations for various options of WETSENS 
 
```text
WETSENS(WETTED) = [U setf ] t [AGG][U r ]   
WETSENS(SQWETT) = [U setf ] t [AGG][U r ]  + [U setf ]* t [AGG] *  [U r ] *    
where [U setf ]  is the displacement of SOLUTION 
      [U r ]  is the displacement of RESPONSE 
      [AGG] is Fluid/Structure Coupling matrix 
      superscript * means complex conjugate of the term.
```
