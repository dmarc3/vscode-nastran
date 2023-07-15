## [DETSPH](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DETSPH.xhtml) - Spherical Detonation Wave

Defines the ignition point from which a spherical detonation wave travels, causing the reaction of high explosive materials. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DETSPH  DID     MID     X       Y       Z       VEL     TIME                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DETSPH  100     10      96.5    177.6   37.4    2379.   1.7E-6                  
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ DID       │ Unique detonation number. (Integer > 0; Required)                        │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ MID       │ References MATDEUL id of the exploding material. (Integer > 0; Required) │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ X, Y, Z   │ Coordinates of the ignition point. (Real, 0.0)                           │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ VEL       │ Velocity of the detonation wave. (Real > 0.0, 0.0)                       │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ TIME      │ Detonation time. (Real > 0.0, 0.0)                                       │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. An element detonates when a spherical detonation wave originating from the detonation point at the specified time reaches the element.

