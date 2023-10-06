## [FRF (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FRF.Case.xhtml) - Frequency Response Function (FRF) Generation and/or FRF Based Assembly (FBA) Specification

Specifies the information needed for FRF generation and/or the FBA process. SOLs 108 and 111 only.

#### Format:

![casecontrol4a01022.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01022.jpg?_LANG=enus)  

![casecontrol4a01024.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01024.jpg?_LANG=enus)  

![casecontrol4a01026.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01026.jpg?_LANG=enus)


#### Examples:

```nastran
FRF
FRF (COMPID = 10 COMPNAME = WING CONNPTS = 1000 LOADLBL = ALT)
FRF (COMPID = 20 COMPNAME = STRUT CONNPTS = 2000 OP2 = 25)
FRF (COMPID = 30 COMPNAME = BODY CONNPTS = 300 XITOUT = UNITALL)
FRF (ASM)
FRF (ASM LOADLBL = ALTX)
FRF (ASM ASMOUT = ALL)
FRF (GENASM COMPID = 50 COMPNAME = SUSPENSN CONNPTS = 200)
FRF (ASM  ICFGEN = ALL)
FRF (ASM  ICFUSE = 100)
FRF (ASM  ICFGEN = 200  ICFOP2 = 33)
FRF (ASM  ICFUSE = -1  ICFOP2 = 33)
FRF (ASM  ICFAUTO = 100)
FRF (ASM  ICFAUTO = -5  ICFOP2 = 31)
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GEN          │ Generate the FRFs for the specified component.  See Remarks 3. and 4., and the Examples in Remark  │
│ (Default)    │ 13.                                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASM          │ Compute the FRFs of an assembly of components from the FRFs of the individual components.  See     │
│              │ Remarks 5., 9., 10. and 11., and Examples 2 and 3 in Remark 13.                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GENASM       │ Generate the FRFs for the specified component and follow it by computing the FRFs of an assembly   │
│              │ of components from the FRFs of the individual components.  See Remarks 4., 9., 10. and 11., and    │
│              │ Examples 4 and 5 in Remark 13.                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPID =     │ cmpid  (Integer > 0) is the identification number of the component whose FRFs are to be generated. │
│ cmpid        │  See Remarks 3. through 7., and Examples 2 through 5 in Remark 13.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPNAME =   │ cmpname  (up to eight characters) is the name of the component whose FRFs are to be generated.     │
│ cmpname      │  See Remarks 3. through 7., and Examples 2 through 5 in Remark 13.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONNPTS =    │ setid  (integer > 0) refers to the set that defines the points at which the FRF component          │
│ setid        │ specified by the COMPID/COMPNAME keywords is to be connected during a subsequent FRF based         │
│              │ assembly (FBA) process.  Only those points that are defined in this set (and no others) will be    │
│              │ considered for connection during the FBA process.  See Remarks 7., 12.(c) and 12.(d), and Examples │
│              │ 2 through 5 in Remark 13.                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XITOUT =     │ Output the FRF results only for those unit excitations that are specified explicitly via FRFXIT /  │
│ UNIT         │ FRFXIT1 Bulk Data entries or implicitly via the DLOAD Case Control request.  See Remark 8.  The    │
│              │ output for each of the above excitations is identified by a separate subcase.  The IDs of these    │
│              │ subcases are numbered consecutively starting from 1.                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XITOUT =     │ Output FRF results not only for unit excitations specified explicitly via FRFXIT / FRFXIT1 Bulk    │
│ UNITALL      │ Data entries or implicitly via the DLOAD Case Control command, but also for unit excitations that  │
│              │ are internally applied automatically by the program at the connection points of the FRF            │
│              │ component(s).  See Remarks 8. and 12.(c), and Example 2 in Remark 13.  The output for each of the  │
│              │ above excitations is identified by a separate subcase.  The IDs of these subcases are numbered     │
│              │ consecutively starting from 1.                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XITOUT =     │ Output the FRF results for the following excitations implied by the DLOAD Case Control request:    │
│ USER         │ a.A separate excitation for each individual DOF that has a non-zero load value specified for it    │
│              │ b.An excitation representing the total load Thus, if a DLOAD Case Control request involves non-    │
│              │ zero load values on N DOFs, then this request gives results for (N+1) excitations, with the first  │
│              │ N such excitations representing individual and separate loads on the N DOFs and the (N+1)th        │
│              │ excitation representing the total load. See Remark 8.  The output for each of the above (N+1)      │
│              │ excitations is identified by a separate coded subcase ID of the form xxxxyyyy.  Here xxxx is the   │
│              │ user subcase ID corresponding to the DLOAD under consideration.  For the first N excitations,      │
│              │ yyyy has values ranging from 1 through N (with leading zeros where appropriate).  For the (N+1)th  │
│              │ excitation representing the total load, the coded subcase ID is of the form xxxx9999.  Because of  │
│              │ the above coded numbering scheme, when XITOUT = USER is specified (or assumed; see Remark 8), the  │
│              │ program will not allow any user subcase ID to exceed 9999.  If it does, the program terminates the │
│              │ job with an appropriate fatal message.                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XITOUT =     │ Output the FRF results for the single excitation representing the total load implied the DLOAD     │
│ USERTOTL     │ Case Control request.  This corresponds to the (N+1)th excitation mentioned earlier. See Remark 8. │
│              │ The output for this single excitation representing the total load is identified by the coded       │
│              │ subcase ID of the form xxxx9999 where xxxx is the user subcase ID corresponding to the DLOAD under │
│              │ consideration.  Because of the above coded numbering scheme, when XITOUT = USERTOTL is specified,  │
│              │ the program will not allow any user subcase ID to exceed 9999.  If it does, the program terminates │
│              │ the job with an appropriate fatal message.                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMOUT =     │ In the FBA process, terminate the job after generating the FRF component connection information    │
│ CONNINFO     │ output without performing any further FRF assembly calculations.                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMOUT =     │ In the FBA process, output the FRF results for all of the individual FRF components comprising the │
│ COMP         │ assembly.  See Remarks 10. and 11.                                                                 │
│ (Default)    │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMOUT = ALL │ In the FBA process, output the FRF results not only for all of the individual FRF components       │
│              │ comprising the assembly, but also for the assembled FRF configuration considered as a separate     │
│              │ entity.  See Remarks 10. and 11., and Example 3 in Remark 13.  See also Remark 2.                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMOUT =     │ In the FBA process, output the FRF results only for the assembled FRF configuration considered as  │
│ ASSEMBLY     │ a separate entity. This is equivalent to specifying ASMOUT = 0 (described later). See Remarks      │
│              │ 2. and 10.                                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMOUT = n   │ n is an integer with the following meanings:                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ n = 0                                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ In the FBA process, output the FRF results only for the assembled FRF configuration considered as  │
│              │ a separate entity. This is equivalent to specifying ASMOUT = ASSEMBLY (described earlier). See     │
│              │ Remarks 2. and 10.                                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ n > 0                                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ In the FBA process, output the FRF results only for those FRF components of the assembly whose IDs │
│              │ are specified by SET ID n.                                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ n < 0                                                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ In the FBA process, output the FRF results only for that single FRF component of the assembly      │
│              │ whose ID is given by .                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASMOUT =     │ In the FBA process, output the FRF results only for that single FRF component of the assembly      │
│ cname        │ whose name is given by cname.                                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOADLBL =    │ The load labels in the output in the FRF and FBA jobs explicitly identify the grid (or scalar)     │
│ STD          │ point and its component where the load is applied.                                                 │
│ (Default)    │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOADLBL =    │ The load labels in the output in the FRF and FBA jobs identify the grid (or scalar) point and its  │
│ ALT          │ component where the load is applied by using the following notation: GGGGGGGG:+C                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ where GGGGGGGG is the grid (or scalar) point ID and C indicates the component where the load is    │
│              │ applied. C may have the following values:                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ X     Indicates grid point component 1 or a scalar point Y     Indicates grid point component 2    │
│              │ Z     Indicates grid point component 3 RX   Indicates grid point component 4 RY   Indicates grid   │
│              │ point component 5 RZ   Indicates grid point component 6                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOADLBL =    │ Same as LOADLBL = ALT except that the load labels also identify whether the load applied is a unit │
│ ALTX         │ load or a user load.                                                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DB (Default) │ Store the FRF matrices and other information on the database.  See Examples 2 and 4 in Remark 13.  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OP2 = unit   │ Store the FRF matrices and other information on an OUTPUT2 file whose Fortran unit number is given │
│              │ by unit (integer > 0). See Examples 3 and 5 in Remark 13.                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFGEN = ALL │ Generate ICF information in the FBA process for all of the FRF components of the assembly          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFGEN = n   │ n is a non-zero integer with the following meanings: n > 0 Generate ICF information in the FBA     │
│              │ process only for those FRF components of the assembly whose IDs are specified by SET ID n, n<0     │
│              │ Generate ICF information in the FBA process only for that single FRF component of the assembly     │
│              │ whose ID is given by |n|.                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFGEN =     │ FRF component whose name is given by compname.                                                     │
│ compname     │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFUSE = n   │ n is a non-zero integer with the following meanings: n > 0 Use ICF information by employing in the │
│              │ FBA process a Configuration that consists of only those FRF components whose IDs are specified by  │
│              │ SET ID n. n < 0 Use ICF information by employing in the FBA process a Configuration that consists  │
│              │ of only that single FRF component whose ID is given by |n|.                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFUSE =     │ Configuration that consists of only that single FRF component whose name is given by compname.     │
│ compname     │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFAUTO = n  │ n is a non-zero integer with the following meanings: n > 0 First generate and then use ICF         │
│              │ information in the FBA process only for those FRF components whose IDs are specified by SET ID n.  │
│              │ n < 0 First generate and then use ICF information in the FBA process only for that single FRF      │
│              │ component whose ID is given by |n|.                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFAUTO =    │ only for that single FRF component whose name is given by compname.                                │
│ compname     │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFDB        │ ICF information is to be stored or is resident on the database.                                    │
│ (Default)    │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICFOP2 =     │ ICF information is to be stored or is resident on an OUTPUT2 file whose Fortran unit number is     │
│ icfunit      │ given by icfunit (integer > 0).                                                                    │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
