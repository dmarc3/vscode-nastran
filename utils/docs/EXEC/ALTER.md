## [ALTER](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.ALTER.xhtml) - Inserts and/or Deletes DMAP Statements

Inserts and/or deletes DMAP statements in a subDMAP.

#### Format:

```nastran
ALTER k1 [,k2]
```

or

```nastran
ALTER  'string1'[(occurrence,offset)] ,['string2'[(occurrence,offset)] ]
```

or

```nastran
ALTER  k1 , ['string2'[(occurrence,offset)] ]
```

or

```nastran
ALTER  'string1'[(occurrence,offset)] , [k2]
```

#### Examples:

1. The following alter will insert a MATPRN DMAP statement after the first occurrence of the string 'SDR2' in subDMAP DSASTAT:

```nastran
SOL 101
COMPILE DSASTAT $
ALTER 'SDR2' $
MATPRN OESDS1//$
CEND
```

2. The following alter will delete the second occurrence of the OUTPUT4 DMAP statement in subDMAP DSASTAT and replace it with a MATPRN DMAP statement:

```nastran
SOL 101
COMPILE DSASTAT $
ALTER 'OUTPUT4'(2),'OUTPUT4'(2) $
$ OR
$ ALTER 'OUTPUT4'(2),'' $
MATPRN OESDS1//$
CEND
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k1           │ If k2 or 'string2' is not specified, the subsequent DMAP statements will be inserted after either │
│              │ the statement number k1 or the 'string1', [(occurrence,offset)] reference point.                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ k1, k2       │ DMAP statements numbered k1 through k2 will be deleted and may be replaced with subsequent DMAP   │
│              │ statements.                                                                                       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 'string1'    │ if 'string2' or k2 is not specified, the subsequent DMAP statements will be inserted after the    │
│              │ first occurrence of 'string1'.                                                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 'string1',   │ DMAP statements beginning with the first occurrence of 'string1' through DMAP statements          │
│ 'string2'    │ containing the first occurrence of 'string2' will be deleted and may be replaced with subsequent  │
│              │ DMAP statements.                                                                                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ occurrence   │ This flag indicates which occurrence of the preceding string is to be used, starting at the       │
│              │ beginning of the subDMAP (Integer  >  0; Default  =  1).                                          │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ offset       │ This flag indicates the offset from the reference DMAP statement. Depending on the sign the       │
│              │ specific DMAP statement may be above (-offset) or below (+offset) the referenced DMAP statement   │
│              │ (Integer; Default  =  0).                                                                         │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The ALTER statement must be used in conjunction with the COMPILE Executive Control statement. Note: ALTER statements cannot be used in conjunction with an MALTER statement, and therefore should never immediately follow this statement.
2. If an MALTER statement is used in conjunction with the ALTER statement, then the MALTER should be placed above the COMPILE statements. Failure to place the MALTER in this position may cause ALTER statements to be ignored.
3. The ALTERs can reference the DMAP statements in any order within a subDMAP. Two restrictions on ordering are:
     - K2 or 'string2'(occurence, offset) references must refer to a DMAP statement number that is greater than or equal to the k1 or 'string1'(occurrence,offset) reference within a single ALTER statement.
     - K1 or 'string1' and k2 or 'string2' cannot overlap DMAP line positions with another ALTER that references the same subDMAP.
4. The 'string1' or 'string2' used as a search pattern will apply to one complete DMAP statement; i.e., a multiline DMAP statement will be searched for a pattern match as if each 72 character line of the DMAP statement were concatenated together into one string–all blanks and comments either embedded or immediately preceding the DMAP statement, will be retained. However, comments are ignored for the following type of alter:

     ```nastran
     alter ‘^ *gp0'
     ```

5. Within a SUBDMAP, both 'string1' and 'string2' will be used to search for a pattern match starting at the beginning of the subDMAP–not at the current position of the last string match.
6. The special characters (metacharacters) used for string searching are described in Remark   The characters <, >, and $, which are common DMAP characters, are also special metacharacters. If they are to be used in the search string as regular characters, then they must be preceded by a backward slash (\). For example, to find the string

     ```nastran
     IF(DDRMM >= - 1)
     ```

     the command is

     ```nastran
     ALTER 'IF (DDRMM \> = - 1)' $
     ```

7. The ALTER statement must not exceed 72 characters (no continuations are allowed).
8. 'string2' (r2,02) can be defaulted to 'string1' (r1,01) by using a null string (''). For example, the alter statement

     ```nastran
     ALTER 'string1'(r1,01),''
     ```

     is equivalent to

     ```nastran
     ALTER 'string1'(r1,01),'string1'(r1,01)
     ```

     The defaults for (r2,02) using the null string can be overridden by specifying (r2,02).

     As another example, the alter statement

     ```nastran
     ALTER 'string1'(r1,01),''(r2,02)
     ```

     is equivalent to

     ```nastran
     ALTER 'string1'(r1,01),'string1'(r2,02)
     ```

9. Metacharacters*:

     ```text
     ┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ .            │ Matches any single character except newline.                                                       │
     ├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ *            │ Matches any number (including zero) of the single character (including a character specified by a  │
     │              │ regular expression) that immediately precedes it. For example, since “.” (dot) means any           │
     │              │ character, “.*” means “match any number of characters”.                                            │
     ├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ [...] or < > │ Matches any one of the characters enclosed between the brackets. For example, “[AB]” matches       │
     │              │ either “A” or “B”. A range of consecutive characters can be specified by separating the first and  │
     │              │ last characters in the range with a hyphen. For example “[A-Z]” will match any uppercase letter    │
     │              │ from A to Z and “[0-9]” will match any digit from 0 to 9. Some metacharacters lose special meaning │
     │              │ inside brackets. A circumflex (^) as the first character in the bracket tries to match any one     │
     │              │ character not in the list.                                                                         │
     ├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ ^ or !       │ Requires that the following regular expression be found at the beginning of the line. Note that    │
     │ or   .       │ these metacharacters may lead to User Fatal Message 802 if the preceding line is a comment.        │
     ├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ $            │ Requires that the preceding regular expression be found at the end of the line.                    │
     ├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ \            │ Treats the following special character as an ordinary character. For example, “ \ .” stands for a  │
     │              │ period and “ \*” for an asterisk. Also, to search for a tic ( ' ), the search string must be       │
     │              │ single quotes.                                                                                     │
     ├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ '            │ Marks the beginning and end of a pattern to be matched.                                            │
     ├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ Note:        │ Nonportable characters such as [ ] and ^ should be replaced (e.g., ^ ->! and [ ] -><>) if          │
     │              │ portability is required. However, all the preceding characters are recognized by MSC Nastran.      │
     └──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
     ```

10. If a string-based alter uses the “!” in the expression (find occurrence at the beginning of line), it is possible MSC Nastran will fail with User Fatal Message 802.
