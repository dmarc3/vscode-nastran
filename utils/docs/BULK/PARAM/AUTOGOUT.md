## [AUTOGOUT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AUTOGOUT.xhtml)

Default = NO

PARAM,AUTOGOUT,YES simplifies grid point data recovery requests when only a set of elements is specified.   In other words, given a set of elements the program will automatically determine all connected grid points and honor the data recovery requests for both grid points and elements. See also PARAM,OELMOPT description.

If PARAM,AUTOGOUT,YES is specified then the program assumes that SET 2 defines the set of desired elements and SET 1 defines the additional grids  not  connected to the elements in SET 2. If no additional grids are desired then the user need only specify SET 1=0. For example, in Case Control,

```nastran
Param,autogout,yes
Set 2 = 27,35,25,41234,123,thru,134,9701,9901 $ elements
Set 1 = 0                                     $ additional grids
Displ=1
Gpfor=1
Stres=2
```

If the user prefers to use different set IDs then user PARAMs OSETELE and OSETGRD may be used to change the set ids used by this feature.  For example:

```nastran
Param,autogout,yes
Param,osetele,200
Param,osetgrd,100
Set 200 = 27,35,25,41234,123,thru,134,9701,9901 $ elements
Set 100 = 0                                     $ additional grids
Displ=100
Gpfor=100
Stres=200
```

And if the user wants to add more grids that are not connected to the element set:

```nastran
Param,autogout,yes
Param,osetele,200
Param,osetgrd,100
Set 200 = 27,35,25,41234,123,thru,134,9701,9901 $ elements
Set 100 = 29                                    $ additional grids
Displ=100
Gpfor=100
Stres=200
```
