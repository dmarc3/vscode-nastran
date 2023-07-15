## [SEQSEP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEQSEP.xhtml) - Superelement Sequences

Used with the CSUPER entry to define the correspondence of the exterior grid points between an identical or mirror-image superelement and its primary superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQSEP  SSID    PSID    GP1     GP2     GP3     GP4     GP5     GP6             
        GP7     GP8     -etc.-                                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQSEP  121     21      109     114     124     131                             
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ SSID      │ Identification number for secondary superelement.  (Integer > 0).                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ PSID      │ Identification number for the primary superelement.  (Integer > 0).                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ GPi       │ Exterior grid point identification numbers for the primary superelement.  (Integer > 0). │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```
