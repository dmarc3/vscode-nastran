## [BCBOX ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBOX.xhtml) - 3D Contact Region

Defines a 3D contact region - all elements within the region define a contact body in SOL 700.

#### Format (Form 1):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBOX   ID      HOW                                                     +
+       N1      N2      N3      N4      N5      N6      N7      N8 
```

#### Form 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBOX   ID      COORD   HOW                                             +
+                       X1      Y1      Z1      X2      Y2      Z2      +
+                       X3      Y3      Z3      X4      Y4      Z4      +
+                       X5      Y5      Z5      X6      Y6      Z6      +
+                       X7      Y7      Z7      X8      Y8      Z8      
```

#### Example (for Form 1):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBOX   101             0                                               +
+       1001    1002    1003    1004    1005    1006    1007    1008    
```

```text
┌────────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Describer  │ Meaning                                           │                                                │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ ID         │ Identification of a deformable surface            │                                                │
│            │ corresponding to a BSID value on the BCBODY entry │                                                │
│            │ if the Case Control BCONTACT=BCBOX is specified.  │                                                │
│            │ All elements corresponding to the designated box  │                                                │
│            │ may potentially come into contact. See Remark     │                                                │
│            │ 1. (Integer > 0)                                  │                                                │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ COORD      │ Enter COORD in field 3 if x,y,z coordinates of    │                                                │
│            │ the box are to be specified rather than grid IDs. │                                                │
│            │ (Character)                                       │                                                │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ HOW        │ A flag indicating whether an element is in the    │                                                │
│            │ defined box or not. (Integer; Default = 0)        │                                                │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│            │ 0                                                 │ If only one grid point of an element is in the │
│            │                                                   │ box, the entire element is considered to be in │
│            │                                                   │ the box.                                       │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│            │ 1                                                 │ All grid points comprising the element must be │
│            │                                                   │ within the box, otherwise the element is       │
│            │                                                   │ considered outside of the box.                 │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ N1-N8      │ Enter 8 Grid IDs defining a box (hexa-like        │                                                │
│            │ region) if the third field is blank. (Integer;    │                                                │
│            │ Required if COORD is blank)                       │                                                │
├────────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Xi, Yi, Zi │ Enter eight x,y,z values in the basic coordinate  │                                                │
│            │ system if the third field is COORD. See Remark 6. │                                                │
│            │ (Real; Required if “COORD” is entered in field 3  │                                                │
│            │ of line 1)                                        │                                                │
└────────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. ID must be unique with respect to all other BSURF, BCBOX, BCPROP, and BCMATL entries.
2. The deformable surface may alternately be defined using BSURF, BCPROP, or BCMATL entries.
3. Only one kind of entry (BSURF, BCBOX, BCPROP, or BCMATL) may be used to define a particular deformable surface.
4. All elements corresponding to the IDs entered will be used to define the deformable surface.
5. The model is searched to determine whether each element lies within the specified box region as specified by the HOW criteria option.
6. For SOL 700, the BCBOX allows a general box and edges do not need to be aligned with the coordinates axis. The eight grid points define the box identical to the CHEXA grid point numbering.
7. BCBOX is not supported in SOLs 101 and 400.
