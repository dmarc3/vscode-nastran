## [PACINFID](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.PACINFID.xhtml)

Integer, no default.

This parameter is used only in data recovery operations for elements in acoustic field point mesh bulk data.  PACINFID is the ID of the PACINF entry that contains the location of the pole used to determine element orientation.  Data recovery operations require that the element surface normal vector point away from the pole location.  This parameter is required only if the acoustic model references multiple PACINF bulk data entries and the pole locations on the PACINF entries are not coincidental.

