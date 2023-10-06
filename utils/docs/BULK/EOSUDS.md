## [EOSUDS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EOSUDS.xhtml) - User-defined Equation of State - SOL 700 only

Defines the frequency dependent properties for an isotropic poroelastic material. Use in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSUDS  EID     GROUP   UNAME   VISC                                            
```

#### Example:

In FMS Section of the MSC Nastran input stream:

CONNECT SERVICE water  ![bulkde03602.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03602.jpg?_LANG=enus) SCA.MDSolver.Obj.Uds.Dytran.Materials ![bulkde03604.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03604.jpg?_LANG=enus)

In Bulk Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EOSUDS  12      WATER   EXEOS   .01                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique equation of state number. (Integer > 0; Required)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ The group name used for the FMS section CONNECT SERVICE statement. (Character; no Default) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNAME     │ User subroutine name associated with the entry. (Character; default=EXEOS)                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ VISC      │ Viscosity coefficient R > 0 No viscosity. See Remarks 4.and 5.                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The EID must be referenced by a MATDEUL or MAT1 entry.
2. The equation of state name is passed to method usrEOS of the SCAIMDSolver700 interface and can be used to identify the equation of state.
3. The viscosity coefficient is the dynamic viscosity. It is the ratio between shear stress and velocity gradient.
4. For the single mat solver viscous stresses will be stored in the output files by the use of TXX through TZX. Also, EFFSTS is available. For the multi-material solver viscous stresses are stored in TXX-VIS, TYY-VIS, TZZ-VIS, TXY-VIS, TYZ-VIS, TZX-VIS. These viscous stresses only depend on the current velocity gradients. The stresses like TXX are elastic-plastic stresses and depend on past stresses. The total stress tensor in the element is given by the average of the viscous stress and elastic-plastic stress. The weight factors are the material fraction of viscous fluid and the remaining materials.
5. UNAME can be:
