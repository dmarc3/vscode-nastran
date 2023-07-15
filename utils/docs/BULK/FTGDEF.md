## [FTGDEF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FTGDEF.xhtml) - Fatigue Element Definitions

Defines elements and their associated fatigue properties to be considered for fatigue analysis for time domain SOLutions 101, 103, 112 and frequency domain SOLutions 108 and 111.

#### Format (SOL 101/103/112):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGDEF  ID      TOPSTR  PFTGID  TOPDMG  NENTS   maxENTS NHS     HSGATE          
        "ELSET" ELSID1  PFTGID1 ELSID2  PFTGID2 ELSID3  PFTGID3                 
                ELSID4  PFTGID4 ...     ...     ...     ...                     
                -etc.-                                                          
        "SPOTW" ELSID1  PFTGID1 ELSID2  PFTGID2 ELSID3  PFTGID3                 
                ELSID4  PFTGID4 ...     ...     ...     ...                     
                -etc.-                                                          
        "SEAMW" ELSID1  PFTGID1 NDSID1  WELD1   TYPE1                           
                ELSID2  PFTGID2 NDSID2  WELD2   TYPE2                           
                -etc.-                                                          
        "XELSET"XELSID1 XELSID2 XELSID3 XELSID4 XELSID5 XELSID6 XELSID7         
                XELSID8 ...     ...     ...     ...     ...     ...             
                -etc.-                                                          
