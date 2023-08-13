## [GENUDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GENUDS.xhtml) - User Data for Notify User Defined Service or Subroutine

The GENUDS defines integer, real and character type data that will be passed to the notify method in runtime info interface. The notify method will be called at start of load case, start of increment, end of increment and end of load case.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GENUDS  SRV_ID                                                          +       
+       “INT”   IDATA1  IDATA2  IDATA3  IDATA4  IDATA5  IDATA6  IDATA7  +       
+               IDATA8  IDATA9  ...     IDATAn                          +       
+       “REAL”  RDATA1  RDATA2  RDATA3  RDATA4  RDATA5  RDATA6  RDATA7  +       
+               RDATA8  RDATA9  ...     RDATAn                          +       
+       “CHAR”  CDATA1  CDATA2  ...     CDATAn                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GENUDS  MY_SRV                                                          +       
+       INT     1       2       100                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ SRV_ID    │ The service identifier used in the CONNECT SERVICE statement. (Character, no default) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ “INT”     │ Keyword indicating that the following data is integer. (Character)                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ IDATAi    │ User supplied integer data. (Integer, no default)                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ “REAL”    │ Keyword indicating the following data is real. (Character)                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ RDATAi    │ User supplied real data. (Real, no default)                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ “CHAR”    │ Keyword indicating the following data is character. (Character)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│ CDATAi    │ User supplied character data. (Character, no default)                                 │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The SRV_ID is the service identifier of SCA service in the CONNECT SERVICE statement. The SCA service should have implemented the RuntimeInfo interface.
2. A CDATAi entry cannot be the character “INT”, “REAL” or “CHAR”.
