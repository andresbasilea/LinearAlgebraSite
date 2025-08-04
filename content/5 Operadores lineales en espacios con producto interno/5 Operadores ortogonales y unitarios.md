
### Operadores ortogonales y unitarios

### Definición
Sea $V$ un espacio vectorial definido en $\mathbb{C}$, en el cual se define un producto interno y sea $T: V \to V$ un operador lineal.

Si se cumple que:

$$
(T(\vec{v}_1)|T(\vec{v}_2)) = (\vec{v}_1 | \vec{v}_2) \quad ; \quad \forall \vec{v}_1, \vec{v}_2 \in V
$$
entonces se dice que $T$ es un operador unitario.

Si $T$ es un operador unitario definido sobre el campo de los números reales, se le llama también operador ortogonal.

### Definición
Sea $V$ un espacio vectorial definido sobre $\mathbb{C}$ con producto interno y sea $T: V \to V$ un operador lineal. Se tiene que:

$$
T \text{ es un operador unitario, si se cumple que } T^* = T^{-1}
$$

Si el espacio $V$ está definido sobre $\mathbb{R}$, entonces a los operadores unitarios también se les llama operadores ortogonales.


### Propiedades de los operadores unitarios y ortogonales

Cabe resaltar el hecho de que todo operador ortogonal es también un operador unitario, por lo que las propiedades que a continuación se enuncian se cumplen para ambos operadores.

1.  Si $T$ es un operador unitario, entonces $T$ conserva las normas, esto es:
    
    $$
    \|T(\vec{v})\| = \|\vec{v}\| \quad ; \quad \forall \, \vec{v} \in V
    $$
    
2.  Los valores característicos de un operador unitario tienen módulo uno, esto es:
    
    $$
    |\lambda| = 1
    $$
    
3.  La matriz asociada a un operador unitario referida a una base ortonormal es una matriz unitaria y tiene las siguientes propiedades:
	1. La suma de los productos de los elementos de cualquier fila (renglón o columna) por los conjugados de los correspondientes elementos de cualquier otra fila paralela es igual a cero, es decir, si las filas se consideran como vectores, entonces estos resultan ser ortogonales.
	2. La suma de los cuadrados de los módulos de los elementos de cualquier fila es igual a uno, esto es, si las filas se consideran como vectores, entonces estos son vectores unitarios.





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