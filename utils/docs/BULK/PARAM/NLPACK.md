## [NLPACK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.NLPACK.xhtml)

Default=100

NLPACK is used in the nonlinear solution sequence SOL 400 with ANALYSIS=NLTRAN for transient analysis only.

In transient analysis SOL 400 will pack output data and restart data for NLPACK output time steps together at the last time step as a single data package. For example, if NLPACK=100 (the default), then one data package have output data for 100 output time steps and restart data for the last time step. Later usage such as restart or initial condition for later step can be performed only at data package boundaries. If NLPACK= -1, all output data for a STEP and restart data for end of the STEP are grouped into a single package. In this case, the restart can be performed only at STEP boundaries. NLPACK=0 is illegal. If NLPACK=1, each package of data on the database includes output data for one output time step and restart data. In this case, restart can be performed at every output time step. Please note that the output time step is controlled by the NO field on the Bulk Data entry, or NO filed of FIXED time step control as well INTOUT field of ADAPT time step control in NLSTEP Bulk Data entry. NLPACK also influences the intermediate output selected by NLOPRM.

Please note that NLPACK is based on the number of the output load steps (concerning INTOUT in NLSTEP, and so on), but not the number of the calculated load steps. For example, one NLTRAN analysis has NLSTEP as:

```nastran
NLSTEP,900,0.2
,fixed,2000,20
,mech,u
```

It has total 2000 increments, and asks output every 20 increments. Therefore, total output is 100 time step. In NASTRAN, default value of NLPACK for NLTRAN is 100, in this model, therefore, NASTRAN will write the results to OP2 after collecting 100 output, i.e., this model will write results to OP2 only one time. With intermediate output request, only one OP2 file will be created.

If  NLPACK=1, NASTRAN will write results to OP2 for every output request. In this model, NASTRAN will write results to OP2 for every output request, i.e., writing 100 times in this model. With “intermediate output request, 100 OP2 files will be created.

If  NLPACK=2, NASTRAN will write results to OP2 for every two output requests. In this model, NASTRAN will write results to OP2 for every two output request, i.e., writing 50 times in this model. With "intermediate output request, 50 OP2 files will be created.

