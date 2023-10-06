## [S1, S1G, S1M](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.S1.S1G.S1M.xhtml)

Default    = -1

The MAXMIN Case Control command offers more features with much greater efficiency. PARAM,S1i,+1 requests the sorting and/or filtering of the element stresses selected on the DTI,INDTA entry. Stresses in the element coordinate systems (S1), at grid points (S1G), and/or in material coordinate systems (S1M) based on the parameters BIGER, NUMOUT, SRTOPT, and SRTELTYP may be requested.  The S1G and S1M options also require the presence of PARAM,CURV,1.

    See link for table.

NUMOUT, in conjunction with BIGER, controls the amount of stress output.

NUMOUT2 and BIGER2 serve the same function as NUMOUT and BIGER except that they apply only to composite element failure indices and do not require PARAM,S1i,+1. Similarly, NUMOUT3 and BIGER3 are used for composite strength ratio.

1. NUMOUT = +N requests that N element stresses be printed (or punched) for each element type.

2. NUMOUT=0 outputs all elements in a group when one or more exceeds BIGER. Some of the elements will have stresses small than BIGER. This is conceptually the same as describing an element set in case control, and limiting output in this manner. Stress files obtained with element group filtering may be used for xy plotting and other postprocessor options with DMAP alters.  By contrast, the stress file when NUMOUT = -2 is more discontinuous, and may not be used for xy plotting.

3. NUMOUT = 0 does not sort but filters according to BIGER by element group. In static analysis an element group is defined as all case control selected elements for a given load case for SORT1 output. For SORT2 output an element group is defined as the data for a given element type for all load cases. In transient analysis an element group is defined as all case control selected elements at a given time for SORT1 output. For SORT2 output an element group is defined as the data for a given element at all time steps. The element group option applies only to output types described above for PARAM,S1. This option is not available with output types selected by PARAMs S1G and S1M.

4. NUMOUT = -1 requests that stresses be sorted and only those stresses with an absolute value that is greater than BIGER will be output.

5. NUMOUT = -2 (the Default) does not sort but filters according to BIGER.  Related parameters include BIGER, NOELOF, NOELOP, and NOGPF.

6. NUMOUT2  = -3 outputs the maximum value of Failure Index for each element.

BIGER controls the elements for which stresses will be printed.  Elements with stresses that are smaller in absolute value than BIGER will not be output.  The quantity tested is element type dependent.  Related parameters include CURV, NUMOUT, S1, S1G, and S1M.  SRTOPT controls the scanning option to be performed.

* 0 = Filter/sort on maximum magnitude.
* 1 = Filter/sort on minimum magnitude.
* 2 = Filter/sort on maximum algebraic value.
* 3 = Filter/sort on minimum algebraic value.


SRTELTYP controls the element type to be processed, as described in the following table.

* \>0 = All element types will be processed.
* \> 0 = Only element type SRTELTYP will be processed.

NUMOUT1 and BlGER1 serve the same function as NUMOUT and BIGER except that they apply only to composite element stresses and do not require PARAM,S1i,+1.

NUMOUT2 and BIGER2 serve the same function as NUMOUT and BIGER except that they apply only to composite element failure indices and do not require PARAM,S1i,+1.

