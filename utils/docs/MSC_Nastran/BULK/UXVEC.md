## [UXVEC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.UXVEC.xhtml) - Control Parameter State

Specification of a vector of aerodynamic control point (extra point) values. These data define the control positions corresponding to user defined nonlinear control forces that have been defined by AEDW, AEPRESS and AEFORCE entries. Only nonzero values need to be defined.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UXVEC   ID                                                              +       
+       LABEL1  UX1     LABEL2  UX2     -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
UXVEC   1001                                                            +       
+       THRUST  1.E4    ANGLEA  .015                                            
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Control vector identification number, see Remark 1. (Integer > 0)                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABELi    │ Controller name. This must correspond to an existing AESURF, AESTAT or AEPARM label or INTERCPT │
│           │ (Character). See Remark 4.                                                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UXi       │ The magnitude of the aerodynamic extra point degree-of-freedom (Real)                           │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
