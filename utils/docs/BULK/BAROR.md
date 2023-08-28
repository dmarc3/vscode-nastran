## [BAROR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BAROR.xhtml) - CBAR Entry Default Values

Defines default values for field 3 and fields 6 through 8 of the CBAR entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BAROR           PID                     X1      X2      X3      OFFT            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BAROR           39                      0.6     2.9     -5.87   GOG             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BAROR           PID                     G0                      OFFT            
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BAROR           39                      18                      GOG             
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of the PBAR entry.  (Integer > 0 or blank)                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Components of orientation vector , from GA, in the displacement coordinate system at GA (default), │
│            │ or in the basic coordinate system. See Remark 5. (Real)                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0         │ Alternate method to supply the orientation vector , using grid point G0.  The direction of  is     │
│            │ from GA to G0.  is then translated to End A.  (Integer > 0;  or GB on CBAR entry)                  │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFT       │ Offset vector interpretation flag. See Remark 5. (Character or blank)                              │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The contents of fields on this entry will be assumed for any CBAR entry whose corresponding fields are blank.
2. Only one BAROR entry is allowed.
3. For an explanation of bar element geometry, see the   in the  MSC Nastran Reference Guide .
4. If field 6 is an integer, then G0 is used to define the orientation vector and X2 and X3 must be blank.  If field 6 is real or blank, then X1, X2, and X3 are used.
5. OFFT is a character string code that describes how the offset and orientation vector components are to be interpreted. By default (string input is GGG or blank), the offset vectors are measured in the displacement coordinate systems at grid points A and B and the orientation vector is measured in the displacement coordinate system of grid point A. At user option, the offset vectors can be measured in an offset coordinate system relative to grid points A and B, and the orientation vector can be measured in the basic system as indicated in the following table:

```text
┌────────┬────────────────────┬──────────────┬──────────────┐
│ String │ Orientation Vector │ End A Offset │ End B Offset │
├────────┼────────────────────┼──────────────┼──────────────┤
│ GGG    │ Global             │ Global       │ Global       │
├────────┼────────────────────┼──────────────┼──────────────┤
│ BGG    │ Basic              │ Global       │ Global       │
├────────┼────────────────────┼──────────────┼──────────────┤
│ GGO    │ Global             │ Global       │ Offset       │
├────────┼────────────────────┼──────────────┼──────────────┤
│ BGO    │ Basic              │ Global       │ Offset       │
├────────┼────────────────────┼──────────────┼──────────────┤
│ GOG    │ Global             │ Offset       │ Global       │
├────────┼────────────────────┼──────────────┼──────────────┤
│ BOG    │ Basic              │ Offset       │ Global       │
├────────┼────────────────────┼──────────────┼──────────────┤
│ GOO    │ Global             │ Offset       │ Offset       │
├────────┼────────────────────┼──────────────┼──────────────┤
│ BOO    │ Basic              │ Offset       │ Offset       │
└────────┴────────────────────┴──────────────┴──────────────┘
```

Any attempt to specify invalid combinations results in a bulk data entry input error message. For example, a value of OOO (indicating offset and orientation vectors are specified in an offset reference system) results in a fatal error since the orientation vector cannot be specified in an offset system. The offset system x-axis is defined from GA to GB. The orientation vector  ![bulkab02091.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02091.jpg?_LANG=enus)  and the offset system x-axis are then used to define the z and y axes of the offset system. (Note: The character “O” in the table replaces the obsolete character “E”.)
