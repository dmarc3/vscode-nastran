## [OGRDOPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.OGRDOPT.xhtml)

Integer; Default = 1

Selects the method used to create the set of grid points retained in the reduced grid point geometry data block. The default simply uses the set of grid point IDs listed in the OGRDSET Case Control SET. Set consistency is checked. OGRDOPT=2 uses the list of grid point IDs that are connected to elements in the OELMSET Case Control SET. OGRDOPT=3 merges the contents of the OGRDSET Case Control SET with the contents of the grid point list connected to the elements in the OELMSET Case Control SET. There is no consistency check for OGRDOPT=2 or OGRDOPT=3. OGRDOPT=0 turns the SET consistency check off altogether. For this case, the grid points retained are those specified in the OGRDSET SET and the elements retained are those specified in the OELMSET SET. See also PARAM,OELMOPT description.

