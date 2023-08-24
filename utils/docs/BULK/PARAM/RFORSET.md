## [RFORSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.RFORSET.xhtml)

Default = 0

A PARAM, RFORSET, n where n is a Bulk Data SET1 entry, allows the user to apply rotational force loading (RFORCE) to just a portion of the structure. RFORSET like RFORCE loading is global and is computed once at the beginning of the analysis. The Bulk Data SET1 n defines the GRIDS to which the rotational force loading is to be applied. RFORSET can appear in either the  Bulk Data  or  ABOVE  or  IN the 1st Subcase . A RFORSET appearing in any other Subcase will be ignored and may cause incorrect results. A RFORSET appearing in or above the first subcase takes precedence over a RFORSET appearing in Bulk Data. See also the companion GRAVSET entry. If there is no RFORCE loading called out, then PARAM, RFORSET, n needs to be removed from the run.

