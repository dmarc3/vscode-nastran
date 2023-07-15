## [MATCB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MATCB.xhtml) - 2D and 3D Orthotropic Progressive Failure Properties

Specifies progressive failure properties for orthotropic materials via the Cuntze-Bold material model. A phenomenal-based material law for fiber reinforced plastics combined with the CUNTZE-BOLD failure criteria.

#### Format:

#### Example:

MATCB

17000

CUBO

1.-4

"UNIDIR"

.1

.1

.1

2.5

F-DIR

157413.

2413.

.0135

1275.

.2

155000.

580.

.02

62.

C-DIR

7703.

31.8

.0041

127.

.2

10000.

199.

.03103

47.

T-DIR

7703.

31.8

.0041

141.

.18

10500.

300.

.0275

47.

FC-DIR

4599.

70.7

.03584

300.

.02

0.01

CT-DIR

450.

70.7

.02584

250.

.01

1.00

TW-DIR

4599.

70.7

.03584

300.

.02

0.01

--------------------

MID

Material identification number. Referenced on a PCOMP or PCOMPG, PCOMPLS. Integer>0

FAIL

Failure theory. If "CUBO", then the CUNTZE-BOLD material model.
(Character - Default "CUBO")

RHO

Mass density. (Real)

"TEMP"

Keyword indicating thermal properties. (Character)

AF

Thermal expansion coefficient in fiber (or 1st) direction (Real or blank). See Remark 5.

AC

Thermal expansion coefficient in cross (2nd) direction in 1-2 plane (Real or blank).

AT

Thermal expansion coefficient in thickness (3rd) direction. (Real or blank)

TREF

Reference temperature for the calculation of thermal loads, or a temperature-dependent thermal expansion coefficient. (Real or blank)

“UNIDIR”

Keyword indicating unidirectional properties follow (Character). See Remark 4.

m

Exponent of fracture mode. (2.4≤Real<3.0 or blank; Default=2.4). See Remark 7.

μFC

Friction coefficient in 1-2 (FC) plane(0.0 to 0.3). (Real or blank) (Default = 0.3)

μTF

Friction coefficient in 3-1 (TF) plane (0.0 to 0.3). (Real or blank) (Default = 0.3)

μCT

Friction coefficient in 2-3 (CT) plane (0.0 to 0.3). (Real or blank) (Default = 0.3)

F-DIR

Parallel Fiber direction (1st direction) (Character)

 

Tensile modules in fiber direction. (Real or blank)

 

Tensile strength in fiber direction. (Real or blank)

 

Tensile strain at break in fiber direction. (Real or blank)

 

Maximum tensile modulus reduction ratio in fiber direction. (Real or blank)

 

Poisson's ratio in 1-2 (FC) direction. (Real or blank)

 

Compression modulus in fiber direction. (Real or blank)

 

Compressive strength in fiber direction. (Real or blank)

 

Compressive strain at break in fiber direction. (Real or blank)

 

Maximum compression modulus reduction ratio in fiber direction. (Real or blank)

C-DIR

Cross direction in plane of fiber direction but normal to fiber direction (2nd direction) (Character)

 

Tensile modules in cross direction. (Real or blank)

 

Tensile strength in cross direction. (Real or blank)

 

Tensile strain at break in cross direction. (Real or blank)

 

Maximum tensile modulus reduction ratio in cross direction. (Real or blank)

 

Poisson's ratio in 3-1 (TF) direction. (Real or blank)

 

Compression modulus in cross direction. (Real or blank)

 

Compressive strength in cross direction. (Real or blank)

 

Compressive strain at break in cross direction. (Real or blank)

 

Maximum compression modulus reduction ratio in cross direction. (Real or blank)

T-DIR

Thickness direction normal to the FC-plane direction (3rd direction) (Character)

 

Tensile modules in thickness direction. (Real or blank)

 

Tensile strength in thickness direction. (Real or blank)

 

Tensile strain at break in thickness direction. (Real or blank)

 

Maximum compression modulus reduction ratio in thickness direction. (Real or blank)

 

Poisson's ratio in 3-2 (TC) direction. (Real or blank)

 

Compression modulus in thickness direction. (Real or blank)

 

Compressive strength in thickness direction. (Real or blank)

 

Compressive strain at break in thickness direction. (Real or blank)

 

Maximum compression modulus reduction ratio in thickness direction. (Real or blank)

FC-DIR

Fiber - cross(matrix) plane direction (1-2 direction) (Character)

 

Shear modulus in the fiber-matrix plane. (Real or blank)

 

Shear strength in the fiber-matrix plane. (Real or blank)

 

Shear strain in fiber-matrix plane. (Real or blank)

 

Reduced shear modulus limit in fiber-matrix plane. (Real or blank)

 

Shear strain limit. (Real or blank)

 

Maximum Shear modulus reduction ratio in fiber-matrix plane. (Real or blank)

CT-DIR

Cross (matrix) - thickness direction (2-3 direction). (Character)

 

Shear modulus in the cross- thickness plane. (Real or blank)

 

Shear strength in the cross - thickness plane. (Real or blank)

 

Shear strain in cross - thickness plane. (Real or blank)

 

Reduced shear modulus limit in cross - thickness plane. (Real or blank)

 

Shear strain / distortion limit. (Real or blank)

 

Maximum Shear modulus reduction ratio in cross-thickness direction. (Real or blank)

TF-DIR

Thickness-fiber direction (3-1 direction) (Character)

 

