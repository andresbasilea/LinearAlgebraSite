


## Combinación Lineal
### Definición formal 
Sea $V$ un espacio vectorial sobre un campo $K$ y sea $\bar{v} \in V$. El vector $\bar{v}$ es una combinación lineal de los vectores $\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n$ si puede ser expresado de la forma:
$$
\bar{v} = \alpha_1 \bar{v}_1 + \alpha_2 \bar{v}_2 + \ldots + \alpha_n \bar{v}_n
$$
donde los escalares $\alpha_1, \alpha_2, \ldots, \alpha_n \in K$


##### Ejemplo de combinación lineal en la vida real

Los ejemplos en los que se presentan las combinaciones lineales son muy variados: planos, rectas, mezcla aditiva de colores, cuerpos sujetos a fuerzas e incluso recetas de cocina.

>[!interesante] Visualización de combinación lineal en mecánica
>Sea una pelota colgante, como la mostrada en la figura, sostenida por dos cuerdas. El sistema está en reposo y la pelota pesa $W = 7$ N. ¿Cuáles son las magnitudes de las fuerzas $F_1$ y $F_2$?

![[Screenshot 2025-07-27 at 10.14.25 p.m..png|400]]

Como el sistema está en equilibrio estático, la resultante de la suma de fuerzas es el vector nulo; es decir
$$
F_1 + F_2 - W = 0
$$
$$
F_1 \begin{bmatrix} -\cos 45^\circ \\ \sin 45^\circ \end{bmatrix} + F_2 \begin{bmatrix} \cos 60^\circ \\ \sin 60^\circ \end{bmatrix} + \begin{bmatrix} 0 \\ -7 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
$$
que es una combinación lineal de fuerzas. Aplicando las operaciones y la igualdad entre vectores, se obtiene el sistema de ecuaciones lineales
$$
\begin{cases}
-0.71F_1 + 0.50F_2 = 0 \\
0.71F_1 + 0.87F_2 = 7
\end{cases}
$$
Este es un sistema compatible determinado, cuya solución proporciona las magnitudes solicitadas: $F_1 = 3.60$ N y $F_2 = 5.11$ N.

El ejemplo anterior ilustra perfectamente que toda combinación lineal desemboca en un sistema de ecuaciones lineales. De acuerdo a la teoría estudiada en el curso de Álgebra, un sistema de ecuaciones lineales se clasifica en tres tipos de acuerdo a su solución; al estar ligados, los dos tipos de sistemas se trasladan a las combinaciones lineales para darles una identidad específica en el espacio o subespacio vectorial al que pertenezcan los vectores. La clasificación es la siguiente:

- **Sistema de ecuaciones lineales determinado**: La combinación lineal es única; es decir, cada escalar de la combinación posee un único valor.
- **Sistema de ecuaciones lineales compatible indeterminado**: Existen múltiples combinaciones lineales; los escalares dependen de parámetros libres.
- **Sistema de ecuaciones lineales incompatible**: La combinación lineal no existe. (se llega a un sistema de la forma $0=x$ donde $x$ es diferente a cero). Geométricamente lo podemos ver como lineas paralelas que nunca intersecan. 


![[Screenshot 2025-08-31 at 4.19.10 p.m..png]]

Queremos representar al vector **Agua de Valencia** ($\vec{v}$) como una **combinación lineal** de los vectores: 
- Champaña ($\vec{v_1}$)
- Ginebra ($\vec{v_2}$)
- Jugo de naranja ($\vec{v_3}$)
- Vodka ($\vec{v_4}$)


![[Screenshot 2025-08-31 at 4.28.05 p.m..png]]

![[linearCombination2.mov]]
<small>Esta animación es de https://www.youtube.com/watch?v=k7RM-ot2NWY&ab_channel=3Blue1Brown </small>


#### Ejercicio 1: 

Dada la matriz  $A = \begin{bmatrix} 3 & x \\ y & 11 \end{bmatrix}$:

