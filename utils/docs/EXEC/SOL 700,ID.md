## [SOL 700,ID](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.SOL.700.ID.xhtml) - Executes MSC Nastran Explicit Nonlinear (SOL 700)

#### Format:

```nastran
SOL 700,ID PATH= STOP= NP(or DMP700)= FSIDMP= INTELMPI=
```

#### Examples:

```nastran
SOL 700,129 PATH=3 NP=4 
```
 
(700,129 request nonlinear transient dynamics, path=3 requests use of the SOL 700 script called out in file sol700.pth, np=4 requests that 4 processors be used)

#### Summary:

SOL 700 is an Executive Control statement like SOL that activates an explicit nonlinear transient analysis integration scheme. The calculations will not be performed directly within MSC Nastran.  Instead, SOL 700 will use a separate solver spawned from MSC Nastran.

The SOL 700 statement will spawn an executable which is a 3D, explicit nonlinear analyses code DMP (distributed memory parallel processing domain decomposition) capabilities.

For ID=129 or NLTRAN, SOL 700 will generate an intermediate input data file, jid.dytr.dat, where “jid” is the name of the MSC Nastran input file without the extension). For example, if the MSC Nastran input file is named abcd.dat, (or abcd.bdf) then “jid”=abcd).

Unless specified differently using the  STOP=3  option, the executable will be executed from MSC Nastran on any computer system capable of doing so (which includes most Linux systems and Windows systems). For it to run, it must be installed, properly licensed, and accessible from the directory where the MSC Nastran input data resides, MSC_BASE must be provided in the environment.

#### Nastran SOL 700 Update:

Starting in MSC Nastran 2019.0 there is a change in the execution of MSC Nastran SOL 700. SOL 700 with LS-Dyna is no longer supported by MSC Nastran. Instead, a new explicit solver is introduced in MSC Nastran 2019.0. This version can be activated by adding VERSION = PRIMARY to SOL 700 in the input file or simply by leaving it blank as this will be the default. A new license feature will be needed to run this new version: NA_Explicit_Dytran.

The new SOL 700 will support both DMP and SMP parallelization. For this, the solver will pull licenses from the following license feature: NA_Parallel.

Customers that have a lease agreement will no longer be able to run MSC Nastran SOL 700 jobs from version of MSC Nastran before 2018.0. The binaries needed were in the prior version located in msc20223/dytran directory of the MSC Nastran installation. However, this directory will be missing after the installation of MSC Nastran 2022.3.

Paid-up customers of MSC Nastran before 2018.0 can continue to use MSC Nastran SOL 700 jobs from version of MSC Nastran before 2018.0. For those customers, there will be no change in the FlexLM License features.

#### Executive Control Parameters:

The required ID may be one of several valid solution sequence integers or names shown in  Table 2  for the SOL statement. Examples are 129 and NLTRAN.

The following solutions are available: 101, 106, 109, 129 (and their equivalent names).

All items on the SOL 700,ID after ID itself may be specified by environmental variables. This may be done any way environmental variables can be set. They may be set by the MSC Nastran user at run time or by the system administrator when MSC Nastran is installed. Any values specified on the SOL statement override those in the environment. Environmental variables are fully described in the     . A keywords file is available to describe the format of each variable. The variable is normally set in the system-wide rc file, a user’s rc file, a local rc file or in a script used to submit MSC Nastran.

The following describes the various options for PATH. We suggest that PATH=3 for all computer systems.

#### **PATH=1 (Windows Only)**

If PATH=1  is specified, MSC Nastran will determine the proper command to execute  a serial run . To aid MSC Nastran in determining where Dytran is located, the  dynrun.pth  file must be located in the same directory where the MSC Nastran input file resides. The dynrun.pth file must contain one line providing the location (complete path) of the SOL 700 run script. A typical example of the line in the file dynrun.pth follows.

