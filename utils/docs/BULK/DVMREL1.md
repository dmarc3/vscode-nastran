## [DVMREL1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVMREL1.xhtml) - Design Variable to Material Relation

Defines the relation between a material property and design variables.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVMREL1 ID      TYPE    MID     MPNAME  MPMIN   MPMAX   C0              +       
+       DVID1   COEF1   DVID2   COEF2   DVID3   COEF3   -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVMREL1 5       MAT1    1       RHO     0.05    1.0                     +       
+       1       1.0                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer > 0)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of a material property entry, such as “MAT1”, “MAT2”, etc. (Character)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material Identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MPNAME    │ Name of material property, such as “E” or “RHO”. (Character)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MPMIN     │ Minimum value allowed for this property. If MPNAME references a material property that can only be │
│           │ positive, then the default value for MPMIN is 1.0E-15. Otherwise, it is -1.0E35. See Remark 4.     │
│           │ (Real)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MPMAX     │ Maximum value allowed for this property. See Remark 4. (Real; Default = 1.0E+20)                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C0        │ Constant term of relation. (Real; Default = 0.0)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number. (Integer > 0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COEFi     │ Coefficient of linear relation or keyword = “PVAL”. (If i = 1, Real or Character; if i > 1, Real)  │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The relationship between the material property and design variables is given by:

 ![bulkde03362.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03362.jpg?_LANG=enus)  

2. The continuation entry is required.
3. The fifth field of the entry, MPNAME, only accepts string characters. It must be the same as the name that appears in the   for various material properties. For example, if the isotropic material density is to be designed, RHO (case insensitive) must be specified on the MPNAME field.
4. The default value for MPMIN and MPMAX are not applied when the linear property is a function of a single design variable and C0=0.0. It is expected that the limits applied to the DESVAR entry will keep the designed property within reasonable bounds.
5. When "PVAL" is used for the COEF1 field, this is a flag to indicate that the COEF1 value is to be obtained from the material bulk data entry.  If a DVMREL1 entry references more than one design variable with the PVAL option, a User Fatal Message will be issued.
