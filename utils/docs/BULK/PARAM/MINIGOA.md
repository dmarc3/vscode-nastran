## [MINIGOA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MINIGOA.xhtml)

Default = NO

Allows for the reduction in the amount of disk space used when using superelements. When this parameter is set to YES, the transformation matrix GOA will contain terms only for the degrees-of-freedom in the U5 (USET, USET1, SEUSET, SEUSET1) set. This can allow for a significant reduction in the amount of disk space used by the database. The limitation of using this approach is that data recovery will be available only for these degrees-of-freedom and elements connected to them.

