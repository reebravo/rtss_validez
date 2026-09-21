// tablas_contenido.js

const TABLA_PSICO = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Categoría RTSS</th>
        <th>Target Proximal (Medible)</th>
        <th>Ingredients (BCTs / Acciones)</th>
        <th>Mecanismo de Acción (MoA)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Representation</strong><br>(Representaciones Cognitivo-Afectivas)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Aumento de la autoeficacia percibida para el control del equilibrio y reducción de la ansiedad/pánico anticipatorio.<br><br><em>Medición: Cuestionario SARC-F y Escala FES-I (&lt; 23 puntos).</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>BCT 1.1 / 2.2:</strong> Auto-registro de factores de riesgo personales y retroalimentación estructurada.</li><li><strong>BCT 11.2:</strong> Reestructuración cognitiva de pensamientos catastrofistas y técnica de respiración diafragmática (6 ciclos/min).</li><li><strong>BCT 8.1:</strong> Imaginería motora y ensayo mental guiado de movilidad segura.</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Modulación de la activación autonómica simpática y reestructuración del procesamiento de amenaza percibida.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Skill / Action</strong><br>(Habilidades Físicas y Conductuales)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Adquisición de la secuencia motora autónoma de levantamiento post-caída y comunicación asertiva de auxilio desde el suelo.<br><br><em>Medición: Lista de cotejo técnica del levantamiento (100% de ejecución autónoma).</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>BCT 8.1:</strong> Práctica/Ensayo conductual repetido de las fases del levantamiento (prono &rarr; cuatro puntos &rarr; apoyo &rarr; bipedestación).</li><li><strong>BCT 4.1 / 1.2:</strong> Instrucción detallada paso a paso y fijación de metas por fases.</li><li><strong>BCT 1.4:</strong> Planificación de la acción y ensayo de comunicación verbal asertiva de emergencia.</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Automatización de patrones motores de seguridad e incremento del juicio de capacidad personal frente al congelamiento (*freezing*).</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Environment Restructuring</strong><br>(Entorno Directo)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Eliminación de barreras físicas y mitigación de riesgos ambientales en la vivienda.<br><br><em>Medición: Lista de verificación HOME FAST (reducción a 0 ítems de alto riesgo).</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>BCT 12.1:</strong> Reestructuración del ambiente físico (despeje de rutas, retiro de alfombras y cables).</li><li><strong>BCT 12.5:</strong> Adición de objetos y pistas (barras de sujeción, material antideslizante, iluminación de alta intensidad).</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Modificación del contexto físico para reducir la demanda biomecánica sobre el control postural durante las AVD.</div></div></td>
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
        <th>Categoría RTSS</th>
        <th>Target Proximal (Medible)</th>
        <th>Ingredients (BCTs / Acciones)</th>
        <th>Mecanismo de Acción (MoA)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Representation & Knowledge</strong><br>(Conocimiento y Conciencia)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Sistematización del inventario de fármacos e incremento de la comprensión sobre posología, indicaciones y síntomas de riesgo.<br><br><em>Medición: Bitácora unificada completa (100%) y cuestionario de conocimientos (&ge; 80%).</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>BCT 1.1 / 2.2:</strong> Inspección física ("Brown Bag Test"), registro diario y retroalimentación de fechas/recetas.</li><li><strong>BCT 5.1:</strong> Psicoeducación sobre efectos, interacciones y riesgos de automedicación.</li><li><strong>BCT 2.3:</strong> Aplicación de la Escala de Downton y registro de presión arterial ortostática.</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Organización de la información, reducción de errores por duplicidad y prevención de episodios de hipotensión u ortostatismo.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Habit / Action</strong><br>(Regulación Conductual del Paciente)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Aumento de la adherencia terapéutica y consolidación de rutinas de dosificación física/digital.<br><br><em>Medición: Escala MMAS-8 (&ge; 8 puntos) y llenado autónomo del pastillero (100%).</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>BCT 12.5:</strong> Implementación de pastilleros semanales, alarmas y recordatorios visuales.</li><li><strong>BCT 8.1 / 1.1:</strong> Simulación en tiempo real de tomas en diversos contextos (ayuno, viajes, comidas).</li><li><strong>BCT 1.4:</strong> Planificación de intenciones ("Si olvido una toma, haré Y").</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Soporte ambiental a la memoria prospectiva, establecimiento de asociaciones estímulo-respuesta y automatización de la toma.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Organ Function</strong><br>(Ajuste Médico Fisiológico)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Reducción de la carga colinérgica, sedante y depresora del SNC mediante desprescripción supervisada.<br><br><em>Medición: Escala ACB (Anticholinergic Cognitive Burden &lt; 2 puntos).</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>BCT 3.1:</strong> Alianza interprofesional y propuesta técnica de reducción/retiro gradual dirigida al médico tratante.</li><li><strong>BCT 11.2:</strong> Reestructuración cognitiva de temores respecto al retiro de psicofármacos/sedantes.</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Restablecimiento de la neurotransmisión central, mejora de la alerta y estabilización del control barorreflejo postural.</div></div></td>
      </tr>
    </tbody>
  </table>
