## [PEMNPART](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.PEMNPART.xhtml)

PEMNPART can be utilized to partition a large trim component. The default value for PEMNPART is 1.  'PARAM,PEMNPART,n' will partition a large trim component into 'n' parts. The guidelines are:

1. PARAM,PEMNPART,n'  must be placed under 'BEGIN TRMC=xx' to be effective for trim component 'xx'.

2. Each trim component can have its own 'PARAM,PEMNPART,n'

3. When value of 'n' for PEMNPART is greater than 1, new trim components are generated with ID equal to 'xx'*100+<seq no> where <seq no> goes from 0 to n-1.

4. For no loss of accuracy, setting 'n' to a value equal to the number of disconnected parts of a large trim component.

5. For accepting loss of accuracy to run on a machine with limited memory, setting 'n' to a value larger than the number of disconnected parts of a large trim component.

6. 'PARAM,PEMNPART,n' with n>1 should be utilized only as an alternative for running PEM jobs with large trim component and insufficient memory on the computer.  Other alternatives for running PEM job with large trim component and insufficient memory are:

    a. Split large trim component into smaller trim components and/or

    b. Acquire more memory for the computer

7. For a trim component with 'PARAM,PEMNPART,n' where n>1 and 'PARAM,TRMBIM,physical', data recovery will be skipped for all partitioned trim components.

