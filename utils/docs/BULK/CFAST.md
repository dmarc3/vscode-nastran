## [CFAST](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CFAST.xhtml) - A Shell Patch Fastener Connection

Defines a fastener with material orientation connecting two surface patches. Large displacement and large rotational effects are supported when in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CFAST   EID     PID     TYPE    IDA     IDB     GS      GA      GB      +       
+       XS      YS      ZS                                                      
```

#### Example using PROP:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CFAST   3       20      PROP    21      24      206                             
```

#### Example using ELEM:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CFAST   7       70      ELEM    27      74      707                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PFAST entry. (Integer > 0; Default = EID)                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Specifies the surface patch definition: (Character) If TYPE = ‘PROP’, the surface patch           │
│           │ connectivity between patch A and patch B is defined with two PSHELL (or PCOMP) properties with    │
│           │ property ids given by IDA and IDB. See Remark 1. and Figure 9-23. If TYPE = ‘ELEM’, the surface   │
│           │ patch connectivity between patch A and patch B is defined with two shell element ids given by IDA │
│           │ and IDB. See Remark 1. and Figure 9-23.                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDA,IDB   │ Property id (for PROP option) or Element id (for ELEM option) defining patches A and B.  (Integer │
│           │ > 0)                                                                                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GS        │ Grid point defining the location of the fastener. See Remark 2. (Integer > 0 or blank)            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA,GB     │ Grid ids of piercing points on patches A and B. See Remark 2. (Integer > 0 or blank)              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XS,YS,ZS  │ Location of the fastener in basic. Required if neither GS nor GA is defined. See Remark 2. (Real  │
│           │ or blank)                                                                                         │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The CFAST defines a flexible connection between two surface patches. The number of unique physical grids connected depends on the location for the piercing points GA and GB and the size of the diameter D (see  ).

![bulkc102536.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102536.jpg?_LANG=enus)

Figure 9-23 Patches Defined with TYPE= ‘PROP’ or TYPE = ‘ELEM’

2. GS defines the approximate location of the fastener in space. GS is projected onto the surface patches A and B. The resulting piercing points GA and GB define the axis of the fastener. GS does not have to lie on the surfaces of the patches. GS must be able to project normals to the two patches. GA can be specified in lieu of GS, in which case GS will be ignored. If neither GS nor GA is specified, then (XS, YS, ZS) in basic must be specified.

     If both GA and GB are specified, they must lie on or at least have projections onto surface patches A and B respectively. If GA and GB are both specified, GS is ignored. By default, the locations of user specified GA and GB will not be changed. If the user specifies "SWLDPRM, MOVGAB, 1,", then the locations will be corrected so that they lie on the surface patches A and B within machine precision. The length of the fastener is the final distance between GA and GB. If the length is zero, the normal to patch A is used to define the axis of the fastener.

     Diagnostic printouts, checkout runs and control of search and projection parameters are requested on the SWLDPRM Bulk Data entry.

3. The use of param,cfdiagp,yes and param,cfrandel,real_fraction_value allows for the random removal of a percentage of CFAST elements for failure studies.
4. This entry is not supported in SOL 700.
5. If used in a multi-physics coupled problem using SUBSTEP, they participate in the mechanical substep but are ignored in the heat transfer subsstep through automatic deactivation. For more information on deactivation, see the DEACTEL keyword under the NLMOPTS Bulk Data entry and the associated Remark   for that entry.
6. In SOL400, the behavior of this element in regard to large rotation is affected by the Case Control Command Rigid.
7. If partitioned superelements are present, then CFAST is supported in the main Bulk Data section only.
