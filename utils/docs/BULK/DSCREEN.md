## [DSCREEN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DSCREEN.xhtml) - Design Constraint Screening Data

Defines screening data for constraint deletion.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DSCREEN RTYPE   TRS     NSTR                                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DSCREEN STRESS  -0.7    2                                                       
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RTYPE     │ Response type (or ALL, See Remark 9.) for which the screening criteria apply. (Character)          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TRS       │ Truncation threshold.  (Real; Default = -0.5)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSTR      │ Maximum number of constraints to be retained per region per load case. See Remark 3. (Integer > 0; │
│           │ Default = 20)                                                                                      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Grid responses associated with one particular load case are grouped by the specification of DRESP1 entries.  From each group, a maximum of NSTR constraints are retained per load case.

2. Element responses are grouped by the property; i.e., all element responses for one particular load case belonging to the set of PIDs specified under ATTi on a   DRESPi entry are regarded as belonging to the same region.  In superelement sensitivity analysis, if the property (PID) is defined in more than one superelement, then separate regions are defined.  A particular stress constraint specification may be applied to many elements in a region generating many stress constraints, but only up to NSTR constraints per load case will be retained.

3. For aeroelastic responses, that is RTYPE = “TRIM”, “STABDER”, and “FLUTTER”, the NSTR limit is applied to all DRESP1 IDs that are the same RTYPE and have the same REGION specified.

4. For responses that are not related to grids or elements, that is RTYPE = “WEIGHT”, “VOLUME”, “EIGN”, “FREQ”, “LAMA”, CEIG”, FRMASS, COMP, and TOTSE”, NSTR is not used. TRS is still applicable.

5. The RTYPE field is set to EQUA if constraints that are associated with DRESP2 entries are to be screened. The RTYPE field is set to DRESP3 if constraints that are associated with DRESP3 entries are to be screened. If the REGION field on the DRESP2 or DRESP3 is blank, one region is established for each DRESP2/DRESP3 entry.

6. If a certain type of constraint exists but no corresponding DSCREEN entry is specified, all the screening criteria used for this type of constraint will be furnished by the default values.

7. Constraints can be retained only if they are greater than TRS.  See the Remarks under the   entry for a definition of constraint value.

8. Constraint screening is applied to each superelement.

9. RTYPE=ALL specifies that the specified TRS and NSTR applies to all response types and other DSCREEN entries are ignored.

