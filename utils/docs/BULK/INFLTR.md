## [INFLTR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.INFLTR.xhtml) - Airbag Inflator Model

Defines the inflator characteristics of a COUPLE and/or GBAG subsurface. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLTR  INFLID  MASFLRT TEMPT   TEMPC   GASNAME                         +       
+       MID                                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLTR  5       100             907.0   1.5     283.0                           
        0       0       0                                                       
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INFLID    │ Unique number of an INFLTR entry. (Integer > 0; Required)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASFLRT   │ Table number of a TABLED1 entry specifying the massflow-rate as a function of time. (Integer > 0;  │
│           │ Required)                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEMPT     │ Table number of a TABLED1 entry specifying the static temperature of the inflowing gas as a        │
│           │ function of time. See Remark 3. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEMPC     │ Constant value of the static temperature of the inflowing gas. See Remark 3. (Real > 0)            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ , GASNAM  │ Ratio of specific heat constants if real. Name of an INFLGAS entry if character. See Remarks       │
│           │ 4. and 5. (Real > 0 or Character)                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Specific heat at constant volume. See Remark 5. (Real > 0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ R         │ Gas constant. See Remark 5. (Real > 0)                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Specific heat at constant pressure. See Remark 5. (Real > 0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material MATDEUL ID of the Inflator material. See Remark 2. Only used for MMHYDRO solver. (Integer │
│           │ > 0)                                                                                               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The INFLTR entry can be referenced from an ABINFL entry.
2. When used in combination with the single material hydrodynamic Euler solver an EOSGAM (ideal gas) equation of state is required. In that case the material number MID can be left blank. When using the Multi-material solver the Material number MID has to point to one of the Eulerian materials and the equation of state of that material has to be of type EOSGAM. The Multi-material solver does not allow the use of gas fractions.
3. Either TEMP-C or TEMP-T must be specified. The INFLTR entry uses the specified temperature as the static temperature of the inflowing gas. In literature the static temperature is also known as total-, rest-, or stagnation temperature and refers to the temperature of the gas when brought to rest from its moving condition, as opposed to the dynamic temperature which refers to the temperature of the moving gas.
4. If this field contains a real entry real or is left blank, the inflator gas constants are given on the INFLTR entry itself, see Remark   Otherwise, the entry will be read as the name of an INFLGAS entry. In this case, the remaining entries must be left blank.
5. Specify only two of the four gas constants. They are related as:

     ![bulkfgil04062.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04062.jpg?_LANG=enus)  
