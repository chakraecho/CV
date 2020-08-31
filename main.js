//viewport function
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

//animations
const profil = new Vue(
	{
		el:'#a_propos',
		data:{
			caracteres: ['autonome', 'curieux', 'sérieux'],
			hobbies:[
				{
					name:"l'histoire",
					img:'./img/profil/history.svg',
					alt:'j\'aime l\'histoire'
				},
				{
					name:"le travail d'équipe",
					img:'./img/profil/teamwork.svg',
					alt:"j'aime le travail d'équipe"
				},
				{
					name:'Escape From Tarkov',
					img:'./img/profil/eft.png',
					alt:"j'aime jouer à escape from tarkov"
				},
				{
					name:'cuisiner',
					img:'./img/profil/baking.svg',
					alt:"j'aime cuisiner"
				}
			]
		}
	}
)
const skills = new Vue({
	el:'#competence',
	data:{
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
		]
	},
	methods:{
		isInViewport(elem) {
			var distance = elem.getBoundingClientRect();
			return (
				distance.top >= 0 &&
				distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			);
		}
	},
	mounted: function(){
		window.addEventListener('scroll', ()=>{
			for (let skill of this.skills_front){
				if(this.isInViewport(document.querySelector('#'+ skill.name))){
					document.querySelector('#'+skill.name).classList.add('animation_progress_'+skill.progress)
				}
			};
			for (let skill of this.skills_back){
				if(this.isInViewport(document.querySelector('#'+ skill.name))){
					document.querySelector('#'+skill.name).classList.add('animation_progress_'+skill.progress)
				}
			};
			for (let skill of this.skills_frameworks){
				if(this.isInViewport(document.querySelector('#'+ skill.name))){
					document.querySelector('#'+skill.name).classList.add('animation_progress_'+skill.progress)
				}
			}
		})
	}
})

const diploma = new Vue({
	el:'#parcours',
	data:{
		diploma: [
			{
				id:'1',
				name: 'Developpeur web',
				year: '2020 - en cours',
				place:'à distance',
				school : 'OpenClassrooms',
				description:`Titre de développeur Web (RNCP13595 / BAC+2)
				Formation démarrée en autodidacte avant d’être
				accompagné par un mentor, actuellement à 85 % du
				parcours
				 `,
				img:'./img/diploma/code.svg',
				alt:'coder',
				show : true
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
		]
	}
})

const portfolio = new Vue({
	el:'#portfolio',
	data:{
		portfolio:{
			main: [{
				name:'Gestionnaire de compte-rendu pour le club informatique de Polytech Lille',
				role:'Dev Front',
				url:'https://gitlab.com/ClubInfoPolytechLille/gestionnaire-de-comptes-rendus',
				imgUrl:'./img/portfolio/GCR.webp',
				alt:'page de connexion du GCR'
			}],
			OP:[{
				name:'Intégration de maquette en CV responsive',
				urlHost:'https://github.com/chakraecho/P2_Huang_Julien',
				imgUrl:'./img/portfolio/projet_2_openclassrooms.webp',
				alt:"capture d'écran du projet 2 de Openclassrooms",
			},
			{
				name:'Intégration de maquette sur un site multi-page',
				urlHost:'https://www.github.com/chakraecho/P3_Ohmyfood',
				imgUrl:'./img/portfolio/projet_3_oh_my_food.webp',
				alt:'capture d\'écran du projet 3 de Openclassrooms',
			},
			{
				name:'Optimisation SEO et accessibilité d\'un site web',
				urlHost:'https://www.github.com/chakraecho/P4_Huang_Julien/',
				imgUrl:'./img/portfolio/projet_4_openclassrooms.webp',
				alt:'capture d\'écran du projet 4 de Openclassrooms',
			},
			{
				name:'Création d\'un MVP de site E-commerce',
				urlHost:'https://github.com/chakraecho/P5_Orinobear',
				imgUrl:'./img/portfolio/projet_5_openclassrooms.webp',
				alt:'capture d\'écran du projet 5 de Openclassrooms',
			},
			{
				name:'Création d\'une API sous NodeJS',
				urlHost:'https://github.com/chakraecho/P6_OC_so_peckocko',
				imgUrl:'./img/portfolio/projet_6_openclassrooms.webp',
				alt:'capture d\'écran du projet 6 de Openclassrooms',
			}

		]
		}
	}
})

const services = new Vue({
	el:'#services',
	data:{
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
			},
			{
				name:'Création de site e-commerce avec Prestashop',
				imgUrl:'./img/services/prestashop.svg',
				alt:'prestashop'
			}
	
		]
	}	
})

function sendForm(e){
	e.preventDefault();
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const object = document.querySelector('#object').value;
	const message = document.querySelector('#message').value;
	console.log(email)
	const sendMail = document.getElementById('sendMail')
	let data = new URLSearchParams()
	data.append('name', name)
	data.append('object', object)
	data.append('email', email)
	data.append('message',message)
	console.log(data)
	fetch('/mail.php',{
		method:'POST',
		body: data,
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
	.then(response => {
		console.log(response)
		response.text()})
	.then(result => {
		console.log(result)
		document.getElementById('alert-mail').innerHTML = result
	})
	.catch(error => console.log('error', error));
}

