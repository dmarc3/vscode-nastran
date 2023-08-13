## [INFLHB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.INFLHB.xhtml) - Hybrid Inflator Model

Defines the hybrid-inflator characteristics of a COUPLE and/or GBAG subsurface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLHB  INFLHID MASFLRT TBMPT   TEMPC   FRAC                            +       
+       GASNAM1 GASNAM2 GASNAM3 -etc.-                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLHB  9       15              650.    12                                      
        22      25      3                                                       
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INFLID    │ Unique number of an INFLHB entry. (Integer > 0; Required)                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASFLRT   │ Table number of a TABLED1 entry specifying the massflow-rate as a function of time. (Integer > 0; │
│           │ Required)                                                                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEMPT     │ Table number of a TABLED1 entry specifying the static temperature of the inflowing gas as a       │
│           │ function of time. See Remark 3. (Integer > 0)                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEMPC     │ Constant value of the temperature of the inflowing gas. See Remark 3. (Real > 0.0)                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRAC      │ Number of an INFLFRC entry specifying the fractions of the inflowing gas as a function of time.   │
│           │ (Integer > 0; Required)                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GASNAMi   │ ID of an INFLGAS entry. See Remark 4. (Integer)                                                   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The INFLHB entry can be referenced from a   entry.
2. When used in an Euler coupled analysis, the entry can only be used with the single material hydrodynamic Euler solver using an EOSGAM (ideal gas) equation of state.
3. Either TEMPC or TEMPT must be specified. The INFLHB entry uses the specified temperature as the static temperature of the inflowing gas. In literature the static temperature is also known as total-, rest-, or stagnation temperature and refers to the temperature of the gas when brought to rest from its moving condition as opposed to the dynamic temperature that refers to the temperature of the moving gas.
4. At least one inflator gas must be specified using an INFLGAS entry. There is no limit to the number of inflator gases per INFLHB.
