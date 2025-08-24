

### ¿A qué nos referimos con espacio vectorial?

Un **espacio vectorial** es una de las estructuras fundamentales del álgebra lineal. En términos sencillos, nos referimos a una colección de "objetos" (a los que llamamos **vectores**) que se comportan de una manera predecible y consistente.

Formalmente, un espacio vectorial es un conjunto $V$ de vectores junto con un conjunto de escalares (números) $K$ (un **campo**), sobre los cuales se definen dos operaciones:

1. **Suma de vectores:** Si sumas dos vectores de $V$, el resultado es otro vector que también pertenece a $V$.
    
2. **Multiplicación por un escalar:** Si multiplicas un vector de $V$ por un escalar de $K$, el resultado es otro vector que también pertenece a $V$.
    
Para que este sistema se considere un espacio vectorial, debe cumplir diez axiomas o reglas específicas que garantizan su coherencia matemática. Estas reglas, que incluyen la asociatividad, la conmutatividad y la existencia de elementos neutros e inversos, aseguran que las operaciones se comporten de manera lógica.

![[Screenshot 2025-07-27 at 7.57.01 p.m..png]]


En resumen, la belleza de la definición de un espacio vectorial radica en su abstracción. Cualquier conjunto de objetos que cumpla con estos diez axiomas puede ser tratado como un espacio vectorial, lo que permite que las mismas herramientas y conceptos del álgebra lineal se apliquen a campos tan diversos como la geometría, la física, la computación y la ciencia de datos.


>[!info] ¿Quién introdujo la idea de **Espacio Vectorial**?
> A menudo se atribuye al matemático alemán **Hermann Grassmann** (1809–1877) la introducción de la idea de un **espacio vectorial** en 1844, aunque él nunca usó ese término específicamente. Lamentablemente, su obra resultó difícil de leer, por lo que no recibió en su momento la atención que merecía.
> 
> Uno de los matemáticos que estudió su trabajo fue el italiano **Giuseppe Peano** (1858–1932), quien en su libro _Calcolo Geometrico_ (1888) clarificó las ideas de Grassmann y formuló los **axiomas** de lo que hoy entendemos como un espacio vectorial. Esta obra también es destacada por introducir las operaciones con conjuntos, usando símbolos como `∪`, `∩` y `∈` para unión, intersección y pertenencia, respectivamente, una notación que hoy es estándar, aunque inicialmente no fue ampliamente adoptada.
> 
> A pesar de la claridad del enfoque axiomático de Peano, su influencia fue limitada durante muchos años. Fue hasta 1918, cuando **Hermann Weyl** (1885–1955) retomó y difundió estos conceptos en su libro _Space, Time, Matter_, una introducción a la relatividad general de Einstein, que la definición moderna de espacio vectorial comenzó a ganar aceptación en la comunidad científica.

![[Pasted image 20250727195812.png|600]]

### Definición formal

Sea $V$ un conjunto no vacío, en el cual se definen dos operaciones llamadas adición y multiplicación por un escalar y, sea $K$ un campo. Se dice que $V$ es un espacio vectorial sobre $K$ si las dos operaciones cumplen con los diez axiomas siguientes: 

$\forall \vec{u}, \vec{v}, \vec{w} \in V \quad \text{y} \quad \forall \alpha, \beta \in K$

1. $(\vec{u} + \vec{v}) \in V$ 
2. $(\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})$ 
3. $\vec{u} + \vec{v} = \vec{v} + \vec{u}$ 
4. $\exists \vec{0} \in V \mid \forall \vec{u} \in V; \quad \vec{u} + \vec{0} = \vec{0} + \vec{u} = \vec{u}$ 
5. $\forall \vec{u} \in V; \quad \exists (-\vec{u}) \in V \mid \vec{u} + (-\vec{u}) = (-\vec{u}) + \vec{u} = \vec{0}$ 
6. $(\alpha \vec{u}) \in V$ 
7. $\alpha (\vec{u} + \vec{v}) = \alpha \vec{u} + \alpha \vec{v}$ 
8. $(\alpha + \beta) \vec{u} = \alpha \vec{u} + \beta \vec{u}$ 
9. $\alpha (\beta \vec{u}) = (\alpha \beta) \vec{u}$ 
10. Si $1$ es la unidad de $K$, entonces $1 \vec{u} = \vec{u} \; ; \quad \forall \vec{u} \in V$ 