```text
┌─────────┬────────────┐
│ Windows │ c:\sol700\ │
└─────────┴────────────┘
```

A string is appended to this path to form the complete command used to execute the SOL 700 executable. “dytran jid=name.dytr.dat”

For Windows, MSC Nastran will spawn the external executable using the following command assuming the MSC Nastran input data is named enf2e.dat. (Although the example appears like it is on multiple lines, it is actually on a single line.)

c:\sol700/dytran jid=enf2e.dytr.dat

#### PATH=3 (All Systems)

If PATH=3  is specified, a script or batch file located in the same directory as the SOL 700 executable will be executed. The name of the executable is dytran (linux) or dytran.exe (Windows). This directory and name of the script is determined by the first line in a file named sol700.pth which must be in the same directory as the Nastran input file. Options are specified on subsequent lines of the sol700.pth file. For example, if Nastran is installed in  C:\Program Files\MSC.Software\MSC_Nastran\20223 , the dytran.exe location is  C:\Program Files\MSC.Software\MSC_Nastran\2022.3\msc20223 \dytran\win64\bin\dytran . To use  sol700.pth  file, the first line must be  C:\Program Files\MSC.Software\MSC_Nastran\20223\msc20223\dytran\win64\bin\dytran

#### Available PATH=3 options for Windows PC systems are as follows:

```text
┌──────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ exe=     │ The full path to the executable that is to be used.                                              │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│          │ Optional -- If exe= is omitted, the directory where the script or batch file resides (first line │
│          │ of sol700.pth) will be used and dytran for Linux and dytran.exe for windows will be appended. If │
│          │ exe= is used, it must be the second line in the sol700.pth file.                                 │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nproc    │ Number of processors. (only for DMP run)                                                         │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│          │ (Default is to used NP on the SOL 700 line. If NP and nproc are omitted, the default is 1). For  │
│          │ parallel execution, the directory where the MSC Nastran input file exists must be shared with    │
│          │ read/write privileges. If wdir is used, it must also be shared (see below). The directory where  │
│          │ the Dytran executable resides must also be shared for parallel execution.                        │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ncpus    │ Number of processors. (only for SMP)                                                             │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│          │ (Default is not used.) If ncpus is greater than 1 in sol700.pth, Nastran SOL 700 automatically   │
│          │ uses SMP capability.                                                                             │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ bat      │ Run in background or foreground (Default).                                                       │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ hlist    │ Host file name. Name of a hostfile containing the same information as “machine” The format of    │
│          │ hostfile is as follows for the example for machine:      machine1 2      machine1 4              │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ intelmpi │ To activate the Intel MPI set intelmpi equal to yes. Default is no. If intelmpi=yes is placed    │
│          │ directly on the command line (not in sol700.pth) Intel MPI will be activated too.                │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ atb      │ the name of atb file.                                                                            │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ imm      │ the name of imm file.                                                                            │
└──────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

A Windows example of the file sol700.pth for the PATH=3 case follows.

C:\MSC.Software\MSC_Nastran\20223\msc20223\dytran\win64\bin\dytran nastran nproc=4

For the above example, MSC Nastran will create the following command to spawn the SOL 700 executable assuming your input file is named abcd.dat. (Although the example appears like it is on multiple lines, it is actually on a single line.)

C:\Program Files\MSC.Software\MSC_Nastran\20223\msc20223\dytran\win64\bin\dytran nastran nproc=6

#### Available PATH=3 options for Linux systems follows:

```text
┌────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ debug  │ Specifying debug=yes indicates if you want to keep scratch files and other debug information to    │
│        │ investigate when a job fails to run. Default is no.                                                │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ exe    │ The full path to the executable for Dytran that is to be used. (Optional)                          │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ fsidmp │ Specifying fsidmp=yes indicates to run the FSI Distributed Memory Parallel version. Default is no. │
│        │ If FSIDMP=YES is placed directly on the command line (not in sol700.pth) FSI Distributed Memory    │
│        │ Parallel will be activated too.                                                                    │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ hlist  │ The (local) filename containing the hosts list. If this file is not given or not found, a default  │
│        │ local hosts list is used. Note that the MPI universe in which the selected nodes and CPUs reside   │
│        │ is expected to exist and be accessible (i.e., be booted).                                          │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nproc  │ Number of processors. (only for DMP run)                                                           │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│        │ (Default is to use NP on the SOL 700 line. If NP and nproc are omitted, the default is 1.) NOTE:   │
│        │ The number of requested processes must be a power of 2.                                            │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ncpus  │ Number of processors. (only for SMP)                                                               │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│        │ (Default is not used.) If ncpus is greater than 1 in sol700.pth, Nastran SOL 700 automatically     │
│        │ uses SMP capability.                                                                               │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ atb    │ the name of atb file.                                                                              │
├────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ imm    │ the name of imm file.                                                                              │
└────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

