## [PMARKER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PMARKER.xhtml) - Property Definition of a Marker Element

Defines the behavior of the marker element in the EULER domain. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PMARKER ID      TYPE                                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PMARKER 7       FIXED                                                           
```
```text
┌───────────┬─────────────────────────────────────────────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                         │                                               │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ ID        │ Marker property ID, referred by CMARKB2 and     │                                               │
│           │ CMARKN1 entries. (Integer > 0, Required)        │                                               │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ TYPE      │ Behavior of the marker grid points in the Euler │                                               │
│           │ domain: (Character, Default = FIXED)            │                                               │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ FIXED                                           │ The marker will not move in the Euler domain. │
├───────────┼─────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ MOVING                                          │ The marker will be moved by velocities in the │
│           │                                                 │ Euler domain.                                 │
└───────────┴─────────────────────────────────────────────────┴───────────────────────────────────────────────┘
```
#### Remarks:

1. The PMARKER entry will be ignored for elements that are referring to structural grid points. These structural grid points will move with the structure and the Euler velocities do not change their velocity.

2. TYPE = FIXED. This means that the marker is stationary through out the simulation and it is therefore not moving with the Euler velocity. If the marker grid is located outside the Eulerian domain(s), the Marker will still be allowed to exist. It means, however, that no variables are recorded and that the variables will appear as zero on the Time History plots.

3. TYPE = MOVING. The marker is moving along with the Eulerian material. When the grid point approaches a coupling surface there is no mechanism that prevents the marker from passing through the coupling surface. When this happens the marker enters an element that is covered and motion of the grid point will stop. It is allowed that the grid point moves from one Euler domain to the other through a porous hole or a coupling surface with interactive failure.

