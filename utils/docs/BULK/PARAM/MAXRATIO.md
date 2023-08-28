## [MAXRATIO](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MAXRATIO.xhtml)

Default    = 1.E7

The ratios of terms on the diagonal of the stiffness matrix to the corresponding terms on the diagonal of the triangular factor are computed.  If, for any row, this ratio is greater than MAXRATIO, the matrix will be considered to be nearly singular (having mechanisms). If any diagonal terms of the factor are negative, the stiffness matrix is considered implausible (non-positive definite). The ratios greater than MAXRATIO and less than zero and their associated external grid identities will be printed out. The program will then take appropriate action as directed by the parameter BAILOUT.

By default, in the superelement solution sequences the program will terminate processing for that superelement.  A negative value for BAILOUT directs the program to continue processing the superelement.  Although forcing the program to continue with near-singularities is a useful modeling checkout technique, it may lead to solutions of poor quality or fatal messages later in the run. It is recommended that the default values be used for production runs. A related parameter is ERROR.

The value -1 of BAILOUT causes the program to continue processing with near singularities and a zero value will cause the program to exit if near singularities are detected.

In SOLs 101 through 200 when PARAM,CHECKOUT,YES is specified, PARAM,MAXRATIO sets the tolerance for detecting multipoint constraint equations with poor linear independence. (See  Superelement Analysis  in  the MSC Nastran Reference Guide .)

BAILOUT and MAXRATIO may be specified in the Case Control Section in order to provide different values between superelements but not between different boundary conditions.

