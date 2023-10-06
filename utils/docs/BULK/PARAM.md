## [PARAM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PARAM.xhtml) - Parameter

Specifies values for parameters used in solution sequences or user-written DMAP programs.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PARAM   N       V1      V2                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PARAM   IRES    1                                                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ N         │ Parameter name (one to eight alphanumeric characters, the first of which is alphabetic). │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ V1, V2    │ Parameter value based on parameter type, as follows:                                     │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌───────────┬───────────────────────┬───────────────────────┐
│ Type      │ V1                    │ V2                    │
├───────────┼───────────────────────┼───────────────────────┤
│ Integer   │ Integer               │ Blank                 │
├───────────┼───────────────────────┼───────────────────────┤
│ Real,     │ Real                  │ Blank                 │
│ single-   │                       │                       │
│ precision │                       │                       │
├───────────┼───────────────────────┼───────────────────────┤
│ Character │ Character             │ Blank                 │
├───────────┼───────────────────────┼───────────────────────┤
│ Real,     │ Double-precision real │ Blank                 │
│ double-   │                       │                       │
│ precision │                       │                       │
├───────────┼───────────────────────┼───────────────────────┤
│ Complex,  │ Real or blank         │ Real or blank         │
│ single-   │                       │                       │
│ precision │                       │                       │
├───────────┼───────────────────────┼───────────────────────┤
│ Complex,  │ Double-precision real │ Double-precision real │
│ double-   │                       │                       │
│ precision │                       │                       │
└───────────┴───────────────────────┴───────────────────────┘
```

#### Remarks:

1. See   for a list of parameters used in solution sequences that may be set by the user on PARAM entries.
2. If the large field entry format is used, the second physical entry line must be present, even though fields 6 through 9 are blank except for SOL 700.
3. The first 8 characters of N must be unique. N with more than 8 characters is normally only used by SOL 700.
4. If the Bulk Data involves the use of part superelements or external superelements, the following points should be noted regarding the use of the PARAM Bulk Data entry:
    - PARAM entries specified in the Main Bulk Data portion of the input data apply  only to the residual and not to the part superelements or external superelements .
    - PARAM entries specified in the BEGIN SUPER portion of the Bulk Data for a part superelement or an external superelement apply  only to that superelement .
    - The most convenient way of ensuring that PARAM entries apply not only to the residual, but also to all part superelements and external superelements is to specify such PARAM entries in Case Control, not in the Main Bulk Data. This is particularly relevant for such PARAMs as POST.
5. If Modules are present then this entry may only be specified in the main Bulk Data section.
