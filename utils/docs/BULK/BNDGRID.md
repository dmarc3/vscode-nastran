## [BNDGRID](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BNDGRID.xhtml) - Boundary Grid Points

Specifies a list of grid point identification numbers on design boundaries or surfaces for shape optimization (SOL 200).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BNDGRID C       GP1     GP2     GP3     GP4     GP5     GP6     GP7     +       
+       GP8     -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BNDGRID 123     41      42      43      44      45      46      47      +       
+       49                                                                      
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BNDGRID C       GP1     “THRU”  GP2                                             
BNDGRID 123     41      THRU    49                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number (any unique combination of integers 1 through 6 with no embedded blanks).     │
│           │ See Remark 1.                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GPi       │ Shape boundary grid point identification number.  (0 < Integer < 1000000; For THRU option,     │
│           │ GP1 < GP2)                                                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. C specifies the components for the listed grid points for which boundary motion is prescribed.
2. Multiple BNDGRID entries may be used to specify the shape boundary grid point identification numbers.
3. Both fixed and free shape boundary grid point identification numbers are listed on this entry.
4. The degrees-of-freedom specified on BNDGRID entries must be sufficient to statically constrain the model.
5. Degrees-of-freedom specified on this entry form members of the mutually exclusive s-set. They may not be specified on other entries that define mutually exclusive sets. See   for a list of these entries.
6. Fluid grids are not supported for BNDGRID.
