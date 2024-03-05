'use client'

import React from 'react'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../redux/store";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from 'react-toastify';

import withReduxStore from "../common/with-redux-store";
import Loading from "../components/Other/Loading";

const GlobalProvider = ({ children, reduxStore }) => {
    return (
        <Provider store={reduxStore}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                {children}
                <ToastContainer position="bottom-left" autoClose={3000} />
                <ScrollToTop
                    smooth
                    component={<i className="fa fa-chevron-up" />}
                    style={{
                        backgroundColor: "#f7f5f4",
                        borderRadius: "999px",
                        height: "50px",
                        width: "50px",
                    }}
                />
            </PersistGate>
        </Provider >
    )
}

export default withReduxStore(GlobalProvider)