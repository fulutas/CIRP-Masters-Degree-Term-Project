import React from 'react';
import itIcon from "../assets/it.svg"
import bmIcon from "../assets/business-manager.svg"
import hrIcon from "../assets/human-resources.svg"
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	const unitList = [
		{ unit: "it", title: "Bilgi İşlem", icon: itIcon },
		{ unit: "bm", title: "Üst Yönetim", icon: bmIcon },
		{ unit: "hr", title: "İnsan Kaynakları", icon: hrIcon },
	]

	const handleUnitClick = (unit) => {
		navigate(`events/${unit.unit}`)
	}

	return (
		<div id="home" className="wrapper">
			<section className="project-info">
				<h2 className="title">Proje Açıklaması</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</section>

			<section className="unit-selection">
				<h2 className="title">Departman Seçimi</h2>
				<div className="unit-list">
					{unitList.map((unit, index) => {
						return (
							<div key={index} className="unit" onClick={() => handleUnitClick(unit)}>
								<img src={unit.icon} width="300px" height="300px" className='hrIcon' alt="hrIcon" />
								<h2>{unit.title}</h2>
							</div>
						)
					})}
				</div>
			</section>
		</div>
	);
}

export default Home;
