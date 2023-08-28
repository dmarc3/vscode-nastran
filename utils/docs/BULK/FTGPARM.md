## [FTGPARM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FTGPARM1.xhtml) - Fatigue Parameters

Defines parameters for a fatigue analysis in time domain SOLs 101, 103, and 112 and in frequency domain SOLs 108 and 111.

#### Format (SOLs 101, 103, 112):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM ID      TYPE    FACTOR  NTHRD   LOGLVL  LAYER                   +       
+       "STRESS"COMB    CORR    PLAST   LOC     INTERP  RECOVER SRESOLVE+       
+       or                                                              +       
+       “STRAIN”                                                        +       
+               NANGLE                                                  +       
+       “RAIN...RTYPE                                                   +       
+       "CERT...SURV                                                    +       
+       "FOS"   OPTION  LIFE    BACKACC MAXFAC  MINFAC                  +       
+       “SPOTW” COMB    CORR    NANGLE  SWLOC   MIDDLE  TORSION         +       
+       “SEAMW” COMB    CORR    THICK   LOCSM   RESENT                  +       
+       “MULTI” MMTHD   NONLWR  NONUPR  BIAXLWR BIAXMID BIAXUPR ZERO    +       
+               GATE                                                    +       
+       “NAVG”  MTHD    OUTPUT  NORMAL                                          
```

#### Format (SOLs 108, 111):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM ID      TYPE                    LOGLVL  LAYER                   +       
+       "STRESS"COMB    CORR    PLAST   LOC             RECOVER         +       
+       "FOS"           LIFE                                            +       
+       “VIBFTG”ATYPE   MAXSTR  CLIPLVL MAXPEAK STRBINS MAXFREQ NCALC           
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM 22      EN                                                              
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM 22      SN                                                      +       
+       STRESS  SGVON   NONE            NODA            CUBIC                   
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM 22      SN                                                      +       
+       SEAMW           FKM     0                                               
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM 22      SN                                                      +       
+       SPOTW   STNDRD  SIMPLE  18      3       0       0                       
```

        See link for table.

#### Remarks:

1. FTGPARM bulk data is ignored if not selected by a FATIGUE case control entry.  If a FTGPARM entry is not defined, default properties are used for the requested fatigue analysis.

2. SOL 101, 103, 112 : For total life or stress-life (TYPE=SN), only STRESS results can be used. For crack initiation or strain-life (TYPE=EN), the fatigue analyzer may use either STRESS or STRAIN results from the finite element analysis. This selection should make no difference to the final results of a crack initiation calculation, as strains will always be calculated. The exception is when shell results are used. In this case, STRESS should be selected because only 2D results are available and the absence of the out-of-plane strains will cause incorrect calculation of combined parameters. It is an error to have both STRESS and STRAIN lines. If both are missing, then STRESS will be assumed with its default values.

3. SOL 101, 103, 112 : PLAST can only be set to NEUBER. Please note that NEUBER can be used universally for uniaxial stress states. PLAST is only valid for TYPE=EN.

