## [FIND](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.FIND.xhtml) - Automatic Calculation of Scale, Origin, and Vantage Point

Requests the plotter to optimally compute any of the parameters that can be specified on the SCALE, ORIGIN i, and/or VANTAGE POINT commands.

#### Format:

```nastran
FIND  [ SCALE  ORIGIN oid  VANTAGE POINT  SET setid  , 
          REGION { le be re te } ]
```

#### Example:

```nastran
FIND SCALE ORIGIN 5 SET 2
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ oid        │ Origin identification number (Integer > 0).                                                        │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setid      │ Set identification number etc. (Integer > 0).                                                      │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ le         │ Fractional distance of left edge of plot region from the lower left corner of the image area       │
│            │ (Real, Default = 0.0).                                                                             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ be         │ Fractional distance of bottom edge of plot region from the lower left corner of the image area     │
│            │ (Real, Default = 0.0).                                                                             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ re         │ Fractional distance of right edge of plot region from the lower left corner of the image area      │
│            │ (Real, Default = 1.0).                                                                             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ te         │ Fractional distance of top edge of plot region from the lower left corner of the image area (Real, │
│            │ Default = 1.0).                                                                                    │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The FIND command is recommended over the specification of SCALE, ORIGIN, and VANTAGE POINT commands, and should be specified prior to its associated PLOT or CONTOUR command.

2. The FIND command requests the plotter to optimally compute any of the parameters that can be specified on the SCALE, ORIGIN, and/or VANTAGE POINT commands and based on the specification of the

     • PLOTTER command;

     • PROJECTION PLANE command;

     • SET and REGION specifications on the FIND command;

     • VIEW and/or AXES commands;

     • MAXIMUM DEFORMATION command; and

     • PAPER SIZE command. All of these commands must precede the associated FIND command.

3. The FIND command can be used to compute any or all of SCALE, ORIGIN, or VANTAGE POINT as long as they have not been previously specified.

4. If SET is not specified, then the first defined SET will be used.

5. If no options are specified on the FIND command, a SCALE and VANTAGE POINT are selected and an ORIGIN is located, using the first defined SET, so that the plotter object is located within the image area.

6. The plot region is defined as some fraction of the image area (image area = 0.0, 0.0, 1.0, 1.0 and first quadrant = 0.5, 0.5, 1.0, 1.0). The image area is located inside the margins on the paper.
