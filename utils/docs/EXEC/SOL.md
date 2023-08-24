## [SOL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.SOL.xhtml) - Executes a Solution Sequence

Specifies the solution sequence or main subDMAP to be executed.

#### Format:

![executive00709.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00709.jpg?_LANG=enus)  

#### Examples:

1. In the following example, SOL 103 is executed from MSCOBJ.

     ```nastran
     SOL 103
     ```

2. In the following example, the PHASE0 subDMAP is altered, SOL 103 is relinked onto the OBJSCR DBset (which is the default for SOLOUT), and SOL 103 is executed.

     ```nastran
     SOL 103
     COMPILE PHASE1
     ALTER ’DTIIN’
     TABPT SETREE,,,,// $
     .
     .
     .
     ENDALTER $
     ```

3. In the following example, the solution sequence called DYNAMICS is executed from the USROBJ DBset.

     ```nastran
     SOL DYNAMICS SOLIN = USROBJ
     ```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Solution number. See Remark 6. for the list of valid numbers (Integer  >  0).                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ subDMAP-name │ The name of a main subDMAP. See the MSC Nastran DMAP Programmer’s Guide (Character; 1 to 8        │
│              │ alphanumeric characters in length and the first character must be alphabetic).                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ obj-DBset    │ The character name of a DBset where the OSCAR is stored. See Remarks 1. and 2. (Character; 1 to 8 │
│              │ alphanumeric characters in length and the first character must be alphabetic).                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOEXE        │ Suppresses execution after compilation and/or linkage of the solution is complete. Also, the Bulk │
│              │ Data Section and Case Control Section are not read or processed.                                  │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If SOLIN keyword is not given and if there are no LINK statements within the input data, the program will perform an automatic link. The program will first collect the objects created in the current run by the COMPILE statement and the remaining objects stored in the MSCOBJ DBset. The program will   then perform an automatic link of the collected objects.
2. If the SOLIN keyword is not given but a LINK statement is provided, the SOLIN default will be obtained from the SOLOUT keyword on the LINK statement.
3. The operation sequence control array (OSCAR) defines the problem solution sequence. The OSCAR consists of a sequence of entries with each entry containing all of the information needed to execute one step of the problem solution. The OSCAR is generated from information supplied by the user’s entries in the Executive Control Section.
4. The SOLIN keyword will skip the automatic link and execute the OSCAR on the specified DBset.
5. The DOMAINSOLVER may be used in conjunction with solution sequences 101, 103, 108, and 111 to select domain decomposition solution methods.
6. The following Solution Sequences are currently available in MSC Nastran:

```text
┌────────────┬──────────┬────────────────────────────────────────────────┐
│ SOL Number │ SOL Name │ Description                                    │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 101        │ SESTATIC │ Statics with options:                          │
│            │          │ Linear steady stte heat transfer.              │
│            │          │ Alternate reduction.                           │
│            │          │ Inertia relief.                                │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 103        │ SEMODES  │ Normal modes.                                  │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 105        │ SEBUCKL  │ Buckling with options:                         │
│            │          │ Static analyis.                                │
│            │          │ Alternate reduction.                           │
│            │          │ Inertia relief.                                │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 106        │ NLSTATIC │ Nonlinear or linear statics.                   │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 107        │ SEDCEIG  │ Direct complex eigenvalues.                    │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 108        │ SEDFREQ  │ Direct frequency response.                     │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 109        │ SEDTRAN  │ Direct transient response.                     │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 110        │ SEMCEIG  │ Modal complex eigenvalues.                     │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 111        │ SEMFREQ  │ Modal frequency response.                      │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 112        │ SEMTRAN  │ Modal transient response.                      │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 114        │ CYCSTATX │ Cyclic statics with option:                    │
│            │          │ Alternate reducton.                            │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 115        │ CYCMODE  │ Cyclic normal modes.                           │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 116        │ CYCBUCKL │  Cyclic buckling.                              │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 118        │ CYCFREQ  │ Cyclic direct frequency response.              │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 128        │ SENLHARM │  Nonlinear Harmonic Response                   │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 129        │ NLTRAN   │ Nonlinear or linear transient response.        │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 144        │ AESTAT   │ Static aeroelastic response.                   │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 145        │ SEFLUTTR │ Aerodynamic flutter.                           │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 146        │ SEAERO   │ Aeroelastic response.                          │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 153        │ NLSCSH   │ Static structural and/or steady state heat     │
│            │          │ Transfer analysis with options:                │
│            │          │ Linear or nolinear analysis.                   │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 159        │ NLTCSH   │ Transient structural and/or transient heat     │
│            │          │ Transfer analysis with options:                │
│            │          │ Linear or nolinear analysis.                   │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 200        │ DESOPT   │ Design optimization.                           │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 400        │ NONLIN   │ Nonlinear Static and Implicit Transient        │
│            │          │ Analysis and all linear sequences from statics,│
│            │          │ modes, frequency, and transient inclusive with │
│            │          │ perturbation analysis based on previous        │
│            │          │ nonlinear analysis                             │
├────────────┼──────────┼────────────────────────────────────────────────┤
│ 700        │ NLTRAN   │ (See SOL 700,ID, 156) Nonlinear Explicit       │
│            │          │ Transient Analysis                             │
└────────────┴──────────┴────────────────────────────────────────────────┘
```