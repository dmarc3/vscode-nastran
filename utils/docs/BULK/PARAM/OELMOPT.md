## [OELMOPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.OELMOPT.xhtml)

Integer; Default=3.

PARAM,OELMOPT selects the class of elements to include in the search for grid points: 

```text
┌───┬─────────────────────────────────────────────────────────┐
│ 0 │ All regular elements but not PLOTEL and rigid elements. │
├───┼─────────────────────────────────────────────────────────┤
│ 1 │ All regular elements and PLOTEL.                        │
├───┼─────────────────────────────────────────────────────────┤
│ 2 │ All regular elements and rigid elements.                │
├───┼─────────────────────────────────────────────────────────┤
│ 3 │ Both 1 and 2 (default).                                 │
└───┴─────────────────────────────────────────────────────────┘
```