a) Determine los valores de las constantes $x, y \in \mathbb{R}$, de tal manera que la matriz  sea una combinación lineal de las matrices: $B = \begin{bmatrix} 5 & -3 \\ 2 & -1 \end{bmatrix} \quad \text{y}$ $\quad C = \begin{bmatrix} 9 & 7 \\ -5 & 4 \end{bmatrix}$ 

b) Con los valores de $\alpha$ y $\beta$ obtenidos, exprese a la matriz  como una combinación lineal de las matrices $B$ y $C$.

##### Solución:
Partimos de:

$$
A = \alpha B + \beta C
$$


sustituyendo las matrices: 
$$
\begin{bmatrix} 3 & x \\ y & 11 \end{bmatrix} = \alpha \begin{bmatrix} 5 & -3 \\ 2 & -1 \end{bmatrix} + \beta \begin{bmatrix} 9 & 7 \\ -5 & 4 \end{bmatrix}
$$

Al multiplicar y sumar se llega a:
$$
\begin{bmatrix} 3 & x \\ y & 11 \end{bmatrix} = \begin{bmatrix} 5\alpha + 9\beta & -3\alpha + 7\beta \\ 2\alpha - 5\beta & -\alpha + 4\beta \end{bmatrix}
$$
por igualdad de matrices se llega al sistema de ecuaciones:

$$
\begin{cases} 5\alpha + 9\beta = 3 \\ -3\alpha + 7\beta = x \\ 2\alpha - 5\beta = y \\ -\alpha + 4\beta = 11 \end{cases}
$$

al resolverlo por el método de Gauss, tenemos: 
![[Screenshot 2025-08-31 at 5.13.43 p.m..png]]

de la ecuación (2), tenemos que: 

$$
\beta = 2
$$

de (1) 

$$
\alpha = -3
$$


con los valores de $\alpha$, $\beta$ y las ecuaciones (3) y (4), tenemos: 

$$
-5(2) = x - 33 \; \implies \; x = 33 - 10 \; \therefore \; x = 23
$$



$$
3(2) = y + 22 \; \implies \; y = 6 - 22 \; \therefore \; y = -16
$$
<br>

con lo cual la matriz  es igual a:

$$
A = \begin{bmatrix} 3 & 23 \\ -16 & 11 \end{bmatrix}
$$

b) La combinación lineal solicitada es: 


$$
A = -3B + 2C
$$


#### Ejercicio 2:

Sean el espacio vectorial $\mathbb{R}^2$ y $S = \{(1, -1), (3, 0), (2, 1)\}$ un subconjunto de $\mathbb{R}^2$. Exprese de dos maneras diferentes al vector $\bar{v} = (5, 1)$ como una combinación lineal de los vectores de $S$.

<iframe src="https://www.geogebra.org/graphing/vetmws2w?embed" width="800" height="700" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

## Dependencia Lineal

### Definición formal
Sea $A = \{\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n\}$ un conjunto de vectores. Se dice que $A$ es linealmente independiente si la ecuación
$$
\alpha_1 \bar{v}_1 + \alpha_2 \bar{v}_2 + \ldots + \alpha_n \bar{v}_n = \bar{0}
$$
solo se satisface cuando $\alpha_1 = \alpha_2 = \ldots = \alpha_n = 0$. En caso contrario, es decir, si existen escalares $\alpha_1, \alpha_2, \ldots, \alpha_n$ no todos nulos, para los cuales se satisface dicha ecuación, entonces se dice que el conjunto $A$ es linealmente dependiente.


>[!note] ¿Pero cómo se ve el cero vector $\vec{0}$ en distintos espacios vectoriales? 
>Para 
>${R}^2:$ 
>$$
> \; \bar{0} = (0,0) 
> $$ 
>
>Para $P_3$ 
>$$
> \; \bar{0} = 0x^3 + 0x^2 + 0x + 0 
> $$ 
>
>Para $\mathbb{R}^3$ 
>$$ 
>\; \bar{0} = (0,0,0) 
>$$ 
>
>Para $M_{2\times2}$ 
>$$ 
>\; \bar{0} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} 
>$$ 
>
>Para $P_2$ 
>$$
>\; \bar{0} = 0x^2 + 0x + 0 
>$$
>
>Para $M_{3\times3}$
> $$
>  \; \bar{0} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} 
>  $$

