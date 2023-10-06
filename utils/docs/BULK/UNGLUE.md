## [UNGLUE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.UNGLUE.xhtml) - Defines Grids that Should Be Eliminated From Glued Contact

This entry may be used in SOLs 101 or 400 but is only necessary if glued contact has been specified and some of the grids should use standard contact instead of glued contact. This option is normally used for crack analysis where the grids along the crack are not glued but all other grids on a contact body have glued contact.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UNGLUE  ID      BID     ID1     THRU    ID2     BY      N               +       
+       ID3     THRU    ID4     ID5     ID6     -etc.-                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UNGLUE  10      101     20      THRU    300     BY      2                       
                3457    8456    4712    1000    THRU    2000                    
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number referenced by a SUBCASE or STEP Case Control BCONTACT or UNGLUE command. See │
│           │ Remark 1. (Integer; no Default)                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID       │ Identification of the specified BCBODY. (Integer > 0; no Default).                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ ID list of grids. (Integer > 0; no Default).                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRU      │ Enter THRU if a range of grids is required. (Character)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BY        │ Enter BY if the range of grids is not consecutive.  (Character)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N         │ BY increment. (Integer > 0).                                                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
