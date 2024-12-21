export const tabs = [
	{ name: "Inicio", href: "/" },
	{ name: "Centro de ayuda", href: "/centro-de-ayuda" },
	{ name: "Atención legal", href: "/atencion-legal" },
	{ name: "Ventanilla virtual", href: "/ventanilla-virtual" },
	{ name: "Capacitaciones", href: "/capacitaciones" },
	{ name: "Abogados", href: "/abogados" },
];

export const heroData = [
	{
		id: tabs[0].href,
		title: "Igualítika: Tu comunidad, tus derechos, tu poder.",
		subtitle:
			"Empoderando a la población a través de servicios legales inclusivos.",
	},
	{
		id: tabs[1].href,
		title: "Explora nuestro centro de ayuda",
		subtitle: "¿Necesitas resolver dudas legales?",
		callToAction: "¡Habla con el asistente virtual!",
	},
	{
		id: tabs[2].href,
		title: "Consulta un abogadx",
		subtitle: "Un proceso simple y humano para brindarte apoyo legal.",
		callToAction: "¡Hablemos!",
		smallText: "30 minutos gratis.",
	},
	{
		id: tabs[3].href,
		title: "Ventanilla Virtual",
		subtitle: "Tu centro de servicios legales",
		smallerText: "Dale seguimiento a tu trámite",
		form: ["Número de seguimiento", "DUI"],
		callToAction: "Buscar",
	},
	{
		id: tabs[4].href,
		title: "Capacitaciones",
		subtitle: "Tu espacio de formación inclusiva",
	},
	{
		id: tabs[5].href,
		title: "Únete a la Red de Inclusión Legal",
		subtitle:
			"Sigue estos simples pasos y conviértete en uno de los abogadxs de nuestra red",
		callToAction: "Regístrate",
	},
];

export const legalCardData = [
	{
		id: 1,
		title: "Consulta gratis",
		context: [
			{
				id: 1,
				subtitle: "30 minutos gratis",
				text: "Tu primer consulta no tiene costo.",
			},
			{
				id: 2,
				subtitle: "Queremos ayudarte",
				text: "Cuéntanos tus necesidades.",
			},
			{
				id: 3,
				subtitle: "Atención inclusiva",
				text: "Todxs son bienvenidxs.",
			},
		],
		callToAction: "¡Hablemos gratis!",
	},
	{
		id: 2,
		title: "Igualitika+",
		context: [
			{
				id: 1,
				subtitle: "¿No encuentras lo que necesitas?",
				text: "Brindados más detalles.",
			},
			{
				id: 2,
				subtitle: "Planificación y estrategia",
				text: "Diseñamos un plan a tu medida.",
			},
			{
				id: 3,
				subtitle: "$45 USD",
				text: "Tarifa transparente. Sin sorpresas.",
			},
		],
		callToAction: "¡Inicia tu trámite!",
	},
];
