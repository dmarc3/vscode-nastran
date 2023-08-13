## [BCONPRG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCONPRG.xhtml) - Geometric Contact Parameters of Touching Bodies

Defines geometric contact parameters used to determine if contact occurs between bodies. For segment-to-segment contact it also defines additional numerical parameters used to apply the constraints. The parameters defined here are referenced by the BCONECT entry. This entry is used in conjunction with the BCONPRP entry.

Geometric Contact Parameters of Touching Bodies in SOLs 101 and 400 for General Contact or in SOLs 101, 103, 105, 107 - 112, 200 and 400 for the Permanently Glued or Tied Contact.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONPRG BCGPID          PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    +       
+       PARAM4  VAL4    PARAM5  VAL5    -etc.-                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONPRG 90              ICOORD  1       IGLUE   1                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ BCGPID    │ Identification number for geometric contact parameters (Integer > 0).    │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ PARAMi    │ Name of a parameter. Allowable names are given in Table 9-4 (Character). │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ VALi      │ Value of a parameter. See Table 9-4 (Real or Integer).                   │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```

## [BCONPRG-700](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCONPRG.700.xhtml) - Geometric Contact Parameters of Touching Bodies in SOL 700

Defines geometric contact parameters of touching bodies used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONPRP PID             PARAM1  VAL1    PARAM2  VAL2    PARAM3  VAL3    +
+       PARAM4  VAL4    PARAM5  VAL5    -etc.-
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCONPRP 90      IGLUE   1
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ PID       │ Parameter identification number (Integer > 0).                           │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ PARAMi    │ Name of a parameter. Allowable names are given in Table 9-5 (Character). │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ VALi      │ Value of a parameter. See Table 9-5 (Real or Integer).                   │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```

Table 9-5    Geometric Contact Parameters of Touching Bodies in SOL 700

