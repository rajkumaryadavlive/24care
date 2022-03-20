import React from "react";

const AdultStarPopup = (props) => {
    React.useEffect(() => {
        if (props.display) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [props.display]);

    return (
        <div class={`${props.display ? "popup" : "popup-none"}`}>
            <div className="d-flex row">
                <div>
                    <span onClick={props.closeCall}>
                        <i className="fa fa-close"></i>
                    </span>
                </div>
                <div className="my-2 bolded-text-15">
                    You need minimum $1000 worth of taboo tokens to unlock this
                    Modal images.
                </div>
                <div className="my-2 mb-2">
                    <button
                        className="primary-btn btn-primary custom-primary-design"
                        type="button"
                        style={{
                            border: "none",
                            paddingLeft: "22px",
                            paddingRight: "22px",
                        }}
                    >
                        Unlock Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdultStarPopup;
