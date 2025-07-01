
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




### Teorema

Para cualquier matriz $A$, se tiene que:
$$
\text{Dim } L(A_R) = \text{Dim } L(A_C)
$$

### Teorema

Dos matrices equivalentes tienen el mismo espacio renglón.

Se dice que una matriz $A$ es equivalente a una matriz $B$, si $B$ se puede obtener a partir de la matriz $A$ mediante un número finito de transformaciones elementales.

Conviene aclarar que las transformaciones elementales aplicadas a la matriz $A$ para llegar a la matriz $B$, deben ser todas ellas por renglón.

El teorema enunciado no aplica si se realizan en la matriz $A$ transformaciones elementales por columna.


### Rango de una matriz

Sea $A$ una matriz de orden $m \times n$. El rango de la matriz $A$ se define como el número de renglones distintos de cero después de haber concluido el escalonamiento de la matriz.

### Teorema

Para cualquier matriz $A$, se tiene que:
$$
\text{Rango } (A) = \text{Dim } L(A_R) = \text{Dim } L(A_C)
$$


### Criterio del Wronskiano


Sea $\{f_1, f_2, \ldots, f_n\}$ un conjunto de $n$ funciones reales de variable real, cada una de las cuales admite por lo menos $n-1$ derivadas en el intervalo $(a, b)$. El determinante

$$
W(x) = \begin{vmatrix}
f_1 & f_2 & \dots & f_n \\
f_1' & f_2' & \dots & f_n' \\
\vdots & \vdots & \ddots & \vdots \\
f_1^{n-1} & f_2^{n-1} & \dots & f_n^{n-1}
\end{vmatrix}
$$
se denomina Wronskiano del conjunto de funciones dado.

Si existe al menos un valor $x_0 \in (a, b)$, para el cual $W(x_0) \neq 0$, entonces el conjunto de funciones es linealmente independiente en dicho intervalo.

Cabe hacer notar que si $W(x) = 0, \quad \forall \, x \in (a, b)$, entonces no se puede concluir nada en cuanto a la dependencia o independencia lineal del conjunto de funciones. En este caso se deberá recurrir a la ecuación de dependencia lineal para su análisis.


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