4. If LOC=ELEM (element center), fatigue lives are calculated based on stresses/strains at element centroids (not recommended for anything but shell or 2D solid elements (plane stress/strain and axisymmetric) and the RECOVER field is ignored or automatically set to CENTER.

    If LOC=NODE, the fatigue lives are calculated from the stresses/strains at the element nodes, resulting in multiple damage values per node. Note that for LOC=NODE, the RECOVER field can be set to SGAGE, BILIN, CUBIC, or CORNER to control which stresses are used in the fatigue analysis for element nodal stresses and correspond to the same options as on the STRESS case control.

    If LOC is set to NODA, the same RECOVER options as LOC=NODE apply, however:

    SOL 101, 103, 112:  With LOC=NODA, fatigue lives are based on stresses/strains from nodal averaged (grid point) stresses, resulting in a single damage value at each node as opposed to using LOC=NODE where the fatigue lives are calculated from the stresses/strains at the element nodes, resulting in multiple damage values per node. The grid point stresses are generated using Nastran’s GPSTRESS output request internally (it is not required to include the GPSTRESS case control unless you wish to view the grid point stress also). See the NAVG line settings also on how to control grid point stress calculations.

    SOL 108, 111:  With LOC=NODA, after the nodal transfer function (TF) stresses for each element contribution are converted to the requested stress combination (e.g. COMB=SGVON), the stresses are summed and averaged at each node. This is done at every frequency to give a single TF of stress at each node. Thus a single damage and fatigue life per node is reported as opposed to slightly different values when LOC=NODE. Please note that the coordinate system in which the elements are defined should be consistent (the same). Otherwise the nodal averaging will not be done using consistent coordinate systems. Thus, for solid element, setting CORDM on the PSOLID entry to the Basic coordinate system or a specified CID is required and setting CID=-1 or -2 (element systems) is not recommended. For shell elements, MCID should be set on the respective element entry.

    This parameter cannot be changed on a RESTART since it would require a different set of stress/strain data, which is not allowed on a RESTART for a pure fatigue analysis.

    LOC=NODE generally gives more conservative answers than LOC=NODA since no averaging of the stresses/strains is done from the contributions of the surrounding elements.

5. SOL 101, 103, 112 : SRESOLVE is applicable for all three values of LOC, i.e.: LOC = ELEM, NODE or NODA. SRESOLVE is an option to evaluate surface stresses instead of volume stresses. When surface resolved stresses are requested from 3D solid elements, a thin layer of 2D shell elements is internally created encompassing the volume of the elements defined on the FTGDEF entry from which the 2D stress state is then determined. This parameter is necessary if a multiaxial assessment of a model made of 3D elements is necessary, otherwise 3D elements are ignored during a multiaxial assessment. Fatigue life and multiaxial statistics are only reported for these newly defined 2D elements (or reduced set of nodes) on the surface of the volume (free surface). Interior nodes are not included in the fatigue calculation. The internal element IDs generated by this option can be controlled by using  MSC Nastran  SYSTEM cell 183 (Default is set to 200000000).

    Element sets must be the same for all FATIGUE case control IDs that request surface resolved stresses. Otherwise a fatal condition is flagged and the analysis stops.

6. This RAINFLOW flag is used only to speed up the analysis by performing peak-valley-extraction. For each event the input time history peaks and valleys are retained as well as corresponding points from time histories of other events participating in the loading sequence. All other loading points are eliminated, thus reducing the input time history data processing during the rainflow counting procedure. RTYPE must be set to LOAD and is currently the only valid option.

7. Certainty of survival is based on scatter in the S-N or  ε -N curves.  It is used to modify the curves according to the standard error parameters ( ![bulkfgil03854.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03854.jpg?_LANG=enus) ) defined in the MATFTG material entry.  A higher reliability level requires a larger certainty of survival.

8. SOL 101, 103, 112 : This FOS option will calculate a type of safety factor for over design analysis to be performed. This analysis is in addition to the normal fatigue life/damage output and must be requested by the presence of this FOS flag and its parameters. This analysis method can be very useful for those components which predict infinite life, providing a measure of the risk of fatigue failure. The results of this analysis are factors by which the stress would have to be scaled to attain the specified design life. A value of one suggests that the specified life will be exactly attained whereas a factor less than one means the desired life will not be attained. Factors greater than one are, therefore, most desirable. FOS results are only reported for the sum of all events when multiple events are defined. Resulting fatigue life results reported are not affected by the presence of the FOS line.

    SOL 108, 111 : This FOS option is actually a margin of safety (MOS) calculation, which requires only the desired or required duration of entire loading sequence in time units. By default this is set to 1.0 and the time units are those defined by the TUNIT field on the FTGSEQ entry.

9. For fatigue analysis of spot and seam welds, besides the “SPOTW” and “SEAMW” lines themselves, “CERTNTY”, and “FOS” are also applicable. “MULTI” is applicable to seam weld, but not spot welds. All others are ignored. TYPE field is ignored as an SN analysis is forced for fatigue of spot and seam welds.

10. Biaxial/Multiaxial assessment can be requested for all but fatigue analysis of spot welds and is ignored by SOL 200 optimization runs. These assessments require a 2D state of stress. For this reason only shell elements are supported with this feature. See the SRESOLVE field if 3D elements are involved.

11. The Rupp method for spot weld life prediction has not been validated for the prediction of fatigue damage occurring at the middle sheets for spot welds joining more than two sheets. It should also be noted that such failures are relatively rare, difficult to reproduce in the laboratory, and difficult to detect in practice. Scrutinize middle sheet results carefully as they may give a false positive failure prediction.

12. Setting the TORSION option enables fatigue calculations to be made based on the shear stress around the periphery of the spot weld in each sheet due to the torsional load on the spot weld. Please note the following:

    - This option requires that suitable S-N curves be defined for the torsion case, which may mean a separate run for torsion vs for a non-torsion run.
    - Do not use this option unless your modeling strategy can generate realistic torsional loads in the spot welds. For example, this is not true of the simple CBAR modeling approach.
    - The mean stress correction is applied a little differently, because the sign of a mean shear stress cannot influence the fatigue damage. For this reason, the ABSOLUTE value (i.e., the magnitude) of the mean stress is used when applying any mean stress correction for the torsion case.
    - The calculation is a completely separate operation—there is no combination of the torsional stresses with the other stresses on the spot weld.
    - This option has had little validation, and no suitable S-N curves are provided with the software. However, it has been successfully used in practice, using S-N curves deduced from practical experience with car body structures, and has proved a useful tool for predicting premature failure in the small number of spot welds that may experience significant torsional loads.
    - The results of the torsional fatigue calculation are identified in the results by being associated with an angle of -1

13. Factor of Safety (FOS) analysis is only compatible with the MMTHD=SIMPLE if doing a multi-axial/biaxial (MULTI) assessment in the same run. A fatal error is issued if also used in conjunction with SPOTW (fatigue analysis of spot welds).

14. When LOC=NODA for requesting nodal average stresses, the grid point stresses generator is used to determine the nodal averaging. A limited set of controls is provided on the NAVG line to control how the averaging method. Internally, SURFACE and/or VOLUME definitions are created for the grid point stress request, just as if the GPSTRESS case control, with its associated OUTPUT(POST) commands, were given. However, only one SURFACE and/or VOLUME is determined based on the elements defined on the FTGDEF entry for requesting fatigue analysis. The user should be aware of possible stress discontinuities that can result from this.

15. By default the response PSD at the most critical location is output using LOGLVL=0 via a  <jobname>PSD.csv  file. If LOGLVL=1, response PSDs for all requested locations are output to that same file. Also a  <jobname>RCC.csv  file is produced with limited data showing the summation of damages from the rainflow cycle count. If LOGLVL=2, both files are created and in the latter, addition the stress and damage BIN data for each event is included. Be aware that this can create a lot of data, resulting in huge output files, and can severely degrade performance. Please use this option with care and limit the output to only the critical elements of interest.

```text
┌──────────────┬──────────────────────────────┬─────────────────────────────┬──────────────────────────────────┐
│ Stress/Strai │ SOL 101, 103, 112* Valid for │ SOL 108, 111 Valid for TYPE │ Meaning                          │
│ n            │ TYPE                         │                             │                                  │
│ Combination  │                              │                             │                                  │
├──────────────┼──────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ ABSMAXPR     │ SN (+SeamWeld) EN            │ SN EN                       │ Absolute Maximum Principal       │
│              │                              │                             │ (default)†                       │
├──────────────┼──────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ SGVON        │ SN EN                        │ SN EN                       │ Signed von Mises Stress          │
│              │                              │                             │ (recommended for SOL 108, 111    │
│              │                              │                             │ but not default)                 │
├──────────────┼──────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ SGMAXSHR     │ SN EN                        │                             │ Signed Maximum Shear             │
├──────────────┼──────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ CRITICAL     │ SN (+Seam Weld), EN          │                             │ Critical Plane Analysis - every  │
│              │                              │                             │ 10 degrees by default unless     │
│              │                              │                             │ NANGLE is specified otherwise    │
│              │                              │                             │ for standard SN/EN analysis      │
│              │                              │                             │ only- Not valid for 3D solid or  │
│              │                              │                             │ CSHEAR elements - element must   │
│              │                              │                             │ have an in-plane stress state.   │
├──────────────┼──────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ STNDRD       │ SN (Spot Weld only)          │                             │ This is basically a critical     │
│              │                              │                             │ plane analysis with calculations │
│              │                              │                             │ being done at NANGLEs around the │
│              │                              │                             │ circumference of the spot weld.  │
├──────────────┼──────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ COMPX COMPY  │                              │ SN EN                       │ Individual stress components     │
│ COMPZ COMPXY │                              │                             │                                  │
│ COMPYZ       │                              │                             │                                  │
│ COMPZX       │                              │                             │                                  │
└──────────────┴──────────────────────────────┴─────────────────────────────┴──────────────────────────────────┘
```

* In time domain, six multiaxial components of the stress tensor are resolved into one uniaxial, com­bined value for fatigue calculations at each entity per time step since damage models are based on uniaxial theories. For S-N analysis, the signed von Mises (SGVON) will be smaller than the Abso­lute Maximum Principal (ABSMAXPR) when there is positive biaxiality and hence this selection would be less conservative. (Note also that some BS weld classes require shear stress to be used.)   The signed parameters use the sign of the absolute maximum principal value for conservative fatigue life estimates. It is not recommended to use non-signed values, thus they are not supported. † In frequency domain, this is a Maximum Principal calculation using accurate phase scanning.

```text
┌─────────────┬──────────────────────────────────┬─────────────────────────────┬──────────────────────────────────┐
│ Mean Stress │ SOL 101, 103, 112 Valid for TYPE │ SOL 108, 111 Valid for TYPE │ Meaning                          │
│ Correction  │                                  │                             │                                  │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ NONE        │ SN (+Spot/Seam Weld) EN          │ SN EN                       │ No mean stress correction        │
│             │                                  │                             │ (default)                        │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ GOODMAN     │ SN                               │ SN EN                       │ Goodman mean stress correction   │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ GERBER      │ SN                               │ SN EN                       │ Gerber mean stress correction    │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ GDMANT      │ SN                               │ SN EN                       │ Tension only Goodman mean stress │
│             │                                  │                             │ correction                       │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ GRBERT      │ SN                               │ SN EN                       │ Tension only Gerber mean stress  │
│             │                                  │                             │ correction                       │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ FKM         │ SN (+Spot/Seam Weld)             │                             │ FKM mean stress correction       │
│             │                                  │                             │ method. Uses M1, M2, M3, M4      │
│             │                                  │                             │ slopes as defined in MATFTG      │
│             │                                  │                             │ entry. See remarks in MATFTG     │
│             │                                  │                             │ entry.                           │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ SIMPLE      │ SN (Spot Weld only)              │                             │ Modified FKM mean stress         │
│             │                                  │                             │ correction method where          │
│             │                                  │                             │ M1=M2=M3=M4=-MSS as defined in   │
│             │                                  │                             │ the MATFTG entry.                │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ INTERP      │ SN                               │                             │ Interpolation method used with   │
│             │                                  │                             │ multiple SN curves only. TYPE    │
│             │                                  │                             │ field of MATFTG entry must be    │
│             │                                  │                             │ set to MEAN, RRATIO, or LIFE.    │
│             │                                  │                             │ Requires that there be multiple  │
│             │                                  │                             │ curves defined, one at R=-1 for  │
│             │                                  │                             │ TYPE=RRATIO, or zero (0) mean    │
│             │                                  │                             │ stress for TYPE=MEAN.            │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ SWT         │ EN                               │ SN EN                       │ Smith-Watson-Topper mean stress  │
│             │                                  │                             │ correction                       │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ MORROW      │ EN                               │ EN                          │ Morrow mean stress correction    │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ WALKER      │                                  │ EN                          │ Walker mean stress correction    │
├─────────────┼──────────────────────────────────┼─────────────────────────────┼──────────────────────────────────┤
│ MMPDS       │ SN*                              │ SN EN                       │ Walker mean stress correction    │
│             │                                  │                             │ built into the MMPDS-01 material │
│             │                                  │                             │ curves                           │
└─────────────┴──────────────────────────────────┴─────────────────────────────┴──────────────────────────────────┘
```

* If MMPDS S-N material model is specified and referenced on a MATFTG, then the MMPDS mean stress correction is automatically applied regardless of the value of the CORR field. │

```text
┌─────────────┬──────────────────┬─────────────────────┐
│ Mean Stress │ S-N Method       │                     │
│ Correction  │                  │                     │
├─────────────┼──────────────────┼─────────────────────┤
│ Standard    │ Multi Mean Curve │ Multi R-Ratio Curve │
├─────────────┼──────────────────┼─────────────────────┤
│ NONE        │ YES              │ YES*                │
├─────────────┼──────────────────┼─────────────────────┤
│ GOODMAN     │ YES              │ YES*                │
├─────────────┼──────────────────┼─────────────────────┤
│ GERBER      │ YES              │ YES*                │
├─────────────┼──────────────────┼─────────────────────┤
│ GDMANT      │ YES              │ YES*                │
├─────────────┼──────────────────┼─────────────────────┤
│ GRBERT      │ YES              │ YES*                │
├─────────────┼──────────────────┼─────────────────────┤
│ FKM         │ YES              │ YES*                │
├─────────────┼──────────────────┼─────────────────────┤
│ SIMPLE‡     │ YES              │ NO                  │
├─────────────┼──────────────────┼─────────────────────┤
│ INTERP      │ NO               │ YES                 │
├─────────────┼──────────────────┼─────────────────────┤
│ MMPDS       │ MMPDS**          │ NO                  │
└─────────────┴──────────────────┴─────────────────────┘
```

* Allowed but a curve at zero mean stress must be present. †Allowed but a curve at R = -1 must be present. ‡Spot Welds only. **MMPDS mean stress correction is only applicable when using MMPDS S-N material model and automatically applied regardless of the mean stress correction (CORR) setting.

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ NCALC option │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AVG          │ Calculation of “N” is done by adding up all the values of N within the BIN and then dividing      │
│              │ through by the number of N values used. In this context the average value of N is calculated over │
│              │ the BIN.                                                                                          │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID          │ “N” is extracted at the mid (stress) point of the BIN.                                            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UPPER        │ “N” is extracted at the upper (stress) point of the BIN.                                          │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
