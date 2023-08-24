## [PMINC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PMINC.xhtml) - Constant Spallation Model

Defines a spallation model where the minimum pressure is constant. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PMINC   PID     VALUE   FVTOL   FVTOL2                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PMINC   220     -370                                                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Unique PMINC number. Referenced from MATDEUL. (Integer > 0, Required)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ VALUE     │ The value of the minimum pressure. (Real < 0.0, Default = 0.0)                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ FVTOL     │ Volume cutoff tolerance. (Real > 0, 1.E-4)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ FVTOL2    │ Maximum void fraction that is permissible under tension. (Real > 0; Default = 0.0) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If the pressure in an element falls below the minimum pressure, the element spalls. The pressure and yield stress are set to zero.

     ![inset_107188.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/inset_107188.jpg?_LANG=enus)

2. The default for the volume cutoff tolerance is 1.E-4. This value should be decreased in case of large mass increase of material without any reason.
3. If an element spalls a void is created. In order to prevent getting void fractions that are too small, a void fraction is put to zero if it is smaller than FVTOL. The default for FVTOL is 1.E-4 and works only for Eulerian elements. This value should be decreased in case of large mass increase of material without any reason. Voids can be created during transport of material, because of a material failure and by unloading.
4. With FVTOL2 = 0, any void fraction in an element will lead to failure, and then no tensile stresses are possible. In simulations in which tensile conditions are present, it can be required to allow for tensile stresses in the presence of a small void fraction not exceeding a threshold. This threshold is given by FVTOL2. A good value for FVTOL2 = 2 * FVTOL = e.E-4. FVTOL 2 is only used for Eulerian materials. FVTOL 2 should be larger than FVTOL.
