//viewport function
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

//animations
const app = new Vue(
	{
		el:'#app',
		data:{
			caracteres: ['autonome', 'curieux', 'sérieux'],
			skills_front: [
				{
					name: 'html',
					url: './img/skills/html.svg',
					progress: '90'
				},
				{
					name: 'css',
					url: './img/skills/css.svg',
					progress: '90'
				},
				{
					name: 'js',
					url: './img/skills/javascript.svg',
					progress: '80'
				},
				{
					name: 'typescript',
					url: './img/skills/typescript.svg',
					progress: '40'
				},
				{
					name: 'jquery',
					url: './img/skills/jquery.png',
					progress: '75'
				}
			],
			skills_back:[
				{
					name: 'nodejs',
					url: './img/skills/nodejs.svg',
					progress: '80'
				},
				{
					name: 'php',
					url: './img/skills/php.svg',
					progress: '20'
				},
				{
					name: 'mongodb',
					url: './img/skills/mongodb.png',
					progress: '80'
				},
				{
					name: 'mysql',
					url: './img/skills/mysql.svg',
					progress: '65'
				}
			],
			skills_frameworks : [
				{
					name:'react',
					url : './img/skills/react.svg',
					progress: '40'
				},
				{
					name:'vue',
					url : './img/skills/vue.svg',
					progress: '65'
				},
				{
					name:'bootstrap',
					url:'./img/skills/bootstrap.png',
					progress: '85'
				}
			],
			diploma: [
				{
					id:'1',
					name: 'Developpeur web',
					year: '2020 - en cours',
					place:'à distance',
					school : 'OpenClassrooms',
					description:`Titre de développeur Web (RNCP13595 / BAC+2)
					Formation démarrée en autodidacte avant d’être
					accompagné par un mentor, actuellement à 80 % du
					parcours
					 `,
					img:'./img/diploma/code.svg',
					alt:'coder'
				},
				{
					id:'2',
					name: 'Licence en LEA anglais-chinois',
					year: 'Juillet 2019',
					school : 'UPJV',
					place:'Amiens 80000',
					description:`Obtention de la licence en langues étrangères appliquées sur le parcours anglais-chinois
					Obtenu avec mention.
					 `,
					 img:'./img/diploma/languages.svg',
					 alt:'langues'
				},
				{
					id:'3',
					name: 'Baccalauréat Scientifique',
					year: 'Juillet 2016',
					school : 'Lycée Robert de Luzarches',
					place:'Amiens 80000',
					description:`Obtention du baccalauréat scientifique en spécialité mathématique.
					Obtenu avec mention.
					 `,
					 img:'./img/diploma/math.svg',
					 alt:'mathématiques'
				}
			],
			services : [
				{
					name: 'Création et refonte de site web',
					imgUrl: './img/services/www.svg',
					alt:'Création et refonte de site web sur-mesure'
				},
				{
					name:"Création d'api sous NodeJS",
					imgUrl:'./img/services/api.svg',
					alt:'API'
				},
				{
					name:'Référencement SEO',
					imgUrl:'./img/services/SEO.png',
					alt:'référencement  et optimisation SEO'
				},
				{
					name:'Création de site web WordPress',
					imgUrl:'./img/services/wordpress.svg',
					alt:'Wordpress'
				}

			]
		}
	}
)