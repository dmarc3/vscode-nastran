## [ESLLCOMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ESLLCOMP.xhtml)

Default = No

ESLLCOMP selects types of compliance response to be included in the design task. The nonlinear compliance response is defined using a DRESP1 entry with RTYPE=COMP for the ESLNRO topology optimization tasks. As the default, it is computed by the product of the applied nonlinear loads and corresponding nonlinear displacement components. Alternatively, ESLLCOMP=YES selects a linear compliance response that computed as the total work done by the equivalent static loads on the linear system.

