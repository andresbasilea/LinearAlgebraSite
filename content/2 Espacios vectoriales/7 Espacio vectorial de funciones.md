



### Espacio vectorial de funciones reales de variable real

El análisis que se hará de las funciones será desde el punto de vista algebraico y este se limitará al caso de las funciones reales de variable real. Este tipo de funciones constituyen un espacio vectorial para las operaciones de adición y multiplicación por un escalar:

- $(f + g)(x) = f(x) + g(x)$

- $(\alpha f)(x) = \alpha f(x) \quad \forall x \in \mathbb{R}$

Este espacio tiene un especial interés por tratarse de un espacio de dimensión infinita.

El espacio vectorial de funciones reales de variable real comprende a todas las funciones reales que están definidas sobre el campo de los reales. Algunos elementos que pertenecen a este espacio vectorial, podrían ser los vectores: 

- $cos (x)$
- $sin^2(x)$
- $x^2 + x$
- $e^x$
- $ln(x)$

Entre infinitos otros. 

Pero... en este caso, al tener un espacio vectorial de dimensión infinita, ¿cómo se vería una de sus bases? Es decir, sabiendo que **una base** es un conjunto de vectores linealmente independiente que permite generar un espacio vectorial a partir de combinaciones lineales de sus elementos, ¿cuáles serían esos elementos de la base? ¿Qué vectores multiplicados por escalares nos podrían dar a su vez el vector $e^x$, pero también $cos(x)$?

No lo veremos muy a detalle en este curso, pero las bases de estos espacios vectoriales infinitos de funciones podrían ser las series que ya conocen, como:
- Serie de Fourier
	- Combinación de funciones seno y coseno
- Serie de Maclaurin / Taylor
	- Combinación de suma de potencias de polinomios


![[Pasted image 20250916134755.png]]
<small>Aproximación de distintas funciones a partir de la suma infinita de senos y cosenos (los vectores de una base del espacio vectorial de funciones reales de variable real)</small>


**Los objetivos principales en este curso serán:** 
- conocer estos espacios vectoriales
- determinar la independencia o dependencia lineal de subconjuntos finitos de vectores del espacio vectorial de funciones reales de variable real. Por ejemplo, conocer la dependencia o independencia lineal del conjunto de vectores: $\{x^2+x, ln(x), cos(x)\}$

En realidad, ya hemos trabajado con algunos subespacios del espacio vectorial de funciones reales de variable real. Por ejemplo, trabajamos con el espacio vectorial de polinomios de grado dos ($ax^2+bx+c$). 


Ahora bien, existen dos formas de conocer la dependencia o independencia lineal de un conjunto de funciones: planteando la **ecuación de dependencia lineal** (mismo procedimiento que ya hemos realizado anteriormente), o utilizando el **criterio del Wronskiano.** 

### Criterio del Wronskiano


Sea $\{f_1, f_2, \ldots, f_n\}$ un conjunto de $n$ funciones reales de variable real, cada una de las cuales admite por lo menos $n-1$ derivadas en el intervalo $(a, b)$. El determinante

$$
W(x) = \begin{vmatrix}
f_1 & f_2 & \dots & f_n \\
f_1' & f_2' & \dots & f_n' \\
\vdots & \vdots & \ddots & \vdots \\
f_1^{n-1} & f_2^{n-1} & \dots & f_n^{n-1}
\end{vmatrix}
$$
se denomina Wronskiano del conjunto de funciones dado.

Si existe al menos un valor $x_0 \in (a, b)$, para el cual $W(x_0) \neq 0$, entonces el conjunto de funciones es linealmente independiente en dicho intervalo.

Cabe hacer notar que si $W(x) = 0, \quad \forall \, x \in (a, b)$, entonces no se puede concluir nada en cuanto a la **dependencia o independencia lineal del conjunto de funciones**. En este caso se deberá recurrir a la ecuación de dependencia lineal para su análisis.





#### Ejercicio 1

Determine si el conjunto de funciones $\{e^x, e^{2x}, e^{x+2}\}$ es linealmente dependiente o independiente en el intervalo $(-\infty, \infty)$

Obteniendo el Wronskiano, tenemos:
$$
W(x) =
\begin{vmatrix}
e^x & e^{2x} & e^{x+2} \\
e^x & 2e^{2x} & e^{x+2} \\
e^x & 4e^{2x} & e^{x+2}
\end{vmatrix}
$$
$$
W(x) = e^x(2e^{2x})(e^{x+2}) + e^{2x}(e^{x+2})(e^x) + e^{x+2}(e^x)(4e^{2x})
$$
$$
- e^{x+2}(2e^{2x})(e^x) - e^x(e^{x+2})(4e^{2x}) - e^{2x}(e^x)(e^{x+2})
$$
$$
W(x) = 2e^{4x+2} + 4e^{4x+2} + e^{4x+2} - 2e^{4x+2} - e^{4x+2} - 4e^{4x+2}
$$

de donde: 
$$
W(x) = 0
$$

