


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


## Dependencia Lineal

### Definición formal
Sea $A = \{\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n\}$ un conjunto de vectores. Se dice que $A$ es linealmente independiente si la ecuación
$$
\alpha_1 \bar{v}_1 + \alpha_2 \bar{v}_2 + \ldots + \alpha_n \bar{v}_n = \bar{0}
$$
solo se satisface cuando $\alpha_1 = \alpha_2 = \ldots = \alpha_n = 0$. En caso contrario, es decir, si existen escalares $\alpha_1, \alpha_2, \ldots, \alpha_n$ no todos nulos, para los cuales se satisface dicha ecuación, entonces se dice que el conjunto $A$ es linealmente dependiente.

### Algunos teoremas sobre dependencia lineal
- Todo conjunto de vectores que contiene al vector cero es linealmente dependiente.
- Si $W$ es un conjunto linealmente independiente, entonces cualquier subconjunto de $W$ es linealmente independiente

## Conjunto Generador

### Definición formal
Sea $V$ un espacio vectorial sobre $K$, y sea $G = \{\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n\}$ un conjunto de vectores de $V$. Se dice que $G$ es generador de $V$, si todo vector de $V$ puede expresarse como una combinación lineal de los vectores de $G$.


## Base

### Definición formal
Se define como base de un espacio vectorial $V$, a cualquier subconjunto $B$ de vectores de $V$, tal que:
-  Cualquier vector de $V$ puede expresarse como una combinación lineal de los vectores de $B$.
-  $B$ es linealmente independiente.


>[!info] Las coordenadas cilíndricas forman una base de $R^3$
>La base $Ro, Phi, Z$ permite generar a todo el espacio $R^3$. ¿Alcanzas a visualizar cómo?
>![[Pasted image 20250727222208.png|500]]


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