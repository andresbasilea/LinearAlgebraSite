
### Definición formal 
Sean $A = \{\bar{v}_1, \bar{v}_2, \ldots, \bar{v}_n\}$ y $B = \{\bar{w}_1, \bar{w}_2, \ldots, \bar{w}_n\}$ dos bases de un espacio vectorial $V$. La matriz de transición $M_B^A$ tiene por columnas los vectores de coordenadas de los elementos de la base $A$ con respecto a la base $B$, esto es:
$$
M_B^A = \left[ (\bar{v}_1)_B \quad (\bar{v}_2)_B \quad \ldots \quad (\bar{v}_n)_B \right]
$$
Esta matriz $M_B^A$ conocida también como matriz de cambio de base, es tal que, si conocemos $(\bar{v})_A$ donde $\bar{v} \in V$ y deseamos obtener el vector de coordenadas de $\bar{v}$ en la base $B$, esto es $(\bar{v})_B$, entonces es suficiente con efectuar el producto:
$$
M_B^A (\bar{v})_A = (\bar{v})_B
$$
Además, se tiene que la matriz de transición es una matriz no singular, esto es, siempre tiene inversa y se cumple que:
$$
\left(M_B^A\right)^{-1} = M_A^B
$$


>[!note] Matriz de transición y transformaciones lineales
>En el capítulo 3 veremos cómo esta matriz de transición entre bases se relaciona con las transformaciones lineales, además de una representación gráfica de este proceso. 


![[Screenshot 2025-09-07 at 9.04.31 a.m..png]]


### Procedimiento para obtener la matriz de transición

Obtener $M_{B_2}^{B_1}$ dadas:  
$$
B_1 = \{\vec{v}_1, \vec{v}_2, \vec{v}_3, \ldots, \vec{v}_n\} 
$$

$$
B_2 = \{\vec{w}_1, \vec{w}_2, \vec{w}_3, \ldots, \vec{w}_n\}
$$

Escribir los vectores de la base $B_1$ como combinación lineal de los vectores de la base $B_2$. 

$$
\vec{v}_1 = \alpha_{11}\vec{w}_1 + \alpha_{12}\vec{w}_2 + \alpha_{13}\vec{w}_3 + \dots + \alpha_{1n}\vec{w}_n 
$$

$$
\vec{v}_2 = \alpha_{21}\vec{w}_1 + \alpha_{22}\vec{w}_2 + \alpha_{23}\vec{w}_3 + \dots + \alpha_{2n}\vec{w}_n 
$$
 $$
 \vec{v}_3 = \alpha_{31}\vec{w}_1 + \alpha_{32}\vec{w}_2 + \alpha_{33}\vec{w}_3 + \dots + \alpha_{3n}\vec{w}_n 
 $$

$$
\vdots
$$
  $$
  \vec{v}_n = \alpha_{n1}\vec{w}_1 + \alpha_{n2}\vec{w}_2 + \alpha_{n3}\vec{w}_3 + \dots + \alpha_{nn}\vec{w}_n
$$



Entonces
$$
[\vec{v}_1]_{B_2} = \begin{pmatrix} \alpha_{11} \\ \alpha_{12} \\ \alpha_{13} \\ \vdots \\ \alpha_{1n} \end{pmatrix}, \quad [\vec{v}_2]_{B_2} = \begin{pmatrix} \alpha_{21} \\ \alpha_{22} \\ \alpha_{23} \\ \vdots \\ \alpha_{2n} \end{pmatrix}, \quad [\vec{v}_3]_{B_2} = \begin{pmatrix} \alpha_{31} \\ \alpha_{32} \\ \alpha_{33} \\ \vdots \\ \alpha_{3n} \end{pmatrix}, \quad \dots, \quad [\vec{v}_n]_{B_2} = \begin{pmatrix} \alpha_{n1} \\ \alpha_{n2} \\ \alpha_{n3} \\ \vdots \\ \alpha_{nn} \end{pmatrix}
$$

<br>

$$
M_{B_2}^{B_1} = \left( [\vec{v}_1]_{B_2} \quad [\vec{v}_2]_{B_2} \quad [\vec{v}_3]_{B_2} \quad \dots \quad [\vec{v}_n]_{B_2} \right)
$$
$$
M_{B_2}^{B_1} = \begin{pmatrix}
\alpha_{11} & \alpha_{21} & \alpha_{31} & \dots & \alpha_{n1} \\
\alpha_{12} & \alpha_{22} & \alpha_{32} & \dots & \alpha_{n2} \\
\alpha_{13} & \alpha_{23} & \alpha_{33} & \dots & \alpha_{n3} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\alpha_{1n} & \alpha_{2n} & \alpha_{3n} & \dots & \alpha_{nn}
\end{pmatrix}
$$


#### Ejercicio 1

Sean

