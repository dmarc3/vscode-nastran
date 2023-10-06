## [PAERO5](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAERO5.xhtml) - Aerodynamic Panel Property

Defines properties of each strip element for Piston theory.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO5  PID     NALPHA  LALPHA  NXIS    LXIS    NTAUS   LTAUS           +        
+       CAOC1   CAOC2   CAOC3   CAOC4   CAOC5                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO5  7001    1       702     1       701     1       700                     
        0.0     0.0     5.25    3.99375 0.0                                     
```

        See link for definitions.

#### Remarks:

1. The continuation entry is required for Piston theory with one entry (CAOCi) per strip.
2. Embedded blank fields are not allowed on the continuation entry.
3. If CAOCi = 0.0, there is no control surface.
4.  lists the thickness data input and AEFACT entry format used for Piston theory.

        See link for table.

##### Entry Format

- AEFACT, ID,  ![bulkp06474.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06474.jpg?_LANG=enus) ,  ![bulkp06476.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06476.jpg?_LANG=enus) ,  ![bulkp06478.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06478.jpg?_LANG=enus) ,  ![bulkp06480.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06480.jpg?_LANG=enus) ,  ![bulkp06482.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06482.jpg?_LANG=enus) ,  ![bulkp06484.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06484.jpg?_LANG=enus)
- AEFACT, ID,  ![bulkp06486.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06486.jpg?_LANG=enus) ,  ![bulkp06488.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06488.jpg?_LANG=enus) ,  ![bulkp06490.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06490.jpg?_LANG=enus) ,  ![bulkp06492.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06492.jpg?_LANG=enus) ,  ![bulkp06494.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06494.jpg?_LANG=enus) .,  ![bulkp06496.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06496.jpg?_LANG=enus) ,  ![bulkp06498.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06498.jpg?_LANG=enus) ,  ![bulkp06500.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06500.jpg?_LANG=enus) ,  ![bulkp06502.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06502.jpg?_LANG=enus) ,  ![bulkp06504.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06504.jpg?_LANG=enus) ,  ![bulkp06506.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06506.jpg?_LANG=enus)
- AEFACT, ID,  ![bulkp06508.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06508.jpg?_LANG=enus)
- AEFACT, ID,  ![bulkp06510.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06510.jpg?_LANG=enus)
- AEFACT, ID,  ![bulkp06512.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06512.jpg?_LANG=enus)
- AEFACT, ID,  ![bulkp06514.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06514.jpg?_LANG=enus)
- AEFACT, ID,  ![bulkp06516.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06516.jpg?_LANG=enus)

    ![bulkp06518.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06518.jpg?_LANG=enus)  

- AEFACT, ID,  ![bulkp06520.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06520.jpg?_LANG=enus)

5. The following table lists the angle-of-attack distribution and AEFACT entry formats used for Piston theory.

        See link for table.

##### Entry Format

- AEFACT, ID,  ![bulkp06522.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06522.jpg?_LANG=enus) ,
- AEFACT, ID,  ![bulkp06524.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06524.jpg?_LANG=enus) , etc., for all m on MKAEROi entry.
- A control surface rotation is positive when the trailing edge moves in the negative z-direction of the aerodynamic element coordinate system; see the  MSC Nastran: Aeroelastic Analysis User’s Guide .
