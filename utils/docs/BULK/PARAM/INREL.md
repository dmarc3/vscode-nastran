## [INREL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.INREL.xhtml)

Default    = 0

INREL controls the calculation of inertia relief or enforced acceleration in linear static analysis and buckling. INREL = -1, -2, or -4 requests that inertia relief or enforced acceleration be performed.

For INREL= -1 and -2, enforced accelerations, if desired, are input on the DMIG,UACCEL Bulk Data entry. (See Section 7.2 of the  MSC Nastran Reference Guide  for the theoretical basis.)

Inertia Relief is not currently supported with external superelements and in the contact analysis.


```text
┌────┬─────────────────────────────────────────────────────────┐
│ -1 │ SUPORT or SUPORT1 entries are required on one or more   │
│    │ grid points in the Bulk Data Section which restrain     │
│    │ rigid body motion. The total number of degrees-of-      │
│    │ freedom specified on SUPORT and SUPORT1 entries must be │
│    │ less than or equal to six.                              │
├────┼─────────────────────────────────────────────────────────┤
│    │ In SOL 105, SUPORT1, not SUPORT, Bulk Data entries must │
│    │ be used to define the supported degrees-of-freedom and  │
│    │ the SUPORT1 Case Control command may only be specified  │
│    │ in a separate static subcase.                           │
├────┼─────────────────────────────────────────────────────────┤
│    │ Loads due to unit rigid body accelerations at the point │
│    │ referenced by PARAM,GRDPNT are computed and then        │
│    │ appended to the external loads. If PARAM,GRDPNT is      │
│    │ specified in superelement analysis, then the point must │
│    │ be interior to the residual structure and exterior to   │
│    │ all superelements.                                      │
├────┼─────────────────────────────────────────────────────────┤
│ -2 │ The value of PARAM,INREL,-2 will provide an inertia     │
│    │ relief analysis without the use of SUPORTi entries. To  │
│    │ use this capability the structure must contain six and  │
│    │ only six rigid body degrees of freedom. SUPORTi entries │
│    │ must not be present when using this option. If the      │
│    │ structure has either more or less then six rigid body   │
│    │ degrees of freedom, the analysis will either fail or    │
│    │ give incorrect results.                                 │
├────┼─────────────────────────────────────────────────────────┤
│ -4 │ SUPORT or SUPORT1 entries are required on one or more   │
│    │ grid points in the Bulk Data Section which restrain     │
│    │ rigid body motion. Any number of degrees-of-freedom may │
│    │ be specified on SUPORT and SUPORT1 entries. With this   │
│    │ method, the mass matrix is reduced which will increase  │
│    │ CPU requirements over PARAM,INREL,-1 and -2. The        │
│    │ INREL=-4 method is a general approach and is capable of │
│    │ handling mechanisms and unconstrained problems. It is   │
│    │ also capable of handling problems that have possible    │
│    │ rigid body motion in selected directions.               │
│    │                                                         │
│    │ The INREL=-1 and -2 methods are more efficient          │
│    │ implementation but are limited to six or less supported │
│    │ degrees-of-freedom because those methods can only       │
│    │ handle problems that are fully unconstrained (that is,  │
│    │ those with no constraints preventing rigid body motion  │
│    │ of any kind and whose model does not contain            │
│    │ mechanisms).                                            │
└────┴─────────────────────────────────────────────────────────┘
```
