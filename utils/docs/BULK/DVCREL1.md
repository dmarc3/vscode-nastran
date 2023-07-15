## [DVCREL1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVCREL1.xhtml) - Design Variable to Connectivity Property Relation

Defines the relation between a connectivity property and design variables.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVCREL1 ID      TYPE    EID     CPNAME  CPMIN   CPMAX   C0                      
        DVID1   COEF1   DVID2   COEF2   DVID3   COEF3   -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVCREL1 5       CQUAD4  1       ZOFFS           1.0                             
        1       1.0                                                             
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number. (Integer > 0)                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of an element connectivity entry, such as “CBAR”, “CQUAD4”, etc. (Character)                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element Identification number. (Integer > 0)                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CPNAME    │ Name of connectivity property, such as “X1”, “X2”, “X3”, “ZOFFS”, etc. (Character)                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CPMIN     │ Minimum value allowed for this property. If CPNAME references a connectivity property that can     │
│           │ only be positive, then the default value of CPMIN is 1.0E-15. Otherwise, it is -1.0E35. See Remark │
│           │ 4. (Real)                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CPMAX     │ Maximum value allowed for this property. See Remark 4. (Real; Default =1.0E+20)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C0        │ Constant term of relation. (Real; Default = 0.0)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number. (Integer > 0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COEFi     │ Coefficient of linear relation or keyword = “PVAL”. (If i = 1, Real or Character; if i > 1, Real)  │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The relationship between the connectivity property and design variables is given by:

     ![bulkde03340.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03340.jpg?_LANG=enus)  

2. The continuation entry is required.    

3. The fifth field of the entry, CPNAME, only accepts string characters. These string values must be the same as those given in the connectivity entry descriptions in this Guide. For example, if the plate offset is to be designed (CQUAD4, CTRIA3, etc), ZOFFS (case insensitive) must be specified on the CPNAME field.

4. The default values for CPMIN and CPMAX are not applied when the linear property is a function of a single design variable and C0=0. It is expected that the limits applied on the associated DESVAR entry will keep the designed property within meaningful bounds.

5. When "PVAL" is used for the COEF1 field, this is a flag to indicate that the COEF1 value is to be obtained from the connectivity bulk data entry. If a DVCREL1 entry references more than one design variable with the PVAL option, a User Fatal Message will be issued.

6. If the user inputs CQUAD4/CTRIA3 entries and then uses QRMETH = 5 to convert them to CQUADR/CTRIAR entries, the design of items on these entries using the DVCREL1 entry should refer to the converted type (i.e., CQUADR/CTRIAR).   Similarly, if QRMETH=2 or 3 is used, the DVCREL1 entry should refer to CQUAD4/CTRIA3 types.   

