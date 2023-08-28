## [PCONV](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCONV.xhtml) - Convection Property Definition

Specifies the free convection boundary condition properties of a boundary condition surface element used for heat transfer analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONV   PCONID  MID     FORM    EXPF    FTYPE   TID                     +       
+       CHLEN   GIDIN   CE      E1      E2      E3                              
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONV   53      2       0       .25                                             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONV   4                               1       101                             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONV   38      21                      2       54                              
        2.0     235     0       1.0     0.0     0.0                             
```

#### Alternate Format and Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONV   PCONID  MID     FORM    EXPF    “3”     H1      H2      H3              
        H4      H5      H6      H7      H8                                      
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONV   20                              3       10.0                            
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCONV   7                               3       10.32   10.05   10.09           
        10.37                                                                   
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PCONID    │ Convection property identification number. (Integer > 0)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number. See Remarks 2. (Integer > 0)                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORM      │ Type of formula used for free convection. (Integer 0, 1, 10, 11, 20, or 21; Default = 0)           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXPF      │ Free convection exponent as implemented within the context of the particular form that is chosen.  │
│           │ See Remark 3. (Real > 0.0; Default = 0.0)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FTYPE     │ Formula type for various configurations of free convection. See Remarks 2. and 5. (Integer > 0;    │
│           │ Default = 0)                                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Identification number of a TABLEHT entry that specifies the two-variable tabular function of the   │
│           │ free convection heat transfer coefficient or Nusselt number. See Remark 5. (Integer > 0 or blank)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CHLEN     │ Characteristic length. See Remarks 6. and 8. (Real > 0.0 or blank)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDIN     │ Grid ID of the referenced inlet point. See Remarks 7. and 8. (Integer > 0 or blank)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CE        │ Coordinate system for defining the direction of boundary-layer flow. See Remarks 7. and            │
│           │ 8. (Integer > 0; Default = 0)                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ei        │ Component of the vector for defining the direction of boundary-layer flow in coordinate system CE. │
│           │ See Remarks 7. and 8. (Real or blank)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Hi        │ Free convection heat transfer coefficient. See Remark 5. (Real for H1 and Real or blank for H2     │
│           │ through H8; Default for H2 through H8 is H1)                                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Every surface to which free convection is to be applied must reference a PCONV entry. PCONV is referenced on the CONV Bulk Data entry.
2. MID is used to supply the convection heat transfer coefficient (H) for FTYPE=0, or the thermal conductivity (K) for FTYPE=2. MID is ignored for FTYPE=1 and FTYPE=3 and may be blank.
3. EXPF is the free convection temperature exponent.

     - If FORM = 0, 10, or 20, EXPF is an exponent of (T     -     TAMB), where the convective heat transfer is represented as

     ![bulkp06908.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06908.jpg?_LANG=enus) .

     - If FORM = 1, 11, or 21,

     ![bulkp06910.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06910.jpg?_LANG=enus)  

     where T represents the elemental grid point temperatures and TAMB is the associated ambient temperature.

4. FORM specifies the formula type and the reference temperature location used in calculating the convection film coefficient if FLMND = 0.
     - If FORM = 0 or 1, the reference temperature is the average of element grid point temperatures (average) and the ambient point temperatures (average).
     - If FORM = 10 or 11, the reference temperature is the surface temperature (average of element grid point temperatures).
     - If FORM = 20 or 21, the reference temperature is the ambient temperature (average of ambient point temperatures).
5. FTYPE defines the formula type used in computing the convection heat transfer coefficient  h .
     - If FTYPE = 0,  h  is specified in the MAT4 Bulk Data entry referenced by MID.
     - If FTYPE = 1,  h  is computed from  ![bulkp06912.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06912.jpg?_LANG=enus) , where f is a two-variable tabular function specified in the TABLEHT Bulk Data entry referenced by TID,  ![bulkp06914.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06914.jpg?_LANG=enus)  is the wall temperature, and  ![bulkp06916.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06916.jpg?_LANG=enus)  is the ambient temperature.
     - If FTYPE = 2, the program computes  h  from Nusselt number  ![bulkp06918.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06918.jpg?_LANG=enus) , where f is a two-variable tabular function specified in the TABLEHT Bulk Data entry referred by TID,  ![bulkp06920.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06920.jpg?_LANG=enus)  is the wall temperature, and  ![bulkp06922.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06922.jpg?_LANG=enus)  is the ambient temperature.
          - For average heat transfer coefficient  ![bulkp06924.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06924.jpg?_LANG=enus) , specify the tabular data of the average Nusselt number  ![bulkp06926.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06926.jpg?_LANG=enus) ![bulkp06928.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06928.jpg?_LANG=enus)  and CHLEN for the characteristic length L (See Remarks   and  ).
          - For local spatial dependent heat transfer coefficient  h , define the tabular function of local Nusselt number  ![bulkp06930.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06930.jpg?_LANG=enus) ![bulkp06932.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06932.jpg?_LANG=enus)  along with GIDIN, CE, and Ei to calculate the distance x from the leading edge of heat transfer. (See Remarks   and  )
     - If FTYPE = 3, h is the free convection heat transfer coefficient applied to grid point Gi of the referenced HBDY surface element.
6. CHLEN specifies the characteristic length used to compute the average heat transfer coefficient  ![bulkp06934.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06934.jpg?_LANG=enus) . The following table lists typical values of CHLEN for various convection configurations.

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────┐
│ Convection C │ Characteristic Length CHLEN                                             │
│ onfiguration │                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────┤
│ Free         │ Height of the plate or cylinder                                         │
│ convection   │                                                                         │
│ on a         │                                                                         │
│ vertical     │                                                                         │
│ plate or     │                                                                         │
│ cylinder     │                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────┤
│ Free         │ Diameter of the pipes                                                   │
│ convection   │                                                                         │
│ from         │                                                                         │
│ horizontal   │                                                                         │
│ tubes        │                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────┤
│ Free         │ Length of a side                                                        │
│ convection   │                                                                         │
│ from         │                                                                         │
│ horizontal   │                                                                         │
│ square       │                                                                         │
│ plates       │                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────┤
│ Free         │ Average length of four sides                                            │
│ convection   │                                                                         │
│ from         │                                                                         │
│ horizontal   │                                                                         │
│ rectangular  │                                                                         │
│ plates       │                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────┤
│ Free         │ 0.9d, where d is the diameter of the disk.                              │
│ convection   │                                                                         │
│ from         │                                                                         │
│ horizontal   │                                                                         │
│ circular     │                                                                         │
│ disks        │                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────┤
│ Free         │ A/P, where A is the surface area and P is the perimeter of the surface. │
│ convection   │                                                                         │
│ from         │                                                                         │
│ horizontal   │                                                                         │
│ unsymmetric  │                                                                         │
│ plates       │                                                                         │
└──────────────┴─────────────────────────────────────────────────────────────────────────┘
```

