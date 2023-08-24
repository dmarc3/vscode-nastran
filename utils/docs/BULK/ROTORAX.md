## [ROTORAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.ROTORAX.xhtml) - Axisymmetric Model Rotor Definition

Specifies list of elements, properties or grid points that comprise an axisymmetric model rotor.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORAX ROTORID LTYPE   ID1     ID2     ID3     ID4     ID5     ID6     +       
+       ID7     ID8     -etc.-                                                  
```

or

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORAX ROTORID LTYPE   ID1     THRU    ID2     BY      INC                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ROTORAX 100     ELEM    5       THRU    25                                      
ROTORAX 10      PROP    10                                                      
ROTORAX 15      GRID    50      69      70                                      
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTORID   │ Identification number of rotor. (Integer > 0). See Remarks 1. and 2..                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LTYPE     │ ELEM, PROP or GRID, indicating whether the specified list references element IDs, property IDs or │
│           │ grid point IDs, respectively. (Character; Required; No default).  See Remarks 3. through 6..      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ IDs of elements, properties or grid points comprising the rotor. (Integer > 0; Required; No       │
│           │ default)                                                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRU      │ Implies a range of identification numbers. (Optional).                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BY        │ Implies that an increment is being specified for the THRU option (Optional)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INC       │ ID increment. (Integer > 0; Optional)                                                             │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ROTORIDs of ROTORAX entries may not be the same as the ROTORIDs of ROTORG entries or ROTORSE entries.
2. Multiple ROTORAX entries with the same ROTORID are supported.
3. When the GRID option is used for the LTYPE field, a minimum of two grid points must be specified in the list.  If this condition is not satisfied, the program terminates the execution with an appropriate user fatal message.
4. For every rotor defined by a ROTORAX entry, there should be at least one entry using the GRID option for the LTYPE field to define the axis of symmetry.
5. Grid points specified on ROTORAX entries using the GRID option for the LTYPE field must be collinear.  If this condition is not satisfied, the program terminates the execution with an appropriate user fatal message.
6. Only grid points specified on ROTORAX entries using the GRID option for the LTYPE field may be referenced by RSPINR, RSPINT and UNBALNC entries.
