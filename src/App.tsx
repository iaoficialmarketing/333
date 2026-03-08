import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Star, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Send, Phone, Target, Award, DollarSign, Camera, MessageCircle, Mail, Eye, FileText, Lock, Rocket, Diamond, User, Building, Sparkles, Zap, Crown, Heart, ThumbsUp } from 'lucide-react';
import Chatbot from './components/Chatbot';
import CookiesPopup from './components/CookiesPopup';
import CookiesCustomizer from './components/CookiesCustomizer';

interface FormData {
  nombre: string;
  edad: string;
  ciudad: string;
  experiencia_of: string;
  seguidores_instagram: string;
  seguidores_tiktok: string;
  motivacion: string;
  disponibilidad: string;
  ingresos_actuales: string;
  objetivos_ingresos: string;
  telefono: string;
  tiene_contenido: string;
  dispuesta_promocion: string;
  comentarios: string;
}

const PolicyModal = React.memo(({ type, onClose }: { type: string; onClose: () => void }) => {
  const getPolicyContent = useCallback(() => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Política de Privacidad',
          content: \`
            <h3>1. INFORMACIÓN AL USUARIO</h3>
            <p>MYONLYFXNS, en adelante RESPONSABLE, es el Responsable del tratamiento de los datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos.</p>

            <h3>2. FINAL IDAD DEL TRATAMIENTO DE DATOS</h3>
            <p>Los datos personales se tratarán para las siguientes finalidades:</p>
            <ul>
              <li>Gestión de consultas y solicitudes de información</li>
              <li>Prestación de servicios de agencia OF</li>
              <li>Comunicaciones comerciales y promocionales</li>
              <li>Cumplimiento de obligaciones legales</li>
            </ul>

            <h3>3. BASE LEGAL PARA EL TRATAMIENTO</h3>
            <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado y la ejecución de un contrato.</p>

            <h3>4. CONSERVACIÓN DE DATOS</h3>
            <p>Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.</p>

            <h3>5. DERECHOS DEL USUARIO</h3>
            <p>El Usuario puede ejercer sus derechos de acceso, rectificación, portabilidad y supresión de sus datos y a la limitación u oposición a su tratamiento dirigiéndose a agenciaonlyfxns@gmail.com</p>

            <h3>6. CONTACTO</h3>
            <p>Para cualquier consulta sobre esta Política de Privacidad, puede contactarnos en agenciaonlyfxns@gmail.com</p>
          \`
        };
      case 'legal':
        return {
          title: 'Aviso Legal',
          content: \`
            <h3>1. DATOS IDENTIFICATIVOS</h3>
            <p>En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
            <p>Denominación social: MYONLYFXNS</p>
            <p>Email: agenciaonlyfxns@gmail.com</p>

            <h3>2. OBJETO</h3>
            <p>El presente aviso legal regula el uso del sitio web de MYONLYFXNS, que pone a disposición de los usuarios de Internet.</p>

            <h3>3. CONDICIONES DE USO</h3>
            <p>El acceso y uso de este sitio web implica la aceptación expresa y sin reservas de todas las condiciones establecidas en este Aviso Legal.</p>

            <h3>4. RESPONSABILIDAD</h3>
            <p>El propietario del sitio web no se hace responsable de la información publicada en su web siempre que no tenga conocimiento efectivo de que esta actividad o información almacenada es ilícita.</p>

            <h3>5. PROPIEDAD INTELECTUAL</h3>
            <p>Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece al propietario del sitio web.</p>

            <h3>6. CONTACTO</h3>
            <p>Para cualquier consulta sobre este Aviso Legal, puede contactarnos en agenciaonlyfxns@gmail.com</p>
          \`
        };
      case 'cookies':
        return {
          title: 'Política de Cookies',
          content: \`
            <h3>1. ¿QUÉ SON LAS COOKIES?</h3>
            <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.</p>

            <h3>2. TIPOS DE COOKIES QUE UTILIZAMOS</h3>
            <p><strong>Cookies técnicas:</strong> Son necesarias para el funcionamiento del sitio web.</p>
            <p><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo los usuarios interactúan con el sitio web.</p>
            <p><strong>Cookies de personalización:</strong> Permiten recordar sus preferencias.</p>

            <h3>3. FINALIDAD DE LAS COOKIES</h3>
            <ul>
              <li>Permitir la navegación y uso del sitio web</li>
              <li>Mejorar el funcionamiento del sitio web</li>
              <li>Analizar el uso del sitio web</li>
              <li>Personalizar la experiencia del usuario</li>
            </ul>

            <h3>4. GESTIÓN DE COOKIES</h3>
            <p>Puede configurar su navegador para aceptar o rechazar cookies. La desactivación de cookies puede afectar al funcionamiento del sitio web.</p>

            <h3>5. COOKIES DE TERCEROS</h3>
            <p>Este sitio web puede utilizar servicios de terceros que instalan cookies en su dispositivo para mejorar nuestros servicios.</p>

            <h3>6. CONTACTO</h3>
            <p>Para cualquier consulta sobre esta Política de Cookies, puede contactarnos en agenciaonlyfxns@gmail.com</p>
          \`
        };
      default:
        return { title: '', content: '' };
    }
  }, [type]);

  const policy = getPolicyContent();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">{policy.title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-blue-200 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div
            className="prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: policy.content }}
          />
        </div>
      </div>
    </div>
  );
});

export default App;