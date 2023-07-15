## [MOTION](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MOTION.xhtml) - Specifies Motion Direction in Brake System for Brake Squeal Analysis Using SOL 400

Defines motion direction of brake system for brake squeal calculations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MOTION  ID              Velocity                                                
        FORM    COSX    COSY    COSZ    X       Y       Z                       
```
#### Example:<span style="color : #000000;"></span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MOTION  18              50.0                                                    
        ROTAT   0.5     0.2     0.9     12.0    7.5     -2.0                    
```
#### <span style="color : #000000;"></span>

or 

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MOTION  18              100.0                                                   
        TRANS   0.7     0.3     0.9                                             
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification ID of the Motion referred by other entry card like BRKSYS                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VELOCITY  │ Angular velocity of rotation or moving velocity of translation motion (not used now, designed for │
│           │ velocity-related brake analysis in future).                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FORM      │ Type of motion ROTAT - rotating motion; or TRANS - translation moving                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COSX(Y,Z) │ For FORM=ROTAT, X (Y, Z) direction cosine (basic coordinate system) of axis of rotation For       │
│           │ FORM=TRANS, X (Y, Z) direction cosine (basic coordinate system) of moving direction               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X (Y, Z)  │ X (Y, Z) coordinate in basic coordinate system of rotation center                                 │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. ROTAT and TRANS cannot be defined together in same entry card.

