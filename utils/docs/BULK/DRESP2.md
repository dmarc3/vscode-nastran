## [DRESP2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DRESP2.xhtml) - Design Sensitivity Equation Response Quantities

Defines equation responses that are used in the design, either as constraints or as an objective.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DRESP2  ID      LABEL   EQID ...REGION  METHOD  C1      C2      C3      +       
+       “DESVAR”DVID1   DVID2   DVID3   DVID4   DVID5   DVID6   DVID7   +       
+               DVID8   -etc.-                                          +       
+       “DTABLE”LABL1   LABL2   LABL3   LABL4   LABL5   LABL6   LABL7   +       
+               LABL8   -etc.-                                          +       
+       “DRESP1”NR1     NR2     NR3     NR4     NR5     NR6     NR7     +       
+               NR8     -etc.-                                          +       
+       “DNODE” G1      C1      G2      C2      G3      C3              +       
+               G4      C4      etc.                                    +       
+       “DVPR...DPIP1   DPIP2   DPIP3   DPIP4   DPIP5   DPIP6   DPIP7   +       
+               DPIP8   DPIP9   -etc.-                                  +       
+       “DVCR...DCIC1   DCIC2   DCIC3   DCIC4   DCIC5   DCIC6   DCIC7   +       
+               DCIC8   DCIC9   -etc.-                                  +       
+       “DVMR...DMIM1   DMIM2   DMIM3   DMIM4   DMIM5   DMIM6   DMIM7   +       
+               DMIM8   DMIM9   -etc.-                                  +       
+       “DVPR...DPI2P1  DPI2P2  DPI2P3  DPI2P4  DPI2P5  DPI2P6  DPI2P7  +       
+               DPI2P8  DPI2P9  -etc.-                                  +       
+       “DVCR...DCI2C1  DCI2C2  DCI2C3  DCI2C4  DCI2C5  DCI2C6  DCI2C7  +       
+               DCI2C8  DCI2C9  -etc.-                                  +       
+       “DVMR...DMI2M1  DMI2M2  DMI2M3  DMI2M4  DMI2M5  DMI2M6  DMI2M7  +       
+               DMI2M8  DMI2M9  -etc.-                                  +       
+       “DRESP2”NRR1    NRR2    NRR3    NRR4    NRR5    NRR6    NRR7    +       
+               NRR8    -etc.-                                          +       
+       “DVLR...DLIL1   DLIL2   DLIL3   DLIL4   DLIL5   DLIL6   DLIL7   +       
+               DLIL8   -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DRESP2  1       LBUCK   5       3                                       +       
+       DESVAR  101     3       4       5       1       205     209     +       
+               201                                                     +       
+       DTABLE  PI      YM      L                                       +       
+       DRESP1  14      1       4       22      6       33      2       +       
+       DNODE   14      1       4       1       22      3               +       
+               2       1       43      1                               +       
+       DVPREL1 101     102                                             +       
+       DVCREL1 201     202                                             +       
+       DVMREL1 301                                                     +       
+       DVPREL2 401     402                                             +       
+       DVCREL2 501                                                     +       
+       DVMREL2 601     602     603                                     +       
+       DRESP2  50      51                                                      
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number.  (Integer > 0)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ User-defined label.  (Character, no default)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EQID      │ DEQATN entry identification number.  (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FUNC      │ Function to be applied to the arguments. See Remark 8. (Character)                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REGION    │ Region identifier for constraint screening.  See Remark 5. (Integer > 0)                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ When used with FUNC = BETA, METHOD = MIN indicates a minimization task while MAX indicates a      │
│           │ maximization task. (Default = MIN) When used with FUNCT = MATCH, METHOD = LS indicated a least    │
│           │ squares while METHOD = BETA indicated minimization of the maximum difference. (Default = LS)      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Constants used when FUNC = BETA or FUNC = MATCH in combination with METHOD = BETA. See Remark     │
│           │ 8. (Real; Defaults: C1 = 1.0., C2 = .005, and C3=10.0)                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DESVAR”  │ Flag indicating DESVAR entry identification numbers.  (Character)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVIDi     │ DESVAR entry identification number.  (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DTABLE”  │ DTABLE flag. Indicates that the LABLs for the constants in a DTABLE or DTABLE2 entry follow. This │
│           │ field may be omitted if there are no constants involved in this relation. (Character)             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABLi     │ Label for a constant on the DTABLE or DTABLE2 entry. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DRESP1”  │ Flag indicating DRESP1 entry identification numbers.  (Character). See Remark 13.                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NRk       │ DRESP1 entry identification number.  (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DNODE”   │ Flag indicating grid point and component identification numbers. (Character)                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gm        │ Identification number for any grid point in the model.  (Integer > 0)                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Cm        │ Component number of grid point Gm.  (1 < Integer < 3)                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVPREL1” │ Flag indicating DVPREL1 entry identification number.  (Character)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPIPi     │ DVPREL1 entry identification number.  (Integer > 0)                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVCREL1” │ Flag indicating DVCREL1 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DCICi     │ DVCREL1 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVMREL1” │ Flag indicating DVREL1 entry identification number. (Character)                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIMi     │ DVMREL1 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVPREL2” │ Flag indicating DVPREL2 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DPI2Pi    │ DVPREL2 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVCREL2” │ Flag indicating DVCREL2 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DCI2Ci    │ DVCREL2 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVMREL2” │ Flag indicating DVMREL2 entry identification number. (Character)                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMI2Mi    │ DVMREL2 entry identification number. (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DRESP2”  │ Flag indicating other DRESP2 entry identification number. (Character). See Remark 13.             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NRRk      │ DRESP2 entry identification number. (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “DVLREL”  │ Flag indicating DVLREL1 identification numbers. (Character)                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DLILi     │ DVLREL1 entry identification number. (Integer > 0)                                                │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DRESP2 entries may only reference DESVAR, DTABLE, DRESP1, DNODE, DVPREL1, DVCREL1, DVMREL1, DVPREL2, DVCREL2, DVMREL2 and DVLREL1 entries. They may also reference other DRESP2 entries. However, a DRESP2 entry cannot reference itself directly or recursively.
  - If the referenced DRESP1 entries span subcases, the DRSPAN Case Control command is required to identify DRESP1 IDs for each subcase. DRESP2 entries that span subcases must be invoked above the subcase level by DESGLB on DESOBJ commands.
  - Referenced DRESP entries that span superelements are supported automatically.
  - Referenced DRESP2 entries cannot span subcases or superelements.
3. DRESP2 entries must have unique identification numbers with respect to DRESP1 entries.
4. The “DESVAR”, “DTABLE”,  "DRESP1", “DNODE”, “DVPREL1”, “DVCREL1” and “DVMREL1”, “DVPREL2”, “DVCREL2”, “DVMREL2”, “DRESP2” and DVLREL1 flags in field 2 must appear in the order given above.  Any of these words, along with the identification numbers associated with them, may be omitted if they are not involved in this DRESP2 relationship.  However, at least one of these ten types of arguments must exist.
5. The REGION field follows the same rules as for the DRESP1 entries.  DRESP1 and DRESP2 responses will never be contained in the same region, even if they are assigned the same REGION identification number.  The default is to put all responses referenced by one DRESP2 entry in the same region.
6. The variables identified by DVIDi,   LABLj, NRk, the Gm, CMPM pairs, DPIPi, DCICm, DMIMn, DPI2Po, DCI2Cp, DMI2Mq, and NRRu are assigned (in that order) to the variable names (x1, x2, x3, etc.) specified in the left-hand side of the first equation on the DEQATN entry referenced by EQID.  In the example below,
    DESVARs 101 and 3 are assigned to arguments A and B. 
    DTABLEs PI and YM are assigned to arguments C and D. 
    Grid 14, Component 1 is assigned to argument R.

        See link for table.

7. (Gm, Cm) can refer to any grid component and is no longer limited to a designed grid component.
8. The FUNC attributes can be used in place of the EQID and supports the functions shown in the following table:

        See link for table.

9. The number of arguments of a DEQATN can be more than the number of values defined on the DRESP2 if the DRESP1s referenced have RTYPE with ‘FR’ or ‘PSD’ prefix. Arguments are still positional. The extra arguments in the DEQATN must appear at the end of the argument list. The discrepancy is resolved internally with the forcing frequency(ies) associated with DRESP1s. An example is shown as follows:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DRESP1  10      FDISP1  FRDISP                  1       10.     1001            
DRESP1  20      FDISP2  FRDISP                  1       20.     1001            
DRESP2  30      AVGFD   100                                             +       
+       DRESP1  10      20                                                      
DEQATN  100     AVG(D...        
```

In the above example, the DEQATN has two more additional terms than have been defined on the DRESP2. The first additional term is the forcing frequency (in hertz) of the first DRESP1 ID on the DRESP2. The second additional term is the forcing frequency of second DRESP1 ID in the list. When all DRESP1s involved have the same frequency, the user is not required to name all the additional terms in the argument list of DEQATN.

10. FUNC = BETA facilitates a design task where the objective is to minimize the maximum response. Only DRESP1 entries can be invoked by DRESP2 and the DRESP’s cannot span subcases. The BETA function creates the following design task:

     ![bulkde03272.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03272.jpg?_LANG=enus)  

     where  ![bulkde03274.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03274.jpg?_LANG=enus)  is determined from

     ![bulkde03276.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03276.jpg?_LANG=enus)  

     User input parameters  ![bulkde03278.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03278.jpg?_LANG=enus)  therefore have the following meaning:

     ![bulkde03280.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03280.jpg?_LANG=enus)  (Default = 1.0) weights the spawned design variable,  ![bulkde03282.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03282.jpg?_LANG=enus) , to create the objective. Since  ![bulkde03284.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03284.jpg?_LANG=enus)  starts at 1.0,  ![bulkde03286.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03286.jpg?_LANG=enus)  is the initial objective.

     ![bulkde03288.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03288.jpg?_LANG=enus) sets the initial value of the maximum constraint created by this process. The default values of 0.005 is equal to DOPTPRM parameter GMAX.

     ![bulkde03290.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03290.jpg?_LANG=enus)  (Default = 10.0) is an offset value to avoid dividing by zero when creating constraints.

11. FUNC = MATCH creates a response from the difference between analysis results,  ![bulkde03292.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03292.jpg?_LANG=enus) , that are associated with DRESP1s and target values,  ![bulkde03294.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03294.jpg?_LANG=enus) , that are input using DTABLE data. Only DRESP1 entries and DTABLE entries can be invoked by the DRESP2 entry.

     When METHOD = LS, a least square minimization is performed where the response is

     ![bulkde03296.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03296.jpg?_LANG=enus)  

     When METHOD = BETA, the design task becomes one of minimizing an objective that is the maximum normalized difference between the analysis and target values

     ![bulkde03298.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03298.jpg?_LANG=enus)  

     in the same manner as outlined in Remark  10.

12. With FUNC=MATCH, if the DTABLE LABLj invokes an integer VALUi on the DTABLE entry, the integer points to a TABLEDi entry that provides tabular input as a function of frequency or time. This is used in conjunction with a single DRESP1 NRk that provides a response across a range of frequencies or times (i.e., RTYPE=FRxxxx, PSDxxxx, ACxxxx or Txxxx). When the TABLEDi option is invoked, the response can only be constrained, it cannot be the objective. This further implies that FUNC=MATCH, METHOD=BETA is not supported with TABLEDi.
13. If the mathematical function from a DRESP1 that has character input in the ATTB field (see remark 20 of the DRESP1) is to be used in the DRESP2 evaluation, the DRESP1 must be referenced under the “DRESP2” flag, not the “DRESP1” flag. If the “DRESP1” flag is used in this situation, it will result in a DRESP2 being evaluated for each of the individual values that contribute to the mathematical function.
14. The function SFMAX requires n+1 DRESP1 IDs. The first ‘n’ IDs correspond to compliance constraints for the first ‘n’ static subcases. The final ID refers to a DRESP1 with RTYPE=FREQ and mode=1. The function minimizes the sum of the compliance constraints while maximizing the fundamental frequency.