```
11

#### Format (SOL 108/112):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGDEF  ID      TOPRMS                                                          
        "ELSET" ELSID1          ELSID2          ELSID3                          
                ELSID4          ...             ...                             
                -etc.-                                                          
        "XELSET"XELSID1 XELSID2 XELSID3 XELSID4 XELSID5 XELSID6 XELSID7         
                XELSID8 ...     ...     ...     ...     ...     ...             
                -etc.-                                                          
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGDEF  22      100.0   3                                                       
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGDEF  22                                                                      
        ELSET   14      3       15      4                                       
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGDEF  22                                                                      
        SPOTW   44      1       45      2       46                              
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGDEF  22                                                                      
        SEAMW   44      99      31      FILLET  TOE                             
                45      99              LASER   ROOT                            
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number called out by the FATIGUE case control. (Integer > 0).                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOPSTR    │ SOL 101, 103, 112: Top stress percentage. Retains and reports only the percentage of entities with │
│           │ the highest simple stress range. Cannot be used with SOL 200 or for fatigue analysis of spot and   │
│           │ seam welds; leave blank. (-100.0 £ Real £ 100.0; Default = blank - 100% will be used). See Remark  │
│           │ 8.                                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOPRMS    │ SOL 108, 111: Top RMS (root mean square) stress percentage. Only entities with RMS stress levels   │
│           │ in this top percentage are retained and report results. (0.0 < Real £ 100.0; Default = blank -     │
│           │ 100% will be used)                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PFTGID    │ SOL 101, 103, 112 only. ID of a PFTG entry for associating fatigue properties to all elements of   │
│           │ the model.  Ignored if ELSET flag is present and should be left blank in this case. (Optional,     │
│           │ Integer > 0). See Remark 2.                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOPDMG    │ SOL 101, 103, 112 only. Top damage percentage. Retains and reports only the percentage of entities │
│           │ with the highest damage. (0.0 < Real £ 100.0; Default = blank). Cannot be used with SOL 200 or for │
│           │ fatigue analysis of spot and seam welds; leave blank. See Remark 8.                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NENTS     │ SOL 101, 103, 112 only. Specifies the number of actual entities to output in order to limit or     │
│           │ further reduce output file sizes based on most damage or maximum stress/strain range. A positive   │
│           │ value indicates the criterion for entity filtering is based on the most damaged entities. A        │
│           │ negative number indicates the filtering criteria is based on maximum stress/strain range. (Integer │
│           │ != 0; Default = blank). Not valid for SOL 200; leave blank. See Remark 10.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ maxENTS   │ SOL 101, 103, 112 only. This is used only if STROUT=4 is specified in the FATIGUE case control. If │
│           │ the number of entities requested is greater than maxENTS, the job stops to avoid performance       │
│           │ issues. Setting this to a large number can severely affect performance. (Integer > 0; Default =    │
│           │ 100). See Remark 11.                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NHS       │ SOL 101, 103, 112 only. Specifies the number of hot spots to identify in the model. (Integer > 0;  │
│           │ Default = blank). This setting overrides TOPSTR and/or TOPDMG. See Remark 8.                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HSGATE    │ SOL 101, 103, 112 only. Number of element layers to keep around each hot spot defined by NHS. Zero │
│           │ (0) indicates that only the hot spot elements are retained. Otherwise HSGATE layers of connected   │
│           │ elements around each hot spot element are retained. (Integer > 0; Default = 0).                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELSET     │ Flag indicating that a list of element set and property pairs will follow, defining the elements   │
│           │ and their associated properties for consideration in the fatigue analysis. (Optional, Character =  │
│           │ ELSET) See Remark 9.                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELSIDi    │ ID of a SET1, SET3, or SET4 entry listing entities of the model (elements) to be included in the   │
│           │ fatigue analysis. (Integer > 0).  See Remark 3.                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PFTGIDi   │ ID of a PFTG entry, which indicates the fatigue property associated to the preceding entities      │
│           │ defined by ELSIDi. (Optional, Integer > 0). See Remark 2.                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPOTW     │ SOL 101, 103, 112 only. Flag indicating that a list of element set and property pairs will follow, │
│           │ defining the elements and their associated properties for fatigue analysis of spot welds. See      │
│           │ Remark 5. and 6.                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELSIDi    │ Same as ELSIDi under ELSET above. See Remark 3.                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PFTGIDi   │ Same as PFTGIDi under ELSET above.                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEAMW     │ SOL 101, 103, 112 only. Flag indicating that a list of element set and property pairs will follow, │
│           │ defining the elements and their associated properties for fatigue analysis of seam welds.  See     │
│           │ Remark 5.                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELSIDi    │ Same as ELSIDi under ELSET above. These are to elements that make up the seam weld toe, root, or   │
│           │ throat. See Remark 3.                                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PFTGIDi   │ Same as PFTGIDi under ELSET above.                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NDSIDi    │ ID of a SET1 or SET3 entry listing grids of the elements defined by ELSIDi to be retained in the   │
│           │ analysis. These grids define the seam line of the seam weld.  If left blank, all nodes of the      │
│           │ elements are retained. Nodes defined that are not part of ELSIDi are ignored. (Optional, Integer   │
│           │ >0).                                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WELDi     │ Seam weld definition. One of the following: FILLET, OVERLAP, LASER, EDGE, or GENERIC, which define │
│           │ either a fillet, overlap, laser overlap, laser edge overlap or generic seam weld, respectively.    │
│           │ (Character; Default=GENERIC). See Remark 7.                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPEi     │ The type location on the seam weld that this set of elements represent. One of the following: TOE, │
│           │ ROOT, or THROAT. (Character; Default = TOE for all but WELDi = LASER where Default = ROOT). See    │
│           │ Remark 7.                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XELSET    │ Flag indicating that sets of elements to be excluded from the fatigue analysis will follow.        │
│           │ (Optional, Character).  See Remark 4.                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XELSIDi   │ ID of a SET1 or  SET3 entry listing elements of the model  to be excluded from the fatigue         │
│           │ analysis. (Integer>0).  See Remark 3.                                                              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. FTGDEF  bulk data entries are ignored if not selected by a  FATIGUE  case control.  If no  FTGDEF  is present for a given fatigue analysis (or only the  FTGDEF  with no ELSET line), all elements of the model that have fatigue material properties defined are used with default properties except for fatigue analysis of spot and seam welds. If a mix of standard SN/ ε N and seam/spot weld analyses is requested, then an ELSET line is required, otherwise the standard SN/ ε N analysis is ignored. See Remark   below.

2. If no PFTGID or PTFGIDi is specified, default properties are assigned to the entities.

3. If a SET3 is specified, field 3 of the SET3 entry must be set to "ELEM". The SET4 entry must be specified to select elements by property ID. The following elements referenced by PSHELL, PSHEAR, and PSOLID properties are supported for standard S-N and  ε -N fatigue analysis: CQUAD4, CQUADR, CQUAD8, CSHEAR, CTRIA3,CTRIAR, CTRIA6, CHEXA, CPENTA, CPYRAM and CTETRA. The following elements referenced by PBAR, PBEAM, PSOLID, and PWELD properties are supported for fatigue analysis of spot welds: CBAR, CBEAM, CHEXA, CWELD. Only elements referenced by PSHELL properties are available for fatigue analysis of seam welds, excluding TRIA3 as no corner stresses are available from this element.

4. If only the XELSET flag is present, then the entire model is included in the fatigue analysis less the excluded entities.

5. For fatigue analysis of spot or seam welds, the  FTGDEF  card is required with the corresponding keyword and line defining the elements of interest. If standard SN/ ε N analysis is also requested, then an ELSET line is required, otherwise the standard SN/ ε N analysis is ignored.

6. Elements used to represent spot welds are typically very stiff bar or beam (CBAR/CBEAM) elements, weld (CWELD) elements, or individual solid (CHEXA) elements. These elements connect the two metal sheets defined by shell elements (CSHELL). Bars and beams must connect directly to the grids of the shells, whereas welds and fasteners only need to pierce the shell elements. If individual solid elements are used, face G1-G2-G3-G4 must have its grids connected to shell elements that define the top sheet (sheet 1) via RBE3 rigid elements. And face G5-G6-G7-G8 must have corresponding RBE3 elements connecting the bottom sheet (sheet 2). Some CWELD options auto-generate grids on the top and bottom metal sheets (when only GS grid is defined on CWELD entry with no GA/GB grids); the fatigue results are associated to these generated grids.

7. The normals of the throat elements should point outward toward the welder, except for laser overlap, in which case the normals just need to be consistently the same direction. The elements defining the toe and root of the weld must have the top of the shell (Z2 layer) be the side where the crack is expected to develop. For full descriptions of the throat, root, and toe elements for the various seam welds, please see the  MSC Nastran Embedded Fatigue User’s Guide , which show proper modeling techniques. The WELDi and TYPEi entries are used for labeling purposes only and have no effect on internal calculations.

8. Use of TOPSTR/TOPDMG, or NHS/HSGATE allows the user to significantly speed up the analysis times of very large models and more quickly determine the critical damage locations and reduce output. The preferred method is to use NHS/HSGATE as opposed to TOPSTR and/or TOPDMG. If NHS is defined, it overrides any TOPSTR and/or TOPDMG settings, as they are mutually exclusive.

     • NHS/HSGATE: This method determines high damaged areas called  hot spots . The algorithm is such that the  hot spots  detected are distinct from one another. In other words, if two adjacent elements show the highest damage, and NHS=2, the two adjacent element only count as one hot spot and another hot spot away from the first one is detected. In order to show nice postprocessing plots, use HSGATE to retain a certain number of element layers around each hot spot element. If HSGATE=0, only a single element for each hot spot is retained, which means that not all the highest damaged elements are likely reported.

     • If TOPSTR is used alone (TOPDMG is left unspecified), and is a positive percentage, then a two (2) pass analysis is performed where the first (1st) pass determines the approximate percentage of entities to retain with the highest simple stress range. The second (2nd) pass computes damage on only the remaining elements. The simple range test is done using this equation:

     ![bulkfgil03846.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03846.jpg?_LANG=enus)  

     where  Max k   and  Min k  are the maximum and minimum values from each channel of loading history (load case  k ). SCALE and LDM are the scale factor and divisor as defined on  FTGLOAD  entries for each load case  k , otherwise unity is used.

     The calculation is similar for strains, except that the output is in strain units, and the calculation of vonMises strain requires a value of the Poisson ratio. For the purposes of this simple ranking procedure, the Poisson ratio is assumed to be 0.3. When the analysis involves a duty cycle (loading sequence), the resulting assessed stress is the largest value from each of the events in the duty cycle.

     If a negative percentage is given, then the retained elements are determined based on the actual stress range after combination and superposition using that specified on the FTGPARM entry. As an example, if TOPSTR=10%, and the highest stress range is determined to be 1000MPa, then any entity with stress range higher than 900MPa is retained (10% of 1000 is 100; 1000-100=900). This can have the effect of retaining many less entities that the positive percentage method, but has the drawback of being extremely sensitive to high stress gradients.

     • If TOPDMG is used alone (TOPSTR=100% or left unspecified), the percentage of entities returned are simply based on the highest damage. This does not necessarily reduce computation time, but does significantly reduce result recovery time as less entities are retained.

     • If TOPSTR and TOPDMG are both specified, then a 2-pass analysis is performed where the first (1st) pass eliminates all but the highest stressed entities and the second (2nd) pass returns only the percentage of damaged entities based on those retained in the 1st pass.

     • If none of TOPSTR, TOPDMG, or NHS are specified (all are blank or default), then a complete analysis is done on all requested elements. This is the default scenario.

9. Element sets must be the same for all FATIGUE case control IDs that request surface resolved stresses through the  FTGPARM  entry (SRESOLVE field = YES). Otherwise a fatal condition is flagged and the analysis stops.

10. This NENTS parameter can be used by itself or in conjunctions with TOPSTR, TOPDMG, or NHS. Only entities that pass this filter are reported in the f06 file and/or output to the OUTPUT2 and/or HDF5 files. If NENTS is used with the SRESOLVE option on the  FTGPARM  entry, then the number of entities printed may be more as the SRESOLVE option saves the number of grids and each element associated with those grids.

11. If FATIGUE(STROUT=4) case control is used it is highly recommended that output be limited. Temporary CSV files are created for each entity and F06 output can be enormous if not filtered using the ELSET entries. The analysis fails if maxENTS is less than the number of elements requested using ELSET entries when STROUT=4 is specified. Increase maxENTS if necessary after assessing output needs.

