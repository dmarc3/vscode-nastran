## [BEIGRED](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.BEIGRED.xhtml)

Default = YES

PARAM,BEIGRED,YES requests a more efficient method to reduce viscous damping matrices. CPU and disk space savings may be significant if there is a small number of viscous damping elements. BEIGRED is automatically disabled if the number of DOF connected to viscous dampers exceeds the value specified by PARAM,MAXDAMP.

MAXDAMP (default=1000) specifies the maximum number of DOF connected to viscous damping elements, such that an alternate reduction method is employed. When there are relatively few viscous dampers, an alternate reduction method is chosen automatically for efficiency. The efficiency is lost however if the number of viscous damping DOF exceeds about 1000. If the number of viscous damper DOF exceeds MAXDAMP, User Warning Message 9166 is printed and the alternate damping reduction logic is disabled. Also note that if MAXDAMP is exceeded, FASTFR is disabled.

