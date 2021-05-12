import React from "react";
import { createStructuredSelector } from "reselect";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { setCurrentUser } from "./redux/store/user/user.actions";
import { selectCurrentUser } from "./redux/store/user/user.reselect";
import Checkout from "./pages/checkout/checkout.component";
import { selectCollectionForPreview } from "./redux/store/shop/shop.selector";
import "./App.css";
import { checkSession } from "./redux/store/user/user.actions";
class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { checkSession } = this.props;
    checkSession();
    // const { setCurrentUser, collectionsArray } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    //   // addCollectionAndDocument(
    //   //   "collections",
    //   //   collectionsArray.map(({ title, items }) => ({ title, items }))
    //   // );
    // });
  }

  componentWillUnmount() {
    // this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignOut />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    checkSession: () => dispatch(checkSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
