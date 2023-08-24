## [POST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.POST.xhtml)

Default    = 9999999

If PARAM,POST,0, then the following parameters and discussion apply (not support in SOL 400):

The data blocks often used for pre- and postprocessing will be stored in the database and also converted, by the DBC module (see    MSC Nastran DMAP Programmer’s Guide   ), to a format suitable for processing by MSC Patran. These data blocks include input data related to geometry, connectivity, element and material properties, and static loads; they also include output data requested through the Case Control commands OLOAD, SPCF, DISP, VELO, ACCE, THERMAL, ELSTRESS, ELFORCE, FLUX, GPSTRESS, GPFORCE, ESE, GPSDCON, and ELSDCON.

The converted data is written to logical FORTRAN units, which may be assigned to physical files in the File Management Section.  The FORTRAN unit numbers are specified by the parameters GEOMU, POSTU, and LOADU.  By default, all data is written to the logical FORTRAN unit indicated by GEOMU.  If LOADU > 0, static load data may be diverted to another unit indicated by LOADU.  If POSTU > 0, then output data requested with the Case Control commands listed above will be diverted to the logical unit indicated by POSTU.  See   Database Concepts    in the MSC Nastran Reference Guide  for the procedure for assigning physical files.

By default, if converted data already exists on the files indicated by GEOMU, POSTU, and LOADU, then the DBC module will overwrite the old data.  If this is not desirable, then PARAM,DBCOVWRT,NO must be entered.  The parameters MODEL and SOLID may be used to store more than one model and solution in the graphics database. These parameters are not supported by MSC Patran.

PARAM,DBCDIAG > 0 requests the printing of various diagnostic messages from the DBC module (see    MSC Nastran DMAP Programmer’s Guide   ) during the data conversion.  By default, no messages are printed.

If PARAM,PATPLUS,YES is specified along with PARAM,POST,0 then the PARAM,POST,-1, operation will also be performed.

If PARAM,POST,< 0 or 1, then the following parameters and discussion apply:

* PARAM,POST,1 outputs the appropriate files for the SimXpert and Patran programs and should be used to obtain results from the latest result data blocks from SOL 400 and other recent MSC Nastran developments such as NEF.

* PARAM,POST,-1 outputs the appropriate files for the Patran program (PARAM,POST,1 should be used for more recent versions of MSC Nastran > 2012).

* PARAM,POST,-2 outputs the appropriate files for the Siemens I-deas ®  program.

* PARAM,POST,-4 outputs the files indicated below along with OPHIG for the MSC_NF interface by LMS International.

* PARAM,POST,-5 outputs the files indicated in the table below along with LAMA and OPHG1 for the FEMtools interface by Dynamic Design Solutions.  

* POST=-4 and -5 are intended for SOL 103 only.

* PARAM,POST,-6 outputs the files indicated below for Siemens Unigraphics ® .

* PARAM,POST,-7 outputs the files for Free Field Technologies.

An OUTPUT2 file for FORTRAN unit 12 in binary format is automatically created in the same directory and with the same name as the input file and with the extension “.op2”.  For example, if the input file is fender.dat then the OUTPUT2 file will be called fender.op2.

An ASSIGN statement is required in the FMS Section only if neutral file format is desired as follows:

ASSIGN OUTPUT2=‘filename of FORTRAN file’ FORM

Geometry data blocks are output with PARAM,OGEOM,YES (Default) and are written to a FORTRAN unit specified by PARAM,OUNIT1 (Default = OUNIT2) for POST = -1, -2, -4, and -6.  PARAM,OUNIT2K (Default = 91) specifies the unit number for KELM and KDICT with PARAM,POST,-5.  PARAM,OUNIT2M (Default = 92) specifies the unit number for MELM and MDICT with PARAM,POST,-5. Note that PARAM,POST,-5 is not supported with DMP. See the following table for the specific geometry data blocks written for different values for POST.

See also the PARAM,POSTEXT description for additional data blocks written to the .op2 file.

    See link for table.

* To avoid having GEOM3 and GEOM4 written if POST=-1, set PARAM,OP2GM34,FALSE.

PARAM,OMACHPR,NO selects the single precision format for GPDT, CSTM, and GEOM1.  PARAM,OMACHPR,YES selects the machine precision format. With PARAM,POST,< 0, PARAM,OMACHPR,NO is the default. With PARAM,POST,1, PARAM,OMACHPR,YES is the default.

