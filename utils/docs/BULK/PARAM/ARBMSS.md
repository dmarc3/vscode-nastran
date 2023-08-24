## [ARBMSS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ARBMSS.xhtml)

Default = NO

ARBMSS controls the stress recovery for the whole arbitrary beam cross section and the companion ‘screened’ stresses. The stress recovery for the whole cross section is available in ‘OP2’ format and suitable for post-processing. The ‘screened’ stresses for CBAR and CBEAM elements is available in print file (f06) and can be utilized for design optimization via RTYPE=ABSTRESS on DRESP1. This parameter is functional for PBRSECT and PBMSECT only. To turn on the capability, set value of ARBMSS to ‘YES’.

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ The recovery of ‘screened’ stresses will be turned on automatically if RTYPE=ABSTRESS is in use on │
│       │ DRESP1.                                                                                            │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
