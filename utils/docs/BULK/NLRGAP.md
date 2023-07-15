## [NLRGAP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLRGAP1.xhtml) - Nonlinear Load Proportional to Gap

Defines a nonlinear radial (circular) gap for transient response or nonlinear harmonic response.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLRGAP  SID     GA      GB      PLANE   TABK    TABG    TABU    RADIUS          
        “GAMMA” SMVAL                                                           
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLRGAP  21      3       4       XY      3       10      6       1.6             
        GAMMA   1.0E+6                                                          
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Nonlinear load set identification number. (Integer > 0)                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA        │ Inner (e.g., shaft) grid for radial gap. (Integer > 0)                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GB        │ Outer (e.g., housing) grid for radial gap. (Integer > 0)                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLANE     │ Radial gap orientation plane: XY, YZ, or ZX. (Character; Default  =  XY.)                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABK      │ TABLED1 ID defining gap stiffness vs. time or frequency (Integer > 0) or the TABLED1 ID defining │
│           │ gap force vs. penetration (Integer < 0), or TABLED5 ID defining frequency and (gap force vs.     │
│           │ penetration) for nonlinear harmonic response only. See Remark 11.                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABG      │ Table ID for radial gap clearance as function of time for transient response or frequency for    │
│           │ nonlinear harmonic response. (Integer > 0)                                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABU      │ Table ID for radial coefficient of friction as function of time for transient response or        │
│           │ frequency for nonlinear harmonic response. (Integer > 0)                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADIUS    │ Shaft radius. (Real > 0.0; Default = 0.0)                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “GAMMA”   │ Keyword flag to identify usage of Smoothing function (CHAR)                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SMVAL     │ Smoothing function value. (Real >0, Default=1.E0+6)                                              │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. NLRGAP must be selected with the Case Control command NONLINEAR = SID.

2. Multiple NLRGAP entries with the same SID are allowed.

3. The NLRGAP is not an element, but a nonlinear load similar to the NOLINi Bulk Data entries.  It computes the relative displacements of GA and GB in the selected plane and applies appropriate nonlinear loads to simulate the radial contact.

4. The degrees-of-freedom in the XY, YZ, or ZX planes (depending on the PLANE) of GA and GB must be members of the solution set. This means the e-set for modal formulation and the d-set for direct formulation. If RADIUS is > 0.0, then the in-plane rotation degree-of-freedom must also be in the solution set.

5. The NLRGAP is limited to use in direct transient or nonlinear harmonic response solution sequences. When enforced motion is used, the NLRGAP requires that PARAM,ENFMETH,ABS be specified because the generated loads are a function of total displacement and not relative displacement.

6. The XY, YZ and ZX planes are relative to the displacement coordinates systems of GA and GB.

     In order to ensure correct results, points GA and GB must satisfy the following three conditions:

a. They must both be grid points

b. They must be coincident

c. They must have parallel displacement coordinate systems

     The program checks for the above conditions. If they are not satisfied, the program terminates the execution with an appropriate fatal message. The coincident check can be skipped by specifying system(648)=1. The default is 0.

7. The shaft radius is used only for the computation of friction induced torque.

8. In the underlying equations, a positive coefficient of friction is consistent with counter-clockwise shaft rotation from axis 1 towards axis 2 (anti-clockwise). A negative coefficient of friction is consistent with clockwise shaft rotation from axis 2 towards axis 1 (clockwise). See  .

9. Nonlinear forces for the grids referenced on the NLRGAP can be output with the NLLOAD Case Control command. See   for the sign conventions.

![bulkno06168.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06168.jpg?_LANG=enus)

Figure 0-65   Radial Gap Orientation and Nonlinear Load Sign Conventions

10. The time step algorithm in transient solution sequences may loose unconditional stability when this load entry is used. In most practical cases, the time step size chosen to reach a certain accuracy is below the stability limit. It is recommended to decrease the time step if results diverge. Additional recommendations are outlined in the user guides.

11. TABK may reference either a TABLED1 ID or a TABLED5 ID.

     For transient response, only a TABLED1 entry may be referenced. There are two possible scenarios:

a. The number entered in the TABK field is a positive integer. In this case the integer references a TABLED1 entry defining pairs of time vs. gap stiffness.

b. The number entered in the TABK field is a negative integer. In this case the absolute value of the integer references a TABLED1 entry defining pairs of gap penetration vs. gap force.

     For nonlinear harmonic response either a TABLED1 entry or a TABLED5 entry may be referenced leading to three possible scenarios:

a. The number entered in the TABK field is a positive integer referencing a TABLED1 entry. In this case, the pairs of values defined on the TABLED1 entry are frequency vs. gap stiffness.

b. The number entered in the TABK field is a negative integer, the absolute value of which references a TABLED1 entry. In this case, the pairs of values defined on the TABLED entry are gap penetration vs. gap force.

c. The number entered in the TABK field is a positive integer referencing a TABLED5 entry. In this case, the pairs of values defined on the TABLED5 entry are frequency vs. a TABLED1 ID that defines pairs of gap penetration vs. gap force.

12. Forces due to TABK and TABU at GA and GB are only present when the gap is closed. A moment is applied only when the gap is closed and RADIUS > 0.0.

13. Smoothing function feature is supported only for SOL128 solution. Refer  MSC Nastran Rotordynamics User’s Guide  for details on smoothing function calculations and example.

14. GAMMA is a new option to specify the flag to use smoothing function option for NLRGAP element.

15. SMVAL is the smoothing function value to be used. It is recommended to use a value of 1.0E+06.

16. UFM will be issued if TABLED5 is used in TABK field when using smoothing function.

