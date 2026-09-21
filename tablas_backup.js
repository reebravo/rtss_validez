// tablas_contenido.js

const TABLA_PSICO = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Categoría/Tipo de tratamiento</th>
        <th>Objetivo Seleccionado (Target)</th>
        <th>Ingredientes (Ingredients / BCTs)</th>
        <th>Mecanismo de acción (MoA)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Categoría/Tipo de tratamiento">
          Representaciones y<br>Hábitos/Habilidades
        </td>
        <td data-label="Objetivo Seleccionado (Target)">
          Reducir significativamente la incidencia y recurrencia de caídas en adultos mayores 
          mediante la identificación, concientización y modificación de factores de riesgo 
          personales, conductuales y ambientales.
        </td>
        <td data-label="Ingredientes (Ingredients / BCTs)">
          <ol>
            <li>
              <strong>Evaluar y concientizar:</strong>
              <ul>
                <li>BCT 1.1 Monitorización de la conducta por el usuario</li>
                <li>BCT 2.2 Retroalimentación sobre la conducta</li>
              </ul>
            </li>
            <li>
              <strong>Plan de respuesta ante caídas:</strong>
              <ul>
                <li>BCT 1.2 Definición de metas (conducta)</li>
                <li>BCT 8.1 Práctica/Ensayo conductual (maniobras de levantamiento)</li>
              </ul>
            </li>
            <li>
              <strong>Cambio de hábitos y prevención del miedo:</strong>
              <ul>
                <li>BCT 1.4 Planificación de la acción / Implementación de intenciones</li>
                <li>BCT 11.2 Reestructuración cognitiva (autoeficacia)</li>
              </ul>
            </li>
            <li>
              <strong>Modificación del entorno doméstico:</strong>
              <ul>
                <li>BCT 12.1 Reestructuración del ambiente físico</li>
                <li>BCT 12.5 Añadir objetos/pistas al entorno</li>
              </ul>
            </li>
          </ol>
        </td>
        <td data-label="Mecanismo de acción (MoA)">
          <ul>
            <li>
              <strong>Creencias sobre las capacidades (Autoeficacia):</strong> Incremento del control percibido para realizar maniobras de movilización post-caída de forma segura.
            </li>
            <li>
              <strong>Conocimiento y Procesamiento Cognitivo:</strong> Mayor conciencia de riesgo, mejora en la percepción del entorno y toma de decisiones rápida.
            </li>
            <li>
              <strong>Habilidades físicas/motoras:</strong> Automatización conductual de patrones de movimiento seguro frente al miedo a caer.
            </li>
            <li>
              <strong>Contexto ambiental y recursos:</strong> Facilitación del entorno físico mediante la eliminación de barreras y mitigación de riesgos.
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`;

const TABLA_POLIFARMACIA = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Categoría/Tipo de tratamiento</th>
        <th>Objetivo Seleccionado (Target)</th>
        <th>Ingredientes (Ingredients / BCTs)</th>
        <th>Mecanismo de acción (MoA)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Categoría/Tipo de tratamiento">
          Representaciones y<br>Hábitos/Habilidades
        </td>
        <td data-label="Objetivo Seleccionado (Target)">
          Optimizar el manejo farmacológico del adulto mayor mediante la identificación, educación y monitorización del uso de medicamentos, con el fin de reducir interacciones adversas, mejorar la adherencia terapéutica y disminuir el riesgo de caídas asociado a la polifarmacia.
        </td>
        <td data-label="Ingredientes (Ingredients / BCTs)">
          <ol>
            <li>
              <strong>Identificación y registro de medicamentos:</strong>
              <ul>
                <li>BCT 1.1 Monitorización de la conducta por el usuario (hoja/diario de medicación)</li>
                <li>BCT 2.3 Monitorización del resultado(s) de la conducta</li>
              </ul>
            </li>
            <li>
              <strong>Educación sobre uso correcto:</strong>
              <ul>
                <li>BCT 5.1 Información sobre consecuencias de la salud (posología y riesgos de polifarmacia)</li>
                <li>BCT 4.1 Instrucción sobre cómo realizar la conducta</li>
              </ul>
            </li>
            <li>
              <strong>Monitorización de efectos adversos:</strong>
              <ul>
                <li>BCT 2.2 Retroalimentación sobre la conducta</li>
                <li>BCT 1.4 Planificación de la acción (qué hacer ante un efecto secundario)</li>
              </ul>
            </li>
            <li>
              <strong>Estrategias de organización farmacológica:</strong>
              <ul>
                <li>BCT 12.5 Añadir objetos/pistas al entorno (pastilleros, alarmas, calendarios)</li>
                <li>BCT 8.2 Recompensa/Incentivo por conducta consistente</li>
              </ul>
            </li>
            <li>
              <strong>Desprescripción supervisada:</strong>
              <ul>
                <li>BCT 11.2 Reestructuración cognitiva (reducir temores al suspender fármacos)</li>
                <li>BCT 3.1 Apoyo social (no práctico) / Alianza con el profesional de salud</li>
              </ul>
            </li>
          </ol>
        </td>
        <td data-label="Mecanismo de acción (MoA)">
          <ul>
            <li>
              <strong>Conocimiento:</strong> Comprensión clara sobre la indicación, posología e interacciones de cada fármaco consumido.
            </li>
            <li>
              <strong>Regulación conductual:</strong> Adquisición de rutinas, uso de facilitadores físicos (pistas/alarmas) y esquemas para mantener la adherencia terapéutica sostenida.
            </li>
            <li>
              <strong>Creencias sobre las consecuencias / Creencias de salud:</strong> Modificación de la percepción de necesidad/preocupación sobre los medicamentos y disminución del temor a la desprescripción.
            </li>
            <li>
              <strong>Procesos fisiológicos organísmicos (Nivel Fisiológico/Médico):</strong> Reducción de la carga colinérgica/sedante y estabilización cardiovascular/neurológica secundaria a la desprescripción y prevención de interacciones adversas.
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`;

