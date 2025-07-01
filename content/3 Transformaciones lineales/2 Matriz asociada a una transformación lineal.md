### Matriz asociada a una transformación lineal

Sean $V$ y $W$ dos espacios vectoriales de dimensión $n$ y $m$, respectivamente, y sean $A = \{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n \}$ y $B = \{ \vec{w}_1, \vec{w}_2, \ldots, \vec{w}_m \}$ bases de dichos espacios.

Si $T: V \rightarrow W$ es una transformación lineal, existe una matriz única $M_B^A(T)$, de orden $m \times n$, tal que: 
$$M_B^A \,(T) \, (\vec{v})_A = [T\,(\vec{v})]_B; \quad \forall \, \vec{v} \in V$$

Las $n$ columnas de la matriz $M_B^A(T)$, llamada matriz asociada a $T$, son los vectores de coordenadas en la base $B$, de las imágenes de los vectores de la base $A$, esto es:

$$M_B^A(T) = \begin{bmatrix} \, \,[T(\vec{v}_1)]_B & [T(\vec{v}_2)]_B & \ldots & [T(\vec{v}_n)]_B  \, \, \end{bmatrix}$$


### Algunos teoremas

- Sea $V$ un espacio vectorial de dimensión $n$. La matriz asociada a la transformación identidad $I: V \longrightarrow V$, referida a cualquier base de $V$ es la matriz identidad $I_n$.
- Sean $T: V \longrightarrow W$ una transformación lineal y $A$ y $B$ dos bases de $V$ y $W$, respectivamente. El rango de la matriz asociada $M^A_B (T)$ es igual a la dimensión del recorrido de $T$, esto es: 
$$ R \,[\, M^A_B (T)\,] = Dim \,T(V)$$




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