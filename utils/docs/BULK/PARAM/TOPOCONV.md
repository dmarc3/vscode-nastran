## [TOPOCONV](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.TOPOCONV.xhtml)

Default = 80

Parameter TOPOCONV is applicable only to ESLNRO topology optimization tasks. It sets a lower bound for the percentage of the design variables whose maximum relative changes are within the tolerance specified by CONVDV on the DOPTPRM entry.

By default, when more then 80% of the design variables show their maximum relative changes are within CONVDV, the job will be terminated.