Shear modulus in the thickness -fiber plane. (Real or blank)

 

Shear strength in the thickness -fiber plane. (Real or blank)

 

Shear strain in thickness -fiber plane. (Real or blank)

 

Reduced shear modulus limit in thickness -fiber plane. (Real or blank)

 

Shear strain limit. (Real or blank)

 

Maximum shear modulus reduction ratio in thickness-fiber direction. (Real or blank)

“WOVEN”

Keyword indicating woven properties follow (Character). See Remark 5.

m

Exponent for the individual fracture modes. (2.4≤Real<3.0 or blank; Default=2.4). See Remark 7.

 

Friction coefficient in WF plane (0.0 to 0.05) (Real or blank) (Default = 0.0)

 

Friction coefficient in WT plane (0.0 to 0.05) (Real or blank) (Default = 0.0)

 

Friction coefficient in FT plane (0.0 to 0.05) (Real or blank) (Default = 0.0)

W-DIR

Parallel Warp direction (1st direction) (Character)

 

Tensile modulus in warp direction. (Real or blank)

 

Tensile strength in warp direction. (Real or blank)

 

Tensile strain at break in warp direction. (Real or blank)

 

Maximum tensile modulus reduction ratio in warp direction. (Real or blank)

 

Poisson's ratio. (Real or blank)

 

Compression modulus in warp direction. (Real or blank)

 

Compression strength in warp direction. (Real or blank)

 

Compression strain at break in warp direction. (Real or blank)

 

Maximum compression modulus reduction ratio in warp direction. (Real or blank)

F-DIR

Fill or Weft (crosswise threads to fabric) direction (2nd direction) (Character)

 

Tensile modulus in fill (weft) direction. (Real or blank)

 

Tensile strength in fill (weft) direction. (Real or blank)

 

Tensile strain at break in fill (weft) direction. (Real or blank)

 

Tensile modulus reduction ratio in fill (weft) direction. (Real or blank)

 

Poisson's ratio. (Real or blank)

 

Compression modulus in fill (weft) direction. (Real or blank)

 

Compression strength in weft direction. (Real or blank)

 

Compression strain at break in fill (weft) direction. (Real or blank)

 

Compression modulus reduction ratio in fill (weft) direction. (Real or blank)

T-DIR

Thickness direction (3rd  direction) (Character)

 

Tensile modulus in thickness direction. (Real or blank)

 

Tensile strength in thickness direction. (Real or blank)

 

Tensile strain at break in thickness direction. (Real or blank)

 

Maximum tensile modulus reduction ratio in thickness direction. (Real or blank)

 

Poisson's ratio. (Real or blank)

 

Compression modulus in thickness direction. (Real or blank)

 

Compression strength in thickness direction. (Real or blank)

 

Compression strain at break in thickness direction. (Real or blank)

 

Maximum compression modulus reduction ratio in thickness direction. (Real or blank)

WF-DIR

Warp-fill (weft - crosswise threads to fabric) plane direction (1-2 direction) (Character)

 

Shear modulus in the warp - fill (weft) plane. (Real or blank)

 

Shear strength in the warp - fill (weft) plane. (Real or blank)

 

Shear strain in warp - fill (weft) plane. (Real or blank)

 

Reduced shear modulus limit in warp - fill (weft) plane. (Real or blank)

 

Shear strain limit.

 

Maximum Shear modulus reduction ratio in warp-fill direction. (Real or blank)

FT-DIR

Fill (Weft) – thickness direction (2-3 direction) (Character)

 

Shear modulus in the fill – thickness plane. (Real or blank)

 

Shear strength in the fill – thickness plane. (Real or blank)

 

Shear strain in fill – thickness plane. (Real or blank)

 

Reduced shear modulus limit in fill – thickness plane. (Real or blank)

 

Shear strain limit. (Real or blank)

 

Maximum Shear modulus reduction ratio in fill-thickness direction. (Real or blank)

TW-DIR

Thickness-warp direction (3-1 direction) (Character)

 

Shear modulus in the thickness - warp plane. (Real or blank)

 

Shear strength in the thickness - warp plane. (Real or blank)

 

Shear strain in thickness - warp plane. (Real or blank)

 

Reduced shear modulus limit in thickness - warp plane. (Real or blank)

 

Shear strain limit. (Real or blank)

 

Maximum Shear modulus reduction ratio in thickness-warp direction. (Real or blank)

--------------------

Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MAT9, MATCB, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD entries.

2. “Keywords” may appear in any order or not appear at all. When a “Keyword” appears, the required associated data must be supplied.

3. Note that  Unidirectional  and  Woven  use different coordinate systems.

4. User can add either  Unidirectional  or  Woven  material entry in MATCB card at time.

5. For unidirectional materials, in the literature, F-fiber is usually given the symbol || for parallel to the grain. Also, C-cross is usually given the symbol  ![bulkmno04534.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04534.jpg?_LANG=enus) for perpendicular to the grain. For T-thickness the value 3 is used.

![MATCB_104536.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/MATCB_104536.png?_LANG=enus)

6. For woven materials, W-warp is in the warp direction. F-fill is in the weft direction. In the literature, for T-thickness the value 3 is used.

![bulkmno04537.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04537.jpg?_LANG=enus)

7. Petersen,E., Cuntze, E., and Huhne,C., Experimental determination of material parameters in Cuntze's Failure-Mode-Concept-based UD strength failure conditions, Composites Science and Technology, 134 (2016) 12-25.

