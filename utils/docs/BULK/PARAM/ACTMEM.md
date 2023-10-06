## [ACTMEM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ACTMEM.xhtml)

Default=0

This parameter can be used to specify TOTAL amount memory for all processors for Actran via DMP or PARAM,ACTDMP in 4 bytes mega-words.  By default (ACTMEM=0), Actran get the memory assigned to parent node only. An example, for 'memorymax=64gb mem=max', use PARAM,ACTMEM,16000 which get ACTRAN same amount of TOTAL memory as NASTRAN.