### Algunos teoremas sobre dependencia lineal
- Todo conjunto de vectores que contiene al vector cero es linealmente dependiente.
- Si $W$ es un conjunto linealmente independiente, entonces cualquier subconjunto de $W$ es linealmente independiente


#### Ejercicio 1: 

Determinar si el conjunto: 

$$ 
A = \{(1,1,-1), (2,-3,1), (3,-4,6)\}
$$
es linealmente dependiente o independiente:

**Solución**:

Para este ejercicio, ocuparíamos la ecuación de dependencia lineal: 

$$
\alpha(1,1,-1) + \beta(2,-3,1) + \gamma(3,-4,6) = (0,0,0)
$$

Para obtener un sistema de ecuaciones y escalonarlo ocupando el método de eliminación de Gauss para resolverlo. Alternativamente, podemos ocupar el determinante de los tres vectores del conjunto en forma de columnas y, si el resultado es diferente de 0, decimos que el conjunto de vectores es linealmente independiente: 

$$
det(A) = \begin{vmatrix} 1 & 2 & 3 \\ 1 & -3 & -4 \\ -1 & 1 & 6 \end{vmatrix}
$$ 
$$
\det(A) = -24
$$
Como el valor es diferente de 0, decimos que el conjunto es linealmente independiente. 
Gráficamente, observamos que los vectores que llamaremos $\vec{u}$ y $\vec{v}$ del conjunto $A$ forman un plano. Como el vector $\vec{w}$ no se encuentra dentro del plano, el espacio generado por estos tres vectores es todo el espacio $R_3$. 

<iframe src="https://www.geogebra.org/3d/cdp5z4q5?embed" width="800" height="700" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>


>[!interesante] ¿Por qué el determinante nos indica la dependencia lineal de un conjunto de vectores? 
> El determinante proporciona información crucial sobre la transformación lineal que una matriz representa. Su significado varía ligeramente en la interpretación geométrica según la dimensión del espacio. En dos dimensiones, representaría cuánto escala las áreas después de aplicar una transformación lineal. Si ese escalamiento fuera igual a 0, diríamos que los vectores de esa matriz son linealmente dependientes, ya que deben de estar en la misma línea para dar ese resultado.
> No te preocupes si esto no queda tan claro, lo veremos más a detalle en el capítulo [[1 Transformaciones lineales]].
> 
> Por lo pronto, mira el efecto del determinante en la siguiente visualización interactiva. **¿Qué características tienen que tener los vectores de un conjunto de dos dimensiones para que el determinante sea igual a 0 (linealmente dependientes)?**


>##### Visualización del efecto de aplicar el determinante en dos dimensiones
>
>
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px; overflow: hidden;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/determinante_js.html">
    </iframe>
</div>



#### Ejercicio 2

Determinar si el conjunto

$A = {x^2 + 2x + 5, x^2 + 3x - 1, -x^2 + x + 2, x^2 + 3x + 2}$
es linealmente dependiente o linealmente independiente.

>[!interesante] Polinomios
> Los polinomios con las operaciones usuales de suma y multiplicación por un escalar forman un espacio vectorial.


#### Ejercicio 3 tipo examen 

Sea el conjunto 

$$
A = \{(1,k,1), (1,-k,-1), (0,1,2)\}
$$
Determinar el valor o los valores de $k$ para que el conjunto sea
1) Linealmente dependiente
2) Linealmente independiente

**La siguiente visualización te ayudará a comprender el porqué cuando $k=1/2$ el conjunto es linealmente dependiente. Mueve el Slider de "k" y comprueba la independencia o dependencia lineal para distintos valores**.

<iframe src="https://www.geogebra.org/3d/hpuwnyvd?embed" width="800" height="700" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>


#### Ejercicio 4

Determinar si el conjunto 

