## [XYMPCH](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.XYMPCH.xhtml)

Default = NO

The XYPLOT/XYPUNCH commands do not support SOL103 type mode shapes. XYMPCH when set to a value PARAM, XYMPCH, YES allows the XYPUNCH command XYPUNCH, DISP, RESPONSE / … to punch without selective selection SOL103 mode shapes as SOL101 type displacements. For example:

```nastran
$
METHOD = 10
SET 100 = 6, 7, 13
PARAM, XYMPCH, YES
DISP=100
MODES=20 $
…
OUTPUT(XYPLOT)
XYPUNCH DISP RESPONSE / 6(T3)    $
XYPUNCH DISP RESPONSE / 7(T3)    $
XYPUNCH DISP RESPONSE / 13(T2)    $
```

A more modern solution is to include in a standard SOL103 run the Nastran entry

NASTRAN HDF5=0

With for example DISP(PLOT)=ALL

And extract the resulting mode shapes from the resulting HDF5 Data Base.

Then the PARAM, XYMPCH, and MODES=n is not needed nor is any of the OUTPU(XYPLOT) commands.

