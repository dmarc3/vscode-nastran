## [DEQATN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DEQATN.xhtml) - Equation Definition

Defines one or more equations for use in analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEQATN  EQID    EQUATION        
        EQUAT...        
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DEQATN  14                      
                        
```
```text
┌───────────┬──────────────────────────────────────────────────────┐
│ Describer │ Meaning                                              │
├───────────┼──────────────────────────────────────────────────────┤
│ EQID      │ Unique equation identification number. (Integer > 0) │
├───────────┼──────────────────────────────────────────────────────┤
│ EQUATION  │ Equation(s). See Remarks. (Character)                │
└───────────┴──────────────────────────────────────────────────────┘
```
#### Remarks:

1. EQUATION is a single equation or a set of nested equations and is specified in fields 3 through 9 on the first entry and may be continued on fields 2 through 9 on the continuation entries.  On the continuation entries, no commas can appear in columns 1 through 8.  All data in fields 2 through 9 must be specified in columns 9 through 72.  The large-field format is not allowed.

     A single equation has the following format:

variable-1 (x1, x2, ..., xn)=expression-1

     A set of nested equations is separated by semicolons and has the format:

![bulkde03152.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03152.jpg?_LANG=enus)

     Expression-i is a collection of constants, real variables, and real functions, separated by operators, and must produce a single real value.  (x1, x2, ..., xn) is the list of all the variable names (except variable-i) that appear in all expressions.  Variable-i may be used in subsequent expressions.  The last equation, variable-m=expression-m, provides the value that is returned to the Bulk Data entry that references EQID; e.g., DRESP2.  The example above represents the following mathematical equations:

     ![bulkde03154.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03154.jpg?_LANG=enus)  

     ![bulkde03156.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03156.jpg?_LANG=enus)  

     where SIN and PI are intrinsic functions. See Remark  4.

2. EQUATION may contain embedded blanks. EQUATION must contain less than 32,000 nonblank characters. If more characters are required for use with a DRESP2 entry, the DRESP2 can be divided into two or more DRESP2 entries with a master DRESP2 referencing subsequent DRESP2s.

3. The syntax of the expressions follows FORTRAN language standards. The allowable arithmetic operations are shown in   in the order of execution precedence. Parenthesis are used to change the order of precedence. Operations within parentheses are performed first with the usual order of precedence being maintained within the parentheses.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
-, +    Negat...X * * -YX * *...
* *     Expon...-X * * Y(-X *...
-, +    Negat...-X-Y    (-X)-Y  
*, /    Multi...X * Y-Z (X * ...
+, -    Addit...X+Y     X+Y     
```
4. The expressions may contain intrinsic functions.   contains the format and descriptions of functions that may appear in the expressions. The use of functions that may be discontinuous must be used with caution because they can cause discontinuous derivatives. These are ABS, DIM, MAX, MIN, and MOD. For examples and further details see the  MSC Nastran DMAP Programmer’s Guide .

Format

Description

Mathematical Expressions

ABS(x)

absolute value

 

ACOS(x)

arccosine

cos-1 x

ACOSH(x)

hyperbolic arccosine

cosh-1 x

ASIN(x)

arcsine

sin-1 x

ASINH(x)

hyperbolic arcsine

sinh-1 x

ATAN(x)

arctangent

tan-1 x

ATAN2(x,y)

arctangent of quotient

tan-1 (x/y)

ATANH(x)

hyperbolic arctangent

tanh-1 x

ATANH2(x,y)

hyperbolic arctangent of quotient

tanh-1 (x/y)

AVG(X1, X2, .., Xn)

average

 

COS(x)

cosine

cos x

COSH(x)

hyperbolic cosine

cosh x

DB(P, PREF)

sound pressure in decibel

 

DBA(P, PREF, F)

sound pressure in decibel (perceived)

++

DIM(x,y)

positive difference

x-MIN(x,y)

EXP(x)

exponential

ex

INVDB(DB, PREF)

inverse Db

 

INVDBA(DBA, PREF, F)

inverse Dba

 

LOG(x)

natural logarithm

loge x

LOG10(x)

common logarithm

log10 x

LOGX(x,y)

base x logarithm

