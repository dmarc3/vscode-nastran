## [DEFINE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.DEFINE.xhtml) - Parameter Definition

Assigns user-defined keywords (or cellnames) to a NASTRAN system cell. (See the NASTRAN statement for a description of “cellname”.) In addition, the DEFINE statement provides a mechanism to set default values for system cells.

#### Format:

```nastran
DEFINE keyword [ =expression ] [ LOCATION=SYSTEM(i) ] [ TYPE=type ]
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ keyword    │ User-defined name, 1 through 24 characters in length. The first character must be alphabetic. The │
│            │ following characters can be used for keywords: A through Z, _, and 0 through 9. Any other         │
│            │ characters are invalid.                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ expression │ Expression produces a single value from a set of constant and/or variable parameters separated by │
│            │ operators. The value is assigned to the “keyword” and is also used to set the value for the       │
│            │ NASTRAN system cell specified by “LOCATION”. TYPE determines both the type of the result and the  │
│            │ type conversions that will be applied to the constants and variables within the expression--mixed │
│            │ mode expressions are allowed (see Remark 6.). The parentheses can be used to change the order of  │
│            │ precedence. Operations within parentheses are performed first, with the usual order of precedence │
│            │ being maintained within the parentheses. The variable parameters within the expression must be    │
│            │ keywords previously defined on a DEFINE statement. The following operations are allowed:          │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYSTEM(I)  │ Specifies the NASTRAN system cell number to be associated with the keyword.                       │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ type       │ The type of expression result, and the type of conversions that will be applied to the constants  │
│            │ and variables within the expression. Allowable data types are as follows: See link for table.     │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If TYPE, LOCATION, and EXPRESSION are omitted, the default data type is Integer and the default value is zero.
2. If EXPRESSION is omitted, an internal default will be assigned to the keyword/cellname based on the LOCATION (See   for a list of internal default values).
3. A DEFINE statement that specifies a LOCATION is actually setting the default for a NASTRAN system cell,I and therefore it is not necessary to also set the system cell value on a subsequent NASTRAN statement unless the user wishes to override the previous DEFINE statement setting. Also, since more than one DEFINE statement may be present for the same “keyword”, the last specification takes precedence. “Keywords” referenced on a NASTRAN statement, or in an expression on the DEFINE statement, are automatically substituted by the last specification of the “keyword” prior to the current statement being processed.
4. DEFINE statements may also be specified in runtime configuration (RC) files. See the  .
5. System cells may also be set with the NASTRAN statement. In addition, they may be set or values returned with the DMAP PUTSYS and GETSYS functions and the PARAM module. See the  MSC Nastran DMAP Programmer’s Guide .
6. Each operand within the expression will be converted to the result type prior to the arithmetic operation. For example: the statement “DEFINE JJ=2.5 + 3.6 TYPE=I” would result in 2.5 and 3.6 being converted to 2 and 3, respectively, and the result of 5 would be assigned to JJ.

#### Examples:

1. Change the default value for block size:

```nastran
DEFINE BUFFSIZE=8193  LOCATION=SYSTEM(1)
```

2. Set the sparse matrix selection to forward-backward substitution only:

```nastran
DEFINE SPARSE=16 LOCATION=SYSTEM(126)
```

3. Define the system cell keyword and default value for the maximum output line count and then reset it to another value on a NASTRAN statement. Note: The DEFINE statement would typically be placed in an RC file and the NASTRAN statement would be placed in the File Management Section whenever the user wants to override the DEFINE statement default setting.

```nastran
DEFINE  MAXLINES=999999999 LOCATION=SYSTEM(9)
NASTRAN MAXLINES=100000
```

4. Define system cells that behave like “toggles,” turning some feature on or off:

```nastran
DEFINE  MESH=2 LOCATION=(31)
DEFINE  NOMESH=0 LOCATION=(31)
NASTRAN MESH
```

**Note:** Since each subsequent DEFINE statement redefines the default value, the second DEFINE of system cell location 31 sets the default value to 0. A NASTRAN statement can then be inserted in the input file to reset the MESH system cell back to a value of 2. This same technique can be used with any system cell where the user wishes to refer to the system cell keyword and have the system cell set to a previous DEFINE statement default.

5. Invalid usage of the DEFINE and NASTRAN statement:

```nastran
DEFINE  BUFFSIZE=8193
NASTRAN BUFFSIZE=8193
```

Valid usage:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEFINE  BUFFSIZE=8193 LOCATION=SYSTEM(1)
NASTRAN BUFFSIZE=8193
```
