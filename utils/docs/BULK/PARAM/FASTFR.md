## [FASTFR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.FASTFR.xhtml)

Default = AUTO

In MSC Nastran 2004, the FASTFR method was introduced for modal frequency response analysis. It can be selected via the Bulk Data entry, PARAM,FASTFR,YES and shows significant performance improvement for certain models in the mid-frequency range. PARAM,FASTFR,NO deselects the FASTFR method causing the program to use the standard method for modal frequency analysis.

By default, the program will decide automatically which solution method will be most efficient for the frequency response part in a SOL 111 analysis. Based on the size of the modal space and some other heuristic criteria, either the FASTFR solution method will be run, or the FRRD1 module with or without the iterative solver will be used.

Limitations for the FASTFR method

1. The FASTFR method works only for SOL 111 and for SOL 200 with ANALYSIS=MFREQ.

2. SESDAMP and FASTFR are not allowed in the same run.

3. To force the iterative solver in FRRD1, FASTFR=yes is required.

