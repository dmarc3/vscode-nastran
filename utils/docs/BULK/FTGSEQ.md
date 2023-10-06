## [FTGSEQ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FTGSEQ.xhtml) - Fatigue Load Sequence

Defines the loading sequence for pseudo-static fatigue analysis using SOL 101 or modal transient fatigue analysis using SOL 103 or SOL 112 or vibration fatigue using SOL 108 or SOL 111.

#### Format (SOL 101, 103, 112):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGSEQ  ID      EVNTOUT METHOD                                          +       
+       FID1    N1      FID2    N2      FID3    N3      FID4    N4      +       
+       FID5    N5      ...     ...     ...     ...     ...     ...     +       
+       -etc.-                                                          +       
+       "UNITS" EQUIV   EQNAME                                                  
```

#### Format (SOL 108, 111):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGSEQ  ID      EVNTOUT         TUNIT   LDM                             +       
+       FID1    N1      FID2    N2      FID3    N3      FID4    N4      +       
+       FID5    N5      ...     ...     ...     ...     ...     ...     +       
+       -etc.-                                                          +       
+       "UNITS" EQUIV   EQNAME                                                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGSEQ  1                                                                       
        6       1 5                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique ID with respect to all other FTGSEQ and FTGEVNT entries called out by a FATIGUE case        │
│           │ control. (Integer>0) See Remark 1.                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EVNTOUT   │ Flag for requesting fatigue output for each event individually. (Integer; 0=no or 1=yes; Default = │
│           │ 0). See Remark 7. For SOL 108 and 111, this also controls the written output request for spectral  │
│           │ statistics (m0, m1, m2, m4, etc.).                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ SOL 101, 103, 112 only. Event processing method. 0=independent, 1=Combined Full, 2= Combined Fast  │
│           │ (Integer; Default = 0). This entry is only honored from the controlling FTGSEQ entry when called   │
│           │ out by the FATIGUE case control. Otherwise it is ignored. See Remark 2. Currently only METHOD=0 is │
│           │ supported.                                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TUNIT     │ SOL 108, 111 only. Time units of Ni values. SECS, MINS, HRS, DAYS, WKS, MTHS, YRS for seconds,     │
│           │ minutes, hours, days, weeks, months, or years, respectively (Character; Default=SECS).             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LDM       │ SOL 108, 111 only. FE load magnitude used to create transfer function. Used to normalize the       │
│           │ transfer function stresses (Real, Default=1.0).                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FIDi      │ ◾SOLs 101, 103: ID of a FTGEVNT or another FTGSEQ entry for pseudo-static fatigue analysis using  │
│           │ SOL 101 or a modal analysis using SOL 103 (Integer > 0).  See Remark 3. and 4. ◾SOL 112: A        │
│           │ subcase ID that represents the loading event or another FTGSEQ entry for modal transient fatigue   │
│           │ analysis using SOL 112. (Integer > 0).  See Remark 3. and 4. ◾SOL 108, 111: ID of a FTGEVNT entry │
│           │ for random vibration fatigue using SOLs 108 or 111. Nested FTQSEQs are not allowed.                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ ◾SOLs 101, 103, 112: Number of repeats of this loading sequence or event (Real>0.0, Default=1.0). │
│           │ Ignored if only one event is defined. For METHOD equal 1 and 2, Ni must be a whole number, i.e.,   │
│           │ 1.0, 2.0, 3.0, etc. In other words, fractions of events are not allowed. Fractional events are     │
│           │ also not allowed for any METHOD if the corresponding FID references a FTGSEQ entry. See Remark     │
│           │ 3. and 4. ◾SOL 108, 111: Duration of each event in TUNIT units. This value is not used for random │
│           │ loading only. These values are also not needed and overwritten if SWRATE/NSWEEP are provided on a  │
│           │ FTGLOAD entry of TYPE= SINE (sine sweep). (Real>0.0; Default=1.0).                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ "UNITS"   │ Flag indicating that a fatigue equivalent unit name is applied to this loading. See Remark 5. and  │
│           │ 6.                                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQUIV     │ Number of equivalent units. (Real>0.0; Default=1.0 ). See Remark 5. and 6.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQNAME    │ Equivalent name of this loading event. EQNAME can span across fields 4 through 9.  If not defined  │
│           │ it will be called Repeats (Character). No spaces are allowed. See Remark 5. and 6.                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. FTGSEQ bulk data are called out by FATIGUE case control.
2. Processing of events can be done by determining the damage due to each event independently (default) and then summing the damage due to all events. Or the events can be concatenated and damage determined after rainflow cycle counting over all events. The advantage of the independent method over the combined methods is computational expense versus accuracy. The combined method will close all cycles, whereas the individual method may miss a large damaging cycle if the cycle begins in one event and ends or closes in a subsequent event. The combined fast method performs a rainflow count data reduction to speed up the analysis and determine the most critical locations first and then redoes a full analysis on the critical locations. The concatenated methods are currently not supported in this version.
3. Once a FTGSEQ bulk data entry is referenced in an FIDi field, it can't be referenced again in any other FTGSEQ entries (within its own associations - the same fatigue analysis) to avoid infinite loops.  And if it is referenced by the FATIGUE case control, it cannot appear in any FIDi field of the FTGSEQ bulk data. 
4. Different FTGEVNTs can be set up and the user can construct each sequence by specifying how many times to repeat each event in a sequence.  One sequence could then be referenced in another sequence to tell the new sequence how many times to repeat that sequence.   As an example, assume there are three events an automobile is subjected to:  cobble stones, pot holes, speed bumps.   One sequence might be five (5) "cobble stones," six (6) "potholes" and three (3) "speed bumps."  This sequence may be called "torture track."   Also define two more events called "cornering left" and "cornering right."   A load sequence of ten (10) "cornering left" and ten (10) "cornering right" might be called "country road."    Now with a nested FTGSEQ you can put these together any way you want.  So one fatigue analysis might use a sequence of only "country road," another of only "torture track" and another of a combined six (6) "torture tracks," five (5) "country roads," followed by one (1) more "torture track" and one (1) more "country road"  This would result in 3 fatigue analyses as shown in   below.
5. If the "UNITS" flag is absent, the default fatigue equivalent unit is 1.0  Repeats  of the resulting stress time history sequence. Equivalent units specified on FTGLOAD entries are ignored when FTGSEQ entries are used
6. Example of using equivalent units:   If one repeat (or total duration) of the sequence is equivalent to five (5) times around a test track, the equivalent unit name, EQNAM, might be " laps ," and the equivalent unit, EQUIV, would be five (5).  Fatigue life will be reported in these units if defined, otherwise they are reported as repeats of the loading sequence.  Life output is reported in both  Repeats  and the fatigue equivalent units, if defined.
7. For SOL 200 only EVNTOUT=0 is supported. Also some additional output file formats are not supported if EVNTOUT>0. See the  FATIGUE case control entry  forSTROUT=4 limitations. If a factor of safety (FOS line present on   FTGPARM  entry), safety factors are only reported for the sum of all events.
8. SOL   108 ,  111 : For vibration fatigue a FTGSEQ cannot reference both an event with single input random loading and multiple input random loading.

Table 0-13    Example of nested FTGSEQ entries

```nastran
SET 1=22,33,44
FATIGUE=1
BEGIN BULK
$
FTGSEQ,22           $<-- 1 country road only
      ,2
FTGSEQ,33           $<-- 1 torture track only
      ,3
$combined
FTGSEQ,44           $<-- 6 torture track, 5 country road, + 1 of each
      ,3,6.0,2,5.0,3,1.0,2,1.0
$country road:
FTGSEQ,2
      ,8,10.0,9,10.0    $<-- 10 cornering left + 10 cornering right
$torture track:
FTGSEQ 3
      ,5,5.0,6,6.0,7,3.0  $<-- 5 cobble stones, 6 potholes, 3 speed bumps
$
FTGEVNT,5...    $cobble stones
FTGEVNT,6...    $potholes
FTGEVNT,7...    $speed bumps
FTGEVNT,8...    $cornering right
FTGEVNT,9...    $cornering left
```
