## [ESLRCF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ESLRCF.user.rc.file.xhtml)

Character*8, must be lower case. Default = blank

ESLRCF, user_rc_file allows a user to define a custom RC file for the internally spawned jobs.

#### Example:

```nastran
PARAM,ESLRCF, myrc
```

The contents of the  myrc  file are:

```text
mem=200m
exe=~local_path/MSCNASTRAN 
del=~local_path/SSS
```

The example shows the user-defined RC file, myrc, specifies its own memory allocation and its local Nastran executable and local DMAP database.

