## [AUTOADJ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AUTOADJ.xhtml)

Default = YES

In SOL 200, a value of yes will automatically choose the direct or adjoint sensitivity analysis based on the performance criteria.  Other options for this parameter are:

     NO - the adjoint method will not be selected.

     NOSTAT - the adjoint method will not be selected for static analysis subcases, but may be selected for frequency response subcases based on the performance criteria.  

     NOFREQ - the adjoint method will not be selected for frequency responses subcases, but may be selected for static analysis subcases based on the performance criteria.  

The default should be preferred in all cases.  However, the other options allow investigation of the alternative of using direct sensitivity methods.

