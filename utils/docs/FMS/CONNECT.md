## [CONNECT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.CONNECT.xhtml) - User Defined Service and Group Evaluator Data

Defines the newly introduced Simulation Component Architecture (SCA) User Defined Service (UDS) into MSC Nastran via a new CONNECT SERVICE statement. Bulk Data entries such as NLRSFD and MATUDS refer to this new service.

External geometric or beam cross section entities, external design responses, and external splines are still defined through the old grouping also described below. These entities should belong to the same evaluator-class (set of routines that process them), and in the case of geometric data, should reside on the same database.

1. A group of external beam cross section entities.  These entities should belong to the same evaluator-class (a set of routines that process them).  The PBARL and PBEAML entries relate to the BEAMEVAL type.
2. A group of external spline entities.  The SPLINEX Bulk Data entry relates to the SPLINEX type.
3. A group of external design response entities.  The DRESP3 Bulk Data entry relates to the DRESP3 type.

#### UDS Format:

```nastran
CONNECT SERVICE <service_identifier>  <service_name>
```

#### Old Group Format:

```nastran
CONNECT    ![fms00617.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/../../../assets/fms00617.jpg?_LANG=enus)      group    evaluator    ’path’    ’data’
```

#### UDS Examples:

```nastran
CONNECT SERVICE mysub  'SCA.MDSolver.Util.Ums'
```

Creates a service identifier “mysub” which points to the “SCA.MDSolver.Util.Ums” service.

```nastran
CONNECT SERVICE MYSUB 'ExtServ.Nlrsfd'
```

In this case, the user is requesting the NLRSFD Bulk Data entry with the GRPNAME MYSUB obtain its characteristics from the externally connected service defined in the CDL file under the component keyword.  The user must create an external shared object library (dynamic link library on Windows) using the SCA Scons utility and configure it to function with the MSC Nastran executable.

#### Old Group Examples:

```nastran
CONNECT BEAMEVAL HOIST, NEWBEAMS
```

In this case, the user is requesting that all calculations on PBARL and PBEAML Bulk Data entries that are grouped as HOIST use the NEWBEAMS evaluator. In this case, the user must supply the NEWBEAMS beam cross section evaluator library, and configure it to function with the Nastran executable program.

```nastran
CONNECT DRESP3 TAILWING, EXTRESP
```

In this case, the user is requesting that all calculations on DRESP3 Bulk Data entries, that are grouped as TAILWING use the EXTRESP evaluator. Thus, the user must create the EXTRESP external response server program, and configure it to function with the MSC Nastran executable.

```nastran
CONNECT SPLINEX SPLNGRP EXTSPLN
```

In this case, the user is requesting that all calculations on SPLINEX Bulk Data entries, that are grouped as SPLNGRP, use the EXTPLN evaluator. Thus, the user must create the EXTSPLN external spline server program and configure it to function with the Nastran executable.

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                         │
│ (UDS Format) │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ group        │ Group name referenced by the GROUP field on the NLRSFD and MATUDS Bulk Data entries.            │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ service_iden │ service_identifier is a name tag (8 characters long) which will be used to identify the service │
│ tifier       │ implementation to be used for a specific bulk data entry.                                       │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ service_name │ service_name is the name of service                                                             │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
│ (Old Group │                                                                                                    │
│ Format)    │                                                                                                    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ group      │ Group name referenced by the GROUP field on DRESP3, PBARL, PBEAML, and SPLINEX Bulk Data entries.  │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ evaluator  │ Identifies the particular class of evaluator to which the geometric, beam cross section, external  │
│            │ response, or external spline entities belong. Entities belonging to one evaluator-class are        │
│            │ handled by the same set of routines (either MSC-provided or user-provided). For geometry, two      │
│            │ classes of evaluators are provided internally with MSC Nastran. They are MSCRPC (rational          │
│            │ parametric cubic) and MSCEQN (generic equation). For beam cross sections, the class MSCBML (MSC    │
│            │ Beam Library) is provided internally. Users may develop custom evaluator libraries for geometry,   │
│            │ beam cross sections, external responses, or external splines and configure them for use with MSC   │
│            │ Nastran. See Remarks 4., 5., and 7.                                                                │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ path       │ Optional pathname or filename used by evaluator. Path must be enclosed by single quotation marks   │
│            │ if it contains lowercase characters.                                                               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ data       │ Optional character string passed to the evaluator. Data must be enclosed by single quotation marks │
│            │ if it contains lowercase characters or embedded blanks.                                            │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks (UDS Format):

1. The process of enabling User Defined Services in MSC Nastran consists of the following four steps:
     - Creating the desired implementation for the User Defined Services in the form of dynamic-link libraries,
     - Defining the location of the user defined service, service catalogue, service resource directory.
     - Specifying the proper commands in the model to load the service,
     - Identifying the elements that use the user supplied implementation.
2. In order to create a dynamic-link library suitable for usage with MSC Nastran, a build environment is delivered to assist the user in building the library. Please refer to the  Simulation Component Architecture Guide  and the  User Defined Service Guide  which describe the features and capabilities of the build system.

#### Remarks (Old Group Format):

1. CONNECT requests:
     - An external data base or evaluator, or
     - A user-defined grouping for beam cross section data defined by PBARL and PBEAML entries.
2. Two reserved group names, MSCGRP0 and MSCGRP1, have been predefined for geometric entities. The group MSCGRP0 corresponds to the MSCRPC (rational parametric cubic) evaluator and the group MSCGRP1 corresponds to the MSCEQN (Generic Equation) evaluator.
3. A single reserved group name, MSCBML0, has been predefined for beam cross section entities. It may be used in the PBARL and PBEAML entries without being defined explicitly by means of a CONNECT FMS statement. It corresponds to the MSCBML (MSC Beam-Library) evaluator.
4. Custom geometric evaluator libraries developed by users should comply with the  MSC Nastran Geometry Evaluator Developer’s Guide .
5. Custom beam cross section evaluator libraries developed by users should comply with the guidelines in the  MSC Nastran V69 Release Guide , Section 3.1, Beam Cross-Section Library, and Appendix C: Adding Your Own Beam Cross-Section Library.
6. Custom responses developed by users should comply with the procedures and guidelines in “Support of External Response in SOL 200” on page 55 of the  MSC Nastran 2004 Release Guide .
7. Once developed, an evaluator may be configured as:
     - Internal, where the evaluator routines are linked with the rest of the Nastran object modules to comprise the Nastran executable program; or
     - External, where the evaluator routines are linked with an MSC-provided server program to constitute an independent geometry server.
