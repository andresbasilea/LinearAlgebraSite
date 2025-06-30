## Transformación lineal

Sean $V$ y $W$ espacios vectoriales definidos sobre un campo $K$. La función $T$: $V \rightarrow W$ se llama transformación lineal si se cumplen las siguientes dos propiedades: 

$\forall \: \vec{u}, \:  \vec{v} \: \in \: V$ y $\forall \: \alpha \: \in \: K$
- **Aditividad**:
	- $T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v})$ 
- **Homogeneidad**: 
	-  $T(\alpha\vec{u}) = \alpha T(\vec{u})$


#### Ejemplo de transformación lineal de "cizalla"
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/cizalla.html">
    </iframe>
</div>

<br>
<br>

>[!Success] Visualizando las dos propiedades que cumplen las transformaciones lineales
>Sencillamente, y para visualizar las propiedades que cumple una transformación lineal en el plano, podemos decir que el efecto de aplicar una transformación lineal **mantendrá las lineas que conforman el plano paralelas y equidistantes**.

<br>

### ¿Qué podemos representar utilizando transformaciones lineales? 
¡Rotaciones, cizallas y mucho más!
#### Ejemplo de transformación lineal de rotación
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/rotacion.html">
    </iframe>
</div>

### Matriz asociada a una transformación lineal


$$
\begin{align*} 
A \vec{x} = \vec{b}
\end{align*}
$$


### Aplicando transformaciones lineales a otros espacios vectoriales

¡La derivada y la integral también son ejemplos de transformaciones lineales! 

>[!Tip] ¿Qué pasa en otros espacios vectoriales? 
>Ahora imagina cómo se vería una transformación lineal en el espacio vectorial $R^3$. ¿Qué representaría cada una de las columnas de la matriz asociada a la transformación lineal?

#### Ejemplo de transformación lineal de rotación y escalamiento en tres dimensiones
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/rotacion3Dbasica.html">
    </iframe>
</div>

<br>
<br>
<br>

>[!Tip] Pensar en matrices como transformaciones lineales que llevan los vectores de la base a las coordenadas de cada columna
>Puedes imaginarte que la matriz de transformación, en cada una de sus columnas, nos indicará dónde terminarán los vectores $\vec{i}, \vec{j} \, y \, \vec{k}$ al aplicar la transformación.

<br>

$$
\mathbf{A} = \begin{pmatrix}
3 & -2 & 3 \\
2 & 3 & 1 \\
-1 & 2 & 3
\end{pmatrix}
$$

Esta matriz $\mathbf{A}$ puede ser pensada como una colección de tres vectores columna, $\mathbf{v}_1$, $\mathbf{v}_2$, y $\mathbf{v}_3$:

$$
\mathbf{A} = \begin{pmatrix}
\mathbf{v}_1 & \mathbf{v}_2 & \mathbf{v}_3
\end{pmatrix} = \begin{pmatrix}
\begin{pmatrix} 3 \\ 2 \\ -1 \end{pmatrix} &
\begin{pmatrix} -2 \\ 3 \\ 2 \end{pmatrix} &
\begin{pmatrix} 3 \\ 1 \\ 3 \end{pmatrix}
\end{pmatrix}
$$

Cuando una matriz multiplica a un vector, genera una combinación lineal de los vectores en las columnas. Por ejemplo para el vector $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$:

$$
\begin{align*}
\mathbf{A}\mathbf{x} &= \begin{pmatrix}
3 & -2 & 3 \\
2 & 3 & 1 \\
-1 & 2 & 3
\end{pmatrix}
\begin{pmatrix}
x_1 \\ x_2 \\ x_3
\end{pmatrix} \\ \\
&= x_1 \begin{pmatrix} 3 \\ 2 \\ -1 \end{pmatrix} + x_2 \begin{pmatrix} -2 \\ 3 \\ 2 \end{pmatrix} + x_3 \begin{pmatrix} 3 \\ 1 \\ 3 \end{pmatrix}
\end{align*}
$$

#### Ejemplo de transformación lineal de rotación y escalamiento en tres dimensiones
<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/rotacion3D.html">
    </iframe>
</div>




### Transformaciones no lineales

>[!danger] ¿Alguna vez te preguntaste?
>¿Por qué el álgebra lineal se limita al estudio de las transformaciones lineales?
>¿Cómo se ve una transformación no lineal?

<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/no_lineal.html">
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
        data-theme="light"
        data-lang="es"
        crossorigin="anonymous"
        async>
</script>