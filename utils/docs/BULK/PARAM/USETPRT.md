## [USETPRT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.USETPRT.xhtml)

Default    = -1

USETPRT controls the tabular printout of the structural degree-of-freedom sets. See  Degree-of-Freedom Sets . To print aerodynamic degree-of-freedom sets, please see   OPGEOM  .

        See link for table.

The degrees-of-freedom can be listed in ascending order according to their internal or external sequence number, but not both.  The external sequence number is the grid, scalar, or extra point identification number.  The internal sequence number is the number assigned after resequencing (see PARAM,OLDSEQ).

For a given sequence there are two types of tables that may be printed: row sort and column sort. For row sort, a table is printed for each set selected by USETSEL. Here is an example of row sort (USETPRT = 0 or 10):

        See link for output.

For column sort, a single table is printed for the following sets:  SB, SG, L, A, F, N, G, R, O, S, M, E.  Here is an example of column sort (USETPRT   =   1 or 11):

        See link for output.
