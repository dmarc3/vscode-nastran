## [NLPCI](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLPCI.xhtml) - Parameters for Arc-Length Methods in Nonlinear Static Analysis

Defines a set of parameters for the arc-length incremental solution strategies in nonlinear static analysis (SOL 106 and SOL 400).  This entry will be used if a subcase contains an NLPARM command (NLPARM = ID).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLPCI   ID      TYPE    MINALR  MAXALR  SCALE           DESITER MXINC           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLPCI   10      CRIS    1.0     1.0                     12      10              
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number of an associated NLPARM entry.  (Integer > 0)                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Constraint type.  See Remark 2. (Character: “CRIS”, “RIKS”, or “MRIKS”; Default = “CRIS”)       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MINALR    │ Minimum allowable arc-length adjustment ratio between increments for the adaptive arc-length    │
│           │ method.  See Remarks 3. and 4. (0.0 < Real < 1.0; Default = 0.25)                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXALR    │ Maximum allowable arc-length adjustment ratio between increments for the adaptive arc-length    │
│           │ method.  See Remarks 3. and 4. (Real > 1.0; Default = 4.0)                                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE     │ Scale factor (w) for controlling the loading contribution in the arc-length constraint. SOL 106 │
│           │ only. (Real > 0.0; Default = 0.0)                                                               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DESITER   │ Desired number of iterations for convergence to be used for the adaptive arc-length adjustment. │
│           │  See Remarks 3. and 4. (Integer > 0; Default = 12)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MXINC     │ Maximum number of controlled increment steps allowed within a subcase.  See Remark 5.           │
│           │ (Integer > 0; Default = 20)                                                                     │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The NLPCI entry is   selected by the Case Control command NLPARM = ID.  There must also be an NLPARM entry with the same ID.  However, for creep analysis (DT ![bulkno06138.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06138.jpg?_LANG=enus) 0.0 in NLPARM entry), the arc-length methods cannot be activated, and the NLPCI entry is ignored if specified.  The NLPCI entry is not recommended for heat transfer analysis in SOL 153. Arc-length method is not supported in contact analysis.

2. The available constraint types are as follows:

     TYPE = “CRIS”:

     ![bulkno06140.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06140.jpg?_LANG=enus)  

     TYPE = “RIKS”:

     ![bulkno06142.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06142.jpg?_LANG=enus)  

     TYPE = “MRIKS”:

     ![bulkno06144.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06144.jpg?_LANG=enus)  

```text
┌───┬───────────────────────────────────────────┐
│ = │ the user-specified scaling factor (SCALE) │
├───┼───────────────────────────────────────────┤
│ = │ the load factor                           │
├───┼───────────────────────────────────────────┤
│ = │ the arc-length                            │
└───┴───────────────────────────────────────────┘
```
     where:

     The constraint equation has a disparity in the dimension by mixing the displacements with the load factor.  The scaling factor  ![bulkno06152.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06152.jpg?_LANG=enus)  is introduced as user input so that the user can make constraint equation unit-dependent by a proper scaling of the load factor  ![bulkno06154.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06154.jpg?_LANG=enus) .   As the value of  ![bulkno06156.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06156.jpg?_LANG=enus)  is increased, the constraint equation is   gradually dominated by the load term.  In the limiting case of infinite  ![bulkno06158.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06158.jpg?_LANG=enus) , the arc-length method is degenerated to the conventional Newton’s method.

3. The MINALR and MAXALR fields are used to limit the adjustment of the arc-length from one load increment to the next by:

     ![bulkno06160.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06160.jpg?_LANG=enus)  

     The arc-length adjustment is based on the convergence rate (i.e., number of iterations required for convergence) and the change in stiffness.  For constant arc-length during analysis, use MINALR = MAXALR = 1.

4. The arc-length  ![bulkno06162.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06162.jpg?_LANG=enus)  for the variable arc-length strategy is adjusted based on the number of iterations that were required for convergence in the previous load increment  ![bulkno06164.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06164.jpg?_LANG=enus)  and the number of iterations desired for convergence in the current load increment (DESITER) as follows:

     ![bulkno06166.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06166.jpg?_LANG=enus)  

5. The MXINC field is used to limit the number of controlled increment steps in case the solution never reaches the specified load.  This field is useful in limiting the number of increments computed for a collapse analysis.

6. NLPCI does not support general contact in SOL 400.

