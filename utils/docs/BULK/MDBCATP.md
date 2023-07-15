## [MDBCATP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDBCATP.xhtml) - Defines Parameters of Across Modules for Automatic Contact Generation

Defines parameters for detecting contact pairs across modules for automatic contact generation (ACG). It is similar to BCAUTOP but is used for contact pair detection across modules, all the parameters for contact bodies in BCAUTOP are excluded.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCATP                 Param1  Value1  Param2  Value2  Param3  Value3          
                        Parami  Valuei                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCATP                 DISTANCE0.3     DELSLD  YES                             
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ Param(i)  │ Name of a parameter. Allowable names are given below (Character).             │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ Value(i)  │ Value of the parameter. See below (Real, Integer or character). See Remark 3. │
└───────────┴───────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Only one entry of MDBCATP is allowed.

2. This entry does not have effect if BCONTACT=AUTO is not present in case control section.

3. The parameters in this entry may be divided into two types - primary parameters and secondary parameters. The primary parameters are the most important parameters for contact pair detection. The secondary parameters are helpful for user to provide the more detail and further requirement for contact model establishment and contact analysis with automatic contact generation. The primary and secondary parameters are listed in the tables as follows.

Table 0-21    Primary Parameters in MDBCATP

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CTYPE      │ Characters, one of TOUCH(default), PGLUE, SGLUE and GGLUE. If CTYPE is specified in both BCAUTOP   │
│            │ entry and Case Control Command BCONTACT=AUTO, the specification in this entry will be used.        │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DISTANCE   │ Distance tolerance of contact pair. If the distance between any two points which are belonging to  │
│            │ two different contact bodies is less than this value, these two contact bodies are recognized to   │
│            │ be a contact pair. Default value of DISTANCE is 100 times of contact ERROR tolerance. ERROR may be │
│            │ defined in either MDBCATP or left blank. With default of ERROR, the code calculates ERROR as the   │
│            │ smallest one of the following values:                                                              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1          │ 1/20 of the smallest nonzero element dimension (plates or solids) in the contact body.             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2          │ 1/4 of the thinnest shell thickness in the contact body                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ See BCPARA │                                                                                                    │
│ for ERROR  │                                                                                                    │
│ definition │                                                                                                    │
│ in detail. │                                                                                                    │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
Table 0-22    Secondary Parameters in MDBCATP

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ BEAMCNT   │ Characters, YES or NO (default). Determining if   │                                                   │
│           │ beam is included in contact definition.           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ YES                                               │ BEAMs are included in the contact description.    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NO                                                │ No BEAM is included in the contact description.   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EDGECNT   │ Characters, YES or NO (default). Determining if   │                                                   │
│           │ shell edge is included in contact description.    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ YES                                               │ The free and hard shell edges are included in the │
│           │                                                   │ contact definition.                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NO                                                │ No shell edges are included in the contact        │
│           │                                                   │ definition.                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FTYPE     │ Characters, BLCOUL/BLSHEAR; or Integer, 6 / 7.    │                                                   │
│           │ BLCOUL or 6 is Bilinear Coulomb friction. BLSHEAR │                                                   │
│           │ or 7 is Bilinear Shear friction. Default is No    │                                                   │
│           │ Friction.                                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ FRIC      │ Friction coefficient. If the value is an integer, │                                                   │
│           │ it represents the ID of a TABLEM1,TABLEM2 or      │                                                   │
│           │ TABL3D, i.e., a temperature-dependent or multi-   │                                                   │
│           │ dimensional table. (Real ≥ 0.0 or Integer > 0;    │                                                   │
│           │ Default = 0.0)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ IGNTHK    │ Character, YES or NO (default), Ignore thickness  │                                                   │
│           │ of shell for contact.                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ YES       │ Ignore the thickness of the shell                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NO        │ Include the thickness of the shell                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ INISTF    │ Character, YES or NO (default). Set the option of │                                                   │
│           │ initial stress free.                              │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ YES                                               │ Initial stress free contact.                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ NO                                                │ General contact without implementation of initial │
│           │                                                   │ stress free.                                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SelfCont  │ Characters, YES or NO (default). Option of self-  │                                                   │
│           │ contact.                                          │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
Note:   The p...
```
