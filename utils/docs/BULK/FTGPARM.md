## [FTGPARM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FTGPARM1.xhtml) - Fatigue Parameters

Defines parameters for a fatigue analysis in time domain SOLs 101, 103, and 112 and in frequency domain SOLs 108 and 111.

#### Format (SOLs 101, 103, 112):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM ID      TYPE    FACTOR  NTHRD   LOGLVL  LAYER                           
        "STRESS"COMB    CORR    PLAST   LOC     INTERP  RECOVER SRESOLVE        
        or                                                                      
        “STRAIN”                                                                
                NANGLE                                                          
        “RAIN...RTYPE                                                           
        "CERT...SURV                                                            
        "FOS"   OPTION  LIFE    BACKACC MAXFAC  MINFAC                          
        “SPOTW” COMB    CORR    NANGLE  SWLOC   MIDDLE  TORSION                 
        “SEAMW” COMB    CORR    THICK   LOCSM   RESENT                          
        “MULTI” MMTHD   NONLWR  NONUPR  BIAXLWR BIAXMID BIAXUPR ZERO            
                GATE                                                            
        “NAVG”  MTHD    OUTPUT  NORMAL                                          
```
#### Format (SOLs 108, 111):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM ID      TYPE                    LOGLVL  LAYER                           
        "STRESS"COMB    CORR    PLAST   LOC             RECOVER                 
        "FOS"           LIFE                                                    
        “VIBFTG”ATYPE   MAXSTR  CLIPLVL MAXPEAK STRBINS MAXFREQ NCALC           
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM 22      EN                                                              
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM 22      SN                                                              
        STRESS  SGVON   NONE            NODA            CUBIC                   
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM 22      SN                                                              
        SEAMW           FKM     0                                               
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGPARM 22      SN                                                              
        SPOTW   STNDRD  SIMPLE  18      3       0       0                       
```
ID

Unique ID of the FTGPARM entry called out by a FATIGUE case control
(Integer > 0).  See Remark 1.

TYPE

SOL 101, 103, 112: Type of fatigue analysis: "SN" or "EN" (Character, Default=SN).

SOL 108, 111: Type of fatigue analysis: "SN" or "EN" (Character, Default=SN). This is used only when there is a conflict with the defined material properties, i.e., both S-N and ε-N properties exist for the same material MID. Otherwise it is ignored and the material properties define the type of fatigue analysis to be performed..

FACTOR

SOL 101, 103, 112 only. Global scale factor to be applied to combined resultant stress output (Real>0.0, Default=1.0).

NTHRD

SOL 101, 103, 112 only. Number of threads to use for parallel processing for this fatigue analysis (Integer ³ 0; Default = Blank). Blank denotes that the number of threads used is based on SMP setting and the existence of an SMP license. Zero (0) is used as a flag to tell the code to use all available threads. Otherwise the number of threads designated is used if available. An SMP license is only necessary to take advantage of multiple treads if left blank.

LOGLVL

SOL 101, 103, 112: Level of messaging sent to the log file (Integer ³ 0, Default = 0; 0=None, 1=Error, 2=Info, 3=Low, 4=Medium, 5=High). Note that setting LOGLVL >0 can result in a significant performance penalty and should be used for debugging purposes only and limited to the entities of interest. LOGLVL=5 produces an HDF5 file that shows all parameter settings. This file can be significantly large.

SOL 108, 111: Level of output to generate (Integer ³ 0, Default = 0; 0=Standard, 1=Output all PSD responses, 2=Additionally output all Rainflow data). Note that LOGLVL >0 can result in a significant performance penalty and should be used for debugging purposes only and limited to the entities of interest only. See Remark 15.

LAYER

For shell elements, the output results layer to print to the f06 file. Values can be 0=Worst, 1=Top(Z2), 2=Bottom(Z1). (Integer, Default = 0). This is for printed output only. The analysis produces results for both layers, which are always available through the MASTER/DBALL, Output2, or other files for graphical postprocessors. See the FATIGUE case control entry.

"STRESS" or

Flag indicating that stress is used in the fatigue calculation. See Remark 2.

"STRAIN"

SOL 101, 103, 112 only. Flag indicating that strain is used in the fatigue calculation. Not valid for TYPE = SN. See Remark 2.

COMB

Stress/strain combination to use in the fatigue analysis. Acceptable values are listed in Table 0-9 after the Remarks below (Character; Defaul t= ABSMAXPR).

CORR

