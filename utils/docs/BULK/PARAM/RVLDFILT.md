## [RVLDFILT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.RVLDFILT.xhtml)

Default    = NO

This parameter controls a filtering process for residual vector loads. Set PARAM,RVLDFILT,YES to check the linear independence of load vectors to be used as a basis for residual vector augmentation. This option is useful if you have many thousands of applied loads, many of which occupy the same vector space (for example, same direction). For this case, linearly dependent load vectors will be discarded and not used for residual vector computation, leading to a more efficient solution. The linear dependence check itself may be very time consuming, hence the default value is NO. If the number of load vectors is more than about 20,000, the linear dependence check may require long running time. When the number of load vectors is large, User Information Messages 10590, 10591, and 10592 may be printed in the F06 file. See also related parameter  MAXAPL .

