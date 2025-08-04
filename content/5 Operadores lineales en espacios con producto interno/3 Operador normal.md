
### Operador normal

Sea $V$ un espacio con producto interno y sea $T: V \to V$ un operador lineal. Se dice que $T$ es un operador normal si se cumple que:

$$
T \circ T^* = T^* \circ T
$$

Debido a que para cada producto interno considerado el adjunto es diferente, un operador puede ser normal respecto a un producto interno y no serlo respecto a otro.

### Propiedades de los operadores normales

Sea $V$ un espacio con producto interno y sea $T: V \to V$ un operador normal.

1.  $\|T(\vec{v})\| = \|T^*(\vec{v})\| \quad ; \quad \forall \vec{v} \in V$
2.  Si $T(\vec{v}) = \lambda \vec{v}$, entonces $T^*(\vec{v}) = \bar{\lambda} \vec{v}$
3.  Si $\vec{v}_1$ y $\vec{v}_2$ son vectores característicos de $T$, correspondientes a valores característicos distintos, entonces los vectores $\vec{v}_1$ y $\vec{v}_2$ son ortogonales, es decir, $(\vec{v}_1 | \vec{v}_2) = 0$.


### Teorema

Sea $V$ un espacio vectorial de dimensión finita definido en $\mathbb{C}$ con producto interno y sea $T: V \to V$ un operador normal. Existe una base ortonormal de $V$ formada por vectores característicos de $T$, lo cual garantiza que todo operador normal es diagonalizable.



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