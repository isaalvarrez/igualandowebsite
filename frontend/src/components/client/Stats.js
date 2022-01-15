import React, { useState } from 'react'
import { connect } from 'react-redux'
import CrossPatternLottie from '../lotties/CrossPatternLottie'
import CurvedLineLottie from '../lotties/CurvedLineLottie'

import { Waypoint } from 'react-waypoint'

const Stats = (props) => {

    let { url } = props

    let [renderLottie, setRenderLottie] = useState(false);
    let [renderLottie2, setRenderLottie2] = useState(false);
    const [programas, setProgramas] = useState();
    const [socias, setSocias] = useState()
    const [partidos, setPartidos] = useState()

    fetch(`${url}/traerDatos`, {
        method: "GET",
    }).then(r => r.json())
        .then(r => {
            /*  console.log(r); */
            setProgramas(r[0].programas)
            setSocias(r[0].socias)
            setPartidos(r[0].partidos)
        })

    return (
        <div className="bg-orange h-auto md:h-80 w-full relative">

            <div className="absolute right-8 -top-20" style={{ width: '55px' }}> {renderLottie && <CrossPatternLottie />}</div >

            <div className="hidden md:block  absolute left-8 -bottom-32" style={{ width: '47px' }}>{renderLottie2 && <CurvedLineLottie />}</div>
            {/* < svg className="hidden md:block  absolute left-8 -bottom-32" xmlns="http://www.w3.org/2000/svg" width="47" height="247" viewBox="0 0 47 247" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.76712 238.153C12.4272 239.99 16.7425 241.272 22.9838 240.716L23.5162 246.692C16.2575 247.339 10.4478 245.915 6.35789 243.09C2.24852 240.253 1.41456e-06 236.059 1.98935e-06 231.676C2.56414e-06 227.293 2.24852 223.099 6.35789 220.261C10.4478 217.437 16.2575 216.013 23.5162 216.66C29.7575 217.216 34.0728 215.934 36.7329 214.097C39.3735 212.274 40.5 209.852 40.5 207.62C40.5 205.388 39.3735 202.966 36.7329 201.143C34.0728 199.306 29.7575 198.024 23.5162 198.58C16.2575 199.227 10.4478 197.802 6.35789 194.978C2.24852 192.141 7.72374e-06 187.947 8.29853e-06 183.564C8.87332e-06 179.18 2.24853 174.987 6.3579 172.149C10.4478 169.325 16.2575 167.901 23.5162 168.547C29.7575 169.103 34.0728 167.821 36.7329 165.985C39.3735 164.161 40.5 161.74 40.5 159.507C40.5 157.275 39.3735 154.854 36.7329 153.03C34.0728 151.193 29.7575 149.911 23.5162 150.468C16.2575 151.114 10.4478 149.69 6.3579 146.866C2.24853 144.028 1.40329e-05 139.834 1.46077e-05 135.451C1.51825e-05 131.068 2.24853 126.874 6.3579 124.037C10.4478 121.213 16.2575 119.788 23.5163 120.435C29.7575 120.991 34.0728 119.709 36.7329 117.872C39.3735 116.049 40.5 113.627 40.5 111.395C40.5 109.163 39.3735 106.741 36.7329 104.918C34.0728 103.081 29.7575 101.799 23.5163 102.355C16.2575 103.002 10.4478 101.578 6.35791 98.7534C2.24854 95.9159 2.03421e-05 91.7221 2.09169e-05 87.3389C2.14917e-05 82.9557 2.24854 78.7619 6.35791 75.9243C10.4478 73.1003 16.2575 71.6759 23.5163 72.3227C29.7575 72.8787 34.0728 71.5967 36.7329 69.76C39.3735 67.9366 40.5 65.515 40.5 63.2827C40.5 61.0505 39.3735 58.6289 36.7329 56.8055C34.0728 54.9687 29.7575 53.6867 23.5163 54.2428C16.2575 54.8895 10.4478 53.4652 6.35791 50.6411C2.24854 47.8036 2.66513e-05 43.6098 2.7226e-05 39.2266C2.78008e-05 34.8433 2.24855 30.6495 6.35791 27.812C10.4478 24.9879 16.2575 23.5636 23.5163 24.2103C29.7575 24.7664 34.0728 23.4844 36.7329 21.6476C39.3735 19.8243 40.5 17.4026 40.5 15.1704C40.5 12.9382 39.3735 10.5165 36.7329 8.69317C34.0728 6.85637 29.7575 5.57439 23.5163 6.13047L22.9838 0.154147C30.2425 -0.492596 36.0522 0.931752 40.1421 3.75585C44.2515 6.59337 46.5 10.7872 46.5 15.1704C46.5 19.5536 44.2515 23.7474 40.1421 26.585C36.0522 29.409 30.2425 30.8334 22.9838 30.1866C16.7425 29.6306 12.4272 30.9125 9.76714 32.7493C7.12651 34.5727 6.00003 36.9943 6.00003 39.2266C6.00003 41.4588 7.12651 43.8804 9.76714 45.7038C12.4272 47.5406 16.7425 48.8226 22.9838 48.2665C30.2425 47.6198 36.0522 49.0441 40.1421 51.8682C44.2515 54.7057 46.5 58.8995 46.5 63.2827C46.5 67.666 44.2515 71.8598 40.1421 74.6973C36.0522 77.5214 30.2425 78.9457 22.9838 78.299C16.7425 77.7429 12.4272 79.0249 9.76714 80.8617C7.1265 82.685 6.00002 85.1067 6.00002 87.3389C6.00002 89.5711 7.1265 91.9928 9.76713 93.8161C12.4272 95.6529 16.7425 96.9349 22.9838 96.3788C30.2425 95.7321 36.0522 97.1564 40.1421 99.9805C44.2515 102.818 46.5 107.012 46.5 111.395C46.5 115.778 44.2515 119.972 40.1421 122.81C36.0522 125.634 30.2425 127.058 22.9838 126.411C16.7425 125.855 12.4272 127.137 9.76713 128.974C7.1265 130.797 6.00001 133.219 6.00001 135.451C6.00001 137.683 7.1265 140.105 9.76713 141.928C12.4272 143.765 16.7425 145.047 22.9838 144.491C30.2425 143.844 36.0522 145.269 40.1421 148.093C44.2515 150.93 46.5 155.124 46.5 159.507C46.5 163.891 44.2515 168.084 40.1421 170.922C36.0522 173.746 30.2425 175.17 22.9838 174.524C16.7425 173.968 12.4272 175.25 9.76712 177.086C7.12649 178.91 6.00001 181.331 6.00001 183.564C6.00001 185.796 7.12649 188.217 9.76712 190.041C12.4272 191.878 16.7425 193.16 22.9838 192.604C30.2425 191.957 36.0522 193.381 40.1421 196.205C44.2515 199.043 46.5 203.237 46.5 207.62C46.5 212.003 44.2515 216.197 40.1421 219.034C36.0522 221.858 30.2425 223.283 22.9838 222.636C16.7425 222.08 12.4272 223.362 9.76712 225.199C7.12649 227.022 6 229.444 6 231.676C6 233.908 7.12648 236.33 9.76712 238.153Z" fill="#171717" />
            </svg> */}
            <Waypoint onEnter={() => setRenderLottie(true)} />
            <div className="w-full p-8  lg:w-7/12 mx-auto flex  flex-col md:flex-row lg:p-0 lg:pt-14 justify-around h-auto md:h-80">
                <div className="text-center w-full h-auto md:w-auto md:h-48 ">
                    <h3 className="text-6xl font-title md:text-hero text-white">{programas}</h3>
                    <p className="text-lg md:text-2xl mx-auto uppercase tracking-wider font-bold text-black w-full md:w-48 leading-7">Programas al aire</p>
                </div>
                <div className="text-center  h-auto md:h-48 ">
                    <h3 className="text-6xl font-title md:text-hero text-white">{socias}</h3>
                    <p className="text-lg md:text-2xl mx-auto uppercase tracking-wider font-bold text-black w-full md:w-48 leading-7">Socias Vitalicias</p>
                </div>
                <div className="text-center  h-auto md:h-48 ">
                    <h3 className="text-6xl font-title md:text-hero text-white">{partidos}</h3>
                    <p className="text-lg md:text-2xl mx-auto uppercase tracking-wider font-bold text-black w-full md:w-48 leading-7">Partidos cubiertos</p>
                </div>



            </div>

            <Waypoint onEnter={() => setRenderLottie2(true)} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url
})


export default connect(mapStateToProps)(Stats)