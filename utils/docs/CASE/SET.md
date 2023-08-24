## [SET (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SET.Case.xhtml) - Set Definition, General Form

Sets are used to define the following lists:

1. Identification numbers (point, element, or superelement) for processing and output requests.
2. Frequencies for which output will be printed in frequency response problems, or times for transient response, using the OFREQ and OTIME commands, respectively.
3. Surface or volume identification numbers to be used in GPSTRESS or STRFIELD commands.
4. DRESP1 entries that are used in the spanning of subcases.
5. Grid point number and component type code to be used by the MCFRACTION command.

#### Formats:

![casecontrol4a01322.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01322.jpg?_LANG=enus)  

![casecontrol4a01324.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01324.jpg?_LANG=enus)  

![casecontrol4a01326.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01326.jpg?_LANG=enus)  

![casecontrol4a01328.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01328.jpg?_LANG=enus)  

![casecontrol4a01330.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01330.jpg?_LANG=enus)  

#### Examples:

```nastran
SET 77=5
SET 88=5, 6, 7, 8, 9, 10 THRU 55 EXCEPT 15, 16, 77, 78, 79, 100 THRU 300
SET 99=1 THRU 100000
SET 101=1.0, 2.0, 3.0
SET 105=1.009, 10.2, 13.4, 14.0, 15.0
SET 1001=101/T1, 501/T3, 991/R3
SET 2001=M1,M2
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number. Any set may be redefined by reassigning its identification number. SETs │
│           │ specified under a SUBCASE command are recognized for that SUBCASE only (Integer > 0).              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Grid point identification numbers and component codes. The  values must be of T1, T2, T3, R1, or   │
│           │ R3.                                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ etc.      │ Identification names of literals used for matrix or group selection.                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ etc.      │ Identification numbers. If no such identification number exists, the request is ignored (Integer   │
│           │  >  0).                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Identification numbers  (Integer > 0).                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCEPT    │ Set identification numbers following EXCEPT will be deleted from output list as long as they are   │
│           │ in the range of the set defined by the immediately preceding THRU. An EXCEPT list may not include  │
│           │ a THRU list or ALL.                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Frequencies or times for output. The nearest solution frequency or time will be output. EXCEPT and │
│           │ THRU cannot be used. If an OFREQ or OTIME command references the set then the values must be       │
│           │ listed in ascending sequences, ...etc., otherwise some output may be missing. If an OFREQ or OTIME │
│           │ command is not present, all frequencies or times will be output (Real  >  0.0).                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ All members of the set will be processed.                                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A SET command may be more than one physical command. A comma at the end of a physical command signifies a continuation command. Commas may not end a set. THRU may not be used for continuation. Place a number after the THRU.
2. Set identification numbers following EXCEPT within the range of the THRU must be in ascending order.
3. In SET 88 above, the numbers 77, 78, etc., are included in the set because they are outside the prior THRU range.
4. SET commands using the grid point/component code format cannot contain THRU. SETs using this format should be selected only by the MCFRACTION Case Control command.
5. SET commands using literals apply only to direct matrix input such as K2PP etc. or FLSPOUT panel grouping.
