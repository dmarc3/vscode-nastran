## [INCLUDE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.INCLUDE1.xhtml) - Inserts External File

Inserts an external file into the input file. The INCLUDE statement may appear anywhere within the input data file.

#### Format:

```nastran
INCLUDE 'filename'
```

#### Example:

The following INCLUDE statement is used to obtain the bulk data from another file called MYEXEC.DATA:

```nastran
SOL 101
INCLUDE ’MYEXEC.DATA’
CEND
TITLE = STATIC ANALYSIS
LOAD = 100
BEGIN BULK
ENDDATA
```nastran

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ filename  │ Physical filename of the external file to be inserted. The user must supply the name according to │
│           │ installation or machine requirements. It is recommended that the filename be enclosed by single   │
│           │ right-hand quotation marks ( ’ ).                                                                 │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. INCLUDE statements may be nested; that is, INCLUDE statements may appear inside the external file. The nested depth level must not be greater than 10.
2. The total length of any line in an INCLUDE statement must not exceed 72 characters. Long file names may be split across multiple lines. For example, the file

     ```text
     /dir123/dir456/dir789/filename.dat
     ```

     may be included with the following input:

     ```nastran
     INCLUDE ‘/dir123 
                         /dir456 
                      /dir789/filename.dat’
     ```

3. See the  for more examples.