$$
A = \{ \begin{pmatrix} -3 & 4 \\ 1 & 2 \end{pmatrix}, \begin{pmatrix} -8 & 1 \\ 1 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 1 & 4 \\ -1 & 0 \end{pmatrix} \}
$$
Es linealmente independiente o linealmente dependiente.


## Conjunto Generador

### Definición formal
Sea $V$ un espacio vectorial sobre $K$, y sea $G = \{\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n\}$ un conjunto de vectores de $V$. Se dice que $G$ es generador de $V$, si todo vector de $V$ puede expresarse como una combinación lineal de los vectores de $G$.

Lo que es lo mismo: 

$$ 
\bar{x} = \alpha_1 \bar{v}_1 + \alpha_2 \bar{v}_2 + \dots + \alpha_n \bar{v}_n 
$$
para todo $\vec{x} \in V$.


- **Si un vector se expresa como combinación lineal de un conjunto generador, existen infinitas posibilidades de expresar ese vector.**
	- Esto es parecido a lo que veíamos en el ejercicio 2 de combinaciones lineales, donde un mismo vector (el vector $(5,1)$) podía ser representado de múltiples formas a través de combinaciones lineales de los vectores del conjunto $S$.


![[Screenshot 2025-08-31 at 9.05.58 p.m..png]]


>[!note] Vectores genéricos de distintos espacios vectoriales
>Para $\mathbb{R}^2$:
>$$
> \bar{x} = (a, b)
>$$
>
>Para $P_3$:
>$$
>\bar{x} = ax^3 + bx^2 + cx + d
>$$
>
>Para $\mathbb{R}^3$:
>$$
>\bar{x} = (x, y, z)
>$$
>
>Para $M_{2\times2}$:
>$$ 
>\bar{x} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
>$$
>
>Para $P_2$:
>$$
>\bar{x} = ax^2 + bx + c
>$$
>
>Para $M_{3\times3}$:
>$$
> \bar{x} = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}
> $$

#### Ejercicio 1 (en clase)

Determinar si el conjunto 
$$
B = \{(-2,0,0), (0,1,2), (0,0,-1)\}
$$
es un generador de $\mathbb{R^3}$

#### Ejercicio 2 (en clase)

Determinar si el conjunto 
$$
C = \{(-2,0,0), (0,1,2)\}
$$
es un generador de $\mathbb{R^3}$

#### Ejercicio 3

Determinar si el conjunto 
$$
A = \{(-2,0,0), (0,1,2), (0,0,-1), (0,1,-1)\}
$$
es un generador de $\mathbb{R}^3$

De la definición de generador 
$$
\alpha\bar{v}_1 + \beta\bar{v}_2 + \gamma\bar{v}_3 + \delta\bar{v}_4 = \bar{x}
$$

$$
\alpha(-2,0,0) + \beta(0,1,2) + \gamma(0,0,-1) + \delta(0,1,-1) = (x,y,z)
$$

Desarrollar y verificar que existen los escalares 
$$
(-2\alpha, \beta+\delta, 2\beta - \gamma - \delta) = (x,y,z)
$$

En este caso, no es necesario escalonar, dada la forma que tienen los vectores ya nos quedan las siguientes ecuaciones: 

$$
-2\alpha = x \; \dots(1)
$$
$$
\beta + \delta = y \; \dots(2)
$$
$$
2\beta - \gamma - \delta = z \;  \dots(3)
$$

Al haber más incógnitas (4) que ecuaciones (3), se debe de parametrizar. En este tipo de problemas, las incógnitas son los escalares $\alpha, \beta, \gamma, \delta$. Las componentes $x, y, z$ del vector genérico de $R_3$ las consideramos como datos o constantes. 

$$
-2\alpha = x \; \rightarrow \alpha = -\frac{x}{2}
$$
$$
\beta + \delta = y \; \dots(2)
$$
$$
2\beta - \gamma - \delta = z  \; \dots (3)
$$


Si se toma $\delta$ como parámetro:
$$
\beta = y - \delta 
$$
$$
 2(y-\delta) - \gamma - \delta = z \longrightarrow \gamma = 2y - z - 3\delta