For PARAM,POST = -1 and -2, results data blocks are output to a FORTRAN unit specified by PARAM,OUNlT2 (Default = 12). This parameter is allowed to vary between superelements.  In buckling solution sequence (SOL 105), a unique value of OUNIT2 should be specified for the buckling subcase. For all other solution sequences or within a given analysis type, changes to PARAM,OUNIT2 between subcases is not supported. See the POST Case Control command to change the unit number between subcases. See also the related parameter OMAXR.

By default the displacements are output in the global coordinate system. To output in the basic coordinate system, specify PARAM,OUGCORD,BASIC.

PARAM,POST,-1 or 1:  Results Data Blocks for Patran and SimXpert

By default, the following data blocks are output under PARAM,POST,-1.  The following parameters may be used to disable the output of data blocks to the OUTPUT2 file.  For example, if PARAM,OQG,NO is specified, then the SPCFORCE output is not written to the OUTPUT2 file. It is recommended when processing large post files in Patran and SimXpert that the following environment variable setting is used when starting the session: DRANAS_NAST_MEM=2048MB.

```text
┌──────────────┬────────────────┬──────────────┐
│ PARAM,PATVER │ Parameter Name │ Case Control │
├──────────────┼────────────────┼──────────────┤
│ < 3.0        │ > 3.0          │              │
├──────────────┼────────────────┼──────────────┤
│ YES          │ YES            │ OQG          │
├──────────────┼────────────────┼──────────────┤
│ YES          │ NO             │ OUG          │
├──────────────┼────────────────┼──────────────┤
│ YES          │ YES            │ OUG          │
├──────────────┼────────────────┼──────────────┤
│ YES          │ NO             │ OES          │
├──────────────┼────────────────┼──────────────┤
│ YES          │ NO             │ OEF          │
├──────────────┼────────────────┼──────────────┤
│ YES          │ YES            │ OEE          │
├──────────────┼────────────────┼──────────────┤
│ YES          │ YES            │ OGPS         │
├──────────────┼────────────────┼──────────────┤
│ YES          │ YES            │ OESE         │
├──────────────┼────────────────┼──────────────┤
│ YES          │ YES            │ OGPF         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ OEFX         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ OESX         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ OPG          │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ OCMP         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ OCMP         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ none         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ none         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ none         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ none         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ none         │
├──────────────┼────────────────┼──────────────┤
│ NO           │ YES            │ none         │
└──────────────┴────────────────┴──────────────┘
```
PARAM,POST,-2:  Results Data Blocks for Siemens I-deas ®

By default, the following data blocks are output under PARAM,POST,-2.  By default, the displacements are output in the basic coordinate system. To output in the global coordinate system, specify PARAM,OUGCORD,GLOBAL. The following parameters may be used to disable the output of data blocks to the OUTPUT2 file.  For example, if PARAM,OQG,NO is specified, then the SPCFORCE output is not written to the OUTPUT2 file.

```text
┌───────────┬──────────────┬─────────────────────────┬─────────────────────────────────┐
│ PARAMeter │ Case Control │ Results Data Block Name │ Description                     │
│ Name      │              │                         │                                 │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OQG       │ SPCFORCE     │ OQG1                    │ Forces of single-point          │
│           │              │                         │ constraint                      │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OUG       │ DISPLACE     │ BOUGV1                  │ Displacements in the basic      │
│           │              │                         │ coordinate system               │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│           │              │ BOPHIG                  │ Eigenvectors in the basic       │
│           │              │                         │ coordinate system               │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│           │              │ OUGV1                   │ Displacements in the global     │
│           │              │                         │ coordinate system               │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│           │              │ TOUGV1                  │ Grid point temperatures         │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OES       │ STRESS       │ OES1                    │ Element stresses (linear        │
│           │              │                         │ elements only)                  │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OEF       │ FORCE        │ OEF1                    │ Element forces (linear elements │
│           │              │                         │ only)                           │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│           │ FLUX         │ HOEF1                   │ Element heat flux               │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OEE       │ STRAIN       │ OSTR1                   │ Element strains                 │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OESE      │ ESE          │ ONRGY1                  │ Element strain energy           │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OCMP      │ STRESS       │ OEFIT                   │ Failure indices                 │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│           │ STRESS       │ OES1C                   │ Ply stresses                    │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│           │ STRAIN       │ OSTR1C                  │ Ply strains                     │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OUMU      │ ESE          │ LAMA                    │ Eigenvalue summary              │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│           │              │ ONRGY2                  │ Element strain energy           │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OEFX      │ FORCE        │ OEF1X                   │ Element forces (nonlinear       │
│           │              │                         │ elements only)                  │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ OESX      │ STRESS       │ OES1X                   │ Element stresses (nonlinear     │
│           │              │                         │ elements only)                  │
├───────────┼──────────────┼─────────────────────────┼─────────────────────────────────┤
│ none      │ none         │ ODELBGPD                │ Shape optimization geometry     │
│           │              │                         │ changes                         │
└───────────┴──────────────┴─────────────────────────┴─────────────────────────────────┘
```
PARAM, POST, -4:  Results Data blocks for LMS International/MSC_NF

