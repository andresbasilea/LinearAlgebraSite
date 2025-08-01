
El álgebra lineal, como se menciona en la introducción de la clase ([[Sobre la clase]]), es una disciplina transversal a prácticamente todas las áreas del conocimiento, con aplicaciones que adquieren cada vez mayor relevancia en el mundo contemporáneo.

Soy consciente de que esta no es una materia sencilla de cursar. Yo mismo la estudié en la Facultad de Ingeniería hace apenas algunos años, y puedo decir que, aunque representa un reto importante, también ofrece recompensas intelectuales profundas. Siempre me ha gustado pensar en el álgebra lineal con la siguiente frase:

> [!quote] La **abstracción** es el costo de la **generalización**.

Y es que probablemente estamos frente a la materia más abstracta de toda la división de ciencias básicas. Para muchos estudiantes de ingeniería, esta abstracción puede resultar desconcertante al principio. Estamos, después de todo, acostumbrados a trabajar con fenómenos tangibles, con aplicaciones visibles y soluciones concretas. Pero el valor de la abstracción no radica en lo inmediato, sino en su poder para construir herramientas generales capaces de resolver una amplia variedad de problemas, en contextos muy distintos. 

Al finalizar este curso entenderán la importancia de la abstracción como un mecanismo para poder generalizar y resolver una infinidad de problemas distintos que se presentan no sólo en todas las ramas de la ingeniería, sino de la ciencia y del conocimiento en general. 

Sin más preámbulo... 

>[!custom] ¿Qué es el álgebra lineal? 
>Explicar qué es el álgebra lineal no es tan sencillo como parece, especialmente si quien escucha aún no ha tenido contacto con la materia. Me han preguntado muchas veces qué clase doy en la facultad, y cuando respondo "álgebra lineal", suele venir la inevitable pregunta:  
> **"¿Y eso qué es?"**
> 
> Si contesto con la definición clásica: "**es la rama de las matemáticas que estudia vectores, espacios vectoriales, ecuaciones lineales y transformaciones lineales**", muchas veces noto más confusión que claridad. Y tiene sentido: esa definición cobra verdadero significado _después_ de haber recorrido una buena parte del camino.
> Como mencioné antes, el álgebra lineal puede parecer abstracta al principio, y su utilidad no siempre es evidente de inmediato. Pero conforme avanzas en el estudio, todo empieza a tener sentido: los conceptos se conectan, las aplicaciones aparecen, y la abstracción se convierte en una herramienta poderosa.
> 


## Breve historia del álgebra lineal

### Sobre el álgebra

El álgebra es la rama de las matemáticas que amplía las operaciones de la aritmética (suma, resta, multiplicación, división y raíces) para trabajar con números, letras y símbolos.

Aunque la palabra "álgebra" proviene del árabe, sus orígenes se remontan a los babilonios. Ellos crearon un sistema aritmético avanzado que les permitía aplicar fórmulas y resolver problemas para encontrar valores desconocidos, un tipo de problema que hoy en día se soluciona con ecuaciones lineales y cuadráticas.

>[!info] Al-Jabr (Álgebra) 
>El **Compendio de cálculo por reintegración y comparación**, libro escrito en árabe por el matemático persa Al-Khwarizmi, fue de los primeros en exponer los cimientos del álgebra, y el primero en estudiar **sistemáticamente** la resolución de ecuaciones de primer y segundo grado.
>Este libro data del año 820 d.C., aproximadamente.
>![[Pasted image 20250726210110.png]]


Para resolver problemas complejos, el ser humano ha desarrollado modelos, muchos de los cuales son de carácter lineal y se pueden formular mediante ecuaciones lineales.

La palabra "ecuación" proviene del latín _aequatio_, que significa "igualdad". Una ecuación es una igualdad que contiene cantidades desconocidas. Específicamente, una ecuación lineal tiene la forma:

$$ a_1​x_1​+a_2​x_2​+⋯+a_n​x_n​=b$$

donde $a_1​,a_2​,…,a_n​$ son los coeficientes, $x_1​,x_2​,…,x_n$​ son las variables y $b$ es el término constante. Un **sistema de ecuaciones lineales** es un conjunto finito de este tipo de ecuaciones.

### El álgebra lineal

Los matemáticos chinos de los siglos III y IV a.C, desarrollaron la obra "Nueve capítulos sobre el Arte Matemático", compilado por el científico Chuan Tsanom en el año 152 a.C. Esta obra no solo organizaba el conocimiento matemático de la época, sino que también presentaba sistemas de ecuaciones lineales, como el siguiente:

$$\begin{cases} 3x + 2y + z = 39 \\ 2x + 3y + z = 34 \\ x + 2y + 3z = 26 \end{cases}$$

Junto a este sistema, la obra describía un método para su resolución, llamado la **"regla de fan-chen"**, que es la base histórica del **método de eliminación gaussiana** utilizado en la actualidad.

![[Pasted image 20250726214243.png]]


Antes del siglo XVIII, el álgebra se entendía, en esencia, como el arte de resolver ecuaciones de cualquier grado.

En ese periodo, el matemático D'Alembert hizo un descubrimiento clave: las soluciones de un sistema de ecuaciones de la forma Ax=b conforman una **variedad lineal**. Junto a Euler y Lagrange, también notó que la solución general de un sistema homogéneo (Ax=0) puede construirse a partir de una **combinación lineal** de sus soluciones particulares. 

![[Screenshot 2025-07-26 at 9.43.36 p.m..png]]


Durante esta época, matemáticos como Hamilton, Arthur Cayley y Hermann Gunther Grassmann establecieron las nociones formales de **vector** y **espacio vectorial**, axiomatizando la idea de vector que ya se usaba en la mecánica.

