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
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad 
                        </p>
                        <p>
                        </p>
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad 
                        </p>
                        <p>
                        </p>
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad 
                        </p>
                        <p>
                        </p>
                    </div>
                    <LineBetween/>
                    <div className="rightSide">
                    <p>
                        </p>
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad 
                        </p>
                        <p>
                        </p>
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad 
                        </p>
                        <p>
                        </p>
                        <p>
                            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Viva Forevis aptent taciti sociosqu ad 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}