import React, { useEffect } from "react";
import { LoaderContext } from "../../context";
import LoaderGif from "../../assets/images/loader.gif";

function BodyLoader(props) {
    const [state, dispatch] = React.useContext(LoaderContext);

    useEffect(() => {
        if (state.loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [state.loading]);
    return (
        <div className={`${state.loading ? "loader-gif" : "loader-gif-none"}`}>
            <img src={LoaderGif} />
            {props.children}
        </div>
    );
}

export default BodyLoader;