A Linux example of the file sol700.pth for the PATH=3 case is as follows:

/app/msc/msc20223/dytran/linux64/bin/dytran nastran nproc=4

For the above example, MSC Nastran will create the a command similar to the following to spawn the SOL 700 executable assuming your input file is named abcd.dat

/app/msc/msc20223/dytran/linux64/bin/dytran nastran nproc=4

If PATH is not specified, the default search path will be used to locate the dytran executable. This version will be located in a subdirectory named dytran/machine below the MSC Nastran base directory (MSC_BASE).  Not all PATH=3 options are available using this default path option.

#### STOP

STOP is an optional item. STOP is used to prevent execution of Dytran or prevent execution of MSC Nastran after IFP if so desired. The various options are as follows:

#### STOP=1

If STOP=1 MSC Nastran will gracefully stop after IFP.  This option is used to prevent MSC Nastran from performing its own solution (normally used when the solution is performed with ID=129).  

#### STOP=3

STOP=3 MSC Nastran is stopped after IFP and Dytran is not executed. This would be the normal STOP option if the user wants to examine the intermediate input file, make some changes and then execute Dytran manually.

The following files are potentially affected by the COPYR option:

#### NP(or DMP700)=the Number of Processors

NP(or DMP700)=the number of processors  (domains) for parallel processing. The default is one. In order to use more than one domain, MPI, Lam, POE, or whatever parallel program is needed must be properly installed on all computers involved and a hostfile designating which computers are to be used for each domain must have been setup prior to running the job.  If NP>1, PATH=3 is used and a file named sol700.pth is located in the same directory as the MSC Nastran input data. The sol700.pth file should contain all commands necessary to run in parallel.  This file must have execute permissions.

```text
┌────────────┬────────────────────────────────────────────┐
│ Item       │ Case Control Commands Available in SOL 700 │
├────────────┼────────────────────────────────────────────┤
│ $          │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ BCONTACT   │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ BEGIN BULK │ Y (Other BEGIN forms are not allowed)      │
├────────────┼────────────────────────────────────────────┤
│ DLOAD      │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ ECHO       │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ ENDTIME    │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ ENDSTEP    │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ IC         │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ LOADSET    │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ $S700      │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ SET        │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ SPC        │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ TITLE      │ Y                                          │
├────────────┼────────────────────────────────────────────┤
│ TSTEP      │ Y (Same as )                               │
├────────────┼────────────────────────────────────────────┤
│ TSTEPNL    │ Y                                          │
└────────────┴────────────────────────────────────────────┘
```

The following summarizes the Bulk Data entries for SOL 700:

