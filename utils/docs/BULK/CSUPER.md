## [CSUPER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSUPER.xhtml) - Secondary Superelement Connection

Defines the grid or scalar point   connections for identical or mirror image superelements or superelements from an external source. These are all known as secondary superelements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSUPER  SSlD    PSID    GP1     GP2     GP3     GP4     GP5     GP6     +       
+       GP7     GP8     -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSUPER  120003  21      3       6       4       10                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SSID      │ Coded identification number for secondary superelement.  See Remark 1. (Integer > 0)              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSID      │ Identification number for referenced primary superelement.  See Remark 2. (Integer > 0 or blank)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GPi       │ Grid or scalar point identification numbers of the exterior points of the secondary superelement. │
│           │  See Remark 3. (Integer > 0)                                                                      │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The value of SSID is written in the form XXX0000 + n, where n is the referenced secondary superelement identification number and n must be less than 10000 and XXX is a displacement component sign reversal code as follows:

     The sign reversal code specifies the displacement component(s) normal to the plane of the mirror through which the reflection is to be made

```text
┌────────────┬─────────────────────────────────────────────────┬──────────────────┐
│ Blank or 0 │ no reversal for identical superelement. If PSID │                  │
│            │ is preceded by a minus sign and there is no xxx │                  │
│            │ code on SSID, then a z-reversal mirror is       │                  │
│            │ generated.                                      │                  │
├────────────┼─────────────────────────────────────────────────┼──────────────────┤
│ 1 2 3      │ x-reversal y-reversal z-reversal                │ Mirror Images    │
├────────────┼─────────────────────────────────────────────────┼──────────────────┤
│ 12 23 31   │ x and y-reversal y and z-reversal z and         │ Identical Images │
│            │ x-reversal                                      │                  │
├────────────┼─────────────────────────────────────────────────┼──────────────────┤
│ 123        │ x, y and z-reversal }                           │ Mirror Images    │
└────────────┴─────────────────────────────────────────────────┴──────────────────┘
```

2. If PSID = 0 or blank, the superelement boundary matrices are obtained from an external source (such as a database or external file).  See also PARAM,  EXTDRUNT .

If  ![bulkc203028.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203028.jpg?_LANG=enus) , the secondary superelement is identical to, or is a mirror image of, a primary superelement.

3. For identical or mirror image superelements, the grid point IDs, GPi, may appear in any order. However, if they are not in the same order as the external GRIDs of the primary superelement, then the SEQSEP entry is also required. In case of external superelements, the GRID IDs must be in the order that the terms in the associated matrices occur in.

4. Image superelements and their primaries must be congruent. The identical or mirror image superelement must have the same number of exterior grid points as its primary superelement. The exterior grid points of the image superelement must have the same relative location to each other as do the corresponding points of the primary superelement. The global coordinate directions of each exterior grid point of the image superelement must have the same relative alignment as those of the corresponding grid points of the primary superelement. If congruency is not satisfied because of round-off, then the tolerance may be adjusted with PARAM,CONFAC or DIAG 37.

5. For superelements from an external source, please refer to PARAMS  EXTDR ,  EXTDRUNT  and  EXTUNIT .
