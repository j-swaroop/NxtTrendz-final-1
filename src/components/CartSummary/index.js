import {Component} from 'react'
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'

import './index.css'

class CartSummary extends Component {
  state = {
    confirmBtnClicked: false,
    checkoutDisabled: true,
  }

  onClickOption = () => {
    this.setState({checkoutDisabled: false})
  }

  onClickConfirm = () => {
    this.setState({confirmBtnClicked: true})
  }

  render() {
    const {confirmBtnClicked, checkoutDisabled} = this.state

    const btnClassName = checkoutDisabled ? 'disabled-btn' : 'confirm-btn'

    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          let total = 0
          cartList.forEach(eachCartItem => {
            total += eachCartItem.price * eachCartItem.quantity
          })

          return (
            <>
              <div className="cart-summary-container">
                <h1 className="order-total-value">
                  <span className="order-total-label">Order Total:</span> Rs{' '}
                  {total}
                  /-
                </h1>
                <p className="total-items">{cartList.length} Items in cart</p>
                <div className="d-sm-none">
                  <Popup
                    modal
                    trigger={
                      <button
                        type="button"
                        className="checkout-button d-sm-none"
                      >
                        Checkout
                      </button>
                    }
                  >
                    <>
                      <div className="popup-container">
                        {confirmBtnClicked ? (
                          <p className="confirm-text">
                            {' '}
                            Your order has been placed successfully{' '}
                          </p>
                        ) : (
                          <div className="popup-container-seaction">
                            <p className="order-total-value">
                              {' '}
                              <span className="order-total-label">
                                Order Total:
                              </span>{' '}
                              Rs {total}/-
                            </p>
                            <p className="total-items noof-items">
                              {' '}
                              No of Items: {cartList.length}{' '}
                            </p>
                            <div className="payment-option-container">
                              <label
                                htmlFor="card"
                                className="payment-option"
                                onClick={this.onClickOption}
                              >
                                {' '}
                                Card{' '}
                              </label>
                              <input
                                type="radio"
                                id="card"
                                name="payment"
                                className="payment-option"
                                onClick={this.onClickOption}
                              />
                            </div>
                            <div className="payment-option-container">
                              <label
                                htmlFor="netbanking"
                                className="payment-option"
                              >
                                {' '}
                                Net Banking{' '}
                              </label>
                              <input
                                type="radio"
                                id="netbanking"
                                name="payment"
                                className="payment-option"
                                disabled
                              />
                            </div>
                            <div className="payment-option-container">
                              <label
                                htmlFor="upi"
                                className="payment-option"
                                onClick={this.onClickOption}
                              >
                                {' '}
                                UPI{' '}
                              </label>
                              <input
                                type="radio"
                                id="upi"
                                name="payment"
                                className="payment-option"
                                onClick={this.onClickOption}
                              />
                            </div>
                            <div className="payment-option-container">
                              <label
                                htmlFor="wallet"
                                className="payment-option"
                                onClick={this.onClickOption}
                              >
                                {' '}
                                Wallet{' '}
                              </label>
                              <input
                                type="radio"
                                id="wallet"
                                name="payment"
                                className="payment-option"
                                onClick={this.onClickOption}
                              />
                            </div>
                            <div className="payment-option-container">
                              <label
                                htmlFor="cashondelivery"
                                className="payment-option"
                                onClick={this.onClickOption}
                              >
                                {' '}
                                Cash on Delivery{' '}
                              </label>
                              <input
                                type="radio"
                                id="cashondelivery"
                                name="payment"
                                className="payment-option"
                                onClick={this.onClickOption}
                              />
                            </div>
                            <button
                              type="button"
                              className={btnClassName}
                              onClick={this.onClickConfirm}
                              disabled={checkoutDisabled}
                            >
                              Confirm Order
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  </Popup>
                </div>

                <div className="d-lg-none">
                  <Popup
                    modal
                    trigger={
                      <button type="button" className="checkout-button ">
                        Checkout
                      </button>
                    }
                  >
                    <>
                      <div className="popup-container-sm">
                        {confirmBtnClicked ? (
                          <p className="confirm-text">
                            {' '}
                            Your order has been placed successfully{' '}
                          </p>
                        ) : (
                          <div className="popup-container-seaction">
                            <p className="order-total-value">
                              {' '}
                              <span className="order-total-label">
                                Order Total:
                              </span>{' '}
                              Rs {total}/-
                            </p>
                            <p className="total-items noof-items">
                              {' '}
                              No of Items: {cartList.length}{' '}
                            </p>
                            <div className="payment-option-container">
                              <label
                                htmlFor="card"
                                className="payment-option"
                                onClick={this.onClickOption}
                              >
                                {' '}
                                Card{' '}
                              </label>
                              <input
                                type="radio"
                                id="card"
                                name="payment"
                                className="payment-option"
                                onClick={this.onClickOption}
                              />
                            </div>
                            <div className="payment-option-container">
                              <label
                                htmlFor="netbanking"
                                className="payment-option"
                              >
                                {' '}
                                Net Banking{' '}
                              </label>
                              <input
                                type="radio"
                                id="netbanking"
                                name="payment"
                                className="payment-option"
                                disabled
                              />
                            </div>
                            <div className="payment-option-container">
                              <label
                                htmlFor="upi"
                                className="payment-option"
                                onClick={this.onClickOption}
                              >
                                {' '}
                                UPI{' '}
                              </label>
                              <input
                                type="radio"
                                id="upi"
                                name="payment"
                                className="payment-option"
                                onClick={this.onClickOption}
                              />
                            </div>
                            <div className="payment-option-container">
                              <label
                                htmlFor="wallet"
                                className="payment-option"
                                onClick={this.onClickOption}
                              >
                                {' '}
                                Wallet{' '}
                              </label>
                              <input
                                type="radio"
                                id="wallet"
                                name="payment"
                                className="payment-option"
                                onClick={this.onClickOption}
                              />
                            </div>
                            <div className="payment-option-container">
                              <label
                                htmlFor="cashondelivery"
                                className="payment-option"
                                onClick={this.onClickOption}
                              >
                                {' '}
                                Cash on Delivery{' '}
                              </label>
                              <input
                                type="radio"
                                id="cashondelivery"
                                name="payment"
                                className="payment-option"
                                onClick={this.onClickOption}
                              />
                            </div>
                            <button
                              type="button"
                              className={btnClassName}
                              onClick={this.onClickConfirm}
                              disabled={checkoutDisabled}
                            >
                              Confirm Order
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  </Popup>
                </div>
              </div>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