Mean stress correction to use in the fatigue analysis.  Acceptable values are listed in Table 0-10 and Table 0-11 after the Remarks below (Character; Default=None or MMPDS if MMPDS fatigue material model is specified on the MATFTG entry).

PLAST

SOL 101, 103, 112: Plasticity correction for TYPE = EN. Value can currently only be "NEUBER" for Neuber method. (Character; Default=NEUBER). See Remark 3.

SOL 108, 111: Only NEUBER correction is available.

LOC

SOL 101, 103, 112: Location to report fatigue lives. Valid values are "NODA”, “NODE”, or “ELEM” based on nodal averaged, element nodal, or element centroid stresses or strains, respectively. (Character; Default = NODA). See the RECOVER field and Remark 4. Also see the “NAVG” field and parameters.

SOL 108, 111: Location to report fatigue lives. Valid values are “NODE”, “NODA”, or “ELEM” based on element nodal, nodal averaged, or element center stresses, respectively. (Character; Default = NODA). See the RECOVER field and Remark 4.

INTERP

SOL 101, 103, 112 only. Interpolation limit for multi-curve mean stress correction method (Integer ³ 0; 0=Use Max Curve, 1=Extrapolate; Default = 0).

RECOVER

Stress recovery method to determine stresses/strains for the fatigue calculation. Valid values are “SGAGE”, “CORNER”, “BILIN”, “CUBIC” or "CENTER" (Character; Default = CORNER if LOC=NODA or NODE; Default = CENTER if LOC=ELEM and any other setting is ignored). These are the same values used for the STRESS (or STRAIN) case control output request. See LOC field and Remark 4.

SRESOLVE

SOL 101, 103, 112 only. Request for surface resolved, 2D stress state. Used only for 3D solid elements. (Character YES or NO; Default = NO). See Remark 5.

NANGLE

The number of calculation angles for 2D critical plane analysis (COMB=CRITICAL) (1≤Integer≤360; Default = 36, i.e. every 10 degrees). Practical values are 360, 180, 120, 90, 72, 60, 45, 40, 36, 30, 24, 18, 15, 12, 10, 9, 8, 6, 5, 4 for every 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 20, 24, 30, 36, 40, 45, 60, 72, 90 degrees, respectively. The more angles computed, the more compute intensive the analysis will be. In actuality, only half the angles are computed since the principals are the same 180 degrees opposite any computed angle.

“RAINFLOW”

SOL 101, 103, 112 only. Flag indicating that parameters that follow define rainflow cycle counting parameters for rainflow data reduction. See Remark 6.

RTYPE

Method of rainflow data reduction (Time History Compression). Value can only be "LOAD" for load time history data reduction on each load time history (Character; no default). Remark 6.

"CERTNTY"

SOL 101, 103, 112 only. Flag indicating that the parameter that follows defines the certainty of survival in fatigue analysis.

SURV

Certainty of survival based on the scatter in the S-N or e-N curves. (0.1 ≤ Real ≤ 99.9; Default = 50).  See Remark 7.

"FOS"

SOL 101, 103, 112: Flag indicating that parameters that follow are used in a factor of safety analysis. The presence of this flag triggers a factor of safety analysis.  See Remark 8. and 13. Not applicable to Spot Weld fatigue analysis.

SOL 108, 111: Flag indicating that the total signal time duration desired is to be specified for use in calculating margin of safety. Only the LIFE field is required in this case and defaults to 1.0. A margin of safety is always calculated.

OPTION

Supported option is LIFE, requesting a life-based factor of safety analysis or NONE. (Character; default = LIFE).

LIFE

SOL 101, 103, 112: The targeted design life given in user defined life units (such as laps, miles, etc.) as defined by “UNITS” line on FTGSEQ or FTGLOAD entry, or Repeats of the cyclic loading if no “UNITS” line exists (Real>0, no default).

SOL 108, 111: Total time duration required for margin of safety calculation in time units specified by TUNIT field on FTGSEQ entry.

BACKACC

SOL 101, 103, 112 only. The back calculation accuracy used to control back calculation iterations that determine the scale factor on the applied stress level to achieve the target design life. Defined as a percentage error on the target design life. (0.01 < Real £100.0, Default = 1.0).

MAXFAC

SOL 101, 103, 112 only. The maximum safety factor to calculate and report.  When this threshold is exceeded, the analysis will go on to the next element and report the maximum for the exceeded element (2.0 £ Real £ 5.e6, Default = 5.0).

MINFAC

