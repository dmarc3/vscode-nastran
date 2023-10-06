## [BCONPRP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCONPRP.xhtml) - Physical Contact Parameters of Touching Bodies in SOLs 101 and 400

Defines physical contact parameters of touching bodies used in SOLs 101 and 400 only. The parameters defined here are referenced by the BCONECT entry. This entry is used in conjunction with the BCONPRG entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONPRP PID             PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    +       
+       PARAM4  VAL4    PARAM5  VAL5    -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONPRP 90              FRIC    0.3                                             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ PID       │ Parameter identification number (Integer > 0).                           │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ PARAMi    │ Name of a parameter. Allowabe names are given in Table 9-6  (Character). │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ VALi      │ Value of a parameter. See Table 9-6  (Real or Integer).                  │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```

Table 9-6    Physical Contact Parameters of Touching Bodies in SOLs 101 and 400

```text
┌────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Name   │ Description, Type and Value (Default is 0 for integer, 0.0 for Real Unless Otherwise Indicated)    │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BGM    │ Exponent for the tangential stress term in deciding if a glue-contact will break. See Remark 1.    │
│        │ (Real; Default = 2.0)                                                                              │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BGN    │ Exponent for the normal stress term in deciding if a glue-contact will break. See Remark 1. (Real; │
│        │ Default = 2.0)                                                                                     │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BGSN   │ Maximum normal stress for breaking glue. See Remark 1. (Real; Default = 0.0)                       │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BGST   │ Maximum tangential stress for breaking glue. See Remark 1. (Real; Default = 0.0)                   │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNC    │ Exponent associated with the natural convection coefficient for near field behavior. If Real, the  │
│        │ value entered is the exponent associated with near field natural convection coefficient. If        │
│        │ Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry specifying the exponent         │
│        │ associated with the near field natural convection coefficient vs. temperature or a TABL3D entry    │
│        │ specifying the exponent associated with the near field natural convection coefficient vs.          │
│        │ temperature and possibly other variables. Ignored in a pure structural analysis. See Remark 5.     │
│        │ (Real or Integer; Default = 1.0.)                                                                  │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BNL    │ Exponent associated with the nonlinear convective heat flow for near field behavior. If Real, the  │
│        │ value entered is the exponent associated with the near field nonlinear convection coefficient. If  │
│        │ Integer, the value entered is the ID of a TABLEM1 OR TABLEM2 entry specifying the exponent         │
│        │ associated with the near field nonlinear convection coefficient vs temperature or a TABL3D entry   │
│        │ specifying the exponent associated with the near field nonlinear convection coefficient vs         │
│        │ temperature and possibly other variables. Ignored in a pure structural analysis. See Remark 5.     │
│        │  (Real or Integer; Default = 1.0)                                                                  │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DQNEAR │ Distance below which near thermal contact behavior occurs. Used in heat transfer analysis only.    │
│        │ See Remark 2. (Real; Default = 0.0; which means near contact does not occur)                       │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EMISS  │ Emissivity for radiation to the environment or near thermal radiation. If Real, the value entered  │
│        │ is the emissivity. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry           │
│        │ specifying the emissivity vs. temperature or a TABL3D entry specifying the emissivity vs.          │
│        │ temperature and possibly other variables. Ignored in a pure structural analysis. See Remark 5.     │
│        │ (Real or Integer; Default = 0.0)                                                                   │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FNTOL  │ Separation force, stress, or fraction above which a node separates from a body. FNTOL is closely   │
│        │ related to IBSEP. Its default value is dependent on the IBSEP value. (Real)                        │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRIC   │ Friction coefficient. If the value is an integer, it represents the ID of a TABLEM1, TABLEM2 or    │
│        │ TABL3D, i.e., a temperature-dependent or multi-dimensional table. (Real ≥ 0.0 or Integer > 0;      │
│        │ Default = 0.0)                                                                                     │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRLIM  │ Friction stress limit. This entry is only used for friction type 6 (Coulomb friction using the     │
│        │ bilinear model). If the shear stress due to friction reaches this limit value, then the applied    │
│        │ friction stress will be reduced so that the maximum friction stress is given by min(µσn, σlimit),  │
│        │ with µ the friction coefficient and σn the contact normal stress. (Real; Default = 1.0E20)         │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HBL    │ Separation distance dependent thermal convection coefficient. If Real, the value entered is the    │
│        │ convection coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry      │
│        │ specifying the convection coefficient vs. temperature or a TABL3D entry specifying the convection  │
│        │ coefficient vs. temperature and possibly other variables. Ignored in a pure structural analysis.   │
│        │ See Remark 5. (Real or Integer; Default = 0.0)                                                     │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HCT    │ Contact heat transfer coefficient. If Real, the value entered is the contact heat transfer         │
│        │ coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry specifying the  │
│        │ contact heat transfer coefficient vs. temperature or a TABL3D entry specifying the contact heat    │
│        │ transfer coefficient vs. temperature and possibly other variables. Ignored in a pure structural    │
│        │ analysis. See Remark 5. (Real or Integer; Default = 0.0; In a thermal/mechanical coupled analysis  │
│        │ a default value of 1.0E6 is used when the mechanical glue option is activated, i.e., when IGLUE >  │
│        │ 0.)                                                                                                │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HCV    │ Convection coefficient for near field behavior. If Real, the value entered is the near field       │
│        │ convection coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2 entry      │
│        │ specifying the near field convection coefficient vs. temperature or a TABL3D entry specifying the  │
│        │ near field convection coefficient vs. temperature and possibly other variables. Ignored in a pure  │
│        │ structural analysis. See Remark 5.  (Real or Integer; Default = 0.0)                               │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HGLUE  │ Flag to activate the thermal glue option. When left blank or set to zero, thermal contact          │
│        │ conditions will be treated by convective heat transfer between the bodies. When set to 1, the      │
│        │ temperature fields of the bodies are tied as soon as they come in contact and there will be no     │
│        │ convective heat transfer over the body interfaces. Ignored in a pure structural analysis. See      │
│        │ Remarks 3. , 4.  and 5. (0 < Integer < 1; Default = 0)                                             │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNC    │ Natural convection coefficient for near field behavior. If Real, the value entered is the near     │
│        │ field natural convection coefficient.  If Integer, the value entered is the ID of a TABLEM1 or     │
│        │ TABLEM2 entry specifying the near field natural convection coefficient vs. temperature or a TABL3D │
│        │ entry specifying the near field natural convection coefficient vs. temperature and possibly other  │
│        │ variables. Ignored in a pure structural analysis. See Remark 5.  (Real or Integer; Default = 0.0). │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HNL    │ Heat transfer coefficient for nonlinear convective heat flow for near field behavior. If Real, the │
│        │ value entered is the near field nonlinear convection coefficient. If Integer, the value entered is │
│        │ the ID of a TABLEM1 or TABLEM2 entry specifying the near field nonlinear convection coefficient    │
│        │ vs. temperature or a TABL3D entry specifying the near field nonlinear convection coefficient vs.   │
│        │ temperature and possibly other variables. Ignored in a pure structural analysis. See Remark 5.     │
│        │  (Real or Integer; Default = 0.0)                                                                  │
└────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Breaking Glue provides glued contact to all GRID's at their very 1st contact. This kind of glued-contact will break if

     (sigma_n/BGSN)**bgn + (sigma_t/BGST)**bgm > 1.0

