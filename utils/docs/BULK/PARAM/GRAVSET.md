## [GRAVSET ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.GRAVSET.xhtml)

Default = 0

A PARAM, GRAVSET, n where n is a Bulk Data SET1 entry, allows the user to apply gravity loading (GRAV) to just a portion of the structure. GRAVSET like GRAV loading is global and is computed once at the beginning of the analysis. The Bulk Data SET1 n defines the GRIDS to which the gravity loading is to be applied. GRAVSET can appear in either the  Bulk Data  or  ABOVE  or  IN the 1st Subcase . A GRAVSET appearing in any other Subcase will be ignored and may cause incorrect results. A GRAVSET appearing in or above the first subcase takes precedence over a GRAVSET appearing in Bulk Data. See also the companion RFORSET entry. If there is no GRAV loading called out, then PARAM, GRAVSET, n needs to be removed from the run

