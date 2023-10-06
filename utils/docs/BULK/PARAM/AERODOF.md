## [AERODOF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AERODOF.xhtml)

Default=35

Digits 1 through 6 indicate which k-set degrees of freedom are to be output. This is only for Double Lattice lifting surfaces that provide output in the plunge (3) and pitch (5) degrees of freedom by default. If additional digits are specified (e.g. AERODOF=1235), then the k-set aerodynamic matrices are padded with null columns for the additional degrees of freedom. Nastran will not create aerodynamic data for these added degrees of freedom. This parameter is only useful to the user that knows how to augment the existing aerodynamic data from an external source. Degrees of freedom 3 and 5 may not be omitted.