```text
┌─────────┬────────────────────────────────────────────────┬─────────────┐
│ Item    │ Bulk Data Entries Available in SOL 700         │ Fatal Error │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ ABINFL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ ATBACC  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ ATBJNT  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ ATBSEG  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BARRIER │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCBODY  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCBODY1 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCBOX   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCELIPS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCGRID  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCMATL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCONECT │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCONPRG │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCONPRP │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCPROP  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCSEG   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCTABL1 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BCTABLE │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BIAS    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BJOIN   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ BSURF   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CBAR    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CBEAM   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CDAMP1  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CDAMP1D │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CDAMP2  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CDAMP2D │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CELAS1  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CELAS1D │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CELAS2  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CELAS2D │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CHEXA   │ Y(8 Nodes only)                                │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CMARKB2 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CMARKN1 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ COHFRIC │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ COMPUDS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CORD1C  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CORD1R  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CORD1S  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CORD2C  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CORD2R  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CORD2S  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CORD3R  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ COUCOHF │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ COUOPT  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ COUP1FL │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ COUPINT │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ COUPLE  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CPENTA  │ Y(5 Nodes only)                                │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CQUAD4  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CROD    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CSPR    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CTETRA  │ Y (4 Audio Nodes only)                         │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CTRIA3  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CTUBE   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CVISC   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ CYLINDR │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ DAREA   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ DETSPH  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ DLOAD   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ DYFSISW │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ DYPARAM │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ ENDDATA │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ ENDDYNA │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSDEF  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSGAM  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSIG   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSJWL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSMG   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSNA   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSPOL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSTAIT │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EOSUDS  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EULFOR  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EULFOR1 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ EULFREG │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FAILJC  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FAILMPS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FAILUDS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FFCONTR │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FLOW    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FLOWC   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FLOWDEF │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FLOWT   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FLOWUDS │ N                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FORCE   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FORCE2  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ FORCUDS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ GBAG    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ GBAGCOU │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ GRAV    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ GRDSET  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ GRID    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ HEATLOS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ HGSUPPR │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ HTRCONV │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ HTRRAD  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ HYDSTAT │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ INCLUDE │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ INFLCG  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ INFLFRC │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ INFLGAS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ INFLHB  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ INFLTNK │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ INFLTR  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ INITGAS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ LOAD    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ LEAKAGE │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ LSEQ    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MAT1    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MAT2    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MAT8    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATBV   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATDEUL │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATEP   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATF    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATFAB  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATHE   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATORT  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATRIG  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MATVE   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MESH    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MOMENT  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ MOMENT2 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ NLOUTUD │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PBAR    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PBARL   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PBEAM   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PBEAML  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PBELT   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PCOMP   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PDAMP   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PELAS   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PELAS1  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PERMEAB │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PERMGBG │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PEULER  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PEULER1 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PLOAD   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PLOAD2  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PLOAD4  │ Y (Continuation supported)                     │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PMARKER │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PMINC   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PORFCPL │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PORFGBG │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PORFLOW │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PORFLWT │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PORHOLE │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PORHYDS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PORUDS  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PROD    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PSHELL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PSHELL1 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PSOLID  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PVISC   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ PVISC1  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ RBE2    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ RBJOINT │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ RELEX   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ RFORCE  │ (CID, METHOD, continuation line not supported) │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ SHREL   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ SHRPOL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ SHRUDS  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ SPC     │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ SPC1    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ SPCADD  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ SPHERE  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ SURFINI │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TABLED1 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TABLUDS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TIC     │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TIC3    │ Y (New Dytran type entry)                      │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TICEL   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TICEUDS │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TICEUL1 │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TICREG  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TICVAL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TLOAD1  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TLOAD2  │ N                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TODYNA  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TSTEP   │ Y (Changed to TSTEPNL)                         │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ TSTEPNL │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ WALL    │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ WALL    │ Y (New rigid wall entry)                       │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDHY   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDJC   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDMSS  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDPOL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDRPL  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDSG   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDTM   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDUDS  │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDVM   │ Y                                              │             │
├─────────┼────────────────────────────────────────────────┼─────────────┤
│ YLDZA   │ Y                                              │             │
└─────────┴────────────────────────────────────────────────┴─────────────┘
```
