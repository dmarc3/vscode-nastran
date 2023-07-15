## [DEFUSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DEFUSET.xhtml) - Degree-of-Freedom Set Name Definition

Defines new names for degree-of-freedom sets.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEFUSET OLD1    NEW1    OLD2    NEW2    OLD3    NEW3    OLD4    NEW4            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEFUSET U2      X       U4      Y       U3      Z                               
```
```text
┌───────────┬─────────────────────────────────────────────┐
│ Describer │ Meaning                                     │
├───────────┼─────────────────────────────────────────────┤
│ OLDi      │ Default set name.  (One to four characters) │
├───────────┼─────────────────────────────────────────────┤
│ NEWi      │ New set name.  (One to four characters)     │
└───────────┴─────────────────────────────────────────────┘
```
#### Remarks:

1. From one to four set names may be specified on a single entry.

2. OLDi must refer to any of the set names given in  .  It is recommended that OLDi refer only to the set names U1 through U6. If sets PA or PS are referenced, a user fatal message is issued.

3. All NEWi names must be unique with respect to all other set names.

4. The DEFUSET entry is optional since default set names exist for all displacement sets.

5. The DEFUSET   entry must be present in the Bulk Data Section in all restarts.

