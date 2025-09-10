
### Espacio renglón y columna de una matriz

Sea $A$ una matriz de orden $m \times n$.

1. Si consideramos a los renglones $A$ como vectores del espacio $\mathbb{R}^n$, entonces al espacio generado con los renglones de $A$ se le llama espacio renglón y se le representa con:
    $$
    L(A_R)
    $$
2. Si consideramos a las columnas de $A$ como vectores del espacio $\mathbb{R}^m$, entonces al espacio generado con las columnas de $A$ se le llama espacio columna y se le representa con:
    $$
    L(A_C)
    $$


![[Pasted image 20250907130632.png]]
<small> Los vectores renglón de la matriz. El espacio renglón de la matriz son todas las combinaciones lineales posibles con los vectores renglón, o sea, el espacio generado por los renglones.</small>


![[Pasted image 20250907130746.png]]

<small> Los vectores columna de la matriz. El espacio columna de la matriz son todas las combinaciones lineales posibles con los vectores columna, o sea, el espacio generado por las columnas.</small>


<br>

### Teorema

Para cualquier matriz $A$, se tiene que:
$$
\text{Dim } L(A_R) = \text{Dim } L(A_C)
$$

### Teorema

- Dos matrices equivalentes tienen el mismo espacio renglón.

- Se dice que una matriz $A$ es equivalente a una matriz $B$, si $B$ se puede obtener a partir de la matriz $A$ mediante un número finito de transformaciones elementales.

- Conviene aclarar que las transformaciones elementales aplicadas a la matriz $A$ para llegar a la matriz $B$, deben ser todas ellas por renglón.

- El teorema enunciado no aplica si se realizan en la matriz $A$ transformaciones elementales por columna.


### Rango de una matriz

Sea $A$ una matriz de orden $m \times n$. El rango de la matriz $A$ se define como el número de renglones distintos de cero después de haber concluido el escalonamiento de la matriz.

### Teorema

Para cualquier matriz $A$, se tiene que:
$$
\text{Rango } (A) = \text{Dim } L(A_R) = \text{Dim } L(A_C)
$$




#### Ejercicio 1 (en clase)

Para la matriz
$$
A = \begin{bmatrix}
1 & 2 & -1 & 3 \\
2 & -1 & 2 & 2 \\
-1 & 3 & -3 & 1
\end{bmatrix}
$$
Obtenga:

- El espacio renglón $L(A_R)$, una base y su dimensión.

-  El espacio columna $L(A_C)$, una base y su dimensión.


#### Ejercicio 2 (en clase)

Sea la matriz
$$
A = \begin{bmatrix}
1 & -1 & 3 \\
1 & 0 & -2 \\
0 & -1 & 5 \\
3 & -1 & -1
\end{bmatrix}
$$
Determine:

a) Si el conjunto $B = \{(1, -1, 3), (-1, -1, 7)\}$ es una base del espacio generado por los renglones de la matriz $A$.

b) Si el vector $\vec{v} = (-4, 5, -9, 6)^T$ pertenece al espacio generado por las columnas de la matriz $A$.

###### **a)** 
Para el primer inciso, si queremos determinar si $B$ es una base del espacio generado, podríamos primeramente generar dicho espacio y determinar su dimensión. Si la dimensión es igual a dos, entonces tendríamos que verificar si los elementos de $B$ pertenecen a dicho espacio. De ser así, podríamos afirmar que $B$ es una base. Si la dimensión del espacio renglón es diferente de 2, entonces automáticamente concluimos que $B$ no es una base. 

Escalonamos la matriz $A$ para obtener una base del espacio renglón (vemos cuántos vectores quedan en cero al escalonar, y esos no los tomamos en cuenta): 
![[Screenshot 2025-09-07 at 2.00.25 p.m..png]]

de donde el espacio renglón es: 

$$
B_R = \{(1,0,-2), (0,1,-5)\}
$$
$$ 
\therefore Dim \, L(A_R) = 2
$$

Y con los elementos de la base se llega a que: 

$$
L(A_R) = \{(a,b,-2a-5b) \, | \, a,b \, \in \, \mathbb{R}\}
$$

Dado que la dimensión del $L(A_R)$ es igual a dos, entonces solo faltaría comprobar que los elementos del conjunto $B$ pertenecen a este espacio.

El conjunto $B = \{(1, -1, 3), (-1, -1, 7)\}$.

Para el vector $(1, -1, 3)$, se tiene que:

