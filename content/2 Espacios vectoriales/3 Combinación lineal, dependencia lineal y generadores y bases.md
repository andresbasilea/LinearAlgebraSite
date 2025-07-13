


## Combinación Lineal
### Definición formal 
Sea $V$ un espacio vectorial sobre un campo $K$ y sea $\bar{v} \in V$. El vector $\bar{v}$ es una combinación lineal de los vectores $\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n$ si puede ser expresado de la forma:
$$
\bar{v} = \alpha_1 \bar{v}_1 + \alpha_2 \bar{v}_2 + \ldots + \alpha_n \bar{v}_n
$$
donde los escalares $\alpha_1, \alpha_2, \ldots, \alpha_n \in K$


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