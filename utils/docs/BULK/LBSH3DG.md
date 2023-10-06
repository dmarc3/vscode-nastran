## [LBSH3DG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LBSH3DG.xhtml) - Tables used by an NLBSH3D to find force as function of displacement, velocity and rotor speed

Defines the force tables of NLBSH3D nonlinear loads as function of relative displacement or velocity and current rotor speed.

#### Format:

FORM =  ASYM  (Asymmetric matrix representation)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LBSH3DG LID     FORM    MIN_FREQMAX_FREQ                                +
+       P11     P12     P13     P14     P15     P16                     +
+       P21     P22     P23     P24     P25     P26                     +
+       P31     P32     P33     P34     P35     P36                     +
+       P41     P42     P43     P44     P45     P46                     +
+       P51     P52     P53     P54     P55     P56                     +
+       P61     P62     P63     P64     P65     P66
```

FORM =  DIAG  (Only Diagonal terms representation) 

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LBSH3DG LID     FORM    MIN_FREQMAX_FREQ                                +
+       P11     P22     P33     P44     P55     P66
```

FORM =  SYM  (Symmetric matrix representation)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LBSH3DG LID     FORM    MIN_FREQMAX_FREQ                                +
+       P11                                                             +
+       P21     P22                                                     +
+       P31     P32     P33                                             +
+       P41     P42     P43     P44                                     +
+       P51     P52     P53     P54     P55                             +
+       P61     P62     P63     P64     P65     P66                     +
```

```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ LID       │ Load identification group number for a NLBSH3D.  │                                               │
│           │ (Integer > 0; Required)                          │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ FORM      │ Type of Input Curves. (Character; Default SYM)   │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ SYM                                              │ Symmetric, only lower triangular terms needed │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ DIAG                                             │ Only diagonal terms are needed                │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│           │ ASYM                                             │ Asymmetric, all terms are needed              │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ MIN_FREQ  │ Minimum valid rotor speed for all the table      │                                               │
│           │ lookups provided. (Real). See remark 4.          │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ MAX_FREQ  │ Max valid rotor speed for all the table lookups  │                                               │
│           │ provided. (Real > 0.0 Required). Refer remark 4. │                                               │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ Pij       │ TABLED5 Id that provides TABLED1 ids as a        │                                               │
│           │ function of rotor speed in cycles per unit time. │                                               │
│           │ The TABLED1 will have force as a function of     │                                               │
│           │ relative displacement and/or velocity.           │                                               │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────┘
```

#### Remarks:

1. Values for the nonlinear forces will be determined using interpolation based on rotor speed and relative deflection/velocity of grid pair. If the rotor speed is beyond the range specified by MIN_FREQ and MAX_FREQ, a FATAL message will be produced. (Extrapolation will NOT be used beyond this range).
2. At selected rotor speeds (Xi), force vs displacement (for LID-1) or force vs velocity (for LID-2) tables (TIDi) are defined on TABLED1 entries.
3. For an arbitrary rotor speed n, linear interpolation is used to determine the force f  to be applied for the displacement/velocity. The illustration shows a graphic representation of interpolation for force vs displacement between tables defined for rotor speeds X1 and X2.

![inset_004068.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/inset_004068.png?_LANG=enus)

4. For SYNC analysis, rotor speed is obtained from NLFREQ / NLFREQ1 bulk data card. For ASYNC analysis, rotor speed is obtained from RGYRO bulk data card.
5. All the tables (TABLED5 Pij) should provide lookup tables (TABLED1) for the range of rotor speeds between Min_FREQ and  Max_Freq.