$$
a = 1
$$
$$
b = -1
$$
entonces se debe cumplir que:
$$
-2a - 5b = 3
$$
sustituyendo:
$$
-2(1) - 5(-1) = 3
$$
$$
-2 + 5 = 3
$$
$$
3 = 3 \quad \therefore (1, -1, 3) \in L(A_R)
$$
Para el vector $(-1, -1, 7)$, se tiene que:
$$
a = -1
$$
$$
b = -1
$$
al sustituir:
$$
-2(-1) - 5(-1) = 7
$$
$$
2 + 5 = 7
$$
$$
7 = 7 \quad \therefore (-1, -1, 7) \in L(A_R)
$$
Podemos concluir entonces que el conjunto $B$ sí es una base del espacio renglón.

###### **b)**
Dado que el espacio renglón es de dimensión dos, entonces el espacio columna también es de dimensión dos. De acuerdo con esto, podemos tomar dos vectores cualesquiera de $A$ y si no son dependientes (proporcionales), formarán una base del espacio $L(A_C)$.

Considerando las dos primeras columnas de $A$, tenemos que:
$$
B_C = \{(1, 1, 0, 3)^T, (-1, 0, -1, -1)^T\}
$$
es una base de $L(A_C)$.

Para determinar si el vector $\vec{v}=(-4, 5, -9, 6)^T$ pertenece al $L(A_C)$, será suficiente con averiguar si $\vec{v}$ puede ser expresado como una combinación lineal de los elementos de $B_C$.

$$
(-4, 5, -9, 6) = \alpha(1, 1, 0, 3) + \beta(-1, 0, -1, -1)
$$

Al desarrollar las operaciones y por igualdad de vectores, se llega al sistema:
$$
\begin{cases}
\alpha - \beta &= -4 \\
\alpha &= 5 \\
-\beta &= -9 \\
3\alpha - \beta &= 6
\end{cases}
\Rightarrow
\begin{cases}
\alpha &= 5 \\
\beta &= 9
\end{cases}
$$
Como los valores obtenidos de $\alpha$ y $\beta$ satisfacen todas las ecuaciones del sistema, entonces podemos concluir que el vector $\vec{v}$ sí pertenece al espacio columna de la matriz $A$.





<br>
<br>


#### Ejercicio 3 (en clase)

Determinar el elemento genérico, la base estándar y la dimensión de $L(A_c)$ para la matriz. 

$$
A = \begin{pmatrix}
3 & -1 & -5 & 9 \\
1 & -1 & -3 & 3 \\
2 & 0 & -2 & 6
\end{pmatrix}
$$

En este ejercicio, mis vectores del conjunto generador serán las columnas de $A$.

Conjunto generador del espacio columna $L(A_C)$:
$$
A_c = \{(3, 1, 2), (-1, -1, 0), (-5, -3, -2), (9, 3, 6)\} 
$$

$$
\text{El espacio vectorial } L(A_c) \text{ es un subespacio de } \mathbb{R}^3 \text{ generado por el conjunto } A_c 
$$

Se debe de buscar una base, de preferencia la base estándar, por lo que debemos de escalonar la matriz A transpuesta (esto acorde a los teoremas presentados al principio de esta página).

Escalonando la matriz $A^T$:

$$
\begin{pmatrix}
3 & -1 & -5 & 9 \\
1 & -1 & -3 & 3 \\
2 & 0 & -2 & 6
\end{pmatrix}^T
=
\begin{pmatrix}
3 & 1 & 2 \\
-1 & -1 & 0 \\
-5 & -3 & -2 \\
9 & 3 & 6
\end{pmatrix}
\sim
\begin{pmatrix}
1 & 1 & 2 \\
3 & 1 & 2 \\
-5 & -3 & -2 \\
9 & 3 & 6
\end{pmatrix}
\sim
\begin{pmatrix}
1 & 1 & 0 \\
0 & -2 & 2 \\
0 & 2 & -2 \\
0 & -2 & 2
\end{pmatrix}
\sim
\begin{pmatrix}
1 & 1 & 0 \\
0 & -1 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$

Entonces, la base de $L(A_C)$ es de dimensión 2, ya que $A_C$ es linealmente dependiente. Una posible base del espacio columna es: 

$$
B=\{(1,1,0), (0,-1,1)\}
$$


Encontrando la base estándar:

$$
\begin{pmatrix}
1 & 1 & 0 \\
0 & -1 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
\sim
\begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & -1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
\sim
\begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & -1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix} \\
$$
$$
\text{La base estándar es: } \; \; \\
\text{Base}_L(A_c) = \{(1,0,1), (0,1,-1)\} 
$$

Obteniendo el elemento genérico de $L(A_c)$: 
$$
\bar{x} = a(1,0,1) + b(0,1,-1) \\
$$
$$
\bar{x} = (a, b, a-b)
$$

El espacio columna es: 

