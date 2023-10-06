## [AUTOSPC (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AUTOSPC.Case.xhtml) - Constrains Stiffness Singularities via m-sets or s-sets

Requests that stiffness singularities and near singularities be automatically constrained via single or multipoint constraints.

#### Format:

![casecontrol4a00814.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00814.jpg?_LANG=enus)  

#### Examples:
```nastran
AUTOSPC=YES
AUTOSPC (PRINT, PUNCH, SID=100, EPS=1.E-6, MPC)=YES
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RESIDUAL   │ For SOL 400, applies AUTOSPC to both the residual structure and superelements. See Remarks 6. and  │
│            │ 7. For SOL 101, applies AUTOSPC to analysis with contact. See Remark 9.                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT      │ Enables the printout of a summary table of singularities (Default).                                │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT    │ Disables the printout of a summary table of singularities.                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPUNCH    │ Disables the creation of SPC or MPC Bulk Data entries in the PUNCH file (Default).                 │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH      │ Generates SPC or MPC Bulk Data entry format in the PUNCH file.                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID=n      │ Specifies a set identification number for option PUNCH (Default = 999).                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPS=r1     │ Identifies singularities with a stiffness ratio smaller than r1 to be automatically constrained    │
│            │ with single or multipoint constraints. See Remark 2. (Default = 1.E-8).                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPSSING=r2 │ Identifies the potential singularities with stiffness ratios less than r2. See Remark 2.           │
│            │ (Default=1.E-8).                                                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPC        │ Applies single-point constraints on degrees of freedom identified as singular. (Default)           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MPC        │ Applies multipoint constraints on degrees of freedom identified as singular.                       │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ZERO       │ Requests the printout of singularities with zero stiffness ratios in the singularity summary table │
│            │ (Default).                                                                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOZERO     │ Disables the printout of those singularities with zero stiffness ratios in the singularity summary │
│            │ table.                                                                                             │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. AUTOSPC specifies the action to take when singularities exist in the stiffness matrix. AUTOSPC=YES means that singularities will be constrained automatically. AUTOSPC=NO means that singularities will not be constrained. If AUTOSPC=NO, then the user should take extra caution analyzing the results of the grid point singularity table and the computed epsilons. See   in the  MSC Nastran Reference Guide  for details of singularity and mechanism identification and constraint.
2. Singularity ratios smaller than EPSSING are listed as potentially singular. If AUTOSPC=YES, then the identified singularities with a ratio smaller than EPS will be automatically constrained. If EPSSING has the same value as EPS, then all singularities are listed. If EPSSING is larger than EPS, the printout of singularity ratios equal to exactly zero is suppressed. EPSSING must be greater than or equal to EPS. If not, the program will set EPSSING equal to EPS.
3. If the PUNCH keyword is specified, then automatically generated SPCs or MPCs are placed in SPCi or MPCi Bulk Data entry format on the PUNCH file.
4. By default, in all solution sequences except 106, 129 and 400, the auto-SPC operation is performed for both superelements and the residual structure. (Auto-SPC processing is disabled in heat transfer analysis). In SOLs 106, 129 and 400, the default is to perform the operation only on superelements.   If it is desired to perform auto-SPC on the residual structure in:
     - SOLs 106, then specify PARAM,AUTOSPCR,YES and is only applied to the omitted degrees-of-freedom. The AUTOSPC command is ignored for the residual structure.
     - SOLs 129, then specify PARAM,AUTOSPCR,YES. The AUTOSPC command is ignored for the residual structure.
     - For SOL 400, see Remarks   and 
5. The MPC option may be somewhat more expensive than the SPC option. However, it provides more realistic structural modeling than the SPC. When the MPC option is selected, the multipoint constraint may be applied on some degree of freedom for which the stiffness matrix is identified as singular. If the MPC is inapplicable to some degree of freedom, the SPC is used instead.
6. For SOL 400, if RESIDUAL option is requested, the AUTOSPC operation is applied to both the residual structure and the superelements. Without RESIDUAL option, the AUTOSPC operation is applied to the superelements only. For default (no AUTOSPCE command), AUTOSPC operation is not applied to the residual structure, but it is applied to the superelements. Both parameters PARAM,AUTOSPC and PARAM,AUTOSPCR have no effect in SOL 400. Please note that the AUTOSPC (RESIDUAL) command should not be used in the geometrical nonlinear analysis, because it may over constrain the structural model.
7. For SOL 400, the AUTOSPC (RESIDUAL) command can be placed above the subcase level, between subcase and step, and below the step level. The AUTOSPC operation is performed each step of a subcase if it is required. In the following example, step 10 uses SPC option, step 20 uses MPC option, and no AUTOSPC operation is performed for step 30.
```nastran
SUBCASE 1 
   STEP 10 
      AUTOSPC(RESIDUAL,SPC) = YES 
      LOAD = 10 
   STEP 20 
      AUTOSPC(RESIDUAL,MPC) = YES 
      LOAD = 20 
   STEP 30 
      LOAD = 30
```
- For superelements, only one AUTOSPC command can be specified. If there are multiple AUTOSPC commands in the Case Control packet, the one for the first step of the first subcase will be used. In the previous example, the AUTOSPC under step 10 is used.

8. For SOL 400, AUTOSPC equals YES for linear perturbation if DOMAINSOLVER ACMS is defined in the executive system.
9. For SOL 101 with contact, user can turn on AUTOSPC by using RESIDUAL option. i.e., when AUTOSPC(RESIDUAL)=YES, AUTOSPC will be turned on for analysis with contact.
