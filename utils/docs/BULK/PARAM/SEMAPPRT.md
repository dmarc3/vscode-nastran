## [SEMAP,  SEMAPOPT, SEMAPPRT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SEMAP.SEMAPOPT.SEMAPPRT.xhtml)

SEMAP Default    = SEMAP 
 
 
SEMAPOPT Default    = 42 
 
 
SEMAPPRT Default    = 3

The superelement map (SEMAP table) contains several lists useful for determining how the program has partitioned superelement models.  It is printed automatically each time this table is generated.  It consists of three major parts:

```text
┌─────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ GPM │ The Grid Point Map contains a list of each grid point, its interior superelement placement, and  │
│     │ the SElD of all grid points connected directly to it by elements.  Three tables follow that      │
│     │ summarize the connectivity between superelements, sorted on grid point sequence, SElD, and the   │
│     │ number of connections.                                                                           │
├─────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ISM │ The Individual Superelement Map lists the interior grid points, exterior grid and scalar points, │
│     │ elements, and time and storage space estimates for each superelement.                            │
├─────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SDT │ The Superelement Definition Table contains the SEID of every superelement in the model, the      │
│     │ processing order, and a pictorial representation of the superelement tree.                       │
└─────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
SEMAP, SEMAPOPT, and SEMAPPRT are used to control the amount of output that is printed and other special features. The possible values for SEMAP are shown in the following table.

```text
┌─────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ SEMAP Value │ Output and Application                                                                            │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEMAP       │ ISM, SDT.  The lengthy GPM is suppressed.  This is the appropriate value for use after the model  │
│ (Default)   │ is stable and only minor changes are to be made.                                                  │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEMAPALL    │ GPM, ISM, SDT.  All tables are printed.  This value is useful on the initial debug run of a model │
│             │ and when making extensive modeling changes.                                                       │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEMAPCON    │ Only the summary tables of the GPM and the estimation data is output.   This is a useful value    │
│             │ when iterating to an economic partitioning scheme for large, complex models.                      │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEMAPEST    │ Only the estimation data is printed.  This is useful when evaluating several alternative          │
│             │ partitioning schemes.                                                                             │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEMAPPUN    │ No output is printed.  The exterior grid points of the superelement with a SEID that is input on  │
│             │ SEMAPOPT are placed on a CSUPER entry image on the PUNCH file, allowing the superelement to be    │
│             │ used as an external superelement.  If SEMAPOPT > 0, the superelement entry is given an SSID of    │
│             │ SEMAPOPT.  If SEMAPOPT < 0, the exterior points listed are those of the residual structure, but   │
│             │ the CSUPER entry is given an SSID of |SEMAPOPT|.                                                  │
└─────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
Other special features are available with parameters SEMAPOPT and SEMAPPRT.  They are fully described under parameters OPT1 and OPT2 in the description of the TABPRT module in the    MSC Nastran DMAP Programmer’s Guide  .

If the default value of SEMAP is used, the other two parameters may be used to further refine this output, as described in    MSC Nastran DMAP Programmer’s Guide    under the TABPRT module description.  The printing of the SEMAP table can be avoided by the use of PARAM,SEMAPPRT,-1.

PARAM,SEMAPPRT,99 requests the printout of the SLIST (superelement processing list) and the DRLIST (superelement data recovery list).

