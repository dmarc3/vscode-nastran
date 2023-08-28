## [AESTAT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AESTAT.xhtml) - Static Aeroelasticity Trim Variables

Specifies rigid body motions to be used as trim variables in static aeroelasticity.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AESTAT  ID      LABEL
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AESTAT  5001    ANGLEA
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number of an aerodynamic trim variable degree-of-freedom.  See Remark 1.       │
│           │ (Integer > 0)                                                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ An alphanumeric string of up to eight characters used to identify the degree-of-freedom.  See │
│           │ Remark 1. (Character)                                                                         │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The degrees-of-freedom defined with this entry represent rigid body motion in the reference coordinate system defined on the AEROS entry.  The standard labels that define the various rigid body motions are as follows:

```text
┌────────┬──────────────────────────┬──────────────────────────────┐
│ LABEL  │ Degree-of-Freedom Motion │ Description                  │
├────────┼──────────────────────────┼──────────────────────────────┤
│ ANGLEA │ (R2)                     │ Angle of Attack              │
├────────┼──────────────────────────┼──────────────────────────────┤
│ SIDES  │ (R3)                     │ Angle of Sideslip            │
├────────┼──────────────────────────┼──────────────────────────────┤
│ ROLL   │ (R1)                     │ Roll Rate = pb/2V            │
├────────┼──────────────────────────┼──────────────────────────────┤
│ PITCH  │ (R2)                     │ Pitch Rate = qc/2V           │
├────────┼──────────────────────────┼──────────────────────────────┤
│ YAW    │ (R3)                     │ Yaw Rate = rb/2V             │
├────────┼──────────────────────────┼──────────────────────────────┤
│ URDD1  │ (T1)                     │ Longitudinal (See Remark 3.) │
├────────┼──────────────────────────┼──────────────────────────────┤
│ URDD2  │ (T2)                     │ Lateral                      │
├────────┼──────────────────────────┼──────────────────────────────┤
│ URDD3  │ (T3)                     │ Vertical                     │
├────────┼──────────────────────────┼──────────────────────────────┤
│ URDD4  │ (R1)                     │ Roll                         │
├────────┼──────────────────────────┼──────────────────────────────┤
│ URDD5  │ (R2)                     │ Pitch                        │
├────────┼──────────────────────────┼──────────────────────────────┤
│ URDD6  │ (R3)                     │ Yaw                          │
└────────┴──────────────────────────┴──────────────────────────────┘
```

These reserved names may be defined on the AEPARM entry instead, in which case the incremental load due to the unit perturbation of the rigid body degree-of-freedom is not created. (See the AEPARM, AEPRESS, and AEFORCE entries.)

2. The degrees-of-freedom defined with this entry are variables in the static aeroelastic trim solution, unless they are constrained by referencing them with a TRIM Bulk Data entry.

3. If a label other than those above is specified, then the user must either generate the corresponding forces with an AELINK or via a DMI Bulk Data entry along with a DMAP alter that includes the DMIIN module and additional statements to merge into the appropriate matrices. Or, using AEPARM and the AEDW, AEPRESS, and/or AEFORCE, you can accomplish this purpose without the need for any alters.

