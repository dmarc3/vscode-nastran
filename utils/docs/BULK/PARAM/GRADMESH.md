## [GRADMESH ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.GRADMESH.xhtml)

Default = OFF, SOL 700 only

Glues fine meshes to coarse meshes. See the section on Graded meshes in the user manual for further information.

#### Format:

```nastran
PARAM,GRADMESH,OPTION
```

#### Example:

```nastran
PARAM,GRADMESH,MINVOL
```

```text
┌────────┬────────┬──────────────────────────────────────────────────┐
│ OPTION │ OFF    │ Graded mesh gluing is not used (Character)       │
├────────┼────────┼──────────────────────────────────────────────────┤
│        │ MINVOL │ If an element of one mesh is covered by an       │
│        │        │ element of another mesh the element with the     │
│        │        │ largest volume will be inactivated. It will also │
│        │        │ be removed from the output request for Eulerian  │
│        │        │ archives.                                        │
├────────┼────────┼──────────────────────────────────────────────────┤
│        │ ELNUM  │ If an element of one mesh is covered by an       │
│        │        │ element of another mesh the element with the     │
│        │        │ smallest element number will be inactivated. It  │
│        │        │ will also be removed from the output request for │
│        │        │ Eulerian archives.                               │
└────────┴────────┴──────────────────────────────────────────────────┘
```
#### Remarks:

1. This parameter can be used to build block-structured meshes.

2. All Euler elements have to be either orthogonal or axial symmetric.

3. To get meaningful physical results, the change in mesh size going from one element to the next should not be larger than 1.4 or smaller than 0.7.