When a contact node breaks due to the above criterion,  standard contact is activated if it comes into contact again . If BGSN = 0.0 the first term is ignored. Similarly, the second term is ignored if BGST = 0.0. For SOL 400, parameters BGSN, BGST, BGM and BGN are only required if JGLUE = 2. If both BGSN and BGST are equal to 0.0, JGLUE will be set to 0 internally. If Step Glue is used, then Breaking Glue is inactive in this step. If Permanent Glue is active, then Breaking Glue is inactive.

2. For near contact the following convective heat flow law describes the heat exchange per unit area between the body areas (“near” contact is when bodies are not touching each other – but are close enough for convection and radiation.):

![bulkab02166.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02166.jpg?_LANG=enus)  

![bulkab02168.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02168.jpg?_LANG=enus)  

![bulkab02170.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02170.jpg?_LANG=enus)  

![bulkab02172.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02172.jpg?_LANG=enus)  

![bulkab02174.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02174.jpg?_LANG=enus)  

where the last term is only activated when HBL ≠ 0, T A  is the contacting grid temperature and T B   is the face temperature in the contact point in case of a meshed body or the T BODY temperature in case of a rigid geometry.

3. For hard contact (i.e., two bodies are actually touching each other – heat transfer mode between the bodies is conduction), with HGLUE=1:

