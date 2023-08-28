## [MPCAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MPCAX.xhtml) - Conical Shell Multipoint Constraint

Defines a multipoint constraint equation of the form

![bulkno06052.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06052.jpg?_LANG=enus)

for conical shell coordinates, where  u j  represents the degree-of-freedom Cj at ring RIDj and harmonic HIDj.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPCAX   SID                             RID1    HID1    C1      A1      +       
+       RID2    HID2    C2      A2      -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPCAX   32                              17      6       1       1.0             
        23      4       2       -6.8                                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                        │
├───────────┼────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                      │
├───────────┼────────────────────────────────────────────────────────────────┤
│ RIDj      │ Ring identification number.  (Integer > 0)                     │
├───────────┼────────────────────────────────────────────────────────────────┤
│ HIDj      │ Harmonic identification number.  (Integer > 0)                 │
├───────────┼────────────────────────────────────────────────────────────────┤
│ Cj        │ Component number.  (1 < Integer < 6)                           │
├───────────┼────────────────────────────────────────────────────────────────┤
│ Aj        │ Coefficient.  (Real; Default = 0.0 except A1 must be nonzero.) │
└───────────┴────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MPCAX is allowed only if an AXIC entry is also present.
2. The first degree-of-freedom in the sequence is assumed to be the dependent degree-of-freedom.  A dependent degree-of-freedom assigned by one MPCAX entry cannot be assigned dependent by another MPCAX entry.
3. Multipoint constraint sets must be selected with the Case Control command MPC = SID.
4. Dependent degrees-of-freedom appearing on MPCAX entries may not appear on OMITAX, SPCAX, or SUPAX entries.
5. See     MSC Nastran Reference Guide  for further discussion of the problem.
6. By default, the grid point connectivity created by the MPC, MPCADD, and MPCAX entries is not considered during resequencing, (see the PARAM,OLDSEQ description in  .  In order to consider the connectivity during resequencing, SID must be specified on the PARAM,MPCX entry.  Using the example above, specify PARAM,MPCX,32.
