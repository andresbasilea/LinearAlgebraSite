
### Conjuntos ortogonales y ortonormales

Sea $V$ un espacio vectorial con producto interno y sea $A = \{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n \}$ un subconjunto de $V$. Se dice que $A$ es un conjunto ortogonal cuando:

$$ 
(\vec{v}_i | \vec{v}_j) = 0 \quad ; \quad \forall \, i \neq j 
$$

Si cada vector del conjunto $A$ tiene norma igual a uno, entonces al conjunto $A$ se le llama conjunto ortonormal.

Es importante destacar que todo conjunto de vectores ortogonales no nulos, es linealmente independiente.

![[Screenshot 2025-10-25 at 3.03.02 p.m..png]]






### Coordenadas de un vector con respecto a una base ortogonal y respecto a una base ortonormal 

Sea $V$ un espacio vectorial con producto interno y sea $B = \{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n \}$ una base ortogonal de $V$.

Si $\vec{a} \in V$ y se tiene que:

$$ 
\vec{a} = \alpha_1 \vec{v}_1 + \alpha_2 \vec{v}_2 + \ldots + \alpha_n \vec{v}_n 
$$

entonces los escalares $\alpha_i$ vienen dados por la expresión:

 $$ 
 \alpha_i = \frac{(\vec{a} | \vec{v}_i)}{(\vec{v}_i | \vec{v}_i)} 
 $$

Si los vectores de la base $B$ fueran vectores unitarios, es decir, si $B$ fuese una base ortonormal, entonces las coordenadas del vector $\vec{a}$ respecto a la base $B$ vendrían dadas por:

$$ 
\alpha_i = (\vec{a} | \vec{v}_i) 
$$

ya que $(\vec{v}_i | \vec{v}_i) = 1$



### Proceso de ortogonalización de Gram-Schmidt

Sea $V$ un espacio con producto interno y sea $B = \{ \vec{b}_1, \vec{b}_2, \ldots, \vec{b}_n \}$ una base cualquiera de $V$.

Si $B_{ort} = \{ \vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n \}$ es una base ortogonal del espacio $V$, entonces sus elementos vienen dados por:


$$
\vec{v}_1 = \vec{b}_1 \\
$$
$$ 
\vec{v}_2 = \vec{b}_2 - \frac{(\vec{b}_2 | \vec{v}_1)}{(\vec{v}_1 | \vec{v}_1)} \vec{v}_1 \\ 
$$
$$ 
\vdots \\ 
$$
$$
\vdots \\
$$
$$ 
\vec{v}_i = \vec{b}_i - \sum_{k=1}^{i-1} \frac{(\vec{b}_i | \vec{v}_k)}{(\vec{v}_k | \vec{v}_k)} \vec{v}_k \\ 
$$
$$ 
\quad \text{para } i = 1, 2, \ldots, n
$$



<br>
<br>

<iframe 
  width="100%" 
  height="478" 
  src="https://www.youtube.com/embed/6c944Jl_dXQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

https://www.youtube.com/watch?v=qrix-nH7fjo



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