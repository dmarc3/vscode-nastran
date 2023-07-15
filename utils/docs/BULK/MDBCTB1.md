## [MDBCTB1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDBCTB1.xhtml) - Defines a Contact Table for Bodies in Different Modules

MDBCTB1 specifies a list of contact pairs (for bodies residing in different Modules) through the MDBCNCT option for SOL 101 and SOL 400. This contact table is activated in the BCONTACT Case Control command.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCTB1 BCID    MOD1    ID1     MOD2    ID2     MOD3    ID3     MOD4            
        ID4     MOD5    ID5     -etc.-                                          
```
#### <span>Examples:</span>

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCTB1 2       101     198     201     62      301     75      401             
        501     8       601     159     701     31      801     44              
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBCTB1 0       1001    23      1002    56                                      
```
#### <span></span>

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BCID      │ Unique identification number referenced by a BCONTACT Case Control command. See Remark 3.(Integer │
│           │ ≥ 0; Required)                                                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODi      │ Identification number of module that defines BCONECT IDi (Integer ≥ 0 or blank,)                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Identification number of BCONECT entry (Integer > 0). See Remark 4. and 5.                        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### <span></span>

#### Remarks:

1. MDBCTB1 defines surface contact. If MDBCTB1 does not exist, the Case Control command BCONTACT=BCID may refer to the MDBCNCT Bulk Data entry directly.

2. If neither MDBCTB1 nor MDBCNCT is given, the default for contact analysis is assumed, every body detects the possibility of contact relative to all other bodies and itself if it is a deformable body. If MDBCTB1 or MDBCNCT is given, the default for everybody is overwritten. The touching body does not contact itself unless requested. When the touched body is deformable, double-sided contact is applied by default. MDBCTB1 or MDBCNCT is useful for deactivating or activating bodies to reduce computational effort and to change contact conditions between subcases.

3. For SOLs 101 and 400, the MDBCTB1 or MDBCNCT with ID=0 will be used in loadcase 0 automatically that does not need a corresponding Case Control command BCONTACT=0. The loadcase 0 is purely elastic and it can also be used to (1) move rigid contact bodies so that they just touch flexible contact bodies, and/or (2) remove any prestressed condition by adjusting the coordinates of the active nodes, which are the Grid Points on the surface of all deformable BCBODY1’s. To place an entry in any physical loadcase (SUBCASE or STEP), the BCID must be selected by the Case Control command BCONTACT=BCID or MDBCNCT=BCID. When BCONTACT=ALLBODY, there is no BCID of MDBCTB1 or MDBCNCT specified; therefore, the default values of all entries of BCONPRG and BCONPRP are assumed. Case Control command BCONTACT=ALLBODY cannot be used for permanently glued contact.

4. The “THRU” option is not supported.

5. Intervening blank fields are not allowed.

6. If Modules are present then this entry may only be specified in the main Bulk Data section.