$$


Conjunto solución:

$$
\alpha = -\frac{x}{2}
$$
$$
\beta = y - \delta
$$
$$
\gamma = 2y - z - 3\delta
$$
$$
para \; todo \; \delta \in \mathbb{R}
$$

**Como existen los escalares, el conjunto $A$ es generador de $\mathbb{R}^3$**

>[!Interesante] ¿Qué puedes concluir sobre la **dependencia o independencia lineal** del conjunto A del ejercicio anterior? 
> **-**¿$\mathbb{R^3}$ se puede **generar con otro conjunto de vectores**? 
> 
> **-**¿Se te ocurre algún conjunto **linealmente independiente** para generar $\mathbb{R^3}$?
> 
> **-**¿Qué pasa si tienes 4 vectores para generar un espacio de tres dimensiones? ¿Todos los vectores aportan información para generar el espacio? ¿Existe cierta *redundancia* entre vectores linealmente dependientes?


## Base

### Definición formal
Se define como base de un espacio vectorial $V$, a cualquier subconjunto $B$ de vectores de $V$, tal que:
-  Cualquier vector de $V$ puede expresarse como una combinación lineal de los vectores de $B$. 
-  $B$ es linealmente independiente.

>[!interesante] Representar un vector como combinación lineal de una base
>**Cuando un vector es expresado como una combinación lineal de los elementos de una base dada, entonces dicha combinación lineal es única.**

![[basisR2.mov]]
<small>Esta animación es de https://www.youtube.com/watch?v=k7RM-ot2NWY&ab_channel=3Blue1Brown </small>


### Algunos teoremas
- Sea $V$ un espacio vectorial sobre un campo $K$. Si $B = \{\vec{v_1}, \vec{v_2}, ..., \vec{v_n}\}$ es una base de $V$, entonces cualquier conjunto de vectores de $V$ **con más de $n$ elementos** es **linealmente dependiente.** 
- Si un espacio vectorial $V$ tiene una base con $n$ vectores, entonces cualquier base de $V$ deberá contener exactamente $n$ vectores. 
- Si $V$ es un espacio vectorial de dimensión $n$, entonces **cualquier conjunto linealmente independiente que contenga $n$ vectores del espacio $V$** es una **base** de dicho espacio. 

## Dimensión de un espacio vectorial

La dimensión de un espacio vectorial $V$, se define como la cantidad de elementos de cualquiera de sus bases, y se denota como: 
$$
Dim V
$$
Si $V={\vec{0}}$ , entonces $Dim V=0$


- Todas las bases de un mismo espacio vectorial tienen el mismo número de vectores
- La dimensión de un espacio vectorial es el número de vectores que contiene cualquiera de sus bases
- El único espacio vectorial de dimensión cero es el que contiene únicamente al vector cero. 

## Pero... ¿cómo se ve el espacio generado por dos vectores linealmente independientes en dos dimensiones?
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_span/span2d.html">
    </iframe>
</div>


## Veamos lo mismo, pero en tres dimensiones
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_span/span3d.html">
    </iframe>
</div>


## Y ahora, ¿qué espacio generan tres vectores linealmente independientes? 
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_span/span3d2.html">
    </iframe>
</div>












## Vector de coordenadas 

Sea $B = \{\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n\}$ una base del espacio vectorial $V$ y sea $\bar{v}$ un vector cualquiera de $V$ tal que:
$$
\bar{v} = \alpha_1 \bar{v}_1 + \alpha_2 \bar{v}_2 + \ldots + \alpha_n \bar{v}_n
$$
A los escalares $\alpha_1, \alpha_2, \ldots, \alpha_n$ se les llama coordenadas de $\bar{v}$ en la base $B$ y al vector:
$$
(\bar{v})_B = (\alpha_1, \alpha_2, \ldots, \alpha_n)^T
$$
se le llama vector de coordenadas de $\bar{v}$ en la base $B$.


