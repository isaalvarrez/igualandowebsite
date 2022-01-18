import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagina404 = () => {
    return (
        <div className="w-screen h-screen bg-black flex flex-col items-center justify-center relative">
            <svg className="absolute top-0 right-0 w-9/12 lg:w-auto" xmlns="http://www.w3.org/2000/svg" width="773" height="173" viewBox="0 0 773 173" fill="none">
                <path d="M136.283 170.565L135.236 171.613L136.283 172.66L137.33 171.613L136.283 170.565ZM52.981 87.2638L51.9339 88.3109L51.9339 88.3109L52.981 87.2638ZM186.264 120.584L187.311 121.632L188.358 120.584L187.311 119.537L186.264 120.584ZM102.962 37.2827L101.915 36.2356L100.868 37.2827L101.915 38.3299L102.962 37.2827ZM186.264 -46.0189L187.311 -44.9718L188.358 -46.0189L187.311 -47.0661L186.264 -46.0189ZM136.283 -96L137.33 -97.0471L136.283 -98.0943L135.236 -97.0471L136.283 -96ZM52.981 -12.6983L51.9339 -13.7455L51.9339 -13.7455L52.981 -12.6983ZM3.00001 37.2827L1.95284 36.2355L0.90567 37.2827L1.95284 38.3299L3.00001 37.2827ZM137.33 169.518L54.0282 86.2166L51.9339 88.3109L135.236 171.613L137.33 169.518ZM185.217 119.537L135.236 169.518L137.33 171.613L187.311 121.632L185.217 119.537ZM101.915 38.3299L185.217 121.632L187.311 119.537L104.009 36.2356L101.915 38.3299ZM104.009 38.3299L187.311 -44.9718L185.217 -47.0661L101.915 36.2356L104.009 38.3299ZM187.311 -47.0661L137.33 -97.0471L135.236 -94.9528L185.217 -44.9718L187.311 -47.0661ZM135.236 -97.0471L51.9339 -13.7455L54.0282 -11.6511L137.33 -94.9528L135.236 -97.0471ZM51.9339 -13.7455L1.95284 36.2355L4.04717 38.3299L54.0282 -11.6511L51.9339 -13.7455ZM54.0282 86.2166L4.04717 36.2355L1.95284 38.3299L51.9339 88.3109L54.0282 86.2166Z" fill="#FFFCFA" />
                <path d="M355.088 170.565L354.041 171.613L355.088 172.66L356.136 171.613L355.088 170.565ZM271.787 87.2638L270.74 88.3109L270.74 88.3109L271.787 87.2638ZM405.069 120.584L406.117 121.632L407.164 120.584L406.117 119.537L405.069 120.584ZM321.768 37.2827L320.721 36.2356L319.673 37.2827L320.721 38.3299L321.768 37.2827ZM405.069 -46.0189L406.117 -44.9718L407.164 -46.0189L406.117 -47.0661L405.069 -46.0189ZM355.088 -96L356.136 -97.0471L355.088 -98.0943L354.041 -97.0471L355.088 -96ZM271.787 -12.6983L270.74 -13.7455L270.74 -13.7455L271.787 -12.6983ZM221.806 37.2827L220.759 36.2355L220.216 36.7777L220.346 37.5333L221.806 37.2827ZM221.806 37.2827L220.346 37.5334L220.426 37.9972L220.759 38.3299L221.806 37.2827ZM356.136 169.518L272.834 86.2166L270.74 88.3109L354.041 171.613L356.136 169.518ZM404.022 119.537L354.041 169.518L356.136 171.613L406.117 121.632L404.022 119.537ZM320.721 38.3299L404.022 121.632L406.117 119.537L322.815 36.2356L320.721 38.3299ZM322.815 38.3299L406.117 -44.9718L404.022 -47.0661L320.721 36.2356L322.815 38.3299ZM406.117 -47.0661L356.136 -97.0471L354.041 -94.9528L404.022 -44.9718L406.117 -47.0661ZM354.041 -97.0471L270.74 -13.7455L272.834 -11.6511L356.136 -94.9528L354.041 -97.0471ZM222.853 38.3299L272.834 -11.6511L270.74 -13.7455L220.759 36.2355L222.853 38.3299ZM223.265 37.0321L223.265 37.0321L220.346 37.5333L220.346 37.5334L223.265 37.0321ZM272.834 86.2166L222.853 36.2356L220.759 38.3299L270.74 88.3109L272.834 86.2166Z" fill="#FFFCFA" />
                <path d="M573.895 170.565L572.848 171.613L573.895 172.66L574.942 171.613L573.895 170.565ZM490.593 87.2638L489.546 88.3109L489.546 88.3109L490.593 87.2638ZM623.876 120.584L624.923 121.632L625.97 120.584L624.923 119.537L623.876 120.584ZM540.574 37.2827L539.527 36.2356L538.48 37.2827L539.527 38.3299L540.574 37.2827ZM623.876 -46.0189L624.923 -44.9718L625.97 -46.0189L624.923 -47.0661L623.876 -46.0189ZM573.895 -96L574.942 -97.0471L573.895 -98.0943L572.848 -97.0471L573.895 -96ZM490.593 -12.6983L489.546 -13.7455L489.546 -13.7455L490.593 -12.6983ZM440.612 37.2827L439.565 36.2355L439.023 36.7777L439.153 37.5333L440.612 37.2827ZM440.612 37.2827L439.153 37.5334L439.232 37.9972L439.565 38.3299L440.612 37.2827ZM574.942 169.518L491.641 86.2166L489.546 88.3109L572.848 171.613L574.942 169.518ZM622.829 119.537L572.848 169.518L574.942 171.613L624.923 121.632L622.829 119.537ZM539.527 38.3299L622.829 121.632L624.923 119.537L541.622 36.2356L539.527 38.3299ZM541.622 38.3299L624.923 -44.9718L622.829 -47.0661L539.527 36.2356L541.622 38.3299ZM624.923 -47.0661L574.942 -97.0471L572.848 -94.9528L622.829 -44.9718L624.923 -47.0661ZM572.848 -97.0471L489.546 -13.7455L491.641 -11.6511L574.942 -94.9528L572.848 -97.0471ZM441.659 38.3299L491.641 -11.6511L489.546 -13.7455L439.565 36.2355L441.659 38.3299ZM442.072 37.0321L442.072 37.0321L439.153 37.5333L439.153 37.5334L442.072 37.0321ZM491.641 86.2166L441.659 36.2356L439.565 38.3299L489.546 88.3109L491.641 86.2166Z" fill="#FFFCFA" />
                <path d="M792.7 170.565L791.653 171.613L792.7 172.66L793.747 171.613L792.7 170.565ZM709.398 87.2638L708.351 88.3109L708.351 88.3109L709.398 87.2638ZM842.681 120.584L843.728 121.632L844.775 120.584L843.728 119.537L842.681 120.584ZM759.379 37.2827L758.332 36.2356L757.285 37.2827L758.332 38.3299L759.379 37.2827ZM842.681 -46.0189L843.728 -44.9718L844.775 -46.0189L843.728 -47.0661L842.681 -46.0189ZM792.7 -96L793.747 -97.0471L792.7 -98.0943L791.653 -97.0471L792.7 -96ZM709.398 -12.6983L708.351 -13.7455L708.351 -13.7455L709.398 -12.6983ZM659.417 37.2827L658.37 36.2355L657.828 36.7777L657.957 37.5333L659.417 37.2827ZM659.417 37.2827L657.957 37.5334L658.037 37.9972L658.37 38.3299L659.417 37.2827ZM793.747 169.518L710.445 86.2166L708.351 88.3109L791.653 171.613L793.747 169.518ZM841.634 119.537L791.653 169.518L793.747 171.613L843.728 121.632L841.634 119.537ZM758.332 38.3299L841.634 121.632L843.728 119.537L760.426 36.2356L758.332 38.3299ZM760.426 38.3299L843.728 -44.9718L841.634 -47.0661L758.332 36.2356L760.426 38.3299ZM843.728 -47.0661L793.747 -97.0471L791.653 -94.9528L841.634 -44.9718L843.728 -47.0661ZM791.653 -97.0471L708.351 -13.7455L710.445 -11.6511L793.747 -94.9528L791.653 -97.0471ZM660.464 38.3299L710.445 -11.6511L708.351 -13.7455L658.37 36.2355L660.464 38.3299ZM660.877 37.0321L660.877 37.0321L657.957 37.5333L657.957 37.5334L660.877 37.0321ZM710.445 86.2166L660.464 36.2356L658.37 38.3299L708.351 88.3109L710.445 86.2166Z" fill="#FFFCFA" />
            </svg>
            <svg className="absolute bottom-0 left-0 w-9/12 lg:w-auto" xmlns="http://www.w3.org/2000/svg" width="847" height="150" viewBox="0 0 847 150" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M798.094 199.203C807.955 184.922 814.837 161.755 811.852 128.249L843.936 125.39C847.408 164.359 839.762 195.549 824.6 217.506C809.367 239.567 786.852 251.639 763.32 251.639C739.789 251.639 717.274 239.567 702.041 217.506C686.879 195.549 679.233 164.359 682.705 125.39C685.69 91.8835 678.808 68.7165 668.947 54.4356C659.158 40.2592 646.157 34.2116 634.173 34.2116C622.189 34.2116 609.189 40.2592 599.4 54.4356C589.539 68.7165 582.656 91.8835 585.642 125.39C589.114 164.359 581.467 195.549 566.306 217.506C551.072 239.567 528.558 251.639 505.026 251.639C481.494 251.639 458.98 239.567 443.746 217.506C428.585 195.549 420.938 164.359 424.41 125.39C427.396 91.8835 420.513 68.7164 410.652 54.4356C400.863 40.2592 387.863 34.2116 375.879 34.2116C363.895 34.2116 350.894 40.2592 341.105 54.4356C331.244 68.7164 324.362 91.8834 327.347 125.39C330.819 164.359 323.173 195.549 308.011 217.506C292.778 239.567 270.263 251.639 246.732 251.639C223.2 251.639 200.685 239.567 185.452 217.506C170.29 195.549 162.644 164.359 166.116 125.39C169.101 91.8834 162.219 68.7164 152.358 54.4356C142.569 40.2592 129.568 34.2115 117.584 34.2115C105.6 34.2115 92.5996 40.2592 82.8109 54.4356C72.9499 68.7164 66.0675 91.8834 69.0528 125.39C72.5248 164.359 64.8782 195.549 49.7169 217.506C34.4834 239.567 11.9687 251.639 -11.563 251.639C-35.0946 251.639 -57.6093 239.567 -72.8428 217.506C-88.0041 195.549 -95.6507 164.359 -92.1787 125.39C-89.1934 91.8834 -96.0758 68.7164 -105.937 54.4355C-115.726 40.2591 -128.726 34.2115 -140.71 34.2115C-152.694 34.2115 -165.695 40.2591 -175.484 54.4355C-185.344 68.7164 -192.227 91.8834 -189.242 125.39C-185.77 164.359 -193.416 195.549 -208.578 217.506C-223.811 239.567 -246.326 251.639 -269.857 251.639C-293.389 251.639 -315.904 239.567 -331.137 217.506C-346.299 195.549 -353.945 164.359 -350.473 125.39C-347.488 91.8834 -354.37 68.7164 -364.231 54.4355C-374.02 40.2591 -387.021 34.2115 -399.005 34.2115C-410.988 34.2115 -423.989 40.2591 -433.778 54.4355C-443.639 68.7164 -450.521 91.8834 -447.536 125.39L-479.62 128.249C-483.092 89.2796 -475.446 58.0898 -460.284 36.1328C-445.051 14.0714 -422.536 2.00009 -399.005 2.00009C-375.473 2.00009 -352.958 14.0714 -337.725 36.1329C-322.563 58.0898 -314.917 89.2796 -318.389 128.249C-321.374 161.755 -314.492 184.922 -304.631 199.203C-294.842 213.38 -281.841 219.427 -269.857 219.427C-257.874 219.427 -244.873 213.38 -235.084 199.203C-225.223 184.922 -218.341 161.755 -221.326 128.249C-224.798 89.2796 -217.151 58.0898 -201.99 36.1329C-186.757 14.0714 -164.242 2.00011 -140.71 2.00011C-117.178 2.00011 -94.6638 14.0714 -79.4303 36.1329C-64.2691 58.0899 -56.6224 89.2796 -60.0944 128.249C-63.0798 161.755 -56.1974 184.922 -46.3364 199.203C-36.5476 213.38 -23.5468 219.427 -11.563 219.427C0.420894 219.427 13.4217 213.38 23.2105 199.203C33.0715 184.922 39.9538 161.755 36.9685 128.249C33.4965 89.2796 41.1432 58.0899 56.3045 36.1329C71.5379 14.0714 94.0526 2.00013 117.584 2.00013C141.116 2.00013 163.631 14.0715 178.864 36.1329C194.025 58.0899 201.672 89.2796 198.2 128.249C195.215 161.755 202.097 184.922 211.958 199.203C221.747 213.38 234.748 219.427 246.732 219.427C258.715 219.427 271.716 213.38 281.505 199.203C291.366 184.922 298.248 161.755 295.263 128.249C291.791 89.2796 299.438 58.0899 314.599 36.1329C329.832 14.0715 352.347 2.00015 375.879 2.00015C399.41 2.00016 421.925 14.0715 437.159 36.1329C452.32 58.0899 459.967 89.2797 456.495 128.249C453.509 161.755 460.392 184.922 470.253 199.203C480.041 213.38 493.042 219.427 505.026 219.427C517.01 219.427 530.011 213.38 539.799 199.203C549.66 184.922 556.543 161.755 553.557 128.249C550.085 89.2797 557.732 58.0899 572.893 36.1329C588.127 14.0715 610.642 2.00018 634.173 2.00018C657.705 2.00018 680.22 14.0715 695.453 36.1329C710.614 58.0899 718.261 89.2797 714.789 128.249C711.804 161.755 718.686 184.922 728.547 199.203C738.336 213.38 751.337 219.427 763.32 219.427C775.304 219.427 788.305 213.38 798.094 199.203Z" stroke="#F06F46" stroke-width="2.68428" />
            </svg>
            <h1 className="font-title text-white text-hero md:text-super-hero m-0 p-0 leading-none" >404</h1>
            <h2 className="font-body text-lg md:text-3xl text-white m-0 p-0">Upss...algo salió mal.</h2>
            <NavLink to={{ pathname: "/" }} className="bg-orange px-8 py-3 rounded-3xl text-white text-center m-2 mt-8 text-lg">Volver al sitio</NavLink>
        </div>
    )
}

export default Pagina404
