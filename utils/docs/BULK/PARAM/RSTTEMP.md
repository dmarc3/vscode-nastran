## [RSTTEMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.RSTTEMP.xhtml)

Default = NO

In SOL 106, PARAM,RSTTEMP,YES will cause the automatic restart to ignore changes to or additions of TEMPij Bulk Data entries. This is applicable to SOL 106 restart runs in which the temperature changes are only intended to affect the loading and not the material properties.  The restart run also requires the use of the DBLOCATE FMS statement instead of the RESTART statement to reference the data base; e.g.,

assign run1=plate-run1.MASTER

dbloc logical=run1

