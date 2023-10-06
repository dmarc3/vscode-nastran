## [DELCLUMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DELCLUMP.xhtml)

Default = 0.5, SOL 700 only

#### Format:

```nastran
PARAM,DELCLUMP,VALUE
```

#### Example:

```nastran
PARAM,DELCLUMP,0.1
```

Prevents small clumps in the Euler mesh from determining the time step and prevents the leakage of small masses to isolated regions.

```
VALUE   =   Value of DELCLUMP. See Remark 1. (Real > 0.0)
```
#### Remarks:

1. Material in Eulerian elements of a clump with:

     ![parameters01653.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01653.jpg?_LANG=enus)  is eliminated

2. See also parameter FBLEND.

