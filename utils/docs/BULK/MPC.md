## [MPC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MPC.xhtml) - Multipoint Constraint

Defines a multipoint constraint equation of the form

![bulkno06050.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06050.jpg?_LANG=enus)  

where  u   j  represents degree-of-freedom Cj at grid or scalar point Gj.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPC     SID     G1      C1      A1      G2      C2      A2                      
                G3      C3      A3      -etc.-                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MPC     3       28      3       6.2     2               4.29                    
                1       4       -2.91                                           
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gj        │ Identification number of grid or scalar point.  (Integer > 0)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Cj        │ Component number.  (Any one of the Integers 1 through 6 for grid points; blank, zero or 1 for │
│           │ scalar points.)                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Aj        │ Coefficient.  (Real; Default = 0.0 except A1 must be nonzero.)                                │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Multipoint constraint sets must be selected with the Case Control command MPC = SID.

2. The first degree-of-freedom (G1, C1) in the sequence is defined to be the dependent degree-of-freedom.  A dependent degree-of-freedom assigned by one MPC entry cannot be assigned dependent by another MPC entry or by a rigid element.

3. Forces of multipoint constraint may be recovered in all solution sequences, except SOL 129, with the MPCFORCE Case Control command.

4. The m-set degrees-of-freedom specified on this entry may not be specified on other entries that define mutually exclusive sets.  See the   for a list of these entries.

5. By default, the grid point connectivity created by the MPC, MPCADD, and MPCAX entries is not considered during resequencing, (see the PARAM,OLDSEQ description in  .  In order to consider the connectivity during resequencing, SID must be specified on the PARAM,MPCX entry.  Using the example above, specify PARAM,MPCX,3.

