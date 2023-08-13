## [HDF5OUT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.HDF5OUT1.xhtml) - HDF5 output parameters

HDF5 output parameters.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HDF5OUT PARAM1  VAL1    PARAM2  VAL2    ...     ...     PARAMi  VALi            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
HDF5OUT PRCISION32      CMPRMTHDLZ4     LEVEL   4                               
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ Param(i)  │ Name of a parameter. Allowable names are given in Table 0-14. (Character) │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ Value(i)  │ Value of the parameter. See Table 0-14. (Real or Integer)                 │
└───────────┴───────────────────────────────────────────────────────────────────────────┘
```

     See link for table.

#### Remarks

1. The .h5 binary database file will be generated when HDF5OUT is specified in bulk data section.
2. When PRCISION is 32, all integers and most real numbers will be written in 32 bit. Some real numbers are written in 64 bit when they are declared as type="64" in  schema_<version>.xml . When PRCSISION is 64, all integers and real numbers are in 64 bit.
3. To help third party software packages to distinguish hdf5 file precision, an HDF5 attribute with name "PRECISION" is attached to hdf5 file object. It is a 32 bit integer with value of 32 or 64 based on PRCISION parameter in HDF5OUT entry.
4. When HDF5OUT is specified, all hdf5 related parameters, such as HDF5, H5INFO, H5MDL, H5GM34, H5XHH, H5MTX, H5NORDOF, H5SGENL and H5SSTRN in MDLPRM entry are ignored. Those parameters will be deprecated in the future.
5. It is required to set below environment variable to view or use hdf5 utilities for an hdf5 file compressed by LZ4 or BloscLZ filter.

     ```text
     HDF5_PLUGIN_PATH=<msc_nastran_version>/<arch>/lib/hdf5plugin/plugins
     ```

     For example, in Windows, if MSC Nastran 2022.3 is installed to location “C:\Program Files\MSC.Software\MSC_Nastran\2022.3”, the variable should be:

     ```text
     HDF5_PLUGIN_PATH="C:\Program Files\MSC.Software\MSC_Nastran\2022.3\msc20223\win64i8\lib\hdf5plugin\ 
     plugins"
     ```

