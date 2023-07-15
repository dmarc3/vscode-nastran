## [VCCT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.VCCT.xhtml) - Virtual Crack Closure Technique - SOL 400

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
VCCT    ID      IDCR    ITYPE   IGROW   INCM    METHOD                          
        CGI     GC                                      GC-II   GC-III          
        TABCGI  TABGC                                   TABGC-IITABGC...        
        G1      G2      G3      G4      G5      etc.                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
VCCT    101     1       2       2       2       1               1               
                2000.                                                           
                0                                                               
        51      52                                                              
```
```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ ID        │ Identification of a matching Case Control VCCT    │                                             │
│           │ entry. See Remark 2. (Integer; no Default)        │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ IDCR      │ Identification of this particular crack. IDCR     │                                             │
│           │ must be unique among all VCCT cracks with the     │                                             │
│           │ same ID but can replace a crack with the same     │                                             │
│           │ IDCR. (Integer > 0; Default = 1)                  │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ ITYPE     │ Type of crack propagation. (Integer; Default = 0) │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ 0                                                 │ No crack propagation                        │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ 2                                                 │ Direct crack propagation                    │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ IGROW     │ Specifies how the crack grows. (Integer; Default  │                                             │
│           │ = 2)                                              │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ 1                                                 │ Uses remeshing (not presently available)    │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ 2                                                 │ Release user tyings or glued contact        │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ INCM      │ Specifies the crack growth increment (Integer;    │                                             │
│           │ Default = 1)                                      │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ 1                                                 │ Uses a fixed increment or a user subroutine │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ METHOD    │ Specifies the method used for the estimated crack │                                             │
│           │ growth direction (Integer; Default=1)             │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│           │ 1                                                 │ Maximum hoop stress criterion (Default)     │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ CGI       │ Crack growth increment (Real; Default = 0.0).  If │                                             │
│           │ the option of releasing tyings or glued contact   │                                             │
│           │ is used, the length of the released element edge  │                                             │
│           │ is used.  Leave blank for fatigue growth defined  │                                             │
│           │ by the Paris law. (Not presently used)            │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ GC        │ Crack growth resistance. (Real; Default = 0.0)    │                                             │
│           │    Ignored for fatigue growth. If different crack │                                             │
│           │ growth resistance values are needed from modes I, │                                             │
│           │ II, III, this is the mode I value and modes II    │                                             │
│           │ and III are entered in fields 8 and 9.            │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ GC-II     │ Crack growth resistance, Mode II (Real; Default = │                                             │
│           │ 0.0) Ignored for fatigue growth.                  │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ GC-III    │ Crack growth resistance, Mode III (Real; Default  │                                             │
│           │ = 0.0) Ignored for fatigue growth.                │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ TABCGI    │ TABLEMi or TABL3Di for CGI (crack growth          │                                             │
│           │ increment). (Integer; Default = 0)                │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ TABGC     │ TABLEMi or TABL3Di for scaling GC (crack growth   │                                             │
│           │ resistance). (Integer; Default = 0)               │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ TABGC-II  │ TABLEMi or TABL3Di for scaling GC-II (Integer;    │                                             │
│           │ Default = 0)                                      │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ TABGC-III │ TABLEMi or TABL3Di for scaling GC-III (Integer;   │                                             │
│           │ Default = 0)                                      │                                             │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ Gi        │ Grids along the crack front – for a shell there   │                                             │
│           │ is only one node. See Remark 6. (Integer or       │                                             │
│           │ “THRU” or “BY”; no Default; at least one value,   │                                             │
│           │ G1, must be provided.)                            │                                             │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────┘
```
