## [MECHFIX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MECHFIX.xhtml)

Default = AUTO

Control for fixing the massless mechanism problem. This capability is provided automatically for the default of this parameter, listed above. This capability is executed only when the eigensolution does not provide answers because of symptoms consistent with the presence of massless mechanisms. If MECHFIX is set to YES, the constraint modes are removed before attempting an eigensolution. When set to NO, the capability is blocked, the eigensolution will fail, and User Fatal Message 9117 will be printed in the F06 file. See also  MMFIL  and  MMMETH .

