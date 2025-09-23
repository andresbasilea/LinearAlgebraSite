
## Transformación lineal

Sean $V$ y $W$ espacios vectoriales definidos sobre el mismo campo $K$. La función $T: V \rightarrow W$ recibe el nombre de transformación y, los espacios $V$ y $W$ se llaman dominio y codominio de la transformación, respectivamente. Esquematicamente se tiene: 

![[Screenshot 2025-07-01 at 9.23.38 a.m..png]]


### Propiedades que deben cumplirse
Sean $V$ y $W$ espacios vectoriales definidos sobre un campo $K$. La función $T$: $V \rightarrow W$ se llama transformación lineal si se cumplen las siguientes dos propiedades: 

$\forall \: \vec{u}, \:  \vec{v} \: \in \: V$ y $\forall \: \alpha \: \in \: K$
- **Superposición**:
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

### Recorrido y núcleo de una transformación lineal
Sean $V$ y $W$ espacios vectoriales y $T: V \rightarrow W$ una transformación lineal. 
- Se llama recorrido de $T$ al conjunto de todas las imágenes de los vectores del dominio, el cual se denota como $T(V)$ y es tal que: $$ T(V) = \{ T(\vec{v}) \mid \vec{v} \in V \} $$
- Se llama núcleo de $T$ al conjunto de vectores del dominio, cuya imagen es el vector cero de $W$, el cual se denota como $N(T)$ y es tal que: $$ N(T) = \{ \vec{v} \in V \mid T(\vec{v}) = \vec{0}_W \} $$

![[Screenshot 2025-09-23 at 8.56.51 a.m..png]]

**El núcleo SIEMPRE tiene la forma del espacio vectorial de origen**. En la imagen anterior, el núcleo serían los vectores $\vec{v_1}$ y $\vec{v_2}$ del espacio vectorial $V$. 

**El recorrido SIEMPRE tiene la forma del espacio vectorial de destino (codominio)**.


### Algunos teoremas sobre transformaciones lineales

Si $T: V \rightarrow W$ es una transformación lineal, entonces: \
1. $T(\vec{0}_V) = \vec{0}_W$ 
2. $T(V)$ es un subespacio de $W$.
3. $N(T)$ es un subespacio de $V$. 
4. Si $B = \{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n \}$ es una base $V$, entonces el conjunto $G = \{ T(\vec{v}_1), T(\vec{v}_2), \ldots, T(\vec{v}_n) \}$ es generador del recorrido de $T$. 
5. Si $V$ es un espacio de dimensión finita, entonces se cumple que: $\newline$ $$Dim V = \text{Dim } T(V) + \text{Dim } N(T)$$


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

>[!custom] Y... ¿qué pasa con el cubo unitario? 
>Si te diste cuenta, antes de realizar la transformación anterior, teníamos un cubo unitario con centro en el origen. Unitario significa que su volumen es igual a 1, ya que cada uno de sus lados mide exactamente una unidad. Sin embargo, después de realizar la transformación, vemos que el cubo unitario crece de tamaño y rota (al igual que todos los vectores del espacio vectorial). **¿Cómo calcularías rápidamente el volumen de este nuevo cubo?** Haz click abajo para conocer la respuesta: 
>>[!Danger]- La respuesta es:
>>>[!Interesante] ¡Podemos utilizar el [[1,1 Determinantes|determinante]]! 
>>>Que, en este caso, daría un valor de volumen de 27



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

>[!interesante] ¿Alguna vez te preguntaste?
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



#### Ejercicio 1

Sea la transformación $R: \mathbb{R}^5 \to \mathbb{R}^3$ definida por
$$ R(x,y,z,s,t) = (x+2y+z-3s+4t, 2x+5y+4z-5s+5t, x+4y+5z-s-2t) $$
Determinar el recorrido de la transformación $R$

**Paso 1**: Dar una base del dominio. Se sugiere proponer la base canónica: 

$$
B = \{(1,0,0,0,0), (0,1,0,0,0), (0,0,1,0,0), (0,0,0,1,0), (0,0,0,0,1) \}
$$

**Paso 2**: Aplicar la transformación a cada uno de los vectores de la base propuesta


$$
R(1,0,0,0,0) = (1,2,1)
$$
$$
R(0,1,0,0,0) = (2,5,4)
$$
$$
R(0,0,1,0,0) = (1,4,5) 
$$
$$
R(0,0,0,1,0) = (-3,-5,-1)
$$
$$
R(0,0,0,0,1) = (4,5,-2)
$$



Un generador del recorrido es:

$$
Generador = \{(1,2,1), (2,5,4), (1,4,5), (-3,-5,-1), (4,5,-2)\}
$$

**Paso 3**: Obtener la base estándar a partir del generador anterior por medio del espacio renglón

$$
\begin{pmatrix}
1 & 2 & 1 \\
2 & 5 & 4 \\
1 & 4 & 5 \\
-3 & -5 & -1 \\
4 & 5 & -2
\end{pmatrix}
\sim \dots \sim
\begin{pmatrix}
1 & 0 & -3 \\
0 & 1 & 2 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$

Por lo tanto, la base estándar es: 

$$
B = \{(1,0,-3), (0,1,2) \}
$$

**Paso 4**: Obtener el vector genérico a partir de la base

$$
\vec{x} = a(1,0,-3) + b(0,1,2)
$$
$$
\vec{x} = (a, b, -3a+2b)
$$

**Paso 5**: Escribir el recorrido

$$
Recorrido = \{(a, b, -3a+2b) \; | \; a,b \; \in \; \mathbb{R}\}
$$

$$
Dimensión  \; del \; recorrido  = 2
$$



#### Ejercicio 2

Sean el espacio vectorial real $P = \{ax^2+bx+c \mid a,b,c \in \mathbb{R}\}$ y $D: P \to P$ la transformación cuya regla de correspondencia es
$$D(p(x)) = \frac{dp(x)}{dx} \quad \forall p(x) \in P$$
Determinar:

- Si D es una transformación lineal
- El núcleo de D
- El recorrido de D
- Si existe, la inversa de D


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