</div>
`;

const TABLA_SUPLEMENTACION = `
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Categoría RTSS</th>
        <th>Target Proximal (Medible)</th>
        <th>Ingredients (Dosis / Acciones Directas)</th>
        <th>Mecanismo de Acción (MoA)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Organ Function</strong><br>(Bioquímica y Homeostasis Tisular)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Optimización del estado nutricional global, normalización de 25-OH vitamina D3 y fortalecimiento del acoplamiento neuromuscular.<br><br><em>Medición: MNA-SF (&ge; 12 puntos) y Vitamina D sérica (30–50 ng/mL).</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>Colecalciferol (Vit D3):</strong> 1,000–2,000 UI/día V.O.</li><li><strong>Calcio (Citrato/Carbonato):</strong> 1,000–1,200 mg/día (dieta + suplemento).</li><li><strong>Potasio:</strong> ~4,700 mg/día mediante optimización de dieta rica en micronutrientes.</li><li><strong>Heliofototerapia:</strong> Exposición solar directa 15–20 min/día en extremidades.</li><li><strong>BCT 5.1 / 1.4:</strong> Taller de diseño de menú semanal balanceado y listas de cotejo en cocina.</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Absorción intestinal de calcio mediada por VDR, mineralización de la matriz ósea y mantenimiento del potencial de reposo en la membrana miocítica.</div></div></td>
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
        <th>Categoría RTSS</th>
        <th>Target Proximal (Medible)</th>
        <th>Ingredients (Dosificación de Prescripción)</th>
        <th>Mecanismo de Acción (MoA)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Organ Function</strong><br>(Sistema Musculoesquelético y Neuromuscular)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Incremento de la fuerza máxima, potencia concéntrica explosiva y torque articular en MMII.<br><br><em>Medición: Test Sit-to-Stand 30s (&gt; 14 reps) y Dinamometría (+15%).</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>Entrenamiento de Resistencia:</strong> 3 series x 8–12 reps al 70–85% 1RM; 3 días/semana.</li><li><strong>Entrenamiento de Potencia:</strong> Fase concéntrica a máxima velocidad intencional, excéntrica de 2–3 s.</li><li><strong>Sobrecarga Mecánica:</strong> Pesas de tobillo (0.5 a 1.5 kg), bandas y peso corporal.</li><li><strong>Descanso:</strong> 2 min entre series (recuperación de ATP-PC).</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Reclutamiento de unidades motoras de umbral alto, aumento de la tasa de desarrollo de fuerza (RFD) e hipertrofia de fibras Tipo IIa/IIx.</div></div></td>
      </tr>
      <tr>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><strong>Movement Skill</strong><br>(Control Postural y Equilibrio Reactivo)</div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Optimización del equilibrio reactivo/proactivo, reducción de la latencia del paso de rescate y reconfiguración sensorial.<br><br><em>Medición: Mini-BESTest y Escala de Berg.</em></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;"><ul><li><strong>Perturbaciones Controladas:</strong> Empujes multidireccionales breves e impredecibles en pelvis/hombros.</li><li><strong>Reto Sensorial:</strong> Marcha en tándem/semitándem sobre línea recta con distracción visual (saccádicos/giros cefálicos).</li><li><strong>Integración en Circuito:</strong> Estaciones continuas combinando potencia, carga y balance.</li></ul></div></div></td>
        <td class="selected"><div class="wrap"><div style="margin: 10px 5px;">Activación de respuestas posturales automáticas por vía vestibular/propioceptiva y ponderación sensorial (*sensory reweighting*).</div></div></td>
      </tr>
    </tbody>
  </table>
</div>
`;