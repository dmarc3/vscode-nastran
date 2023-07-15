## [FTGEVNT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FTGEVNT.xhtml) - Fatigue Loading Events

Groups simultaneously applied loads into loading events for pseudo-static fatigue analysis using SOL 101 or modal analysis using SOL 103 or random vibration fatigue using SOL 108 or SOL 111 by referencing FTGLOAD entries.

#### Format (SOL 101, 103, 108, 111):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGEVNT ID      FLOAD1  FLOAD2  FLOAD3  FLOAD4  FLOAD5  FLOAD6  FLOAD7          
                FLOAD8  ...     ...     ...     ...     ...     ...             
                -etc-                                                           
        “NAME”  EVNTNAM 
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FTGEVNT 22      4       11                                                      
        NAME    rough...
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique ID. See Remark 1.                                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLOADi    │ ID of a FTGLOAD entry (Integer > 0, no default).  See Remark 5.                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAME      │ Flag indicating that a name is to be associated with this load event. See Remark 2.               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EVNTAM    │ Event name associated with this event (Character). Can span fields 3 through 9, however for       │
│           │ practical purposes, the name is truncated in f06 output. No spaces are allowed. See Remark 3. and │
│           │ 4.                                                                                                │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Each   ID must be unique relative to all other   and   IDs.

2. Event names are passed to the f06 print file and displayed as the name of the event as opposed to the event ID. If no name is given, the event is referred to by its ID.

3. EVNTNAM cannot have numbers at the start of any field. For example, using 8 character formatted fields, the first character of fields 3-9 cannot be numeric (columns 1, 9, 17, etc. of the EVNTNAM field). These would be acceptable:
“ Flights”  or “ F_l_i_g_h_t_s ’.
But these would not be acceptable:
“ 1 _Flights ” or “ F_l_i_g_ 2 ts ”
because the “1” and the “2” are in columns 1 and 9 of the EVNTNAM field.

4. EVNTNAM cannot handle spaces within its field as one might expect. If you wish to uses spaces, make sure that once a space is used the next character does not start until the start of the next field. For example, using 8 character formatted fields, the following would be acceptable:
“ My_flights ” or “ My      Flights ”.
But this would not be acceptable:
“ My Flights ”
and would end up just being displayed as “ Myts ” because once a space is encountered within the 8 character field, the code interprets that as no more character data until it processes the next 8 character field. It is best not to use spaces in EVNTNAM.

5. For random vibration fatigue ( SOL 108 and 111 ),

     • Only one FTGLOAD of TYPE=PSD can be referenced

     • Only one FTGLOAD of TYPE=STATIC can be referenced

     • A FTGEVNT referencing a FTGLOAD of TYPE=STATIC by itself is not allowed

     • A FTGEVNT referencing a FTGLOAD of TYPE=SINE or NARROW by itself (or themselves) is allowed for pure deterministic and/or sine sweeps

     • Only single load PSD random input allows mixed deterministic, sine sweep, and static offsets on random loading. Only a static offset (FTGLOAD of TYPE=STATIC) can be mixed with multi-load PSD random input.

     • FTGSEQ entry referencing FTGEVNT entries cannot mix events containing single load and multi-load PSDs.

     • All multi-load PSD events must all have the same number of channels (input loads).

     • When only FTGLOAD entries of TYPE=SINE or NARROW are referenced (i.e., only deterministic loading with no random loading input), it is recommended that the ATYPE field of the FTGPARM entry be set to SINE.