const TABLA_SUPLEMETACION = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Categoría/Tipo de tratamiento</th>
        <th>Objetivo Seleccionado<br>(Target)</th>
        <th>Ingredientes<br>(Ingredients)</th>
        <th>Mecanismo de acción<br>(MoA)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Categoría/Tipo de tratamiento">
          Representaciones y<br>Hábitos/Habilidades<br><br>
            Optimización nutricional y suplementación de micronutrientes
        </td>
        <td data-label="Objetivo Seleccionado (Target)">
            Mejorar el estado nutricional relacionado con vitamina D, calcio y potasio en adultos mayores mediante educación, suplementación y monitoreo de adherencia, con el fin de fortalecer la salud ósea, optimizar la función muscular y disminuir el riesgo de caídas.        </td>
        <td data-label="Ingredientes (Ingredients)">
          <ol>
            <li>Evaluación de los micronutrientes.</li>
            <li>Evaluación Clínica y Bioquímica Inicial.</li>
            <li>Prescripción e Implementación de suplementos.</li>
            <li>Fomento de fuentes de alimentación con altos índices de Vitamina D.</li>
            <li>Evaluación Periódica.</li>
          </ol>
        </td>
        <td data-label="Mecanismo de acción (MoA)">
          <ul>
            <li>La vitamina D mejora la absorción intestinal de calcio y contribuye al mantenimiento de la densidad mineral ósea. </li>
            <li>El calcio fortalece la estructura ósea y participa en la contracción muscular.</li>
            <li>El potasio favorece el equilibrio electrolítico y la función neuromuscular.</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`;

const TABLA_EJERCICIO = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Categoría/Tipo de tratamiento</th>
        <th>Objetivo Seleccionado<br>(Target)</th>
        <th>Ingredientes<br>(Ingredients)</th>
        <th>Mecanismo de acción<br>(MoA)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Categoría/Tipo de tratamiento">
          Función de órganos <br><br> Sistema Musculoesquelético y Nervioso: <br> Incremento de torque articular <br> y mejora en la conducción eferente motora
        </td>
        <td data-label="Objetivo Seleccionado (Target)">
            Incrementar la fuerza y potencia muscular de MMII y MMSS para mejorar el despegue de la marcha y la recuperación de la postura. <br><br> Medición: Test de los 30 segundos (sit-to-stand), Dinamometría y Escala de confianza en el equilibrio
        </td><td data-label="Ingredientes (Ingredients)">
          <ol>
            <li>Ejercicio de resistencia progresiva (70-85% 1RM).</li>
            <li>Repeticiones concéntricas rápidas (para potencia).</li>
            <li>Sobrecarga mecánica con bandas elásticas o pesos en los tobillos.</li>
            <li>Instrucción verbal para la técnica de ejecución</li>
          </ol>
        </td>
        <td data-label="Mecanismo de acción (MoA)">
          <ul>
            <li>Reclutamiento de unidades motoras: Aumento de la frecuencia de disparo y sincronización neuronal.</li>
            <li>Hipertrofia muscular: Síntesis proteica en fibras tipo iia y iib.</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`;