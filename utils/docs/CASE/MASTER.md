## [MASTER (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MASTER.Case.xhtml) - Redefine the MASTER Subcase

Allows the redefinition of a MASTER subcase.

#### Format:

```nastran
SUBCASE n
MASTER
```

#### Example:

```nastran
SUBCASE 10
MASTER
```

```text
┌───────────┬─────────┐
│ Describer │ Meaning │
├───────────┼─────────┤
│ n         │         │
└───────────┴─────────┘
```

#### Remarks:

1. All commands in a MASTER subcase apply to the following subcases until a new MASTER subcase is defined.
2. Suppose that superelement 10 has SPC set 10, MPC set 10, and LOAD sets 101 and 102. Suppose also that superelement 20 has SPC set 20, MPC set 20, and LOAD sets 201 and 202. Then the following Case Control setup specifies the required subcase structure:

```nastran
TITLE = MY MODEL
DISP = ALL
SEALL = ALL
SUBCASE 101
   MASTER
   SPC = 10
   MPC = 10
   SUPER = 10, 1
   LOAD = 101
   LABEL = SUPER 10
   ESE = ALL
SUBCASE 102
   LOAD = 102
   SUPER = 10, 2
SUBCASE 201
   MASTER
   SPC = 20
   MPC = 20
   SUPER = 20, 1
   LOAD = 201
   LABEL = SUPER 20
SUBCASE 202
   LOAD = 202
   SUPER = 20, 2
```

3. MASTER may also be used advantageously in multiple boundary condition Case Control setups. Suppose that constraint sets 10 and 20 are to be solved with three loading conditions each: 1, 2, and 3; and 4, 5, and 6, respectively. The following Case Control Section may be used:

```nastran
TITLE = MULTIPLE BOUNDARY CONDITIONS  
DISP = ALL
SYM 1
MASTER
   SPC = 10
   LOAD = 1
SYM 2
   LOAD = 2
SYM 3
   LOAD = 3
SYM 4
   MASTER
   SPC = 20
   LOAD = 4
SYM 5
   LOAD = 5
SYM 6
   LOAD = 6
SYMCOM 10
   SYMSEQ = 1., 1., 1., -1., -1., -1.
SYMCOM 20
   SYMSEQ = -1., -1., -1., 1., 1., 1.
```

4. The MASTER command must appear immediately after a SUBCASE or SYM command.
