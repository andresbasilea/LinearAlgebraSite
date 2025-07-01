
### Complemento ortogonal 

Sea $V$ un espacio con producto interno y sea $W$ un subespacio de $V$. Se dice que un vector $\vec{v} \in V$ es ortogonal a $W$, si se cumple que:

$$
(\vec{v} | \vec{u}) = 0 \quad ; \quad \forall \vec{u} \in W
$$

Al conjunto de todos los vectores de $V$ ortogonales a $W$ se le llama Complemento ortogonal de $W$ y se denota con $W^{\perp}$, esto es:

$$
W^{\perp} = \{ \vec{v} \in V \mid (\vec{v} | \vec{u}) = 0 \quad ; \quad \forall \vec{u} \in W \}
$$

### Proyección de un vector sobre un subespacio

Sea $V$ un espacio vectorial con producto interno y sea $W$ un subespacio de $V$.

Cualquier vector $\vec{v} \in V$ puede expresarse en forma única como la suma de dos vectores, uno de $W$ y el otro de $W^{\perp}$, esto es:

 $$ 
 \vec{v} = \vec{w} + \vec{w}' \quad \text{donde} \quad \vec{w} \in W \quad \text{y} \quad \vec{w}' \in W^{\perp}
 $$
 
Gráficamente:

![[Screenshot 2025-07-01 at 4.06.33 p.m..png|center]]

La proyección de $\vec{v} \in V$ sobre el subespacio $W$ viene dada por la expresión:

$$
\vec{w} = \sum_{i=1}^{n} (\vec{v} | \vec{e}_i) \vec{e}_i 
$$

donde el conjunto $\{ \vec{e}_1, \vec{e}_2, \ldots, \vec{e}_n \}$ es una base ortonormal de $W$.


### Teorema de proyección

Sea $V$ un espacio con producto interno y sea $W$ un subespacio de $V$. La proyección de un vector $\vec{v} \in V$ sobre $W$ es más próxima a $\vec{v}$ que cualquier otro vector de $W$. Esto es, si $\vec{w}$ es la proyección de $\vec{v}$ sobre $W$, entonces:

$$
\| \vec{v} - \vec{w} \| \le \| \vec{v} - \vec{t} \| \quad ; \quad \forall \, \vec{t} \in W
$$

El signo de igualdad se cumple, si y solo si, $\vec{t} = \vec{w}$.