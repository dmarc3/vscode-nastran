## [HEATSTAT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.HEATSTAT.xhtml)

Default    =    NO

In SOL 101, if PARAM,HEATSTAT,YES is entered, then temperatures are computed in a linear steady state heat transfer and then applied as thermal loads in a subsequent thermal stress analysis.  Two subcases are required.  The first defines the temperature loads, boundary conditions, and output requests for the heat transfer analysis and the second subcase defines the thermal loads, boundary conditions, and output requests for the thermal stress analysis.  Thermal loads in the second subcase are requested through the command

```nastran
TEMP(LOAD) = Heat Transfer Subcase ID
```

If this default is not acceptable, then in heat transfer subcase add the Case Control word TSTRU=SID and in structures subcase here

```nastran
TEMP(LOAD) = SID
```

See the Case Control command,  TSTRU   (Case) . PARAM,NESET is no longer used.

