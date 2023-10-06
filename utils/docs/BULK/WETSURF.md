## [WETSURF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.WETSURF.xhtml) - Wetted surface used in OpenFSI in SOL 400

Defines a wetted surface used in OpenFSI fluid structure interaction simulations in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETSURF WSID    WTAG                                                    +       
+       WEID1   WEID2   WEID3   WEID4   WEID5   WEID6   WEID7   WEID8   +       
+       WEID9   WEID10  -etc.-                                                  
```

#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETSURF WSID    WTAG                                                    +       
+       WEID1   “THRU”  WEID2   “BY”    INC                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETSURF 10001   wall1                                                           
        5       THRU    21      BY      4                                       
        27      30      33                                                      
        35      THRU    44                                                      
        67      68      70      72      77      82      86      79              
        89      THRU    110     BY      3                                       
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WSID       │ Wetted surface identification number. (Integer > 0; no Default)                                   │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WTAG       │ Wetted surface tag name exported to an external code using the OpenFSI SCA interface. (Character; │
│            │ no Default)                                                                                       │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WEID1,     │ Wetted element identification numbers defined using the WETELMG or WETELME Bulk Data entries.     │
│ WEID2, ... │ (Integer > 0; no Default)                                                                         │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRU, BY   │ Keywords to specify a range of wetted elements. (Character; no Default)                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INC        │ Increment to use with the “THRU” and “BY” keywords. (Integer; Default = 1)                        │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
