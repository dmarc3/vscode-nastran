## [APP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.APP.xhtml) - Specifies Solution Sequence Approach

Selects heat transfer analysis in the linear static solution sequence SOL 101, or a coupled analysis combining heat transfer and structural analysis in SOL 153.

#### Format:

```nastran
APP approach
```

#### Example:

The following requests a heat transfer rather than a structural analysis in SOL 101.

```nastran
SOL 101
APP HEAT
```

```text
┌───────────┬─────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                         │                                                  │
├───────────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
│ approach  │ Specifies one of the following: │                                                  │
├───────────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ HEAT                            │ Indicates that heat transfer is to be performed  │
│           │                                 │ in SOL 101.                                      │
├───────────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ COUPLED                         │ Indicates that a coupled analysis combining heat │
│           │                                 │ transfer and structural analysis is to be        │
│           │                                 │ preformed in SOL 153.                            │
└───────────┴─────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. The APP statement is optional.
2. The APP HEAT statement applies only to linear static SOL 101. The APP HEAT statement is not required in SOLs 153 and 159, or in SOL 101 if PARAM,HEATSTAT,YES is specified.
3. The NASTRAN HEAT=1 statement is an alternate specification of APP HEAT. See  .
