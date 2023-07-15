## [RESVEC (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.RESVEC.Case.xhtml) - Controls Residual Vectors

Specifies options for and calculation of residual vectors.

#### Format:

![casecontrol4a01276.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01276.jpg?_LANG=enus)  

![casecontrol4a01278.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01278.jpg?_LANG=enus)  

#### Examples:

```nastran
RESVEC=SYSTEM
RESVEC(NOINRL)=COMPONENT
RESVEC=NO
RESVEC(FLUID)=NO
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INRLOD/     │ Controls calculation of residual vectors based on inertial forces due to rigid-body motion         │
│ NOINRL      │ (Default =INRLOD).                                                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ APPLOD/     │ Controls calculation of residual vectors based on applied loads (Default = APPLOD).                │
│ NOAPPL      │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ADJLOD/     │ Controls calculation of residual vectors based on adjoint load vectors (SOL 200 only; Default =    │
│ NOADJLOD    │ ADJLOD).                                                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RVDOF/      │ Controls calculation of residual vectors based on RVDOFi entries (Default = RVDOF).                │
│ NORVDOF     │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMPLOD/    │ Controls calculation of residual vectors based on viscous damping (Default = DAMPLOD).             │
│ NODAMP      │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DYNRSP/     │ Controls whether the residual vectors will be allowed to respond dynamically in the modal          │
│ NODYNRSP    │ transient or frequency response solution. See Remark 5. (Default = DYNRSP).                        │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYSTEM/     │ Controls calculation of residual vectors for system (a-set) modes. For NOSYSTEM, describers inside │
│ NOSYSTEM    │ the parentheses are ignored. See Remark 2. for default.                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COMPONENT/  │ Controls calculation of residual vectors for component (superelement or o-set) modes. For          │
│ NOCOMPONENT │ NOCOMPONENT, describers inside the parentheses are ignored. See Remark 2. for default.             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH or YES │ Requests calculation of residual vectors for both system modes and component modes. See Remark 2.  │
│             │ for default.                                                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO          │ Turns off calculation of residual vectors for both system and component modes, and describers      │
│             │ inside the parentheses are ignored. See Remark 2. for default.                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLUID       │ Requests residual vector calculation for the fluid model (Default = YES).                          │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. RESVEC=SYSTEM/NOSYSTEM and RESVEC=COMPONENT/NOCOMPONENT may be specified in the same subcase.
2. RESVEC=BOTH is the default in all solution sequences except SOLs 103, 106, (with PARAM,NMLOOP), and 115, wherein RESVEC=COMPONENT is the default.
3. If the RESVEC command is specified then the user parameters PARAM,RESVEC and PARAM,RESVINER are ignored.
4. The lower frequency cutoff on the EIGR or EIGRL Bulk Data entries should be left blank or set to a value below the minimum frequency. Residual vectors may not be calculated if all modes below the maximum frequency cutoff are not determined. If low frequency modes are to be excluded from the analysis, use the MODESELECT Case Control command or PARAM,LFREQ.
5. Caution needs to be exercised when allowing the residual vectors to respond dynamically in a modal solution. The best approach is to always include enough normal modes to capture the dynamics of the problem, and rely on the residual vectors to help account for the influence of the truncated modes on the quasistatic portion of the response. This is not the default setting for this capability. When choosing to allow the residual vectors to respond dynamically, it is important to be aware of the frequency content of the excitation, as it will have the ability to excite these augmentation modes. If this is undesirable, then the forcing function should be filtered in advance to remove any undesired frequency content, or specify the NODYNRSP keyword.
6. Residual vectors are normalized with respect to MASS if possible. Massless residual vectors are normalized with respect to STIFFNESS. Residual vectors are not normalized by the requested method of the NORM field of the selected EIGR or EIGRL entry.
7. The maximum number of applied loads that may be used for residual vector calculations is controlled by PARAM,MAXAPL. Note that if the number of applied loads is large, the cost can become prohibitive. If the number of applies loads exceeds MAXAPL, residual vectors are disabled.
