## [VIEW](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.VIEW1.xhtml) - View Factor Definition

Defines radiation cavity and shadowing for radiation view factor calculations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
VIEW    IVIEW   ICAVITY SHADE   NB      NG      DISLIN                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
VIEW    1       1       BOTH    2       3       0.25                            
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEW     │ Identification number.  (Integer > 0)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ICAVITY   │ Cavity identification number for grouping the radiant exchange faces of CHBDYi elements.  (Integer │
│           │ > 0)                                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SHADE     │ Shadowing flag for the face of CHBDYi element.  (Character; Default = “BOTH”)                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ NONE means the face can neither shade nor be shaded by other faces. KSHD means the face can shade  │
│           │ other faces. KBSHD means the face can be shaded by other faces. BOTH means the face can both shade │
│           │ and be shaded by other faces.  (Default)                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NB        │ Subelement mesh size in the beta direction.  (Integer > 0; Default = 1)                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NG        │ Subelement mesh size in the gamma direction.  (Integer > 0; Default = 1)                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DISLIN    │ The displacement of a surface perpendicular to the surface.  See Figure 0-115.  (Real; Default =   │
│           │ 0.0)                                                                                               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
