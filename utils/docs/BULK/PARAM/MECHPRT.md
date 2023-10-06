## [MECHPRT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.MECHPRT.xhtml)

Default = NO

For SOL 103 only, if massless mechanisms are found the constraint modes are printed with a format similar to eigenvectors when this parameter is set to YES.  They are labeled CONSTRAINT MODES, and are numbered sequentially.  Grid points with only zero values in a mode are not printed.  This parameter should be used when performing initial checkout of a model and a goal is to remove all massless mechanisms before starting production analysis.  The number of each “mode” matches the corresponding GID,C pair in the high ratio message.  If there are many (thousands) of such modes the output file will be large.  There is no method to plot these shapes at present.

