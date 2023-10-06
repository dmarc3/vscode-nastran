## [BUSHNM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.BUSHNM.xhtml)

Default    =    YES

BUSHNM =NO - If the only frequency dependencies are CBUSH/PBUSH/PBUSHT, (CELAS1 or CELAS3)/PELAS/PELAST, or (CDAMP1 or CDAMP3)/PDAMP/PDAMPT, or CAABSF/PAABSF or any combination of these, then the DMAP will execute the original DMAP path designed for these elements.

The original DMAP path designed for the above elements does not make use of the concept of master frequencies controlled by the Case Control Command MFREQ=n. To obtain the same forcing frequency selection, and hence the same results, with PARAM,BUSHNM,YES that is in effect, with PARAM,BUSHNM,NO, the user should either set MFREQ to the same set as defined on the Case Control Command FREQ=n, or set MFREQ=NOAUTO.

PARAM,BUSHNM,NO in conjunction with a GPFORCE request will cause a Nastran fatal error at the beginning of the Nastran run. The reason is that the stiffness, structural damping, and viscous damping matrices are non-standard in form for the old path and represent incremental changes between nominal and current frequency.

If the user is currently running Porous Elastic Material (PEM), PARAM, BUSHNM is internally set to: PARAM, BUSHNM, NO and overrides any input value.

