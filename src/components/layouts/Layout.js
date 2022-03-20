import React from "react";
import { Body, Footer } from "./index";
import { BodyLoader } from "../shared";
import { LoaderContextProvider } from "../../context";

function Layout() {
    return (
        <div>
            <LoaderContextProvider>
                <Body></Body>
                <BodyLoader></BodyLoader>
            </LoaderContextProvider>
        </div>
    );
}

export default Layout;
