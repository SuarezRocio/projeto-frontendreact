import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FilterControler from "./Components/FilterControler/FilterControler.js";
import ProductCard from "./Components/ProductCard/ProductCard.js";
import Cart from "./Components/Cart/Cart.js";
import Footer from "./Components/Footer/Footer.js";
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
//import Header from "./Components/Header/Header.js";
//import { GlobalStyled } from './GlobalStyled'
//import { GlobalStyled } from './GlobalStyled'
//import Header from "./Components/Header/Header.js";
const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    body {
      background-color: #EEE8B8;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FB3'/%3E%3Cstop offset='1' stop-color='%23EEE8B8'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f7d276'/%3E%3Cstop offset='1' stop-color='%23EEE8B8'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      background-attachment: fixed;
      background-size: cover;
    }
}`;


const Page = styled.div `
display: block;
padding: 1rem;
`
const Content = styled.div`
display:flex;
flex-flow: row wrap;
width: 90%;
margin-left:5%;
`

const CardContainer = styled.div`
display: flex;
flex-flow: row wrap;
width: 60%;
`

export const Header = styled.header`
    display: flex;
    gap: 16px;
    padding: 16px;
    border: 1px solid #000;
    background-image: url("https://us.123rf.com/450wm/fayethequeen/fayethequeen1611/fayethequeen161100090/68500140-compras-carro-icono-naranja-fondo-vector-ilustraci%C3%B3n-stock.jpg");
    background-size: 2%;
    background-position: top-center;
    `;

const App = () => {


  const data = [

    {
      nome: "camiseta uno",
      id: 1,
      preco: 17,
      img: "https://a-static.mlcdn.com.br/800x560/camiseta-aliens-camisa-nave-espacial-darkwood/darkwoodshop2/11107445889/017a4920c46b48765635d052c4f3c106.jpeg"
    },

    {
      nome: "camiseta dos",
      id: 2,
      preco: 30,
      img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/overfame/media/uploads/produtos/foto/bf17c87c95c3masculina-galaxia-chuva-meteoros-md05a.jpg"
    },


    {
      nome: "camiseta tres",
      id: 3,
      preco: 20,
      img: "https://img.ltwebstatic.com/images3_pi/2021/03/12/1615543534b8b26b70a8b0876205168898e89c185b.webp"
    },


    {
      nome: "camiseta cuatro",
      id: 4,
      preco: 20,
      img: "https://img.ltwebstatic.com/images3_pi/2021/08/25/1629872794ee03da84a93cad7575b9a561b196636b.webp"
    },

    {
      nome: "camiseta cinco",
      id: 5,
      preco: 20,
      img: "https://www.useupdate.com.br/media/product/ede/camiseta-astronauta-in-love-10f.jpg"
    }

  ]

  //set para camiarle el valor, y productos llamo a mi var
  const [productos, setProductos] = useState(data);


  const handleClick = (nome) => {
    alert("hola" + nome)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
    //cuando hago el evet.taget.value accedo a ese string
    console.log(event.target.value)
    //console.log(event)
    console.log(event.target)
  }
  //estado + su seter
  const [inputValue, setInputValue] = useState(" ")
  const [carrito, setCarrito] = useState([])
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1000)
  const [searchProduct, setSearchProduct] = useState("")
  const [total, setTotal] = useState(0);


  // estoy creando las funciones que ejecuta mi componente
  const handleChangeMinValue = (value) => {
    //console.log(value)
    setMinValue(value)
    setProductos(
      //data hace ref. a el estado actual
      [...data].filter(producto => producto.preco > minValue)
    )
  }

  const handleChangeMaxValue = (value) => {
    setMaxValue(value)
    //console.log(value)
    setProductos(
      //data hace ref. a el estado actual
      [...data].filter(producto => producto.preco < maxValue)
    )
  }

  const handleSearchProduct = (value) => {
    setSearchProduct(value)
    //console.log(value)
    setProductos(
      //data hace ref. a el estado actual
      [...data].filter(producto => producto.nome.toUpperCase().includes(searchProduct.toUpperCase()))
    )
    console.log(productos)
  }

  const handleReset = () => {
    console.log("reseteado")
    setMinValue(0)
    setMaxValue(1000)
    setSearchProduct("")
    setProductos(data)
  }

  const handleAddCard = (product) => {
    console.log(product.nome)
    if (carrito.some((producto) => producto.id == product.id)) {
      console.log("ya existe")
      setCarrito((currentState) =>
        currentState.map(
          producto => {
            const result = (Number(producto.id) === Number(product.id) ? { ...producto, quantity: producto.quantity + 1 } : product)
            result.finalPrice = result.quantity * result.preco
            return result
          }
        ))

    } else {

      setCarrito(
        (currentState) => {
          currentState.push({ ...product, quantity: 1 })
          return currentState
        }
      )
    }

    //actualizar un estado de un array


  }
  console.log(carrito)
  const actualizarTotal = () => {
    let resultado = 0;
    if (carrito.length > 1) {
      carrito.forEach(producto => {
        resultado += producto.preco * producto.quantity
      });
    }
    setTotal(resultado)
    console.log(resultado)
  }

  const handleDeleteProduct = (id) => {
    setCarrito((currentState) => {
      const result = [];
      [...currentState].forEach((producto) => {
        if (producto.id == id) {
          if (!(producto.quantity == 1)) {
            producto.quantity--
            result.push(producto)
          }
        } else {
          result.push(producto)
        }
      })
      return result
    })
    console.log(carrito)
  }



  return (
    <>
      {/*<Header />*/}
      {/*<GlobalStyled />*/}
      {/*aqui estamos pasando las ref. por propiedades (props)*/}

      <GlobalStyle />
      <Header />

      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
      <Page>
        <Content>
     

      <FilterControler


        handleChangeMaxValue={
          handleChangeMaxValue
        }
        handleChangeMinValue={
          handleChangeMinValue
        }
        handleSearchProduct={
          handleSearchProduct
        }
        handleReset={
          handleReset
        }
        maxValue={
          maxValue
        }
        minValue={
          minValue
        }
        searchProduct={
          searchProduct
        }
      />
      <CardContainer>
        {productos.map((producto) => <ProductCard
          key={producto.id}
          product={
            producto
          }

          handleAddCard={
            handleAddCard
          }
          actualizarTotal={
            actualizarTotal
          }

        />
        )}</CardContainer>
     
     <Cart
        carrito={carrito}
        total={total}
        handleDeleteProduct={
          handleDeleteProduct
        }
        actualizarTotal={
          actualizarTotal
        }
      />
     
      </Content>
      </Page>
      
      <Footer />
    </>

  )
}


export default App; 