A los elementos del conjunto $V$ se les llama vectores y a los elementos del campo $K$ se les llama escalares.


### ¿Qué puede ser un vector?

<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/2DVector.html">
    </iframe>
</div>

En su esencia, un vector es un elemento de un **espacio vectorial**, lo que significa que cumple con ciertas reglas que permiten sumarlo con otros vectores y multiplicarlo por escalares.

Dependiendo del contexto, un vector puede ser:

- **Una flecha en el espacio:** Esta es la definición más intuitiva y la que se usa en física. Un vector de desplazamiento, por ejemplo, te dice "muévete 3 metros al este y 4 metros al norte". En este caso, el vector se representa como (3,4).

>[!interesante] ¿Se te ocurre algo adicional que pueda verse como vector? 


- **Una función:** El conjunto de todas las funciones continuas en un intervalo, por ejemplo, es un espacio vectorial. En este caso, el "vector" es la función misma. Puedes sumar dos funciones o multiplicar una función por un número, y el resultado sigue siendo una función.


<div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/2DFunctionsSum.html">
    </iframe>
</div>


![[Pasted image 20250824110843.png]]




- **Un polinomio:** El conjunto de todos los polinomios de un cierto grado (por ejemplo, los de grado 2) puede formar un espacio vectorial. Un polinomio como $5x^2+2x−1$ puede ser tratado como un vector (5,2,−1).
    



### ¿Cuál es la relación con [[1 Grupos|Grupos]] y [[2 Campos|Campos]]?

Un espacio vectorial se trata de un conjunto de vectores $V$ y un campo de escalares $K$ que cumplen dos operaciones:

1. **Suma de vectores:** El conjunto de vectores $V$ debe formar un **grupo abeliano** bajo la operación de suma.
    
2. **Multiplicación por un escalar:** Debe haber una operación que tome un escalar del campo $K$ y un vector de $V$ para producir otro vector de $V$, y esta operación debe cumplir ciertas propiedades de distribución y asociatividad con los elementos del campo.

 
 <div style="position:relative;padding-bottom:56.25%;">
    <!-- 56.25 comes from aspect ratio of 16:9, change this accordingly -->
    <iframe
        style="width:100%;height:100%;position:absolute;left:0px;top:0px;"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen
        allow="autoplay"
        src="_transformaciones/2DScalarMult.html">
    </iframe>
</div>


### Propiedades de la adición

Si $V$ es un espacio vectorial sobre $K$, entonces:

 $\forall \; \vec{u}, \vec{v}, \vec{w} \; \in \; V :$ 
 
 1) $\vec{u} + \vec{v} = \vec{u} + \vec{w} \implies \vec{v} = \vec{w}$ 
 2) El vector $\vec{0}$ es único y es tal que $\vec{v} + \vec{0} = \vec{v}, \quad \forall \vec{v} \in V$ 
 3) El vector $\widehat{\vec{v}}$ es único y es tal que $\vec{v} + \widehat{\vec{v}} = \vec{0}$ 
 4) La ecuación $\vec{u} + \vec{x} = \vec{v}$ tiene solución única en $V$ (es decir, $\vec{x}$ pertenece a $V$)
 5) $\forall \; \vec{v} \; \in V : \widehat{(\widehat{\vec{v}})} = \vec{v}$ 


### Propiedades para la multiplicación por un escalar

Sea $V$ es un espacio vectorial sobre $K$

$\forall \; \vec{u}, \vec{v} \; \in \; V; \; \alpha, \beta \; \in \; K$

1) $0\vec{v} = \vec{0}$, donde $0$ es el **cero** de $K$ 
2) $\alpha\vec{0} = \vec{0}$ 
3) $(-\alpha)\vec{v} = -(\alpha\vec{v}) = \alpha(-\vec{v})$
4) $\alpha\vec{v} = \vec{0} \implies \alpha = 0 \text{ ó } \vec{v} = \vec{0}$ 
5) $\alpha\vec{u} = \alpha\vec{v} \quad \text{y} \quad \alpha \neq 0 \implies \vec{u} = \vec{v}$ 
6) $\alpha\vec{v} = \beta\vec{v} \quad \text{y} \quad \vec{v} \neq \vec{0} \implies \alpha = \beta$ 








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