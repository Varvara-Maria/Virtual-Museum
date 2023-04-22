import React from 'react';
import '../KosivDistrict/KosivDistrict.scss';
import './VuznutsaDistrict.scss';
import { useNavigate } from "react-router-dom";

function VuznutsaDistrict() {

	let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/vuznutsa-district/place-in-hutsul`; 
      navigate(path);
    }

    const routeChange_2 = () =>{ 
      let path = `/vuznutsa-district/moda`; 
      navigate(path);
    }

	const routeChange_3 = () =>{ 
		let path = `/vuznutsa-district/traditions`; 
		navigate(path);
	}

	const routeChange_4 = () =>{ 
		let path = `/vuznutsa-district/new-moda`; 
		navigate(path);
	}

	const routeChange_5 = () =>{ 
		let path = `/vuznutsa-district/more-photos`; 
		navigate(path);
	}

  return (
    <div className='district'>
  	    <div className="main-screen">
			<div class="custom-shape-divider-top-1676912913">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
					<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
					<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
				</svg>
			</div>
			<div class="blir">
			</div>
		</div>
  	    <div className="container">
		  <h2>Одягові традиції Гуцульщини на Вижниччині</h2>
			<div className="history-moda">
				<div  className="moda-block">
					<a onClick={routeChange_1}>
						<img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/%D0%92%D0%B8%D0%B6%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BD%D0%B0%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9_%D0%BF%D0%B0%D1%80%D0%BA_73-205-5001.JPG" alt="" />
						<p className='moda-text'>МІСЦЕ ВИЖНИЧЧИНИ В ГУЦУЛЬСЬКІЙ СПІЛЬНОТІ</p>
					</a>
				</div>
				<div className="moda-block">
					<a onClick={routeChange_2}>
						<img src="https://i.pinimg.com/736x/b7/aa/1f/b7aa1ff576638af317591d1a745c2e19--old-photos-blog-page.jpg" alt="" />
						<p className='moda-text'>МОДА ГУЦУЛЬЩИНИ НА БУКОВИНІ</p>
					</a>
				</div>
				<div className="moda-block">
					<a onClick={routeChange_3}>
						<img src="https://zak.depo.ua/uploads/posts/20200801/750x/mOwbiuIQdYBnE6xbIRNfefW8CZKmnv7HoXO4ad9Z.jpeg" alt="" />
						<p className='moda-text'>ОСОБЛИВОСТІ ТРАДИЦІЙНОГО СТРОЮ НА ВИЖНИЧЧИНІ</p>
					</a>
				</div>
				<div className="moda-block">
					<a onClick={routeChange_4}>
						<img src="https://varosh.com.ua/wp-content/uploads/2020/07/1595872058-960x641.jpg" alt="" />
						<p className='moda-text'>«Вижницький коледж прикладного мистецтва ім. В. Ю. Шкрібляка»</p>
					</a>
				</div>
			</div>
			<div className="text">
				<p>Вижнничину називають <b>«Воротами Карпат»</b>, край що розкинувся в долині швидкоплинного Черемошу. Ці ворота гостинно відчиняються перед кожним хто хоче потрапити в прославлений поетами та співаками край гомінких струмків, що численними водоспадами зриваються з стрімких схилів. Тут у віковічних смерекових та букових пралісах заховані печери та величні кам’яні скелі, що повняться захоплюючими легендами.</p>
				<p>Найдавніше поселення на території нинішнього Вижницького району - <b>село Замістя і село Коритне</b> (палеолітична стоянка 40-12 тис. років тому). <b>Трипільська стоянка - с.Банилів, с. Коритне.</b> (3 тисячоліття до н.е.). Епоха <b>Черняхівської культури </b>(2-6 століття - Вашківці, Іспас, Карапчів, Мілієве).</p>
				<p>Здавна у Вижниці та її околицях розвивались ремесла і торгівля. Статус торгового містечка Вижниця отримує з 1767 р. З кінця XVIII століття зароджується лісова промисловість. З початком сплаву деревини Черемошем, промисловість набуває дальшого становлення.</p>
				<p>Історія нагадує, що гордий волелюбний дух вижничан протистояв свавіллю місцевих багатіїв. Згодом ці протести переросли у заворушення і повстання. Особливо активна антифеодальна боротьба велась на чолі з відомими ватагами <b>Олексою Довбушем, Миколою Штолюком та Лук'яном Кобилицею</b>.</p>
				<p>Вижницький район розташовувався у південно-західній частині Чернівецької області. По річці Черемош він межував на південному заході з Косівським районом Івано-Франківської, на південному сході — зі Сторожинецьким, а на заході з Путильським районом Чернівецької області та на півдні з Румунією.</p>

			</div>

			<div className="etno">
				<h2>Елементи ентовиставки</h2>
					<div className="img">
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000007-0b6ca0b6cd/P1750266.JPG?ph=0025de801d" alt="" />
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000008-cd548cd54a/P1750265.JPG?ph=0025de801d" alt="" />
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000010-8b6dc8b6de/P1750294.JPG?ph=0025de801d" alt="" />
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000014-da935da937/P1750459.JPG?ph=0025de801d" alt="" />
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000016-e50a5e50a8/P1750505.JPG?ph=0025de801d" alt="" />
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000015-603f9603fb/P1750494.JPG?ph=0025de801d" alt="" />
					</div>
				<div className='more-photos'>
					<p>Старі та сучасні фотографії <b> Старого Косова, Вербовця, Черганівки та Смодна </b>можна переглянути тут </p>
					<button onClick={routeChange_5} class="button-23" role="button">Більше</button>
				</div>
			</div>
		</div>

	<div className="videos">
        <iframe width="380" height="258" src="https://www.youtube.com/embed/M2gXk_hSI0g" title="Відео екскурсія про одягові традиції Гуцульщини на Вижниччині" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className='color'><img height='258' src="https://i.ibb.co/PFcGTQy/pngwing-com.png" alt="" /></div>
		<iframe width="380" height="258" src="https://www.youtube.com/embed/5yJQtrVwVdY" title="Вижниця (Адаптоване)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className='color'><img height='258' src="https://i.ibb.co/PFcGTQy/pngwing-com.png" alt="" /></div>
		<div className='color'><img height='258' src="https://i.ibb.co/PFcGTQy/pngwing-com.png" alt="" /></div>
		<iframe width="380" height="258" src="https://www.youtube.com/embed/HlvaTWHsXAc" title="Виженські мотиви" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className='color'><img height='258' src="https://i.ibb.co/PFcGTQy/pngwing-com.png" alt="" /></div>
		<iframe width="379" height="258" src="https://www.youtube.com/embed/7RIPhM-s894" title="Vizhenka/Виженські мотиви" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
	</div>
  )
}

export default VuznutsaDistrict