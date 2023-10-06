## [PBMSECT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBMSECT.xhtml) - Arbitrary Cross-Section for CBEAM

Defines the shape of arbitrary cross-section for CBEAM element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBMSECT PID     MID     FORM                                                    
        Data description for arbitrary section
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBMSECT 1       10      GS                                                      
        OUTP=10,INP=20
PBMSECT 1       10      CP                                                      
        OUTP=10,BRP=20,T=1.0,T(11)=[1.2,PT=(123,204)], NSM=0.01
```

```text
┌───────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                       │
├───────────┼───────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0) │
├───────────┼───────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0) │
├───────────┼───────────────────────────────────────────────┤
│ FORM      │ Cross-section form. (Character) See Remark 1. │
└───────────┴───────────────────────────────────────────────┘
```

#### Remarks:

1. Options for FORM are

```text
┌────┬─────────────────┐
│ GS │ General Section │
├────┼─────────────────┤
│ OP │ Open Profile    │
├────┼─────────────────┤
│ CP │ Closed Profile  │
└────┴─────────────────┘
```

2. Keywords for describing the arbitrary cross-section:

     See link for table.

3. Stress data recovery points are selected automatically from all points of a PBMSECT with GS form. The points with maximum and/or minimum coordinates in X and Y axes are more likely to be picked. For PBMSECT with CP or OP form, the stress data recovery points are selected from points with computed coordinates that actually encircle the profile. Similar to GS form, the points with extreme coordinates are more likely to be selected.
4. Only the POINT entry ID should be listed under SET1 or SET3 entries which, in turn, are referenced by OUTP, INP and BRP. In addition, the POINT entry for defining an arbitrary beam cross section must have the CP and X3 fields left blank.

    ![bulkp06750.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06750.jpg?_LANG=enus)

    Figure 0-80 Arbitrary Cross-Section Definition

5. Current implementation of PBMSECT supports constant section beam only.
6. Note that keyword Core can be abbreviated as ‘C’. Similarly, keyword Layer can be abbreviated as ‘L’.
7. If Core and/or Layer appears in PBMSECT, the PBMSECT ID can not be referenced on CBEAM. Instead, it should be referenced on CBEAM3. Note, however, that a CBEAM3 cannot be used with any other of the above options except the Core and/or Layer option. The use of any other option results in a FATAL. In addition, it is recommended that CBEAM3 referencing composite PBMSECT has 3 nodes and 3 warping DOFs.'
8. If OUTM=arbid is utilized on PBMSECT, element connection, grid location, PSHELL and material Bulk Data entries must be provided after ‘BEGIN ARBMODEL=arbid’.
9. Note that the ‘arbid’ used under ‘BEGIN ARBMODEL’ is considered global and can be referenced by PBMSECT with OUTM=arbid in different ‘BEGIN SUPER’ Bulk Data Section for Part Superelements (SE).
10. PBMSECT with Core or Layer must be utilized along with ‘PARAM,ARBMSTYP,TIMOSHEN’ in the Bulk Data Section.
11. The entry computes, based on an internally generated finite element analysis using a 2D mesh of the cross-section, the following:

    ![bulkp06752.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06752.jpg?_LANG=enus)  

    where the above integrals are evaluated by numerical integration.

    For a beam cross-section, the warping function,  ![bulkp06754.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06754.jpg?_LANG=enus) , satisfies the equation

    ![bulkp06756.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06756.jpg?_LANG=enus)  

    with boundary

    ![bulkp06758.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06758.jpg?_LANG=enus)  

    where  ![bulkp06760.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06760.jpg?_LANG=enus)  and  ![bulkp06762.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06762.jpg?_LANG=enus)  are the direction cosine of the normal to the boundary.

    Then, the torsion constant is defined as

    ![bulkp06764.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06764.jpg?_LANG=enus)  

    The load equilibrium of the beam cross-section can be resolved into two Poisson equations for the shear forces in the  ![bulkp06766.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06766.jpg?_LANG=enus)  and  ![bulkp06768.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06768.jpg?_LANG=enus)  direction as:

    ![bulkp06770.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06770.jpg?_LANG=enus)  

    then, the shear stiffness factor is defined as

    ![bulkp06772.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06772.jpg?_LANG=enus)  

    The warping constant is defined as

    ![bulkp06774.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06774.jpg?_LANG=enus)  

    The shear center is defined as

    ![bulkp06776.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06776.jpg?_LANG=enus)  

12. PBMSECT is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBMSECT property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBEAM, PBEAML, PBCOMP, PBMSECT, PBEAM3 entries.
