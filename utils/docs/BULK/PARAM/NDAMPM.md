## [NDAMP, NDAMPM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NDAMP.NDAMPM.xhtml)

NDAMP:

Default    = 0.01 for SOLs 129 and 159, -0.05 for SOL 400 heat transfer and mechanical non-contact analysis, 0.0 for SOL 400 contact.

NDAMPM:

Default    = 0.0 for SOL 400 non-contact, 1.0 for SOL 400 contact. Not used for SOL 400 heat transfer.

NDAMP/NDAMPM:

In SOLs 129 and 159, numerical damping may be specified for the METHODS =“ADAPT” on the  entry through the NDAMP entry in order to achieve numerical stability. A value of zero for NDAMP requests no numerical damping. The recommended range of NDAMP values is from 0.0 to 0.1.

SOL 400 Mechanical: In SOL 400, numerical damping may be specified for all METHODS (ADAPT, FNT, etc. on the  entry. NDAMP and NDAMPM are two parameters that control the damping scheme and thee associated dynamic operator. The equilibrium equation for the most general operator (the Generalized- ![parameters01745.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01745.jpg?_LANG=enus)  operator) is given by

![parameters01747.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01747.jpg?_LANG=enus)  

where  ![parameters01749.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01749.jpg?_LANG=enus)  is NDAMPM and  ![parameters01751.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01751.jpg?_LANG=enus)  is NDAMP. In the previous equation, a typical quantity  ![parameters01753.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01753.jpg?_LANG=enus)  is given by the expanded form

![parameters01755.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01755.jpg?_LANG=enus)  

Depending on the values of NDAMP and NDAMPM, the equilibrium equations can reduce to the HHT- ![parameters01757.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01757.jpg?_LANG=enus)  scheme (NDAMPM = 0) or the WBZ- ![parameters01759.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01759.jpg?_LANG=enus)  scheme (NDAMP = 0) or the Generalized- ![parameters01761.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01761.jpg?_LANG=enus)  scheme ( ![parameters01763.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01763.jpg?_LANG=enus) ,  ![parameters01765.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01765.jpg?_LANG=enus) ). For the HHT- ![parameters01767.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01767.jpg?_LANG=enus)  scheme, NDAMP can vary in the range of  ![parameters01769.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01769.jpg?_LANG=enus) . For the WBZ- ![parameters01771.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01771.jpg?_LANG=enus)  scheme, NDAMPM can vary in the range of  ![parameters01773.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01773.jpg?_LANG=enus) . For the Generalized- ![parameters01775.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01775.jpg?_LANG=enus)  scheme, NDAMP can vary in the range of  ![parameters01777.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01777.jpg?_LANG=enus)  and NDAMPM in the range of  ![parameters01779.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01779.jpg?_LANG=enus) .

For problems involving no contact, the HHT- ![parameters01781.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01781.jpg?_LANG=enus)  is used in SOL 400 with default NDAMP = -0.05 and NDAMPM = 0.0 except that the model is linear, or no mass and no damping matrix. In this case, the defaults are NDAMP = 0.0 and NDAMPM = 0.0. For problems involving contact, the WBZ- ![parameters01783.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/../../../assets/parameters01783.jpg?_LANG=enus)  scheme is used in SOL 400 with default NDAMPM = 1.0 and NDAMP = 0.0

SOL 400 Heat Transfer: Numerical damping may be specified through the value of NDAMP only. NDAMPM is not used. NDAMP can be varied in the range of (-2.414,0.414). At these outer limits, the transient scheme reduces to the Backward-Euler method. Any value that is outside this range is automatically reset to the closest outer limit. For NDAMP = 0.0, the transient scheme reduces to the Crank-Nicholson scheme. The default value of NDAMP is -0.05.

SOL 400 Thermo-Mechanical Coupled Analysis: If NDAMP and NDAMPM are unspecified, then the default that is appropriate for the particular sub-step is used. For e.g., for a coupled transient contact problem, NDMAP = -0.05 during the heat transfer sub-step and NDAMP = 0.0, NDAMPM = 1.0 during the mechanical sub-step. If the values of NDAMP and NDAMPM are specified by the user in the Bulk Data Section, then these values would be applicable for both the thermal and mechanical sub-steps. To make the values of the NDAMP/NDAMPM physics-dependent, the user can define the values under each sub-step of the Case Control Section. E.g.,

```nastran
SUBSTEP 1 
     ANALYSIS=HTRAN 
     PARAM,NDAMP,-2.414
SUBSTEP 2
     ANALYSIS=NLTRAN 
     PARAM,NDAMP,-0.05 
     PARAM,NDAMPM,0.0
```