$$
A = \{(0, 1, 1), (-1, -1, 2), (0, 0, 2)\} 
$$
$$ 
B = \{(0, -1, 1), (1, 0, 1), (-1, 1, 0)\} 
$$
dos bases del espacio vectorial $\mathbb{R}^3$.

**a)** Obtenga la matriz de transición $M_B^A$.

**b)** Si se tiene que $(\vec{v})_B = (1, -2, 1)$, obtenga $(\vec{v})_A$.

**c)** Obtenga los vectores $\vec{v}_1$ y $\vec{v}_2$ si se sabe que:
$$ 
(\vec{v}_1 - \vec{v}_2)_A = \left(2, 0, -\frac{3}{2}\right) 
$$
$$ 
(2\vec{v}_1 + \vec{v}_2)_B = (0, 4, 1)
$$


**a)**
Para obtener la matriz de transición $M_B^A$, lo que se tiene que hacer es obtener los vectores de coordenadas de los elementos de la base $A$ con respecto a la base $B$. La disposición en columna de estos vectores de coordenadas nos permitirán llegar a la matriz de transición solicitada.

Para el primer vector, tenemos:
$$ 
(0, 1, 1) = \alpha_1(0, -1, 1) + \beta_1(1, 0, 1) + \gamma_1(-1, 1, 0) 
$$
al multiplicar y sumar, se tiene:
$$
(0, 1, 1) = (\beta_1 - \gamma_1, -\alpha_1 + \gamma_1, \alpha_1 + \beta_1) 
$$
por igualdad de vector, se llega al sistema:
$$
\begin{cases}
\beta_1 - \gamma_1 = 0 \\
-\alpha_1 + \gamma_1 = 1 \\
\alpha_1 + \beta_1 = 1
\end{cases}
$$
al resolver el sistema, se obtiene que:


$$
\alpha_1 = 0, \quad \beta_1 = 1, \quad \gamma_1 = 1 
$$
por lo que:
$$ 
(0, 1, 1)_B = (0, 1, 1) 
$$
Tomando ahora el segundo vector de la base $A$, tenemos:
$$ 
(-1, -1, 2) = \alpha_2(0, -1, 1) + \beta_2(1, 0, 1) + \gamma_2(-1, 1, 0)
$$
de donde se llega al sistema:
$$
\begin{cases}
\beta_2 - \gamma_2 = -1 \\
-\alpha_2 + \gamma_2 = -1 \\
\alpha_2 + \beta_2 = 2
\end{cases}
$$
al resolverlo, se obtiene que:
$$
\alpha_2 = 2, \quad \beta_2 = 0, \quad \gamma_2 = 1 
$$
por lo tanto:
$$
(-1, -1, 2)_B = (2, 0, 1)
$$
Para el tercer vector de la base $A$, tenemos:
$$ 
(0, 0, 2) = \alpha_3(0, -1, 1) + \beta_3(1, 0, 1) + \gamma_3(-1, 1, 0)
$$
de donde se llega al sistema:
$$
\begin{cases}
\beta_3 - \gamma_3 = 0 \\
-\alpha_3 + \gamma_3 = 0 \\
\alpha_3 + \beta_3 = 2
\end{cases}
$$
cuya solución es:
$$
\alpha_3 = 1, \quad \beta_3 = 1, \quad \gamma_3 = 1
$$
con lo cual:

$$ 
(0, 0, 2)_B = (1, 1, 1) 
$$
Al colocar los vectores de coordenadas en columnas, se llega a la matriz solicitada.

$$
M_B^A = \begin{bmatrix} 0 & 2 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 1 \end{bmatrix} 
$$


**b)**
Nos piden obtener $(\vec{v})_A$ sabiendo que $(\vec{v})_B = (1, -2, 1)$.

Este inciso lo resolveremos por tres caminos distintos:


**Método 1**

A partir del $(\vec{v})_B = (1, -2, 1)$ y la base $B$ obtendremos el vector $\vec{v}$, posteriormente con $\vec{v}$ y la base $A$ obtendremos $(\vec{v})_A$. Se tiene que:
$$
\vec{v} = 1(0, -1, 1) - 2(1, 0, 1) + 1(-1, 1, 0) 
$$
de donde:
$$
\vec{v} = (-3, 0, -1) 
$$
Obteniendo ahora $(\vec{v})_A$, tenemos:
$$ 
(-3, 0, -1) = \alpha(0, 1, 1) + \beta(-1, -1, 2) + \gamma(0, 0, 2) 
$$
llegando al sistema:
$$
\begin{cases}
-\beta = -3 \\
\alpha - \beta = 0 \\
\alpha + 2\beta + 2\gamma = -1
\end{cases}
$$
cuya solución es:
$$
\alpha = 3, \quad \beta = 3, \quad \gamma = -5 
$$
Por lo tanto, el vector de coordenadas solicitado es:

