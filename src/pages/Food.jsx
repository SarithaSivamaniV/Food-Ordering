import { useState } from 'react'

const Food = () => {
  const foodItems = [
    { id: 1, name: 'Fish Fry', price: 180, img: '/pic1.jpg' },
    { id: 2, name: 'Chicken Briyani', price: 150, img: '/pic2.jpg' },
    { id: 3, name: 'Maten Briyani', price: 120, img: '/pic3.jpg' },
    { id: 4, name: 'Idli Dosa', price: 80, img: '/pic4.jpg' },
    { id: 5, name: 'Poori Masala', price: 50, img: '/pic5.jpg' },
    { id: 6, name: 'Ambur Briyani', price: 140, img: '/pic6.jpg' },
    { id: 7, name: 'Masala Dosa', price: 60, img: '/pic7.jpg' },
    { id: 8, name: 'Pulihora', price: 30, img: '/pic8.jpg' },
  ]

  const [cart, setCart] = useState([])
  const [isCartVisible, setIsCartVisible] = useState(false)

  const addToCart = (item) => {
    setCart([...cart, item])
    setIsCartVisible(true)
  }

  const removeFromCart = (id) => {
    const index = cart.findIndex(item => item.id === id)
    if (index !== -1) {
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }
  }

  const closeCart = () => {
    setIsCartVisible(false)
  }

  return (
    <div className="food-page">
      <div className="food-list">
        {foodItems.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.img} alt={food.name} className="food-image" />
            <div className="food-info">
              <h3>{food.name}</h3>
              <p>₹{food.price}</p>
            </div>
            <button onClick={() => addToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className={`cart-sidebar ${isCartVisible ? 'visible' : ''}`}>
        <button className="close-btn" onClick={closeCart}>✖</button>
        <h3>Your Cart 🛒</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} ₹{item.price}
              <button onClick={() => removeFromCart(item.id)}>✖</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Food
