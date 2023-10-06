## [DTI,UNITS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DTI.UNITS.xhtml) - Unit Definitions

Defines units necessary for conversion during the analysis for the Nastran/ADAMS interface or a Nastran fatigue analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     UNITS   1       MASS    FORCE   LENGTH  TIME    STRESS
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DTI     UNITS   1       KG      N       M       S       MPA
```

#### Remarks:

1. The DTI,UNITS Bulk Data entry is required for a ADAMSMNF FLEXBODY=YES run. See the   case control entry. ADAMS is not a unitless code (as is Nastran). Units must be specified. A DTI Bulk Data entry provides ‘UNITS’ (a unique identifier) input as the above example illustrates. Once identified, the units will apply to all superelements in the model. Acceptable character input strings are listed in the table below.   MASS, FORCE, LENGTH, and TIME are required for ADAMS interface.
2. MSC Nastran is a unitless code and it is the user’s responsibility to ensure compatible units. During a fatigue analysis, stress is converted to SI units of MPa because the fatigue material property stress parameters as defined on the MATFTG entry are internally converted to standard SI units of MPa. The stresses from the analysis must match. Thus it is necessary for the user to use DTI,UNITS to define the stress units to ensure proper conversion.  The default units are MPa and this entry is only necessary if stresses are not in MPa.

```text
┌──────────────┬─────────────────────────┬──────────────────┬──────────────────────┬────────────────────────┐
│ Mass         │ Force                   │ Length           │ Time                 │ Stress*                │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ KG -         │ N - newton              │ KM - kilometer   │ H - hour             │ MPA -megapascal        │
│ kilogram     │                         │                  │                      │                        │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ LBM - pound- │ LBF - pounds-force      │ M - meter        │ MIN - minute         │ PA - pascal            │
│ mass         │                         │                  │                      │                        │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ SLUG - slug  │ KGF - kilograms-force   │ CM - centimeter  │ S - second           │ PSI - pound per square │
│              │                         │                  │                      │ inch                   │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ GRAM - gram  │ OZF - ounce-force       │ MM - millimeter  │ MS - millisecond     │ KSI - kilo pound per   │
│              │                         │                  │                      │ square inch            │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ OZM - ounce- │ DYNE - dyne             │ MI - mile        │ US - microsecond     │ PSF - pound per square │
│ mass         │                         │                  │                      │ foot                   │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ KLBM - kilo  │ KN - kilonewton         │ FT - foot        │ NANOSEC - nanosecond │ KSF - kilo pound per   │
│ pound-mass   │                         │                  │                      │ square foot            │
│ (1000 lbm)   │                         │                  │                      │                        │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ MGG -        │ KLBF - kilo pound-force │ IN- inch         │ D - day              │ DYNECM2 - dyne per     │
│ megagram     │ (1000 lbf)              │                  │                      │ square centimeter      │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ SLINCH - 12  │ MN - millinewton        │ UM - micrometer  │                      │ BAR - bar              │
│ slugs        │                         │                  │                      │                        │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ UG -         │ UN - micronewton        │ NM - nanometer   │                      │ ATM - physical         │
│ microgram    │                         │                  │                      │ atmosphere             │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ NG -         │ NN - nanonewton         │ ANG - angstrom   │                      │                        │
│ nanogram     │                         │                  │                      │                        │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│ USTON  - US  │                         │ YD - yard        │                      │                        │
│ ton          │                         │                  │                      │                        │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│              │                         │ MIL - milli-inch │                      │                        │
├──────────────┼─────────────────────────┼──────────────────┼──────────────────────┼────────────────────────┤
│              │                         │ UIN - micro-inch │                      │                        │
└──────────────┴─────────────────────────┴──────────────────┴──────────────────────┴────────────────────────┘
```

* For fatigue analysis of spot welds, only MPA, PA, PSI, KSI, PSF, and KSF are supported. For random vibration fatigue analysis using SOL 108 or 111, only MPA, PA, PSI, and KSI are sup­ported. 
