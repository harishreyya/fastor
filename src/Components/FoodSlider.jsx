import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ] 
  };

  const images = [
    'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?b=1&s=612x612&w=0&k=20&c=2CBPkgQI2PiNySSNi1tvwVSYFqOBgfgrgDPCyelIVrk=',
    'https://images.pexels.com/photos/10927834/pexels-photo-10927834.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/9738994/pexels-photo-9738994.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/8884315/pexels-photo-8884315.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2271106/pexels-photo-2271106.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7172067/pexels-photo-7172067.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://media.istockphoto.com/id/1449429511/photo/green-lacha-chilli-paratha.jpg?b=1&s=612x612&w=0&k=20&c=2MPgp7xlb3a-r-0RV0quzQmFM2wDqvya0gOjYg_BroU=',
    'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600'
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className=''>
          <img className='image-slide-wrapper' src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
