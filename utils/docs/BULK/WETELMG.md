## [WETELMG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.WETELMG.xhtml) - Wetted element in OpenFSI by type in SOL 400

Defines a wetted element used in OpenFSI fluid structure interaction simulations in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETELMG WEID    TYPE                                                    +       
+       G1      G2      G3      G4      G5      G6      G7      G8              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETELMG 10001   QUAD4                                                           
        23      35      124     28                                              
```

```text
┌─────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                          │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WEID        │ Wetted element identification number. (Integer > 0; no Default)                                  │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE        │ Wetted element type, which can be any of TRIA3, TRIA6, QUAD4, QUAD8, LINE2 or LINE3. (Character; │
│             │ no Default)                                                                                      │
├─────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, ..., G8 │ Grid point identification numbers for the wetted surface element WEID. (Integer > 0; no Default) │
└─────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
