## [SLOOPID](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SLOOPID.xhtml)

Default    = 0 (SOL 129 and 159 only)

In a nonlinear transient analysis (SOLs 129 and 159) restart, SLOOPID identifies the initial conditioning previous nonlinear analysis run (SOLs 106 and 153 respectively).  Setting SLOOPID greater than 0 will cause SOLs 129 and 159 to start from the static deformed position.

