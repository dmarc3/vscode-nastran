## [MONSUM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONSUM.xhtml) - Linear Combinations of Monitor Point Components

Defines a new monitor result that is the weighted sum of existing monitor results. The existing monitor points do not need to be of the same type but they must be of similar type (see Remark  5. )

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUM  NAME    LABEL                                                           
        NEWAXISAMTYPE1A NAME1A  AXES1A  COEF1A  NAME2A  AXES2A  COEF2A          
                        NAME3A  AXES3A  COEF3A  etc.                            
                MTYPE2A NAME2A  etc.                                            
        NEWAXISBMTYPE1 BNAME1B  AXES1B  COEF1B  NAME2B  etc.                    
                MTYPE1C etc.                                                    
```
#### Example: Create a new monitor point result by adding an aerodynamic monpnt1 and a monpnt3

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUM  AM1PSM3 Addin...        
        3       AMONPNT1WING    3       1.0                                     
                MONPNT3 FREEW   3       1400.   FREEW   5       -1000           
```
#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUM  NAME    LABEL           
        MTYPE   NEWAXISANAME1A  AXES1A  COEF1A  NAME2A  AXES2A  COEF2A          
                        NAME3A  AXES3A  COEF3A  etc.                            
                NEWAXISBNAME2A  AXES1B  COEF1B  NAME2B  AXIS2B  COEF2B          
                        NAME3B  AXES3B  COEF3B  etc.                            
                NEWAXISCetc.                                                    
```
#### Alternate Example: Scale an existing monitor point

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONSUM  ROOT    Scale...        
        AMONPNT1123456  ROOT    123     4.482   ROOT    456     11.385          
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Character string of up to 8 characters identifying the monitor result. (Character)                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ A string comprising of no more than 56 characters (fields 3 through 9) that identifies and labels │
│           │ the merged monitor result.                                                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NEWAXISj  │ The component axis of the newly-created monitor point into which the summed quantity will be      │
│           │ stored (integer, any unique combination of the integers 1 to 6 with no embedded blanks, see       │
│           │ Remarks 7. and 8.)                                                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MTYPij    │ Monitor type to be merged.  (Character, one of “AMONPNT1”, “AMONDSP1”, “SMONPNT1”,”SMONDSP1”, or  │
│           │ “MONPNT3”; no Default). See Remarks 5. and 6.                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MTYPE     │ Monitor type to be merged in the alternate format. (Character; one of “AMONPNT1”, “AMONDSP1”,     │
│           │ “SMONPNT1”, “SMONDSP1”, or “MONPNT3”; no Default). See Remarks 5. and 6.                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMEij    │ Name of the monitored quantity that is to be merged                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AXESij    │ Component axes that are to be summed. (any unique combination of the integers 1 to 6 with no      │
│           │ embedded blanks)                                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COEFij    │ Coefficient to be applied to the component(s) called out on AXESij field. (Real; Default = 1.0)   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The MONSUM is available in SOLs 101, 103, 108, 109, 111, 112, 144, 146, 200 and 400 (ANALYSIS = NLSTAT or NLTRAN).

2. The LABEL is a 56 character string that should be unique.

3. The MONSUM can be used to update an existing monitor result by setting all the NAMEij terms equal to NAME. In this case, the alternate format is available and the NEWAXISj component is a scalar multiple of the original component:

     MONSUMj  =  MRj   COEFj

4. When the NAME differs from the NAMEij values, it must be unique with respect to all monitor quantities.The result of the MONSUM entry is to create new monitor point(s) that are equal to:

     ![bulkno06036.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06036.jpg?_LANG=enus)  

     where  ![bulkno06038.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06038.jpg?_LANG=enus)  is the result from the individual component.

5. The merged monitor points must be of a similar type. “Similar” types are defined as:

     Force and moment summation monitor points: AMONPNT1, SMONPNT1, MONPNT3

     Average displacement monitor points: AMONDSP1 and SMONDSP1

6. For MONPNT1’s and MONDSP1’s, the MTYPij can be aerodynamic or structural.  MTYPij=AMxxx1 designates aerodynamic while SMxxx1 designates a structural monitor point.

7. If multiple components are to be summed, the NEWAXISj field must be the union of subsequent AXISij fields. If the subsequent AXISij field is blank, the components are determined from NEWAXISj.  

8. If the NEWAXISj field indicates a single output, the AXISij fields must reference a single input, but it can be any value from 1 to 6.

9. The same component cannot be referenced multiple times on the NEWAXISj fields for a single MONSUM entry.

10. Structural monitor points may span superelements.

11. If multiple types are specified on a MONSUM, the resulting entry is of a type that appears on the MONSUM with the following order of precedence: smonpnt1, smondsp1, monpnt3, amonpnt1, amondsp1. E.g., a amonpnt1 and a monpnt3 appearing on the same entry will result in a monpnt3 regardless of which appears first.   

12. If all the MTYPij values are of the same type, the alternate format provides a simplified interface.

13. A MONSUM can reference another MONSUM (including itself) as long as there is not a circular reference. A MONSUM cannot reference another MONSUM1.

14. MONPNT3’s that have one, two or three excluded items (e.g., XFLAG=SMA) cannot be referenced on a MONSUM.

15. Since CP,X,Y,Z and CD are not known with certainty for a MONSUM, they are not printed as part of the monitor point output. Further, in SOL's 101 and 144, COMP=**SUM**, is used to indicate that the associated monitor point has been derived from a MONSUM.