```text
┌─────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Name    │ Description, Type and Value (Default is 0 for integer, 0.0 for Real Unless Otherwise Indicated)    │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IGLUE   │ Flag to activate glue option (Integer = 0 or 1). Default is 0, no glue option. JGLUE option        │
│         │ controls a glue contact type in details. Without assigning IGLUE and JGLUE options, tied contact   │
│         │ methods (METHOD=TIEDxxx) can assign glue contact types as well. 0. No glue contact. 1. Activates   │
│         │ the glue option. In the glue option, all degrees-of- freedom of the contact nodes are tied in case │
│         │ of deformable-deformable contact once the node comes in contact. The relative tangential motion of │
│         │ a contact node is zero in case of deformable-rigid contact. The node will be projected onto the    │
│         │ contact body.                                                                                      │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ JGLUE   │ This option is only relevant if the glue option is invoked (IGLUE > 0). See METHOD=TIEDxxx.        │
│         │ (Integer ≥ 0; Default = 0) The following options are available: 0 Secondary nodes in contact and   │
│         │ which come into contact will permanently stick. Tangential motion is    inhibited. This option is  │
│         │ only available with METHOD=SS1WAY or SS2WAY    and AUTO=YES.                                       │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD  │ Character, Influences the contact type used. See Remark 18. (Character, Default = FULL) Options    │
│         │ are: FULL: Regular Contact AIRBAG: Single Surface Contact SS1WAY: Surface To Surface One Way       │
│         │ SS2WAY: Surface To Surface Two Way RB1WAY: Rigid Body One Way To Rigid Body RB2WAY: Rigid Body Two │
│         │ Way To Rigid Body RNRB: Rigid Nodes To Rigid Body TIEDNS: Tied Nodes to Surface TIEDNSO: Tied      │
│         │ Nodes to Surface with Offset RELLIPS: Tied contact between grid points or rigid materials to ATB   │
│         │ dummies. See Remark 4.  BELT: Suited for modeling contact between a belt element and a rigid       │
│         │ structure. Primary secondary contact only. The contact logic doesn't apply a contact force, but    │
│         │ applies an enforced displacement and velocity that keeps the secondary nodes exactly on top of the │
│         │ primary face. The secondary node does not slide relative to the primary face when the friction     │
│         │ coefficient (FS) is set to 1E20                                                                    │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│         │ BELT1: Identical to BELT algorithm, except that the secondary nodes are initially repositioned on  │
│         │ top of the closest primary face. All secondary nodes initially penetrated or within a distance of  │
│         │ INITMON from a primary face, are repositioned. DRAWBEAD: Suited for modeling a drawbead. STYPE     │
│         │ Must be GRID. The list of secondary nodes must be ordered along the drawbead line. MTYPE Must be   │
│         │ SURF. The restraining force per unit drawbead length is specified in the field DRWBEADF. It is V2  │
│         │ version contact. DRAWBDV4: Suited for modeling a drawbead. STYPE Must be GRID. The list of         │
│         │ secondary nodes must be ordered along the drawbead line. MTYPE Must be SURF. The restraining force │
│         │ per unit drawbead length is specified in the field DRWBEADF. It is V4 version contact.             │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ADAPT   │ Character, influences the contact type used. (Character, Default = NO) Options are NO or YES. When │
│         │ ADAPT=YES, the BCBODY1 entries IDPRIMi must be defined as: behav=DEFORM bsid references a BCPROP   │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THICK   │ Shell thickness scale factor. (Real > 0.0; Default = same as the value in DYPARAM,CONTACT,THICK)   │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THICKOF │ Artificial contact thickness offset. (Real > 0.0; Default = 0.0)                                   │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PENV    │ Overwrites the default maximum penetration distance factor. (Real > 0.0;Default = 1.E20)           │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXPAR  │ Maximum parametric coordinate in segment. (Real > 0.0; Default = 1.025), search (values 1.025 and  │
│         │ 1.20 recommended). Larger values can increase cost. If zero, the default is set to 1.025. This     │
│         │ factor allows an increase in the size of the segments. May be useful at sharp corners.             │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOFT    │ Soft constraint option: (Integer ≥ 0; Default = 1) 1     Soft constraint formulation (same as      │
│         │ original Dytran method). In the soft constraint option, the interface stiffness is based on the    │
│         │ nodal mass and the global time step size. This method is more suited for contact between two       │
│         │ materials where the elastic moduli vary greatly.                                                   │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IGNORE  │ Ignore initial penetrations. (Integer, Default = 1) 0     Take default from                        │
│         │ PARAM,DYCONIGNORE*,<value> (Default) 1     Allow initial penetrations to exist by tracking it 2    │
│         │     Move nodes to eliminate initial penetrations                                                   │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AUTO    │ Activation of automatic contact (Character, Default = Yes.) Options are: YES    Automatic Contacts │
│         │ Activated NO      Non-Automatic Contact Activated. This option is not recommended when Distributed │
│         │ Memory Parallel is activated.                                                                      │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SIDE    │ Defines which side will be the monitoring side of a primary face. The opposite side of the primary │
│         │ face will be the penetration side. See Remark 1. (Characters; default=BOTH) BOTH:    The side from │
│         │ which a secondary node approaches the primary face will become the monitoring side. TOP:      The  │
│         │ monitoring side will always be on the side of the primary face that its normal is pointing at.     │
│         │ BOTTOM: The monitoring side is always on the opposite side of the primary face that its normal is  │
│         │ pointing at.                                                                                       │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WEIGHT  │ The contact force is multiplied by a mass-weighting factor. The following options are available.   │
│         │ See Remark 25. (Character; default=BOTH) BOTH:   M_scale=(M_secondary                              │
│         │ M_primary)/(M_secondary+M_primary ) SECNDRY:    M_scale=M_secondary PRIMARY:    M_scale=M_primary  │
│         │ NONE:   M_scale=1.0                                                                                │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MONDIS  │ Defines the fixed part of the monitoring distance. When the normal distance of a secondary node to │
│         │ a primary face becomes smaller than the monitoring distance the secondary node will tag itself to  │
│         │ the primary face. The side from which the secondary node is moving towards the primary face        │
│         │ becomes the monitoring region. (Character; default=FACTOR) FACTOR: The monitoring distance is      │
│         │ equal to a factor times a characteristic length of the primary faces. The factor is specified in   │
│         │ MONDISV. DISTANCE: The monitoring distance is specified in MONDISV.                                │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MONDISV │ Value of the monitoring distance or value of the FACTOR to calculate the monitoring distance.      │
│         │ (Real; default=2.0)                                                                                │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INITMON │ Fixed part of the monitoring distance used during the initialization. If not specified, the value  │
│         │ of MONDIS is used. (Real > 0.0; default=MONDIS)                                                    │
└─────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. When METHOD=RELLIPS is used, BCGRID or BCMATL are only available for SECNDRY body and BCELIPS is only available for PRIMARY body. When BCMATL is used, the MATRIG id or RBE2 id are only acceptable. When Euler solver is deactivated, no output will be generated for the Eulerian elements.

2. The options TOP/BOTTOM are useful in the following cases:

- When a secondary node initially is located on the primary face (see the picture below), the contact situation is uniquely defined, only if the TOP or BOTTOM side of the primary surface is defined:

SIDE=TOP case:

![bconprp_remark_1.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bconprp_remark_1.png?_LANG=enus)

- When hooking of secondary nodes on the wrong side of a primary face might occur. This often is the case when the primary face is at the edge of a shell element structure:

SIDE=BOTTOM case: penetration of node 1 (SIDE=BOTH: no penetration of node 1)

![bconprp_remark_2.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bconprp_remark_2.png?_LANG=enus)

3. Recommended usage of WEIGHT:

```text
┌────────────┬────────────┬─────────┐
│ SECNDRY    │ PRIMARY    │ WEIGHT  │
├────────────┼────────────┼─────────┤
│ Deformable │ Deformable │ BOTH    │
├────────────┼────────────┼─────────┤
│ Deformable │ Rigid      │ SECNDRY │
├────────────┼────────────┼─────────┤
│ Rigid      │ Deformable │ PRIMARY │
├────────────┼────────────┼─────────┤
│ Rigid      │ Rigid      │ NONE    │
└────────────┴────────────┴─────────┘
```

Default setting when BCELIPS is used in SECNDRY or PRIMARY:

```text
┌─────────────┬─────────────────────┬────────┐
│ SECNDRY     │ PRIMARY             │ WEIGHT │
├─────────────┼─────────────────────┼────────┤
│ Non-BCELIPS │ Non-BCELIPS BCELIPS │ NONE   │
└─────────────┴─────────────────────┴────────┘
```

4. When METHOD=RELLIPS is used, BCGRID or BCMATL are only available for SECNDRY body and BCELIPS is only available for PRIMARY body. When BCMATL is used, the MATRIG id or RBE2 id are only acceptable.

