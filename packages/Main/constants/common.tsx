import { BsFillDatabaseFill, BsNoiseReduction } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import {
  TbBrandGoogleFit,
  TbChartPie,
  TbTransform,
  TbWorldPlus,
} from "react-icons/tb";
import { TiGroup } from "react-icons/ti";

export const MENU_ITEMS = [
  {
    content: <span>SEM</span>,
    url: "/services/seo-sem",
  },
  {
    content: <span>MARKETING</span>,
    url: "/services/marketing-digital",
  },
  {
    content: <span>ECOMMERCE</span>,
    url: "/services/ecommerce",
  },
  {
    content: <span>DESARROLLO WEB</span>,
    url: "/services/diseno-web",
  },
  {
    content: <span>APPS</span>,
    url: "/services/apps",
  },
  {
    content: <span>WEB3</span>,
    url: "/services/blockchain",
  },
  {
    content: <span>CONTACTO</span>,
    url: "/contacto",
  },
];

export const SERVICE_LIST_ITEMS = [
  {
    title: "Diseño web",
    description:
      "Crea una presencia online impactante con nuestros diseños web personalizados. Haz que tu empresa destaque y atraiga a más clientes.",
    price: 1800,
    link: "/",
    logo: "/pulgar.svg",
  },
  {
    title: "Tienda online",
    description:
      "Lleva tu tienda al mundo digital con nuestra solución ecommerce. Vende más y mejor en cualquier lugar.",
    price: 2900,
    link: "/",
    logo: "/snap.svg",
  },
  {
    title: "Marketing",
    description:
      "Mejora tu presencia online con SEO y SEM. Aumenta tu visibilidad, atrae tráfico y genera más ventas.",
    price: "Consultar",
    link: "/",
    logo: "/v.svg",
  },
  {
    title: "Blockchain",
    description:
      "Desarrollamos smart contracts, NFTs y criptomonedas. Inicia tu negocio en el mundo de la tecnología blockchain.",
    price: "Consultar",
    link: "/",
    logo: "/good.svg",
  },
];

export const ServiceConnectionModule = {
  title: "Imagina, nosotros lo desarrollamos",
  description:
    "Cualquiera que sea tu necesidad tecnológica, estamos aquí para desarrollarla. Desde aplicaciones específicas hasta sistemas complejos, adaptamos nuestras soluciones a tu negocio.",
  btnTitle: "Ver más",
  btnLink: "",
  imgLink: "/technologies.png",
};

export const ServiceMktModule = {
  title: "¿Aún sin web? ¡Hazte visible con nosotros!",
  description:
    "¡Tu negocio merece brillar en el mundo digital! En la era actual, tener una presencia online no es una opción, ¡es una necesidad! Deja que mi experiencia en diseño web te ayude a destacarte y atraer más clientes. ¡Contáctame hoy mismo!",
  btnTitle: "Ver más",
  btnLink: "",
  imgLink: "/spin.png",
};

export const MainBannerText =
  "No dejes que tus ideas se queden en el papel. ¡Contáctanos ahora y juntos crearemos algo extraordinario para tu negocio!";

export const linksFooterPage = [
  {
    title: "Sobre Nosotros",
    sublinks: [
      {
        itemTitle: "¿Qué es .....?",
        itemLink: "",
      },
    ],
  },
  {
    title: "Soluciones Para",
    sublinks: [
      {
        itemTitle: "¿Qué es .....?",
        itemLink: "",
      },
    ],
  },
  {
    title: "Recursos",
    sublinks: [
      {
        itemTitle: "¿Qué es .....?",
        itemLink: "",
      },
    ],
  },
];

export const serviceWebAdvantages = [
  {
    title: "Aumento de Ventas a Través de la Web",
    description:
      "Diseñamos páginas web optimizadas para convertir visitantes en clientes, impulsando tus ventas y generando ingresos más altos.",
    icon: <MdSell color="#013e69" />,
  },
  {
    title: "Reducción de Costos Operativos",
    description:
      "Implementamos herramientas y procesos automatizados que disminuyen tus costos operativos, mejorando la eficiencia de tus recursos.",
    icon: <BsNoiseReduction color="#013e69" />,
  },
  {
    title: "Generación de Leads Calificados",
    description:
      "Creamos estrategias y formularios de captación de leads que atraen clientes potenciales interesados en tus productos o servicios.",
    icon: <TbTransform color="#013e69" />,
  },
  {
    title: "Mejora de la Tasa de Conversión de Clientes",
    description:
      "Aplicamos técnicas avanzadas de diseño y marketing digital para convertir más visitantes en clientes, aumentando tus ingresos.",
    icon: <FaMoneyBillTrendUp color="#013e69" />,
  },
  {
    title: "Incremento de la Visibilidad y Alcance del Mercado",
    description:
      "Aumentamos tu presencia en línea para alcanzar nuevos mercados y expandir tu base de clientes potenciales.",
    icon: <TbWorldPlus color="#013e69" />,
  },
  {
    title: "Fortalecimiento de la Imagen de Marca y Reputación",
    description:
      "Desarrollamos un sitio web profesional que mejora la percepción de tu marca y establece una presencia sólida en el mercado.",
    icon: <TbBrandGoogleFit color="#013e69" />,
  },
  {
    title: "Optimización del Proceso de Ventas Online",
    description:
      "Mejoramos la funcionalidad de tu web para simplificar el proceso de compra, reduciendo el abandono del carrito y aumentando las ventas.",
    icon: <TiGroup color="#013e69" />,
  },
  {
    title: "Análisis de Datos para Decisiones Estratégicas",
    description:
      "Proporcionamos informes detallados sobre el comportamiento de los usuarios, ayudándote a tomar decisiones basadas en datos para mejorar tu estrategia.",
    icon: <BsFillDatabaseFill color="#013e69" />,
  },
  {
    title: "Aumento del Retorno de Inversión (ROI) en Marketing Digital",
    description:
      "Implementamos estrategias efectivas de SEO y marketing que maximizan el retorno de inversión en tus campañas digitales.",
    icon: <SiGooglemarketingplatform color="#013e69" />,
  },
];
