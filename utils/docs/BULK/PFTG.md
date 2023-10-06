## [PFTG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PFTG.xhtml) - Fatigue Properties.

Defines fatigue properties of elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PFTG    ID              FINISH  KFINISH KF      SCALE   OFFSET          +       
+               KTREAT  DIAM    T1      T2      SPTFLG                          
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PFTG    3               POLISH                  1.2                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Unique ID referenced by a FTGDEF bulk data entry. (Integer>0)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FINISH    │ Material Surface Finish.  This is a result of manufacturing process.  Value can be NONE, POLISH,   │
│           │ GROUND, MACHINE, POOR, ROLLED, CAST, KROUGH, KSURFC (Character; Default=NONE). See Remark 1.       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KFINISH   │ Roughness factor for FINISH = KROUGH (0.0 < Real < 1.0, no Default). Surface roughness in microns  │
│           │ for FINISH = KSURFC (Real > 0.0; no Default; 0.0 ≤ Real ≤   1 . 0 for materials not listed in      │
│           │ Remark 2.).                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KF        │ Fatigue strength reduction factor. (Real ³ 0.0, Default=1.0).  See Remark 3.                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALE     │ Factor used to scale the resulting FE stresses of entities associated to this property set (Real;  │
│           │ Default=1.0).                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFSET    │ Offset used to offset the resulting FE stresses of entities associated to this property set (Real; │
│           │ Default=0.0).                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KTREAT    │ Treatment factor (Real ³ 0.0; Default = 1.0).                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIAM      │ Spot weld nugget diameter. Used in the fatigue analysis of spot welds only. (Real > 0.0 or blank,  │
│           │ No Default). See Remark 4. and 5.                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T1/T2     │ Top (T1) and bottom (T2) thickness of shells connecting spot welds. Used in the fatigue analysis   │
│           │ of spot welds only. (Real > 0.0 or blank, No Default). Both should be left blank if either one is  │
│           │ left blank. See Remark 4.                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SPTFLG    │ Flag to indicate that a lookup table is to be used to define the spot weld nugget diameter. 0 or   │
│           │ 1, Default = 0, no lookup). Only used if CWELD elements are used to define spot welds. See Remark  │
│           │ 5.                                                                                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The KF field can be used in lieu of or in addition to the FINISH & KTREAT field to modify the fatigue limit by multiplying the original fatigue limit by this value.   POOR = Poor Machined. ROLLED = As Rolled. CAST = As Cast. KROUGH and KSURFC require that a KFINISH be entered. A material CODE on the MATFTG entry must be supplied to use anything other than NONE or POLISH, otherwise an error is issued.
2. If KFINISH = KSURFC, the user should enter a value for surface roughness R  in  μ m.  This is the average surface roughness according to the German standard DIN 4768. The Surface Roughness Factor K  will then be calculated based on the strength and type of material (for example stronger materials are in general more sensitive to surface finish, and cast materials less so).  The method for calculating K  is taken from the FKM guideline  Analytical Strength Assessment of Components in Mechanical Engineering .

     If R z  <= 1 μ m, K r  = 1.

     Otherwise:

     K r  = 1-a r  log (R z ) log(2R m /R m,N,min )

     R m  is the UTS in MPa

     R m,N,min  and a r  are constants.

     ```text
     ┌───────────┬─────────────┬──────────┬──────┬──────┬──────┬────────────┬────────────────┐
     │ Material  │ Steel       │ GS*      │ GGG† │ GT‡  │ GG** │ Wrought Al │ Cast Al alloys │
     │           │             │          │      │      │      │ Alloys     │                │
     ├───────────┼─────────────┼──────────┼──────┼──────┼──────┼────────────┼────────────────┤
     │ CODE from │ 13,15,16-99 │ 9-12, 15 │ 5-8  │ 2-4  │ 1    │ 100-105    │ 106            │
     │ MATFTG    │             │          │      │      │      │            │                │
     ├───────────┼─────────────┼──────────┼──────┼──────┼──────┼────────────┼────────────────┤
     │ ar        │ 0.22        │ 0.20     │ 0.16 │ 0.12 │ 0.06 │ 0.22       │ 0.20           │
     ├───────────┼─────────────┼──────────┼──────┼──────┼──────┼────────────┼────────────────┤
     │ Rm,N,min  │ 400         │ 400      │ 400  │ 350  │ 100  │ 133        │ 133            │
     └───────────┴─────────────┴──────────┴──────┴──────┴──────┴────────────┴────────────────┘
     ```

     ```text
     ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ *GS = cast steel and heat treatable cast steel, for general purpose †GG = cast iron with lamellar graphite (grey cast iron) ‡GGG = nodular cast iron **GT = malleable cast iron │
     └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
     ```

