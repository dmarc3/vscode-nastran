## [BCAUTOP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCAUTOP.xhtml) - Automatic contact generation property.

Specifies parameters for automatic contact generation (ACG). With ACG, the code automatically generates the contact bodies based on the grids and elements given, then establishes the contact pairs in which two contact bodies are in contact or may come into contact potentially based on the DISTANCE tolerance. Please refer to the section of   Chapter 9: Contact  , SOL 400 User’s Guide for details.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCAUTOP PID             Param1  Value1  Param2  Value2  Param3  Value3  +       
+       Param4  Value4  etc                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCAUTOP                 CTYPE   PGLUE   DISTANCE0.1                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Reserved for future use (integer >=0, default is 0)                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ Param(i)  │ Name of a parameter. Allowable names are given below (Character).             │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ Value(i)  │ Value of the parameter. See below (Real, Integer or character). See Remark 3. │
└───────────┴───────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one entry of BCAUTOP is allowed for non-modules model. If there are modules, only one BCAUTOP per module is allowed, and multiple modules can have BCAUTOP.
2. This entry does not have effect if BCONTACT=AUTO is not present in case control section.
3. The parameters in this entry may be divided into two types – primary parameters and secondary parameters. The primary parameters are the most important parameters for build of contact bodies, match of contact pairs. The secondary parameters are helpful for user to provide the more detail and further requirement for contact model establishment and contact analysis with automatic contact generation. The primary and secondary parameters are listed in the tables as follows.
4. When modules are present, contact data is generated for the module if there is a BCAUTOP exists in the module, otherwise no contact data will be generated for the module, in this case, user supplied contact data can be used if there is a BCTABL1 ID=1 and/or ID=0 exists.
