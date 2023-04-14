__**[BCBDPRP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBDPRP.xhtml)**__   -   Contact Body Parameters in SOLs 101 and 400

--------------------------------------------------------------------------------
Defines contact body parameters used in SOLs 101 and 400 only. The parameters
defined here are referenced by the BCBODY1 entry.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCBDPRP         PID             PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    
PARAM4  VAL4    PARAM5  VAL5    -etc.-  


```

--------------------------------------------------------------------------------
```text

Example:
BCBDPRP 90              FRIC    0.05    ISTYP   0       


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
PID             Parameter identification number (Integer > 0).
PARAMi Name of a parameter. Allowable names are given in  Table 9-3
(Character).
Table 9-3   Contact Body Parameters in SOLs 101 and 400
Name Description, Type and Value (Default is 0 for integer, 0.0 for Real Unless
Otherwise  Indicated)
EMISS           Emissivity for radiation to the environment or near thermal
                radiation. (Real or Integer; Default = 0.0) If real, the value
                entered is theemissivity. If Integer, the value entered is the
                ID of a TABLEM1or TABLEM2entry specifying the emissivity vs
                temperature or aTABL3D entryspecifying theemissivity vs
                temperature andpossiblyothervariables.FRICFriction
                coefficient.If the value isan integer,itrepresents theID of a
                TABLEM1, TABLEM2orTABL3D, i.e., atemperature-dependentor multi-
                dimensionaltable. (Real  0.0orInteger > 0;Default = 0.0)
When a grid point contacts a rigid body, the coefficient of friction associated
with the rigid  body is used. When a grid point contacts a deformable body, the
average of the coefficients  for the two bodies are used.
In general, entering the friction coefficient for a contact body pair via a
BCTABLE and  BCONECT/BCONPRP is strongly recommended. HBL Separation distance
dependent thermal convection coefficient. (Real or Integer; Default =  0.0) If
Real, the value entered is the separation distance dependent thermal convection
coefficient. If Integer, the value entered is the ID of a TABLEM1 or TABLEM2
entry  specifying the convection coefficient vs temperature or a TABL3D entry
specifying the  convection coefficient vs temperature and possibly other
variables. HCT Contact heat transfer coefficient. (Real or Integer; Default =
0.0) If Real, the value entered is  the contact heat transfer coefficient. If
Integer, the value entered is the ID of a TABLEM1 or  TABLEM2 entry specifying
the contact heat transfer coefficient vs temperature or a TABL3D  entry
specifying the contact heat transfer coefficient vs temperature and possibly
other  variables. See Remark  3.
HNLE            Heat transfer coefficient for nonlinear convective heat flow to
                the environment. (Real > 0.0 or Integer; Default = 0.0) If Real,
                the valueentered is the environment nonlinear convection
                coefficient. IfInteger, thevalue entered is the ID of a TABLEM1
                or TABLEM2 entryspecifying theenvironmentnonlinear convection
                coefficient vstemperature or aTABL3D entryspecifying
                theenvironment nonlinearconvectioncoefficient vstemperature
                andpossiblyothervariables.IDSPLControlsgeometricsmoothing
                ofboundaryofdeformablebodyoption. (Integer;
                Default=0)=0orblank,discretegeometricrepresentation.>0the
                surface of thebodyissmoothedoutwithsplines(2D)
                orCoonssurfaces(3D)anddiscontinuityedges/cornersarebeingdefined
                byusingabs(IDSPL) asthe IDoftheBLSEG
                entries.IfBLSEGwithID=abs(IDSPL)doesnotexist,
                thewholebodyissmoothedand therearenouser-
                defineddiscontinuitycorners(2D)oredges(3D). (SeeRemark1.<0Sameas
IDSPL>0.Furthermore,additionaldiscontinuityedgesarebeinggeneratedautomatically i
                fthedifferenceinpatchnormalsexceedsthevalueofSANGLE.ISTYPCheckof
                contactconditions.(Integer>0;Default=0forallsolutions)ISTYP
                isnotnecessaryinsegment-to-segmentcontact.Foradeformablebody:=0
                checkeachbody,versustheother.=2 double-sided contactwithautomati
                coptimizationofcontactconstraintequations(thisoptionisknownas“op
                timizedcontact”).
MIDNOD          Mid-side node projection flag. (Integer > 0; Default = 0)When
                MIDNOD > 0 and IDSPL  0, the mid-side grid of quadratic
                elements are projectedonto the selected spline surfaces. This
                operation isperformed before thecontact process starts and it
                may change thelocation ofgrids in contactbodies. It may operate
                in combinationwith theinitial stress-free contact. Onlyused if
                IDSPL isnotzero.SANGLEThreshold forautomaticdiscontinuity
                detectionindegrees.(Real;Default = 60.0) Used
                forgeometricsmoothing option inSOL400 only.SANGLEis notused and
                is always setto0.0when
                IDSPL0.TBODYBodytemperature.(RealorInteger; Default =0.0)
                IfReal,thevalueenteredis thebodytemperature.IfInteger, the value
                enteredistheIDofaTABLED1orTABLED2 entryspecifyingthebodytemperat
                urevstimeoraTABL3Dentryspecifyingthebodytemperaturevstimeandposs
                iblyothervariables.Whenenteredasanegativeinteger,itsabsolutevalu
                eisascalarpointidentificationnumber.Ifascalarpointisspecifiedont
                hisentry,itneednotbe definedonanSPOINTentry.SeeRemark 8.
TSINK           Environment sink temperature. (Real or Integer, Default = 0.0)
                If Real, the value entered is the sink temperature. If Integer,
                the valueentered is the ID of a TABLED1 or TABLED2 entry
                specifying temperaturevs timeor a TABL3D entry specifying the
                sink temperaturevs time and possiblyothervariables. When entered
                as a negativeinteger itsabsolute value is ascalarpoint
                identification number. Ifa scalarpoint isspecified on this
                entry,itneed not bedefined on an SPOINTentry. SeeRemark 8.


```

--------------------------------------------------------------------------------