Dado que $W(x) = 0$, entonces el criterio del Wronskiano no permite decidir en cuanto a la dependencia o independencia lineal del conjunto de funciones. Por lo tanto, se procederá de la siguiente manera:

Como se puede apreciar:
$$
e^{x+2} = e^2 e^x
$$
es decir, $e^{x+2}$ se puede obtener al multiplicar la función $e^x$ por la constante $e^2$, esto implica que las funciones $e^x$ y $e^{x+2}$ son linealmente dependientes entre sí, con lo cual podemos concluir que el conjunto de funciones dado es linealmente dependiente.



#### Ejercicio 2

Determine si el conjunto de funciones
$$
G = \{2 sen^2 x, -\cos^2 x, 3\}
$$
es linealmente dependiente o independiente en el intervalo $(-\infty, \infty)$.


Obteniendo el Wronskiano, tenemos:
$$
W(x) = \begin{vmatrix}
2 sen^2 x & -\cos^2 x & 3 \\
4 sen x \cos x & 2 \cos x sen x & 0 \\
-4 sen^2 x + 4 \cos^2 x & 2 \cos^2 x - 2 sen^2 x & 0
\end{vmatrix}
$$
Aplicando el método de cofactores en la tercera columna, tenemos:
$$
W(x) = 3[(4 sen x \cos x)(2 \cos^2 x - 2 sen^2 x) - (2 \cos x sen x)(-4 sen^2 x + 4 \cos^2 x)]
$$
desarrollando los productos y simplificando, se tiene:
$$
W(x) = 3(8 sen x \cos^3 x - 8 sen^3 x \cos x + 8 sen^3 x \cos x - 8 sen x \cos^3 x)
$$
$$
W(x) = 0
$$
Dado que el Wronskiano resultó igual a cero, entonces el criterio no decide, por lo que se tendrá que recurrir a la ecuación de dependencia lineal para determinar si el conjunto $G$ es linealmente dependiente o dependiente.

Se sabe que:

$$sen^2 x + \cos^2 x = 1$$

de donde

$$-\cos^2 x = -1 + sen^2 x$$

con lo cual, la ecuación de dependencia lineal se puede expresar como:

$$\alpha_1 (2 sen^2 x) + \alpha_2 (-1 + sen^2 x) + \alpha_3 (3) = \vec{0} \quad \dots (1)$$

multiplicando y factorizando términos semejantes, tenemos:

$$(2\alpha_1 + \alpha_2) sen^2 x + (-\alpha_2 + 3\alpha_3) = 0 sen^2 x + 0$$

por igualdad, se tiene:

- $2α1​+α2​=0$
- $−α2​+3α3​=0​$

Se trata de un sistema de ecuaciones compatible indeterminado, que admite múltiples soluciones, esto es, se pueden obtener valores para los escalares α1​, α2​, α3​ diferentes de cero, con los cuales se satisface la ecuación (1), por lo que, se puede concluir que el conjunto G es linealmente dependiente.


#### Ejercicio 3

 Determinar si el conjunto $H = \{1, \ln(x), \ln(x^2)\}$ es linealmente dependiente o linealmente independiente.
 
Visualmente, podemos percatarnos de que $ln(x^2)$ puede reescribirse como una constante por $ln(x)$, otro de los vectores del conjunto. Entonces, podemos escribir uno de los vectores del conjunto como una combinación lineal de los otros y, por lo tanto, el conjunto es linealmente dependiente. Desarrollando: 

$$
\alpha(1) + \beta(\ln(x)) + \gamma(\ln(x^2)) = 0  \quad ... ecuación \, de \, dependencia \, lineal
$$

Reescribiendo $ln(x^2)$ como mencionamos anteriormente: 
$$
\ln(x^2) = 2\ln(x)
$$
$$
\ln(x^2) = \alpha \ln(x)
$$

escribiendo a $ln(x^2)$ como una combinación lineal de los otros vectores:
$$
\ln(x^2) = \alpha \ln(x) + \beta(1)
$$

Llegamos a que:
$$
\ln(x^2) = 2\ln(x) + 0(1) \quad \quad \quad \therefore H \text{ es l.d.}
$$


<br>
<br>


>[!interesante] Una forma fácil de resolver estos problemas
>Cuando se solicite determinar la dependencia o independencia lineal de un conjunto de funciones conviene, antes de aplicar el método de Wronskiano o de la ecuación de dependencia lineal, visualizar si las funciones (los vectores) son linealmente dependientes a través de un análisis rápido. Por ejemplo, en el primer ejercicio era fácilmente visible que multiplicar el vector $e^x$ por la constante $e^2$ nos da como resultado otro de los vectores del conjunto ($e^{x+2}$), por lo que es linealmente dependiente. 
>
>Para los ejercicios con funciones trigonométricas, conviene pensar en las identidades más básicas. En el caso del ejercicio 2, se aplicó la identidad $sen^2x + cos^2x = 1$, pero para otro ejercicio con vectores de funciones $sec^2x$, $tan^2x$ y una función constante, podría pensarse en utilizar la identidad $1+tan^2 x = sec^2 x$. 


