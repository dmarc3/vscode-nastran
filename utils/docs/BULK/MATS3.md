## [MATS3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATS3.xhtml) - Advanced Orthotropic, Nonlinear Elastic Materials for Axisymmetric Elements

Specifies NLELAST option for advanced orthotropic, nonlinear elastic materials at axisymmetric conditions in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATS3   MID     TEX     TETH    TEZ     TNUXTH  TNUTHZ  TNUZX   TRHO    +        
+                       TGZX    TAX     TATH    TAZ                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATS3   33      56                      67                                      
                        12                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT3 entry. (Integer > 0; no Default)                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEX       │ ID of TABL3Di entry for EX. (Integer; no Default; leave blank if table is not required)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TETH      │ ID of TABL3Di entry for ETH. (Integer; no Default; leave blank if table is not required)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TEZ       │ ID of TABL3Di entry for EZ. (Integer; no Default; leave blank if table is not required)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TNUXTH    │ ID of TABL3Di entry for NUXTH. (Integer; no Default; leave blank if table is not required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TNUTHZ    │ ID of TABL3Di entry for NUTHZ. (Integer; no Default; leave blank if table is not required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TNUZX     │ ID of TABL3Di entry for NUZX. (Integer; no Default; leave blank if table is not required)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TRHO      │ ID of TABL3Di entry for RHO. (Integer; no Default; leave blank if table is not required)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TGZX      │ ID of TABL3Di entry for GZX. (Integer; no Default; leave blank if table is not required)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAX       │ ID of TABL3Di entry for AX. (Integer; no Default; leave blank if table is not required)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TATH      │ ID of TABL3Di entry for ATH. (Integer; no Default; leave blank if table is not required)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAZ       │ ID of TABL3Di entry for AZ. (Integer; no Default; leave blank if table is not required)    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. TABL3Di is a table where an entry can be a function of up to 4 variables such as strain, temperature, strain rate, etc.
2. In SOL 400, MATS3 is used in conjunction with MAT3 and is only supported for axisymmetric elements with property extensions.  This implies that for such elements, PLPLANE should be associated with PSHLN2. Note that, prior to MD Nastran 2010, if the property extensions were missing, then the MATS3 data was not considered in the element’s formulation.  From MD Nastran 2010 onwards, if the property extensions are missing, they are automatically added with appropriate settings by the program unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.
