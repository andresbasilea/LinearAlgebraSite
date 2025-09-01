


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

<iframe src="https://www.geogebra.org/graphing/vetmws2w?embed" width="700" height="700" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

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








## Conjunto Generador

### Definición formal
Sea $V$ un espacio vectorial sobre $K$, y sea $G = \{\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n\}$ un conjunto de vectores de $V$. Se dice que $G$ es generador de $V$, si todo vector de $V$ puede expresarse como una combinación lineal de los vectores de $G$.

- **Si un vector se expresa como combinación lineal de un conjunto generador, existen infinitas posibilidades de expresar ese vector.**

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
- Sea $V$ un espacio vectorial sobre un campo $K$. Si $B = \{\vec{v_1}, \vec{v_2}, ..., \vec{v_n}\}$ es una base de $V$, entonces cualquier conjunto de vectores de $V$ con más de $n$ elementos es linealmente dependiente. 
- Si un espacio vectorial $V$ tiene una base con $n$ vectores, entonces cualquier base de $V$ deberá contener exactamente $n$ vectores. 
- Si $V$ es un espacio vectorial de dimensión $n$, entonces cualquier conjunto linealmente independiente que contenga $n$ vectores del espacio $V$ es una base de dicho espacio. 

## Dimensión de un espacio vectorial

La dimensión de un espacio vectorial $V$, se define como la cantidad de elementos de cualquiera de sus bases, y se denota como: 
$$
Dim V
$$
Si $V={\vec{0}}$ , entonces $Dim V=0$


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