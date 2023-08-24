## [W3, W4, W3FL, W4FL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.W3.W4.W3FL.W4FL.xhtml)

Default    = 0.0

The damping matrix for transient analysis is assembled from the equation:

![parameters01849.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01849.jpg?_LANG=enus)  

In coupled fluid-structure analysis, W3 and W4 are applied to structural portion of the model and W3FL and W4FL to the fluid portion of the model.  The default values of 0.0 for W3, W4, W3FL, and W4FL cause the  ![parameters01851.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01851.jpg?_LANG=enus)  and  ![parameters01853.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01853.jpg?_LANG=enus)  items to be ignored in the damping matrix, regardless of the presence of the PARAM, G or GFL or  ![parameters01855.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01855.jpg?_LANG=enus) .  ![parameters01857.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01857.jpg?_LANG=enus)  is the stiffness.

![parameters01859.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01859.jpg?_LANG=enus)  is the structural damping and is created when GE is specified on the MATi entries.

![parameters01861.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01861.jpg?_LANG=enus)  is the stiffness. The units of W3, W4, W3FL, and W4FL are radians per unit time.  (See  Real Eigenvalue Analysis in SubDMAPs SEMR3 and MODERS   in the MSC Nastran Reference Guide for further discussion.   )

In SOLs 129 and 159, W4 may vary between subcases.   However, the linear portion of the model uses only the W4 value from the first subcase and the values in the subsequent subcases are applied to the nonlinear portion of the model.

Parameters G, W3, W4 are case control selectable by either the PARAM entries in Case Control, or RSDAMP or SEDAMP appearing in Case Control pointing to a bulk data DAMPING entry. If both DAMPING type entries and PARAM entries occur in a subcase, the DAMPING entries take precedence.

When there is no Parameters G, W3, W4 or DMAPING reference in the first Case Control, the Bulk Data specification (if any) will be used. Subsequent Case Control specification will override the Bulk Data specification and Case Control rules apply to subsequent specifications.

The CBUSH, CELAS1, CELAS2, CELAS3, and CFAST elements when computing the element forces for data recovery take into account W3 and W4 in SOL109 and SOL112.

Linear CBUSH, CELAS1, CELAS2, CELAS3, and CFAST elements when computing the element forces for data recovery take into account W3 and W4 in SOL400 with ANALYSIS=NLTRAN. These elements behave in SOL400 with ANALYSIS=NLTRAN in a linear fashion when PARAM, LGDISP, -1 (Default) and there are no PBUSHT referring to the CBUSH or PELAST entries referring to the CELAS1, CELAS2, CELAS3.

For linear CBUSH, CELAS1, CELAS2, CELAS3, and CFAST elements in SOL400 with ANALYSIS=NLTRAN, SOL400 considers Case Control specification of G, W3, or W4 as a data recovery boundary condition change and each STEPi for the linear elements will pick up the appropriate G, W3, and W4 values.

Any of these elements in SOL400 with ANALYSIS=NLTRAN that are nonlinear only use the standard force output data recovery F=Ku(t) since nonlinear elements compute only the unbalanced stiffness force.

In SOL129 or SOL159 linear CBUSH, CELAS1, CELAS2, CELAS3, and CFAST elements (determined as in SOL400 above) should never have G, W3, or W4 selected in the Case Control as the linear force recovery will be incorrect as only the G, W3, and W4 of the first subcase is used.

In SOL129, the FUSE option of the CBUSH should never be used if GE or B is specified for the fusing CBUSH. This is because, unlike SOL400, SOL129 does not update the B or K4 matrix after the CBUSH fuses. Thus remnant CBUSH forces due to damping will be present.

