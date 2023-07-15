## [SMETHOD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SMETHOD.Case.xhtml) - Iterative Solver Method Selection

Selects iterative solver method and parameters.

#### Format:

![casecontrol4a01354.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01354.jpg?_LANG=enus)  

#### Example:

```nastran
SMETHOD = ELEMENT  $  selects element-based iterative solver defaults.
SMETHOD = MATRIX  $  selects matrix based iterative solver defaults.
SMETHOD = 1000 $  specifies ID of ITER Bulk Data entry to select iterative.
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ ELEMENT   │ Selects the element-based iterative solver with default control values. │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ MATRIX    │ Selects the matrix-based iterative solver with default control values.  │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ n         │ Sets identification of an ITER Bulk Data entry (Integer > 0).           │
└───────────┴─────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The matrix-based iterative solver is available in SOLs 101, 106, 108, 111, 153, and 400 and allows use of all features.
2. The element-based iterative solver is only available in SOLs 101, 200 and 400. SMETHOD must be placed above all SUBCASEs in this case. It is intended primarily for very large solid element models. See the ITER Bulk Data entry for a list of restrictions in addition to details on setting the convergence parameter epsilon.
3. The element-based iterative solver can be used with SMP by setting smp=number on the command line. Please refer to   of this manual for correct usage.
4. GPGPU devices are not supported for iterative methods.
