## [MODEL_CHECK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.MODEL.CHECK.xhtml) - Specifies Model Check Options

Specifies model checkout run and specifies options to be used.

#### Format:

![executive00699.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00699.jpg?_LANG=enus)  

#### Examples:

1. Execute a basic model checkout run.  No special output is required.

     ```nastran
     MODEL_CHECK  CHECKOUT
     ```

2. Execute a model checkout run.  Print coordinate system and basic grid point data.

     ```nastran
     MODEL_CHECK  CHECKOUT  PRINT=(CSTM,BGPDT)
     ```

3. Execute a full solution.  Modify the material density temporarily to a value of 0.0.

     ```nastran
     MODEL_CHECK   MAT_DENSITY=OFF
     ```

     or

     ```nastran
     MODEL_CHECK   MAT_DENSITY=0.0
     ```

4. Execute a full solution.  Temporarily modify the values for material density and thermal expansion coefficient.

     ```nastran
     MODEL_CHECK  MAT_DENSITY=0.001  MAT_TECO=1.0  MAT_TEIJ=0.0
     ```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAT_DENSITY │ Selects material density processing option.                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│             │ Value to be used for the density.                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAT_TECO    │ Selects material thermal expansion direct coefficient processing option.                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│             │ Value to be used for the thermal expansion direct coefficients.                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAT_TEIJ    │ Selects material thermal expansion shear coefficient processing option.                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│             │ Value to be used for the thermal expansion shear coefficients.                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAT_DAMPING │ Selects material structural element damping processing option.                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│             │ Value to be used for the structural element damping coefficient.                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFF         │ Sets material property value to zero.                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ DEFAULT     │ Material property value is set to system default value. See Remark 3.                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ CHECKOUT    │ Selects model checkout solution option. See Remark 5.                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT       │ Selects items to be printed during model checkout solution.                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ item_list   │ List of model data items to be printed during model checkout run. If more than one item is │
│             │ specified, enclose the list in parenthesis. See Remark 6.                                  │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MODEL_CHECK statement is ignored in RESTART runs.
2. The values specified for material properties using the MODEL_CHECK statement will be used to temporarily update data for all   MAT1, MAT2, MAT3, MAT8, and MAT9 Bulk Data entries only for the duration of the run.  These values do not replace data specified on the MATi Bulk Data entries.  Caution should be used when postprocessing results via the PARAM POST options since operations using inconsistent data could be performed. Furthermore, when layered composite element properties and materials (PSHELL and MAT2 MID1/MID2/MID3/MID4) are generated, these equivalent MAT2 property entries are not considered to be original input data and the effects of the MODEL_CHECK directives are permanently reflected in these MAT2 properties. Restarts should not be attempted in this case.
3. System default values of 0.0 have been defined for each of the properties.  The defaults can be changed using the following Nastran statement keywords:  DEF_DENS for MAT_DENSITY, DEF_TECO for MAT_TECO, DEF_TEIJ for MAT_TEIJ, and DEF_DAMP for MAT_DAMPING.
4. The MAT_TECO describer causes the direct components of the thermal expansion coefficient to be modified.  The MAT_TEIJ describer causes the shear components of the thermal expansion coefficient to be modified.
5. The CHECKOUT option has the same effect as a PARAM,CHECKOUT,YES Bulk Data entry.
6. The following table summarizes the acceptable specifications for the PRINT item_list.

          See link for table.

     See the DMAP parameter descriptions in Section 5 for a discussion of the parameter name in the last column of the table and the output generated.  The specification of a print item has the effect of adding a PARAM,parameter,YES entry to the Case Control Section of the file.

