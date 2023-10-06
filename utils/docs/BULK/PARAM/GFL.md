## [G, GFL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.G.GFL.xhtml)

Default =    0.0

G and GFL specify the uniform structural and fluid-damping coefficient in the formulation of dynamics problems.  In coupled fluid-structure analysis, G is applied to the structural portion of the model and GFL to the fluid portion of the model.  To obtain the value for the parameter G or GFL, multiply the critical damping ratio, C/C o , by 2.0.  PARAM,G and GFL are not recommended for use in hydroelastic or heat-transfer problems.  If PARAM,G (or GFL) is used in transient analysis, PARAM,W3 (or W3FL) must be greater than zero or PARAM,G (or GFL) will be ignored.  See   Formulation of Dynamic Equations in SubDMAP GMA   in  the MSC Nastran Reference Guide .

In frequency response and complex eigenvalue analyses, the use of G or GFL will cause the stiffness matrix corresponding to the structural or fluid portion of the model to become complex.  The user should be aware that this will, in general, require more memory and resources for the calculations.

