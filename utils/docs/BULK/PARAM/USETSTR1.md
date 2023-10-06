## [USETSTRi](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.USETSTRi.xhtml)

Input-character-Default’     ‘

USETSTR1 through USETSTR4 specifies the sets that will be printed by the specification of parameters USETPRT and USETSEL. Any set in  Degree-of-Freedom Sets  may be specified. A “:” is used as a separator. In the following example, the m-set (degrees-of-freedom eliminated by multipoint constraints) and s-set (degrees-of-freedom eliminated by single point constraints) are specified.

#### Example:

```nastran
PARAM,USETSTR1,M:S
```
