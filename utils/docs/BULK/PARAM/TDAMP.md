## [TDAMP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.TDAMP.xhtml)

PARAM,TDAMP,Real

When using enhanced modal damping for superelements (see PARAM,SESDAMP,AUG ), the user may choose how the damping factor for the constraint modes is determined.

If TDAMP=0.0 (the default), the damping factor is averaged over all the damping coefficients defined on TABDMP1.

If TDAMP is less than 0.0, the damping factor from TABDMP1 associated with the lowest natural frequency is used.

If TDAMP is positive, the damping factor defined by TDAMP is used directly.

