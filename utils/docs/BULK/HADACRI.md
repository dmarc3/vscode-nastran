## [HADACRI](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HADACRI.xhtml) - Mesh Adaptivity Criterion and Corresponding Parameters - SOL 101 & 400 (Linear)

Specifies Mesh refinement criterion for adaptive mesh refinement and corresponding parameters.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HADACRI CRITID  TYPE    F1      F2      F3      F4      F5      F6              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HADACRI 1       1       0.9                                                     
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRITID    │ Identification number referenced by the CRITID field in the HADAPTL Bulk Data entry. (Integer > 0; │
│           │ no Default)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Type of Mesh refinement adaptivity criteria. See Remark 2. (Integer > 1 and < 4; Default = 1)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F1 to F8  │ Criteria specific parameters. See Remark 2. (Real; no Default)                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The mesh refinement criteria currently available (and selected in the TYPE field) are:

TYPE

Name of Mesh Refinement Criterion

1

Error indicator based

2

Element within a spatial spherical region

3

Elements within a spatial cubic region

4

Elements in contact criteria

--------------------



2. The following table describes the different refinement criteria and corresponding parameters:

TYPE

Description

1

In this case a scalar error indicator  is computed for all elements ‘e’ in the finite element mesh. Then, an element ‘e’ will be refined if

 

where  is a weight factor  specified in the F1 field and  is the quadratic mean of the error indicator defined as

 


with N the total number of elements in the element set where element ‘e’ belongs. For this criteria the fields F2 to F6 are ignored.

The elemental error indicator  is computed using the grid point stresses following the procedure utilized by the ELSDCON Case Control command and described in Mesh Stress Discontinuities at Grid Points in the MSC Nastran Reference Guide. This procedure can be summarized as follows:

◾Let

 

be the weighted average over all elements ‘e’ concurrent to a given node ‘a’ of each component ‘ij’ of the grid point stresses  where  is a weighting factor assigned to element ‘e’ and  is the number of elements connected to the given node ‘a’.

◾An estimate of the error in a particular component of stress ‘ij’ at a grid point ‘a’ is then be computed as

 

◾Averaging the latter over the different stress components, ‘ij’, over the different shell fibers (for shell elements) and over the different grid points ‘a’ connected by a given element ‘e’ we obtain the elemental, scalar error indicator .

2

In this case the user specifies a spherical region in space with center given by (F1,F2,F3) and radius given by F4. Then, all elements with at least one node with basic coordinates (X,Y,Z) with the spherical region (i.e., such that ) will be refined. For this criteria the fields F5 and F6 are ignored.

3

In this case the user specifies a hexahedral region in space, aligned with the basic coordinates system, with corners given by (F1,F2,F3) and (F4,F5,F6). Then, all elements with at least one node with basic coordinates (X,Y,Z) within the specified hexahedral region (i.e., such that , , ) will be refined.

4

In this case all elements with at least one node involved in contact either as touching or touched nodes in deformable contact bodies are refined. For this criteria the fields F1 to F6 are ignored.

--------------------



3. Each criteria must have a unique ID (specified by the CRITID field and referenced by the CRITID field of the Bulk Data entry,  ).

4. The user might need to adjust the VARPHI parameter to ensure proper singular geometric feature detection (such as sharp edges or corners) (See the Parameter,  ).

