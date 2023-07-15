## [DVPSURF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVPSURF.xhtml) - Design Variable to Control Surface Setting Relation

Defines the relationship between a control surface setting in a particular subcase and a design variable.       

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVPSURF ID      AELABEL TRIMID  DVID    COEF                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVPSURF 10      OBDFLAP 1       100     0.01746                                 
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique identification number (Integer>0)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ AELABEL   │ LABEL of the AESURF entry that is being designed (Character ,no default) │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ TRIMID    │ Associated trim set identification number (Integer>0)                    │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ DVID      │ DESVAR entry identification number (Integer>0)                           │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ COEF      │ Coefficient of linear relation (Real)                                    │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The relationship between the control surface setting and the design variable is given by  δ  = COEF * X

2. The surface called out by AELABEL must also appear on the trim entry specified by TRIMID. The value specified on the trim entry will be overwritten by the value obtained from the relationship of Remark 1.

3. Limits on the control deflection are not provided on this entry but can be specified on the underlying DESVAR

4. The DVID called out on this entry cannot be associated with any other designed property.

5. Note that since the DVPSURF calls out a TRIM ID, it is associated only with a single subcase.