3. Fatigue strength reduction factor can take into account notch effects, size effects, and loading type influence.   ![bulkp07098.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07098.jpg?_LANG=enus)  where the latter three are correction factors for each effect, respectively.
4. If T1, T2, and DIAM are specifically supplied, they are used directly in the fatigue analysis of spot welds. If either T1 or T2 are blank, the thicknesses are automatically determined from the PSHELL entries that connect the spot welds.

     When performing optimization using SOL 200, it is necessary to leave T1 and T2 blank if the connecting shell thicknesses are being used as design variable, otherwise the fatigue analysis of the spot welds will not use correct thicknesses from one design cycle to another.

5. If DIAM is left blank, the following rule is used:

     - The diameter is derived based on the minimum thickness of the two sheets either side of the weld by performing a lookup on a table. An example table is provided in the  spotweld.sys  file in the msc20xx/util directory of a standard MSC Nastran installation. This is true for element types CBAR/CBEAM and CHEXA used to define spot welds. If using CWELD elements the diameter is automatically extracted from the PWELD entry, if SPTFLG=0. If SPTFLG=1, then the lookup table is used for CWELDs. The  spotweld.sys  file is specified by including the  spotweld=<path>/spotweld.sys  on the Nastran command line or defining it in the Nastran RC file as is done with other keywords. See  . If not specified, the default table is used as given in the example file mentioned.

     In the case of a table lookup to determine DIAM, the thicknesses of the top and bottom sheets must be within the range of the lookup table, which is up to 3mm by default. Otherwise a fatal error is issued. Also the diameter is set as a function of the thickness of the thinnest sheet joined by the spot weld. No interpolation between the data points in the  spotweld.sys  file is done; rather, the thickness of the thinnest sheet from each spot weld is compared to the table, and the value of thickness that is nearest to but less than or equal to the thickness of the sheet is identified. The corresponding diameter from the table is assigned to that spot weld.

     Example  spotweld.sys  file:

     ```text
     SPOT WELD DEFINITION FILE 
     
     NUGGET_DIAMETER=BY_THICKNESS 

     0.3,3.5 
     0.8,4.0 
     1.2,5.0 
     2.0,5.5 
     3.0,6.0
     ```

     Note that there may be rounding errors in the extraction of sheet thicknesses, so when defining a  spotweld.sys  file, it may be a good idea to reduce the sheet thickness values by a small tolerance in order to avoid anomalous results

     ```text
     ┌──────────┬──────────────────────────┬──────────┐
     │ Fatigue  │ Analysis / Material Type │          │
     │ Property │ Category                 │          │
     ├──────────┼──────────────────────────┼──────────┤
     │ SN       │ EN                       │ SpotWeld │
     ├──────────┼──────────────────────────┼──────────┤
     │ FINISH   │ +                        │ +        │
     ├──────────┼──────────────────────────┼──────────┤
     │ KFINISH  │ +                        │ +†       │
     ├──────────┼──────────────────────────┼──────────┤
     │ KF       │ +                        │ +†       │
     ├──────────┼──────────────────────────┼──────────┤
     │ SCALE    │ +                        │ +        │
     ├──────────┼──────────────────────────┼──────────┤
     │ OFFSET   │ +                        │ +        │
     ├──────────┼──────────────────────────┼──────────┤
     │ SHAPE    │                          │ +        │
     ├──────────┼──────────────────────────┼──────────┤
     │ KTREAT   │ +                        │ +†       │
     ├──────────┼──────────────────────────┼──────────┤
     │ DIAM     │                          │          │
     ├──────────┼──────────────────────────┼──────────┤
     │ T1/T2    │                          │          │
     ├──────────┼──────────────────────────┼──────────┤
     │ SPTFLG   │                          │          │
     └──────────┴──────────────────────────┴──────────┘
     ```

     \+     Available;
     
     †      Not available for Multi-mean or Multi R-ratio curves

