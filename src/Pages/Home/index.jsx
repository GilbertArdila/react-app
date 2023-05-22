import Layout from "../../Components/Layout";
import Card from "../../Components/Card";


const Home = () => {
  return <Layout >
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-90vw p-5 ">
      {data.map((data) => { return <Card className="relative col-span-3 sm:col-span-2 md:col-span-1" {...data} key={data.text}/> })
    }
    </div>
    
  </Layout>;

};

 const data = [
  {
    url: 'https://marialuisa.foundation/wp-content/uploads/thegem-logos/logo_d2388928f8d95858c851647369f2f680_1x.png',
    text:'Fundación María Luisa',
  },
  {
    url:'https://colombia.marialuisa.foundation/wp-content/uploads/sites/19/2020/03/Fundacion-internacional-Maria-Luisa-de-Moreno-Educacio.jpg',
    text:'Doctora María Luisa '
  },
  {
    url:'https://colombia.marialuisa.foundation/wp-content/uploads/sites/19/2012/02/images_slider_slide_placa40aos-copia.jpg',
    text:'Reconicimientos'
  },
  {
    url:'https://i.ytimg.com/vi/UrHcEr2aD7U/maxresdefault.jpg',
    text:'Fundación tv'
  },
  {
    url:'https://i.ytimg.com/vi/f2BoFvmeK9g/maxresdefault.jpg',
    text:'Campus virtual'
  },
  {
    url:'https://i.ytimg.com/vi/WHcm7mu62Cc/maxresdefault.jpg',
    text:'Construcción de escuelas'
  },
  {
    url:'https://colombia.marialuisa.foundation/wp-content/uploads/sites/19/2022/08/IMG_3356-thegem-blog-default.jpg',
    text:'Entrega de kits'
  },
  {
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDwp7Xe3nd5m22b94blfkn77dWt5Wvky5_Q&usqp=CAU',
    text:'Nuestro equipo'
  },
  {
    url:'https://pbs.twimg.com/media/EFkVxKzX0AA10Pd.jpg:large',
    text:'Inclusión'
  },
]
export default Home;
