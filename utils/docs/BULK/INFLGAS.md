## [INFLGAS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.INFLGAS.xhtml) - Inflator Gas Definition

Defines a thermically ideal gas to be used with a standard or hybrid inflator. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLGAS GASNAM  TYPE    VALUE   CPGAS   V1      V2      V3      V4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
INFLGAS 101     RSPEC   189.    CONSTANT846.                                    
```

```text
┌────────────┬──────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer  │ Meaning                                          │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ GASNAM     │ Unique number of an INFLGAS entry. (Integer;     │                                                  │
│            │ Required)                                        │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TYPE       │ Specific gas constant or molar weight specified. │                                                  │
│            │ (Character; RSPEC)                               │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ RSPEC                                            │ Specific gas constant                            │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ MOLWT                                            │ Molar weight, see Remark 2.                      │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ VALUE      │ Value of the variable TYPE. (Real > 0; Required) │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ CPGAS      │ The variation of the specific heat constant at   │                                                  │
│            │ constant pressure. (Character; CONSTANT)         │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ CONSTANT                                         │ The specific heat is constant and specified in   │
│            │                                                  │ V1.                                              │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ TABLE                                            │ The specific heat constant is temperature-       │
│            │                                                  │ dependent. V1 is the number of a TABLED1 entry   │
│            │                                                  │ giving the variation of the specific heat with   │
│            │                                                  │ the temperature.                                 │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ POLY                                             │ The specific heat constant is temperature-       │
│            │                                                  │ dependent. V1 through V4 are the coefficients of │
│            │                                                  │ a polynomial expression, see Remark 3.           │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ V1         │ The specific heat constant, the number of a      │                                                  │
│            │ TABLED1 entry or the first polynomial            │                                                  │
│            │ coefficient, depending on the value of CPGAS.    │                                                  │
│            │ (Real or Integer > 0; Required)                  │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ V2, V3, V4 │ Coefficients of polynomial expression when CPGAS │                                                  │
│            │ equals POLY. (Real; 0.0)                         │                                                  │
└────────────┴──────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. INFLGAS can be referenced by an INFLTR, INFLHB or INITGAS entry.
2. When the molar weight is given, the universal gas constant  ![bulkfgil04018.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04018.jpg?_LANG=enus)  must be specified using PARAM, UGASC, so that:

     ![bulkfgil04020.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04020.jpg?_LANG=enus)  

3. A polynomial expression for  ![bulkfgil04022.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04022.jpg?_LANG=enus)  is given by:

     ![bulkfgil04024.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04024.jpg?_LANG=enus)  

4. The specific heat constant at constant volume  ![bulkfgil04026.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04026.jpg?_LANG=enus)  is calculated from the specific heat constant at constant pressure  ![bulkfgil04028.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04028.jpg?_LANG=enus) , the universal gas constant and the molecular weight according to:

     ![bulkfgil04030.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04030.jpg?_LANG=enus)  

5. The ratio of specific heats is given as:

     ![bulkfgil04032.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04032.jpg?_LANG=enus)  
