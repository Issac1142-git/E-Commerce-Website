import React, { lazy, useEffect, Suspense } from "react";
import { createStructuredSelector } from "reselect";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/store/user/user.actions";
import { selectCurrentUser } from "./redux/store/user/user.reselect";
import { selectCollectionForPreview } from "./redux/store/shop/shop.selector";
import Header from "./components/header/header.component";
import "./App.css";
import { checkSession } from "./redux/store/user/user.actions";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.jsx";

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));
const SignInAndSignOut = lazy(() =>
  import("./pages/sign-in-and-sign-out/sign-in-and-sign-out.component")
);

const app = ({ checkSession, currentUser }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(app);

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
