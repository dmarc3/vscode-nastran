## [TEMPERATURE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TEMPERATURE.Case.xhtml) - Temperature Set Selection

Selects the temperature set to be used in either material property calculations or thermal loading in heat transfer and structural analysis.

#### Format:

![casecontrol4a01400.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01400.jpg?_LANG=enus)  

#### Examples:

```nastran
TEMPERATURE(LOAD)=15
TEMPERATURE(MATERIAL)=7
TEMPERATURE=7
TEMPERATURE(LOAD,HSUBCASE=20,HTIME=12.0)=39
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MATERIAL  │ The selected temperature set will be used to determine temperature-dependent material properties   │
│           │ indicated on MATTi Bulk Data entries. See Remarks 6., 7., and 8.                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOAD      │ The selected temperature set will be used to determine an equivalent static load and to update     │
│           │ material properties in a nonlinear analysis. See Remarks 2., 5., 6., 7. and 13.                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH      │ Both MATERIAL and LOAD will use the same temperature set.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of TEMP, TEMPD, TEMPP1,TEMPB3, TEMPRB, or TEMPAX Bulk Data entries       │
│           │ (Integer  >  0).                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INITIAL   │ The selected temperature table will be used to determine initial temperature distribution in       │
│           │ nonlinear static analysis. See Remarks 4., 6., 7., 8., 9., and 12.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HSUBCASE  │ Specifies a SUBCASE executed in the selected thermal job. See Remark 13.                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a SUBCASE executed in the selected thermal job. (Integer > 0, Default = 0 │
│           │ is the first SUBCASE) See Remark 13.                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HSTEP     │ Specifies a STEP executed in the selected thermal job. See Remark 13.                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ j         │ Identification number of a STEP executed in the selected thermal job. (Integer > 0, Default = 0 is │
│           │ the first STEP) See Remark 13.                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HTIME     │ Specifies the time of a time step executed in the selected nonlinear transient thermal job. See    │
│           │ Remark 13.                                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ t         │ Time of a time step executed in the selected nonlinear transient thermal job. (Real > 0.0, Default │
│           │ is the last time of the specified SUBCASE and/or STEP) See Remark 13.                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Selects all time steps executed in the selected nonlinear transient thermal job. See Remark 13.    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VERIFY    │ Output temperature verification data output requested                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRID      │ Output grid temperature verification data                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELEMENT   │ Output element temperature verification data                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH      │ Output both grid and element temperature verification data                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Do not output any verification data                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In linear analysis, only one TEMP(MATE) may be made in any problem and should be specified above the subcase level. If there are multiple subcase and TEMP(MATE) is not above the first subcase, then it must appear in the last subcase or it will be ignored. See also Remarks   and 
2. The total load applied will be the sum of external (LOAD command), thermal (TEMP(LOAD) command), element deformation (DEFORM command), and constrained displacement (SPC command) loads.
3. Static, thermal, and element deformation loads should have unique set identification numbers.
4. INITIAL is used in steady state heat transfer analysis for conduction material properties, and provides starting values for iteration. In structural analysis, TEMP(INIT) is used to specify an initial temperature. It may appear above or in the first subcase. In SOL 400, it may appear above or in the first STEP.
5. In superelement data recovery restarts, TEMPERATURE(LOAD) requests must be respecified in the Case Control Section.
6. In linear static analysis, temperature strains are calculated by
![casecontrol4a01402.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01402.jpg?_LANG=enus)  
     where  ![casecontrol4a01404.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01404.jpg?_LANG=enus)  is the thermal expansion coefficient defined on the MATi Bulk Data entries,  ![casecontrol4a01406.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01406.jpg?_LANG=enus)  is the load temperature defined with TEMPERATURE(LOAD), and  ![casecontrol4a01408.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01408.jpg?_LANG=enus)  is the initial temperature defined as follows. The following rules apply for TEMPERATURE(INITIAL), TEMPERATURE(MATERIAL), and TREF on the MATi entries:
     - If TEMPERATURE(INITIAL) and TREF are specified, then the TEMPERATURE(INITIAL) set will be used as the initial temperature to calculate both the loads and the material properties.
     - If TEMPERATURE(MATERIAL) and TREF are specified, then TREF will be used as the initial temperature in calculating the load and the TEMPERATURE(MATERIAL) set will be used for the calculation of material properties.
     - If neither TEMPERATURE(INITIAL), TEMPERATURE(MATERIAL), nor TEMPERATURE(BOTH) is present, TREF will be used to calculate both the load and the material properties and will be obtained from the MATi entry. The MATTi is not used in this case.
7. In nonlinear static analysis, temperature strains are calculated with
![casecontrol4a01410.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01410.jpg?_LANG=enus)  
     where  ![casecontrol4a01412.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01412.jpg?_LANG=enus)  is the thermal expansion coefficient defined on the MATi Bulk Data entries,  ![casecontrol4a01414.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01414.jpg?_LANG=enus)  is the load temperature defined with TEMPERATURE(LOAD), and  ![casecontrol4a01416.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01416.jpg?_LANG=enus)  is the initial temperature defined with TEMPERATURE(INITIAL). The following rules apply:
     - The specification of TEMPERATURE(MATERIAL) or TEMPERATURE(BOTH) will cause a fatal error.
     - If a subcase does not contain a TEMPERATURE(LOAD) request, then the thermal load set will default to the TEMPERATURE(INITIAL) set.
     - TEMPERATURE(LOAD) will also cause the update of temperature-dependent material properties due to the temperatures selected in the thermal load set. Temperature-dependent material properties are specified with MATi, MATTi, MATS1, and/or TABLEST Bulk Data entries.
     - If TREF and TEMPERATURE(INITIAL) are specified, then the TEMPERATURE(INITIAL) set will be used as the initial temperature to calculate both the loads and the material properties. Both are used in the definition of thermal strain.
8. TEMPERATURE(MATERIAL) and TEMPERATURE(INITIAL) cannot be specified simultaneously in the same run.
9. TEMP(INIT) is not used with TEMPAX.
10. Temperature loads cause incorrect element forces and stresses in all the dynamic analysis except SOL 400 nonlinear transient analysis with the elements having nonlinear capability.
     It should be noted that:
     - For nonlinear dynamics analysis with SOL 400, TEMPERATURE/THERMAL load can't be applied by TEMP/DLOAD (Case Control) and TEMPD/TLOADi (Bulk Data), this load should be applied by TEMP(Case Control) and TTEMP(Bulk Data);
     - For pure linear analysis with SOL 400, the TEMP/DLOAD (Case Control) and TEMPD/TLOADi (Bulk Data) has to be used to apply the temperature load.
11. In linear analysis, TEMPERATURE(MATERIAL) is not supported for hyperelastic elements (MATHP). TEMP(INIT) must be placed above the subcase level, and TEMP(LOAD) placed within the subcase.
12. For layered composites, neither the TREF specified on the material entries, nor TEMP(INIT) nor TEMP(MATE) are used to determine ply reference temperature. The TREF on the PCOMP or PCOMPG entries is used for all plies of the element. This is true for both linear and nonlinear analysis. If TEMP(INIT) is defined, the TREF on the PCOMP or PCOMPG entries is only used for determining the material properties and TEMP(INIT) is used for thermal strains. If TEMP(INIT) is not defined, the TREF on the PCOMP or PCOMPG entries is used for determining the material properties and thermal strains.
13. For TEMPERATURE(LOAD) requests in SOL 400, HSUBCASE, HSTEP, and HTIME are used to retrieve the temperature results from an existing thermal database. This feature allows user to select either steady state or transient thermal results for nonlinear structural analysis, with the flexibility of different time steps and dissimilar mesh sizes between thermal and structural runs. The following rules apply for using this capability:
     - HSUBCASE, HSTEP, and HTIME keywords must follow a LOAD keyword.
     - Although all three keywords have default values, at lease one keyword must exist to apply this uncoupled multi-physics feature in analysis.
     - HTIME=ALL is used in nonlinear transient structural analysis to perform real time temperature interpolations. In this case, the nodal temperatures of nonlinear elements are updated at each time step. These temperatures are equal to the temperature results of the selected thermal database at current time.
     - The set IDs of TEMP(LOAD) must be different from the set IDs of TEMP(INIT).
     - To save temperature results of thermal analysis in MASTER nastran database, use the following command.
     nastran thermal_job_name scratch=no
     In addition, the user must specify the following Bulk Data entry:
     PARAM,NLPACK,-1
     for transient thermal models with number of time steps greater than the default NLPACK output time steps.
     - The following File Management Statements are required in the current structural model to select the thermal database.
     ASSIGN hrun='thermal_job_name.MASTER'
     DBLOC DATABLK=(HEATDB) LOGI=hrun
     - Contact body integrity is not maintained while doing the thermal mapping. While this would not be a restriction for bodies that are not physically in contact or in glued thermal contact, it could lead to undesirable temperature mapping for bodies that are in regular thermal contact with temperature gradients across the contact interface.