SOL 101, 103, 112 only. The minimum safety factor to calculate and report.  If the result is below this threshold, the analysis will report MINFAC as the safety factor for this element and go on to process the next element. (0.0<Real£0.5, Default = 0.2).

"SPOTW"

SOL 101, 103, 112 only. Flag indicating that parameters for fatigue analysis of spot welds are to follow. See Remark 9.

COMB

Stress combination to use in the fatigue analysis. Acceptable values are listed in Table 0-9 after the Remarks below (Character; Default=STNDRD, which is basically a critical plane analysis).

CORR

Mean stress correction to use in the fatigue analysis of spot welds. Only NONE, FKM, or SIMPLE are valid for fatigue analysis of spot welds. See Table 0-10 and  Table 0-11  below. (Character; Default = NONE).

NANGLE

The number of calculation angles in 360 degrees around the spot weld. (10≤Integer≤360; Default = 18, i.e., every 20 degrees)

SWLOC

Location on the spot welds to report fatigue life.  Zero (0) reports worst case angle and location (top/bottom sheet or nugget); one (1) reports worst case angle for each location; two (2) reports worst case location for each angle; three (3) reports all locations and angles. (Integer 0, 1, 2, or 3, Default=0).

MIDDLE

Whether to process middle sheets if there are more than two sheets in the weld. (Integer 0 or 1, Default = 1- process middle sheets). See Remark 11.

TORSION

Whether to calculate torsion in the spot weld. (Integer 0 or 1, Default = 0 -do not calculate torsion). See Remark 12.

"SEAMW"

SOL 101, 103, 112 only. Flag indicating that parameters for fatigue analysis of seam welds are to follow. See Remark 9.

COMB

Stress/strain combination to use in the fatigue analysis of seam welds. Only ABSMAXPR and CRITICAL are supported. See Table 0-9 below. (Character; Default = ABSMAXPR).

CORR

Mean stress correction to use in the fatigue analysis of seam welds. Only NONE or FKM are valid for fatigue analysis of seam welds. See Table 0-10 and  Table 0-11  below. (Character; Default=NONE).

THICK

Thickness correction to be applied. (Integer 0 or 1; Default =0 - no correction)

LOCSM

Location on seam weld to report life. Valid values are "NODE”, “SGAGE”, “CORNER”, “BILIN”, or “CUBIC” (Character; Default = NODE). If “STRESS” line is also include, LOCSM must be the same as LOC. LOC=ELEM is not valid for fatigue analysis of seam welds and cannot be mixed with LOC = NODE. See Remark 4. 

RESENT

Result entity type used in the fatigue analysis of seam welds; only STRESS is currently supported. (Character; Default = STRESS).

"MULTI"

SOL 101, 103, 112 only. Flag indicating that parameters for biaxial/multiaxial assessment are to follow. See Remark 10. and 13.

MMTHD

Can be set to the following:

◾NONE = No multiaxial assessment is done.

◾SIMPLE = Calculates simple biaxiality ratios only.

◾STANDard =Standard method of assessment, which merely returns the results of the assessment.

◾AUTO = Performs the standard method, but then may recalculate fatigue damage depending on the results of the assessment. Currently valid for S-N analysis only and only results of individual events are meaningful.

"NAVG"

SOL 101, 103, 112 only. Flag indicating that parameters for nodal (grid point) stress (or strain) averaging are to follow. The LOC field must be set to NODA, otherwise this line is ignored. These parameters are the same as those specified in the SURFACE and VOLUME case control for requesting grid point stresses/strains and the user is referred to the OUTPUT(POST) section for more details. All defaults are used if this line is omitted. See Remark 14.

MTHD

Method to calculate average grid point stresses/strains:

◾TOPO = Topological method (default)

◾GEOM = Geometric method.

OUTPUT

Coordinate system in which to translate stresses/strains before averaging:

◾-1 : Specifies the element coordinate system for output

◾0 : Specifies the basic coordinate system for output (default)

◾CID : Specifies the coordinate system defined on a CORDij bulk data entry for output

The X-axis of this system is used to define the X stress direction. For shell elements the X-axis of the specified coordinate system is projected onto the surface or, that is, the resulting averaged stresses are a projection onto the surface.

NORMAL

For shell elements defining a surface, this specifies the method to define the surface normal. For solid elements defining a volume, this specifies the method to define the stress Z-axis. Indirectly this also sets the reference direction for positive fiber and shear stress output, but has no effect when OUTPUT=-1. Can be set to R (default), X1, X2, or X3.

