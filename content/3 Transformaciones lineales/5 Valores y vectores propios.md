

### Valores y vectores propios

A las transformaciones lineales que se aplican de un espacio vectorial $V$ al mismo espacio $V$, se les conoce como operadores lineales.

$$
T: V \rightarrow V
$$
Para este tipo de transformaciones pueden existir vectores diferentes de cero que tienen la siguiente característica:

$$
T(\vec{v}) = \lambda \vec{v}
$$
donde $\vec{v} \in V$ y $\lambda$ es un escalar perteneciente al campo de definición del espacio $V$.

El concepto anterior se puede definir formalmente de la siguiente manera:

### Definición formal

Sea $V$ un espacio vectorial de dimensión finita definido sobre un campo $K$ y sea $T: V \rightarrow V$ un operador lineal para el cual:

$$
T(\vec{v}) = \lambda \vec{v} \quad \text{con} \quad \vec{v} \neq \vec{0}
$$
donde $\lambda$ es un escalar perteneciente a $K$. Al escalar $\lambda$ se le llama valor característico de $T$ y al vector $\vec{v}$, diferente de cero, se le conoce como vector característico de $T$ correspondiente al valor $\lambda$.

El vector característico tiene que ser diferente de cero, pero el valor característico $\lambda$ sí puede tomar el valor de cero.


>[!interesante] Otros nombres para los vectores y valores propios
>A los vectores y valores propios también se les llama *eigenvectores* y *eigenvalores* o *vectores y valores característicos*



### Teorema

Sean $V$ un espacio vectorial sobre un campo $K$, y sea $T: V \longrightarrow V$ un operador lineal. El escalar $\lambda \in K$ es un valor característico de $T$, si y sólo si, $\lambda$ es una raíz del polinomio característico asociado a $T$. 

### Propiedades de los valores y vectores característicos

1. Los vectores característicos asociados a valores característicos distintos son linealmente independientes. 
2. Si $\vec{v}$ es un vector característico asociado a un valor característico $\lambda$, entonces $\alpha \vec{v}$ es también un vector característico asociado a $\lambda$, $\forall \, \alpha \in K$ y $\alpha \neq 0$.
3. Si $\vec{u}, \vec{v}$ son dos vectores característicos asociados a $\lambda$ y $\vec{u} \neq -\vec{v}$, entonces $\vec{u} + \vec{v}$ es un vector característico asociado a $\lambda$. 


### Espacio característico 

Al conjunto formado por todos los vectores característicos asociados a un valor característico $\lambda$, al cual se le agrega el vector cero, se le llama espacio característico y se representa con $E(\lambda)$.

### Teorema 
Sea $A$ una matriz asociada a un operador lineal $T$.

Si $A$ es una matriz singular, esto es, $\det (A) = 0$, entonces $\lambda = 0$ es un valor característico de $T$.

### Teorema
Sea $A$ una matriz asociada a un operador lineal $T$.

Si $A$ es una matriz no singular, esto es, $\det (A) \neq 0$, entonces si $\lambda$ es un valor característico de $T$, $\frac{1}{\lambda}$ es un valor característico de $T^{-1}$.

Es evidente que si el $\det (A) \neq 0$, entonces $\lambda \neq 0$.


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