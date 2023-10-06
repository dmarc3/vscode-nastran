## [SPARSESOLVER](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.SPARSESOLVER.xhtml) - Sparse Solver Options

Specifies options used in sparse solution of equations operations.

#### Format:

![executive00711.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00711.jpg?_LANG=enus)  

#### Examples:

1. For the READ module, specify METIS reordering, and for the FRRD1 module, specify the UMFLU factorization method:

     ```nastran
     SPARSESOLVER READ (ORDMETH=METIS) 
     ```

     ```nastran
     SPARSESOLVER FRRD1 (FACTMETH=UMFLU)
     ```

2. Request matrix diagonal term ratio output:

     ```nastran
     SPARSESOLVER DCMP ( MDTRATIO )
     ```

3. Request matrix diagonal term ratio output in chart format for translational DOFs, and limit the number of printed diagonal ratios to 50:

     ```nastran
     SPARSESOLVER DCMP ( MDTRATIO=(CHART,TABLET,NMAXRATT=50) )
     ```

4. Request Matrix Diagonal Term statistics output for:
     - Chart format for translational and rotational DOF
     - Table format for translational dof limited to largest 10 terms greater than 1.0E+08
     - Table format for translational dof limited to smallest 20 terms smaller than 1.0
     - Table format for rotational dof limited to smallest 30 terms smaller than 100.0

     ```nastran
     SPARSESOLVER DCMP (MDTSTATS=(CHART,TABLET,NMAXVALT=10, MAXVALT=1.0E+08, NMINVALT=20, MINVALT=1.0,TABLER, NMINVALR=30, MINVALR=100.00))
     ```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ target    │ The target application for the options. The target application choices are: CEAD, DCMP, DECOMP,   │
│           │ MDSTAT, NLSOLVE, READ, SOLVE, FRRD1, and TRD1.                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ cmeth     │ Compression method to be used (Default = GRID). The choices for compression method are: GRID,     │
│           │ SUPER, GRDSUPER and NONE.                                                                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ometh     │ Ordering method to be used (Default = Automatic). The choices for ordering method are: AMF, BEND, │
│           │ MD, METIS, MMD, PRDMD, PRDMETIS, PRDSMPMS, and NONE. The default automatically selects among      │
│           │ METIS, MMD and BEND                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ fmeth     │ Factorization method to be used. The choices for factorization method are: MSCLDL, MSCLU, UMFLU,  │
│           │ NUMFLU, PRDLDL, PRDLU, MUMPS, and MUMPSBLR.  For default factorization methods, see Remarks       │
│           │ 18.-25. below.                                                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ No output is to be produced for the keyword.                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ The keyword applies to translational DOF only.                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ R         │ The keyword applies to rotational DOF only.                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nsegs     │ Number of bars to be used in chart (Default = 0).                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nratios   │ Number of diagonal term ratios to be included in table (Default = 25).                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ maxratio  │ Diagonal term ratio above which ratios are included in the table (Default = 1.0E+5).              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRID      │ Table output is sorted on GRID ID and component code.                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALUE     │ Sort table output on term values.                                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH      │ Table is output once sorted on GRID ID and once on term value.                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nmax      │ Number of largest values to print (Default = 25).                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nmin      │ Number of smallest values to print (Default = 25).                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ vmax      │ All terms larger than vmax are printed (Default = 1.0E+10).                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ vmin      │ All terms smaller than vmin are printed (Default = 1.0).                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ blrtol    │ MUMPS Block Low Rank drop tolerance (Default=1.0E-8).                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ nrefine   │ Number of iterative refinement steps for the MUMPS BLR solver option (default=0).                 │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All of the keywords for the target application must be enclosed in parentheses.
2. The following table correlates target applications with available factorization methods.

```text
┌────────┬────────┬───────┬───────┬────────┬────────┬───────┬───────┐
│ Module │ MSCLDL │ MSCLU │ UMFLU │ NUMFLU │ PRDLDL │ PRDLU │ MUMPS │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ CEAD   │ Yes    │ Yes   │ No    │ Yes    │ No     │ Yes   │ No    │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ DCMP   │ Yes    │ Yes   │ No    │ No     │ Yes    │ No    │ Yes   │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ DECOMP │ Yes    │ Yes   │ No    │ No     │ No     │ No    │ No    │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ FRRD1  │ Yes    │ Yes   │ Yes   │ No     │ No     │ Yes   │ No    │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ MDSTAT │ Yes    │ Yes   │ No    │ No     │ No     │ No    │ No    │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ NLSOLV │ Yes    │ Yes   │ No    │ No     │ Yes    │ No    │ Yes   │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ READ   │ Yes    │ No    │ No    │ No     │ No     │ No    │ No    │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ SOLVE  │ Yes    │ Yes   │ No    │ No     │ No     │ No    │ No    │
├────────┼────────┼───────┼───────┼────────┼────────┼───────┼───────┤
│ TRD1   │ Yes    │ Yes   │ Yes   │ No     │ No     │ No    │ No    │
└────────┴────────┴───────┴───────┴────────┴────────┴───────┴───────┘
```

