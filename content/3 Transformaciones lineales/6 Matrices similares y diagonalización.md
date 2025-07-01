

### Matrices similares
Se tiene que dos matrices $A$ y $B$ de orden $n \times n$ son similares, si existe una matriz no singular $C$, tal que:

$$ B = C^{-1} AC$$

### Teorema
Dos matrices representan al mismo operador lineal, si y solo si, son similares.

### Propiedades de las matrices similares
- Si $A$ y $B$ son matrices similares, entonces $\det (A) = \det (B)$.
- Dos matrices similares tienen el mismo polinomio característico y, por lo tanto, los mismos valores característicos.


### Diagonalización

Si $V$ es un espacio vectorial de dimensión $n$ y $T:V \rightarrow V$ es un operador lineal, entonces existe una matriz diagonal asociada a $T$, cuando se puede definir una base de $V$ formada por vectores característicos de $T$. La matriz asociada a $T$ referida a esta base, es una matriz diagonal $D$ cuyos elementos $d_{ii}$ son los valores característicos de $T$.

### Teorema

Sea $A$ de $n \times n$ una matriz asociada a un operador lineal $T$.

La matriz $A$ será similar a una matriz diagonal $D$, si y solo si, existe un conjunto linealmente independiente formado por $n$ vectores característicos de $T$. Para este caso, existe una matriz no singular $P$, para la cual se cumple que $D = P^{-1}AP$, donde $P$ tiene como columnas a los $n$ vectores característicos de $T$ correspondientes a los valores característicos $d_{ii}$ que definen a la matriz diagonal $D$.

### Teorema

Sea $A$ una matriz asociada a un operador lineal $T$.
- Si los valores característicos de $A$ son todos diferentes, entonces $A$ es diagonalizable.
- La matriz $A$ es diagonalizable, si y solo si, la suma de las dimensiones de los espacios característicos es igual a la dimensión del dominio de $T$.





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