- The temperature of the contacting grid is tied to the temperatures of the contacted element face or the temperature of the rigid geometry when it has a scalar point associated with it.

- The temperature of the contacting grid is set to the rigid geometry temperature when it has no scalar point associated with it.

```text
┌───────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ “Glued” thermal contact can result in overshoot of the temperatures i.e. Gibbs Phenomenon or the │
│       │ temperature oscillations at the interface, in particular, if two bodies that have non-uniform    │
│       │ initial temperatures are placed in contact. The overshoot effect may be damped somewhat if one   │
│       │ uses a near contact distance with some convective heat transfer.                                 │
└───────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

4. For hard contact, with HGLUE=0:

The convective heat flow per unit area over the two interfaces is given by:

![bulkab02176.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02176.jpg?_LANG=enus)  

where T A  is the contacting grid temperature and T B   is the face temperature in the contact point in case of a meshed body or the T BODY   temperature in case of a rigid geometry.

5. The heat transfer coefficients and associated exponents can all be temperature dependent, when they are entered as an integer value. This integer value is the table ID of a TABLEM1, TABLEM2 or TABL3D entry (formulas are not supported on TABL3D). Table IDs of tables used on the BCBDPRP entry and the BCONPRP entry must be unique.

6. Parameters BGM, BGN, BGSN, BGST and DQNEAR are not supported in segment to segment contact analysis.


## [BCONPRP-700](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCONPRP.700.xhtml) - Physical Contact Parameters of Touching Bodies in SOL 700

Defines physical contact parameters of touching bodies used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONPRP PID             PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    +
+       PARAM4  VAL4    PARAM5  VAL5    -etc.-
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONPRP 90      FRIC    0.3
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ PID       │ Parameter identification number (Integer > 0).                            │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ PARAMi    │ Name of a parameter. Allowable names are given in Table 9-7  (Character). │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ VALi      │ Value of a parameter. See Table 9-7 (Real or Integer).                    │
└───────────┴───────────────────────────────────────────────────────────────────────────┘
```

Table 9-7    Physical Contact Parameters of Touching Bodies in SOL 700

```text
┌─────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Name    │ Description, Type and Value (Default is 0 for integer, 0.0 for Real Unless Otherwise Indicated)    │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRIC    │ Static friction coefficient. When it is set to -1.0, different static friction coefficients on     │
│         │ properties can be assigned using BCPROP1. (Real ≥ -1.0; Default=0.0 for SOL700)                    │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FK      │ Kinetic coefficient of friction. (Real > 0.0; Default = 0.0)                                       │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXP     │ Exponential decay coefficient. (Real > 0.0; Default = 0.0)                                         │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FACT    │ Scale factor for the contact forces. (Real > 0.0; Default = 0.1)                                   │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TSTART  │ Time at which the contact is activated. (Real > 0.0; Default = 0.0)                                │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEND    │ Time at which the contact is deactivated. (Real > 0.0; Default = 1.e20)                            │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IADJ    │ Adjacent material treatment option for solid elements. (Integer ≥ 0; Default =1) 0     Solid       │
│         │ element faces are included only for free boundaries. 1     Solid element faces are included if     │
│         │ they are on the boundary of the material subset. This option also  allows the erosion within a     │
│         │ body and the subsequent treatment of contact.                                                      │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMPING │ Specifies if a high frequency damping is active or not. The damping force is based on the relative │
│         │ velocity of a secondary node with respect to a primary face. The damping is preferably turned on   │
│         │ in all cases, except for RIGID-RIGID contact. In RIGID-RIGID contact it can result in a            │
│         │ substantial loss of energy. VERSION V4 only. (Character; Default=YES). YES     damping is          │
│         │ activated NO     damping is not activated.                                                         │
└─────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
