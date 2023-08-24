## [ENFMETH](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ENFMETH.xhtml)

Default = TOTAL or ABS

This parameter controls the  solution method  when dynamic enforced motion analysis via SPC/SPCD is used in SOLs 108, 109, 111, 112, 146 and 200.

The total solution of a dynamic enforced motion analysis using SPC/SPCD can be regarded as a combination of a static enforced motion solution (similar to what is done in SOL 101) and a dynamic enforced motion solution that is relative to this static-based solution.  The default value of TOTAL/ABS implies that the program solves directly,  in one step , for the TOTAL solution of the dynamic analysis which includes both the static-based solution and the dynamic solution that is relative to the static-based solution.  If the value is specified as REL, then the program obtains the total solution of the dynamic analysis  in two steps , by first solving for the static-based solution and then solving separately for the dynamic solution RELATIVE to the static-based solution. In general, the TOTAL/ABS and REL solution methods both yield essentially the same results.

The TOTAL/ABS solution method is computationally more efficient. This is also the only method that is meaningful and that should be employed when a problem involves the use of NOLINi or NLRGAP entries.  An important point to note regarding this method is that, for modal dynamic analysis, residual vectors are absolutely critical in order for this method to get correct answers.

The REL solution method, though less efficient, may be more accurate for transient solutions and for modal frequency response solutions at very low forcing frequencies. Also, for modal dynamic analysis, this method is not as critically dependent on residual vectors as the TOTAL/ABS solution method. In addition, the current implementation of the REL solution method does not support fluid DOFs with enforced motion.  So, if fluid DOF are among the DOFs with enforced motion, the job will be switched to the ABS solution method automatically.

It should be emphasized here that PARAM,ENFMETH and PARAM,ENFMOTN are completely separate, distinct and independent of each other and should not to be confused with each other.  The former controls the  solution method  when dynamic enforced motion analysis via SPC/SPCD is used while the latter controls how the results of such an analysis are  output .

