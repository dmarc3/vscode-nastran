## [BIAS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BIAS.xhtml) - MESH Bias Definition

Specifies a variation of the mesh-size in one direction for use in the MESH entry in SOL 700. The MESH entry can create a biased or non-uniform mesh. A uniform mesh consists of a number of planes separated by a fixed distance, but for a biased mesh the distance between subsequent planes can differ. The BIAS definition allows specifying the locations of planes in one direction. For a number of intervals the density of planes can be specified.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BIAS    BID                                                             +       
+       X0      GROWTH0 N0      DXS0    DXE0                            +       
+       X1      GROWTH1 N1      DXS1    DXE1                            +       
+       Xi      GROWTHi Ni      DXSi    DXEi                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BIAS    100                                                             +       
+       -4.5    0.2     15                                              +       
+       -1      1       20                                              +       
+       1                       0.1     0.46                                    
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID       │ Unique bias number. Must be referenced from MESH entry. (Integer; Required)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Xi        │ Begin coordinate of an interval. The interval ends at the  entry. (Real; Default = 0.0)           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROWTHi   │ GROWTHi is the ratio between the step size at the beginning of the interval and at the end of the │
│           │ interval. If it is smaller than 1.0 then the mesh refines when going from the beginning of the    │
│           │ interval to the end of the interval.  (Real>0) See Remarks 1.- 3.                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Ni is the number of elements inside the interval. (Integer>0) See Remarks 1.- 3.                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DXSi      │ DXSi is the start element size of the interval. (Real>0) See Remarks 1.- 3.                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DXEi      │ DXEi is the end element size of the interval. (Real>0) See Remarks 1.- 3.                         │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The begin point of the first interval has to be equal to the X0 field of the MESH entry and may be left unspecified. The end point of the last interval is given by X0 + DX as specified by the MESH entry. In the example above, the first interval is given by [-4.5,-1], the second one by [-1,1] and the last one by [1,4.5], assuming that X0 + DX = 4.5 on the MESH entry that references the bias definition from IBIDX.
2. To define the bias in an interval four fields are available. These are GROWTHi, Ni, DXSi and DXEi. To specify the bias inside an interval two of these four variables have to specified. The other two variables have to left blank. In addition the mesh size can be chosen constant by defining Ni and leaving GROWTHi, DXSi an DXEi blank.

     This gives seven methods of specifying a bias;

     1.      Define GROWTHi and Ni. DXSi and DXEi have to be left blank.
     2.      Define DXSi and  DXEi. GROWTHi and Ni  have to be left blank.
     3.      Define DXSi and Ni. GROWTHi and DXEi have to be left blank.
     4.      Define DXEi and Ni. GROWTHi and DXSi have to be left blank.
     5. Define GROWTHi and DXSi. Ni and DXEi have to be left blank.
     6. Define GROWTHi and DXEi. Ni and DXSi have to be left blank.
     7. Only define Ni and leave GROWTHi, DXSi an DXEi blank.

          For method 2 it can happen that the biased elements do not exactly fit into the interval.

          To get a good fit a small change to defined start and end step sizes is made.  These changes in general amount to a few percents.

          For method 5 and 6  a small change to the specified growth factor can be made so that the biased elements fit into the interval.

3. The algorithm for each method first determines an appropriate growth factor so that the biased elements fit into the interval. In addition the number of planes is determined. For method 2, 3 and 4 this is done by  using bisection. The location of the planes is given by:

![bulkab02278.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02278.jpg?_LANG=enus)  

![bulkab02280.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02280.jpg?_LANG=enus)  

![bulkab02282.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02282.jpg?_LANG=enus)  

Here X(i) denotes the location of the Euler plane,    ![bulkab02284.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02284.jpg?_LANG=enus)  denotes the step size of the interval and N denotes the number of Euler planes. The index  i runs across the Euler planes. The variable GROWFAC denotes the grow factor between planes within the interval. The locations of the planes X(i) are written to the OUT file as part of MESH output. In addition, the growth of the element sizes is written out in the next column. This is given as the ratio in element size between the layer of elements to the right of the plane and to the left of the plane. Let x0, x1 and x2 denote three subsequent planes, then the element size to the left of the x1-plane is given x1-x0 and to the right it is given by x2-x1. The ratio by which the element size grows if one goes across the x1-plane is:

![bulkab02286.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02286.jpg?_LANG=enus)  

To get physically meaningful results, this value should not exceed 1.3 or be smaller than 0.7 .

Within each interval the ratio in element size equals GROWFAC. But the element size between two adjacent elements that are in two different intervals can differ from GROWFAC. Here each interval has a distinct GROWFAC variable.

For both method 2, 5 and 6 The growth factor GROWFAC and start and end step sizes that are actually used can be obtained from this plane summary in the OUT file. In this summary for each plane a growth factor and step size is specified.

Also the total number of elements is written out.