Grassmann, en particular, realizó contribuciones fundamentales. Introdujo el concepto de **producto geométrico** (equivalente a nuestro producto vectorial), así como las ideas de **independencia lineal** y **dimensión de un espacio vectorial**. También demostró la identidad clave para la dimensión de la suma de dos subespacios U y W:

$$dim(U+W)=dim(U)+dim(W)−dim(U∩W)$$

![[Screenshot 2025-07-26 at 9.45.04 p.m..png]]


El matemático inglés **James Joseph Sylvester** fue el primero en acuñar el término **"matriz"** en 1850, describiéndola como un "arreglo cuadrilongo de términos".

Sylvester compartió esta idea con Arthur Cayley, quien de inmediato entendió su potencial. Cayley desarrolló el concepto de **álgebra matricial** y, en 1858, publicó su "Memoir on the theory of matrices", donde proporcionó la primera definición abstracta de una matriz y formalizó sus operaciones básicas: suma, multiplicación y multiplicación por escalares. De hecho, la noción de la inversa de una matriz ya había aparecido en una nota suya de 1853.

#### Galois: la teoría de grupos y el álgebra abstracta

La teoría de grupos, una rama del álgebra abstracta, se centra en el estudio de las estructuras conocidas como "grupos". Sus objetivos son clasificar estas estructuras, explorar sus propiedades y encontrar sus aplicaciones dentro y fuera de las matemáticas, y sus raíces históricas provienen de la teoría de ecuaciones algebraicas, la teoría de números y la geometría.

Un personaje fundamental en esta historia es **Évariste Galois**. Aún siendo estudiante, Galois logró resolver un problema que había desafiado a los matemáticos durante más de un siglo: las condiciones para resolver ecuaciones polinómicas mediante radicales. A pesar de este logro, su contribución más significativa fue el desarrollo de una nueva teoría, la **teoría de grupos**, cuyas aplicaciones trascendieron con creces los límites de las ecuaciones algebraicas.


>[!interesante] ¿Quién fue Galois?
>Évariste Galois fue un matemático y activista político francés, nacido en 1811.
>
>Desde joven mostró un talento matemático excepcional. A pesar de enfrentar rechazos en la École Polytechnique, continuó sus investigaciones. Estando todavía en el colegio, hizo un gran avance al resolver un problema que había desconcertado a los matemáticos por más de un siglo: determinar bajo qué condiciones una ecuación polinómica puede ser resuelta por radicales.
>
>Su trabajo más notable, sin embargo, fue el desarrollo de una nueva disciplina conocida como la **teoría de grupos**. En esta teoría, Galois fue el primero en usar el término "grupo" en un contexto matemático, sentando las bases del álgebra abstracta. Sus ideas fueron tan revolucionarias que no fueron comprendidas por sus contemporáneos y su trabajo no se publicó hasta después de su muerte.
>
>Galois fue también un activista político, participando en la revolución francesa de 1830, lo que le valió varios encarcelamientos. Trágicamente, murió a los 20 años en un duelo, y la noche anterior a su muerte, se dedicó a escribir frenéticamente un resumen de sus ideas matemáticas, el cual más tarde sería reconocido como una obra fundamental.
>
>![[Pasted image 20250726214836.png]]


### El álgebra lineal durante el siglo XX

El siglo XX fue el periodo de maduración y, sobre todo, de explosión del álgebra lineal, transformándola de una rama teórica en una herramienta fundamental para casi todas las ciencias.

#### La primera mitad del siglo: Abstracción y formalización

Durante la primera mitad del siglo XX, las ideas que habían surgido en el siglo anterior se consolidaron y se generalizaron. Matemáticos como **Giuseppe Peano** ya habían dado una definición axiomática del espacio vectorial a finales del siglo XIX, pero en el siglo XX esta abstracción se convirtió en la forma estándar de trabajar. El álgebra lineal se integró en el álgebra abstracta, con sus conceptos de vectores, espacios vectoriales y transformaciones lineales dejando de ser una simple extensión de la geometría para convertirse en una disciplina por derecho propio. Libros como el de Maxime Bôcher, "Introduction to Higher Algebra" (1907), ayudaron a consolidar este enfoque moderno.

#### La segunda mitad del siglo: Computadoras y aplicaciones


La verdadera revolución del álgebra lineal ocurrió en la segunda mitad del siglo XX, gracias al desarrollo de las computadoras. La capacidad de las computadoras para realizar millones de operaciones matriciales por segundo convirtió al álgebra lineal en el lenguaje natural para resolver problemas en la ciencia, la ingeniería y la economía.

- **Algoritmos eficientes:** Se desarrollaron nuevos algoritmos para la resolución de sistemas de ecuaciones y la descomposición de matrices (como la descomposición LU y la factorización QR). Matemáticos como **Alan Turing** y **John von Neumann** hicieron contribuciones cruciales en esta área, impulsando el análisis numérico de matrices.
    
- **Auge de las aplicaciones:** El álgebra lineal se convirtió en el pilar de campos como:
    
    - **Informática:** Gráficos por computadora, procesamiento de imágenes y compresión de datos.
        
    - **Ciencia de datos y aprendizaje automático:** Algoritmos de búsqueda (como los de Google), análisis de redes sociales y redes neuronales.
        
    - **Ingeniería:** Modelado de estructuras, análisis de circuitos eléctricos y robótica.
        

![[Pasted image 20250726215645.png]]

![[Pasted image 20250726215847.png]]


En resumen, el siglo XX llevó al álgebra lineal de un enfoque puramente teórico y abstracto a una disciplina esencial y aplicada, cuyo poder se multiplicó exponencialmente con la llegada de la computación, consolidando su papel central en el mundo moderno.


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