## [CONTRLT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CONTRLT.xhtml) - Thermal Control Element for Heat Transfer Analysis

Defines the control mechanism for QVECT, QVOL, QBDY3, RADBC, CONV, and CONVM in heat transfer analysis (SOL 159 and SOL 400 with analysis=htran).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONTRLT ID      SENSOR  SFORM   CTYPE   PL      PH      PTYPE   PZERO   +       
+       DT      DELAY   TAUC                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONTRLT 100     20      T       TSTAT   68.     73.     7       1.      +       
+       0.1     0.01    0.                                                      
```

```text
┌───────────┬──────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ID        │ Controller identification node. See Remark       │                                                   │
│           │ 1. (Integer > 0; Required)                       │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SENSOR    │ Grid or scalar point ID of sensor. See           │                                                   │
│           │ Remark 2. (Integer > 0; Required)                │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SFORM     │ Sensor output form. See Remark 3. (Character, T; │                                                   │
│           │ Default = T)                                     │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CTYPE     │ Control type. See Remark 4. (Character, Default  │                                                   │
│           │ TSTAT)                                           │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PL        │ Minimum temperature. For PTYPE 9 through 11, set │                                                   │
│           │ temperature. See Remark 5. (Real; Required)      │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PH        │ Maximum temperature. For PTYPE 9 through 11,     │                                                   │
│           │ unused. See Remark 5. (Real; Required)           │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PTYPE     │ Process type. See Remark 5. (Integer 1 through   │                                                   │
│           │ 11, 1 through 6 already defined; no Default)     │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 7                                                │ Bang-bang (a thermostat that is either on or off, │
│           │                                                  │ a special case of a bang-bang controller)         │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 8                                                │ Proportional                                      │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 9                                                │ Steady-state (special routine for steady state    │
│           │                                                  │ models)                                           │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 10                                               │ Classical PID (proportional-integral-             │
│           │                                                  │ differential) and does not include the time       │
│           │                                                  │ derivative of the set point )                     │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ 11                                               │ Standard PID (Includes the time derivative of the │
│           │                                                  │ set point)                                        │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PZERO     │ Initial controller value. See Remark 4. (0. <    │                                                   │
│           │ Real < 1.; Default = 0)                          │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DT        │ Monitoring time interval or sampling period.     │                                                   │
│           │ (Real > 0.; Default = 0)                         │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ DELAY     │ Time delay after the switch is triggered or time │                                                   │
│           │ for delayed control action in PID control. (Real │                                                   │
│           │ > 0.; Default = 0.0)                             │                                                   │
├───────────┼──────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TAUC      │ Decay time constant for actuator response. (Real │                                                   │
│           │ > 0.; Default = 0.0)                             │                                                   │
└───────────┴──────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The CONTRLT ID is referenced by CNTRLND entry identified on any of the CONV, CONVM, RADBC, QVECT, QVOL, and QBDY3 Bulk Data entries. If any grid or scalar point ID is the same as the CONTRLT ID, then the combined logic associated with the controller and the control node will be in force for the LBC referenced. Any number of CONTRLT statements may exist in a single model.
2. Sensor point, where a feedback temperature or rate of change of temperature is measured. May be a dependent DOF in a MPC relationship.
3. Sensor output may only be temperature (T)
4. Control type can only be TSTAT. The PZERO field cannot have any other value but 0.0 or 1.0.
5. The upper and lower limit values (PL and PH) define a dead band for a thermostat. The available thermostat controller (TSTAT) formats are (PTYPE = 1 through 6).

![bulkc202652.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202652.jpg?_LANG=enus)

![bulkc202654.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202654.jpg?_LANG=enus)