By default, the following data blocks are output under PARAM,POST,-4. The following parameters may be used to disable the output of data blocks to the OUTPUT2 file.  For example, PARAM,OUG,NO requests that eigenvectors not be written to the OUTPUT2 file.

```text
┌───────────┬──────────────┬─────────────────┬────────────────────────────┐
│ PARAMeter │ Case Control │ Data Block Name │ Description                │
│ Name      │              │                 │                            │
├───────────┼──────────────┼─────────────────┼────────────────────────────┤
│ OUG       │ DISPLAC      │ OPHIG           │ Eigenvectors in the global │
│           │              │                 │ coordinate system.         │
└───────────┴──────────────┴─────────────────┴────────────────────────────┘
```
PARAM, POST, -5:  Results Data blocks for Dynamic Design Solutions/FEMtools

By default, the following data blocks are output under PARAM,POST,-5. The following parameters may be used to disable the output of data blocks to the OUTPUT2 file.  For example, PARAM,OUG,NO requests that eigenvectors not be written to the OUTPUT2 file.  PARAM,OUNIT2O (Default51) specifies the unit number of the OUTPUT2 file.

```text
┌───────────┬──────────────┬─────────────────┬────────────────────────────┐
│ PARAMeter │ Case Control │ Data Block Name │ Descriptions               │
│ name      │              │                 │                            │
├───────────┼──────────────┼─────────────────┼────────────────────────────┤
│ OUG       │ DISPLAC      │ OUGV1           │ Eigenvectors in the global │
│           │              │                 │ coordinate system.         │
├───────────┼──────────────┼─────────────────┼────────────────────────────┤
│           │              │ LAMA            │ Eigenvalue summary.        │
└───────────┴──────────────┴─────────────────┴────────────────────────────┘
```
PARAM, POST, -6:  Results Data Blocks for Siemens Unigraphics ®

By default, the following data blocks are output under PARAM,POST,-6. The following parameters may be used to disable the output of data blocks to the OUTPUT2 file.  For example, PARAM,OUG,NO requests that displacements not be written to the OUTPUT2 file.

```text
┌───────────┬──────────────┬─────────────────┬──────────────────────────────────┐
│ PARAMeter │ Case Control │ Data Block Name │ Description                      │
│ Name      │              │                 │                                  │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ OQG       │ SPCFORCE     │ OQG1            │ Forces of single-point           │
│           │              │                 │ constraints                      │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ OUG       │ DISPLAC      │ OUGV1           │ Displacements                    │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ OES       │ STRESS       │ OES1            │ Element stresses                 │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ OEF       │ STRESS       │ OEF1            │ Element forces                   │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ OEE       │ STRAIN       │ OSTR1           │ Element strains                  │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ OESX      │ STRESS       │ OES1X           │ Element stresses with            │
│           │              │                 │ intermediate station stresses    │
│           │              │                 │ and stresses on nonlinear        │
│           │              │                 │ elements                         │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ OEFX      │ STRESS       │ OEF1X           │ Element forces with intermediate │
│           │              │                 │ station forces and forces on     │
│           │              │                 │ nonlinear elements               │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ OPG       │ OLOAD        │ OPG1            │ Applied static loads             │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ none      │ none         │ DVPTAB          │ Designed property table          │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ none      │ none         │ OPTPRMG         │ Optimization parameters          │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ none      │ none         │ PROPO           │ Final element properties         │
├───────────┼──────────────┼─────────────────┼──────────────────────────────────┤
│ none      │ none         │ DBCOPT          │ Optimization summary data        │
└───────────┴──────────────┴─────────────────┴──────────────────────────────────┘
```
PARAM,POST,-7 Results Data Blocks for Free Field Technologies

Except eigenvectors, all other output data blocks are the same as PARAM,POST,-1. For eigenvectors, the matrix form is written to the OUTPUT2 file.