$$
L(A_c) = \{(a, b, a-b) \mid a, b \in \mathbb{R}\} \\
$$

$$
\text{Dim}L(A_c) = 2 \\
$$

Notar que: 
$$
\text{Dim}L(A_c) = \text{Dim}L(A_r) = 2 \\
$$

y, aunque la dimensión del espacio renglón y espacio columna es igual, el espacio renglón es subespacio de $\mathbb{R^4}$, mientras que el espacio columna es subespacio de $\mathbb{R^3}$. 


<br>
<br>

#### Ejercicio 4 (en clase)

Determinar el espacio $W$ que es generado por el conjunto
$$
A = \{3x^2 - x - 5, x^2 - x - 3, 2x^2 - 2\}
$$
así como una base y la dimensión de $W$.

Determine si el vector $\vec{v} = -x^2 + 5x + 10$ pertenece a $W$.

>[!note] Sobre este ejercicio
>En este ejercicio, sabemos que el conjunto $A$ es generador del espacio vectorial $W$ y se nos pide encontrar una base y la dimensión de $W$. En este tipo de ejercicios, por más que no se nos esté pidiendo calcular el espacio renglón o columna de una matriz particular, podemos ocupar estos conceptos para resolverlo. 
>
>En particular, utilizaremos el **espacio renglón** en este tipo de problemas para obtener el espacio W generado por un conjunto. Entonces, cuando tenemos un conjunto generador y queremos conocer la base, aplicamos **espacio renglón**. 

Para saber si el conjunto $A$ genera $W$, podemos investigar si $A$ es base o no. En caso de ser base, llegar a la base estándar y al elemento genérico. Podemos aplicar el isomorfismo $f: P_2 \rightarrow \mathbb{R^3}$ para formar una matriz con los vectores de $A$, escalonar dicha matriz y ver si $A$ es linealmente independiente. 

El isomorfismo a utilizar será: 
$$
f(ax^2+bx+c) = (a,b,c)
$$

Llegando a la matriz: 

$$
\begin{pmatrix}
3 & -1 & -5 \\
1 & -1 & -3 \\
2 & 0 & -2
\end{pmatrix}
$$

Al escalonar, vemos que uno de los renglones se vuelve cero (o sea, que la matriz $A$ tiene dos vectores linealmente independientes). 
$$
\begin{pmatrix}
3 & -1 & -5 \\
1 & -1 & -3 \\
2 & 0 & -2
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -1 & -3 \\
3 & -1 & -5 \\
2 & 0 & -2
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -1 & -3 \\
0 & 2 & 4 \\
0 & 2 & 4
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -1 & -3 \\
0 & 1 & 2 \\
0 & 0 & 0
\end{pmatrix}
$$

Para obtener una base estándar, tendremos que dejar los elementos que estén justo encima del escalón con únicamente "1"´s y arriba y abajo de esos "1"´s tendrán que quedar "0"´s. 

Veamos cómo se ven los "escalones" para nuestra matriz escalonada. En este caso, vemos que escalonar ya nos dejó "1"´s encima de los escalones. Para obtener la base estándar, únicamente bastaría con poner ceros en todo lo que esté por encima y debajo de esos "1"´s.

![[Screenshot 2025-09-09 at 10.15.39 p.m..png]]

Entonces, podemos resolver sumando el segundo renglón al primero, para llegar a la matriz: 
$$
\begin{pmatrix}
1 & 0 & -1 \\
0 & 1 & 2 \\
0 & 0 & 0
\end{pmatrix}
$$

Para poder escribir finalmente la base de $W$, **tenemos que regresar al espacio vectorial de polinomios**. Ya que el espacio original (antes de aplicar el isomorfismo) es el de polinomios de segundo grado. Por lo tanto, la base estándar de $W$ quedaría (tomando los vectores linealmente independientes que obtuvimos al escalonar la matriz): 

$$
B = \{x^2-1, x+2\}
$$


Encontrando el elemento genérico y escribiendo al espacio $W$:

$$

\bar{x} = a(x^2 - 1) + b(x+2) \\
$$
$$
\text{Elemento genérico = }
\bar{x} = ax^2 + bx - a + 2b \\
$$

$$
W = \{ax^2 + bx - a + 2b \mid a, b \in \mathbb{R}^2\}
$$


Finalmente, para determinar si $\vec{v} = -x^2 + 5x + 10$ pertenece al espacio vectorial $W$, vemos que del elemento genérico, la variable $a$ debería de ser igual a -1 y la variable $b$ a 5. Sin embargo, con esos valores de $a$ y $b$, la expresión $-a+2b$ no es igual a 10, y por lo tanto el vector no pertenece a $W$.





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