## [VARPHI](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.VARPHI.xhtml)

Default =  ![parameters01829.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01829.jpg?_LANG=enus) /4 (0.78539816)

Feature angle for detection of singular geometric features (sharp edges or corners) in the mesh during adaptive mesh refinement.

When adaptive meshing is requested (see Case Control command,  HADAPT   (Case)  and Bulk Data entry,  HADAPTL ), singular geometric features such as sharp edges or sharp corners must be detected. To this end the face outward normals  ![parameters01831.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01831.jpg?_LANG=enus)   of each pair of adjacent mesh faces and the edge oriented tangents  ![parameters01833.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01833.jpg?_LANG=enus)  of each pair of adjacent mesh edges are computed (see  Figure 6-3 ). If the angle between  ![parameters01835.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01835.jpg?_LANG=enus)  and  ![parameters01837.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01837.jpg?_LANG=enus)  for mesh faces, or between  ![parameters01839.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01839.jpg?_LANG=enus)  and  ![parameters01841.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01841.jpg?_LANG=enus)  for mesh edges is bigger than the feature angle  ![parameters01843.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01843.jpg?_LANG=enus) , then the common edge or vertex will be considered a splitting edge or vertex where surfaces or lines are broken and a singular geometric feature is defined.

![parameters01845.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01845.jpg?_LANG=enus)

Figure 6-3  

Mesh faces and elements are preprocessed to ensure consistent orientation and that the appropriate sign of face normals and edge tangents will be accounted for during the computation of their mutual angle.

