## [WETLOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.WETLOAD.xhtml) - Load set and associated wetted surface for OpenFSI in SOL 400

Defines the load set and associated wetted surface for OpenFSI fluid structure interaction simulations in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETLOAD WLID    WSID    SERV_ID                                                 
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETLOAD 1       1001    scafsi                                                  
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WLID      │ Load set ID, referenced by the EXCITEID field in the TLOAD entry. (Integer > 0; no Default)       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WSID      │ Wetted surface identification number. The wetted surface must be defined in the WETSURF Bulk Data │
│           │ entry. (Integer > 0; no Default)                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SERV_ID   │ OpenFSI SCA service name associated with the wetted surface loads. The OpenFSI SCA service is     │
│           │ defined using the CONNECT SERVICE FMS entry. (Character; no Default)                              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
