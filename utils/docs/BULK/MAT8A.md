## [MAT8A](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT8A.xhtml) - Orthotropic Failure Material Properties - SOL700

Defines the failure properties for an orthotropic material for shell elements. Used in SOL700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT8A   MID     FT      NV      S       ALPHA   TRSFAIL F12                     
        XT      XC      YT      YC      PFD     VALUE   PFDST                   
        FBTEN   FBCOM   MXTEN   MXCOM   MXSHR                                   
                                                                                
        PRDFT   PRDFC   PRDMT   PRDMC   PRDSH                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT8A   7       COMBINAT        100.                                            
+       200.0   150.0   100.0   110.0   STEPS   200.0                           
+       CHANG   STRSS   MODSAI  MODTSAI STRSS                                   
+                                                                               
+                                       0011                                    
```
```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MID       │ Material identification. See Remark 1. (Integer > │                                                  │
│           │ 0, Required.)                                     │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ FT        │ Failure theory to be used to test whether the     │                                                  │
│           │ element layer fails. See Remark 2. (Character;    │                                                  │
│           │ default=blank)                                    │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ Blank                                             │ No failure                                       │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ HILL                                              │ Tsai-Hill theory                                 │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ TSAI                                              │ Tsai-Wu theory                                   │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ MODTSAI                                           │ Modified Tsai-Wu theory                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ STRSS                                             │ Maximum stress                                   │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ CHANG                                             │ Chang-Chang theory                               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ COMBINAT                                          │ Combination (See Remark 6.)                      │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ HASHIN                                            │ Hashin theory                                    │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ NV        │ Number of additional history variables for a user │                                                  │
│           │ model. See Remark 8. Currently it is not          │                                                  │
│           │ available. (0 < Integer < 10; default=0)          │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ S         │ Failure stress for in-plane shear. See Remark     │                                                  │
│           │ 4. (Real > 0.0; required.)                        │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ALPHA     │ Nonlinear shear coefficient. See Remark 5. (Real  │                                                  │
│           │ ≥ 0.0; default=0.0)                               │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TRSFAIL   │ Transverse shear failure. (Character;             │                                                  │
│           │ default=SUBL)                                     │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ ELEM                                              │ Failure if element fails                         │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ SUBL                                              │ Failure if sublayer fails                        │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ F12       │ Interaction term in Tsai-Wu theory. (Real,        │                                                  │
│           │ default=0.0)                                      │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ XT        │ Tensile failure stress in the large structural    │                                                  │
│           │ direction. See Remark 4. (Real ≥ 0.0;             │                                                  │
│           │ default=0.0)                                      │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ XC        │ Compressive failure stress in the large           │                                                  │
│           │ structural direction. See Remark 4. (Real ≥ 0.0;  │                                                  │
│           │ default=0.0)                                      │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ YT        │ Tensile failure stress in the lateral direction.  │                                                  │
│           │ See Remark 4. (Real ≥ 0.0; default=0.0)           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ YC        │ Compressive failure stress in the lateral         │                                                  │
│           │ direction. See Remark 4. (Real ≥ 0.0;             │                                                  │
│           │ default=0.0)                                      │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PFD       │ Post-failure degradation model. See Remark 8.     │                                                  │
│           │ (Character; default=STEPS)                        │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ STEPS                                             │ Degrade stresses by time steps                   │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ TIME                                              │ Degrade stresses by time                         │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ VELOC                                             │ Degrade stresses by velocity                     │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ VALUE     │ Depending on PFD, VALUE gives the number of time  │                                                  │
│           │ steps, time interval, or propagation velocity.    │                                                  │
│           │ (Real > 0; default=100.0)                         │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PFDST     │ Post-failure degradation start. See Remark 8.     │                                                  │
│           │ (Character; default=INDV)                         │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ INDV                                              │ Stresses are degraded per distinct failure mode. │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ ALL                                               │ Stresses are degraded if all elastic constants   │
│           │                                                   │ are zero.                                        │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ FBTEN     │ Tensile failure modes in fiber direction for      │                                                  │
│           │ individual failure definition. See Remark         │                                                  │
│           │ 6. (Character; required.)                         │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ FBCON     │ Compressive failure modes in fiber direction for  │                                                  │
│           │ individual failure definition. See Remark 6.      │                                                  │
│           │ (Character; required.)                            │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MXTEN     │ Tensile failure modes in matrix direction for     │                                                  │
│           │ individual failure definition. See Remark 6.      │                                                  │
│           │ (Character; required.)                            │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MXCOM     │ Compressive failure modes in matrix direction for │                                                  │
│           │ individual failure definition. See Remark 6.      │                                                  │
│           │ (Character; required.)                            │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MXSHR     │ Shear failure modes for individual failure        │                                                  │
│           │ definition. See Remark 6. (Character; required.)  │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PRDFT     │ Property degradation due to fiber-tension         │                                                  │
│           │ failure. See Remark 7. (Integer; default=1111)    │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PRDFC     │ Property degradation due to fiber-compression     │                                                  │
│           │ failure. See Remark 7. (Integer; default=1010)    │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PRDMT     │ Property degradation due to matrix-tension        │                                                  │
│           │ failure. See Remark 7. (Integer; default=0110)    │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PRDMC     │ Property degradation due to matrix-compression    │                                                  │
│           │ failure. See Remark 7. (Integer; default=0110)    │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PRDSH     │ Property degradation due to in-plane shear        │                                                  │
│           │ failure. See Remark 7. (Integer; default=0001)    │                                                  │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```
#### Remarks:

1. The material number must refer to a MAT8 material definition.

2. If a failure theory is selected other than COMBINAT, the theory defines the following failure modes:

```text
┌─────────┬──────────────────────────────────────────────────────┐
│ CHANG   │ Fiber tension, matrix tension/compression            │
├─────────┼──────────────────────────────────────────────────────┤
│ HILL    │ All modes                                            │
├─────────┼──────────────────────────────────────────────────────┤
│ TSAI    │ All modes                                            │
├─────────┼──────────────────────────────────────────────────────┤
│ MODTSAI │ Matrix tension/compression                           │
├─────────┼──────────────────────────────────────────────────────┤
│ STRSS   │ All modes                                            │
├─────────┼──────────────────────────────────────────────────────┤
│ HASHIN  │ Fiber tension/compression Matrix tension/compression │
└─────────┴──────────────────────────────────────────────────────┘
```


     For an element to fail completely, both fiber and matrix in all sublayers must fail.

3. This material model can only be referenced from a PCOMP entry.

4. Failure stresses are required if a failure theory is selected.

5. ALPHA is used for all failure theories to define a nonlinear stress-strain relation.

6. The individual failure modes are defined according to the corresponding mode in the theory as listed under FT. To be relevant, the theory must define the failure mode (see Remark  ). You must enter data if FT is set to COMBINAT.

7. The property degradation rules due to the various failure modes are listed below:

```text
┌──────────┬──────────────┬────────────┐
│ Material │ Failure Mode │            │
│ Constant │              │            │
├──────────┼──────────────┼────────────┤
│          │ Fiber Tens   │ Fiber Comp │
├──────────┼──────────────┼────────────┤
│ E1       │ X            │ X          │
├──────────┼──────────────┼────────────┤
│ E2       │ X            │            │
├──────────┼──────────────┼────────────┤
│ V12      │ X            │ X          │
├──────────┼──────────────┼────────────┤
│ G12      │ X            │            │
└──────────┴──────────────┴────────────┘
```
     The Poisson’s ratio Nu21 is treated the same as Nu12.

     To override the default model, an integer value is defined as a packed word in the following order: 

```text
┌───┬───────────────────────────────┐
│ 1 │ Denotes property degradation. │
├───┼───────────────────────────────┤
│ 0 │ Denotes no degradation.       │
└───┴───────────────────────────────┘
```
     The last five fields of the MAT8A Bulk Data entry are input for the user to specify the degradation behavior for each mode of failure.

8. The PFD entry indicates how the stresses are degraded to zero. The PFDST indicates when the stresses start to degrade.

     Using ALL means that degradation starts when all material constants (E1, E2, V12, G12) are degraded to zero as specified by the FT entry and the property degradation rules. Note that property degradation means that the stress increments are zero but that the stresses degrade according to PFD.

     INDV means that stress degradation starts for the fiber stress if E1=0.0, for matrix stress if E2=0.0, and for shear stress if G12=0.0.

9. Any failure theory introduces five additional sublayer variables. The PFDST entry introduces three additional variables. The number of user variables is defined by NV.