M Specifies the reverse of the direction given by R, X1, X2, or X3 and must be entered as MR, MX1, MX2, or MX3 with no space between the M and the following letter. R Specifies the radius vector from the origin of reference coordinate system to the grid point.

The Y stress direction is the cross product of the Z and X stress directions defined by the NORMAL and the X-axis of the OUTPUT coordinate system.

“VIBFTG”

SOL 108, 111 only. Flag indicating that vibration fatigue parameters follow. The line is optional and defaults are used if not present.

ATYPE

Analysis method to use to generate the PDF of rainflow ranges: DIRLIK, NARROW, STEIN, SINES. (Character; default = DIRLIK)

MAXSTR

Maximum stress to use as a function of the number of RMS stress levels to determine maximum stress in the rainflow cycle count.  (Real>0.0; Default=10.0).

CLIPLVL

Value of stress where all stresses are "clipped" (kept at that level) when doing fatigue life calculation. Real>0.0; (Default CLIPLVL=MAXSTR). CLIPLVL=6 means +/- 3*RMS amplitudes or 6*RMS in terms of range.

MAXPEAK

Used to calculate an estimation of maximum and minimum stress (number of RMS levels) in the random response. It is not used in any way to calculate damage or life. This is also used when the maximum elastic-plastic peak strain is calculated. Where a mean load is included the peak stress is calculated as the mean_stress + MAXPEAK*RMS and the minimum stress is calculated as the mean_stress - MAXPEAK*RMS. This is similar to the time domain approach where the maximum and minimum stress are retained from the rainflow cycle count. (Real>0; Default=CLIPLVL/2 or, if CLIPLVL not defined, MAXSTR/2).

STRBINS

Number of bins to generate in rainflow cycle count. Default = 1280 for ATYPE=SINES otherwise 32. Not recommended to use anything over 5000.

MAXFREQ

Percentage of frequency content retained as a function of the first spectral moment m0 of the PSD defining the maximum frequency used to integrate the spectral moments for m1, m2, and m4. 0≤Real≤100.0; Default=99.9). 100% is not a recommended setting as it can cause numerical instability related to the calculation of the 4th spectral moment.

NCALC

Alternative options for the way "N" (life to failure) is calculated for a given stress bin. Valid values are MID, UPR, or AVG for middle, upper or average. (Character; Default=AVG). See Table 0-12.

--------------------

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

a. This option requires that suitable S-N curves be defined for the torsion case, which may mean a separate run for torsion vs for a non-torsion run.

b. Do not use this option unless your modeling strategy can generate realistic torsional loads in the spot welds. For example, this is not true of the simple CBAR modeling approach.

c. The mean stress correction is applied a little differently, because the sign of a mean shear stress cannot influence the fatigue damage. For this reason, the ABSOLUTE value (i.e., the magnitude) of the mean stress is used when applying any mean stress correction for the torsion case.

d. The calculation is a completely separate operation—there is no combination of the torsional stresses with the other stresses on the spot weld.

e. This option has had little validation, and no suitable S-N curves are provided with the software. However, it has been successfully used in practice, using S-N curves deduced from practical experience with car body structures, and has proved a useful tool for predicting premature failure in the small number of spot welds that may experience significant torsional loads.

f. The results of the torsional fatigue calculation are identified in the results by being associated with an angle of -1

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
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * In time domain, six multiaxial components of the stress tensor are resolved into one uniaxial, com­bined value for fatigue calculations at each entity per time step since damage models are based on uniaxial theories. For S-N analysis, the signed von Mises (SGVON) will be smaller than the Abso­lute Maximum Principal (ABSMAXPR) when there is positive biaxiality and hence this selection would be less conservative. (Note also that some BS weld classes require shear stress to be used.)   The signed parameters use the sign of the absolute maximum principal value for conservative fatigue life estimates. It is not recommended to use non-signed values, thus they are not supported. † In frequency domain, this is a Maximum Principal calculation using accurate phase scanning. │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
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
```text
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ *If MMPDS S-N material model is specified and referenced on a MATFTG, then the MMPDS mean stress correction is automatically applied regardless of the value of the CORR field. │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
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
```text
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ * Allowed but a curve at zero mean stress must be present. †Allowed but a curve at R = -1 must be present. ‡Spot Welds only. **MMPDS mean stress correction is only applicable when using MMPDS S-N material model and automatically applied regardless of the mean stress correction (CORR) setting. │
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
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
