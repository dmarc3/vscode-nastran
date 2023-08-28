## [SDAMPING (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SDAMPING.Case.xhtml) - Structural Damping Selection

Requests modal damping as a function of natural frequency in modal solutions or viscoelastic materials as a function of frequency in direct frequency response analysis.

#### Format:

![casecontrol4a01294.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01294.jpg?_LANG=enus)  

#### Example:

```nastran
SDAMPING=77
SDAMPING(COUPLED)=100
```

```text
┌──────────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                              │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTURE or │ Modal damping is requested for the structural or fluid portion of the model.         │
│ FLUID        │                                                                                      │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ COUPLED      │ Modal damping is requested for the structure and fluid coupled portion of the model. │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of a TABDMP1 or TABLEDi Bulk Data entry (Integer > 0).     │
└──────────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In the modal solutions (e.g., SOLs 110, 111, 112, 145, 146, and 200), SDAMPING must reference a TABDMP1 entry.
2. In direct frequency response analysis (e.g., SOL 108) or nonlinear harmonic analysis (e.g., SOL 128), SDAMPING must reference a TABLEDi entry which defines viscoelastic (frequency-dependent) material properties. See   in the  MSC Nastran Dynamic Analysis User’s Guide . TABLEDi,n and TABLEDi,n+1 must be specified in the Bulk Data to define the complex moduli of the viscoelastic materials.
3. When SDAMPING is defined for a superelement, PARAM,SESDAMP must be placed either in the SUBCASE for the superelement or in the superelement’s BEGIN SUPER section in order to activate the modal damping for the superelement. The default for superelements is to place all boundary points in the B set; in this case, PARAM,SESDAMP,AUG is recommended. Alternatively, place all boundary points in the C set and set PARAM,SESDAMP,YES.
4. When SDAMPING is used during FRF component generation, PARAM,KDAMP,-1 is recommended in order to place the modal damping terms in the imaginary part of the stiffness matrix. The default for KDAMP is 0, which places the modal damping terms in the damping matrix, leading to a marginally under or over damped response. When hybrid damping is used during FRF component generation, it is recommended to set the KDAMP field to YES on the HYBDAMP entry.
5. When SDAMPING is used with METHOD(COUPLED), SDAMPING(COUPLED) should be used. For the real coupled mode computation, structural modes and fluid modes are not separated. So SDAMPING(STRUCTURE) or SDAMPING(FLUID) cannot be used properly. When SDAMPING(STRUCTURE/FLUID) is used with METHOD(COUPLED), it returns fatal out.
