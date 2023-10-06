## [DESPCH](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DESPCH.xhtml)

Default    = 0

For sizing and shape topography optimization, DESPCH specifies in SOL 200 when the optimized (updated) bulk data entries are written to the PUNCH file. Currently, all the property entries, material entries, and connectivity entries that can be designed and DESVAR, DRESP1, and GRID entries can be written. Notice that the DRESP1 entries will be written if only when a mode tracking is performed and the DRESP1 responses have type FREQ or EIGN.

For topology/topometry optimization, DESPCH specifies when the topology optimized element density values (or topometry optimized values) are written to the element result file jobname.des. This file can be directly read in PATRAN or third party post-processor to displace and animate the topology/topometry optimization results.

* < 0 = Never
* = 0 = at the last design cycle only (Default)
* \> 0 = at every design cycle that is a multiple of DESPCH and the last design cycle. For example, if n=2 and the maximum number of design cycles is 5 (DESMAX=5 on the DOPTPRM entry), then, DESVAR and GRID entries at design cycle 2, 4, and 5 are written in the punch file.

