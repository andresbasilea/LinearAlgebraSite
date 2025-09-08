
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