## [ESLMOVE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ESLMOVE.xhtml)

Integer, Default = 0

ESLMOVE = 0 selects a move limit scheme that poses restrict lower and upper bounds on design variables during the linear response optimization. The range of the bounds is determined by

![parameters01671.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01671.jpg?_LANG=enus)  

![parameters01673.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01673.jpg?_LANG=enus)  

![parameters01675.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01675.jpg?_LANG=enus)  

ESLMOVE = 1 selects a move limit scheme that scales back the design move proposed from a linear response optimization. The amount of scaling back is determined by

![parameters01677.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01677.jpg?_LANG=enus)  

where  ![parameters01679.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01679.jpg?_LANG=enus)  is the scaled design variable for the k-th design cycle,  ![parameters01681.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01681.jpg?_LANG=enus)  is the design variable at (k-1)th design cycle,  ![parameters01683.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01683.jpg?_LANG=enus)  is the proposed design from the linear optimization solution at (k-1)th design cycle.

Parameters DXMIN and DELXESL can be specified on the DOPTPRM entry.

