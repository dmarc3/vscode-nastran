## [AGGROT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AGGROT.xhtml)

Default = YES

PARAM, AGGROT, YES (Default) produces both translation and rotational terms in the structure-fluid interface matrix AGG. PARAM, AGGROT, NO produces only translational terms in the structure-fluid interface matrix AGG. Since fluid elements see no rotational degrees of freedom, AGGROT YES or NO should have no significant effect on the results of the fluid cavity. Results on the structural side may change especially near unconstrained boundaries where there may be a reversal in the signs of some acceleration terms.

