---

---

### Operación binaria
Una operación binaria definida en un conjunto no vacío $A$, es una regla o criterio que asigna a cada par ordenado de elementos de $A$, un único elemento llamado resultado, que puede o no pertenecer al mismo conjunto $A$. 


### ¿Qué se considera un grupo y por qué se comenzaron a estudiar?

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

### Estructura de grupo

  Sea $A$ un conjunto no vacío y sea $*$ una operación binaria definida en $A$. Se dice que el sistema $(A, \ast)$ tiene estructura de grupo si se cumplen los siguientes axiomas: 

  - **1) Cerradura:** $\forall a, b \in A$ $(a \ast b) \in A$ 
  - **2) Asociatividad:** $\forall a, b, c \in A$ $a \ast (b \ast c) = (a \ast b) \ast c$ 
  - **3) Existencia del elemento idéntico:** $\forall a \in A; \exists e \in A \mid a \ast e = e \ast a = a$ 
  - **4) Existencia de elementos inversos:** $\forall a \in A; \exists i \in A \mid a \ast i = i \ast a = e$ 
  
  Si alguno de los axiomas no se cumple, entonces el sistema $(A, \ast)$ no tendrá estructura de grupo.

### Propiedades de los grupos 
Sea $(A, \ast)$ un grupo 
- **1) Cancelación:** $\forall a, b, c \in A$ si $a \ast b = a \ast c \implies b = c$ si $b \ast a = c \ast a \implies b = c$ 
- **2)** Si $e$ es idéntico izquierdo para $\ast$, entonces $e$ es el idéntico del grupo. 
- **3)** El elemento idéntico de un grupo es único. 
- **4)** Si $a^{-1}$ es el inverso izquierdo de $a \in A$, entonces $a^{-1}$ es el inverso de $a$. 
- **5)** El elemento inverso de cada elemento de $A$ es único. 
- **6)** Si $a^{-1}$ es el inverso de $a \in A$, entonces $(a^{-1})^{-1} = a$. 
- **7)** Si $a, b \in A$, entonces $(a \ast b)^{-1} = b^{-1} \ast a^{-1}$ 
- **8)** Si $a_1, a_2, \dots, a_n \in A$, entonces: $(a_1 \ast a_2 \ast \dots \ast a_n)^{-1} = a_n^{-1} \ast \dots \ast a_2^{-1} \ast a_1^{-1}$ 
- **9)** Si $a, b \in A$, entonces cada una de las ecuaciones: 
	- $a \ast x = b$
	- $y \ast a = b$ 
- tiene solución única, donde $x, y \in A$.

### Grupo abeliano
Un sistema $(A,*)$ tiene estructura de grupo abeliano si se cumplen los siguientes axiomas: 
1. Cerradura
2. Asociatividad
3. Elemento idéntico
4. Elemento inverso
5. Conmutatividad

>[!interesante] Niels Henrik Abel
>![[Pasted image 20250630183858.png | right]]




>[!interesante] Evariste Galois
>![[Pasted image 20250719194424.png]]
>


Imagina un genio incomprendido, un joven rebelde cuya pasión por las matemáticas era tan intensa como su espíritu revolucionario. Esa fue la vida de **Évariste Galois**, un nombre que quizás no conozcas, pero cuya contribución a las matemáticas es tan fundamental que sin él, nuestra comprensión de los grupos, y por ende, de gran parte del álgebra moderna, sería drásticamente diferente.
Galois nació en Francia en 1811, en una época de gran agitación política. Desde muy joven, mostró una inteligencia deslumbrante, pero también una personalidad que chocaba con la rigidez del sistema educativo de su tiempo. Aunque intentó ingresar a la prestigiosa École Polytechnique varias veces, fue rechazado, en parte, se dice, por su falta de paciencia con los métodos tradicionales y su impaciencia por avanzar en sus propias ideas revolucionarias.
> Su mente estaba obsesionada con un problema que había desconcertado a los matemáticos durante siglos: ¿existía una fórmula general para resolver ecuaciones polinómicas de quinto grado (y superiores) utilizando solo operaciones básicas y raíces? Matemáticos como Abel ya habían demostrado que no, pero Galois fue mucho más allá. Se dio cuenta de que la clave para entender la solubilidad de estas ecuaciones no radicaba en las ecuaciones mismas, sino en las **simetrías** de sus raíces.
> Y es aquí donde entra en juego el concepto de **grupo**. Galois fue el primero en vislumbrar la profunda conexión entre las soluciones de una ecuación y una estructura abstracta que hoy conocemos como **grupo de Galois**. Este grupo, formado por las permutaciones de las raíces que preservan ciertas relaciones, le permitía determinar si una ecuación era soluble por radicales o no. Fue una idea tan radical, tan adelantada a su tiempo, que sus trabajos iniciales fueron rechazados o ignorados por los matemáticos más prominentes de la época.
La vida de Galois fue tan breve como intensa. Involucrado en la política republicana y constantemente en problemas con las autoridades, su destino se selló en un trágico duelo, supuestamente por una cuestión de honor, aunque las circunstancias exactas siguen siendo un misterio. La noche anterior a su muerte, a la temprana edad de 20 años, Galois pasó sus últimas horas garabateando febrilmente sus ideas matemáticas más importantes, en una carta dirigida a un amigo. En esa carta, instó a su amigo a pedir a los matemáticos que, por favor, juzgaran la importancia de su trabajo.

