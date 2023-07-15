## [FLOWDEF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FLOWDEF.xhtml) - Default Flow Boundary

Definition of default Eulerian flow boundary condition. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOWDEF FID             TYPEM                                                   
        TYPE1   VALUE1  TYPE2   -etc.-                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FLOWDEF 25              HYDRO                                                   
        DENSITY 1000                                                            
```
```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ FID       │ Unique FLOWDEF number. (Integer > 0; Required     │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TYPEM     │ HYDRO, STRENGTH, MMHYDRO, or MMSTREN. (Character, │                                                │
│           │ HYDRO)                                            │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ TYPEi     │ The flow boundary property being defined.         │                                                │
│           │ (Character)                                       │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ Material                                          │ The MATDEUL ID number.                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ XVEL                                              │ The material velocity in the x-direction.      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ YVEL                                              │ The material velocity in the y-direction.      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ ZVEL                                              │ The material velocity in the z-direction.      │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ PRESSURE                                          │ The pressure of the material at the boundary.  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ DENSITY                                           │ The density of the material at inflow.         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ SIE                                               │ The specific internal energy at inflow         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ FLOW                                              │ The type of flow boundary required.            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ HYDSTAT                                           │ A Hydrostatic pressure profile using a HYDSTAT │
│           │                                                   │ entry.                                         │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ VALUEi    │ The value for the property defined. (Real;        │                                                │
│           │ Integer or Character; Required)                   │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ For TYPEi set to flow the value is a character    │                                                │
│           │ entry being either IN, OUT, or BOTH, defining     │                                                │
│           │ that the flow boundary is defined as an inflow,   │                                                │
│           │ outflow, or possibly an in- or outflow boundary.  │                                                │
│           │ The default is BOTH.                              │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ VALUEi is required data only if one or more of    │                                                │
│           │ the TYPEi entries are defined. The TYPEi entries  │                                                │
│           │ are not required. Thus, a flow boundary by        │                                                │
│           │ default allows for in- or outflow of the material │                                                │
│           │ adjacent to the boundary.                         │                                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│           │ For TYPE = HYDSTAT, the value is an integer entry │                                                │
│           │ denoting the HYDSTAT entry to be used.            │                                                │
└───────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```
#### Remark:

1. If this entry is not specified, a default wall boundary condition is applied to all Eulerian free faces.

2. For TYPE = HYDSTAT, the pressure is set using HYDSTAT, the velocity equals the element velocity. In case of inflow the density follows from the hydrostatic pressure by using the equation of state.

