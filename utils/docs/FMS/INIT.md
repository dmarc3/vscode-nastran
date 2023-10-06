## [INIT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.INIT.xhtml) - Creates a DBset

Creates a temporary or permanent DBset. For the SCRATCH and MASTER DBsets, all or some of their space may be allocated to real memory.

#### Format 1:  Initialize any DBset except MASTER and SCRATCH:

```nastran
INIT     DBset-name     [   LOGICAL=(log-namei(max-sizei),...)     BUFFSIZE=b     CLUSTER=c   ]
```

#### Format 2:  Initialize the MASTER DBset:

![fms00655.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00655.jpg?_LANG=enus)  LOGICAL = (log-name(max-sizei), ...),

```nastran
BUFFSIZE = b   CLUSTER = c ]
```

#### Format 3:  Initialize the SCRATCH DBset:

![fms00657.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00657.jpg?_LANG=enus)  LOGICAL = (log-name(max-sizei), ...),

```nastran
SCR300 = (log-namei(max-sizei),...)   BUFFSIZE = b   CLUSTER=c  ]
```

#### Example:

1. Modify the default allocation of the DBALL DBset to 50000 blocks:

```nastran
INIT DBALL LOGI=(DBALL(50000))
```

2. Do not allocate any real memory for the MASTER and SCRATCH DBsets:

```nastran
INIT    MASTER(NORAM)
INIT    SCRATCH(NOMEM)
```

3. Create a new DBset called DBUP with two members DBUP1 and DBUP2:

