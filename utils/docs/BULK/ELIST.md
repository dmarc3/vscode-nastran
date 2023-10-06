## [ELIST](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.ELIST.xhtml) - Element List

Defines a list of CQUAD4 and CTRIA3 structural elements for virtual fluid mass.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ELIST   LID     E1      E2      E3      E4      E5      E6      E7      +       
+       E8      E9      E10     -etc.-                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ELIST   3       51      -62     68      THRU    102     122                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ LID       │ Identification number of list.  (Integer > 0)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ei        │ Identification number of a structural element.  See Remark 1. for the meaning of the negative │
│           │ sign.  The string “THRU” may be used to indicate that all existing elements between those     │
│           │ referenced in the preceding and succeeding fields are in the list.  (Integer0 or “THRU”)      │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If the ELIST entry is referenced by field 6 of an MFLUID entry, the wetted side of the element is determined by the presence or absence of a minus sign preceding the element’s ID on the ELIST entry.  A minus sign indicates that the fluid is on the side opposite to the element’s positive normal as determined by applying the right-hand rule to the sequence of its corner points.  If the “THRU” option is used, then immediately preceding and succeeding elements must have the same sign.
2. Large open “THRUs” should be avoided.
3. The word “THRUs” must not appear in field 2 or 9 on the parent entry or on any continuations.
4. If any ELIST entry is changed or added on restart then a complete re-analysis may be performed. Therefore, ELIST entry changes or additions are not recommended on restart.
