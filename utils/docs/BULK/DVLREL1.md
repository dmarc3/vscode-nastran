## [DVLREL1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVLREL1.xhtml) - Defines the linear relation between analysis model loading and design variables in SOL 200 with Analysis = STATICS

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVLREL1 ID      TYPE    SID     LNAME   LMIN    LMAX    C0                      
        ATT1    ATT2    ATT3    ATT4    ATT5                                    
        DVID    COEF    DVID2   COEF2   DVID3   Etc                             
```
#### Example: Design the N1 FORCE at GRID 100 to be equal to DESVAR=10

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVLREL1 10      FORCE   300     N1                                              
        100                                                                     
        10      1.0                                                             
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number (Integer>0)                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Name of Load, such as FORCE, see Remark 2. for supported types (Character)                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set ID (Integer>0)                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LNAME     │ Load Name, such as F or N1 on the FORCE entry. See Remark 2. (Character)                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LMIN      │ Minimum value for the load. See Remark 5.  (Real, default=-1.0e35)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LMAX      │ Maximum value for the load (Real, Default=1.0e20)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C 0       │ Constant term of relation (Real, Default=0.0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATTi      │ Attributes of the designed load, see Remark 2. (Integer>0 or blank)                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number. (Integer>0)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COEFi     │ Coefficient of linear relation or keyword=”PVAL”, See Remark 3. (If i=1, Real or Character; if │
│           │  i>1, Real )                                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The relationship between the analysis model load and the design variables is given by:

![bulkde03360.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03360.jpg?_LANG=enus)  

2. Supported TYPEs and their ATTi meaning are given in the following table:

```text
┌───────────┬─────────────────┬──────────────────┬─────────────────┬────────────────┬────────────────┬────────────────┐
│ Load Type │ LNAME           │ ATT1 (integer)   │ ATT2 (integer)  │ ATT3 (integer) │ ATT4 (integer) │ ATT5 (integer) │
│           │ (character)     │                  │                 │                │                │                │
├───────────┼─────────────────┼──────────────────┼─────────────────┼────────────────┼────────────────┼────────────────┤
│ FORCE     │ F, N1, N2 or N3 │ G                │ CID (see remark │                │                │                │
│           │                 │                  │ 6)              │                │                │                │
├───────────┼─────────────────┼──────────────────┼─────────────────┼────────────────┼────────────────┼────────────────┤
│ LOAD      │ S or Si         │ 0 if LNAME is S, │                 │                │                │                │
│           │                 │ Li otherwise     │                 │                │                │                │
├───────────┼─────────────────┼──────────────────┼─────────────────┼────────────────┼────────────────┼────────────────┤
│ MOMENT    │ M, N1, N2 or N3 │ G                │ CID (see remark │                │                │                │
│           │                 │                  │ 6)              │                │                │                │
└───────────┴─────────────────┴──────────────────┴─────────────────┴────────────────┴────────────────┴────────────────┘
```
3. When "PVAL" is used for the COEF1 field, this is a flag to indicate that the COEF1 value is to be obtained from the load bulk data entry. If a DVLREL1 entry references more than one design variable with the PVAL option, a User Fatal Message will be issued.

4. If there are multiple loads that satisfy the designation of the request (for example two FORCE entries with identical SID, GRID and CID values), it is a user input error.

5. The default values of LMIN and LMAX are not applied when the linear property is a function of a single design variable and C0=0. It is expected that the limits applied on the DESVAR entry will keep the designed property within reasonable bounds

6. Input of these data is optional. It most cases, leaving it off will result in a single load that qualifies with the remaining attributes. If there are multiple instances that qualify, it is a user input error.

7. The use of this entry is limited to statics and buckling analyses in SOL 200.

