## [STIME](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.STIME.xhtml)

Default = 0.0 (SOLs 109, 112, 129 and 159 only)

In restarts from previous transient analysis runs, the user provides STIME = t N  where t N  is the last time step of the subcase to be continued with a new or changed subcase in the new run.  Thus, the loading and printout will start from t N  as though the original run contained the new subcase data.

In SOLs 109 and 112 restarts from previous SOLs 109 and 112 runs, STIME is used to specify the proper starting time of the restart run.  If STIME exceeds the last output time of the previous run, the starting time is assumed to be the last output time.  Otherwise, the starting time is assumed to be the output time of the previous run (not necessarily the last output time) that is closest to STIME.  In other words, the starting time of the restart run need not be the last output time of the previous run, but may be any time earlier than that.  The program informs the user that it is a restart run and indicates the starting time (determined as above) that is used for the restart run.

In SOLs 109 and 112 restarts, the user must ensure that the model and the constraints as well as the subcase setup in the restart run are the same as those in the previous run.  The user may, however, specify different TSTEP and DLOAD requests in Case Control and also different TSTEP and dynamic loading entries in the Bulk Data compared to the previous run.  The loading and the results output from the restart run will start from the new starting time.

> 1.The responsibility for ensuring that the model and the constraints as well as the subcase setup in the restart run are the same as those in the previous run is left to the user; the program does not check for this condition.  If this condition is not met, the program may terminate the execution with a fatal error or give erroneous results.

> 2.Restarts in SOLs 109 and 112 using STIME > 0.0 are supported only for applied loads, not for SPC/SPCD enforced motion. If this usage is violated, the program terminates the execution with an appropriate fatal message.
