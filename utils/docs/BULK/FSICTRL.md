## [FSICTRL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FSICTRL.xhtml) - Defines the analysis type for OpenFSI fluid structure analysis simulations in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FSICTRL SERV_ID TYPE    FREQ    ANALYSIS                                        
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FSICTRL scafsi  EXPLICIT1                                                       
```

```text
┌───────────┬──────────────────────────────────┬─────────────┐
│ Describer │ Meaning                          │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ SERV_ID   │ OpenFSI SCA service name         │ Character   │
│           │ associated with the wetted       │             │
│           │ surface loads (see WETLOAD). The │             │
│           │ OpenFSI SCA service is defined   │             │
│           │ using the CONNECT SERVICE file   │             │
│           │ management section statement.    │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ TYPE      │ Type of solution strategy        │ Character   │
│           │ coupling between the external    │             │
│           │ code and SOL 700. TYPE can be    │             │
│           │ either EXPLICIT or IMPLICIT.     │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ FREQ      │ External force and displacement  │ Integer > 0 │
│           │ update frequency per time step,  │             │
│           │ for the exchange with the        │             │
│           │ external code using the          │             │
│           │ IMPLICIT solution strategy TYPE. │             │
├───────────┼──────────────────────────────────┼─────────────┤
│ ANALYSIS  │ OpenFSI service type, it is      │ Character   │
│           │ either DV or U. The DV indicates │             │
│           │ the service implements OpenFSI   │             │
│           │ interface, the U means the       │             │
│           │ service implements OpenFSI_Ex    │             │
│           │ interface.                       │             │
└───────────┴──────────────────────────────────┴─────────────┘
```

#### Remarks:

1. This entry is used for nonlinear SOL 400 analysis.
2. In the FMS Section:

     CONNECT SERVICE SERV_ID  ![bulkfgil03842.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03842.jpg?_LANG=enus) ExternalCodeVendor.OpenFSI ![bulkfgil03844.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil03844.jpg?_LANG=enus)

3. The SERV_ID string must be 8 characters or less.
