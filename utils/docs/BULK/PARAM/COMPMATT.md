## [COMPMATT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.COMPMATT.xhtml)

Default = NO, SOL 106 and SOL 400 only

In nonlinear statics (SOLs 106, 400 ANALYSIS=NLSTAT), composite materials compute temperature-dependent properties for the plies only at the reference temperature given on the PCOMP Bulk Data entry. The ply properties are smeared and used for all load steps, regardless of whether the temperature is changing through application of thermal loads.

If the parameter is set to YES, the temperature-dependent properties for the plies are updated and smeared at the current temperature for each load step. For CQUAD4 and CTRIA3 elements with offsets, the large rotation offset method specified by “MDLPRM,OFFDEF,LROFF” in SOL 400 must be used.

If the parameter is set to NONSMEAR, the temperature-dependent properties for the plies are updated at the current temperature for each load step. This option, only available for the CQUADR and CTRIAR elements, is an alternative to the smeared approach.

This parameter only applies to SOLs 106 and 400 ANALYSIS=NLSTAT, and only applies to composite CQUAD4, CTRIA3, CQUADR and CTRIAR elements that are not associated with the enhanced nonlinear materials (PSHLN1).

Prior to Nastran version 2019, when COMPMATT was set to YES, material nonlinear was assumed even when no composite plies had temperature-dependent materials or when there was no MATTi type entries associated with temperature dependent plies. This has caused confusion as to when SOL106 or SOL400 is doing linear or nonlinear material solutions. Starting in V2019, PARAM, COMPMATT, YES will only turn on material nonlinear if there are active MATTi entries as well.

Additionally, prior to Nastran version 2019, when PARAM, COMPMATT, YES was used in conjunction with TEMPP1 entries, ply stress computation used only the reference plane temperature. Starting in V2019, ply stress computation will use reference plane temperature plus the thermal gradient term applied at the center of each ply. (To revert to the old method, NASTRAN SDRCMPTP=1 may be added to the Nastran section.) The enhanced nonlinear materials (PSHLN1) do not support the TEMPP1 entry.

See the Nastran  OFTDCMP(804)  entry comment about force/moment data recovery with PARAM, COMPMATT, YES and a MID4 field specified on the resulting smeared composite internal PSHELL entry.

