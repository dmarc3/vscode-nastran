## [FTGLOAD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FTGLOAD.xhtml) - Fatigue Cyclic Loading Variation

Defines cyclic loading variation for pseudo-static fatigue analysis using SOL 101 or modal analysis using SOL 103 or random PSD, deterministic, sine sweep and/or static offset loading for SOL 108 and SOL 111.

#### Format (SOL 101 and 103):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGLOAD ID      TID     LCID    LDM     SCALE/  OFFSET/MINTYPE    CHNL  +         
+                                       MAX                             +       
+       "UNITS" EQUIV   EQNAME                                                  
```

#### Format (SOL 108 and 111):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGLOAD ID      TID     LCID            SCALE   OFFSET  TYPE            +       
+       "DETL...F1      G1/H1   B1      F2      G2/H2   B2              +       
+               F3      G3/H3   B3      ...     ...     ...             +       
+               -etc.-                                                  +       
+       “SWEEP” F1      G1/H1           Fn      Gn/Hn                   +       
+               SWTYPE  SWNUM   SWRATE  NSWEEP  FRFUNIT LDUNIT                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGLOAD 55      4       2       1.0     1.0     0.0                             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGLOAD 23      4       5       1.0     1.0     0.0     DB              +       
+       UNITS   5.5     Flights                                                 
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID          │ Unique ID which is referenced by a FTGEVNT entry or directly by a FATIGUE case control in the case │
│             │ of SOL 101 only for a single load (Integer > 0).  See Remark 1.                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID         │ ◾SOL 101, 103: Table ID of a TABLFTG (or TABLED1) entry that defines the time variation of the    │
│             │ loading or the ID of a UDNAME entry for external definition of the loading time variation (Integer │
│             │ > 0). See Remarks 2. through 6. Ignored if TYPE=CONST or STATIC. ◾SOL 108, 111: leave blank       │
│             │ unless: ◾TYPE=STATIC: UDNAME ID referencing an external OP2 file containing stress results for    │
│             │ static loading offsets. Leave blank (and set LCID = 0 if a constant offset defined solely by the   │
│             │ OFFSET field is desired. ◾TYPE = PSD with TIM2PSD: UDNAME ID referencing an external RPC or CSV   │
│             │ file when time history to PSD conversion is requested. A TIM2PSD entry must be present in this     │
│             │ case, otherwise TID is ignored.                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LCID        │ ◾SOL 101: Subcase ID of a linear static solution SUBCASE (Integer > 0, no default). ◾SOL 103:    │
│             │ Mode number for SOL 103 (Integer > 0, no default). ◾SOL 108, 111: ◾TYPE = PSD with no TIM2PSD:   │
│             │ SID of RANDPS entry(ies). TID should be left blank in this case. ◾TYPE = PSD with TIM2PSD: -1 for │
│             │ fully correlated multi-input loading, -2 for uncorrelated multi-input loading. ◾TYPE = STATIC:    │
│             │ SUBCASE ID of a static SUBCASE (freq=0.0). A TID must also be defined in this case to point to an  │
│             │ external OP2 file. Set to zero (0) if a constant offset solely defined by the OFFSET field is      │
│             │ desired. TID should be left blank in this case. ◾TYPE=SINE or NARROW: SUBCASE ID of transfer      │
│             │ function (TF) used for deterministic or sweep loading. TID should be left blank in this case.      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LDM         │ SOL 101, 103 only. Largest magnitude of the applied load (in the same units used to define the     │
│             │ load time variation in field TID) used to normalize the load (Real, default=1.0). This effectively │
│             │ scales the stress to simulate a stress state due to a unit load.  See Remark 7.                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE/ MAX  │ SOL 101, 103: Scale factor applied to the load time history (Real, default=1.0). See Remark 7. Or  │
│             │ the 1st peak level of a constant amplitude signal if TYPE=CONST (Real, default=1.0). SOL 108, 111: │
│             │ Acts as an additional scale factor on the input PSD. This applies only to TYPE=PSD (Real,          │
│             │ default=1.0).                                                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFSET/ MIN │ SOL 101, 103: Offset applied to the load time history (Real, default=0.0). See Remark 7. Or the    │
│             │ 2nd peak level of a constant amplitude signal if TYPE=CONST (Real, default = -1.0). MAX can be <   │
│             │ or > than MIN for TYPE=CONST. SOL 108, 111: Offset of resultant stress PSD in stress units. This   │
│             │ has the effect of adding a mean stress effect to the random load response. This only applies to    │
│             │ TYPE=STATIC and if TID is blank, this is only a constant offset. With TID a variable offset plus   │
│             │ this constant offset is applied (Real, default = 1.0).                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE        │ Flag indicating the type of load being defined. Values can be: blank, "DB", "DAC", "RPC", "CONST", │
│             │ “PSD”, “SINE”, “NARROW” or "STATIC". Default is blank. See Remarks 2. through 6.                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CHNL        │ SOL 101 and 103 only. Channel of referenced RPC file (TYPE=RPC). (Integer >0, Default is blank).   │
│             │ See Remark 12.                                                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ "UNITS"     │ SOL 101 and 103 only. Flag indicating that a fatigue equivalent unit name is defined for this      │
│             │ loading. See Remarks 9. and 10.                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQUIV       │ Number of equivalent units (Real>0.0, default=1.0).  See Remarks 9. and 10.                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQNAME      │ Equivalent name of this loading history. EQNAME can span across fields 4 through 9.  If not        │
│             │ defined it will be called Repeats (Character). No spaces are allowed. See Remarks 9. and 10.       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ "DETLOAD"   │ SOL 108 and 111 only. Flag indicating that deterministic load input is to follow for TYPE=SINE or  │
│             │ NARROW.                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Fi          │ Frequency of sine wave for TYPE=SINE or center frequency of narrow band frequency block for        │
│             │ TYPE=NARROW. (Real>0.0; no Default).                                                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi Hi       │ Height of sine wave (Gi) in units of peak amplitude (FE stress units) for TYPE=SINE. Height of     │
│             │ narrow band PSD block (Hi) in units of (stress)2/Hz for TYPE=NARROW. (Real>=0.0; no Default).      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Bi          │ Width of narrow band frequency block. Only supplied for TYPE=NARROW. (Real>=0.0; no Default).      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ "SWEEP"     │ SOL 108 and 111 only. Flag indicating that sine sweep load input is to follow for TYPE=SINE (not   │
│             │ supported for NARROW).                                                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1/Fn       │ F1/Fn Frequency of 1st and last sine waves for TYPE=SINE. (Real>0.0; no Default).                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1/H1 Gn/Hn │ Height of 1st (G1) and last (Gn) sine waves in units of peak amplitude (FE stress units) for       │
│             │ TYPE=SINE. (Real>=0.0; no Default).                                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SWTYPE      │ The sweep type: Decibel (DB), Octave (OCT), or Linear (HZ). (Character; Default = HZ)              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SWNUM       │ Number of sine/narrow bands to use (Integer>0 where N=SWNUM+1; Default = 50)                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SWRATE      │ Sweep rate per second in HZ (default), DB or OCT. (Real>0.0; No Default)                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSWEEP      │ Number of sweep passes (Integer>0; No Default).                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRFUNIT     │ Units of loading used to create FRF - can be acceleration (A), velocity (V), displacement (D), or  │
│             │ force (F). Used for TYPE=SINE only.  (Character; Default = A)                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LDUNIT      │ Units of loading used to define sweep - can be acceleration (A), velocity (V), displacement (D),   │
│             │ or force (F). Used for TYPE=SINE only. (Character; Default = A)                                    │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If a FATIGUE case control command invokes an ID that is present on both an FTGSEQ entry and a FTGLOAD entry, the FTGSEQ request will be honored and the FTGLOAD entry will be ignored unless it is referenced on a FTGEVNT entry.
2. For SOL 101 and 103 , if the TYPE field is blank then TID references a TABLFTG or TABLED1 entry. For SOL 108 or 111, TYPE must be supplied.
3. For SOL 101 and 103 , if TYPE=DB, DAC or RPC, then TID references a UDNAME ID. A UDNAME entry must be supplied in this case to specify the file and path of the externally defined load time variation. This file is expected to be in standard DAC file format or channel data in the form of a RPC file. TYPE=DB is the same as TYPE=DAC. You cannot mix TYPE=RPC designations with any other TYPEs within the same fatigue analysis (FATIGUE=FID). If RPC is used, all FTGLOAD entries must use TYPE=RPC. The same RPC file must be referenced via UDNAME for all FTGLOADs of the same event (FTGEVNT).  For SOL 108 and 111 , if TYPE=STATIC or if TYPE=PSD with TIM2PSD entry active, the UDNAME references an external OP2 file or RPC/CSV channel data file, respectively.
4. For SOL 101 and 103 , if TYPE is STATIC, the TID field should be left blank as it will be ignored.  STATIC indicates that the stress state from the specified LCID is to act as a static offset with no load time variation when performing the linear superposition, which will give every element a different offset defined by the stress state at each element of the specified subcase, as opposed to simply specifying the OFFSET field, which gives every element the same offset. If the "STATIC" flag is specified, there must be at least two FTGLOAD entries defined and called out by a FTGEVNT entry, one of which must be time varying (see Remark  ).  For SOL 108 and 111 , if TYPE is STATIC, the TID field must be supplied.
5. For SOL 101 and 103 , if TYPE is CONST, the TID, LDM, and CHNL fields are ignored. The MAX and MIN fields are used to define the maximum and minimum values of a constant amplitude cycle. TYPE=CONST cannot be mixed with any other TYPE values for a given fatigue analysis (FATIGUE=FID). All loading must be of TYPE=CONST. This is sometimes referred to as block loading.
6. For modal analysis using  SOL 103 , the referenced load variation defines the modal participation factors for the referenced mode.  
7. For SOL 101 and 103 , the LDM, SCALE, and OFFSET are used together in the following manner to scale/modify the stress state in order to determine the resulting stress time variation:    ![bulkfgil03848.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03848.jpg?_LANG=enus)
8. where  ![bulkfgil03850.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03850.jpg?_LANG=enus)  is the resulting stress tensor at time t,  ![bulkfgil03852.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03852.jpg?_LANG=enus)  is the stress tensor from the subcase or mode defined by the LCID field, and P(t) is the y value of the load-time history at time t as defined by the TID field. For multiple loads, the principle of linear superposition is used to combine all loads for a single event.  For SOL 108 and 111,  LDM and SCALE act as a divisor and multiplier, respectively, to the defined loading. OFFSET is only used for TYPE=STATIC and acts as an additional constant offset over all entities.
9. If the "UNITS" flag is absent, the default fatigue equivalent unit is 1.0  Repeats  of the stress time history. If this FTGLOAD is referenced by a FTGEVNT, then the equivalent units on this entry are ignored and those on the FTGSEQ entry take precedent. Only if a FTGLOAD is directly referenced by a FATIGUE case control are the fatigue equivalent units used as defined on the FTGLOAD entry.
10. Example of using equivalent units:   If one repeat of the defined time history is equivalent to 5 times around a test track, the equivalent unit name, EQNAME, might be " laps ," and the equivalent unit, EQUIV, would be 5.0.  Fatigue life will be reported in these units if defined, otherwise they are reported as  Repeats  of the loading. Life output is reported in both  Repeats  and the fatigue equivalent units, if defined. 
11. All FTGLOAD entries referenced by a FTGEVNT should reference different SUBCASEs for  SOL 101  (or modes for  SOL 103 ) and must have time variations consisting of the same number of points.
12. CHNL is only used for TYPE=RPC for  SOL 101 and 103 . If supplied, the specified channel of the referenced RPC file is used. If it is left blank, the next available channel sequentially from the last one referenced will be used. For example, if there are three FTGLOAD entries for a specific event and CHNL is blank for all three, the 1st one will use channel 1, the 2nd one will use channel 2 and the 3rd will used channel 3. If in this example the 1st specifies CHNL=11 and the others are blank, then the channels used will be 11, 12, and 13. If the 1st is left blank and the 2nd references CHNL=12, then the channels used will be 1, 12, and 13.
