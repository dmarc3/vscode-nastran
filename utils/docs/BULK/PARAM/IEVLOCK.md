## [IEVLOCK](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.IEVLOCK.xhtml)

Default=0

Real coupled modes computation uses subspace iteration method. With default IEVLOCK=0, the subspace iteration continues with the problem size as twice of ND (number of modes requested) until all ND eigenmodes are converged. If IEVLOCK=1, subspace iteration method turns on eigenvector locking method during iteration. The eigenvector locking method will lock the eigenvectors already converged within the locking window size (0.5*number of modes requested) and iterate non-converged eigenvector with additional random vectors until all ND are found. This will help to reduce the problem size during subspace iteration and may reduce total performance elapse time.

