import React from 'react';
import './KosivDistrict.scss';
import { useNavigate } from "react-router-dom";


function KosivDistrict() {

	
    let navigate = useNavigate(); 
    const routeChange_1 = () =>{ 
      let path = `/kosiv-district/mens-fashion`; 
      navigate(path);
    }

    const routeChange_2 = () =>{ 
      let path = `/kosiv-district/outerwear`; 
      navigate(path);
    }

	const routeChange_3 = () =>{ 
		let path = `/kosiv-district/womens-fashion`; 
		navigate(path);
	}

	const routeChange_4 = () =>{ 
		let path = `/kosiv-district/accessories-and-shoes`; 
		navigate(path);
	}

	const routeChange_5 = () =>{ 
		let path = `/kosiv-district/more-photos`; 
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
			<div class="blur">
			</div>
		</div>
  	    <div className="container">
		  <h2>Історія моди передмістя Косова 1920-1950-х років</h2>
			<div className="history-moda">
				<div  className="moda-block">
					<a onClick={routeChange_1} href="">
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000287-8972e89730/1929%20%D1%80%20%D1%81%D0%A1%D0%BC%D0%BE%D0%B4%D0%BD%D0%B0%20%D0%A4%D0%BE%D1%82%D0%BE%20%D0%B7%20%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%BD%D0%BE%D1%97%20%D0%B7%D0%B1%D1%96%D1%80%D0%BA%D0%B8%20%D0%92%D0%A8%D0%BA%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D0%B0.webp?ph=0025de801d" alt="" />
						<p>ЧОЛОВІЧА МОДА</p>
					</a>
				</div>
				<div className="moda-block">
					<a onClick={routeChange_2} href="">
						<img src="https://i.siteapi.org/deHhsdewAuBKLn9B_nWuu6EOjjs=/0x0:800x538/9b287bab56f73d1.ua.s.siteapi.org/img/mp0lvtnjxioss00kk8wc0s4wk8cs48" alt="" />
						<p>ВЕРХНІЙ ОДЯГ</p>
					</a>
				</div>
				<div onClick={routeChange_3} className="moda-block">
					<a href="">
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000289-93fd193fd2/700/1920-1930-%D1%82%D1%96%20%D1%80%D1%80%20%D1%81%D0%92%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D0%B5%D1%86%D1%8C%20%D0%A4%D0%BE%D1%82%D0%BE%20%D0%B7%20%D0%BF%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%BD%D0%BE%D1%97%20%D0%B7%D0%B1%D1%96%D1%80%D0%BA%D0%B8%20%D0%91%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D1%87%D1%83%D0%BA%D0%B0-0.webp?ph=0025de801d" alt="" />
						<p>ЖІНОЧИЙ ОДЯГ</p>
					</a>
				</div>
				<div className="moda-block">
					<a onClick={routeChange_4} href="">
						<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000285-6e8fb6e8fc/700/skansen05-696x464.webp?ph=0025de801d" alt="" />
						<p>АКСЕСУАРИ ТА ВЗУТТЯ</p>
					</a>
				</div>
			</div>
  	    	<div className="text">
				<p><b>Села Вербовець, Старий Косів, Смодна та Черганівка </b>знаходяться на своєрідній межі гір та рівнини, села і міста, неподалік кордонів Гуцульщини з Покуттям та Буковиною. Місцеві мешканці не вважають себе гуцулами, хоча за сучасним адміністративним поділом Косівщина входить до етнорегіону Гуцульщина.</p>			
				<p>У самому місті Косів до Другої світової війни проживали переважно євреї та поляки. Українці населяли сусідні села, у тому числі Монастирське та Москалівку, які у 1930-х роках стали частиною міста.</p>
				<p>Косів географічно розташований на давньому торгівельному шляху. Тут проводились численні ярмарки, на яких місцеве населення мало можливість ознайомлюватися з одяговими виробами з інших районів.</p>
				<p>Ці чинники впливали на характер народного строю, довжину та крій одягу, способи оздоблення, використання елементів міської культури. Водночас, вбрання мало свої упізнавані властиві тільки цим селам традиції.</p>
				<p>У літературних та наукових джерелах міститься небагато інформації про народний стрій у селах східного передмістя Косова. Зазвичай, згадуються лише окремі компоненти костюму.</p>
				<p>Традиційне вбрання у селах Вербовець та Старий Косів 20-х і 30-х років ХХ ст. чудово ілюструють твори відомих художників та фотомитців цього періоду: Івана Труша, Олени Кульчицької та Миколи Сеньковського.</p>
			</div>
			<div className="etno">
				<h2>Елементи ентовиставки</h2>
				<div className="img">
					<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000294-142bf142c1/48388704_2257588384454872_3456706734859485184_n.webp?ph=0025de801d" alt="" />
					<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000295-4d9cb4d9cc/48397009_2257588401121537_3456703230166171648_n.webp?ph=0025de801d" alt="" />
					<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000296-5209452096/48405003_2257588587788185_7205493021331161088_n.webp?ph=0025de801d" alt="" />
					<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000298-9c6039c604/48414527_2257588477788196_1271655299979149312_n.webp?ph=0025de801d" alt="" />
				</div>
				<div className="image">
					<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000299-d4885d4887/48417065_2257588321121545_3391435820509429760_n.webp?ph=0025de801d" alt="" />
					<img src="https://0025de801d.cbaul-cdnwnd.com/326d60263c870efc83c994ce64d5c373/200000300-24a8624a88/48985063_775647046122288_1161328679750467584_n.webp?ph=0025de801d" alt="" />
				</div>
				<div className='more-photos'>
					<p>Старі та сучасні фотографії <b> Старого Косова, Вербовця, Черганівки та Смодна </b>можна переглянути тут </p>
					<button onClick={routeChange_5} class="button-23" role="button">Більше</button>
				</div>
			</div>
		</div>

		<div className="video">
			<iframe width="460" height="258" src="https://www.youtube.com/embed/cXXdl7Bqoyo" title="Вербовецька сорочка, 1 частина | Древо" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<iframe width="460" height="258" src="https://www.youtube.com/embed/czC3vd9RyFo" title="Вербовецька сорочка, 2 частина | Древо" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<iframe width="460" height="258" src="https://www.youtube.com/embed/xBvzDcJb_Ng" title="Вербовецька сорочка, 3 частина | Древо" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</div>
	</div>
  )
}

export default KosivDistrict