
### Formas cuádricas

Una de las múltiples aplicaciones que tienen los valores y vectores característicos es la que se da en las formas cuádricas, que nos permite simplificar el estudio de las cónicas y de las superficies, cuando estas tienen sus ejes oblicuos a los ejes del sistema de referencia, esto es, los valores y vectores característicos pueden ser usados para resolver problemas donde se requiere hacer una rotación de ejes.

Las ecuaciones:

$$
ax^2 + bxy + cy^2 + dx + ey + f = 0
$$

$$
ax^2 + by^2 + cz^2 + dxy + exz + fyz + gx + hy + iz + j = 0
$$

corresponden a las ecuaciones generales de segundo grado en $\mathbb{R}^2$ y $\mathbb{R}^3$, respectivamente.

A las expresiones que solo consideran los términos de segundo grado, se les llaman formas cuádricas o formas cuadráticas, esto es:

$$
ax^2 + bxy + cy^2 \longrightarrow \text{Forma cuádrica para el caso de } \mathbb{R}^2
$$

$$
ax^2 + by^2 + cz^2 + dxy + exz + fyz \longrightarrow \text{Forma cuádrica para el caso de } \mathbb{R}^3
$$

Las formas cuádricas pueden ser expresadas matricialmente de la siguiente forma:

$$
ax^2 + bxy + cy^2 = \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} a & \frac{b}{2} \\ \frac{b}{2} & c \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \bar{x}^T A \bar{x}
$$


$$
ax^2 + by^2 + cz^2 + dxy + exz + fyz = \underbrace{\begin{bmatrix} x & y & z \end{bmatrix}}_{\bar{x}^T} \underbrace{\begin{bmatrix} a & \frac{d}{2} & \frac{e}{2} \\ \frac{d}{2} & b & \frac{f}{2} \\ \frac{e}{2} & \frac{f}{2} & c \end{bmatrix}}_{A} \underbrace{\begin{bmatrix} x \\ y \\ z \end{bmatrix}}_{\bar{x}} = \bar{x}^T A \bar{x}
$$


Considerando la ecuación general de segundo grado, se tiene:

$$
ax^2 + bxy + cy^2 + dx + ey + f = 0
$$

representando en forma matricial esta ecuación, tenemos:

$$
\underbrace{\begin{bmatrix} x & y \end{bmatrix}}_{\bar{x}^T} \underbrace{\begin{bmatrix} a & \frac{b}{2} \\ \frac{b}{2} & c \end{bmatrix}}_{A} \underbrace{\begin{bmatrix} x \\ y \end{bmatrix}}_{\bar{x}} + \underbrace{\begin{bmatrix} d & e \end{bmatrix}}_{k} \underbrace{\begin{bmatrix} x \\ y \end{bmatrix}}_{\bar{x}} + f = 0
$$

con lo cual la ecuación queda como:

$$
\bar{x}^T A \bar{x} + k \bar{x} + f = 0 \quad \ldots (1)
$$

si se hace:

$$
\bar{x} = P \bar{x}' \quad \ldots (2)
$$

esto es:
$$
\begin{bmatrix} x \\ y \end{bmatrix} = P \begin{bmatrix} x' \\ y' \end{bmatrix}
$$

Donde $x'$ y $y'$ son los ejes del nuevo sistema de referencia ya rotado. $P$ es la matriz diagonalizadora de la matriz $A$, que figura en la ecuación (1), formada por vectores característicos unitarios, con lo cual $P$ es una matriz ortogonal, es decir, $P^{-1} = P^T$. Se debe cuidar además que $\det (P)=1$, lo cual garantiza el giro de ejes. Si el $\det (P)=-1$, entonces será suficiente con intercambiar las columnas de $P$.

Al sustituir la expresión (2) en (1), se tiene:

$$
(P \bar{x}')^T A (P \bar{x}') + k (P \bar{x}') + f = 0
$$

de donde:

$$
(\bar{x}')^T P^T A P \bar{x}' + (k P) \bar{x}' + f = 0
$$

dado que el producto de matrices es asociativo, tenemos:
$$
(\bar{x}')^T (P^T A P) \bar{x}' + (k P) \bar{x}' + f = 0 \quad \ldots (3)
$$

como:
$$
P^T A P = \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix}
$$

donde $\lambda_1$ y $\lambda_2$ son los valores característicos de $A$.

Entonces la ecuación (3) expresada con matrices quedaría como:
$$
\begin{bmatrix} x' & y' \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} \begin{bmatrix} x' \\ y' \end{bmatrix} + \begin{bmatrix} d & e \end{bmatrix} \begin{bmatrix} P_{11} & P_{12} \\ P_{21} & P_{22} \end{bmatrix} \begin{bmatrix} x' \\ y' \end{bmatrix} + f = 0
$$

efectuando los productos indicados llegaríamos a una ecuación de la forma:
$$
\lambda_1 (x')^2 + \lambda_2 (y')^2 + d'x' + e'y' + f = 0 \quad \ldots (4)
$$

donde:
$$d' = d P_{11} + e P_{21}$$
$$e' = d P_{12} + e P_{22}$$

Como se puede apreciar en la ecuación (4), se trata de una ecuación de segundo grado donde el término $xy$ ya no aparece, lo cual quiere decir que los ejes de la cónica son coincidentes o paralelos a los ejes del nuevo sistema de referencia $x'$, $y'$.

Para el caso de la ecuación general de segundo grado en $\mathbb{R}^3$, es decir, cuando se tienen superficies cónicas cuyos ejes sean oblicuos al sistema de referencia, el procedimiento a seguir para rotar dicho sistema, de tal manera que los nuevos ejes resulten coincidentes o paralelos a los ejes de la superficie, es exactamente el mismo al seguido para el caso de $\mathbb{R}^2$, con la única diferencia de que la matriz $A$ ahora será de $3 \times 3$ y se tendrán tres valores y tres vectores característicos.