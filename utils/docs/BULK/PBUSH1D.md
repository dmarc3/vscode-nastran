## [PBUSH1D](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBUSH1D.xhtml) - Rod Type Spring-and-Damper Property

Defines linear and nonlinear properties of a one-dimensional spring and damper element (CBUSH1D entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSH1D PID     K       C       M               SA      SE                      
        “SHOCKA”TYPE    CVT     CVC     EXPVT   EXPVC   IDTS                    
                        IDETS   IDECS   IDETSD  IDECSD                          
        “SPRING”TYPE    IDT     IDC     IDTDU   IDCDU                           
        “DAMPER"TYPE    IDT     IDC     IDTDV   IDCDV                           
        “GENER” TYPE    IDT     IDC     IDTDU   IDCDU   IDTDV   IDCDV           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSH1D 35      3000.   200.    300.                                            
        SHOCKA  TABLE   2.2     1.2     1.              200                     
```
The continuation entries are optional. The four options, SHOCKA, SPRING, DAMPER, and GENER can appear in any order.

```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────────────────────┐
│ Describer │ Meaning                                           │ Default                                │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0).    │ Required                               │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ K         │ Stiffness. (Real > 0).                            │ See Remark 1.                          │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ C         │ Viscous damping. (Real > 0).                      │ See Remarks 1. and 2.                  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ M         │ Total mass of the element. (Real > 0).            │ Blank                                  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ SA        │ Stress recovery coefficient [1/area]. (Real > 0). │ Blank                                  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ SE        │ Strain recovery coefficient [1/length]. (Real >   │ Blank                                  │
│           │ 0).                                               │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ SHOCKA    │ Character string specifying that the next 10      │                                        │
│           │ fields are coefficients of the following force    │                                        │
│           │ versus velocity/displacement relationship.        │                                        │
│           │ (Character).   The force F, the displacement u,   │                                        │
│           │ and the velocity v, are in the axial direction of │                                        │
│           │ the damper. The axis of the damper is defined by  │                                        │
│           │ the two connecting grid points GA and GB on the   │                                        │
│           │ CBUSH1D Bulk Data entry. The displacement u and   │                                        │
│           │ the velocity v, are the relative displacement and │                                        │
│           │ the relative velocity with respect to the grid    │                                        │
│           │ point GA. The scale factor S(u) must be defined   │                                        │
│           │ with a table or with an equation.                 │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ TYPE      │ Character string indicating the type of           │ TABLE                                  │
│           │ definition. (Character). For TYPE = EQUAT, the    │                                        │
│           │ fields IDETS, IDECS, IDETSD, and IDECSD are       │                                        │
│           │ identification numbers of DEQATN entries. For     │                                        │
│           │ TYPE = TABLE the field IDTS is an identification  │                                        │
│           │ number of a TABLEDi entry. If no character string │                                        │
│           │ is provided (blanks), TYPE = TABLE is set.        │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ CVT       │ Viscous damping coefficient CV for tension v > 0, │ Required for SHOCKA                    │
│           │ force per unit velocity. (Real).                  │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ CVC       │ Viscous damping coefficient CV for compression    │ CVT                                    │
│           │ v > 0, force per unit velocity. (Real).           │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ EXPVT     │ Exponent of velocity EXPV for tension v > 0.      │ 1.                                     │
│           │ (Real).                                           │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ EXPVC     │ Exponent of velocity EXPV for compression v < 0.  │ EXPVT                                  │
│           │ (Real).                                           │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDTS      │ Identification number of a TABLEDi entry for      │ Required for SHOCKA and TYPE=TABLE     │
│           │ tension and compression if TYPE = TABLE. The      │                                        │
│           │ TABLEDi entry defines the scale factor S, versus  │                                        │
│           │ displacement u.                                   │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDETS     │ Identification number of a DEQATN entry for       │ Required for SHOCKA and TYPE=EQUAT     │
│           │ tension if TYPE = EQUAT. The DEQATN entry defines │                                        │
│           │ the scale factor S, versus displacement u, for    │                                        │
│           │ tension u > 0.                                    │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDECS     │ Identification number of a DEQATN entry for       │ IDETS                                  │
│           │ compression if TYPE = EQUAT. The DEQATN entry     │                                        │
│           │ defines the scale factor S, versus displacement   │                                        │
│           │ u, for compression u < 0.                         │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDETSD    │ Identification number of a DEQATN entry for       │ Required for SHOCKA and TYPE=EQUAT     │
│           │ tension if TYPE = EQUAT. The DEQATN entry defines │                                        │
│           │ the derivative of the scale factor S, with        │                                        │
│           │ respect to the displacement u, for tension u >0.  │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDECSD    │ Identification number of a DEQATN entry for       │ IDETSD                                 │
│           │ compression if TYPE = EQUAT. The DEQATN entry     │                                        │
│           │ defines the derivative of the scale factor S,     │                                        │
│           │ with respect to the displacement u, for           │                                        │
│           │ compression u < 0.                                │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ SPRING    │ Character string specifying that the next 5       │                                        │
│           │ fields define a nonlinear elastic spring element  │                                        │
│           │ in terms of a force versus displacement           │                                        │
│           │ relationship. (Character).   Tension is u > 0 and │                                        │
│           │ compression is u < 0.                             │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ DAMPER    │ Character string specifying that the next 5       │                                        │
│           │ fields define a nonlinear viscous element in      │                                        │
│           │ terms of a force versus velocity relationship.    │                                        │
│           │ (Character).   Tension is v > 0 and compression   │                                        │
│           │ is v < 0.                                         │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ GENER     │ Character string specifying that the next 7       │                                        │
│           │ fields define a general nonlinear elastic spring  │                                        │
│           │ and viscous damper element in terms of a force    │                                        │
│           │ versus displacement and velocity relationship.    │                                        │
│           │ (Character). For this element, the relationship   │                                        │
│           │ can only be defined with TYPE = EQUAT.   Tension  │                                        │
│           │ is u > 0 and compression is u < 0. For SPRING,    │                                        │
│           │ DAMPER, and GENER, the remaining fields are       │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ TYPE      │ Character string indicating the type of           │ Required for SPRING or DAMPER          │
│           │ definition. (Character). For TYPE = EQUAT the     │                                        │
│           │ following fields are identification numbers of    │                                        │
│           │ DEQATN entries. For TYPE = TABLE the following    │                                        │
│           │ field is an identification number of a TABLEDi    │                                        │
│           │ entry. For “GENER”, TYPE = blank or “EQUAT” is    │                                        │
│           │ allowed..                                         │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDT       │ Identification number of a DEQATN entry for       │ Required for SPRING, DAMPER, and GENER │
│           │ tension if TYPE = EQUAT. Identification number of │                                        │
│           │ a TABLEDi entry for tension and compression if    │                                        │
│           │ TYPE = TABLE.                                     │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDC       │ Identification number of a DEQATN entry for       │ IDT                                    │
│           │ compression if TYPE = EQUAT. Is ignored for       │                                        │
│           │ TYPE = TABLE.                                     │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDTDU     │ Identification number of a DEQATN entry for       │ Required if TYPE=EQUAT                 │
│           │ tension if TYPE = EQUAT. The DEQATN entry defines │                                        │
│           │ the derivative of the force F with respect to the │                                        │
│           │ displacement u, for tension u > 0. For SPRING and │                                        │
│           │ GENER only.                                       │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDCDU     │ Identification number of a DEQATN entry for       │ IDTDU                                  │
│           │ compression if TYPE = EQUAT. The DEQATN entry     │                                        │
│           │ defines the derivative of the force F with        │                                        │
│           │ respect to the displacement u, for compression    │                                        │
│           │ u < 0. For SPRING and GENER only.                 │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDTDV     │ Identification number of a DEQATN entry for       │ Required if TYPE=EQUAT                 │
│           │ tension if TYPE = EQUAT. The DEQATN entry defines │                                        │
│           │ the derivative of the force F with respect to the │                                        │
│           │ velocity v, for tension v > 0. For DAMPER and     │                                        │
│           │ GENER only.                                       │                                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────┤
│ IDCDV     │ Identification number of a DEQATN entry for       │ IDCDT                                  │
│           │ compression if TYPE = EQUAT. The DEQATN entry     │                                        │
│           │ defines the derivative of the force F with        │                                        │
│           │ respect to the velocity v, for compression v < 0. │                                        │
│           │ For DAMPER and GENER only.                        │                                        │
└───────────┴───────────────────────────────────────────────────┴────────────────────────────────────────┘
```
#### Remarks:

1. For a linear spring K a default value of 0.0 is allowed by not specifying the K entry. For a linear damper C a default value of 0.0 is allowed by not specifying the C entry. If any nonlinearity is specified (SHOCKA, SPRING, DAMPER, GENER) K > 0 is required. If K is not provided in the presence of any nonlinearity, the element will behave as a linear element.

2. The damping C and mass M are ignored in static solution sequences.

3. The parameters defined on the continuation entries are used in nonlinear solution sequences only.

4. The linear parameters K and C are used in all solution sequences unless parameters on continuation entries are defined and a nonlinear solution sequence is used. Then, the parameters K and C are used for initial values in the first iteration of the first load step and the parameters from continuation entries overwrite the linear parameters thereafter. When SHOCKA, SPRING or GENER are specified, K is overwritten. When SHOCKA, DAMPER or GENER is specified, C is overwritten.

5. PBUSH1D may only be referenced by CBUSH1D elements in the residual structure which do not attach to omitted degrees-of-freedom.

6. The continuation entries SHOCKA, SPRING, DAMPER and GENER may be specified in any order. If more than one continuation entry is defined, then the forces of SHOCKA, SPRING, etc. are added. Multiple continuation entries of the same kind are not allowed, for example, multiple SPRING continuation entries.

7. For TYPE = TABLE, values on the TABLEDi entry are for tension and compression. If table values  ![bulkp06804.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06804.jpg?_LANG=enus)  are provided only for positive values u > 0, then it is assumed that  ![bulkp06806.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06806.jpg?_LANG=enus) .

8. For TYPE = EQUAT, the equations for tension and compression can be different. If the identification numbers for compression are left blank, it is assumed that the equation for tension is also valid for compression.

9. PBUSH1D is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBUSH1D property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBUSH1D entries.

10. The force output is:

```text
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ F O R C E S   I N   B U S H 1 D   E L E M E N T S   (C B U S H 1 D) AXIAL      AXIAL           AXIAL        AXIAL        AXIAL      PLASTIC FORCE      DISPLACEMENT   VELOCITY     STRESS       STRAIN      STRAIN         STATUS │
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```


```text
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ S T R E S S E S   (F O R C E S)   I N   B U S H 1 D   E L E M E N T S   (C B U S H 1 D) AXIAL    AXIAL          AXIAL       AXIAL       AXIAL       PLASTIC FORCE    DISPLACEMENT   VELOCITY    STRESS      STRAIN      STRAIN      STATUS │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
     Where items in red are always output for linear analysis. The Stress output is:

     Where items in red are always output for linear analysis.

     (Axial stress) =  ![bulkp06808.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06808.jpg?_LANG=enus) , (Axial strain) =  ![bulkp06810.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06810.jpg?_LANG=enus) .

     In nonlinear dynamics, the element force is the sum of all springs and dampers.

     In linear dynamic solution sequences, the damping forces are not included in the element force output.

     Failed status is not currently used.

11. While computing Single Point Forces of Constraint (SPCFORCES), the constraint relationships exist in stiffness for linear spring. However, the nonlinear elements treat the constraints as loads on s-set. As a result, the SPCFORCES results are different between linear and nonlinear elements.

