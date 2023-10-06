## [LOADCYT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LOADCYT.xhtml) - Table Load Input for Cyclic Symmetry

Specifies loads as a function of azimuth angle by references to tables that define scale factors of loads versus azimuth angles. This entry is used only when STYPE = “AXI” on the CYSYM entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCYT SID     TABLEID1LOADSET1METHOD1 TABLEID2LOADSET2METHOD2                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCYT 10      19      27              21      26      1                       
```

```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ SID       │ Load set identification number. (Integer > 0)    │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ TABLEIDi  │ Table ID for table load input for load set Li.   │                                               │
│           │ See Remark 3. (Integer > 0)                      │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ LOADSETi  │ Load set Li. (Integer > 0)                       │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ METHODi   │ Method of interpolation. See Remark 5. (Integer: │                                               │
│           │ 0 or 1; Default = 0)                             │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ 0                                                │ Interpolate the load with the Fourier         │
│           │                                                  │ coefficients specified in the table up to the │
│           │                                                  │ specified number of harmonics. (Default)      │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ 1                                                │ Interpolate the magnitude of the load at      │
│           │                                                  │ corresponding grid points in all segments.    │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────┘
```

#### Remarks:

1. The LOADCYT entry is selected by the LOAD Case Control command.
2. The load set ID given in fields 4 or 7 of this entry may refer to FORCE, MOMENT, PLOAD, PLOAD2, PLOAD4, SPCD, TEMP, or TEMPP1 Bulk Data entries.
3. Either TABLED1 or TABLED2 type tabular data of azimuth angle (Xi) versus scale factors (Yi) may be used.  The azimuth angle values must be in degrees.
4. The scale factors given in the tables referenced by TABLEDi entries will be applied only to the magnitudes of the loads defined by LOADSET IDs given in fields 4 or 7.
5. For grid point loading entries, (like FORCE, MOMENT, SPCD, and TEMP Bulk Data entries) METHODi = 1 option should be used.  For element loading entries (like PLOAD, PLOAD2, PLOAD4, and TEMPP1 Bulk Data entries) either METHODi = 0 or METHODi = 1 option can be used.  In particular, if harmonic output of element stresses under temperature loading via TEMPP1 Bulk Data entry, METHODi = 0 option should be used to specify TEMPP1 load set.
