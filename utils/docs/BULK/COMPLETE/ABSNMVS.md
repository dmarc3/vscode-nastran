## [ABSNMVS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ABSNMVS.xhtml) - Meta data group String name/value pairs

Associate String Name/Value pairs with meta data collectors (ABSTRCT).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABSNMVS ABSTID                                                          +
+       NAME1   VAL1                                                    +
+       NAME2   VAL2                                                    +
+       -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABSNMVS 50                                                              +        
+       ABSNAME B pillar                                                +
+       ABSDESC B pillar                                                
```
```text
┌───────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │
├───────────┼───────────────────────────────────────────────────┤
│ ABSTID    │ Unique identification number for meta data group  │
│           │ (ABSTRCT). (Integer>0)                            │
├───────────┼───────────────────────────────────────────────────┤
│ NAMEi     │ Up to eight characters defining the name of this  │
│           │ Name/Value pair. (Character).                     │
├───────────┼───────────────────────────────────────────────────┤
│ VALi      │ Value of this Name/Value pair. May consist of any │
│           │ Character A-Z, or numbers, and underscore or      │
│           │ dash. Limited to 56 characters. (Character).      │
└───────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. This entry has no impact on the solution.

2. The name/value pair entries may be specified in any order.

3. In the HDF5 viewer

![ABSNMVS_HDF5view.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/ABSNMVS_HDF5view.png?_LANG=enus)

4. In the above Example, the following SET3 entries might include:

```nastran
$ CBEAM elements for B pillar
SET3, 10, ELEM, 7701, THRU, 7799
$ CBUSH elements for locking
SET3, 30, ELEM, 66, 67, 68, 69
$ RIGID ELEMENTS
SET3, 90, RBEIN, 9991, THRU, 9996
```
