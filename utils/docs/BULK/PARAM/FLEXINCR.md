## [FLEXINCR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FLEXINCR.xhtml)

Default = NO

In SOL 144, a value of YES will cause the TRIM subcases to be ignored. Instead, the TRIM Bulk Data will be used to obtain the set of Mach, Dynamic pressure and symmetry values for Unit Solutions (Flexible Increments). These data can be archived in the aeroelastic database for subsequent reuse. (Flexible Increments are always computed. This param merely avoids the TRIM subcase if these increments are all that is required.)