Y así lo hicieron, aunque tardó un tiempo. Décadas después de su muerte, sus escritos fueron finalmente comprendidos y reconocidos por su inmensa originalidad y profundidad. Lo que Galois había descubierto no era solo una solución a un problema específico, sino un marco conceptual completamente nuevo que revolucionaría las matemáticas.

Su trabajo sentó las bases de la **Teoría de Grupos**, una rama fundamental del álgebra que estudia las propiedades de las simetrías y las transformaciones. Desde la física de partículas hasta la criptografía, los grupos son una herramienta indispensable para describir la estructura y las interacciones en una amplia variedad de campos.

Hoy, al comenzar nuestra exploración de los grupos, recuerden a Évariste Galois. No solo fue un genio matemático, sino un visionario que, a pesar de una vida corta y llena de adversidades, nos legó una de las ideas más poderosas y elegantes de las matemáticas modernas. Su historia es un testimonio del poder de la creatividad, la perseverancia y la capacidad de ver la belleza en la estructura abstracta.





Imagina un genio incomprendido, un joven rebelde cuya pasión por las matemáticas era tan intensa como su espíritu revolucionario. Esa fue la vida de **Évariste Galois**, un nombre que quizás no conozcas, pero cuya contribución a las matemáticas es tan fundamental que sin él, nuestra comprensión de los grupos, y por ende, de gran parte del álgebra moderna, sería drásticamente diferente.

Galois nació en Francia en 1811, en una época de gran agitación política. Desde muy joven, mostró una inteligencia deslumbrante, pero también una personalidad que chocaba con la rigidez del sistema educativo de su tiempo. Aunque intentó ingresar a la prestigiosa École Polytechnique varias veces, fue rechazado, en parte, se dice, por su falta de paciencia con los métodos tradicionales y su impaciencia por avanzar en sus propias ideas revolucionarias.

Su mente estaba obsesionada con un problema que había desconcertado a los matemáticos durante siglos: ¿existía una fórmula general para resolver ecuaciones polinómicas de quinto grado (y superiores) utilizando solo operaciones básicas y raíces? Matemáticos como Abel ya habían demostrado que no, pero Galois fue mucho más allá. Se dio cuenta de que la clave para entender la solubilidad de estas ecuaciones no radicaba en las ecuaciones mismas, sino en las **simetrías** de sus raíces.

Y es aquí donde entra en juego el concepto de **grupo**. Galois fue el primero en vislumbrar la profunda conexión entre las soluciones de una ecuación y una estructura abstracta que hoy conocemos como **grupo de Galois**. Este grupo, formado por las permutaciones de las raíces que preservan ciertas relaciones, le permitía determinar si una ecuación era soluble por radicales o no. Fue una idea tan radical, tan adelantada a su tiempo, que sus trabajos iniciales fueron rechazados o ignorados por los matemáticos más prominentes de la época.

La vida de Galois fue tan breve como intensa. Involucrado en la política republicana y constantemente en problemas con las autoridades, su destino se selló en un trágico duelo, supuestamente por una cuestión de honor, aunque las circunstancias exactas siguen siendo un misterio. La noche anterior a su muerte, a la temprana edad de 20 años, Galois pasó sus últimas horas garabateando febrilmente sus ideas matemáticas más importantes, en una carta dirigida a un amigo. En esa carta, instó a su amigo a pedir a los matemáticos que, por favor, juzgaran la importancia de su trabajo.

Y así lo hicieron, aunque tardó un tiempo. Décadas después de su muerte, sus escritos fueron finalmente comprendidos y reconocidos por su inmensa originalidad y profundidad. Lo que Galois había descubierto no era solo una solución a un problema específico, sino un marco conceptual completamente nuevo que revolucionaría las matemáticas.

Su trabajo sentó las bases de la **Teoría de Grupos**, una rama fundamental del álgebra que estudia las propiedades de las simetrías y las transformaciones. Desde la física de partículas hasta la criptografía, los grupos son una herramienta indispensable para describir la estructura y las interacciones en una amplia variedad de campos.

Hoy, al comenzar nuestra exploración de los grupos, recuerden a Évariste Galois. No solo fue un genio matemático, sino un visionario que, a pesar de una vida corta y llena de adversidades, nos legó una de las ideas más poderosas y elegantes de las matemáticas modernas. Su historia es un testimonio del poder de la creatividad, la perseverancia y la capacidad de ver la belleza en la estructura abstracta.



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