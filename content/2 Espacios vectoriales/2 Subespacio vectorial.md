
### ¿Qué es un subespacio vectorial?

Un **subespacio vectorial** es un subconjunto de un espacio vectorial más grande que, por sí mismo, cumple con todas las reglas para ser un espacio vectorial.

En otras palabras, es un "espacio" que vive dentro de otro espacio. La clave es que este subconjunto no solo contiene vectores, sino que también es "cerrado" bajo las operaciones de suma y multiplicación por un escalar.

Para que un subconjunto $W$ de un espacio vectorial $V$ sea considerado un subespacio vectorial, solo necesita cumplir tres condiciones:

1. **El vector cero está en $W$:** El subconjunto $W$ debe contener el vector cero del espacio vectorial $V$. Esto garantiza que no es un conjunto vacío.
    
2. **Cerradura bajo la suma:** Si tomas dos vectores cualesquiera de $W$ y los sumas, el vector resultante debe pertenecer también a $W$.
    
3. **Cerradura bajo la multiplicación por un escalar:** Si tomas cualquier vector de $W$ y lo multiplicas por cualquier escalar, el vector resultante debe pertenecer también a $W$.

##### Ejemplo

Imagina el plano 2D (R2) como tu espacio vectorial. Una línea recta que pasa por el origen (0,0) es un subespacio vectorial.

- Contiene al vector cero (0,0).
    
- Si sumas dos vectores que están en esa línea, el resultado sigue estando en la misma línea.
    
- Si estiras o encoges un vector de esa línea (lo multiplicas por un escalar), sigue estando en la misma línea.

### Definición formal

Sea $W$ un subconjunto de un espacio vectorial $V$. Si $W$ es a su vez un espacio vectorial con respecto a las operaciones de adición y multiplicación definidas en $V$, se dice entonces que $W$ es un subespacio de $V$.

### Condiciones a cumplir para considerarse subespacio
Sea $V$ un espacio vectorial sobre un campop $K$. Si $W$ es un subconjunto no vacío de $V$, entonces $W$ será un subespacio de $V$, si y sólo si, se cumplen las condiciones siguientes: 
- $\forall \; \vec{u}, \vec{v} \in W,\, \color{purple} (\vec{u} + \vec{v}) \in W$
- $\forall \; \vec{u} \in W \; y \; \forall \; \alpha \in K, \; \color{purple} (\alpha \vec{u})\in W$


<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/Subspaces.html">
    </iframe>
</div>

### ¿Y si no pasa / contiene al "origen"?

>Un plano en $R^3$ que no pasa por el origen no es un subespacio de $R^3$ porque el plano no contiene al vector cero de $R^3$. De manera similar, una línea en $R^2$ que no pasa por el origen, como en la figura, no es un subespacio de $R^2$.
>![[Screenshot 2025-07-29 at 10.31.54 a.m..png]]
>
>La siguiente figura sí es un ejemplo de un subespacio de $R^3$, ya que es un plano que contiene al origen. 
>![[Screenshot 2025-07-29 at 10.33.48 a.m..png]]




### Ejercicio

Demuestre que el plano $\pi: x-y+z=0$ es un subespacio vectorial, mientras que la recta $L: \begin{cases} x=t \\ y=-2+t \\ z=2t \end{cases}$ no lo es.

Ambos lugares geométricos pueden reescribirse como
$$
\pi: \begin{cases} x-y+z=0 \\ x=x \\ y=y \\ z=z \end{cases} \implies y=x+z \quad \text{y} \quad L: \begin{cases} x=t \\ y=-2+t \\ z=2t \end{cases}
$$
$$
\therefore \pi = \left\{ \begin{bmatrix} x \\ x+z \\ z \end{bmatrix} \mid x,z \in \mathbb{R} \right\} \quad \text{y} \quad L = \left\{ \begin{bmatrix} t \\ -2+t \\ 2t \end{bmatrix} \mid t \in \mathbb{R} \right\}
$$

L = (t,-2+t,2t)

que forman subconjuntos del espacio vectorial $\mathbb{R}^3$.

**PLANO $\pi$**

Cerradura para la suma de vectores:
$$
\begin{bmatrix} x \\ x+z \\ z \end{bmatrix} + \begin{bmatrix} m \\ m+p \\ p \end{bmatrix} = \begin{bmatrix} x+m \\ (x+m)+(z+p) \\ z+p \end{bmatrix}
$$
Si $x+m=a$ y $z+p=b$ entonces
$$
\begin{bmatrix} x+m \\ (x+m)+(z+p) \\ z+p \end{bmatrix} = \begin{bmatrix} a \\ a+b \\ b \end{bmatrix} \in \pi
$$

Cerradura para la multiplicación por un escalar:
$$
\alpha \begin{bmatrix} x \\ x+z \\ z \end{bmatrix} = \begin{bmatrix} \alpha x \\ \alpha(x+z) \\ \alpha z \end{bmatrix} = \begin{bmatrix} \alpha x \\ \alpha x+\alpha z \\ \alpha z \end{bmatrix}
$$
Si $\alpha x=a$ y $\alpha z=b$ entonces
$$
\begin{bmatrix} \alpha x \\ \alpha x+\alpha z \\ \alpha z \end{bmatrix} = \begin{bmatrix} a \\ a+b \\ b \end{bmatrix} \in \pi
$$

**RECTA L**

Cerradura para la suma de vectores:
$$
\begin{bmatrix} t \\ -2+t \\ 2t \end{bmatrix} + \begin{bmatrix} s \\ -2+s \\ 2s \end{bmatrix} = \begin{bmatrix} t+s \\ -4+(t+s) \\ 2(t+s) \end{bmatrix}
$$
Si $t+s=a$ entonces
$$
\begin{bmatrix} t+s \\ -4+(t+s) \\ 2(t+s) \end{bmatrix} = \begin{bmatrix} a \\ -4+a \\ 2a \end{bmatrix} \notin L
$$

Se observa que la componente $y = -4+a$ no coincide con las ecuaciones paramétricas de L; es decir, la suma de dos puntos de la recta no pertenece a dicho lugar geométrico. En consecuencia la recta L no es un subespacio vectorial, en tanto que el plano $\pi$ sí lo es.


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