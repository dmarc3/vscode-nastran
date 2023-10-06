## [ASING](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ASING.xhtml)

Default    = 0

ASING specifies the action to take when singularities (null rows and columns) exist in the dynamic matrices (or  ![parameters01599.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01599.jpg?_LANG=enus)  in statics).  If ASING=-1, then a User Fatal Message will result.

If ASING=0 (the Default), singularities are removed by appropriate techniques depending on the type of solution being performed.  The procedures used are described in  Data Recovery Operations in SubDMAP SEDRCVR  and   Real Eigenvalue Analysis in SubDMAPs SEMR3 and MODERS   in the  MSC Nastran Reference Guide .

