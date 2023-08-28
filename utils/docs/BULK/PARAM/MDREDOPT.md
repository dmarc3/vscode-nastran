## [MDREDOPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MDREDOPT.xhtml)

Default = -1

This parameter is used in ACMS for matrix reduction operations. It affects the way in which matrices are reduced to modal coordinates. Quantities affected are damping, loads, and acoustic coupling. By default, the ACMS-generated Q-size matrices are reduced to H-size (modal coordinates). This is the most efficient method. If MDREDOPT=1, a triple matrix multiplication is used.

