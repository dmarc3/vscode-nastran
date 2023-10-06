## [MDOPT14](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MDOPT14.xhtml)

Default = NO

Option 14 of the MDENZO functional module modifies degree of freedom (DOF) based domain decomposition such that DOF belonging to any one grid point are retained in a single domain.  This action (PARAM,MDOPT14,YES) lends stability to the resulting solution at the possible expense of some efficiency. Setting MDOPT14 to NO bypasses this operation so that DOF may be distributed to any domain without restriction. This parameter applies to Matrix Domain ACMS.

