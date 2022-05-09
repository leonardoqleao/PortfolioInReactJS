import { Component } from "react";
import LineBetween from "./components/LineBetween";
import './css';

export default class Profile extends Component {
    render() {
        return (
            <div class="Profile">
                <h1>Timeline</h1>
                <div className="timeline">
                    <div className="leftSide">
                        <p id="y2012">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                        <p id="lefty2015">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                        <p id="y2017">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                        <p id="lefty2020">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                        <p id="y2021">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                        <p id="lefty2022">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                    </div>
                    <LineBetween />
                    <div className="rightSide">
                        <p id="y2015">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                        <p id="y2020">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                        <p id="y2022">
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
