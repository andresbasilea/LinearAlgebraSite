
### Adjunto de un operador

En un espacio vectorial $V$ con producto interno, cada operador lineal $T$ tiene un operador llamado su adjunto que también es lineal y representamos con $T^*$, cuya definición es:

#### Definición

Sea $V$ un espacio con producto interno y sea $T: V \to V$ un operador lineal. Un operador $T^*: V \to V$ se dice que es el adjunto de $T$ si se cumple que:

$$
(T(\vec{u}) | \vec{v}) = (\vec{u} | T^*(\vec{v})) ; \forall \, \vec{u}, \vec{v} \in V
$$

Esta definición está basada en el producto interno, por lo que, el operador adjunto depende del producto interno considerado, es decir, el operador $T$ tiene tantos adjuntos como productos internos se consideren, pero para cada producto interno el adjunto es único.


### Propiedades del operador adjunto

Sea $V$ un espacio vectorial sobre un campo $K$, con producto interno. Si $S$ y $T$ son operadores lineales en $V$ y $\alpha$ es un escalar de $K$, entonces:

1. $(T^*)^* = T$
2.  $(\alpha T)^* = \bar{\alpha} T^*$
3.  $(S+T)^* = S^* + T^*$
4.  $(T^*)^{-1} = (T^{-1})^*$
5.  $(S \circ T)^* = T^* \circ S^*$


### Teorema

Sea $V$ un espacio vectorial de dimensión finita con producto interno y sea $B$ una base ortonormal de $V$. Si $T: V \to V$ es un operador lineal, entonces:

$$
M_B^B (T^*) = [M_B^B (T)]^*
$$

Donde el $*$ del lado derecho de la igualdad representa la conjugada-transpuesta de la matriz.



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