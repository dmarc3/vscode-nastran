## [MONPNT2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MONPNT2.xhtml) - Internal Load Monitor Point

Element Monitor Output Results Item.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONPNT2 NAME    LABEL                                                   +
+       TABLE   TYPE    NDDLitemEID                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MONPNT2 SB100   Leading edge stringer at root                           +
+       STRESS  CBAR    SX2A    100                                             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Unique character string of up to 8 characters identifying the monitor point (Character; no       │
│           │ Default)                                                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ An optional string comprising of no more than 56 characters (fields 3 through 9) that identifies │
│           │ the monitor point. (Character; Default = Blank)                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABLE     │ Type of output to be monitored. Options are STRESS, FORCE or STRAIN. (Character; no Default)     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Element type (Character; no Default)                                                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NDDLitem  │ Component for this type to be monitored. This is the NDDL label for the particular Table and     │
│           │ element type. (Character; no Default)                                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element ID. (Integer > 0)                                                                        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MONPNT2 is available for SOLs 101, 103, 108, 109, 111, 112, 144, 146 and 200.
2. Most element types have some items that can be monitored.
3. An assumption is made that the desired component is linear with respect to the displacement vector. If this assumption is not valid, the results will be incorrect.
4. Fictitious Table/Type/NDDLitems/EID generate a warning message and are ignored.
5. NDDL descriptions for Table=FORCE can be found in the  MSC Nastran DMAP Programmer’s Guide  within the OEF datablock description. Table=STRESS and STRAIN are contained in the OES datablock description.

     Once within the datablock description you can search for the element name (or better yet, element number, see the following table) you are interested in. There can be several different descriptions for an element type. For example, real vs. complex, thermal, stress vs. strain (within the OES description), linear vs nonlinear. In addition, the shell class of elements (quad4, quad8, quadr, tria3, tria6, triar) will have a composite form (quad4lc, quud8lc, quadrlc, tria3lc, .., i.e., basename + “LC”), corner or bilin stresses (basename + “C”).

     By looking at the comments contained in the text make sure you are reading from the appropriate section. The NDDLitem is labeled as the ‘NAME’ field within the    MSC Nastran DMAP Programmer’s Guide   .

     You can also print the NDDL description for the entire database by running the following 4 statement bulk data file.

```nastran
sol loadnddl 
compile nddl=nddl,list 
cend 
enddata
```