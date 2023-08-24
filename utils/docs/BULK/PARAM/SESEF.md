## [SESEF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SESEF.xhtml)

Default    = -1 (SOLs 103 and 115 only)

If SESEF = 0 in superelement normal modes analysis, the fraction of total strain energy for a superelement in each of the system’s modes is output in the vector SESEFA for tip superelements and in SESEFG for nontip superelements.  If SESEF = 1, strain energy fractions are output, and expansion of the eigenvectors from a-set size to g-set is branched over for tip superelements.  If SESEF = -1 (the default value), no strain energy fractions are computed.

Output requests must be present in order for strain energy fractions to be calculated.  If SESEF = 1, no other output results for tip superelements.

