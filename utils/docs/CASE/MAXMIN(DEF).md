## [MAXMIN(DEF) (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MAXMIN.DEF.Case.xhtml) - Defines Parameters for Monitoring Maximums and Minimums (new form)

Defines parameters and output options for the monitoring of maximums and minimums in data recovery. MAXMIN(DEF) must be specified above all subcases. The MAXMIN(ELEM) and/or MAXMIN(GRID) Case Control command is then required to print the max/min results.

#### Format for Grid Point Output:

![casecontrol4a01106.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01106.jpg?_LANG=enus)  

#### Format for element output:

![casecontrol4a01108.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01108.jpg?_LANG=enus)  

#### Examples:

```nastran
MAXMIN(DEF) stress (quad4,smax1) MAXA=5
MAXMIN(DEF) disp T1 T2 T3 MAGT RMS FULL
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DISP, VELO,  │ Type of result to be monitored.                                                                    │
│ etc. (grid   │                                                                                                    │
│ point        │                                                                                                    │
│ output)      │                                                                                                    │
│ STRESS, etc. │                                                                                                    │
│ (element     │                                                                                                    │
│ output)      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T1, T2, etc. │ Name of the grid point component to be monitored.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAGT         │ Specifies the magnitude of the translational components are to be monitored.                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAGR         │ Specifies the magnitude of the rotational components are to be monitored                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ eltype1      │ Name of the element type(s) to be monitored. At least one element type must be present. All        │
│ eltype2 …    │ elements designations are generic and the "C", designation Connections, should be dropped. The     │
│              │ exceptions for this are the CONROD and CONV element types. See remark 10.                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ comp1 comp2… │ Name of the element component(s) to be monitored; e.g., etmax1 for max shear strain in the Z1      │
│              │ plane. The component names are defined in the Nastran Data Definition Language (NDDL). Also, the   │
│              │ item codes from Item Codes may be used.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ABSOLUTE(p)  │ Print out the top p absolute values (Default for p is 5).                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MINALG(q)    │ Print out the bottom q minimum algebraic values (Default for q is 5).                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXALG(r)    │ Print out the top r maximum algebraic values (Default for r is 5).                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL(p)       │ Print out all options: ABSOLUTE, MINALG, and MAXALG. (Default for p is 5).                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BRIEF        │ Print out only the maxmin results (Default).                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FULL         │ Print out the maxmin results followed by the standard data recovery format for the elements and    │
│              │ grids at the retained set of the maximum or minimum occurrences.                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GLOBAL       │ Selects the global coordinate system (see CD on the GRID entry) for monitoring grid point results. │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BASIC        │ Selects the basic coordinate system for monitoring grid point results (Default).                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ cid          │ Specifies a coordinate system ID for a system defined on a CORDij entry for monitoring grid point  │
│              │ results.                                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RMS          │ Print out the root-mean-square value of each maximum or minimum value requested by ABSOLUTE, MIN,  │
│              │ or MAX over all time steps.                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CENTER       │ Component selector when element allows for component name to occur in multiple places (Default).   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Selects all locations in an element where multiple locations exist.                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP        │ Reduces all occurrences of a component name to a single value before the action is performed.      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ENDS         │ Selects the ends of a BEAM element ignoring intermediate stations.                                 │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MAXMIN(DEF) must be specified above all subcases, but this is not sufficient to request monitoring of maximums and minimums. The MAXMIN command must also be specified above or inside subcases.
2. MAXMIN(DEF) may be specified more than once.
3. Multiple element types may be grouped together, if the same component name is to be monitored across those types, by enclosing the element types in parentheses. This grouping does not combine the element types during processing. Each type and component action is performed in class.
4. Multiple component names may be compared collectively to the current maximum (or minimum), but only the maximum (or minimum) component in the group will be reported in the output. This is requested by enclosing the component names in parentheses.
5. Grid point component output is always converted to the basic coordinate system for monitoring when processing “sort1”. The global system is the default when processing in “sort2”.
6. Results for layers in composite elements, or intermediate stations in CBAR and CBEAM elements, are not supported.
7. Only real data recovery is supported.
8. When no MINA, MAXA, or ABSO keyword is supplied, the default values of p, q, and s will be 5. When any keyword is supplied, the other unreferenced keyword values will be set to zero, and no output will be created.
9. The component action keywords of CENTER, ALL, GROUP, and ENDS can only be applied to component names defined in the NDDL and occur at multiple places in element data recovery. They cannot be used with Item Codes.
10. Specify QUAD4C and TRIA3C for corner stresses of CQUAD4 and CTRIA3 elements when a CUBIC, SGAGE, BILIN or CORNER option is specified on the STRESS/STRAIN output request.
11. MAXMIN data output to the  .op2  and  .xdb  files are not supported.
12. SORT1 and SORT2 output Case Control options (such as DISP(SORT2)=ALL), cause MAXMIN to behave differently.
     - SORT1 is only supported in SOLs 101, 103, 105, and 109. For each static loadcase, mode buckling eigenvalue, or time step, all the grids or elements will be searched for maximums and minimums.
     - SORT2 is only supported in SOL 112. For each selected grid or element, all the time steps will be searched for maximums and minimums.
