import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full bg-black p-4 py-8 pt-20 text-white flex flex-col text-center z-50">
            <div>
                <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="162" height="44" viewBox="0 0 162 44" fill="none">
                    <path d="M55.4161 17.4587V4.10025H52.7348V17.4587H55.4161ZM66.1397 6.20697V8.12216C65.3497 6.99698 63.9851 5.99151 62.3093 5.99151C59.3168 5.99151 57.2819 8.91218 57.2819 11.8329C57.2819 14.7535 59.0535 17.6742 61.4953 17.6742C63.3148 17.6742 65.1582 16.4772 66.1397 15.2323V17.4587C66.1397 18.9191 65.3976 20.2358 63.0754 20.2358C60.4181 20.2358 59.0056 18.7515 59.0056 18.7515L57.4974 20.4752C57.4974 20.4752 59.1492 22.3664 63.1472 22.3664C67.1212 22.3664 68.6773 20.3315 68.6773 17.4587V6.20697H66.1397ZM66.1397 12.9341C65.2779 14.2747 63.7218 15.5675 62.0938 15.5675C60.825 15.5675 59.7956 14.2987 59.7956 11.8329C59.7956 9.36704 61.615 8.09822 62.8839 8.09822C64.3442 8.09822 65.4694 9.12764 66.1397 10.3007V12.9341ZM79.6355 6.20697V12.9102C78.7736 14.2029 77.2415 15.4478 75.5896 15.4478C73.2914 15.4478 73.2914 12.7905 73.2914 11.0907V6.20697H70.7777V11.0907C70.7777 15.9745 72.3098 17.6742 74.9911 17.6742C76.8106 17.6742 78.6539 16.4772 79.6355 15.2323V17.4587H82.1731V6.20697H79.6355ZM89.7729 5.99151C86.7325 5.99151 84.147 7.6673 84.147 7.6673L85.2961 9.36704C85.2961 9.36704 87.331 8.05034 89.9405 8.05034C92.5739 8.05034 92.8851 9.03188 92.8851 11.1625V12.3117C91.7839 11.5695 90.0602 10.9231 88.3365 10.9231C85.2722 10.9231 84.0273 12.6229 84.0273 14.2987C84.0273 15.9984 85.1525 17.6742 88.3365 17.6742C90.0602 17.6742 91.7839 17.0278 92.8851 16.2857V17.4587H95.4227V11.1625C95.4227 8.05034 94.1779 5.99151 89.7729 5.99151ZM92.8851 14.5381C91.9275 15.3041 90.4911 15.9984 88.959 15.9984C87.5944 15.9984 86.541 15.2084 86.541 14.2987C86.541 13.4129 87.2113 12.6229 88.959 12.6229C90.4911 12.6229 91.9275 13.3171 92.8851 14.0832V14.5381ZM100.089 17.4587V2.16111H97.5749V17.4587H100.089ZM107.681 5.99151C104.641 5.99151 102.055 7.6673 102.055 7.6673L103.204 9.36704C103.204 9.36704 105.239 8.05034 107.849 8.05034C110.482 8.05034 110.793 9.03188 110.793 11.1625V12.3117C109.692 11.5695 107.968 10.9231 106.245 10.9231C103.18 10.9231 101.936 12.6229 101.936 14.2987C101.936 15.9984 103.061 17.6742 106.245 17.6742C107.968 17.6742 109.692 17.0278 110.793 16.2857V17.4587H113.331V11.1625C113.331 8.05034 112.086 5.99151 107.681 5.99151ZM110.793 14.5381C109.836 15.3041 108.399 15.9984 106.867 15.9984C105.503 15.9984 104.449 15.2084 104.449 14.2987C104.449 13.4129 105.12 12.6229 106.867 12.6229C108.399 12.6229 109.836 13.3171 110.793 14.0832V14.5381ZM122.641 5.99151C120.822 5.99151 118.978 7.1885 117.997 8.43338V6.20697H115.483V17.4587H117.997V10.7556C118.859 9.43886 120.415 8.21792 122.067 8.21792C124.341 8.21792 124.341 10.8753 124.341 12.575V17.4587H126.879V12.575C126.879 7.69124 125.322 5.99151 122.641 5.99151ZM137.422 2.16111V8.40944C136.632 7.28426 135.268 5.99151 133.592 5.99151C130.647 5.99151 128.565 8.91218 128.565 11.8329C128.565 14.7535 129.809 17.6742 132.778 17.6742C134.597 17.6742 136.441 16.7645 137.422 15.5196V17.4587H139.96V2.16111H137.422ZM137.422 13.3411C136.561 14.6817 135.004 15.5675 133.377 15.5675C131.701 15.5675 131.03 13.8199 131.03 11.8329C131.03 9.8219 132.036 8.09822 134.167 8.09822C135.627 8.09822 136.752 9.55856 137.422 10.7316V13.3411ZM147.781 5.99151C143.257 5.99151 141.749 9.39098 141.749 11.8329C141.749 14.2747 143.257 17.6742 147.781 17.6742C152.306 17.6742 153.838 14.2747 153.838 11.8329C153.838 9.39098 152.306 5.99151 147.781 5.99151ZM147.781 15.7111C145.1 15.7111 144.095 13.4847 144.095 11.8329C144.095 10.181 145.1 7.95458 147.781 7.95458C150.487 7.95458 151.468 10.181 151.468 11.8329C151.468 13.4847 150.487 15.7111 147.781 15.7111ZM55.2246 39.4587V24.1611H52.7109V39.4587H55.2246ZM62.8171 27.9915C59.7767 27.9915 57.1912 29.6673 57.1912 29.6673L58.3403 31.367C58.3403 31.367 60.3752 30.0503 62.9847 30.0503C65.6181 30.0503 65.9293 31.0319 65.9293 33.1625V34.3117C64.8281 33.5695 63.1044 32.9231 61.3807 32.9231C58.3164 32.9231 57.0715 34.6229 57.0715 36.2987C57.0715 37.9984 58.1967 39.6742 61.3807 39.6742C63.1044 39.6742 64.8281 39.0278 65.9293 38.2857V39.4587H68.4669V33.1625C68.4669 30.0503 67.222 27.9915 62.8171 27.9915ZM65.9293 36.5381C64.9717 37.3041 63.5353 37.9984 62.0031 37.9984C60.6386 37.9984 59.5852 37.2084 59.5852 36.2987C59.5852 35.4129 60.2555 34.6229 62.0031 34.6229C63.5353 34.6229 64.9717 35.3171 65.9293 36.0832V36.5381ZM86.0908 35.748C85.5642 36.8253 84.5347 37.7111 82.835 37.7111C80.1537 37.7111 79.2919 35.4847 79.2919 33.8329C79.2919 32.181 80.1537 29.9546 82.835 29.9546C84.5347 29.9546 85.5642 30.8404 86.0908 31.9177L88.0779 30.7446C87.216 29.2364 85.5642 27.9915 82.835 27.9915C78.3104 27.9915 76.8021 31.391 76.8021 33.8329C76.8021 36.2747 78.3104 39.6742 82.835 39.6742C85.5642 39.6742 87.216 38.4293 88.0779 36.8972L86.0908 35.748ZM94.963 27.9915C91.9226 27.9915 89.3371 29.6673 89.3371 29.6673L90.4862 31.367C90.4862 31.367 92.5211 30.0503 95.1306 30.0503C97.764 30.0503 98.0752 31.0319 98.0752 33.1625V34.3117C96.974 33.5695 95.2503 32.9231 93.5266 32.9231C90.4623 32.9231 89.2174 34.6229 89.2174 36.2987C89.2174 37.9984 90.3426 39.6742 93.5266 39.6742C95.2503 39.6742 96.974 39.0278 98.0752 38.2857V39.4587H100.613V33.1625C100.613 30.0503 99.368 27.9915 94.963 27.9915ZM98.0752 36.5381C97.1176 37.3041 95.6812 37.9984 94.1491 37.9984C92.7845 37.9984 91.7311 37.2084 91.7311 36.2987C91.7311 35.4129 92.4014 34.6229 94.1491 34.6229C95.6812 34.6229 97.1176 35.3171 98.0752 36.0832V36.5381ZM109.923 27.9915C108.104 27.9915 106.26 29.1885 105.279 30.4334V28.207H102.765V39.4587H105.279V32.7556C106.141 31.4389 107.697 30.2179 109.348 30.2179C111.623 30.2179 111.623 32.8753 111.623 34.575V39.4587H114.16V34.575C114.16 29.6912 112.604 27.9915 109.923 27.9915ZM125.063 35.748C124.537 36.8253 123.507 37.7111 121.808 37.7111C119.126 37.7111 118.264 35.4847 118.264 33.8329C118.264 32.181 119.126 29.9546 121.808 29.9546C123.507 29.9546 124.537 30.8404 125.063 31.9177L127.05 30.7446C126.189 29.2364 124.537 27.9915 121.808 27.9915C117.283 27.9915 115.775 31.391 115.775 33.8329C115.775 36.2747 117.283 39.6742 121.808 39.6742C124.537 39.6742 126.189 38.4293 127.05 36.8972L125.063 35.748ZM135.827 27.9915C134.007 27.9915 132.164 29.1885 131.182 30.4334V24.1611H128.669V39.4587H131.182V32.7556C132.044 31.4389 133.6 30.2179 135.252 30.2179C137.527 30.2179 137.527 32.8753 137.527 34.575V39.4587H140.064V34.575C140.064 29.6912 138.508 27.9915 135.827 27.9915ZM147.472 27.9915C144.432 27.9915 141.846 29.6673 141.846 29.6673L142.995 31.367C142.995 31.367 145.03 30.0503 147.64 30.0503C150.273 30.0503 150.584 31.0319 150.584 33.1625V34.3117C149.483 33.5695 147.759 32.9231 146.036 32.9231C142.971 32.9231 141.726 34.6229 141.726 36.2987C141.726 37.9984 142.852 39.6742 146.036 39.6742C147.759 39.6742 149.483 39.0278 150.584 38.2857V39.4587H153.122V33.1625C153.122 30.0503 151.877 27.9915 147.472 27.9915ZM150.584 36.5381C149.627 37.3041 148.19 37.9984 146.658 37.9984C145.293 37.9984 144.24 37.2084 144.24 36.2987C144.24 35.4129 144.91 34.6229 146.658 34.6229C148.19 34.6229 149.627 35.3171 150.584 36.0832V36.5381Z" fill="white" />
                    <path d="M5.52603 18.4684C6.70573 15.9624 9.35865 14.6221 11.9646 14.9945C12.5572 15.0792 13.1473 15.2525 13.7172 15.5207C15.0657 16.1555 16.0767 17.2169 16.6649 18.468C17.4183 20.0706 17.478 21.9845 16.6649 23.7119" stroke="white" strokeWidth="3.79311" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.28327 24.9412C11.4099 25.9422 13.9454 25.0298 14.9464 22.9032L18.3783 24.5187C16.7447 27.9891 12.9506 29.7498 9.35685 28.9513L8.61808 30.5206L9.94284 31.1443C10.3897 31.3546 10.5814 31.8873 10.371 32.3341L9.78192 33.5856C9.57159 34.0324 9.03887 34.2241 8.59205 34.0138L7.26729 33.3902L5.9495 36.1896C5.78124 36.5471 5.35506 36.7004 4.99761 36.5322L3.12048 35.6485C2.76303 35.4803 2.60967 35.0541 2.77793 34.6966L4.09572 31.8972L2.74548 31.2616C2.29866 31.0513 2.10696 30.5186 2.31729 30.0717L2.90641 28.8203C3.11674 28.3734 3.64946 28.1817 4.09627 28.3921L5.44651 29.0277L6.18115 27.467C3.24911 25.2116 2.17321 21.1469 3.81342 17.6625L7.2453 19.278C6.24424 21.4046 7.15667 23.9401 9.28327 24.9412Z" fill="white" />
                    <mask id="path-4-outside-1_24_2657" maskUnits="userSpaceOnUse" x="6.43213" y="0.545044" width="33" height="26" fill="black">
                        <rect fill="white" x="6.43213" y="0.545044" width="33" height="26" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.5785 6.70417C17.9691 6.61452 17.5477 6.04778 17.6373 5.43832L18.0698 2.49827C18.1594 1.88881 18.7262 1.46742 19.3356 1.55707C19.9451 1.64672 20.3665 2.21346 20.2768 2.82292L19.8444 5.76297C19.7547 6.37243 19.188 6.79382 18.5785 6.70417ZM13.3098 6.24266C13.4861 6.83291 14.1076 7.16847 14.6978 6.99215C15.2881 6.81583 15.6236 6.19441 15.4473 5.60416L14.5967 2.7568C14.4204 2.16655 13.799 1.831 13.2087 2.00732C12.6185 2.18363 12.2829 2.80506 12.4593 3.39531L13.3098 6.24266ZM20.8542 9.85987C20.7695 9.82172 20.6825 9.79501 20.5951 9.77909C17.226 8.61159 13.5173 9.81511 11.4561 12.6369C11.1484 13.0542 10.8768 13.5074 10.6476 13.9942L10.6508 13.9957C8.75756 18.0177 10.4832 22.8129 14.5052 24.7062C18.5271 26.5995 23.3224 24.8739 25.2157 20.8519L25.2183 20.8531C25.2976 20.6847 25.3705 20.5149 25.4373 20.344C25.4704 20.2971 25.5028 20.2502 25.5347 20.2032L35.2367 21.3926C35.6398 21.4421 36.038 21.2684 36.2761 20.9394L37.9922 19.0494C38.1887 18.7778 38.2526 18.4321 38.1662 18.1081C38.0799 17.7842 37.8523 17.5163 37.5466 17.3786L20.8542 9.85987ZM21.7864 19.2376C22.7882 17.1094 21.8751 14.572 19.7469 13.5702C17.6187 12.5684 15.0813 13.4815 14.0795 15.6097L14.0827 15.6112C13.0817 17.7378 13.9941 20.2733 16.1207 21.2743C18.2473 22.2754 20.7828 21.363 21.7838 19.2364L21.7864 19.2376ZM11.5185 9.90262C11.0954 10.3504 10.3895 10.3705 9.94168 9.94742L7.78155 7.90665C7.33376 7.4836 7.3137 6.77766 7.73674 6.32987C8.15979 5.88208 8.86574 5.86202 9.31352 6.28506L11.4737 8.32583C11.9214 8.74888 11.9415 9.45483 11.5185 9.90262Z" />
                    </mask>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.5785 6.70417C17.9691 6.61452 17.5477 6.04778 17.6373 5.43832L18.0698 2.49827C18.1594 1.88881 18.7262 1.46742 19.3356 1.55707C19.9451 1.64672 20.3665 2.21346 20.2768 2.82292L19.8444 5.76297C19.7547 6.37243 19.188 6.79382 18.5785 6.70417ZM13.3098 6.24266C13.4861 6.83291 14.1076 7.16847 14.6978 6.99215C15.2881 6.81583 15.6236 6.19441 15.4473 5.60416L14.5967 2.7568C14.4204 2.16655 13.799 1.831 13.2087 2.00732C12.6185 2.18363 12.2829 2.80506 12.4593 3.39531L13.3098 6.24266ZM20.8542 9.85987C20.7695 9.82172 20.6825 9.79501 20.5951 9.77909C17.226 8.61159 13.5173 9.81511 11.4561 12.6369C11.1484 13.0542 10.8768 13.5074 10.6476 13.9942L10.6508 13.9957C8.75756 18.0177 10.4832 22.8129 14.5052 24.7062C18.5271 26.5995 23.3224 24.8739 25.2157 20.8519L25.2183 20.8531C25.2976 20.6847 25.3705 20.5149 25.4373 20.344C25.4704 20.2971 25.5028 20.2502 25.5347 20.2032L35.2367 21.3926C35.6398 21.4421 36.038 21.2684 36.2761 20.9394L37.9922 19.0494C38.1887 18.7778 38.2526 18.4321 38.1662 18.1081C38.0799 17.7842 37.8523 17.5163 37.5466 17.3786L20.8542 9.85987ZM21.7864 19.2376C22.7882 17.1094 21.8751 14.572 19.7469 13.5702C17.6187 12.5684 15.0813 13.4815 14.0795 15.6097L14.0827 15.6112C13.0817 17.7378 13.9941 20.2733 16.1207 21.2743C18.2473 22.2754 20.7828 21.363 21.7838 19.2364L21.7864 19.2376ZM11.5185 9.90262C11.0954 10.3504 10.3895 10.3705 9.94168 9.94742L7.78155 7.90665C7.33376 7.4836 7.3137 6.77766 7.73674 6.32987C8.15979 5.88208 8.86574 5.86202 9.31352 6.28506L11.4737 8.32583C11.9214 8.74888 11.9415 9.45483 11.5185 9.90262Z" fill="white" />
                    <path d="M17.6373 5.43832L16.9768 5.34116V5.34116L17.6373 5.43832ZM18.0698 2.49827L18.7303 2.59543V2.59543L18.0698 2.49827ZM19.3356 1.55707L19.2385 2.21757V2.21757L19.3356 1.55707ZM20.2768 2.82292L20.9373 2.92008V2.92008L20.2768 2.82292ZM19.8444 5.76297L19.1839 5.66581L19.8444 5.76297ZM14.6978 6.99215L14.5067 6.35247H14.5067L14.6978 6.99215ZM13.3098 6.24266L12.6701 6.43375L13.3098 6.24266ZM15.4473 5.60416L14.8076 5.79524L15.4473 5.60416ZM14.5967 2.7568L15.2364 2.56572V2.56572L14.5967 2.7568ZM13.2087 2.00732L13.0177 1.36764L13.0177 1.36764L13.2087 2.00732ZM12.4593 3.39531L13.0989 3.20422V3.20422L12.4593 3.39531ZM20.5951 9.77909L20.3765 10.4099L20.425 10.4267L20.4755 10.4359L20.5951 9.77909ZM20.8542 9.85987L21.1284 9.25116L21.1284 9.25116L20.8542 9.85987ZM11.4561 12.6369L11.9934 13.0331L11.9952 13.0307L11.4561 12.6369ZM10.6476 13.9942L10.0436 13.7099L9.75919 14.314L10.3633 14.5983L10.6476 13.9942ZM10.6508 13.9957L11.2549 14.2801L11.5392 13.676L10.9351 13.3917L10.6508 13.9957ZM14.5052 24.7062L14.2208 25.3103L14.2208 25.3103L14.5052 24.7062ZM25.2157 20.8519L25.4999 20.2478L24.8959 19.9637L24.6117 20.5676L25.2157 20.8519ZM25.2183 20.8531L24.9341 21.4572L25.5381 21.7414L25.8223 21.1375L25.2183 20.8531ZM25.4373 20.344L24.892 19.9588L24.845 20.0254L24.8153 20.1013L25.4373 20.344ZM25.5347 20.2032L25.6159 19.5406L25.211 19.4909L24.9821 19.8286L25.5347 20.2032ZM35.2367 21.3926L35.3179 20.73L35.2367 21.3926ZM36.2761 20.9394L35.7818 20.4906L35.7569 20.518L35.7352 20.548L36.2761 20.9394ZM37.9922 19.0494L38.4864 19.4982L38.5113 19.4708L38.5331 19.4408L37.9922 19.0494ZM38.1662 18.1081L38.8113 17.9361V17.9361L38.1662 18.1081ZM37.5466 17.3786L37.8208 16.7699V16.7699L37.5466 17.3786ZM21.7864 19.2376L21.5021 19.8417L22.1061 20.126L22.3905 19.5219L21.7864 19.2376ZM14.0795 15.6097L13.4755 15.3253L13.1911 15.9294L13.7952 16.2137L14.0795 15.6097ZM14.0827 15.6112L14.6867 15.8955L14.9711 15.2915L14.367 15.0071L14.0827 15.6112ZM16.1207 21.2743L15.8363 21.8784V21.8784L16.1207 21.2743ZM21.7838 19.2364L22.0681 18.6323L21.4641 18.348L21.1798 18.952L21.7838 19.2364ZM9.94168 9.94742L10.4001 9.46213L10.4001 9.46213L9.94168 9.94742ZM11.5185 9.90262L12.0037 10.3611L12.0037 10.3611L11.5185 9.90262ZM7.78155 7.90665L8.24002 7.42136H8.24002L7.78155 7.90665ZM7.73674 6.32987L7.25146 5.8714L7.73674 6.32987ZM9.31352 6.28506L9.772 5.79978H9.772L9.31352 6.28506ZM11.4737 8.32583L11.9321 7.84055L11.9321 7.84055L11.4737 8.32583ZM16.9768 5.34116C16.8335 6.31541 17.5071 7.22136 18.4814 7.36467L18.6757 6.04367C18.431 6.00768 18.2618 5.78015 18.2978 5.53548L16.9768 5.34116ZM17.4093 2.40111L16.9768 5.34116L18.2978 5.53548L18.7303 2.59543L17.4093 2.40111ZM19.4328 0.896568C18.4586 0.753259 17.5526 1.42687 17.4093 2.40111L18.7303 2.59543C18.7663 2.35075 18.9938 2.18157 19.2385 2.21757L19.4328 0.896568ZM20.9373 2.92008C21.0806 1.94583 20.407 1.03988 19.4328 0.896568L19.2385 2.21757C19.4832 2.25356 19.6523 2.48109 19.6163 2.72576L20.9373 2.92008ZM20.5049 5.86013L20.9373 2.92008L19.6163 2.72576L19.1839 5.66581L20.5049 5.86013ZM18.4814 7.36467C19.4556 7.50798 20.3616 6.83437 20.5049 5.86013L19.1839 5.66581C19.1479 5.91049 18.9203 6.07967 18.6757 6.04367L18.4814 7.36467ZM14.5067 6.35247C14.2698 6.42326 14.0203 6.28855 13.9495 6.05158L12.6701 6.43375C12.952 7.37728 13.9454 7.91368 14.8889 7.63182L14.5067 6.35247ZM14.8076 5.79524C14.8784 6.03221 14.7437 6.28169 14.5067 6.35247L14.8889 7.63183C15.8324 7.34997 16.3688 6.3566 16.087 5.41307L14.8076 5.79524ZM13.9571 2.94788L14.8076 5.79524L16.087 5.41307L15.2364 2.56572L13.9571 2.94788ZM13.3998 2.64699C13.6368 2.57621 13.8863 2.71092 13.9571 2.94788L15.2364 2.56572C14.9546 1.62219 13.9612 1.08579 13.0177 1.36764L13.3998 2.64699ZM13.0989 3.20422C13.0281 2.96726 13.1629 2.71778 13.3998 2.64699L13.0177 1.36764C12.0741 1.64949 11.5377 2.64286 11.8196 3.58639L13.0989 3.20422ZM13.9495 6.05158L13.0989 3.20422L11.8196 3.58639L12.6701 6.43375L13.9495 6.05158ZM20.4755 10.4359C20.5101 10.4422 20.5451 10.4528 20.58 10.4686L21.1284 9.25116C20.9939 9.19058 20.855 9.14782 20.7146 9.12227L20.4755 10.4359ZM11.9952 13.0307C13.8853 10.4431 17.2877 9.33954 20.3765 10.4099L20.8137 9.14828C17.1642 7.88364 13.1493 9.18711 10.917 12.2431L11.9952 13.0307ZM11.2516 14.2785C11.4622 13.8313 11.7114 13.4155 11.9934 13.0331L10.9188 12.2407C10.5854 12.6928 10.2914 13.1834 10.0436 13.7099L11.2516 14.2785ZM10.9351 13.3917L10.9319 13.3901L10.3633 14.5983L10.3666 14.5998L10.9351 13.3917ZM10.0468 13.7114C7.9965 18.067 9.86528 23.2599 14.2208 25.3103L14.7895 24.1022C11.1011 22.3659 9.51863 17.9684 11.2549 14.2801L10.0468 13.7114ZM14.2208 25.3103C18.5764 27.3606 23.7694 25.4918 25.8197 21.1363L24.6117 20.5676C22.8754 24.2559 18.4779 25.8384 14.7895 24.1022L14.2208 25.3103ZM25.5025 20.2491L25.4999 20.2478L24.9315 21.456L24.9341 21.4572L25.5025 20.2491ZM24.8153 20.1013C24.7541 20.2581 24.6871 20.414 24.6143 20.5688L25.8223 21.1375C25.9081 20.9554 25.987 20.7717 26.0592 20.5867L24.8153 20.1013ZM24.9821 19.8286C24.9527 19.872 24.9227 19.9154 24.892 19.9588L25.9825 20.7292C26.0181 20.6789 26.053 20.6284 26.0873 20.5779L24.9821 19.8286ZM35.3179 20.73L25.6159 19.5406L25.4535 20.8659L35.1554 22.0553L35.3179 20.73ZM35.7352 20.548C35.6396 20.6801 35.4797 20.7498 35.3179 20.73L35.1554 22.0553C35.7999 22.1343 36.4363 21.8567 36.8169 21.3307L35.7352 20.548ZM37.4979 18.6006L35.7818 20.4906L36.7703 21.3882L38.4864 19.4982L37.4979 18.6006ZM37.5212 18.2802C37.5559 18.4102 37.5302 18.549 37.4513 18.6581L38.5331 19.4408C38.8472 19.0065 38.9494 18.454 38.8113 17.9361L37.5212 18.2802ZM37.2724 17.9873C37.3952 18.0426 37.4865 18.1501 37.5212 18.2802L38.8113 17.9361C38.6732 17.4182 38.3095 16.99 37.8208 16.7699L37.2724 17.9873ZM20.58 10.4686L37.2724 17.9873L37.8208 16.7699L21.1284 9.25116L20.58 10.4686ZM22.3905 19.5219C23.5493 17.0601 22.4931 14.125 20.0312 12.9662L19.4626 14.1742C21.2572 15.019 22.0272 17.1587 21.1824 18.9533L22.3905 19.5219ZM20.0312 12.9662C17.5694 11.8073 14.6343 12.8636 13.4755 15.3253L14.6835 15.894C15.5283 14.0994 17.668 13.3294 19.4626 14.1742L20.0312 12.9662ZM14.367 15.0071L14.3638 15.0056L13.7952 16.2137L13.7984 16.2153L14.367 15.0071ZM16.405 20.6703C14.612 19.8263 13.8427 17.6885 14.6867 15.8955L13.4787 15.3269C12.3206 17.7871 13.3761 20.7203 15.8363 21.8784L16.405 20.6703ZM21.1798 18.952C20.3358 20.7451 18.198 21.5143 16.405 20.6703L15.8363 21.8784C18.2965 23.0365 21.2297 21.9809 22.3878 19.5207L21.1798 18.952ZM22.0707 18.6336L22.0681 18.6323L21.4995 19.8404L21.5021 19.8417L22.0707 18.6336ZM9.48321 10.4327C10.199 11.109 11.3275 11.0769 12.0037 10.3611L11.0332 9.44415C10.8633 9.62392 10.5799 9.63197 10.4001 9.46213L9.48321 10.4327ZM7.32307 8.39194L9.48321 10.4327L10.4001 9.46213L8.24002 7.42136L7.32307 8.39194ZM7.25146 5.8714C6.57521 6.5872 6.60727 7.71568 7.32307 8.39194L8.24002 7.42136C8.06024 7.25153 8.05219 6.96811 8.22203 6.78834L7.25146 5.8714ZM9.772 5.79978C9.05619 5.12353 7.92771 5.15559 7.25146 5.8714L8.22203 6.78834C8.39187 6.60857 8.67528 6.60051 8.85505 6.77035L9.772 5.79978ZM11.9321 7.84055L9.772 5.79978L8.85505 6.77035L11.0152 8.81112L11.9321 7.84055ZM12.0037 10.3611C12.68 9.64528 12.6479 8.5168 11.9321 7.84055L11.0152 8.81112C11.195 8.98096 11.203 9.26437 11.0332 9.44415L12.0037 10.3611Z" fill="black" mask="url(#path-4-outside-1_24_2657)" />
                    <path d="M14.9485 19.275C14.5412 18.4086 13.844 17.6766 12.9094 17.2367C12.5122 17.0497 12.1041 16.9303 11.6963 16.872C9.89156 16.6141 8.05697 17.5448 7.24195 19.2762M18.3812 17.6612C17.6121 16.0253 16.2874 14.6345 14.5249 13.8048C13.7824 13.4553 13.0103 13.2282 12.233 13.1171C8.82567 12.6301 5.35443 14.38 3.81006 17.6607" stroke="#171717" strokeWidth="1.33521" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9096 17.2361C13.8442 17.676 14.5415 18.408 14.9488 19.2744L18.3815 17.6606C17.6124 16.0247 16.2877 14.6339 14.5252 13.8042C13.7827 13.4547 13.0105 13.2276 12.2332 13.1165C8.82592 12.6295 5.35467 14.3793 3.8103 17.6601L7.24219 19.2756C8.05721 17.5442 9.8918 16.6135 11.6965 16.8714C12.1043 16.9297 12.5125 17.0491 12.9096 17.2361Z" fill="white" />
                </svg></div>
            <div className="flex flex-col md:flex-row font-body  pt-4 justify-around w-3/4 lg:w-1/3 mx-auto">
                <NavLink className=" font-regular font-body opacity-50 hover:opacity-70 transition-all pb-2 " to={{ pathname: "/", aboutProps: { id: "quienes" } }}>Quiénes Somos</NavLink>
                <NavLink className=" font-regular font-body opacity-50 hover:opacity-70 transition-all pb-2 " to={{ pathname: "/", aboutProps: { id: "sociasVitalicias" } }}>Socias Vitalicias</NavLink>
                <NavLink className=" font-regular font-body opacity-50 hover:opacity-70 transition-all pb-2 " to={{ pathname: "/", aboutProps: { id: "galeria" } }}>Nuestra Galería</NavLink>
                <NavLink className=" font-regular font-body opacity-50 hover:opacity-70 transition-all pb-2 " to={{ pathname: "/", aboutProps: { id: "sumate" } }}>Sumate</NavLink>


            </div>
            <div className="flex flex-row justify-center mt-4">
                <a href="https://www.instagram.com/igualandolacancha970/" target="_blank" style={{ width: "40px", height: "40px", borderRadius: "100px" }} className="bg-white mx-2 bg-opacity-10 hover:bg-opacity-20 transition-all flex items-center justify-center "  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M10 2.01886C12.6667 2.01886 13 2.01886 14.0833 2.10219C16.8333 2.18553 18.0833 3.51884 18.1667 6.18548C18.25 7.2688 18.25 7.5188 18.25 10.1854C18.25 12.8521 18.25 13.1854 18.1667 14.1854C18.0833 16.852 16.75 18.1854 14.0833 18.2687C13 18.352 12.75 18.352 10 18.352C7.33333 18.352 7 18.352 6 18.2687C3.25 18.1854 2 16.852 1.91667 14.1854C1.83333 13.1021 1.83333 12.8521 1.83333 10.1854C1.83333 7.5188 1.83333 7.18547 1.91667 6.18548C2 3.51884 3.33333 2.18553 6 2.10219C7 2.01886 7.33333 2.01886 10 2.01886ZM10 0.185547C7.25 0.185547 6.91667 0.185547 5.91667 0.268879C2.25 0.435544 0.25 2.43552 0.0833333 6.10215C0 7.10214 0 7.43547 0 10.1854C0 12.9354 0 13.2687 0.0833333 14.2687C0.25 17.9354 2.25 19.9353 5.91667 20.102C6.91667 20.1853 7.25 20.1853 10 20.1853C12.75 20.1853 13.0833 20.1853 14.0833 20.102C17.75 19.9353 19.75 17.9354 19.9167 14.2687C20 13.2687 20 12.9354 20 10.1854C20 7.43547 20 7.10214 19.9167 6.10215C19.75 2.43552 17.75 0.435544 14.0833 0.268879C13.0833 0.185547 12.75 0.185547 10 0.185547ZM10 5.01883C7.16667 5.01883 4.83333 7.35214 4.83333 10.1854C4.83333 13.0187 7.16667 15.3521 10 15.3521C12.8333 15.3521 15.1667 13.0187 15.1667 10.1854C15.1667 7.35214 12.8333 5.01883 10 5.01883ZM10 13.5187C8.16667 13.5187 6.66667 12.0188 6.66667 10.1854C6.66667 8.35213 8.16667 6.85214 10 6.85214C11.8333 6.85214 13.3333 8.35213 13.3333 10.1854C13.3333 12.0188 11.8333 13.5187 10 13.5187ZM15.3333 3.68551C14.6667 3.68551 14.1667 4.1855 14.1667 4.85216C14.1667 5.51882 14.6667 6.01882 15.3333 6.01882C16 6.01882 16.5 5.51882 16.5 4.85216C16.5 4.1855 16 3.68551 15.3333 3.68551Z" fill="white" />
                    </svg></a>
                <a href="https://twitter.com/970_ILC" target="_blank" style={{ width: "40px", height: "40px", borderRadius: "100px" }} className="bg-white mx-2 bg-opacity-10 hover:bg-opacity-20 transition-all flex items-center justify-center "  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                        <path d="M6.28982 16.3128C13.8373 16.3128 17.9648 10.0598 17.9648 4.63781C17.9648 4.46016 17.9612 4.28341 17.953 4.10735C18.7541 3.5282 19.4507 2.8053 20 1.98276C19.2648 2.30941 18.4737 2.52938 17.6436 2.62855C18.4907 2.12061 19.1413 1.31672 19.4482 0.358612C18.6552 0.828797 17.7771 1.17046 16.8427 1.35471C16.0936 0.557195 15.0272 0.0583496 13.8473 0.0583496C11.581 0.0583496 9.7433 1.89609 9.7433 4.16126C9.7433 4.48336 9.77947 4.79636 9.84953 5.09685C6.4395 4.92556 3.41549 3.29254 1.3919 0.809916C1.03909 1.41613 0.835959 2.12084 0.835959 2.87218C0.835959 4.29569 1.56046 5.55247 2.6621 6.28789C1.98901 6.26719 1.35664 6.08203 0.803658 5.77449C0.802748 5.79155 0.802748 5.80884 0.802748 5.82681C0.802748 7.81423 2.21739 9.47341 4.09472 9.84942C3.7501 9.94336 3.38751 9.99386 3.01309 9.99386C2.74877 9.99386 2.49173 9.96747 2.24173 9.91993C2.76401 11.55 4.27897 12.7365 6.07509 12.7699C4.67045 13.8707 2.90117 14.5265 0.978811 14.5265C0.64784 14.5265 0.32119 14.5076 0 14.4696C1.81591 15.6333 3.97211 16.3128 6.28982 16.3128Z" fill="white" />
                    </svg></a>
                <a href="https://open.spotify.com/show/6a14qoWlcAGixLfwVeyPOk?si=8ce9491ba55b4c14" target="_blank" style={{ width: "40px", height: "40px", borderRadius: "100px" }} className="bg-white mx-2 bg-opacity-10 hover:bg-opacity-20 transition-all flex items-center justify-center "  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 10.1852C0 4.6714 4.48596 0.185547 10.0001 0.185547C15.514 0.185547 20 4.6714 20 10.1852C20 15.6993 15.514 20.1853 10.0001 20.1853C4.48596 20.1853 0 15.6993 0 10.1852ZM1.60561 10.1852C1.60561 14.814 5.3713 18.5797 10.0001 18.5797C14.6287 18.5797 18.3944 14.814 18.3944 10.1852C18.3944 5.55663 14.6287 1.79105 10.0001 1.79105C5.3713 1.79105 1.60561 5.55663 1.60561 10.1852ZM15.3593 7.22186C11.184 5.29224 5.31992 6.14845 5.07233 6.18581C4.63411 6.25207 4.33258 6.66086 4.39862 7.09908C4.46466 7.5373 4.87388 7.83969 5.31178 7.77344C5.36777 7.76498 10.9519 6.95383 14.6857 8.67932C14.7946 8.72974 14.9093 8.75361 15.022 8.75361C15.3253 8.75361 15.6156 8.58084 15.7512 8.28745C15.9373 7.88487 15.7617 7.40789 15.3593 7.22186ZM5.42589 9.30327C5.64971 9.26955 10.9504 8.49543 14.7303 10.2422C15.1328 10.4283 15.3083 10.9053 15.1224 11.3078C14.9866 11.6013 14.6964 11.774 14.393 11.7741C14.2803 11.7741 14.1659 11.7502 14.0567 11.6998C10.7183 10.157 5.71543 10.8834 5.66534 10.891C5.22722 10.9568 4.81811 10.6549 4.75218 10.2165C4.68613 9.77831 4.98767 9.36953 5.42589 9.30327ZM5.61128 12.3051C5.80791 12.2755 10.4665 11.5951 13.7949 13.1333C14.1973 13.3194 14.3728 13.7964 14.1868 14.1989C14.0512 14.4923 13.7609 14.665 13.4576 14.6651C13.3449 14.6651 13.2302 14.6412 13.1212 14.5908C10.2255 13.2525 5.89451 13.8861 5.85105 13.8928C5.41294 13.9587 5.00361 13.6573 4.93735 13.2188C4.8711 12.7804 5.17284 12.3714 5.61128 12.3051Z" fill="white" />
                    </svg></a>
            </div>
        </footer >
    )
}

export default Footer
