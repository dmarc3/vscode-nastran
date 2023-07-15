## [PBELT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBELT.xhtml) - Belt Property- SOL 700

Defines the properties of a belt element referenced by a CROD entry. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBELT   PID     LOAD    UNLOAD  DENSITY DAMP1   DAMP2   SLACK   PREST...        
                                                                                
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBELT   9       12      12      2.0E-5  0.1     0.1                             
                                                                                
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Field     │ Content                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Unique belt property number. (Integer > 0; required)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOAD      │ TABLED1 ID defining the force as a function of strain during loading. The strain at time n is      │
│           │ specified as engineering strain. (Integer > 0; required) strain(n)=(length(n)-length(0))/length(0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNLOAD    │ TABLED1 ID defining the force as a function of strain during unloading. The strain at time is      │
│           │ specified as engineering strain. (Integer > 0; required) strain(n)=(length(n)-length(0))/length(0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DENSITY   │ Density of the belt elements as mass per unit length. (Real > 0.0; required)                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMP1     │ A damping force is added to the internal force of the belt elements to damp out high frequency     │
│           │ oscillations. (Real > 0.0; default=0.1)       The damping force is equal to:                       │
│           │ Fdamp=DAMP1.mass.(dvel/dt) Where Fdamp = damping force DAMP1= damping coefficient mass = mass of   │
│           │ belt element dvel = velocity of elongation dt = time step                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMP2     │ The maximum damping force: DAMP2*Fbelt. (Real > 0.0; default=0.1) Where Fbelt = Internal force in  │
│           │ the belt element                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SLACK     │ TABLED1 ID defining the slack as a function of time. (Integer > 0; default=not used) The slack     │
│           │ must be specified as engineering strain and will be subtracted from the element strain at time as: │
│           │ strain(n)=strain(n)-SLACK(n) The force in the element is zero until the element strain exceeds the │
│           │ slack.                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRESTRESS │ TABLED1 ID defining a prestress strain as a function of time. (Integer > 0; default=not used) The  │
│           │ prestress strain must be specified as engineering strain and will be added to the element strain   │
│           │ at time as: strain(n)=strain(n)+PRESTRESS(n)                                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The loading and unloading curves must start at (0.0, 0.0).

2. During loading, the loading curve is applied to determine the force in the belt element. At unloading, the unloading curve is shifted along the strain axis until it intersects the loading curve at the point from which unloading commences. The unloading table is applied for unloading and reloading, until the strain again exceeds the intersection point. Upon further loading, the loading table is applied. For subsequent unloading, the sequence is repeated.

3. Belt elements are tension only elements.

4. Instantaneous slack of an element can also be initialized per element using the TICEL entry with the keyword SLACK and a corresponding VALUE.

