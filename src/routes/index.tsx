import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Zap, ShieldCheck, Smartphone, PlayCircle, BookOpen, Check, ChevronDown, Clock3, Award, FileText, Lightbulb, Wrench, PlugZap, ClipboardCheck, ArrowRight, LockKeyhole, Cable, CircuitBoard, GraduationCap, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electricidad Residencial desde Cero | Formación Online" },
      { name: "description", content: "Aprende electricidad residencial paso a paso: circuitos, instalaciones, herramientas y seguridad eléctrica. Formación online en español." },
      { property: "og:title", content: "Electricidad Residencial desde Cero" },
      { property: "og:description", content: "Formación práctica de electricidad residencial en español, desde los fundamentos." },
    ],
  }),
  component: Index,
});

const offer = {
  basic: "", // Añade aquí la URL real de checkout.
  pro: "",   // Añade aquí la URL real de checkout.
};
const lessons = [
  { title: "Fundamentos de electricidad", desc: "Voltaje, corriente, resistencia y conceptos esenciales.", icon: Zap },
  { title: "Herramientas y medición", desc: "Conoce los instrumentos y sus usos de forma segura.", icon: Wrench },
  { title: "Circuitos residenciales", desc: "Comprende interruptores, tomacorrientes y conexiones.", icon: PlugZap },
  { title: "Diagramas e instalaciones", desc: "Aprende a interpretar esquemas y planificar circuitos.", icon: CircuitBoard },
  { title: "Protección y seguridad", desc: "Prevención de riesgos, protecciones y buenas prácticas.", icon: ShieldCheck },
  { title: "Revisión de instalaciones", desc: "Conceptos para identificar problemas comunes.", icon: ClipboardCheck },
];
const manuals = [
  ["Guía de Electricidad Básica", "Conceptos fundamentales", "01", Zap],
  ["Circuitos e Instalaciones", "Diagramas ilustrados", "02", Cable],
  ["Herramientas y Medición", "Instrumentos esenciales", "03", Wrench],
  ["Seguridad Eléctrica", "Protección y prevención", "04", ShieldCheck],
  ["Guías y Checklists", "Material de consulta", "05", ClipboardCheck],
] as const;
const faqs = [
  ["¿Necesito tener experiencia para comenzar?", "No. La formación está pensada para personas que desean aprender los fundamentos desde cero, a su propio ritmo."],
  ["¿Cómo recibo el acceso?", "Las instrucciones de acceso se entregan por el canal informado en el checkout después de la confirmación del pago. Confirma los detalles antes de comprar."],
  ["¿Puedo estudiar desde mi celular?", "La página está preparada para dispositivos móviles. La compatibilidad de las clases dependerá del formato de entrega confirmado."],
  ["¿Cuál es la diferencia entre los planes?", "El plan básico está enfocado en el contenido principal. El plan profesional está previsto para incluir recursos complementarios; revisa los materiales confirmados en la oferta antes de comprar."],
  ["¿Incluye certificado y acceso de por vida?", "Estos beneficios están pendientes de confirmación y se indicarán expresamente cuando estén disponibles."],
  ["¿Cómo funciona la garantía?", "El plazo y las condiciones de garantía se mostrarán en el checkout de la plataforma de pago."],
  ["¿Puedo trabajar como electricista después?", "Esta formación es introductoria y no sustituye certificaciones, licencias, supervisión técnica ni los requisitos legales aplicables en tu país."],
];
function Index() {
  const [seconds, setSeconds] = useState(14 * 60 + 57);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  function buy(plan: "basic" | "pro") {
    const url = offer[plan];
    if (url) { window.location.assign(url); return; }
    document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" });
    window.alert("El enlace de compra estará disponible próximamente.");
  }
  const cta = (label = "QUIERO EMPEZAR AHORA", plan: "basic" | "pro" = "pro") => (
    <button onClick={() => buy(plan)} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#f9c62e] px-8 py-4 text-[15px] font-black text-[#142337] shadow-[0_6px_0_#c79a12] transition hover:bg-[#ffda57] active:translate-y-1 active:shadow-none">
      {label}<ArrowRight size={19} strokeWidth={2.5}/>
    </button>
  );
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#17253b] selection:bg-yellow-200">
      <div className="bg-[#f5bd20] px-3 py-2.5 text-center text-[11px] font-black tracking-[0.11em] text-[#16243a] sm:text-xs">
        FORMACIÓN ONLINE EN ESPAÑOL <span className="mx-1 opacity-50">•</span> CONOCE LOS PLANES <span className="mx-1 opacity-50">•</span> {time}
      </div>
      <header className="bg-white/95 border-b border-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-2 font-extrabold tracking-tight"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#182b46] text-[#f9c62e]"><Zap fill="currentColor" size={22}/></span><span className="leading-tight text-sm sm:text-base">ELECTRICIDAD<span className="block text-[10px] font-semibold tracking-[.18em] text-slate-500">RESIDENCIAL</span></span></a>
          <a href="#planes" className="rounded-lg border border-[#172b47] px-4 py-2 text-xs font-bold text-[#172b47] hover:bg-slate-50">VER PLANES</a>
        </div>
      </header>
      <section id="inicio" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#dce4ed_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-9 px-5 pb-16 pt-12 md:grid-cols-2 md:gap-12 md:py-20">
          <div className="text-center md:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-[#fff8df] px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-amber-800"><Zap size={14}/> Formación práctica 100% online</div>
            <h1 className="text-[35px] font-black leading-[1.09] tracking-[-.045em] text-[#132742] sm:text-[48px] lg:text-[57px]">Conviértete en un experto en <span className="text-[#dd9b00]">Electricidad Residencial</span> desde cero</h1>
            <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-slate-600 md:mx-0 md:text-lg">Aprende los fundamentos, circuitos, herramientas e instalaciones residenciales con una formación clara, organizada y paso a paso.</p>
            <div className="mt-8">{cta()}</div>
            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 md:justify-start"><span className="inline-flex items-center gap-1"><Smartphone size={14}/> Aprende a tu ritmo</span><span className="inline-flex items-center gap-1"><LockKeyhole size={14}/> Pago seguro mediante checkout</span></p>
          </div>
          <div className="relative mx-auto w-full max-w-[510px]" aria-label="Vista ilustrativa de los módulos de la formación">
            <div className="absolute -right-6 top-0 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl"/>
            <div className="absolute -bottom-8 left-0 h-36 w-36 rounded-full bg-blue-300/30 blur-3xl"/>
            <div className="relative rounded-[30px] bg-[#142a46] p-5 shadow-[0_24px_70px_rgba(20,42,70,.22)] sm:p-7">
              <div className="flex items-center justify-between border-b border-white/15 pb-4 text-white"><div className="flex items-center gap-2 text-xs font-bold tracking-[.18em]"><Zap className="text-[#f9c62e]" size={23}/> FORMACIÓN COMPLETA</div><span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px]">ONLINE</span></div>
              <div className="py-8 text-center"><div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#f6c02a] bg-[#233e5c] text-[#ffcc34]"><Lightbulb size={53} strokeWidth={1.8}/></div><div className="text-[31px] font-black leading-none text-white sm:text-[39px]">ELECTRICIDAD<span className="mt-1 block text-[#ffd04c]">RESIDENCIAL</span></div><p className="mt-3 text-sm font-medium tracking-widest text-slate-300">DESDE CERO</p></div>
              <div className="grid grid-cols-3 gap-2">{[{icon:PlugZap,label:"CIRCUITOS"},{icon:Wrench,label:"HERRAMIENTAS"},{icon:ShieldCheck,label:"SEGURIDAD"}].map(({icon:Icon,label})=><div key={label} className="rounded-xl border border-white/10 bg-white/10 px-2 py-4 text-center"><Icon className="mx-auto mb-2 text-[#ffd04c]" size={26}/><div className="text-[9px] font-extrabold text-white sm:text-[10px]">{label}</div></div>)}</div>
            </div>
            <div className="absolute -bottom-5 -right-2 rounded-xl bg-white px-4 py-3 shadow-xl sm:-right-5"><div className="flex items-center gap-2 text-[11px] font-bold"><Check className="text-green-600" size={18}/> Aprende paso a paso</div></div>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-100 bg-[#f1f5f9] py-5"><div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-3 px-5 text-xs font-bold text-[#34465e] sm:text-sm">{["Contenido en español","Aprendizaje paso a paso","Desde nivel principiante","Estudia a tu ritmo"].map(x=><span key={x} className="inline-flex items-center gap-2"><Check size={17} className="text-green-600"/>{x}</span>)}</div></section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.2em] text-[#be8600]">Tu formación completa</span><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Todo lo que necesitas para comenzar a entender la electricidad residencial</h2><p className="mt-4 text-slate-600">Un recorrido organizado por los principales conocimientos que necesitas para dar tus primeros pasos.</p></div>
        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{lessons.map(({title,desc,icon:Icon})=><article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff4c8] text-[#9b7300]"><Icon size={25}/></span><h3 className="text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p></article>)}</div>
      </section>
      <section className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.2em] text-[#be8600]">Material de apoyo</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Guías, diagramas y materiales de consulta</h2><p className="mt-4 text-slate-600">Así se puede organizar el material complementario del Plan Profesional. Las piezas definitivas se publicarán cuando se confirme su contenido.</p></div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">{manuals.map(([title,subtitle,no,Icon])=><div key={no} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><div className="relative flex aspect-[3/4] flex-col justify-between bg-[#173657] p-3 text-white sm:p-4"><div className="flex items-center justify-between text-[9px] font-extrabold tracking-widest text-[#fbd04d]">GUÍA VISUAL <span>{no}</span></div><div className="flex justify-center"><Icon size={48} strokeWidth={1.4} className="text-[#ffd04c]"/></div><div><p className="text-[12px] font-black leading-tight sm:text-sm">{title.toUpperCase()}</p><div className="mt-2 h-1 w-12 rounded-full bg-[#fbc531]"/></div></div><div className="p-3"><div className="text-xs font-bold">{title}</div><div className="mt-1 text-[11px] text-slate-500">{subtitle}</div></div></div>)}</div>
        <p className="mt-5 text-center text-xs text-slate-500">Imágenes ilustrativas de presentación, no fotografías de materiales definitivos.</p>
      </div></section>
      <section className="bg-[#122942] py-16 text-white sm:py-20"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2"><div><span className="text-xs font-black tracking-[.2em] text-[#ffd04c]">APRENDIZAJE PRÁCTICO</span><h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Aprende una habilidad útil en cualquier ciudad</h2><p className="mt-5 leading-7 text-slate-300">Comprende cómo funcionan los circuitos eléctricos de una vivienda, cómo se representan en diagramas y cuáles son los cuidados esenciales antes de intervenir una instalación.</p><div className="mt-7">{cta("CONOCER LOS PLANES")}</div></div><div className="rounded-2xl border border-white/15 bg-white/5 p-6"><div className="grid grid-cols-2 gap-3">{[{icon:PlayCircle,text:"Clases y explicaciones"},{icon:BookOpen,text:"Fundamentos claros"},{icon:ShieldCheck,text:"Enfoque en seguridad"},{icon:Smartphone,text:"Aprende donde estés"}].map(({icon:Icon,text})=><div key={text} className="rounded-xl bg-white/10 p-5"><Icon className="mb-3 text-[#ffd04c]" size={29}/><span className="block text-sm font-semibold">{text}</span></div>)}</div></div></div></section>
      <section id="planes" className="bg-[#f8fafc] px-5 py-16 sm:py-24"><div className="mx-auto max-w-5xl"><div className="text-center"><span className="text-xs font-black uppercase tracking-[.2em] text-[#be8600]">Planes</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Elige cómo quieres comenzar</h2><p className="mt-3 text-slate-600">Selecciona la opción que mejor se adapte a tu aprendizaje.</p></div>
      <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2 md:items-stretch">
        <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="text-sm font-bold text-slate-500">PARA QUIEN QUIERE COMENZAR</span><h3 className="mt-2 text-2xl font-black">Plan Básico</h3><div className="mt-4 text-5xl font-black">US$ 5</div><p className="mt-2 text-xs text-slate-500">Conversión a tu moneda según el checkout.</p><div className="my-6 h-px bg-slate-200"/><ul className="flex-1 space-y-4 text-sm">{["Contenido principal de electricidad residencial","Fundamentos explicados paso a paso","Ideal para principiantes"].map(x=><li key={x} className="flex gap-3"><Check className="shrink-0 text-green-600" size={19}/>{x}</li>)}</ul><div className="mt-8"><button onClick={()=>buy("basic")} className="w-full rounded-xl border-2 border-[#173657] px-4 py-4 text-sm font-black text-[#173657] hover:bg-slate-50">EMPEZAR CON EL BÁSICO</button></div></div>
        <div className="relative flex flex-col rounded-3xl border-[3px] border-[#eeb627] bg-white p-7 shadow-xl"><span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#f4be23] px-5 py-2 text-xs font-black text-[#17253b]">FORMACIÓN COMPLETA</span><span className="mt-1 text-sm font-bold text-[#9b7300]">LA OPCIÓN MÁS COMPLETA</span><h3 className="mt-2 text-2xl font-black">Plan Profesional</h3><div className="mt-4 text-5xl font-black">US$ 13</div><p className="mt-2 text-xs text-slate-500">Conversión a tu moneda según el checkout.</p><div className="my-6 h-px bg-slate-200"/><ul className="flex-1 space-y-4 text-sm">{["Todo el contenido del Plan Básico","Propuesta de manuales y diagramas de apoyo","Guías complementarias de consulta","Material organizado para repasar conceptos","Detalles finales de los extras por confirmar"].map(x=><li key={x} className="flex gap-3"><Check className="shrink-0 text-green-600" size={19}/>{x}</li>)}</ul><div className="mt-8">{cta("QUIERO EL PLAN COMPLETO")}</div><p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-500"><LockKeyhole size={14}/> Checkout pendiente de vinculación</p></div>
      </div><p className="mt-7 text-center text-xs text-slate-500">Los beneficios, métodos de pago y condiciones se confirmarán antes de abrir las ventas.</p></div></section>
      <section className="bg-white px-5 py-16 sm:py-20"><div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_1.4fr]"><div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-[#fff2bd] text-[#a47800]"><GraduationCap size={78} strokeWidth={1.3}/></div><div><span className="text-xs font-black tracking-[.2em] text-[#be8600]">UNA BASE PARA SEGUIR APRENDIENDO</span><h2 className="mt-3 text-3xl font-black">Comienza desde cero, paso a paso</h2><p className="mt-4 leading-7 text-slate-600">No necesitas experiencia previa para aprender los conceptos. Para realizar trabajos eléctricos, sigue siempre los requisitos de capacitación, supervisión y normativa de seguridad de tu localidad.</p></div></div></section>
      <section className="bg-[#eef3f8] px-5 py-16 sm:py-20"><div className="mx-auto max-w-3xl"><div className="text-center"><span className="text-xs font-black uppercase tracking-[.2em] text-[#be8600]">Preguntas frecuentes</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Resuelve tus dudas</h2></div><div className="mt-9 space-y-3">{faqs.map(([q,a],i)=><div key={q} className="overflow-hidden rounded-xl border border-slate-200 bg-white"><button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-bold sm:text-base">{q}<ChevronDown className={`shrink-0 transition-transform ${openFaq===i?"rotate-180":""}`} size={19}/></button>{openFaq===i&&<p className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-6 text-slate-600">{a}</p>}</div>)}</div></div></section>
      <section className="bg-[#122942] px-5 py-16 text-center text-white"><div className="mx-auto max-w-2xl"><Zap className="mx-auto text-[#ffd04c]" size={36}/><h2 className="mt-5 text-3xl font-black sm:text-4xl">Da hoy el primer paso para aprender electricidad residencial</h2><p className="mt-4 text-slate-300">Explora los planes y elige cómo quieres comenzar tu formación.</p><div className="mt-7">{cta("QUIERO EMPEZAR AHORA")}</div></div></section>
      <footer className="bg-[#0b1a2c] px-5 py-8 text-center text-xs leading-6 text-slate-400"><p>© {new Date().getFullYear()} Electricidad Residencial desde Cero. Todos los derechos reservados.</p><p className="mx-auto mt-2 max-w-3xl">Contenido educativo introductorio. No habilita por sí solo para realizar instalaciones eléctricas ni sustituye certificaciones o normas de seguridad locales.</p></footer>
    </main>
  );
}
