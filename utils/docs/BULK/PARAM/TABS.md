## [TABS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.TABS.xhtml)

Default    = 0.0

TABS is used to convert units of the temperature input ( ° F or  ° C) to the absolute temperature ( ° R or  ° K).  Specify:

```text
PARAM,TABS,273.16      When Celsius is used.
PARAM,TABS,459.69      When Fahrenheit is used.
```

Refer to the Bulk Data entry,  CREEP  for a creep analysis with SOLs 106 or 153. Refer to PARAM,SlGMA for heat transfer analysis.

