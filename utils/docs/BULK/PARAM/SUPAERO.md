## [SUPAERO](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SUPAERO.xhtml)

Default = ZONA

If SUPAERO=ZONA, then the ZONA51 code is used for supersonic aerodynamic calculations. If SUPAERO=CPM, then the CPM method is used. If ZONA51 is not available at a particular installation, PARAM,SUPAERO,CPM must be specified to avoid a fatal error when performing supersonic aerodynamic analyses. Only one supersonic aerodynamics method can be selected in a given run.

```text
┌───────┬──────────────────────────────────────────────────┐
│ Note: │ CPM is only supported for planar configurations. │
└───────┴──────────────────────────────────────────────────┘
```
