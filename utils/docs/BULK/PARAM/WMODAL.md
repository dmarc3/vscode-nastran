## [WMODAL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.WMODAL.xhtml)

Default = NO

In Modal Transient analysis (SOL 112), PARAM, WMODAL, YES will automatically produce accurate conversion at all frequencies using the modal frequencies based on the eigenvalues as shown below. This relieves the user of trying to determine the “best” value for (PARAM, W3 and W4). Note, use of WMODAL does not suppress user specified values of W3 and W4.

![parameters01847.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01847.jpg?_LANG=enus)  

Note the CBUSH, CELAS1, CELAS2, CELAS3, and CFAST elements when computing the element forces for data recovery do not currently take into account the WMODAL conversion in SOL112.

