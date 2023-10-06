## [PLOTEL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLOTEL.xhtml) - Dummy Plot Element Definition

Defines a one-dimensional dummy element for use in plotting.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOTEL  EID     G1      G2                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOTEL  29      35      16                                                      
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (Integer > 0)                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Grid point identification numbers of connection points. (Integer > 0; G1G2) │
└───────────┴─────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This element is not used in the model during any of the solution phases of a problem. It is used to simplify plotting of structures with large numbers of colinear grid points, where the plotting of each grid point along with the elements connecting them would result in a confusing plot.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. Only one PLOTEL element may be defined on a single entry.
4. In superelement analysis, PLOTELs, as well as other elements such as CBAR, CQUAD4, etc., will affect the formation of the superelement tree. The PLOTEL EIDs will also appear in the superelement map output; see the description of PARAM,SEMAPPRT in  .
5. Only grid points connected by structural elements appear on structure plots. This does not include points connected only by rigid or general elements or MPCs. A plot element in parallel with elements that do not plot will cause these points to be present.
