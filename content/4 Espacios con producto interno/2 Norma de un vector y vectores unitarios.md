



### Norma de un vector
Sea $V$ un espacio vectorial sobre un campo de definición complejo, en el cual se define un producto interno. La norma del vector $\vec{v} \in V$, denotada por $\| \vec{v} \|$, se define como:
$$ 
\| \vec{v} \| = (\vec{v} | \vec{v})^{\frac{1}{2}}
$$

### Propiedades de la norma
Sea $V$ un espacio vectorial con producto interno.

$\forall \, \vec{u}, \vec{v} \in V \;$ y $\; \forall \, \alpha \in \mathbb{C} \;$, se tiene que:
1. $\| \vec{v} \| \ge 0 \quad \text{y} \quad \| \vec{v} \| = 0 \quad \text{si y solo si} \quad \vec{v} = \vec{0}$
2.  $\| \alpha \vec{v} \| = |\alpha| \| \vec{v} \|$
3.  $\| \vec{u}+\vec{v} \| \le \| \vec{u} \| + \| \vec{v} \|$


### Vectores unitarios

Si $\| \vec{v} \| = 1$, entonces al vector $\vec{v}$ se le llama vector unitario. Si $\vec{v}$ es un vector diferente de cero, entonces el vector unitario se obtiene como:

$$ 
\left( \frac{1}{\| \vec{v} \|} \right) \vec{v}
$$

### Desigualdad de Cauchy - Schwarz
Sea $V$ un espacio vectorial sobre $\mathbb{C}$, en el cual se define un producto interno.
$\forall \, \vec{u}, \vec{v} \in V$

$$ 
|(\vec{u} | \vec{v})|^2 \le (\vec{u} | \vec{u}) (\vec{v} | \vec{v}) 
$$
donde $|(\vec{u} | \vec{v})|$ es el módulo de $(\vec{u} | \vec{v})$.

La igualdad se cumple si y solo si $\vec{u}$ y $\vec{v}$ son vectores linealmente dependientes.


### Distancia entre vectores

Sean $\vec{u}$ y $\vec{v}$ dos vectores de un espacio $V$ con producto interno. Se define como distancia de $\vec{u}$ a $\vec{v}$, y se denota con $d(\vec{u}, \vec{v})$ al número definido por:

$$ 
d(\vec{u}, \vec{v}) = \| \vec{v} - \vec{u} \| 
$$


### Propiedades de la distancia entre vectores

Sea $V$ un espacio con producto interno. La distancia entre vectores tiene las siguientes propiedades:

1.  $d(\vec{u}, \vec{v}) \ge 0$
2.  $d(\vec{u}, \vec{v}) = 0 \quad \text{si y solo si} \quad \vec{u} = \vec{v}$
3.  $d(\vec{u}, \vec{v}) = d(\vec{v}, \vec{u})$
4.  $d(\vec{u}, \vec{w}) \le d(\vec{u}, \vec{v}) + d(\vec{v}, \vec{w})$


### Ángulo entre vectores

Sean $\vec{u}$ y $\vec{v}$ dos vectores no nulos de un espacio vectorial $V$ sobre $\mathbb{R}$ con producto interno. El ángulo entre los vectores $\vec{u}$ y $\vec{v}$ está dado por la expresión:

$$ 
\cos \theta = \frac{(\vec{u} | \vec{v})}{\| \vec{u} \| \| \vec{v} \|} \quad \text{donde} \quad 0 \le \theta \le \pi
$$

Si el campo de definición de $V$ es $\mathbb{C}$, entonces el ángulo entre $\vec{u}$ y $\vec{v}$ está dado por:

$$
\cos \theta = \frac{R(\vec{u} | \vec{v})}{\| \vec{u} \| \| \vec{v} \|}
$$
donde $R(\vec{u} | \vec{v})$ representa la parte real de $(\vec{u} | \vec{v})$.


### Vectores ortogonales

Sea $V$ un espacio vectorial con producto interno. Dos vectores $\vec{u}, \vec{v} \in V$ son ortogonales si: 

$$
(\vec{u} | \vec{v}) = 0
$$




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

