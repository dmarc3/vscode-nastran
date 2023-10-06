## [RGYRO (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.RGYRO.Case.xhtml) - Activates Gyroscopic Effects and Selects RGYRO or UNBALNC Entries

The RGYRO Case Control command activates the rotodynamics capability, and selects the RGYRO Bulk Data entry for use in complex modes, frequency response, and static analysis. For transient response, the RGYRO command selects the UNBALNC Bulk Data entry. If the UNBALNC entry is not required, setting RGYRO to YES will include the gyroscopic effects in the transient response calculation. Setting RGYRO to NO will deactivate gyroscopic effects in all solutions.

#### Format:
For complex modes, frequency response, and static analysis:

```nastran
RGYRO = n or YES/NO
```

#### Examples:

```nastran
RGYRO = 100
```

#### For Transient Response:

```nastran
RGYRO = YES
```

or

```nastran
RGYRO = 200
```
