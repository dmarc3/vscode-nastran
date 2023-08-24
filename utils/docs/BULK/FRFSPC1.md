## [FRFSPC1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FRFSPC1.xhtml) - FRF Component Single-Point Constraint for FRF Based Assembly (FBA)

Defines single-point constraints for FRF component connection points in an FRF Based Assembly (FBA) process.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFSPC1 SID     C       COMPID1/POINT1  COMPID2/POINT2  COMPID3/POINT3  +       
+                       COMPNAM1        COMPNAM2        COMPNAM3                
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFSPC1 100     4       10      12      ENGINE  23      FRAME   31              
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFSPC1 20      1       STRUT   25      NACELLE 35                              
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of the single-point constraint set. See Remark 1. (Integer > 0)            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component number(s). (Any unique combination of the integers 1 through 6 with no embedded blanks │
│           │ for grid points; integer 0 or blank for scalar points.)                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPIDi   │ Identification number of an FRF component whose FRFs have been generated in a previous Nastran   │
│           │ execution. See Remark 2. (Integer > 0)                                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPNAMi  │ Name of an FRF component whose FRFs have been generated in a previous Nastran execution. See     │
│           │ Remark 2. (Up to 8 characters; no blank allowed)                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POINTi    │ Grid or scalar point identification number. See Remarks 3. and 4. (Integer > 0)                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Single-point constraint sets must be selected with the Case Control command SPC = SID.
2. If FRF component COMPIDi/COMPNAMi is not part of the FBA process, then the single-point constraint data for that FRF component is ignored.
3. POINTi must be among the connection points of the corresponding FRF component COMPIDi/COMPNAMi. If not, the program terminates the job with a user fatal message.
4. If POINTi is not connected to any other point in the FBA process, the program ignores the FRFSPC1 data for this point and issues a warning message indicating this to the user.
5. Unlike in non-FBA jobs, wherein a degree-of-freedom that has SPCs specified for it yields exact zero results, a degree-of-freedom that has an FRFSPC1 specified for it in an FBA job will, in general, not give exact zero  results, but will give results that are nearly zero or very close to zero, usually around 1.0E-12 or so.