$$
(\vec{v})_A = (3, 3, -5)
$$


**Método 2**
Para llegar al $(\vec{v})_A$, haremos uso de la expresión:
$$ 
M_B^A (\vec{v})_A = (\vec{v})_B \quad \dots (1)
$$
Dado que $M_B^A$ es una matriz no singular, entonces $(M_B^A)^{-1}$ existe, por lo que premultiplicaremos la ecuación (1) con dicha matriz inversa.
$$ 
(M_B^A)^{-1} M_B^A (\vec{v})_A = (M_B^A)^{-1} (\vec{v})_B 
$$
de donde:
$$
(\vec{v})_A = (M_B^A)^{-1} (\vec{v})_B \quad \dots (2)
$$
Al obtener la inversa de la matriz $M_B^A$, se llega a:
$$ 
\left(M_B^A\right)^{-1} = \begin{bmatrix} -1 & -1 & 2 \\ 0 & -1 & 1 \\ 1 & 2 & -2 \end{bmatrix} = M_A^B 
$$
Al sustituir los elementos conocidos en la ecuación (2), se tiene:
$$
(\vec{v})_A = \begin{bmatrix} -1 & -1 & 2 \\ 0 & -1 & 1 \\ 1 & 2 & -2 \end{bmatrix} \begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 3 \\ -5 \end{bmatrix} 
$$
por lo tanto:
$$ 
(\vec{v})_A = (3, 3, -5)
$$


**Método 3**
El procedimiento a seguir en este tercer método será sustituir directamente los datos conocidos en la ecuación (1) y expresar al vector $(\vec{v})_A$ como un vector incógnita de componentes $(x, y, z)$. De esta forma tenemos que:

$$ 
M_B^A (\vec{v})_A = (\vec{v})_B 
$$
sustituyendo, tenemos:
$$ 
\begin{bmatrix} 0 & 2 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix} 
$$
de donde:
$$
\begin{bmatrix} 2y + z \\ x + z \\ x + y + z \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix}
$$
por igualdad de matrices se llega al sistema:
$$
\begin{cases}
2y + z = 1 \\
x + z = -2 \\
x + y + z = 1
\end{cases}
$$
cuya solución es:
$$ 
x = 3, \quad y = 3, \quad z = -5 
$$
con lo cual, llegamos a:
$$ 
(\vec{v})_A = (3, 3, -5)
$$
Como era de esperarse, con los tres métodos mostrados llegamos a la misma respuesta.


**c)**
Con estos vectores de coordenadas, obtendremos los vectores $\vec{v}_1 - \vec{v}_2$ y $2\vec{v}_1 + \vec{v}_2$:
$$
\vec{v}_1 - \vec{v}_2 = 2(0, 1, 1) - \frac{3}{2}(0, 0, 2)
$$
de donde:
$$
\vec{v}_1 - \vec{v}_2 = (0, 2, -1) \quad \dots (3) 
$$
por otro lado:
$$ 
2\vec{v}_1 + \vec{v}_2 = 4(1, 0, 1) + 1(-1, 1, 0) 
$$
con lo cual:
$$
2\vec{v}_1 + \vec{v}_2 = (3, 1, 4) \quad \dots (4) 
$$
con las expresiones (3) y (4), se llega al sistema:
$$
\begin{cases}
\vec{v}_1 - \vec{v}_2 = (0, 2, -1) \\
2\vec{v}_1 + \vec{v}_2 = (3, 1, 4)
\end{cases}
$$
al sumar ambas ecuaciones, se llega a:
$$
3\vec{v}_1 = (3, 3, 3) 
$$
$$
\therefore \quad \vec{v}_1 = (1, 1, 1) 
$$
de la segunda ecuación del sistema, tenemos:
$$
\vec{v}_2 = (3, 1, 4) - 2\vec{v}_1 
$$
sustituyendo $\vec{v}_1$:
$$
\vec{v}_2 = (3, 1, 4) - 2(1, 1, 1) 
$$
$$
\therefore \quad \vec{v}_2 = (1, -1, 2) 
$$




#### Ejercicio 2

Sean $A = \{\vec{a}_1, \vec{a}_2, \vec{a}_3\} = \{x^2+x-3, 3x^2+x-5, x^2-2x+2\}$ y $B = \{\vec{b}_1, \vec{b}_2, \vec{b}_3\}$ dos bases del espacio vectorial $$P = \{ax^2+bx+c \mid a,b,c \in \mathbb{R}\}$$ Si se sabe que: $$(\vec{a}_1)_B = (1, 0, 1), \quad (\vec{a}_2)_B = (2, 1, 2), \quad (\vec{a}_3)_B = (-1, 1, 0)$$ obtenga los vectores de la base $B$.







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