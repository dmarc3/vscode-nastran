## [HYBDAMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HYBDAMP.xhtml) - Hybrid Modal Damping for Direct Dynamic Solutions

Specifies hybrid damping parameters.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HYBDAMP ID      METHOD  SDAMP   KDAMP   PRTEIG                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HYBDAMP 101     2000    2001    NO      YES                                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number of HYBDAMP entry (Integer > 0; Required)                                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ Identification number of METHOD entry for modes calculation.  (Integer > 0; Required)           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SDAMP     │ Identification number of TABDMP1 entry for modal damping specification. (Integer > 0; Required) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KDAMP     │ Selects modal “structural” damping. See Remark 1. (Character: “Yes” or “NO”; Default = “NO”)    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRTEIG    │ Print eigenvalue summary from hybrid damping calculation (Character: “Yes” or “NO”; Default =   │
│           │ “NO”)                                                                                           │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For KDAMP = “YES”, the viscous modal damping is entered into the complex stiffness matrix as structural damping.
2. Hybrid damping is generated using modal damping specified by the user on TABDMP entries.

     ![bulkfgil03978.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03978.jpg?_LANG=enus)  

     For KDAMP = “YES”

     ![bulkfgil03980.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03980.jpg?_LANG=enus)  

     where

```text
┌───┬──────────────────────────────────────────────────┐
│ = │ modes of the structure                           │
├───┼──────────────────────────────────────────────────┤
│ = │ structural mass matrix                           │
├───┼──────────────────────────────────────────────────┤
│ = │ modal damping values,                            │
├───┼──────────────────────────────────────────────────┤
│ = │ twice the critical damping ratio determined from │
│   │ user specified TABDMP entry                      │
├───┼──────────────────────────────────────────────────┤
│ = │ natural frequency of mode                        │
├───┼──────────────────────────────────────────────────┤
│ = │ generalized mass of mode                         │
└───┴──────────────────────────────────────────────────┘
```

3. Hybrid damping is based on a modal solution and the mass matrix. Even if user requested all the modes and specified a flat value of G the result is still dependent on the Rank of the Mass matrix. Also note that Hybrid damping does not include residual vectors to compensate for high frequency contribution and other possible massless degrees of freedom effects in the Rank of the mass matrix. PARAM, COUPMASS, 1 may improve the mass rank.
4. HYBDAMP is referenced by the DAMPING and ROTHYBD Bulk Data entries.
5. When hybrid damping is used during FRF component generation, it is recommended to set the KDAMP field to YES on the HYBDAMP entry. See remarks under SDAMPING Case Control description for further details.
6. If Modules are present then this entry may only be specified in the main Bulk Data section.