3. More than one SPARSESOLVER entry may be used, so that one may specify different options for different target modules.
4. System cell 206 can specify both a reordering method and a compression method by adding the respective values. For example, to specify GRDSUPER compression method with BEND reordering, SYSTEM(206) would be set to 68 (since 64+4=68). Or, to specify SUPER compression with METIS reordering, SYSTEM(206) would be set to 136 (since 128+8=136).
5. Note that SYSTEM(166), SYSTEM(206) and SYSTEM(209) have precedence over the SPARSESOLVER command, whether set on the submittal line or in DMAP.
6. System cell 166 can also be used to turn on extra diagnostic output from the sparse factorization by setting SYSTEM(166)=2.
7. The UMFLU factorization method ignores COMPMETH and ORDMETH since it contains its own compression/reordering method.
8. The matrix diagonal term ratio (MDTRATIO) and value (MDTSTATS) keywords and options are used only by the DCMP target application. They will be ignored by other target applications.
9. The MDTRATIO and MDTSTATS keywords apply to both translational and rotational degrees of freedom unless modified by the T or R describer. Separate output is produced for each of the translational and rotational degrees of freedom in the matrix.
10. The MDTRATIO and MDTSTATS CHART option default produces a chart of values contained in powers of ten bandwidths. A specification for the nsegs describer causes the bandwidth to be internally computed to produce nsegs bars. Bars are produced for the bandwidths only if they contain terms.
11. MDTRATIO and MDTSTATS keywords are processed in the order given. It is possible for a keyword to modify the effects of a previously processed keyword. For example, the combination CHART, CHARTR=5 produces different outputs compared to CHARTR=5, CHART.
12. The MDTRATIO NMAXRAT describer limits the content of the TABLE output to the specified highest number of diagonal ratios that exceed the value of the MAXRAT describer.
13. MDTSTATS generates output for matrix diagonal term values. For the TABLE option, it produces a table containing the NMINVAL=nmin smallest terms smaller than MINVAL=vmin as well as the NMAXVAL=nmax largest terms larger than MAXVAL=vmax.
14. The ORDMETH option must be one of PRDMD, PRDMETIS, or PRDSMPMS for PRDLDL and PRDLU.
15. The COMPMETH option is ignored for PRDLDL and PRDLU.
16. The DOMAINSOLVER (RUNOPT=MULTIPAR) option is not supported with PRDLDL or PRDLU.
17. For PRDLDL and PRDLU, if there is not sufficient memory for an in-core solver, then an out-of-core solver will be attempted and performance will be negatively affected.
18. The following special rules apply for PRDLDL for NLSOLV:
     - The maximum number of threads used is given by DMP*SMP, and PRDLDL will choose a number of threads, up to this maximum, most suitable to the problem size.
     - PRDLDL is supported only when FNT or PFNT method is used for nonlinear iteration (KMETHOD of NLPARM or NLSTEP).
     - If the problem fails to converge with PRDLDL, then add MDLPRM,LMT2MPC,1 to the bulk data section in order to convert Lagrange multipliers to MPCs.
19. The following special rules apply for PRDLDL for DCMP:
     - DMP is not supported for PRDLDL for DCMP as it only gets parallelism from SMP
     - PRDLDL automatically provides parallelization over multiple RHSs with SMP.
     - If PRDLDL encounters a zero pivot issue (SFM 11332), the user should rerun with bulk data entry MDLPRM,PRDMTYPE,-2 to have Intel MKL Pardiso regard the matrix as indefinite, and entry MDLPRM,PRDWMTCH,0 in order to turn off weighted matching.
20. The following special rules apply for PRDLU for CEAD:
     - PRDLU is only supported for the CLAN option within CEAD (refer to CMETHOD option).
21. The following special rules apply for PRDLU for FRRD1:
     - The Krylov solver is not supported with PRDLU for FRRD1.
     - DMP is supported for PRDLU for FRRD1.
     - MKL Pardiso is not supported in the uncoupled solution algorithm for FRRD1.
     - MKL Pardiso is the default solver for FRRD1 except for the following cases:
          * SOL 111 symmetric solution without frequency dependence, in which case MSCLDL is used.
          * Iterative solver specified by user.
22. For CEAD, the default solver matrix decomposition is PRDLU(Pardiso).
23. User specified factorization method (fmeth) via SPARSESOLVER entry or SYSTEM(209) may be overwritten automatically due to matrix type or symmetry by MSC Nastran.
24. Several options for Intel MKL Pardiso are controlled using the   bulk data entry. See the PRD* parameters detailed in the MDLPRM section.
25. Mumps sparse direct solver with DCMP and NLSOLV module is currently supported in SOL 101 only.
