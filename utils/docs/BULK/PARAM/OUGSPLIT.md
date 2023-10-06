## [OUGSPLIT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.OUGSPLIT.xhtml)

Default=YES

By default, displacements, velocities, and accelerations are written to separate tables. PARAM,OUGSPLIT,NO will combine these tables into a single table and is intended for third-party post-processors which are not able to read the separate tables. The value of OUGSPLIT does not affect the results in the f06 file.

