## [SUBSTEP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SUBSTEP.Case.xhtml) - SUBSTEP Delimiter

Delimites and identifies a nonlinear analysis SUBSTEP for COUPLED analysis in SOL 400.

#### Format:

```nastran
SUBSTEP=n
```

#### Examples:

```nastran
STEP=50
NLSTEP=10
SUBSTEP=1
ANALYSIS=HSTAT
SUBSTEP=2
ANALYSIS=NLSTAT
```

```text
┌───────────┬──────────────────────────────────────────────┐
│ Describer │ Meaning                                      │
├───────────┼──────────────────────────────────────────────┤
│ n         │ Substep identification number. (Integer > 0) │
└───────────┴──────────────────────────────────────────────┘
```

#### Remarks:

1. The SUBSTEP command can only be used in nonlinear solution sequence SOL 400 (NONLIN).
2. The SUBSTEP command can only be used in a STEP command.
3. When used in a STEP command two or more SUBSTEP commands must occur.
4. Each SUBSTEP must contain a  unique  ANALYSIS=type statement. Currently there is a limitation of only two SUBSTEPs per STEP with the following options:
     - ANALYSIS=HSTAT for the first SUBSTEP and ANALYSIS=NLSTAT for the second SUBSTEP.
     - ANALYSIS=HTRAN for the first SUBSTEP and ANALYSIS=NLTRAN for the second SUBSTEP
     - ANALYSIS=HTRAN for the first SUBSTEP and ANALYSIS=NLSTAT for the second SUBSTEP
     - ANALYSIS=HSTAT for the first SUBSTEP and ANALYSIS=NLTRAN for the second SUBSTEP
5. Within a STEP the SUBSTEP identification number n must be in increasing order and not greater then 9999999.
6. The following example illustrates a typical application of SUBCASE, STEP, and SUBSTEPs

```nastran
     Subcase 100
       STEP 10
        STRESS= ALL
        NLSTRESS=ALL
        SET 1456 = list
              NLSTEP=84
            SubSTEP 1
               ANALYSIS=HSTAT
             THERMAL=ALL
             FLUX=ALL
              SPC=35
              LOAD=11
            SubSTEP 2
               ANALYSIS=NLSTAT
             SPC=2
              LOAD=110
             DISP(PLOT)=1456
```

7. The solutions of all SUBCASEs are independent of each other. The solution of any STEP is a continuation of the solution of the previous STEP.  The solutions of the SUBSTEPs occur simultaneously within a STEP .
8. In coupled analysis, TEMP(LOAD)=m will be ignored as the temperature loading from the thermal substep is automatically transferred to the mechanical substep. Note that in this multi-physics coupled framework, both the heat transfer and structural physics are executed on the same mesh with the same time steps.
9. In coupled analysis, TEMP(INIT)=n will be honored. It should be noted that when a thermo-mechanical static analysis is defined, TEMP(INIT) defines the initial temperature for both the thermal and mechanical substeps. Note that when a transient thermal-static mechanical analysis is define, IC=n should be used to define the initial temperature for the thermal substep and TEMP(INIT)=n (the same ID n) should be used to define the initial temperature for the structural substep. Then an initial thermal strain is defined as:
     ![casecontrol4a01378.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01378.jpg?_LANG=enus)  
     where   ![casecontrol4a01380.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01380.jpg?_LANG=enus)  comes from TEMP(INIT) and  TREF  comes from the material entry.  
10. The LOADSET Case Control Command  is not allowed  with this command. All dynamic loading must be applied through the use of the DLOAD Case Control command.
11. For coupled analysis, i.e., when two or more sub-steps are defined, a  single  Bulk Data entry NLSTEP must be included in the STEP command containing the SUBSTEP commands. It must occur above or in the STEP command and above the first SUBSTEP command.
     The loads and constraints can be independently defined for each physics under the relevant SUBSTEP. The commands that are normally used for single physics are applicable. For, e.g., for a HTRAN-NLSTAT coupled analysis, DLOAD should be used n the HTRAN substep while LOAD should be used in the NLSTAT substep.
12. Any case control command will apply to all SUBSTEPs when and only when it is above all the SUBSTEPs of the STEP.