logx y

MAX(x1, x2, ...)

maximum

maximum of x1, etc.

MIN(x1, x2, ...)

minimum

minimum of x1, etc.

MOD(x,y)

remainder (modulo)

 

PI(x)

multiples of pi (π)

 

 

square root of sum of squares

 

SIN(x)

sine

sin x

SINH(x)

hyperbolic sine

sinh x

SQRT(x)

square root

 

 

sum of squares

 

 

summation

 

TAN(x)

tangent

tan x

TANH(x)

hyperbolic tangent

tanh x

--------------------

     where

```text
┌─────────────┬───┬──────────────────────────────────────────┐
│ X1, X2, .., │ = │ structure responses or acoustic pressure │
│ Xn,P        │   │                                          │
├─────────────┼───┼──────────────────────────────────────────┤
│ PREF        │ = │ reference pressure                       │
├─────────────┼───┼──────────────────────────────────────────┤
│ F           │ = │ forcing frequency                        │
├─────────────┼───┼──────────────────────────────────────────┤
│ DB          │ = │ acoustic pressure in decibel             │
├─────────────┼───┼──────────────────────────────────────────┤
│ DBA         │ = │ perceived acoustic pressure in decibel   │
├─────────────┼───┼──────────────────────────────────────────┤
│             │ = │                                          │
├─────────────┼───┼──────────────────────────────────────────┤
│             │ = │                                          │
├─────────────┼───┼──────────────────────────────────────────┤
│             │ = │ 2.242882e+16                             │
├─────────────┼───┼──────────────────────────────────────────┤
│             │ = │ 1.562339                                 │
├─────────────┼───┼──────────────────────────────────────────┤
│             │ = │ 20.598997                                │
├─────────────┼───┼──────────────────────────────────────────┤
│             │ = │ 107.65265                                │
├─────────────┼───┼──────────────────────────────────────────┤
│             │ = │ 737.86223                                │
├─────────────┼───┼──────────────────────────────────────────┤
│             │ = │ 12194.22                                 │
└─────────────┴───┴──────────────────────────────────────────┘
```
5. If the DEQATN entry is referenced by the:

     • DVCREL2, DVMREL2, or DVPREL2 entry, then  ![bulkde03212.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03212.jpg?_LANG=enus)  represents the DVIDj and LABLk fields.

     • DRESP2 entry, then  ![bulkde03214.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03214.jpg?_LANG=enus)  represents the DVIDj, LABLk, NRm, Gp, DPIPq, DCICr, DMIMs, DPI2Pt, DCI2Cu, DMI2Mv, and NRRw fields in that order.

6. If the DEQATN entry is referenced by DRESP2, DVCREL2, DVMREL2 or DVPREL2 entries, constants must be specified in single precision regardless of your machine’s word length.

7. The DMAP logical operators NOT, AND, OR, XOR, and XQV cannot be used as X  names.

8. Input errors on the DEQATN entry often result in poor messages.  Substituting a “[” for a parenthesis or violating the restriction against large field format are examples.  Known messages are UFM 215, SFM 233 and UFM 5199.  If any of these messages are encountered then review the DEQATN entry input.

9. Intrinsic functions AVG, MAX, MIN, RSS, SSQ and SUM are limited to <97 arguments. If more arguments are desired, the functions may be divided up. For example, to perform a sum of squares on 170 items, use:

SSQ(X1,X2,…X95) + SSQ(X96,X97,…X170).

For MAX/MIN, the following concatenation can be used:

MAX1 = MAX(X1,X2,..X95), MAX2=MAX(X96,X97…X170); MAXT=MAX(MAX1,MAX2).

For AVG, an example to average 170 terms is: AVG1=AVG(X1,X2,…X95);AVG2=AVG(X96,X97..X170); AVGT = (95. * AVG1 + 75. * AVG2) / 170.

10. Arithmetic is carried out using the type of the input data. For example, in the expression:

![bulkde03216.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03216.jpg?_LANG=enus)  

     both values in the exponent are integers so that the value returned for the exponent is calculated using integer arithmetic or  ![bulkde03218.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03218.jpg?_LANG=enus) . In this case 1/2 should be replaced by (.5).

