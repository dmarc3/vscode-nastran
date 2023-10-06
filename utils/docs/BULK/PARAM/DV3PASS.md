## [DV3PASS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DV3PASS.xhtml)

Integer, Default = 1 for SOL 200 with nonlinear property sensitivity evaluation.

DV3PASS controls the number of optimizer internal cycles must pass before the re-evaluation of sensitivity of nonlinear properties, such as I1/I2/J of PBARL/PBEAML/PBRSECT/PBMSECT. With default value of 1, the sensitivity of nonlinear properties is computed for every internal cycle of optimizer. Setting DV3PASS to 10 causes the sensitivity to be evaluated at optimizer internal cycles of 1, 11, 21 and etc.  The sensitivity of nonlinear properties is considered as invariants if a sufficiently large number, such as 100, is assigned to DV3PASS.