![[BasisCoordinates.mov]]
<small> Animación de:
https://www.youtube.com/watch?v=P2LTAUO1TdA&t=55s&ab_channel=3Blue1Brown
</small>

#### Ejercicio 1 (en clase)

Determinar una base de los siguientes espacios vectoriales: 

- $V_1 = \{(x,y,z)| \; 3x-y+2z = 0 , x,y,z \; \in \; \mathbb{R}\}$

- $V_2 = \left\{ \begin{pmatrix} 2a & -a \\ 0 & b \end{pmatrix} \middle| a, b \in \mathbb{R} \right\}$

- $V_3 = \left\{ (x, 2x, 0) \mid x \in \mathbb{R} \right\}$

- $V_4 = \mathbb{R}^3 = \left\{ (x, y, z) \mid x, y, z \in \mathbb{R} \right\}$

- $V_5 = P_2 = \left\{ ax^2 + bx + c \mid a, b, c \in \mathbb{R} \right\}$

- $V_6 = M_{2\times2} = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \middle| a, b, c, d \in \mathbb{R} \right\}$


#### Ejercicio 2 (en clase)

Obtener una base y la dimensión de $\mathbb{C}$ sobre

a) $\mathbb{C}$

b) $\mathbb{R}$

$\mathbb{C} = \left\{ z \mid z = a + bi; a, b \in \mathbb{R} \right\}$

>[!note] Sobre $\mathbb{C^n}$
>En general $\mathbb{C^n}$ es un espacio vectorial sobre el campo de los reales y sobre el campo de los complejos. No es el caso de $\mathbb{R^n}$, el cual es espacio vectorial sobre los reales, pero no sobre los complejos.


#### Ejercicio 3 (en clase)

 Sea el conjunto
 $$
 A = \{(-1, k, 2), (-1, 1, -1), (1, 0, 2)\}
 $$
 1) Determine el valor de $k$ para que el conjunto $A$ sea linealmente dependiente. 
 2) **Con el valor obtenido en el inciso anterior, obtenga el espacio vectorial que genera el conjunto $A$.** 
 3) **Determine una base y la dimensión del espacio vectorial obtenido en el inciso anterior.** 


#### Ejercicio 4 (en clase)

Obtener las coordenadas del vector $\vec{x}$ = $(4,5)$ en las bases: 
1) $B_1 = \{(1,0), (0,1)\}$
2) $B_2 = \{(2,1), (-1,1)\}$

![[Screenshot 2025-09-02 at 3.44.24 p.m..png]]


Para el primer inciso, vemos que el vector de coordenadas es $(4,5)$, debido a que se encuentra referido a la base canónica de $\mathbb{R^2}$. 
No obstante, para el segundo inciso, como la base es diferente a la canónica, vemos que el vector $\vec{x}$ ahora sería igual a multiplicar el primer vector de la base $B_2$ por 3 y sumarle el segundo vector multiplicado por 2. En coordenadas, quedaría como:
$$
(\vec{x})_{B_2} = [(4,5)]_{B_2} = (3,2)^T
$$

![[Screenshot 2025-09-02 at 7.13.49 p.m..png]]
#### Ejercicio 5 (en clase)

Sean el espacio vectorial:

$P = \left\{ at^2 + bt + c \mid a, b, c \in \mathbb{R} \right\}$

y el conjunto $A = \left\{ t^2 + 4t - 3, \quad t^2 - 2t + 5, \quad 2t^2 - 3t, \quad t + 3 \right\}$ 

1) Determine si el conjunto $A$ es generador del espacio vectorial $P$.
2) En caso afirmativo, obtenga una base de dicho espacio.
3) Determine las coordenadas del vector $P_1 = t^2 + 2t + 1$, referidas a la base obtenida en el inciso anterior.




<script src="https://giscus.app/client.js"
        data-repo="andresbasilea/LinearAlgebraSite"
        data-repo-id="R_kgDOO-oDkA"
        data-category="Announcements"
        data-category-id="DIC_kwDOO-oDkM4CsOaa"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="noborder_light"
        data-lang="es"
        crossorigin="anonymous"
        async>
</script>