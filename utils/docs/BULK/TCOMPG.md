## [TCOMPG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TCOMPG1.xhtml) - Layered Composite PEM 1D Analytical Trim Property

Defines global (external) layer identification numbers and properties for a 1D analytical trim.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TCOMPG  SET3ID                                                          +       
+       GPLYID1 MID1    T1      SCALE1                                  +       
+       GPLYID2 MID2    T2      SCALE2                                  +       
+       …       …       …       …                                               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TCOMPG  1                                                               +       
+       1001    101     0.02                                            +       
+       1002    102     0.03                                                    
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SET3ID    │ Identification number of a SET3 entry referred to a group of PLTSURF entries. See Remarks 2. and │
│           │ 8. (Integer > 0)                                                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GPLYIDi   │ User-defined Global (External) layer ID. See Remark 3. (Integer > 0)                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDi      │ Material identification number of the various trim layers. The layers are identified by serially │
│           │ numbering them from 1 at the bottom layer. The MIDi may refer to a MATPE1, MAT1, or MAT10 entry. │
│           │ See Remark 8.(Integer > 0).                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti        │ Thicknesses of the various layers. (Real >0.0)                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALEi    │ Scaling factor of the ith layer. See Remark 4. and 5.. (Real ≥ 0.0; Default = 1.0)               │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks

1. TCOMPG should be placed under BEGIN BULK TRMC, along with SET3 and PLTSURF entries. TCOMPG takes precedence over the standard finite element based trim component definition.
2. The surface mesh defined by this SET3 serves as the bottom surface from which the trim composite layers are stacked up. There is another surface mesh with PLTSURF defining the top surface of the trim component. The interface coupling conditions of trim component is defined by ACPMCP1 on the surface meshes.
3. The global layer identification number must be unique with respect to other layers in the entry. The layers are defined in stacking sequence starting with the bottom layer.
4. The thickness variation is handled by the Transfer Admittance Method (TAM) as the thickness between the trim bottom and top panels is automatically evaluated in each grid point. The layer thickness of each individual trim layer is recomputed based on their relative thickness and their thickness scaling. Scaling factor allows to specify how the thicknesses of the layers scale relative to each other with the change in total thickness. A 0.0 value forces the layer not to change. A layer will absorb the thickness changes in proportion to its SCALEi value.

     In the example defined below, no thickness scaling is applied on the heavy layer (GPLYID2), and the porous layer (GPLYID1) will as such adapt its thickness while the heavy layer will be assumed of constant thickness.

     ![bulktuv07973.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv07973.jpg?_LANG=enus)

5. If a trim component interface is defined where there is no physical gap in the model (bottom and top are next to each other), the obtained solution will depend on the definition of the composite trim:
     - When having one layer using a SCALEi of 0.0, it will actually ensure this layer is applied.
     - If all layers have SCALEi > 0.0, the code stops with an error message.

     ![rg20222_1Dtrim_composite07975.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/rg20222_1Dtrim_composite07975.png?_LANG=enus)

6. Generally, the geometry of a composite trim material is described by a sequence of N layers. Each layer i (where i between 1 and N) has a certain thickness h  and material properties defined by material identification numbers (such as MID in MAT1, MATPE1, MAT10). The final local thickness h  is defined by the interplay of the total thickness of the multilayer TCOMPG card  ![bulktuv07976.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv07976.jpg?_LANG=enus)  in the TCOMPG on the one hand, and the t  (Ti entry in TCOMPG) and f  (SCALEi entry in TCOMPG) of layer i in the TCOMPG card as follows. The distance between the two trim surfaces is measured and the value T. The sum of all layer thicknesses h ,  ![bulktuv07978.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv07978.jpg?_LANG=enus) . h  is computed with the following formula:

     ![rg20222_1Dtrim_layer07980.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/rg20222_1Dtrim_layer07980.png?_LANG=enus)

     This formula mimics the behavior of stacking springs of a certain thickness t i  and a flexibility f i  per unit length and stretching these stacked springs to a total thickness T.

7. The user can choose to build the stack of 1D analytical trim layers either from the cavity side or from the structure side. However, he or she should stick with the choice for all TCOMPG entries. This means that the user can define several TCOMPG entries. Each TCOMPG starts from one SET3 entry. The TCOMPG/SET3ID references one SET3 ID.
8. Unique SET3ID and MIDi are strongly recommended.
