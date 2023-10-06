## [ESLPRT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ESLPRT.xhtml)

Default = 0

ESLPRT specifies how often the ESLNRO results are printed in the .f06 file and saved in the .xdb file. By default, the program will print the results to the .f06 file at the first and the last design cycles and save the results to .xdb (or .op2) at the first and last design cycles on the disk. (See  ESLPRT1  for selection of result contents.)

* \> 0 = then the results are printed at the first design cycle; at every design cycle that is a multiplier of ESLPRT; and the last design cycle.
* \< 0 = the no results are printed and saved.

