## [ENFMOTN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ENFMOTN.xhtml)

Default = TOTAL or ABS

This parameter controls how the results of the analysis are  output  when dynamic enforced motion analysis via SPC/SPCD is used in SOLs 108, 109, 111, 112, 146 and 200.

The total solution of a dynamic enforced motion analysis using SPC/SPCD can be regarded as a combination of a static enforced motion solution (similar to what is done in SOL 101) and a dynamic enforced motion solution that is relative to this static solution.  The default value of TOTAL/ABS implies that the output results of the analysis represent the TOTAL solution of the dynamic analysis which includes both the static solution and the dynamic solution that is relative to this static solution.  If the value is specified as REL, then the output results represent the dynamic solution RELATIVE to the static solution.

It should be noted that, in general, the static solution mentioned above may  not  be a stress-free solution.  Therefore, in general, the usage of PARAM,ENFMOTN,TOTAL (or ABS) and PARAM,ENFMOTN,REL in an SPC/SPCD enforced motion analysis may give  different results not only for displacements, but also for stresses.

In general, it is not easy to identify all cases wherein the static solution represents a stress-free solution.  However, one can give examples of such cases.

Thus, for instance, if the SPC/SPCD enforced motion is specified at a single grid point and there are no constraints at any other grid point, then the static solution will be a stress-free solution.

Similarly, if the SPC/SPCD enforced motion is specified at more than one grid point for a specific grid point component, but the magnitude and direction of the enforced motion is the same for all of the enforced motion points and there are no other constraints in the model, then all of the enforced motion points will move in unison and the static solution will be a stress-free solution.

In contrast to the above, consider the situation in which the SPC/SPCD enforced motion is specified at more than one grid point for a specific grid point component, but the magnitude and direction of the specified enforced motion is  different  for the various enforced motion points. In this case, the static solution will  not  be a stress-free solution.

If the static solution represents a stress-free solution, then it can be regarded as the base motion of the model.  In such cases, the usage of PARAM,ENFMOTN,TOTAL (or ABS) and PARAM,ENFMOTN,REL will give  different   displacements, but the same stresses.  Further, in modal dynamic analysis for such cases, the results using PARAM,ENFMOTN,TOTAL (or ABS) will give the  same  results as those obtained by using the large mass approach with all zero (or nearly zero) frequency modes included and the results using PARAM,ENFMOTN,REL will give the same results as those obtained by using the large mass approach with all zero (or nearly zero) frequency modes excluded.

If the static solution does  not  represent a stress-free solution, , the usage of PARAM,ENFMOTN,TOTAL (or ABS) and PARAM,ENFMOTN,REL will give  different results not only for displacements, but also for stresses .   In this case, the results from the usage of PARAM,ENFMOTN,REL do not have the same significance as in the case of the stress-free static solution except for the fact that these results represent the dynamic solution RELATIVE to the static solution.

> **Note:** Currently, the usage of PARAM,ENFMOTN,REL is not supported when PARAM,ENFMETH,ABS is specified (or implied). If this usage is employed, the program terminates the execution with an appropriate fatal message.
