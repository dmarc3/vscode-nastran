## [CLEANVEC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CLEANVEC1.xhtml)

Default    =    No

CLEANVEC is used when solving for the real modes of a system. If CLEANVEC is set to YES, then if two modes appear to be repeated roots, the program will attempt to find a set of clean, repeatable eigenvectors for them. As the eigenvectors of repeated roots can be any combination of the actual eigenvectors, obtaining clean eigenvectors can make them easier to identify. In the case of ROM model creation, this is essential for mode-mapping.

