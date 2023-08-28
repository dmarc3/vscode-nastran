## [DESPCH1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DESPCH1.xhtml)

Default = 6

DESPCH1 specifies in SOL 200 the amount of data to be written to the .pch and .des file. A positive DESPCH1 value request large field formats while a negative value requests small field formats. For a shape optimization job, if DESPCH1<>0, the updated GRID entries of the whole model will be written in the .pch file.

Descriptions of various DESPCH1 values are given below:

* 0 = Write no data.
* +1 = Write the property entries that are designed.
* +2 = Write all the property entries of a given type when one or more property of that type is designed.
* +4 = Write DESVAR and DRESP1 entries.
* +n = Write combine quantities by summing the DESPCH1 values. For example, n=1+4=5 requests writing all the designed property entries, DESVAR and DRESP1 entries to the .pch file for normal modes analysis.
* \> 0 = Write all (topology designed and non-designed) element density values to the topology element density history file jobname, des.
* < 0 = Write topological designed element density values to the topology element density history file jobname.des.
