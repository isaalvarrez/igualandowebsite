import React from 'react'
import { connect } from 'react-redux'
import './css/SociaVitalicia.css'


const SociaVitalicia = (props) => {

    let sociaVitalicia
    sociaVitalicia = props.sociaVitalicia
    /*  console.log(sociaVitalicia) */


    return (
        <div className="socia">
            {(sociaVitalicia.fotoFondo) ?
                <div className="bgimage" style={{ background: `url(${sociaVitalicia.fotoFondo})  center/cover` }}></div> :
                <div></div>
            }

            <div className="tarjeta">
                {(sociaVitalicia.fotoMain !== "") ?
                    <div className="foto" style={{ background: `url(${sociaVitalicia.fotoMain})  center/cover` }}></div> :
                    <div></div>
                }

                <svg className="circulo" viewBox="0 0 305 305" fill="none">
                    <path d="M53.5615 37.0094L61.2048 45.4709L59.6761 46.8981L50.9118 44.2475L56.2112 50.0584L54.6825 51.3837L47.0392 42.9223L48.5678 41.495L57.3322 44.1456L52.0328 38.3347L53.5615 37.0094Z" fill="#FFFCFA" />
                    <path d="M61.8163 39.66L57.4341 33.8492L59.0647 32.6258L63.243 38.2328C64.364 39.762 65.2812 39.9659 66.6061 38.9464C67.9309 37.927 68.0328 37.0095 66.9118 35.4803L62.7334 29.8733L64.364 28.65L68.6443 34.3589C70.3768 36.7036 70.1729 38.8445 67.829 40.4756C65.6889 42.2087 63.5487 42.0048 61.8163 39.66Z" fill="#FFFCFA" />
                    <path d="M68.5424 25.7955L74.9627 21.8196L75.9819 23.4508L71.2939 26.3052L72.7207 28.548L77.1029 25.7955L78.122 27.4266L73.7398 30.1791L75.3704 32.7278L80.0583 29.7713L81.0774 31.4025L74.5551 35.4803L68.5424 25.7955Z" fill="#FFFCFA" />
                    <path d="M87.1921 15.2952L88.415 27.4266L87.0901 28.1402L77.8163 20.1885L79.8545 19.1691L86.2749 24.878L85.2557 16.3146L87.1921 15.2952Z" fill="#FFFCFA" />
                    <path d="M99.0137 20.0866L94.9373 21.8196L95.0392 24.3683L93.001 25.1838L92.7971 12.9504L94.2239 12.3387L102.784 21.106L100.746 21.9216L99.0137 20.0866ZM97.587 18.5574L94.5296 15.2951L94.7334 19.6788L97.587 18.5574Z" fill="#FFFCFA" />
                    <path d="M108.695 15.601L110.53 14.5815C111.039 15.8049 112.16 16.3146 113.383 16.0088C114.504 15.7029 115.014 14.9893 114.81 14.0718C114.606 13.3582 113.893 13.0524 112.058 12.8485C109.511 12.6446 108.491 12.0329 107.982 10.4018C107.472 8.66872 108.491 7.0376 110.53 6.42593C111.956 6.01815 113.383 6.32399 114.402 7.44538L113.077 8.87261C112.466 8.159 111.651 7.95511 110.937 8.159C110.122 8.36289 109.714 9.0765 109.918 9.79012C110.122 10.5037 110.733 10.8096 112.568 10.9115C115.116 11.1154 116.135 11.7271 116.644 13.2562C117.256 15.2951 116.033 17.1302 113.791 17.7418C111.651 18.2516 109.612 17.436 108.695 15.601Z" fill="#FFFCFA" />
                    <path d="M118.886 10.1979C118.173 6.73179 119.905 3.97928 123.065 3.36761C126.224 2.75594 128.874 4.69289 129.485 8.15902C130.198 11.6251 128.466 14.3777 125.307 14.9893C122.147 15.601 119.498 13.664 118.886 10.1979ZM127.447 8.5668C126.937 6.12012 125.409 4.89678 123.37 5.30456C121.332 5.71234 120.313 7.4454 120.823 9.89208C121.332 12.3388 122.861 13.5621 124.899 13.1543C126.937 12.6446 127.956 10.9115 127.447 8.5668Z" fill="#FFFCFA" />
                    <path d="M132.644 7.6493C132.339 3.97928 134.173 1.5326 137.536 1.22676C139.88 1.02287 141.816 1.94038 142.835 4.08122L141.001 4.99873C140.39 3.67344 139.167 3.06177 137.638 3.16372C135.396 3.36761 134.275 4.89678 134.581 7.44541C134.784 9.99403 136.211 11.3193 138.453 11.1154C139.982 11.0135 141.001 10.096 141.409 8.66875L143.345 9.17847C142.733 11.4213 141.001 12.8485 138.657 13.0524C135.396 13.3582 133.052 11.3193 132.644 7.6493Z" fill="#FFFCFA" />
                    <path d="M146.606 0.920915L148.644 0.81897L148.95 12.1349L146.912 12.2368L146.606 0.920915Z" fill="#FFFCFA" />
                    <path d="M159.549 9.99402L155.065 9.79013L154.147 12.1349L151.905 12.0329L156.899 0.81897L158.428 0.920915L162.606 12.4407L160.364 12.3388L159.549 9.99402ZM158.937 8.05706L157.511 3.87732L155.88 7.95512L158.937 8.05706Z" fill="#FFFCFA" />
                    <path d="M181.765 3.57147L175.447 14.0718L173.918 13.8679L171.269 1.83841L173.511 2.14424L175.243 10.6057L179.523 3.16369L181.765 3.57147Z" fill="#FFFCFA" />
                    <path d="M185.332 4.38705L187.268 4.79483L184.721 15.9068L182.784 15.4991L185.332 4.38705Z" fill="#FFFCFA" />
                    <path d="M193.791 8.46484L190.428 7.44539L190.937 5.61038L199.702 8.15901L199.192 9.99402L195.829 8.97457L193.179 18.0477L191.243 17.436L193.791 8.46484Z" fill="#FFFCFA" />
                    <path d="M204.899 19.7808L200.721 18.2516L199.09 20.1885L197.052 19.373L205.307 10.2999L206.733 10.8096L206.937 23.043L204.899 22.2274V19.7808ZM204.899 17.7419V13.3582L202.046 16.7224L204.899 17.7419Z" fill="#FFFCFA" />
                    <path d="M214.377 13.9699L216.211 14.8874L212.135 23.4508L216.517 25.4897L215.702 27.2227L209.485 24.2663L214.377 13.9699Z" fill="#FFFCFA" />
                    <path d="M223.956 18.6593L225.791 19.6788L220.39 29.6694L218.555 28.6499L223.956 18.6593Z" fill="#FFFCFA" />
                    <path d="M226.402 26.5091C228.339 23.4508 231.396 22.6352 234.249 24.4702C236.288 25.7955 237.205 27.7324 236.695 29.9752L234.759 29.5675C235.065 28.1402 234.555 26.9169 233.23 26.1013C231.396 24.878 229.561 25.4897 228.135 27.6305C226.81 29.7713 227.116 31.7083 228.95 32.8297C230.275 33.6453 231.6 33.6453 232.823 32.7278L234.046 34.3589C232.211 35.7861 229.969 35.7861 227.931 34.4608C225.077 32.7278 224.466 29.5675 226.402 26.5091Z" fill="#FFFCFA" />
                    <path d="M241.587 29.7714L243.218 30.9947L236.491 40.1698L234.861 38.9464L241.587 29.7714Z" fill="#FFFCFA" />
                    <path d="M246.173 44.9611L242.81 42.1067L240.67 43.33L238.937 41.9028L249.74 36.1939L250.861 37.2133L246.988 48.7331L245.256 47.3059L246.173 44.9611ZM246.784 43.0242L248.313 38.8444L244.44 40.9853L246.784 43.0242Z" fill="#FFFCFA" />
                    <path d="M267.37 53.4226L259.014 61.0685L257.587 59.5393L260.135 50.772L254.326 56.0732L253.001 54.544L261.358 46.8981L262.784 48.4273L260.237 57.1946L266.046 51.8934L267.37 53.4226Z" fill="#FFFCFA" />
                    <path d="M264.823 61.6801L270.632 57.2965L271.854 58.9276L266.249 63.2093C264.721 64.3307 264.517 65.2482 265.536 66.5735C266.555 67.8988 267.472 68.0007 269.001 66.8793L274.606 62.5976L275.829 64.2288L270.122 68.6124C267.778 70.4474 265.74 70.1416 263.905 67.7968C262.275 65.554 262.479 63.4132 264.823 61.6801Z" fill="#FFFCFA" />
                    <path d="M278.683 68.3065L282.759 74.7291L281.128 75.7485L278.173 71.0591L275.931 72.4863L278.683 76.8699L277.052 77.8894L274.3 73.5058L271.753 75.1369L274.708 79.8263L273.077 80.8458L269.001 74.4232L278.683 68.3065Z" fill="#FFFCFA" />
                    <path d="M289.383 86.9625L277.256 88.1858L276.542 86.8606L284.491 77.5836L285.511 79.6225L279.804 86.045L288.364 85.0255L289.383 86.9625Z" fill="#FFFCFA" />
                    <path d="M284.695 98.6862L282.963 94.6084L280.415 94.7103L279.498 92.6714L291.727 92.3656L292.339 93.7928L283.676 102.458L282.759 100.419L284.695 98.6862ZM286.122 97.3609L289.281 94.3025L284.899 94.5064L286.122 97.3609Z" fill="#FFFCFA" />
                    <path d="M289.179 108.473L290.198 110.308C288.976 110.818 288.466 111.939 288.874 113.162C289.179 114.284 289.995 114.793 290.912 114.488C291.625 114.284 291.931 113.57 292.135 111.735C292.339 109.187 292.95 108.167 294.581 107.657C296.313 107.148 297.944 108.167 298.555 110.206C298.963 111.633 298.657 113.06 297.536 114.08L296.007 112.755C296.721 112.143 296.925 111.327 296.721 110.614C296.517 109.798 295.804 109.39 295.09 109.594C294.377 109.798 294.071 110.41 293.969 112.245C293.765 114.793 293.154 115.813 291.625 116.323C289.587 116.934 287.753 115.711 287.141 113.57C286.53 111.429 287.243 109.288 289.179 108.473Z" fill="#FFFCFA" />
                    <path d="M294.581 118.565C298.046 117.852 300.797 119.585 301.511 122.745C302.122 125.905 300.288 128.556 296.721 129.27C293.256 129.983 290.504 128.25 289.893 125.09C289.281 121.828 291.116 119.279 294.581 118.565ZM296.313 127.231C298.759 126.721 299.982 125.192 299.574 123.153C299.167 121.114 297.434 120.095 294.988 120.604C292.542 121.114 291.319 122.643 291.727 124.682C292.135 126.721 293.969 127.639 296.313 127.231Z" fill="#FFFCFA" />
                    <path d="M297.23 132.328C300.797 131.92 303.345 133.857 303.753 137.221C303.956 139.566 303.039 141.503 301.001 142.624L300.084 140.789C301.409 140.178 302.02 138.954 301.816 137.425C301.612 135.284 299.982 134.163 297.536 134.367C294.988 134.673 293.663 136.1 293.867 138.241C294.071 139.77 294.886 140.789 296.313 141.197L295.804 143.134C293.561 142.523 292.135 140.891 291.931 138.445C291.523 135.081 293.663 132.736 297.23 132.328Z" fill="#FFFCFA" />
                    <path d="M304.16 146.294L304.262 148.333L292.95 148.741L292.848 146.702L304.16 146.294Z" fill="#FFFCFA" />
                    <path d="M295.09 159.241L295.192 154.756L292.848 153.838L292.95 151.596L304.16 156.489V158.018L292.644 162.198L292.746 159.955L295.09 159.241ZM297.026 158.63L301.205 157.203L297.128 155.571L297.026 158.63Z" fill="#FFFCFA" />
                    <path d="M301.612 181.465L291.116 175.247L291.319 173.718L303.243 170.965L302.937 173.208L294.479 175.043L301.918 179.325L301.612 181.465Z" fill="#FFFCFA" />
                    <path d="M300.899 185.034L300.491 187.072L289.383 184.626L289.791 182.587L300.899 185.034Z" fill="#FFFCFA" />
                    <path d="M296.823 193.495L297.842 190.029L299.676 190.539L297.128 199.306L295.294 198.796L296.313 195.33L287.141 192.679L287.753 190.742L296.823 193.495Z" fill="#FFFCFA" />
                    <path d="M285.612 204.709L287.141 200.529L285.205 198.898L286.02 196.859L295.09 205.117L294.581 206.544L282.351 206.85L283.167 204.811L285.612 204.709ZM287.549 204.709H291.931L288.568 201.855L287.549 204.709Z" fill="#FFFCFA" />
                    <path d="M291.421 214.19L290.606 216.025L282.046 212.049L280.007 216.433L278.275 215.617L281.128 209.398L291.421 214.19Z" fill="#FFFCFA" />
                    <path d="M286.733 223.671L285.816 225.506L275.829 220.103L276.746 218.268L286.733 223.671Z" fill="#FFFCFA" />
                    <path d="M278.988 226.219C282.046 228.156 282.861 231.215 281.128 234.069C279.804 236.108 277.867 237.026 275.625 236.618L276.033 234.681C277.46 234.987 278.683 234.477 279.498 233.152C280.619 231.317 280.109 229.482 277.969 228.054C275.829 226.729 273.893 227.035 272.772 228.87C271.956 230.195 271.956 231.521 272.976 232.744L271.345 233.967C269.918 232.132 269.918 229.889 271.141 227.85C272.772 224.894 275.931 224.282 278.988 226.219Z" fill="#FFFCFA" />
                    <path d="M275.829 241.409L274.606 243.04L265.434 236.312L266.657 234.681L275.829 241.409Z" fill="#FFFCFA" />
                    <path d="M260.644 246.099L263.498 242.633L262.275 240.492L263.702 238.759L269.511 249.565L268.491 250.788L256.874 247.016L258.3 245.283L260.644 246.099ZM262.581 246.812L266.759 248.341L264.517 244.468L262.581 246.812Z" fill="#FFFCFA" />
                    <path d="M252.288 267.405L244.542 259.046L246.071 257.618L254.937 260.167L249.638 254.356L251.167 252.929L258.912 261.288L257.383 262.716L248.517 260.269L253.816 265.978L252.288 267.405Z" fill="#FFFCFA" />
                    <path d="M244.033 264.857L248.517 270.565L246.886 271.789L242.606 266.182C241.383 264.653 240.568 264.449 239.141 265.57C237.714 266.692 237.714 267.507 238.937 269.036L243.218 274.643L241.587 275.867L237.205 270.158C235.37 267.813 235.676 265.774 237.918 263.939C240.262 262.308 242.3 262.614 244.033 264.857Z" fill="#FFFCFA" />
                    <path d="M237.511 278.823L231.192 282.901L230.173 281.372L234.861 278.415L233.434 276.172L229.154 278.925L228.135 277.396L232.415 274.643L230.784 272.095L226.097 275.051L225.077 273.522L231.396 269.444L237.511 278.823Z" fill="#FFFCFA" />
                    <path d="M218.963 289.629L217.638 277.498L218.963 276.784L228.339 284.634L226.402 285.653L219.88 280.046L221.001 288.61L218.963 289.629Z" fill="#FFFCFA" />
                    <path d="M207.141 284.94L211.218 283.207L211.116 280.658L213.154 279.741L213.46 291.974L212.033 292.586L203.37 283.92L205.409 283.003L207.141 284.94ZM208.568 286.367L211.625 289.527L211.421 285.144L208.568 286.367Z" fill="#FFFCFA" />
                    <path d="M197.46 289.527L195.625 290.547C195.116 289.323 193.995 288.814 192.772 289.221C191.651 289.527 191.141 290.343 191.447 291.26C191.651 291.974 192.364 292.28 194.198 292.484C196.746 292.688 197.765 293.299 198.275 294.828C198.784 296.561 197.765 298.193 195.727 298.804C194.3 299.212 192.874 298.906 191.854 297.785L193.179 296.256C193.791 296.969 194.606 297.173 195.319 296.969C196.135 296.765 196.542 296.052 196.339 295.338C196.135 294.624 195.421 294.421 193.689 294.217C191.141 294.013 190.122 293.401 189.612 291.872C189.001 289.833 190.122 287.998 192.364 287.386C194.504 286.877 196.542 287.692 197.46 289.527Z" fill="#FFFCFA" />
                    <path d="M187.37 295.032C188.084 298.498 186.453 301.251 183.294 301.965C180.135 302.576 177.485 300.741 176.772 297.275C176.058 293.809 177.689 291.056 180.848 290.343C184.007 289.731 186.657 291.566 187.37 295.032ZM178.708 296.867C179.218 299.314 180.848 300.537 182.886 300.13C184.925 299.722 185.944 297.989 185.434 295.542C184.925 293.095 183.294 291.872 181.256 292.382C179.218 292.688 178.198 294.421 178.708 296.867Z" fill="#FFFCFA" />
                    <path d="M173.612 297.785C174.02 301.353 172.084 303.901 168.823 304.309C166.479 304.615 164.542 303.596 163.421 301.557L165.256 300.639C165.867 301.965 167.09 302.576 168.619 302.372C170.759 302.168 171.88 300.537 171.676 297.989C171.37 295.44 169.944 294.115 167.804 294.421C166.275 294.624 165.256 295.44 164.848 296.969L162.912 296.459C163.523 294.217 165.154 292.789 167.6 292.484C170.861 292.076 173.205 294.115 173.612 297.785Z" fill="#FFFCFA" />
                    <path d="M159.753 304.717L157.714 304.819L157.205 293.401L159.243 293.299L159.753 304.717Z" fill="#FFFCFA" />
                    <path d="M146.708 295.746L151.192 295.848L152.109 293.503H154.351L149.561 304.717H148.033L143.753 293.299H145.995L146.708 295.746ZM147.319 297.683L148.746 301.863L150.377 297.785L147.319 297.683Z" fill="#FFFCFA" />
                    <path d="M124.593 302.474L130.708 291.872L132.237 292.076L135.09 304.003L132.848 303.698L131.014 295.338L126.835 302.882L124.593 302.474Z" fill="#FFFCFA" />
                    <path d="M120.925 301.659L118.886 301.251L121.332 290.139L123.37 290.547L120.925 301.659Z" fill="#FFFCFA" />
                    <path d="M112.466 297.683L115.931 298.6L115.421 300.435L106.555 297.989L107.065 296.154L110.53 297.071L113.077 287.896L115.014 288.406L112.466 297.683Z" fill="#FFFCFA" />
                    <path d="M101.256 286.469L105.434 287.998L107.065 286.061L109.103 286.775L100.95 295.848L99.5232 295.338L99.1156 283.207L101.154 283.92L101.256 286.469ZM101.256 288.508V292.891L104.109 289.527L101.256 288.508Z" fill="#FFFCFA" />
                    <path d="M91.7781 292.382L89.9437 291.566L93.9182 282.901L89.536 280.862L90.3513 279.129L96.6698 281.983L91.7781 292.382Z" fill="#FFFCFA" />
                    <path d="M82.1984 287.794L80.364 286.877L85.6634 276.784L87.4978 277.702L82.1984 287.794Z" fill="#FFFCFA" />
                    <path d="M79.6507 280.046C77.7143 283.105 74.657 283.92 71.8035 282.187C69.7653 280.964 68.8481 279.027 69.2557 276.682L71.1921 277.09C70.8863 278.517 71.4978 279.74 72.7207 280.556C74.5551 281.677 76.3895 281.168 77.8163 279.027C79.1411 276.886 78.8354 274.949 77.001 273.828C75.6761 273.012 74.3513 273.012 73.1284 274.032L71.9054 272.4C73.7398 270.973 75.9819 270.871 78.0201 272.197C80.9755 273.828 81.587 276.988 79.6507 280.046Z" fill="#FFFCFA" />
                    <path d="M64.364 276.886L62.7335 275.663L69.3577 266.386L70.9882 267.609L64.364 276.886Z" fill="#FFFCFA" />
                    <path d="M59.6761 261.9L63.1411 264.755L65.2812 263.531L67.0137 264.958L56.3131 270.871L55.0901 269.852L58.8608 258.23L60.5933 259.657L59.6761 261.9ZM59.0647 263.735L57.6379 267.915L61.4086 265.672L59.0647 263.735Z" fill="#FFFCFA" />
                    <path d="M38.3768 253.643L46.6315 245.895L48.0583 247.424L45.6124 256.293L51.3194 250.89L52.7462 252.419L44.4914 260.167L43.0647 258.638L45.5105 249.769L39.8035 255.172L38.3768 253.643Z" fill="#FFFCFA" />
                    <path d="M40.8226 245.283L35.1156 249.769L33.8927 248.138L39.3959 243.856C40.9245 242.632 41.0264 241.715 40.0073 240.39C38.9882 239.064 38.071 238.962 36.5424 240.186L31.0392 244.468L29.8163 242.836L35.4213 238.453C37.7653 236.618 39.8035 236.924 41.6379 239.166C43.3704 241.511 43.0647 243.55 40.8226 245.283Z" fill="#FFFCFA" />
                    <path d="M26.8608 238.861L22.6825 232.54L24.2112 231.521L27.2685 236.108L29.5105 234.579L26.657 230.297L28.1857 229.278L31.0392 233.559L33.587 231.928L30.5296 227.341L32.0583 226.321L36.2366 232.642L26.8608 238.861Z" fill="#FFFCFA" />
                    <path d="M15.9564 220.409L28.0838 218.981L28.7972 220.307L20.95 229.686L19.829 227.749L25.4341 221.224L16.8736 222.345L15.9564 220.409Z" fill="#FFFCFA" />
                    <path d="M20.5424 208.583L22.3768 212.661L24.9245 212.457L25.8417 214.496L13.5105 214.903L12.899 213.476L21.4596 204.709L22.3768 206.748L20.5424 208.583ZM19.1156 209.908L15.9564 212.967L20.3385 212.661L19.1156 209.908Z" fill="#FFFCFA" />
                    <path d="M15.8545 198.898L14.7334 197.063C15.9564 196.553 16.4659 195.432 16.0583 194.209C15.7526 193.087 14.9373 192.578 14.0201 192.883C13.3067 193.087 13.001 193.801 12.7971 195.636C12.5933 198.184 11.9819 199.204 10.4532 199.714C8.72071 200.223 7.09014 199.306 6.47867 197.267C6.07103 195.84 6.37676 194.413 7.49778 193.393L9.02644 194.718C8.31307 195.33 8.10925 196.146 8.31307 196.859C8.51689 197.675 9.23026 198.083 9.94364 197.879C10.657 197.675 10.8608 196.961 11.0647 195.126C11.2685 192.578 11.8799 191.558 13.4086 191.048C15.4468 190.437 17.2812 191.558 17.8927 193.801C18.5041 195.942 17.7908 197.981 15.8545 198.898Z" fill="#FFFCFA" />
                    <path d="M10.3513 188.907C6.88632 189.621 4.13473 187.99 3.42135 184.83C2.70797 181.669 4.64428 179.019 8.10925 178.305C11.5742 177.592 14.3258 179.223 15.0392 182.383C15.7526 185.543 13.8163 188.092 10.3513 188.907ZM8.41498 180.242C5.96912 180.752 4.74619 182.383 5.25575 184.422C5.66339 186.461 7.39587 187.378 9.84173 186.869C12.2876 186.359 13.4086 184.728 13.001 182.689C12.5933 180.65 10.8608 179.732 8.41498 180.242Z" fill="#FFFCFA" />
                    <path d="M7.4978 175.043C3.93092 175.451 1.38315 173.616 0.975507 170.252C0.669775 167.907 1.58697 165.97 3.7271 164.848L4.6443 166.582C3.31946 167.295 2.70799 168.417 2.91181 169.946C3.21755 172.087 4.74621 173.208 7.29398 172.902C9.84175 172.596 11.1666 171.169 10.8609 169.028C10.657 167.499 9.84175 166.48 8.31309 166.174L8.82264 164.237C11.0647 164.747 12.4914 166.48 12.7972 168.926C13.2048 172.29 11.1666 174.635 7.4978 175.043Z" fill="#FFFCFA" />
                    <path d="M0.465925 161.28L0.364014 159.241L11.6761 158.732L11.778 160.771L0.465925 161.28Z" fill="#FFFCFA" />
                    <path d="M9.33218 148.231L9.23027 152.717L11.5742 153.635V155.877L0.262115 150.984V149.455L11.6761 145.071V147.314L9.33218 148.231ZM7.39587 148.843L3.31944 150.27L7.39587 151.901V148.843Z" fill="#FFFCFA" />
                    <path d="M2.50416 126.109L13.1029 132.226L12.8991 133.755L0.975494 136.712L1.28123 134.469L9.63791 132.532L2.19842 128.25L2.50416 126.109Z" fill="#FFFCFA" />
                    <path d="M3.31943 122.439L3.72707 120.4L14.8354 122.745L14.4277 124.784L3.31943 122.439Z" fill="#FFFCFA" />
                    <path d="M7.19205 113.876L6.27486 117.342L4.44046 116.832L6.88632 107.963L8.72072 108.473L7.80352 111.939L16.9755 114.488L16.4659 116.425L7.19205 113.876Z" fill="#FFFCFA" />
                    <path d="M18.3003 102.662L16.7717 106.842L18.708 108.473L17.9946 110.512L8.82263 102.356L9.33219 100.929L21.5615 100.521L20.8481 102.56L18.3003 102.662ZM16.364 102.662H11.9819L15.3449 105.516L16.364 102.662Z" fill="#FFFCFA" />
                    <path d="M12.3895 93.1811L13.2048 91.3461L21.8672 95.22L23.9054 90.7345L25.6379 91.55L22.6825 97.8706L12.3895 93.1811Z" fill="#FFFCFA" />
                    <path d="M16.8736 83.5983L17.7908 81.7633L27.88 86.9625L26.9628 88.7975L16.8736 83.5983Z" fill="#FFFCFA" />
                    <path d="M24.6188 80.9477C21.5615 79.0108 20.6443 76.0544 22.4787 73.098C23.7016 71.0591 25.6379 70.1416 27.9819 70.5494L27.6761 72.4863C26.2494 72.1805 25.0265 72.7921 24.2112 74.1174C23.0901 75.9524 23.5997 77.7875 25.8417 79.1127C27.9819 80.438 29.9182 80.1322 31.0392 78.1952C31.8545 76.8699 31.8545 75.5447 30.8354 74.3213L32.4659 73.098C33.8927 74.933 33.9946 77.0738 32.6698 79.2147C30.8354 82.1711 27.778 82.8847 24.6188 80.9477Z" fill="#FFFCFA" />
                    <path d="M27.6761 65.7579L28.7971 64.0249L38.071 70.6513L36.95 72.2824L27.6761 65.7579Z" fill="#FFFCFA" />
                    <path d="M42.657 60.8646L39.8035 64.3307L41.1283 66.4716L39.7016 68.2046L33.7908 57.5004L34.708 56.2771L46.4277 59.9471L45.001 61.6801L42.657 60.8646ZM40.8226 60.2529L36.6443 58.8257L38.8863 62.5976L40.8226 60.2529Z" fill="#FFFCFA" />
                </svg>
                <div className="texto">
                    <h2>{sociaVitalicia.nombre}</h2>
                    <h3>{sociaVitalicia.profesion}</h3>
                    <h3>{sociaVitalicia.fecha}</h3>
                </div>
                {(sociaVitalicia.spCode !== "") ?
                    <img className="spcode" src={sociaVitalicia.spCode} /> :
                    <div></div>
                }

            </div>

            <div className="frasePadre">
                <img className="comillasA" src="data:image/png;base64,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" />
                <div className="frase">
                    <p>{sociaVitalicia.frase}</p>
                    <span>{sociaVitalicia.frase}</span>
                </div>
                <img className="comillasC" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABVCAYAAAC7MZFhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVlSURBVHgB7Z2/b9tGFIDfHUnBaBuAst0go7J59KhRQFPHyOSxY8cisAsv3b13MZyg8Ng/wVPquhk0atTorRwF1JHYxnZpibzLHRXJlixHokQ+vQTvAwzZsH7w/L337vhIkwKm0Nl9VgPChOtx4+lBPcryms7+jg/x5SYQRQmI3KnPkrIGhPFDaJqHTGKMTh9kqQZEkVqFEhiSsBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiisBiiCCiAzu7WjlGOcj2w8tHZASDR2Xu+D0L7UDBa6RZnDEGEgKgQMVLCCmCgVQhfIFqJYsQorXHEgMAVg1DGLNpJirnCn9DiCSBgIwuQuPzlBcqYUrTIX4y9EKhGKmU2sgCJ3lUPTYzWcQEZ072qABYasZRJUQEklPqqADGOrAESsue2AIH0csBIy3/L49/e5Ltc7rz8fhNrgrSUj08DwCC+rgEWWgf2ITcxaVQhZstgAEWDnS1KqLQK5CZGq6sfMLNlMIAiSaUk//8IiGiVBPZx+pXKp/D3QW3Fvyhtm2/xlpMG2fXOoUCGUhCDzfJ+HQL7uJCYdGncNpkicaXYPf7y8VkABdH5qVYxUnawpdjyPLhPwdxi/t17VtV2UpQCaS//DgXNLzb7V9tOTYFTNR8C6DjpfQpSMoux0aRL3rYCs3dfSG96BmKvCTnSL8duVVzIqsLq800g9HvD8jyTmOGGg6zavfpl+UjJsYylJct1K1aIHdcScuQWlTTv3m7lQTGd/Zovb9wN5YoNaIuKXb8tdcMHOKIOCzCQYXrr/S8gMi43qY/8OPjGZsWjC6gI6VSkdjdMi9hXHtDCZsvh20xlzAYYdD0TWKoiwNnQSyxVD2KypXxUH2kvuRe7WxuOENvQ1v5wr0aQiKH7ZMiWdz9/t+0oZ1MrIyINP4dGZkxiLFss0lHm2An2snAe0mz5a+ZssS5IZscYZhHVKB/W7zVjJZR6AXwOOPHvWZ6uYonS4FwIE2z/rd7UJ/1KWltCAdoBp7lQsj4pqj7J5xBwjnvy0I3v0llFyH4bgCIygfPy69M6ZIR8wKXB9nB3vD/daxUARUyqt7/tnsCcUA24dF6ZEmypGOW49OqxPQPGzCtZ73E59h4BUENBc+3oz9NpT0vF+H5ES8xHKZnnlTHIBZyRUn59NlMF6M8xNio18qlAD2EalOFafLyoFAulgOuXr7OZy/JtS8Z2bAXekbpJ2I1fe3U2Nc1nxQZcZ+95uMz9NLsASYRTX3v1RyPL627FKCNGiuWISUuXe7J2WMAx/GUGnPls7fbMuLJn/1CM97XX6t3EgImNJu3KRuh3G08P3haytJXmELRC/qeGebPkLkMx3/z6phXubkVobQzTuNOmR5THXPIpnJVSoJACbhBondWosdBqEsba/lpoM1mKChTEbYYsvuGzghJw/VLczEPIgBEx/bR3KpAjqQwjPNGi8X69G2AJuUsRAZeWK5k0pfTOy4f5n3/gjn6YYxYAUIVFMUtvJeJzz7zfuyXJuEteASfABBiowMrwj4o92XBEzCPzRwzbJciEPTNd6VbsJCEVEePMFXAfx2UOsAV2R9WU3xbmuEYzZtK632ygECoSic2CJJJCtFQiIg+81j+Pr0NqEiYxHnD98ioiOy6tTDZJiFw7Ti3DxO0aCRAte1z3zqtIT3SDEChsXJ5cvnzxpFe6jopeBebFB7t6bY3jaAjOAAAAAElFTkSuQmCC" />
            </div>

            <img className="logo" src="data:image/png;base64,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"
            />

        </div>
    )
}

const mapStateToProps = (state) => ({

    sociaVitalicia: state.sociaVitalicia,
})



export default connect(mapStateToProps)(SociaVitalicia)