## [MATPE1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATPE1.xhtml) - Isotropic Poroelastic Material Property definition

Defines the material properties for an isotropic poroelastic material.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATPE1  MID     MAT1    MAT10   BIOT    POROPT  SRHO                            
        VISC    GAMMA   PRANDTL POR     TOR     AFR     VLE     TLE             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATPE1  101     1       10                                                      
        1.84-8  1.4     7.13-1  9.5-1   1.4     2.5-5   9.32-2  9.32-2          
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number, referenced by PSOLID entry. (Integer>0)                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAT1      │ Identification number of MAT1 (and MATF1 if it is frequency-dependent) entry for the skeleton      │
│           │ (solid-phase) of porous material. (Integer>0, Required)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAT10     │ Identification number of MAT10 entry for the fluid-phase of porous material. (Integer>0, Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BIOT      │ Biot factor. (Real>0.0, Default=1.0)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POROPT    │ Simplified porous options: LUMPED, RIGID, MIKI or DELANY                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SRHO      │ Solid density for POROPT=LUMPED (Real≥0.0)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VISC      │ Fluid dynamic viscosity. See Remark 4. (Real>0.0, Required except for POROPT = ”DELANY” or “MIKI”) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GAMMA     │ Fluid ratio of specific heats. See Remark 5. (Real>0.0, Default=1.402)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRANDTL   │ Fluid Prandtl number, Pr. See Remark 6. (Real>0.0, Default=0.71)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POR       │ Porosity of porous material. (Real>0.0, Required except for POROPT = ”DELANY” or “MIKI”)           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOR       │ Tortuosity of porous material. (Real>0.0, Default=1.0)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AFR       │ Air flow resistivity. (Real>0.0, Required)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VLE       │ Viscous characteristic length. (Real≥0.0, Default=0.0)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TLE       │ Thermal characteristic length. (Real≥0.0, Default=0.0)                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
Remarks:

1. MATPE1 entry is referenced by PSOLID cards when FCTN=PORO. It is used to define the isotropic poroelastic material properties for both solid and fluid phases of a poroelastic medium.

2. MATPE1 entry must be put under BEGIN BULK TRMC.

3. For a frequency-dependent skeleton material, MATF1 specifies the material properties at frequencies on matching MAT1 fields.

4. Fluid dynamic viscosity, VISC, is temperature dependent. At 15° C  (Celsius), its value is
1.82x10 -6  N.s/m 2  in the SI units.

5. GAMMA is defined as  ![bulkno05552.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05552.jpg?_LANG=enus) where  ![bulkno05554.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05554.jpg?_LANG=enus)  is the specific heat at constant pressure and  ![bulkno05556.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05556.jpg?_LANG=enus) the specific heat at constant volume. Its default value is 1.402 for the air at ambient temperature.

6. PRANDTL number, Pr, is defined as  ![bulkno05558.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05558.jpg?_LANG=enus) where µ is the fluid dynamic viscosity (VISC) and  ![bulkno05560.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05560.jpg?_LANG=enus) the thermal conductivity. For the dry air at ambient temperature, its value is around 0.7~0.8.

7. Porosity, ![bulkno05562.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05562.jpg?_LANG=enus) , is defined as V /V  where V  is the volume of fluid and Vt is the total volume of the poroelastic material. Hence, porosity is dimensionless.

8. Tortuosity measures the complexity of the path an air particle must follow to process from one point to another point.  It is a dimensionless parameter.

9. Resistivity measures the resistance of poroelastic material against the flow of fluid. In SI unit, it is measured in N.s/m 4 .

10. The density of poroelastic material is defined as   ![bulkno05564.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05564.jpg?_LANG=enus)  where  ![bulkno05566.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05566.jpg?_LANG=enus)  is the fluid density from MAT10 and  ![bulkno05568.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05568.jpg?_LANG=enus)  is the solid density from MAT1.

11. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

12. Assumptions for simplified BIOT porous material model are as follows:

```text
┌─────────┬──────────────────────────────────────────────────────────────┐
│ LUMPED  │ the material skeleton can be assumed as extremely soft (E=0) │
├─────────┼──────────────────────────────────────────────────────────────┤
│ RIGID   │ the material skeleton can be assumed as rigid                │
├─────────┼──────────────────────────────────────────────────────────────┤
│ MIKI or │ Semi-empirical numerical mode; assuming porosity=1           │
│ DELANY  │                                                              │
└─────────┴──────────────────────────────────────────────────────────────┘
```
13. MAT1 field should be left blank for POROPT=RIGID, MIKI or DELANY.

14. For POROPT=LUMPED, solid density can be provided either from MAT1 ID in MAT1 field or directly from SRHO field of MATPE1.

15. PEM/Nastran modeling with material MATPE1-MAT1-MAT10 encryption:
PEM now allows for encryption of data produced by Actran for the MATPE1 and associated MAT1 and MAT10 entries provided with Actran TRIM components.

     Any TRIM component that contains encrypted data must contain the following:

     BEGIN BULK TRMC=n ; containing the TRIM model exclusive of any explicit encrypted data. As an example, let a primary trim model file have the name, say: pem_trim_cmpti.bdf.

     It is required that the primary trim model  pem_trim_cmpti.bdf  does not explicitly contain any encrypted materials. It may contain, implicitly, encrypted data in the form of an MSC Nastran include file as explained below.

     The primary trim model  pem_trim_cmpti.bdf  generally contains: Coupling sets from ACPEMCP Bulk Data in main BULK, trim component FE sub-model grids and elements, and a FREQi entry for Master (sampling) frequency range. For non-encrypted material data, it will also contain the Poro-elastic material description. For encrypted material data, the Poro-elastic material description requires special handling as described below.

     For each TRIM component that contains encrypted data, there must be three associated files, for example, for the above  pem_trim_cmpti.bdf  the files:  pem_trim_cmpti_mat.bdfs ,   pem_trim_cmpti_mat.bdfe  and  pem_trim_cmpti_mat.bdfk  named by the Actran encryption component and are provided by the Actran encryption procedure. These three files are required to have the extensions:  .bdfs ,  .bdfe , and  .bdfk

     The required  pem_trim_cmpti_mat.bdfs  file may be included in the primary   pem_trim_cmpti.bdf  trim model with an MSC Nastran include  pem_trim_cmpti_mat.bdfs  or may be placed immediately after the primary  pem_trim_cmpti.bdf  file with an MSC Nastran include  pem_trim_cmpti_mat.bdfs  statement. If included after its primary file, it must not have another file sandwiched between it and its primary file.

     The include pem_trim_cmpti_mat.bdfs file contains data of the form:

![MATPE1_pem_trim105570.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/MATPE1_pem_trim105570.png?_LANG=enus)

     The x.xx..0e+32 data is just scrambled data that allows MSC Nastran IFPSTAR component to check the MATPE1, MAT1, and MAT10 data and also acts as a flag to Actran after the MSC Nastran run that there is encrypted data for that component. The user should not modify this data.

     The other two required files  pem_trim_cmpti_mat.bdfe   and  pem_trim_cmpti_mat.bdfk  must not be in an include statement.

     The three required  pem_trim_cmpti_mat.bdfs/e/k  files must all be at the same location. The MSC Nastran IFPSTAR application will automatically locate them based on the existence of the  pem_trim_cmpti_mat.bdfs  file. Note that, currently there is a limitation in the include file address. If it is too long, say > 6 directories, the .bdfs/.bdfe/.bdfk may not be found.

     Files with the extension  .bdfe  contain the encrypted data. Files with the extension  .bdfk  contain the encrypted keys.

     Resulting MSC Nastran OP2 META file:

     For any MSC Nastran PEM run, MSC Nastran creates an OP2 file for Actran. For encrypted PEM data, in the resulting OP2 file, MSC Nastran puts out for PEM, an MPT record containing the MATPE1, MAT1, MAT10 in scrambled form.

     A new TABLE META has been added to the OP2 output. For each BEGIN BULK TRIM=n that is encrypted and has the required associated "bdfs", a META table will be created that contains data of the form:

![bulkno05572.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05572.jpg?_LANG=enus)

     For each encrypted TRIM component set of materials, there is a corresponding META data entry. Record 1 of each META table contains the TRIM, BEGIN BULK and the associated ID.

     Encrypted data validity and Machine Interface

     The user of encryption files provided to MSC Nastran for the Actran TRIM component must coordinate with the Actran encryption interface the CEID of the machines on which the encrypted PEM runs are to execute.

     At encryption time the following will occur:

a. At encryption time a data expiration date Month/Day/Year may be assigned.

b. A customer entitlement ID may be issued.

c. An encryption key will be issued.

     Thus, encrypted data may be time dependent and may be machine dependent.

     The figure below outlines the Actran-Nastran PEM Encryption Process:

![MATPE1_ActNAS_encr05574.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/MATPE1_ActNAS_encr05574.png?_LANG=enus)

