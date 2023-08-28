## [DBDICT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DBDICT1.xhtml)

Default    = -1

Controls the printout of the database directory at the beginning and end of the run.  See DBDICT FMS statement description in Section 2.  If DBDICT   =   0, then the database directory will be printed at the start of the run.  If DBDICT=1, then the directory will be printed at the end of the run.  If DBDICT   >   2, then it will be printed at the beginning and end of the run.  If DBDICT   =   -1 (the default), the directory is not printed at the beginning or end of the run.

If multiple versions and/or projects exist on the database, then the parameters DBDRPRJ and DBDRVER allow the user to select the desired project and version, respectively.  The appropriate values may be found in the Project/Version Table that is printed upon restart.  If DBDRVER   =   0 (or DBDRPRJ=0), then the current version (or project) is selected.  If DBDRPRJ=-1 (or DBDRVER   =   -1), then all projects (or versions) are selected.

