## [PORHYDS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PORHYDS.xhtml) - Porous Flow Bondary with a Hydrostatic Pressure Profile

Prescribes a hydrostatic pressure profile on a porous BSURF. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORHYDS PID                                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PORHYDS 120                                                                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                   │
├───────────┼───────────────────────────────────────────────────────────┤
│ PID       │ Unique number of a PORHYDS entry. (Integer > 0; Required) │
└───────────┴───────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Reference PID by a LEAKAGE entry.
2. The surface can be only a general coupling surface (see the COUPLE entry).
3. It is required that the coupling surface refers to a HYDSTAT entry. This HYDSTAT entry will be used to prescribe a hydrostatic pressure profile on the subsurface. For example, the water level and atmospheric pressure are taken from the HYDSTYAT entry. This defines the pressure and the inflow density.
4. In contributions of the surface to the Euler elements the pressure gradient across the surface is taken into account. Therefore splitting up of the surface and creating new PORHYDS entries does not increase the accuracy of prescribed pressures. If the water level and atmospheric pressure are the same in the whole region outside the coupling surface using one PORHYDS entry is sufficient.
5. The atmospheric pressure is prescribed on those parts of the surface that are above the water level.
