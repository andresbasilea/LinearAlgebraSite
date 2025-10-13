### Matriz asociada a una transformación lineal

Sean $V$ y $W$ dos espacios vectoriales de dimensión $n$ y $m$, respectivamente, y sean $A = \{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n \}$ y $B = \{ \vec{w}_1, \vec{w}_2, \ldots, \vec{w}_m \}$ bases de dichos espacios.

Si $T: V \rightarrow W$ es una transformación lineal, existe una matriz única $M_B^A(T)$, de orden $m \times n$, tal que: 

$$
M_B^A \,(T) \, (\vec{v})_A = [T\,(\vec{v})]_B; \quad \forall \, \vec{v} \in V
$$

Las $n$ columnas de la matriz $M_B^A(T)$, llamada matriz asociada a $T$, son los vectores de coordenadas en la base $B$, de las imágenes de los vectores de la base $A$, esto es:

$$
M_B^A(T) = \begin{bmatrix} \, \,[T(\vec{v}_1)]_B & [T(\vec{v}_2)]_B & \ldots & [T(\vec{v}_n)]_B  \, \, \end{bmatrix}
$$


### Algunos teoremas

- Sea $V$ un espacio vectorial de dimensión $n$. La matriz asociada a la transformación identidad $I: V \longrightarrow V$, referida a cualquier base de $V$ es la matriz identidad $I_n$.
- Sean $T: V \longrightarrow W$ una transformación lineal y $A$ y $B$ dos bases de $V$ y $W$, respectivamente. El rango de la matriz asociada $M^A_B (T)$ es igual a la dimensión del recorrido de $T$, esto es: 
$$ 
R \,[\, M^A_B (T)\,] = Dim \,T(V)
$$


#### Ejemplo interactivo para visualizar transformaciones lineales
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px; overflow: hidden;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/transformacion_js.html">
    </iframe>
</div>



### Ejercicio

Sean los espacios vectoriales
$$ 
P_2 = \{ax^2 + bx + c \mid a, b, c \in \mathbb{R}\} 
$$
$$ 
M = \left\{ \begin{bmatrix} a & b \\ b & c \end{bmatrix} \mid a, b, c \in \mathbb{R} \right\} 
$$
Ambos definidos sobre el campo real, y sea la transformación lineal $T: P_2 \to M$ definida por:
$$ 
T \left( ax^2 + bx + c \right) = \begin{bmatrix} a+c & 3b \\ 3b & a-c \end{bmatrix} \quad ; \forall a, b, c \in \mathbb{R} 
$$
Obtenga la matriz asociada a la transformación $T$.


###### Solución
Para obtener la matriz asociada a la transformación, se requiere una base del dominio y una del codominio. Consideremos las bases:
$$ 
A = \{x^2, x, 1\} \quad \text{y} \quad B = \left\{ \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix} \right\} 
$$
Las imágenes de los elementos de la base $A$ son:
$$ 
T(x^2) = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} 
$$
$$ 
T(x) = \begin{bmatrix} 0 & 3 \\ 3 & 0 \end{bmatrix} 
$$
$$ 
T(1) = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} 
$$
Obteniendo los vectores de coordenadas de estas imágenes referidas a la base $B$, tenemos:
$$ 
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \alpha_1 \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} + \alpha_2 \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} + \alpha_3 \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix} 
$$
Al realizar las operaciones correspondientes y por igualdad de matrices, fácilmente puede llegarse a:
$$ 
\left( \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \right)_B = (1, 0, 1)
$$


En forma análoga con las otras dos imágenes, se llega a:

$$ 
\begin{bmatrix} 0 & 3 \\ 3 & 0 \end{bmatrix} = \beta_1 \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} + \beta_2 \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} + \beta_3 \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}
$$

$$ 
 \implies \left( \begin{bmatrix} 0 & 3 \\ 3 & 0 \end{bmatrix} \right)_B = (0, 3, 0)
$$

$$ 
\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} = \gamma_1 \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} + \gamma_2 \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} + \gamma_3 \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}
$$
$$ 
\implies \left( \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix} \right)_B = (1, 0, -1) 
$$
Con lo cual, la matriz asociada a la transformación viene dada por la disposición en columna de dichos vectores de coordenadas, esto es:
$$ 
M_B^A(T) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 3 & 0 \\ 1 & 0 & -1 \end{bmatrix} 
$$


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
