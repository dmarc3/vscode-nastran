## [MALTER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.MALTER.xhtml) - Inserts and/or Deletes DMAP Statements in Solution Sequences

Inserts or deletes DMAP statements by allowing a global “string” search across all subDMAPs within the current solution sequence.

#### Format:

```nastran
MALTER ' string1'[(occurrence,offset)] , ['string2'[(occurrence,offset)] ]
```

or

```nastran
MALTER ' string1'[(occurrence,offset)] , [k2]
```

#### Examples:

1. The following MALTER will insert a MATPRN DMAP statement to print the KJJ matrix for each superelement.

     ```nastran
     SOL 101
     MALTER 'MALTER:AFTER SUPERELEMENT STIFFNESS .* GENERATION'
     MESSAGE //'SEID='/SEID $
     MATPRN KJJZ/ $
     ```

2. The following MALTER will add a user DMAP after the PREFACE modules in SOL 100 (USERDMAP).

     ```nastran
     SOL 101
     MALTER 'AFTER CALL PREFACE'
     .
     .
     .
     ```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 'string1'    │ If 'string2' or k2 is not specified, the subsequent DMAP statements will be inserted after the    │
│              │ first occurrence of 'string1'.                                                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 'string1','s │ DMAP statements beginning with the first occurrence of 'string1' through DMAP statements          │
│ tring2'      │ containing the first occurrence of 'string2' will be deleted and may be replaced with subsequence │
│              │ DMAP statements.                                                                                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k2           │ If k2 is specified, it is applied to the subDMAP in which 'string1' was found (Integer  >  0).    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ occurrence   │ This flag indicates which occurrence of the preceding string is to be used, starting at the       │
│              │ beginning of the subDMAP (Integer  >  0; Default = 1).                                            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ offset       │ This flag indicates the offset from the referenced DMAP statement. Depending on the sign, the     │
│              │ specific DMAP statement may be above (-offset) or below (+offset) the referenced DMAP statement   │
│              │ (Integer; Default  =  0).                                                                         │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If an MALTER statement is used in conjunction with the ALTER statement, then the MALTER should be placed above the COMPILE statements. Failure to place the MALTER in this position may cause ALTER statements to be ignored.
2. The MALTER statement can reference the DMAP statements in any order within a subDMAP. Two restrictions on ordering are:
     - K2 or 'string2'(occurence,offset) references must refer to a DMAP line number that is greater than or equal to the k1 or 'string1'(occurrence,offset) reference within a single MALTER statement.
     - 'string1' and k2 or 'string2' cannot overlap DMAP line positions with another MALTER that references the same subDMAP.
3. The 'string1' or 'string2' used as a search pattern will apply to one complete DMAP statement; i.e., a multiline DMAP statement will be searched for a pattern match as if each 72 character line of the DMAP statement were concatenated together into one string; all blanks and comments (either embedded or immediately preceding the DMAP statement) will be retained.
4. The special characters used for string searching are described in Remark   The characters <, >, and $, which are common DMAP characters, are also special metacharacters. If they are to be used in the search string as regular characters, then they must be preceded by a backward slash (\). For example, to find the string

     ```text
     IF (DDRMM  >=- 1)
     ```

     the command is

     ```nastran
     ALTER 'IF (DDRMM \>= - 1)' $
     ```

5. 'string2' (r2,02) can be defaulted to 'string1' (r1,01) by using a null string (''). For example, the alter statement

     ```nastran
     MALTER 'string1'(r1,01),''
     ```

     is equivalent to

     ```nastran
     MALTER 'string1'(r1,01),'string1'(r1,01)
     ```

     The defaults for (r2,02) using the null string can be overridden by specifying (r2,02).

     As another example, the alter statement

     ```nastran
     MALTER 'string1'(r1,01),''(r2,02)
     ```

     is equivalent to

     ```nastran
     MALTER 'string1'(r1,01),'string1'(r2,02)
     ```

6. The existing COMPILE statement options, such as LIST, XREF, SOUIN, etc., cannot be directly specified on the new MALTER statement. They are obtained as follows:

     - If a COMPILE statement exists for the subDMAP referenced by the MALTER, then options from this COMPILE statement will be used.

     Otherwise, they will be taken from the COMPILER statement, with the exception that the LIST, and SORT option is always on.

