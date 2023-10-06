## [GEOMCHECK](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/TOC.GEOMCHECK.xhtml) - Specifies Geometry Check Options

Specifies tolerance values and options for optional finite element geometry tests.

#### Format:

![executive00683.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00683.jpg?_LANG=enus)  

![executive00685.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00685.jpg?_LANG=enus)  

#### Examples:

1. Set the tolerance for the CQUAD4 element skew angle test to 15.0 degrees and limit messages to 50:

     ```nastran
     GEOMCHECK   Q4_SKEW=15.0,MSGLIMIT=50
     ```

2. Limit messages to 500 for each element type:

     ```nastran
     GEOMCHECK  MSGLIMIT=500
     ```

3. Set the message type to fatal for CQUAD4 element taper tests:

     ```nastran
     GEOMCHECK  Q4_TAPER,MSGTYPE=FATAL
     ```

4. Request summary table output only using default tolerance values:

     ```nastran
     GEOMCHECK  SUMMARY
     ```

5. Request advanced and conventional element geometry check output using default tolerance values:

     ```nastran
     GEOMCHECK ADVNLELM
     ```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ test_keyword │ A keyword associated with the particular element geometry test. See Remark 2. for a list of        │
│              │ acceptable selections.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ tol_value    │ Tolerance value to be used for the specified test. See Remark 2. for default values of the test    │
│              │ tolerances.                                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ The minimum number of messages that will be produced. The default is 100 messages for each element │
│              │ type. See Remark 3.                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FATAL        │ Geometry tests that exceed tolerance values produce fatal messages. See Remark 4.                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INFORM       │ Geometry tests that exceed tolerance values produce informative messages. See Remark 4.            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WARN         │ Geometry tests that exceed tolerance values produce warning messages. See Remark 4.                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUMMARY      │ A summary table of the geometry tests performed is produced. No individual element information     │
│              │ messages are output.                                                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ADVNLELM     │ Geometry check performed on Advanced and conventional elements. If no ADVNLELM, geometry check     │
│              │ only performed on conventional element.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ None of the optional element geometry tests will be performed.                                     │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The GEOMCHECK statement controls the number and severity of certain informational and warning messages produced by element matrix generation geometry checking operations. Controls are currently available for the CQUAD4, CQUADR, CTRIA3, CTRIAR, CHEXA, CPENTA, CTETRA, CPYRAM, CBAR, and CBEAM elements only. Multiple GEOMCHECK statement may be present. Continuations are acceptable.
2. The following table summarizes the acceptable specifications for test_keyword.

          See link for table.

     where: 

     - Test_keyword names starting with the characters Q4 are applicable to CQUAD4 and CQUADR elements. Test_keyword names starting with the characters T3 are applicable to CTRIA3 and CTRIAR elements. Test_keyword names starting with the characters TET_ are applicable to CTETRA elements. Test_keyword names starting with the characters HEX_ are applicable to CHEXA elements. Test_keyword names starting with the characters PEN_ are applicable to CPENTA elements. Test_keyword names starting with the characters PYR_ are applicable to CPYRAM elements.
     - Skew angle for the quadrilateral element is defined to be the angle between the lines that join midpoints of the opposite sides of the quadrilateral. Skew angle for the triangular element is defined to be the smallest angle at any of the three vertices.
     - Interior angles are defined to be the angles formed by the edges that meet at the corner node of an element. There are four for quadrilateral shapes and three for triangular shapes.
     - Taper ratio for the quadrilateral element is defined to be the absolute value of [the ratio of the area of the triangle formed at each corner grid point to one half the area of the quadrilateral minus 1.0. The largest of the four ratios is compared against the tolerance value. Note that as the ratio approaches 0.0, the shape approaches a rectangle.
     - Surface warping factor for a quadrilateral is defined to be the distance of the corner points of the element to the mean plane of the grid points divided by the average of the element diagonal lengths. For flat elements (such that all of the grid points lie in a plane), this factor is zero.
     - The edge point length ratio and edge point included angle tests are only performed for the solid elements when edge node points exist. The length ratio test evaluates the relative position of the edge node point along a straight line connecting the two vertex nodes of that edge. Ideally, the edge point should be located on this line at a point midway between the two end points. The default tolerance allows the edge node to be positioned anywhere between the two quarter points on this line. In addition, the angle between the lines joining the edge node and the end points is determined. If the angle is less than the tolerance (default is  ![executive00687.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00687.jpg?_LANG=enus) ), then the interior angle test is considered violated and a diagnostic message will be generated if appropriate.
     - The face warp coefficient test tolerance is the cosine of the angle formed between the normal vectors located at diagonally opposite corner points on each face surface. This value is 1.0 for a face where all four corners lie in a plane. The default tolerance allows angles of up to  ![executive00689.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/executive/../../../assets/executive00689.jpg?_LANG=enus)  before a message is generated.

3. A single line of output summarizing the results of all tests for an element will be output if any of the geometry tests exceeds the test tolerance. Only the first n of these messages will be produced. A summary of the test results indicating the number of tolerances exceeded, as well as the element producing the worst violation, is also output. If the SUMMARY keyword has been specified, only the summary table is produced and none of the single line element messages will be output.
4. When SUMMARY is not specified, each geometry test that exceeds the tolerance will be identified in the single line output summary by an indicator based on the specification for MSGTYPE. For the FATAL option, the indicator is “FAIL”; for the INFORM option, it is “xxxx”; for the WARN option, it is “WARN”. If the FATAL option is specified and any test fails, the run is terminated.
5. GEOMCHECK does not apply on PEM elements which appear under BEGIN BULK TRMC=trimid.
