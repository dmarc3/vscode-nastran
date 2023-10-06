## [SETP (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SETP.Case.xhtml) - Process Set Definition

Process sets are used to define lists of SET identifications to be processed individually for data recovery:

#### Formats:

![casecontrol4a01348.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01348.jpg?_LANG=enus)  


#### Examples:

```nastran
SETP 77=5, 6
SETP 88=5, 6, 7, 8, 9, 10 THRU 55
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ SETP identification number. Any SETP may be redefined by reassigning its identification number.   │
│           │ SETPs specified under a SUBCASE command are recognized for that SUBCASE only (Integer > 0).       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i1, i2,   │ SET identification numbers i1, i2, etc. If no such identification number exists, the request is   │
│ ...., in  │ ignored (Integer > 0).                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EXCEPT    │ Set identification numbers following EXCEPT will be deleted from output list as long as they are  │
│           │ in the range of the set defined by the immediately preceding THRU. An EXCEPT list may not include │
│           │ a THRU list or ALL.                                                                               │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A SETP command may be more than one physical command. A comma at the end of a physical command signifies a continuation command. Commas may not end a set. THRU may not be used for continuation—place a number after the THRU.
2. Set identification numbers following EXCEPT,k within the range of the THRU, must be in ascending order.
3. SETP usage is limited to the EDE, EKE and ESE Case Control commands.
