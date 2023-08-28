## [JWLDET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.JWLDET.xhtml)

Default=NOLINK

With the default multiple denotations with EOSJWL are NOT LINKED: the detonation wave of one explosive cannot ignite another explosive. When the option is LINK, multiple denotations with EOSJWL are LINKED: the detonation wave of one explosive can ignite another explosive. For option NOLINK: TDET is set to -1 for elements that have no JWL material. The “NOLINK” option is only valid with true JWL materials - not valid for the “Static Detonation/Ideal Gas” model. Setting this parameter as “NOLINK” will prevent “sympathetic ignition”. Each charge will ignite at the specified “TDET” in its own DETSPH card.

