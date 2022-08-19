import styled from "styled-components";
import { WidgetTitle } from "../../components/Sidebar";

export const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	/* height: 100%; */
`

//USER HEADER (criar estilo aqui)

export const UserHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	height: auto;
	background-color: gray;
`

export const UserMenu = styled.section`
	background-color: #edf2f6;
	display: flex;
	width: 100%;
	padding: 3.5rem;
`

export const UserMenuList = styled.nav`
	background-color: #FFFFFF;
	width: 100%;
	height: auto;
`

export const MenuList = styled.ul`
	display: flex;
	flex-flow: wrap;
	list-style: none;
	width: 100%;
	height: 100%;
	background-color: red;

	li {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 10rem;
		height: 10rem;
		background-color: darkred;
		border: 1px solid;
		gap: 1rem;
		cursor: pointer;

		.user-menu-icon {
			font-size: 2.5rem;
		}

		span {
			font-size: 1.4rem;
			font-weight: 700;
		}
	}
`;

export const UserContent = styled.article`
	display: grid;
	grid-template-columns: 3fr 1fr;
	width: 100%;
	height: auto;
	padding: 3.5rem;
	background-color: #edf2f6;
	color: #888da8;
	gap: 3rem;
`;

export const UserMainContent = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;
`;





//Inicio estilização do Slider

export const Slider = styled.section`
	margin: 0 auto;
  width: 800px;
	width: 100%;
  height: 250px;
  overflow: hidden;
	position: relative;
	border-radius: 0.5rem;
`;

export const Slides = styled.div`
	/* width: 400%; */
	width: 400%;
  height: 250px;
  display: flex;

	input {
		display: none;
	}

	#radio1:checked ~ .first {
		margin-left: 0;
	}

	#radio2:checked ~ .first {
		margin-left: -25%;
	}

	#radio3:checked ~ .first {
		margin-left: -50%;
	}

	#radio4:checked ~ .first {
		margin-left: -75%;
	}

	#radio1:checked ~ .first {
		background-color: #FFFFFF;
	}
`;

// export const InputSlides = styled.input`
// 	display: none;

// 	#radio1:checked ~ .first {
// 		margin-left: 0;
// 	}

// 	#radio2:checked ~ .first {
// 		margin-left: -25%;
// 	}

// 	#radio3:checked ~ .first {
// 		margin-left: -50%;
// }

// 	#radio4:checked ~ .first {
// 		margin-left: -75%;
// 	}

// 	#radio1:checked ~, 
// 	#radio2:checked ~, 
// 	#radio3:checked ~,
// 	#radio4:checked ~ {
//   	background-color: #fff;
// 	}

// 	#radio1 {
// 		:checked {
// 			background-color: blue;
// 		}
// 	}

// `;

export const SlideItems = styled.div`
	width: 25%;
  position: relative;
  transition: 1s;

	img {
		/* width: 800px; */
		/* width: 100%; */
		object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
	}
`;

export const AutoNavigation = styled.div`
	display: flex;
  justify-content: center;
  width: 800px;
  width: 100%;
	position: absolute;
  margin-top: 360px;

	div {
		border: 2px solid red;
		padding: 5px;
		border-radius: 10px;

		:not(:last-child) {
			margin-right: 30px;
		}

		:checked {
			background-color: #FFFFFF;
		}
	}
`;

export const ManualNavigation = styled.div`
	position: absolute;
  /* width: 800px;
	width: 100%; */
  display: flex;
  justify-content: center;
  margin-top: -40px;
	left: 50%;
	right: 50%;

	.btn-manual {
		border: 2px solid #fff;
		padding: 5px;
		border-radius: 10px;
		cursor: pointer;

		:not(:last-child){
			margin-right: 30px;
		}

		:hover {
			background-color: rgba(255, 255, 255, 0.6);
		}

	}
`

//FIM da área do slider

export const Project = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: #FFFFFF;
`;

export const UserSectionTitle = styled(WidgetTitle)`
	color: red;
`;

export const ProjectContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export const ProjectTemplate = styled.div`
	background-image: url(${props => props.template_cover});
	background-position: center;
	background-size: cover;
	height: 50rem;
	width: 100%;
`;

export const ProjectInfo = styled.div`
	width: 100%;
	padding: 3rem;
`;

export const ProjectHead = styled.div`

`;

export const ProjectType = styled.a`

`;

export const ProjectTitle = styled.h2`

`;

export const ProjectCategory = styled.p`

`;

export const ProjectLink = styled.span`
	cursor: pointer;

	:hover {
		text-decoration: underline;
	}
`;

export const ProjectDescription = styled.div`

`;

export const ProjectTags = styled.div`

`;

//FIM área do project

export const Skills = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: #FFFFFF;
`;

export const SkillProgressBar = styled.div`
	width: 100%;
	position: relative;
	height: 3rem;
	overflow-x: hidden;
`

export const SkillBar = styled.div`
	width: 82%;
	background-color: red;
	height: 3rem;
	animation: skillbar .6s linear;

	@keyframes skillbar {
		0% {
			transform: translateX(-${props => props.percentAnimation}%);
		}

		100% {
			transform: translateX(0);
		}
	}
`;

export const SkillBarPercent = styled.div`
	position: absolute;
	right: 0;
	top: 0;
`;

//FIM Skills area

export const Portfolio = styled.section`

`;

export const Services = styled.section`

`;

export const Reviews = styled.section`

`;

//USER SIDEBAR (criar estilo aqui)

export const UserSidebar = styled.aside`
		display: grid;
		grid-template-columns: 1fr;
`