## [CHKCOND](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.CHKCOND.xhtml)

Default    = YES

CHKCOND=YES triggers the calculation of the stiffness matrix condition number in linear static analysis, SOL 101. User Information Message 15201 is printed in the F06 file to display the condition number. The condition number calculation is supported only for the MSCLDL sparse direct solver. The condition number is not computed if MUMPS or Pardiso is used.