```nastran
INIT
DBUP LOGI=(DBUP1, DBUP2)
ASSIGN
DBUP1 =’physical filename 1’
ASSIGN
DBUP2=’physical filename 2’
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ dbset-name │ The name of a temporary or permanent DBset.                                                        │
│ MASTER     │                                                                                                    │
│ SCRATCH    │                                                                                                    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ log-namei  │ Specifies the logical name of a DBset member. log-namei may also be referenced on an ASSIGN        │
│            │ statement, which refers to the physical file name of the DBset member. If no log-namei is          │
│            │ specified, then the DBset will have one member and the log-name will be the same as the DBset-     │
│            │ name. A maximum of twenty log-names may be specified. For the SCRATCH DBset, see also Remark       │
│            │ 8. SCR300 is a special keyword that indicates that the log-names are members reserved for DMAP     │
│            │ module internal scratch files.                                                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ max-sizei  │ Specifies the maximum size, in blocks, words, or bytes, of a DBset member. For storage units       │
│            │ specified in words or bytes, the size must be followed by one of the following unit keywords:      │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│            │ For example, 100MB = 100 megabytes, 1.5GB = 1.5 gigabytes = 1536 megabytes, and 2.5M = 2.5         │
│            │ megawords = 2560 kilowords. The size of a block in words is defined by BUFFSlZE. The default for   │
│            │ DBALL and SCRATCH may be found in the  and ranges from 250,000 blocks to 4,000,000 blocks.         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RAM NORAM  │ RAM=r requests that r words of real memory are to be allocated for the MASTER DBset. See the       │
│            │ nast20223 Command in the MSC Nastran Reference Guide. The default is RAM or RAM=30000. NORAM or    │
│            │ RAM=0 specifies that no real memory is to be allocated.                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ S          │ If the primary database is being created in the run, this option requests that all DBsets in the   │
│            │ primary database will be automatically deleted at the end of the run. INIT MASTER(S) is equivalent │
│            │ to specifying scr = yes on the “nastran” statement. See Executing MSC Nastran, 1. If the run is a  │
│            │ restart, then this option is ignored.                                                              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MEM NOMEM  │ MEM=m specifies that m blocks of real memory are to be allocated for the SCRATCH DBset. See The    │
│            │ NASTRAN Statement (Optional) (p. 13) in the MSC Nastran Reference Guide. The default m is machine  │
│            │ dependent and may be found in the . NOMEM or MEM = 0 requests that no real memory is to be         │
│            │ allocated.                                                                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BUFFSlZE   │ BUFFSlZE = b specifies the number of words per block in the DBset and will override the value      │
│            │ specified by the BUFFSlZE keyword on the NASTRAN statement. The default for b is obtained from the │
│            │ NASTRAN BUFFSIZE statement.                                                                        │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CLUSTER    │ CLUSTER = c specifies the number of blocks per cluster in the DBset. The default is 1, and any     │
│            │ other value is not recommended.                                                                    │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The INIT statement and its applications are further discussed in    in the MSC Nastran Reference Guide .
2. Four DBsets are predefined and automatically allocated by the program. Their DBset-names are MASTER, DBALL, SCRATCH, and OBJSCR, and they are described in    in the MSC Nastran Reference Guide .
3. On all computers with dynamic file allocation, the physical filename of a DBset member may specified on an ASSIGN statement:

     ```nastran
     ASSIGN log-name = ’physical filename’
     ```

     If an ASSIGN statement is not specified for the member, then a name is automatically assigned. The naming convention is described in   Database Concepts    in the MSC Nastran Reference Guide .

4. It is recommended that there be sufficient physical space to hold a DBset member should it reach its maximum size (max-sizei). The max-sizei may be converted to words by multiplying by b. A summary of space usage and allocation is printed at the end of the execution summary table.
5. In restart runs, the INIT statement is ignored for preexisting permanent DBsets. The INIT statement is intended to be specified only in the run in which the DBset is being created. If more DBset members need to be added to the DBset, then the EXPAND statement is used.
6. If RAM or RAM   =   r is specified and the run terminates because the computer operating system detects insufficient space or time, or the computer halts due to a power outage or operator interruption, then it may not be possible to restart from the database. See the DBUPDATE FMS statement.
7. BUFFSIZE   =   b and CLUSTER   =   c must satisfy the following inequality:

![fms00662.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00662.jpg?_LANG=enus)  

8. By default, the SCRATCH DBset is divided into two partitions: LOGICAL and SCR300. The LOGICAL partition, log-names after the LOGICAL keyword, are reserved for DMAP scratch data blocks, and the SCR300 partition for DMAP module internal scratch files.
     - The maximum total number of log-names for LOGICAL and SCR300 is 20. For example, if LOGICAL has 8 log-names, then SCR300 can have no more than 12 log-names.
     - If NASTRAN SYSTEM(142)   =   1 is specified, then the SCR300 partition is not created and internal scratch files, along with DMAP scratch data blocks, will reside on the LOGICAL partition. The default is SYSTEM(142)   =   2.
     - If NASTRAN SYSTEM(151)=1 is specified and the LOGICAL partition has reached its maximum size, then the SCR300 partition will be used. The default is SYSTEM(151)   =   0.
     - By default, the space specified for the SCR300 partition is released to the operating system after each DMAP module is executed if the module used more than 100 blocks for internal scratch files. If 100 blocks is not a desirable threshold, then it may be changed by specifying NASTRAN SYSTEM(150)   =   t, where t is the number of blocks for the threshold.
9. BUFFSlZE   =   b is predefined for DBset-names MSCOBJ, OBJSCR, and USROBJ and may not be changed by BUFFSIZE on this statement or if the NASTRAN BUFFSlZE=bmax statement (see    MSC Nastran Reference Guide ). The default for b is recommended for all except very large problems. bmax must reflect the maximum of b specified for all DBsets attached to the run, including the delivery database. See    for the defaults of b and bmax.
10. If INIT MASTER(RAM   =   r) and INIT SCRATCH(MEM   =   m) are specified, then BUFFSIZE for these DBsets must be the same. If not, a warning message is issued, and the BUFFSlZE for the SCRATCH DBset is reset to that of the MASTER DBset.
11. Only one INIT statement per dbset-name may be specified in the File Management Section.
