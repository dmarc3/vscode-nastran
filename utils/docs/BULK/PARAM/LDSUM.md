## [LDSUM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.LDSUM.xhtml)

Default = 0

Dictates what trim information is to be stored on a CSV (comma separated values) file in a SOL 144 (static aeroelasticity) task. The unit the CSV file is stored to is specified by PARAM, XYUNIT, n. LDSUM has the following options:

```text
┌───┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 0 │ (Default) – Do not create a CSV file for static aeroelasticity                                   │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1 │ Create a CSV file that contains for each static aeroelastic subcase:                             │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│   │ *Subcase ID                                                                                      │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│   │ *Mach number                                                                                     │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│   │ *Dynamic Pressure                                                                                │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│   │ *Trim Values                                                                                     │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│   │ *Mass and CG information (mass, xcg,ycg,zcg, IXX,IYY,IZZ,IXY,IXZ and IYZ)                        │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2 │ Same as 1 plus net structural monitor point (MONPNT1, MONDSP1, MONPNT2, MONPNT3) results.        │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3 │ Same as 2 plus the output of RIGID AIR, ELASTIC RESTRAINED, and INERTIAL, RIGID APPLIED and      │
│   │ ELASTIC APPLIED components for the structural MONPNT1 results.                                   │
├───┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4 │ Same as 3 plus the output of RIGID AIR and ELASTIC RESTRAINED components for aerodynamic MONPNT1 │
│   │ results.                                                                                         │
└───┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
