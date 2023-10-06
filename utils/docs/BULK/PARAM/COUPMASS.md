## [COUPMASS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.COUPMASS.xhtml)

Default    =    -1

COUPMASS > 0:

    Requests the generation of coupled rather than lumped mass matrices for elements with coupled mass capability, as listed in Table 3-1 in the MSC Nastran Reference Guide. This option applies to both structural and nonstructural mass for the following elements: CBAR, CBEAM, CONROD, CQUAD4, CHEXA, CPENTA, CPYRAM, CQUAD8, CROD, CTETRA, CTRIA3, CTRlA6, CTRIAX6, CTUBE.

COUPMASS < 0:

    (Default) causes the generation of lumped mass matrices (which may include torsion inertia for beam elements, and some coupling if there are beam offsets) for all of the above elements. However, if SYSTEM(414) is greater than zero, (Default = 0) then the lumped mass matrices will contain translational components only for the CBAR and CBEAM elements.