7. The MALTER string search order is as follows:
     - All COMPILE statement references that are part of the existing solution sequence (i.e., SOL=) are searched first.
     - Then, all remaining subDMAPs in the solution sequence are searched in ascending alphabetical order.
     - Within a subDMAP, both 'string1' and 'string2' will be used to search for a pattern match starting at the beginning of the subDMAP (not at the current position of the last string match).
8. The MALTER statement must not exceed 72 characters (no continuations are allowed).
9. Metacharacters:

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ .           │ Matches any single character except newline.                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ *           │ Matches any number (including zero) of the single character (including a character specified by a  │
│             │ regular expression) that immediately precedes it. For example, since “.” (dot) means any           │
│             │ character, “.*” means “match any number of characters.”                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ [...] or< > │ Matches any one of the characters enclosed between the brackets. For example, “[AB]” matches       │
│             │ either “A” or “B”. A range of consecutive characters can be specified by separating the first and  │
│             │ last characters in the range with a hyphen. For example “[A-Z]” will match any uppercase letter    │
│             │ from A to Z and “[0-9]” will match any digit from 0 to 9. Some metacharacters lose special meaning │
│             │ inside brackets. A circumflex (^) as the first character in the bracket tries to match any one     │
│             │ character not in the list.                                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ^ or !      │ Requires that the following regular expression be found at the beginning of the line.              │
│ or   .      │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ $           │ Requires that the preceding regular expression be found at the end of the line.                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ \           │ Treats the following special character as an ordinary character. For example “ \.” stands for a    │
│             │ period and “ \*” for an asterisk. Also, to search for a tic ('), the search string must be “ \' ”. │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ '           │ Marks the beginning and end of a pattern to be matched.                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Note:       │ Nonportable characters such as [ ] and ^ should be replaced (e.g., and ) if portability is         │
│             │ required. However, all the preceding characters are recognized by MSC Nastran.                     │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

10. Labels for use with the MALTER have been included in the solution sequences. See  . These labels will be maintained in future versions and it is strongly suggested that alters which use the MALTER command take advantage of the unique MALTER labels. Use of the MALTER labels will significantly reduce the time required to convert alters between versions.

     ###### DMAP MALTER Labels

     ```nastran
     $MALTER:AFTER PREFACE MODULES
     $MALTER:TOP OF PHASE 1 SUPERELEMENT LOOP, AFTER PARAMETERS AND QUALIFIERS SET
     $MALTER:AFTER SUPERELEMENT STIFFNESS, VISCOUS DAMPING, MASS, AND ELEMENT STRUCTURAL DAMPING GENERATION (KJJZ, BJJZ, MJJZ, K4JJ)
     $MALTER:AFTER X2JJ MATRICES READ (K2JJ, M2JJ, B2JJ)
     $MALTER:AFTER TOTAL SUPERELEMENT STIFFNESS, VISCOUS DAMPING, AND MASS FORMULATED, STRUCTURAL + DIRECT INPUT
     $MALTER:AFTER SUPERELEMENT LOAD GENERATION (PJ)
     $MALTER:AFTER UPSTREAM SUPERELEMENT MATRIX AND LOAD ASSEMBLY (KGG, BGG, MGG, K4GG, PG)
     $MALTER:AFTER SUPERELEMENT MATRIX AND LOAD REDUCTION TO A-SET, STATIC AND DYNAMIC (KAA, KLAA, MAA, MLAA, BAA, K4AA, PA)
     $MALTER:BOTTOM OF PHASE 1 SUPERELEMENT LOOP
     $MALTER:AFTER X2PP MATRICES READ (K2PP, M2PP, B2PP)
     $MALTER:AFTER SUPERELEMENT DISPLACEMENT RECOVERY (UG)
     $MALTER:AFTER ELEMENT STRESS, STRAIN, ETC. DATA RECOVERY, SORT1 (OUGV1, OES1, OEF1, ETC.)
     $MALTER:AFTER ELEMENT STRESS, STRAIN, ETC. DATA RECOVERY, SORT2 (OUGV2, OES2, OEF2, ETC.)
     $MALTER:BOTTOM OF SUPERELEMENT DATA RECOVERY LOOP
     $MALTER:USERDMAP - AFTER CALL PREFACE
     ```
