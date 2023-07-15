## [DCONSTR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DCONSTR.xhtml) - Design Constraints

Defines design constraints.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DCONSTR DCID    RID     LALLO...UALLO...LOWFQ   HIGHFQ                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DCONSTR 10      4       1.25                                                    
```
```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DCID       │ Design constraint set identification number.  (Integer > 0)                                      │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID        │ DRESPi entry identification number.  (Integer > 0)                                               │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LALLOW/LID │ Lower bound on the response quantity or the set identification ID of a number of a TABLEDi entry │
│            │ that supplies the lower bound as a function of frequency.  (Real; Default = -1.0E20)             │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UALLOW/UID │ Upper bound on the response quantity or the set identification ID of a number of a TABLEDi entry │
│            │ that supplies the upper bound as a function of frequency.  (Real; Default = 1.0E20)              │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOWFQ      │ Low end of frequency range in Hertz (Real > 0.0; Default = 0.0). See Remark 8.                   │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HIGHFQ     │ High end of frequency range in Hertz (Real > LOWFQ; Default = 1.0E+20). See Remark 8.            │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The DCONSTR entry may be selected in the Case Control Section by the DESSUB or DESGLB command.

2. DCID may be referenced by the DCONADD Bulk Data entry.

3. For a given DCID, the associated RID can be referenced only once.

4. The units of LALLOW and UALLOW must be consistent with the referenced response defined on the DRESPi entry.  If RID refers to an “EIGN” response, then the imposed bounds must be expressed in units of eigenvalue, (radian/time) 2 .  If RID refers to a “FREQ” response, then the imposed bounds must be expressed in cycles/time.

5. LALLOW and UALLOW are unrelated to the stress limits specified on the MATi entry.

6. Constraints are computed as follows:

     ![bulkde03142.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03142.jpg?_LANG=enus)  for lower bound constraints

     ![bulkde03144.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03144.jpg?_LANG=enus)  for upper bound constraints

     GNORM =  ![bulkde03146.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03146.jpg?_LANG=enus)

     GSCAL is specified on the DOPTPRM entry (Default = 0.001)

7. As Remark   indicates, small values of UALLOW and LALLOW require special processing and should be avoided.  Bounds of exactly zero are particularly troublesome.  This can be avoided by using a DRESP2 entry that offsets the constrained response from zero.

8. LOWFQ and HIGHFQ fields are functional only for frequency response RTYPE’s, including  DYSTIFF or those with a 'AC', 'AF', 'FR' or 'PS' prefix. (FREQ is not a frequency response). The LOWFQ and HIGHFQ fields are also functional when they are applied to a DRESP2 or DRESP3 that inherit the frequency values from these RTYPES. The bounds provided in LALLOW and UALLOW are applicable to a response only when the value of the forcing frequency of the response falls between LOWFQ and HIGHFQ. The behavior varies depending on the value of ATTB on the DRESP1 entry.  

a. If the field is blank, the LOWFQ/HIGHFQ fields are honored.  If the DCONSTR with LOWFQ/HIGHFQ refers to a DRESP2 that invokes a DRESP1 with ATTB blank, the fields are not honored.

b. If the field is a character, the LOWFQ/HIGHFQ fields are honored.

c. If the field is a real number, the LOWFQ/HIGHFQ fields are honored even when the DCONSTR refers to a DRESP2 that references the DRESP1.

9. LID and UID are optional inputs that identify tabular input to specify the lower and upper bounds as a function of frequency. They are applicable to the 'FR' and 'PSD' responses of Remark   and to  DRESP2 and DRESP3 responses that inherit the frequency value from these RTYPES.

10. For PART SE, DCONSTR entries can reside in each individual PART SE Bulk Data Section starting with ‘BEGIN SUPER=seid’.  If DCID is different from a PART SE to the next, DCONADD in the residual (or main Bulk Data Section) can be utilized to group DCONSTR entries together for a single subcase.

