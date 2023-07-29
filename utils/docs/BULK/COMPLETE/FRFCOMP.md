## [FRFCOMP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FRFCOMP.xhtml) - Frequency Response Function (FRF) Component Specification for FRF Based Assembly (FBA)

Specifies the FRF components that are to be assembled as part of an FRF Based Assembly (FBA) process.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFCOMP COMPID  COMPNAMEMEDIUM  UNITNO  LSCALFACFSCALFAC                        
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFCOMP 10      LEFTWINGOP2     25                                              
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FRFCOMP 20      FRAME   UF      30      1000.0                                  
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPID    │ ID of the component whose FRFs have been generated in a previous Nastran execution. (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPNAME  │ Name of the COMPID FRF component. See Remark 1. (Up to 8 characters).                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MEDIUM    │ Medium on which the FRF matrices and other related data are stored. Acceptable character values   │
│           │ are DB (for database), OP2 (for OUTPUT2 file) or UF (for Universal file). See Remarks 2., 3. and  │
│           │ 4.                                                                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNITNO    │ Fortran unit number for the OP2 and UF options. (Integer > 0). See Remarks 3. and 4.              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LSCALFAC  │ Length scale factor for the UF option. (Real > 0.0; Default = 1.0). See Remarks 7., 8., 9.,       │
│           │ 10. and 11.                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSCALFAC  │ Force scale factor for the UF option. (Real > 0.0; Default = 1.0). See Remarks 7., 8., 9., 10.,   │
│           │ and 11.                                                                                           │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. COMPNAME may be referenced by the ASMOUT keyword in the FRF Case Control command in order to request output for a specific FRF component in the FBA process. Accordingly, COMPNAME may not have the values of CONNINFO, ALL, COMP or ASSEMBLY as these are all reserved words for use with the ASMOUT keyword in the FRF Case Control command.
2. If the DB option is specified, then the following type of ASSIGN should be specified in the FMS section of the FBA job to access information on the database for the specified FRF component:

     ```nastran
     ASSIGN dbname = ’frfgen_job.MASTER
     DBLOCATE DATABLK = (FRFDB)  LOGICAL = dbname
     ```

3. If the OP2 option is specified, then the following type of ASSIGN should be specified in the FMS section of the FBA job to access information on the OUTPUT2 file for the specified FRF component:

     ```nastran
     ASSIGN INPUTT2 = ’frfgen_job_op2’  UNIT = 25
     ```

4. If the UF option is specified, then the following type of ASSIGN should be specified in the FMS section of the FBA job to access information on the Universal file for the specified FRF component:

     ```nastran
     ASSIGN UNVFILE = ’frfgen_job_unv’  UNIT = 26
     ```

5. Component ID of 0 is assigned to the assembled FRF configuration resulting from the FBA process.
6. An FRF generation job using an FRF Case Control command with GEN/GENASM and COMPID and COMPNAME keywords specified in it will automatically generate and save an FRFCOMP Bulk Data entry on the assembly punch (.asm) file for that FRF component for subsequent use in an FBA process.
7. LSCALFAC and FSCALFAC are meaningful only for the UF option. They are ignored for the DB and OP2 options.
8. The FRF and other information on the Universal File (UF) is grouped by so-called Universal Dataset Numbers (UDNs).  The heart of the information on the UF for a test FRF component is in UDN 58 which contains FRF data for that component. Also of interest, if present, is UDN 15 which contains grid point coordinate data in single precision or UDN 2411 which contains grid point coordinate data in double precision. Further, if UDN 15 or UDN 2411 is present, the data therein may reference definition or displacement coordinate systems. Such coordinate system data is resident in UDN 18.

     Details of the various UDNs and their formats can be obtained from the following websites:

          See link for websites.

9. The points of a test FRF component that are considered by the FBA process are those that are defined in UDN 58 either as response points or as excitation points.  Any such point that appears both as a response point and as an excitation point is regarded as a potential connection point of the test FRF component.
10. Connections between test FRF components and other FRF components are determined by what is supplied on the UF as indicated below.
     - If UDN 15 or UDN 2411 is supplied on the UF, then connections between the test FRF component grid points and those of other FRF components will be based on  matching coordinates .
     - If neither UDN 15 nor UDN 2411 is supplied, then normally, connections between the test FRF component grid points and those of other FRF components will be based on  matching grid point IDs . However, the user can override this by specifying FRFCONN entries, thereby causing connections between  user specified grid points.  In any case, when the connections are based on matching grid point IDs or based on FRFCONN entries, it is the user's responsibility to ensure that the connection grid points have the same physical locations in space so that correct results are obtained from the FBA process. The program clearly cannot check for this condition since the coordinates of one or more of the points are not available.

11. For the UF option, LSCALFAC and FSCALFAC are used as follows:
     - For Universal Dataset No. (UDN) 15 or 2411 (if present) on the Universal File:
     The X, Y, and Z coordinate values in the UDN are multiplied by LSCALFAC before they are used in the FBA process.
     - For Universal Dataset No. (UDN) 58 on the Universal File:
     The FRF response quantities in the UDN are multiplied by appropriate factors as shown in the following table before they are used in the FBA process.

```text
┌──────────────┬───────────────────────────────────┬─────────────────────────────────────────────────┐
│ FRF Response │ Type of Excitation                │ Factor by Which FRF Response Quantity is        │
│ Quantity     │                                   │ Multiplied Before It is Used in the FBA Process │
├──────────────┼───────────────────────────────────┼─────────────────────────────────────────────────┤
│ Translationa │ Unit force at an excitation point │ LSCALFAC/FSCALFAC                               │
│ l displaceme │                                   │                                                 │
│ nt, velocity │                                   │                                                 │
│ or           │                                   │                                                 │
│ acceleration │                                   │                                                 │
│ at a         │                                   │                                                 │
│ structural   │                                   │                                                 │
│ point        │                                   │                                                 │
├──────────────┼───────────────────────────────────┼─────────────────────────────────────────────────┤
│ Unit moment  │ 1.0/FSCALFAC                      │                                                 │
│ at an        │                                   │                                                 │
│ excitation   │                                   │                                                 │
│ point        │                                   │                                                 │
├──────────────┼───────────────────────────────────┼─────────────────────────────────────────────────┤
│ Rotational d │ Unit force at an excitation point │ 1.0/FSCALFAC                                    │
│ isplacement, │                                   │                                                 │
│ velocity or  │                                   │                                                 │
│ acceleration │                                   │                                                 │
│ at a         │                                   │                                                 │
│ structural   │                                   │                                                 │
│ point        │                                   │                                                 │
├──────────────┼───────────────────────────────────┼─────────────────────────────────────────────────┤
│ Unit moment  │ 1.0/(LSCALFAC*FSCALFAC)           │                                                 │
│ at an        │                                   │                                                 │
│ excitation   │                                   │                                                 │
│ point        │                                   │                                                 │
├──────────────┼───────────────────────────────────┼─────────────────────────────────────────────────┤
│ Pressure at  │ Unit force at an excitation point │ 1.0/(LSCALFAC**2)                               │
│ an acoustic  │                                   │                                                 │
│ point        │                                   │                                                 │
├──────────────┼───────────────────────────────────┼─────────────────────────────────────────────────┤
│ Unit moment  │ 1.0/(LSCALFAC**3)                 │                                                 │
│ at an        │                                   │                                                 │
│ excitation   │                                   │                                                 │
│ point        │                                   │                                                 │
└──────────────┴───────────────────────────────────┴─────────────────────────────────────────────────┘
```