7. GIDIN, CE and Ei are used to define the distance from the leading edge of heat transfer. GIDIN specifies the referenced grid ID where heat transfer starts. CE and Ei define the direction of boundary-layer flow. If CE field is blank, the default is CE=0 for basic coordinate system. If E1, E2, and E3 fields are blank, the defaults are Ei = < 1.0, 0.0, 0.0 >, i.e. the flow is in the x direction. The distance x from the leading edge of heat transfer is computed as follows.

     ![PCONV_remark7.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/PCONV_remark7.png?_LANG=enus)

     ![bulkp06936.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06936.jpg?_LANG=enus)  

     Where A is the location of GIDIN, B is the centroid of the convection element, and  ![bulkp06938.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06938.jpg?_LANG=enus)  is the unit vector in the direction of boundary-layer flow.

8. CHLEN, GIDIN, CE, and Ei are required only for free convection from flat plates with FTYPE = 2. In this case, if the heat transfer coefficient is spatial dependent, GIDIN must be specified. Otherwise, CHLEN has to be defined for the computation of average heat transfer coefficient  ![bulkp06940.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06940.jpg?_LANG=enus) . For free convection from tubes (CHBDYP elements with TYPE=”ELCY”, “TUBE” or “FTUBE”), CHLEN, GIDIN, CE, and Ei need not be specified, because MSC Nastran will use the average diameter of tubes as the characteristic length while computing Nu. CHLEN, GIDIN, CE, and Ei are ignored for  ![bulkp06942.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06942.jpg?_LANG=enus) .
