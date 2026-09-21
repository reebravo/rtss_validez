const SESIONES_PSICO = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Sesión</th>
        <th>Fase de Preparación (10 min)</th>
        <th>Fase Central / Núcleo (25 min)</th>
        <th>Fase de Cierre (20 min)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 1: Evaluación y Riesgo</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Encuadre metodológico y construcción de rapport. Introducción a los objetivos generales.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Ejecución de escala SARC-F. Mapeo e identificación multidimensional de factores de riesgo personales, biológicos y ambientales.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Discusión guiada sobre caídas previas para desarticular atribuciones causales erróneas y reducir el miedo inicial.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 2: TCC y Manejo Ansioso</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Reconocimiento de signos somáticos del estrés (tensión, taquicardia) ante situaciones de riesgo.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Reestructuración de pensamientos catastrofistas y entrenamiento en respiración diafragmática (6 ciclos/min).</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Imaginería motora guiada y ensayo mental de secuencias de movimiento seguro y control postural.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 3: Práctica de Levantamiento</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Movilidad articular suave en colchoneta (cadera, rodillas y columna) como preparación física.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Simulación guiada de maniobras post-caída: decúbito prono &rarr; cuatro puntos &rarr; apoyo en silla &rarr; bipedestación.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Entrenamiento en estrategias de comunicación verbal asertiva y uso de herramientas para pedir auxilio.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 4: Modificación del Entorno</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Elaboración guiada de un croquis o mapa arquitectónico del hogar del paciente.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Detección de barreras físicas en baño, cocina y recámara. Plan de despeje y redistribución de espacio.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Prescripción de ayudas técnicas (barras, iluminación, antideslizantes) y entrega de lista HOME FAST.</div></div></td>
      </tr>
    </tbody>
  </table>
</div>
`;

const SESIONES_POLIFARMACIA = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Sesión</th>
        <th>Fase de Preparación (10 min)</th>
        <th>Fase Central / Núcleo (25 min)</th>
        <th>Fase de Cierre (15 min)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 1: Inventario Físico</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Encuadre clínico con el binomio paciente-cuidador sobre la seguridad farmacológica.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Revisión "Brown Bag Test" de fármacos prescritos y de venta libre. Creación de bitácora unificada.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Validación visual de caducidades, recetas vigentes y ordenamiento inicial por grupos.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 2: Educación y Adherencia</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Repaso de bitácora y aclaración de dudas sobre nombres comerciales vs. genéricos.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Psicoeducación sobre función, posología y peligros severos de la automedicación o suspensión abrupta.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Identificación de barreras cognitivas y físicas que provocan olvidos en la toma.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 3: Cribado y Alarma</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Exploración de síntomas físicos comunes (somnolencia, mareo, inestabilidad).</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Aplicación de Escala de Downton y rastreo de fármacos FRIDs (sedantes, diuréticos, hipotensores).</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Mapeo de síntomas de alarma y capacitación en medición de hipotensión ortostática.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 4: Organización Ambiental</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Introducción a las ayudas de diseño ambiental y soportes cognitivos para farmacoterapia.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Ejercicio guiado de dosificación e inserción física de medicamentos en pastillero semanal.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Programación de alarmas en teléfono/reloj y colocación de recordatorios estratégicos.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 5: Ensayo Conductual</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Recreación de las condiciones habituales del despertar para evaluar la rutina matutina.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Simulación en tiempo real de administración en diversos escenarios (ayuno, comidas, viajes) y escala MMAS-8.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Establecimiento de protocolos de intenciones ante olvidos accidentales de dosis.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 6: Desprescripción</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Evaluación de la evolución respecto a la bitácora y la Escala de Downton basales.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Consolidación del plan de propuesta de desprescripción dirigida al médico tratante (ACB &lt; 2).</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Entrega del informe farmacológico final y firma de acuerdos de seguimiento continuos.</div></div></td>
      </tr>
    </tbody>
  </table>
</div>
`;


const SESIONES_SUPLEMENTACION = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Sesión</th>
        <th>Fase de Preparación (10 min)</th>
        <th>Fase Central / Núcleo (25 min)</th>
        <th>Fase de Cierre (10 min)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 1: Valoración Inicial</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Entrevista inicial e identificación de síntomas subjetivos (astenia, calambres, debilidad).</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Auditoría dietética de 24 horas y aplicación del tamizaje estandarizado MNA-SF.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Conciliación y revisión de estudios bioquímicos de laboratorio (25-OH vitamina D3 y Calcio).</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 2: Fisiología y Exposición</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Análisis de creencias tradicionales y barreras de ingesta (económicas, masticación).</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Capacitación interactiva sobre la función celular de Vitamina D, Calcio y Potasio.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Taller de fuentes alimentarias y pautas de heliofototerapia (15–20 min de sol directo).</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 3: Prescripción y Menú</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Revisión de dosis exactas (Vit D3 1000-2000 UI, Calcio 1000 mg) para evitar sobredosificación.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Armado guiado de menú semanal rico en potasio/calcio y cronograma de suplementación con comidas.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Instalación de listas de cotejo en cocina y programación de controles bioquímicos semestrales.</div></div></td>
      </tr>
    </tbody>
  </table>
</div>
`;


const SESIONES_EJERCICIO = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Sesión</th>
        <th>Fase de Preparación (10 min)</th>
        <th>Fase Central / Núcleo (25 min)</th>
        <th>Fase de Estabilidad / Cierre (15 min)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 1: Potencia Concéntrica</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Movilidad articular dinámica (tobillo, rodilla, cadera) con apoyo asistido.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Sentadillas de despegue explosivo (fase concéntrica rápida, excéntrica de 3 s). 3 series x 10 reps.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Caminata en tándem y semitándem sobre línea recta mirando al frente (3 series x 10 m).</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 2: Paso de Recuperación</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Activación del core mediante marcha estática con elevación alta de rodilla.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Entrenamiento reactivo: perturbaciones breves e impredecibles en hombros/pelvis para forzar paso de rescate.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Elevación de talones (gastrocnemios) y puntas (tibial anterior). 3 series x 12 reps sin carga.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 3: Fuerza con Carga</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Movilidad articular dinámica y marcha estática de calentamiento.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Flexión de cadera y dorsiflexión con sobrecarga en tobillos (pesas de 0.5 a 1.5 kg). 3 series x 12 reps.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Caminata en tándem asistida sobre línea recta con transferencia de peso.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 4: Potencia Progresiva</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Activación abdominal y rotaciones articulares en bipedestación.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Sentadillas explosivas con sobrecarga (chaleco/mancuerna) y reducción de apoyo manual. 3 series x 10 reps.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Mantenimiento del equilibrio monopodal asistido (3 series x 15 s por pierna).</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 5: Reto Sensorial</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Marcha estática con aceleración y desaceleración para estimulación propioceptiva.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Caminata tándem con distracción visual (saccádicos, giros de cabeza y seguimiento de objetos). 4 series x 10 m.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Plantiflexión (elevación de talones) con pesas en tobillos. 3 series x 10 reps.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Sesión 6: Circuito Funcional</strong></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Circuito de movilidad articular general y activación cardiorrespiratoria ligera.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Circuito continuo de 3 estaciones: sentadilla explosiva, flexión de cadera con pesas y tándem en superficie blanda.</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Entrenamiento final de paso de rescate ante perturbaciones sorpresivas y vuelta a la calma.</div></div></td>
      </tr>
    </tbody>
  </table>
</div>
`;