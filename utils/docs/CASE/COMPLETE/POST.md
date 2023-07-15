## [POST (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.POST.Case.xhtml) - Postprocessor Data Specifications

Controls selection of data to be output for postprocessing functions via the OUTPUT2 module interface for selected commercial postprocessor products.

#### Format:

![casecontrol4a01264.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01264.jpg?_LANG=enus)  

#### Examples:

```nastran
POST PATRAN TOFILE 51 NOSTRESS
POST TOFILE SUBCASE8
POST TOCASE SUFNAME1
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOFILE    │ Keyword to specify the destiny of .op2 output files (No default if it appears above all subcases). │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOCASE    │ Keyword to specify the destiny of subcase results to user-defined .f06 output files. (No default   │
│           │ if it appears above all subcases.)                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ furn      │ Fortran file unit reference number where data will be written (Integer > 0).                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ filename  │ Suffix filename (see Remark 8., 9. and 11.) (Char8)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ppname    │ Name of the target post-processor program for TOFILE option (Default = PATRAN).                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ENHOP2    │ If ppname='PATRAN' then request enhanced op2 format-same as with PARAM,POST,1. The enhanced op2    │
│           │ format includes Nastran version information and qualifier values.                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ oplist    │ Names of output items to be processed.                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The POST Case Control command controls the placement of output data on external FORTRAN files for use by commercial postprocessors. Use of the POST command generates the proper value for the POST DMAP parameter associated with the particular postprocessor. All of the other parameter controls related to the POST DMAP parameter remain in effect, and are described in  . The products supported are identified in the following table. PATRAN is the default postprocessor name used for ppname. DBC output (POST=0) cannot be controlled by the POST command.

```text
┌─────────────┬─────────────────────┬──────────────────┐
│ ppname      │ Product             │ PARAM,POST,Value │
├─────────────┼─────────────────────┼──────────────────┤
│ PATRAN      │ MSC Patran V3       │ -1               │
├─────────────┼─────────────────────┼──────────────────┤
│ PATRAN with │ MSC Patran V3       │ +1               │
│ ENHOP2      │                     │                  │
├─────────────┼─────────────────────┼──────────────────┤
│ SDRC        │ Siemens I-DEAS      │ -2               │
├─────────────┼─────────────────────┼──────────────────┤
│ NF          │ MSC/LMS NF          │ -4               │
├─────────────┼─────────────────────┼──────────────────┤
│ FEMTOOLS    │ DDS/FemTools        │ -5               │
├─────────────┼─────────────────────┼──────────────────┤
│ UNIGRAHICS  │ Siemens/Unigraphics │ -6               │
└─────────────┴─────────────────────┴──────────────────┘
```

2. The TOFILE describer is followed by the specification of either a FORTRAN unit reference number, or a file name associated with the external file that receives the output data. If a FORTRAN unit number is used, the file must be associated with it via the ASSIGN File Management Statement. If POST appears above all subcases, TOFILE must be used to specify either a FORTRAN unit reference number or a file name. The default value of TOFILE, which appears under a subcase, will inherit from the value given in the POST above all subcases. If the unit reference number is associated with a form=formatted file, changes in unit numbers across subcases are not allowed.
3. The data that can be controlled for each postprocessor product is limited, and is identified under the description of the POST and related DMAP parameters as described in  . The keywords that can be used for the oplist options are shown in the following table. If an output item supported by a particular postprocessor is described in   but is not listed here, then the POST command cannot be used to control its output to the external file.

```text
┌──────────────┬────────────────┬──────────────────┐
│ Output Item  │ oplist Keyword │ Case Command     │
├──────────────┼────────────────┼──────────────────┤
│ Displacement │ [NO]DISPLACE   │ DISP             │
│ s            │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Forces of    │ [NO]SPCFORCE   │ SPCFORCE         │
│ single point │                │                  │
│ constraint   │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Element      │ [NO]FORCES     │ ELFO/FORCE       │
│ forces       │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Element      │ [NO]STRESS     │ ELST/STRESS      │
│ stresses     │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Element      │ [NO]ESE        │ ESE              │
│ strain       │                │                  │
│ energy       │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Grid point   │ [NO]GPFORCE    │ GPFORCE          │
│ force        │                │                  │
│ balance      │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Stress at    │ [NO]GPSIGMA    │ STRESS           │
│ grid points  │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Strain/curva │ [NO]GPEPSILON  │ STRAIN           │
│ ture at grid │                │                  │
│ points       │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Composite    │ [NO]PLYFAILURE │ STRESS           │
│ element      │                │                  │
│ failure      │                │                  │
│ indices      │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Element      │ [NO]EKE        │ EKE              │
│ kinetic      │                │                  │
│ energy       │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Element      │ [NO]EDE        │ EDE              │
│ energy loss  │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Multi-point  │ [NO]MPCFORCE   │ MPCFORCE         │
│ constraint   │                │                  │
│ forces       │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Composite    │ [NO]PLYSIGMA   │ STRESS           │
│ lamina       │                │                  │
│ stresses     │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Composite    │ [NO]PLYEPSILON │ STRAIN           │
│ lamina       │                │                  │
│ strains      │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Element      │ [NO]STRAIN     │ STRAIN           │
│ strains      │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Grid point   │ [NO]GPSTRESS   │ GPSTRESS         │
│ stresses     │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Grid point   │ [NO]GPSTRAIN   │ GPSTRAIN         │
│ strains      │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Applied      │ [NO]LOAD       │ OLOAD            │
│ loads        │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ No items to  │ NONE           │ ---------------- │
│ be output    │                │                  │
├──────────────┼────────────────┼──────────────────┤
│ Structure    │ [NO]SMPF       │ PFMODE           │
│ mode partici │                │                  │
│ pation       │                │                  │
│ factors      │                │                  │
└──────────────┴────────────────┴──────────────────┘
```

4. Output data items must have been generated via the appropriate Case Control command for the data to be available for postprocessing options. For example, the specification of SPCF in the oplist of the POST command will not produce forces of single point constraint on the POST output file unless there is a SPCF Case Control command present. Refer to the tables under the POST parameter description in   for a list of the output items supported by each postprocessor.
5. Any data generated by a Case Control command is automatically included in the oplist of the POST command. If output data is not wanted for a particular case, then the characters “NO” should be the first two characters of the keyword in the oplist. For example, NODISP specifies that displacements are not to be posted to the output file, even though they have been requested via the DISP Case Control command. Alternatively, the related POST parameters may be used. For example, to avoid outputting any displacements whatsoever to the .op2 file, use a PARAM, OUG, NO Bulk Data entry.
6. Certain data (e.g., geometry) is always generated and is not dependent upon the presence of a Case Control command in the input data. The POST command affects the placement of this data on the external file only insofar as the selection of the postprocessor defines the value of the POST DMAP parameter value. The actions described in   under the POST parameter description will prevail for the particular value of POST associated with the selected postprocessor. The primary purpose of the POST command is to give the user more control over subcase-dependent output data being stored on the external OUTPUT2 file.
7. If a POST command is present within any subcase, a POST command must also be present above the subcase level. The placement of the POST command above the subcase level causes a cumulative effect on POST commands in subsequent subcases. Any options specified above the subcase level propagate down into the POST command within a subsequent subcase. Thus, if a POST command specifies NODISP (no displacement output wanted) above the subcase level, then a POST command with the DISP option would be required within a subcase to generate any output to the OUTPUT2 file for displacements. This also implies that changing the OUTPUT2 file unit reference number with the TOFILE option in a subcase causes all output quantities currently scheduled for output to be switched to the new unit number, not just those in the oplist for the current POST command.
8. When the name of an output file is specified by keyword TOFILE, the ASSIGN statement in the File Management Section (FMS) can be used to specify the full path of its root name. The logical-keyword for the root name is OUTPUT2F. The default root name is the Nastran job name. FORTRAN unit reference number 19 has been reserved by Nastran for OUTPUT2F, although the user can assign other FORTRAN unit number to it. The full file name is in the form of <root name>.<suffix filename>.
9. When the name of an output file is specified by keyword TOCASE, the ASSIGN statement in the File Management Section can be used to specify the full path of its root name. The logical-keyword for the root name is OPCASE. The default root name is the Nastran job name. FORTRAN unit reference number 22 has been reserved by Nastran for OPCASE, although the user can assign other FORTRAN unit numbers to it. The full file name is in the form of <root name>.<suffix filename>. Also, ppname and oplist are not required.  If ppname and oplist are specified, they will be ignored.  Suffix filename must be specified with keyword TOCASE.
10. POST commands using TOCASE for structure mode participation factor output (SMPF) are not supported and will be ignored.
11. The TOFILE option lets you control the output results (per the table in Remark 3) that are placed on the specified file in OP2 format.  The "POST TOFILE SUBASE8" example directs output to the file named <root name>.subcase8.op2. The TOCASE option directs standard printed output requested for a subcase to the specified file in .f06 format.  The "POST TOCASE SUFNAM1" example directs output to the file named <root name>.sufnam1.f06. The TOCASE and TOFILE describers are independent of one another.  POST commands using each describer may be present in a subcase to specify different output destinations for both .op2 and .f06 outputs at the same time.  For both the TOCASE and TOFILE options, the resulting file name will not have the .op2 or the .f06 file extension automatically appended if the file suffix name contains a period (".").
12. The TOCASE keyword is not supported for printout in the f06 file coming from X-Y Plot commands.
