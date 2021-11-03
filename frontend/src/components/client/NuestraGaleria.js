import React from 'react'
import { NavLink } from 'react-router-dom'

const NuestraGaleria = (props) => {

    console.log(props)
    let episodio;
    let n;
    let invitado;
    let programa;

    if (props.episodio !== undefined) {
        episodio = props.episodio.items[0].name;
        n = episodio.lastIndexOf(':');
        invitado = episodio.substring(n + 1);
        programa = episodio.substr(0, episodio.indexOf(':'));
        programa = programa.replace('. ', ' ');
    }



    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-2 py-24">
                <div className="col-span-1 text-left flex align-center">
                    <div className="self-center">
                        <h2 className="font-title text-hero relative">Nuestra galería
                    <svg className="absolute bottom-6 right-0" xmlns="http://www.w3.org/2000/svg" width="118" height="24" viewBox="0 0 118 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M113.642 16.5005L106.571 23.5716L102.328 19.3289L109.399 12.2579L102.328 5.18678L106.571 0.944142L113.642 8.01521L117.885 12.2579L113.642 16.5005Z" fill="#F06F46" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M88.0857 16.5005L81.0147 23.5716L76.772 19.3289L83.8431 12.2579L76.772 5.18678L81.0147 0.944142L88.0857 8.01522L92.3284 12.2579L88.0857 16.5005Z" fill="#F06F46" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M62.5293 16.5005L55.4583 23.5716L51.2156 19.3289L58.2867 12.2579L51.2156 5.18678L55.4583 0.944142L62.5293 8.01522L66.772 12.2579L62.5293 16.5005Z" fill="#F06F46" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M36.9732 16.5005L29.9021 23.5716L25.6595 19.3289L32.7305 12.2579L25.6595 5.18678L29.9021 0.944142L36.9732 8.01522L41.2158 12.2579L36.9732 16.5005Z" fill="#F06F46" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.4168 16.5005L4.34572 23.5716L0.103075 19.3289L7.17415 12.2579L0.103075 5.18678L4.34572 0.944143L11.4168 8.01522L15.6594 12.2579L11.4168 16.5005Z" fill="#F06F46" />
                            </svg>
                        </h2>
                        <p className="font-body text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper diam morbi purus, eget sit. Ultricies urna sed ultricies amet pharetra. Adipiscing morbi nunc, neque, lectus. Varius consectetur dignissim tortor adipiscing egestas dignissim quis.</p>
                        <NavLink to={{ pathname: '/galeria' }}><a className="inline-block bg-orange py-3 px-8 rounded-3xl text-white text-base hover:bg-orangelight transition-all">Ver más fotos</a></NavLink>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="relative mx-auto w-96 ">
                        <div className="relative h-84 pl-4">
                            <div style={{ background: "url(https://res.cloudinary.com/isita/image/upload/v1635200451/static/image_32_zjmn2y.png) center bottom /cover" }} className="h-52 w-72  bg-orange absolute bottom-0 z-10">

                            </div>
                            <div className="w-48 h-72  bg-orange absolute -right-2 bg-black" style={{ background: "url(https://res.cloudinary.com/isita/image/upload/v1635200659/static/image_34_canwjl.png) center bottom /cover" }}>
                            </div>
                            <svg className="absolute -left-3 bottom-16" xmlns="http://www.w3.org/2000/svg" width="111" height="204" viewBox="0 0 111 204" fill="none">

                                <path d="M1.665 200.289C2.49343 200.289 3.165 200.96 3.165 201.789C3.165 202.617 2.49343 203.289 1.665 203.289C0.836571 203.289 0.165001 202.617 0.165001 201.789C0.165001 200.96 0.83657 200.289 1.665 200.289Z" fill="#031030" />
                                <path d="M17.0464 200.289C17.8748 200.289 18.5464 200.96 18.5464 201.789C18.5464 202.617 17.8748 203.289 17.0464 203.289C16.218 203.289 15.5464 202.617 15.5464 201.789C15.5464 200.96 16.218 200.289 17.0464 200.289Z" fill="#031030" />
                                <path d="M32.4278 200.289C33.2563 200.289 33.9278 200.96 33.9278 201.789C33.9278 202.617 33.2563 203.289 32.4278 203.289C31.5994 203.289 30.9278 202.617 30.9278 201.789C30.9278 200.96 31.5994 200.289 32.4278 200.289Z" fill="#031030" />
                                <path d="M47.8093 200.289C48.6377 200.289 49.3093 200.96 49.3093 201.789C49.3093 202.617 48.6377 203.289 47.8093 203.289C46.9808 203.289 46.3093 202.617 46.3093 201.789C46.3093 200.96 46.9808 200.289 47.8093 200.289Z" fill="#031030" />
                                <path d="M63.1907 200.289C64.0191 200.289 64.6907 200.96 64.6907 201.789C64.6907 202.617 64.0191 203.289 63.1907 203.289C62.3623 203.289 61.6907 202.617 61.6907 201.789C61.6907 200.96 62.3623 200.289 63.1907 200.289Z" fill="#031030" />
                                <path d="M78.5721 200.289C79.4005 200.289 80.0721 200.96 80.0721 201.789C80.0721 202.617 79.4005 203.289 78.5721 203.289C77.7437 203.289 77.0721 202.617 77.0721 201.789C77.0721 200.96 77.7437 200.289 78.5721 200.289Z" fill="#031030" />
                                <path d="M93.9535 200.289C94.782 200.289 95.4535 200.96 95.4535 201.789C95.4535 202.617 94.782 203.289 93.9535 203.289C93.1251 203.289 92.4535 202.617 92.4535 201.789C92.4535 200.96 93.1251 200.289 93.9535 200.289Z" fill="#031030" />
                                <path d="M109.335 200.289C110.163 200.289 110.835 200.96 110.835 201.789C110.835 202.617 110.163 203.289 109.335 203.289C108.507 203.289 107.835 202.617 107.835 201.789C107.835 200.96 108.507 200.289 109.335 200.289Z" fill="#031030" />
                                <path d="M1.665 184.907C2.49343 184.907 3.165 185.579 3.165 186.407C3.165 187.236 2.49343 187.907 1.665 187.907C0.836569 187.907 0.165 187.236 0.164999 186.407C0.164999 185.579 0.836569 184.907 1.665 184.907Z" fill="#031030" />
                                <path d="M17.0464 184.907C17.8748 184.907 18.5464 185.579 18.5464 186.407C18.5464 187.236 17.8748 187.907 17.0464 187.907C16.218 187.907 15.5464 187.236 15.5464 186.407C15.5464 185.579 16.218 184.907 17.0464 184.907Z" fill="#031030" />
                                <path d="M32.4278 184.907C33.2563 184.907 33.9278 185.579 33.9278 186.407C33.9278 187.236 33.2563 187.907 32.4278 187.907C31.5994 187.907 30.9278 187.236 30.9278 186.407C30.9278 185.579 31.5994 184.907 32.4278 184.907Z" fill="#031030" />
                                <path d="M47.8093 184.907C48.6377 184.907 49.3093 185.579 49.3093 186.407C49.3093 187.236 48.6377 187.907 47.8093 187.907C46.9808 187.907 46.3093 187.236 46.3093 186.407C46.3093 185.579 46.9808 184.907 47.8093 184.907Z" fill="#031030" />
                                <path d="M63.1907 184.907C64.0191 184.907 64.6907 185.579 64.6907 186.407C64.6907 187.236 64.0191 187.907 63.1907 187.907C62.3623 187.907 61.6907 187.236 61.6907 186.407C61.6907 185.579 62.3623 184.907 63.1907 184.907Z" fill="#031030" />
                                <path d="M78.5721 184.907C79.4005 184.907 80.0721 185.579 80.0721 186.407C80.0721 187.236 79.4005 187.907 78.5721 187.907C77.7437 187.907 77.0721 187.236 77.0721 186.407C77.0721 185.579 77.7437 184.907 78.5721 184.907Z" fill="#031030" />
                                <path d="M93.9535 184.907C94.782 184.907 95.4535 185.579 95.4535 186.407C95.4535 187.236 94.782 187.907 93.9535 187.907C93.1251 187.907 92.4535 187.236 92.4535 186.407C92.4535 185.579 93.1251 184.907 93.9535 184.907Z" fill="#031030" />
                                <path d="M109.335 184.907C110.163 184.907 110.835 185.579 110.835 186.407C110.835 187.236 110.163 187.907 109.335 187.907C108.507 187.907 107.835 187.236 107.835 186.407C107.835 185.579 108.507 184.907 109.335 184.907Z" fill="#031030" />
                                <path d="M1.665 169.526C2.49343 169.526 3.165 170.197 3.165 171.026C3.165 171.854 2.49343 172.526 1.665 172.526C0.836568 172.526 0.164998 171.854 0.164998 171.026C0.164998 170.197 0.836568 169.526 1.665 169.526Z" fill="#031030" />
                                <path d="M17.0464 169.526C17.8749 169.526 18.5464 170.197 18.5464 171.026C18.5464 171.854 17.8749 172.526 17.0464 172.526C16.218 172.526 15.5464 171.854 15.5464 171.026C15.5464 170.197 16.218 169.526 17.0464 169.526Z" fill="#031030" />
                                <path d="M32.4278 169.526C33.2563 169.526 33.9278 170.197 33.9278 171.026C33.9278 171.854 33.2563 172.526 32.4278 172.526C31.5994 172.526 30.9278 171.854 30.9278 171.026C30.9278 170.197 31.5994 169.526 32.4278 169.526Z" fill="#031030" />
                                <path d="M47.8093 169.526C48.6377 169.526 49.3093 170.197 49.3093 171.026C49.3093 171.854 48.6377 172.526 47.8093 172.526C46.9808 172.526 46.3093 171.854 46.3093 171.026C46.3093 170.197 46.9808 169.526 47.8093 169.526Z" fill="#031030" />
                                <path d="M63.1907 169.526C64.0191 169.526 64.6907 170.197 64.6907 171.026C64.6907 171.854 64.0191 172.526 63.1907 172.526C62.3623 172.526 61.6907 171.854 61.6907 171.026C61.6907 170.197 62.3623 169.526 63.1907 169.526Z" fill="#031030" />
                                <path d="M78.5721 169.526C79.4005 169.526 80.0721 170.197 80.0721 171.026C80.0721 171.854 79.4005 172.526 78.5721 172.526C77.7437 172.526 77.0721 171.854 77.0721 171.026C77.0721 170.197 77.7437 169.526 78.5721 169.526Z" fill="#031030" />
                                <path d="M93.9535 169.526C94.782 169.526 95.4535 170.197 95.4535 171.026C95.4535 171.854 94.782 172.526 93.9535 172.526C93.1251 172.526 92.4535 171.854 92.4535 171.026C92.4535 170.197 93.1251 169.526 93.9535 169.526Z" fill="#031030" />
                                <path d="M109.335 169.526C110.163 169.526 110.835 170.197 110.835 171.026C110.835 171.854 110.163 172.526 109.335 172.526C108.507 172.526 107.835 171.854 107.835 171.026C107.835 170.197 108.507 169.526 109.335 169.526Z" fill="#031030" />
                                <path d="M1.665 154.145C2.49343 154.145 3.165 154.816 3.165 155.645C3.165 156.473 2.49343 157.145 1.665 157.145C0.836567 157.145 0.164997 156.473 0.164997 155.645C0.164997 154.816 0.836566 154.145 1.665 154.145Z" fill="#031030" />
                                <path d="M17.0464 154.145C17.8749 154.145 18.5464 154.816 18.5464 155.645C18.5464 156.473 17.8749 157.145 17.0464 157.145C16.218 157.145 15.5464 156.473 15.5464 155.645C15.5464 154.816 16.218 154.145 17.0464 154.145Z" fill="#031030" />
                                <path d="M32.4278 154.144C33.2563 154.144 33.9278 154.816 33.9278 155.644C33.9278 156.473 33.2563 157.144 32.4278 157.144C31.5994 157.145 30.9278 156.473 30.9278 155.645C30.9278 154.816 31.5994 154.145 32.4278 154.144Z" fill="#031030" />
                                <path d="M47.8093 154.144C48.6377 154.144 49.3093 154.816 49.3093 155.644C49.3093 156.473 48.6377 157.144 47.8093 157.144C46.9808 157.144 46.3093 156.473 46.3093 155.644C46.3093 154.816 46.9808 154.144 47.8093 154.144Z" fill="#031030" />
                                <path d="M63.1907 154.144C64.0191 154.144 64.6907 154.816 64.6907 155.644C64.6907 156.473 64.0191 157.144 63.1907 157.144C62.3623 157.144 61.6907 156.473 61.6907 155.644C61.6907 154.816 62.3623 154.144 63.1907 154.144Z" fill="#031030" />
                                <path d="M78.5721 154.144C79.4005 154.144 80.0721 154.816 80.0721 155.644C80.0721 156.473 79.4005 157.144 78.5721 157.144C77.7437 157.144 77.0721 156.473 77.0721 155.644C77.0721 154.816 77.7437 154.144 78.5721 154.144Z" fill="#031030" />
                                <path d="M93.9535 154.144C94.782 154.144 95.4535 154.816 95.4535 155.644C95.4535 156.473 94.782 157.144 93.9535 157.144C93.1251 157.144 92.4535 156.473 92.4535 155.644C92.4535 154.816 93.1251 154.144 93.9535 154.144Z" fill="#031030" />
                                <path d="M109.335 154.144C110.163 154.144 110.835 154.816 110.835 155.644C110.835 156.473 110.163 157.144 109.335 157.144C108.507 157.144 107.835 156.473 107.835 155.644C107.835 154.816 108.507 154.144 109.335 154.144Z" fill="#031030" />
                                <path d="M1.665 138.763C2.49343 138.763 3.165 139.435 3.165 140.263C3.165 141.092 2.49343 141.763 1.665 141.763C0.836565 141.763 0.164995 141.092 0.164995 140.263C0.164995 139.435 0.836565 138.763 1.665 138.763Z" fill="#031030" />
                                <path d="M17.0464 138.763C17.8748 138.763 18.5464 139.435 18.5464 140.263C18.5464 141.092 17.8748 141.763 17.0464 141.763C16.218 141.763 15.5464 141.092 15.5464 140.263C15.5464 139.435 16.218 138.763 17.0464 138.763Z" fill="#031030" />
                                <path d="M32.4278 138.763C33.2563 138.763 33.9278 139.435 33.9278 140.263C33.9278 141.092 33.2563 141.763 32.4278 141.763C31.5994 141.763 30.9278 141.092 30.9278 140.263C30.9278 139.435 31.5994 138.763 32.4278 138.763Z" fill="#031030" />
                                <path d="M47.8093 138.763C48.6377 138.763 49.3093 139.435 49.3093 140.263C49.3093 141.092 48.6377 141.763 47.8093 141.763C46.9808 141.763 46.3093 141.092 46.3093 140.263C46.3093 139.435 46.9808 138.763 47.8093 138.763Z" fill="#031030" />
                                <path d="M63.1907 138.763C64.0191 138.763 64.6907 139.435 64.6907 140.263C64.6907 141.092 64.0191 141.763 63.1907 141.763C62.3622 141.763 61.6907 141.092 61.6907 140.263C61.6907 139.435 62.3622 138.763 63.1907 138.763Z" fill="#031030" />
                                <path d="M78.5721 138.763C79.4005 138.763 80.0721 139.435 80.0721 140.263C80.0721 141.092 79.4005 141.763 78.5721 141.763C77.7437 141.763 77.0721 141.092 77.0721 140.263C77.0721 139.435 77.7437 138.763 78.5721 138.763Z" fill="#031030" />
                                <path d="M93.9535 138.763C94.782 138.763 95.4535 139.435 95.4535 140.263C95.4535 141.092 94.782 141.763 93.9535 141.763C93.1251 141.763 92.4535 141.092 92.4535 140.263C92.4535 139.435 93.1251 138.763 93.9535 138.763Z" fill="#031030" />
                                <path d="M109.335 138.763C110.163 138.763 110.835 139.435 110.835 140.263C110.835 141.092 110.163 141.763 109.335 141.763C108.507 141.763 107.835 141.092 107.835 140.263C107.835 139.435 108.507 138.763 109.335 138.763Z" fill="#031030" />
                                <path d="M1.66499 123.382C2.49342 123.382 3.16499 124.053 3.16499 124.882C3.16499 125.71 2.49342 126.382 1.66499 126.382C0.836564 126.382 0.164994 125.71 0.164994 124.882C0.164994 124.053 0.836564 123.382 1.66499 123.382Z" fill="#031030" />
                                <path d="M17.0464 123.382C17.8748 123.382 18.5464 124.053 18.5464 124.882C18.5464 125.71 17.8748 126.382 17.0464 126.382C16.218 126.382 15.5464 125.71 15.5464 124.882C15.5464 124.053 16.218 123.382 17.0464 123.382Z" fill="#031030" />
                                <path d="M32.4278 123.382C33.2563 123.382 33.9278 124.053 33.9278 124.882C33.9278 125.71 33.2563 126.382 32.4278 126.382C31.5994 126.382 30.9278 125.71 30.9278 124.882C30.9278 124.053 31.5994 123.382 32.4278 123.382Z" fill="#031030" />
                                <path d="M47.8093 123.382C48.6377 123.382 49.3093 124.053 49.3093 124.882C49.3093 125.71 48.6377 126.382 47.8093 126.382C46.9808 126.382 46.3093 125.71 46.3093 124.882C46.3093 124.053 46.9808 123.382 47.8093 123.382Z" fill="#031030" />
                                <path d="M63.1907 123.382C64.0191 123.382 64.6907 124.053 64.6907 124.882C64.6907 125.71 64.0191 126.382 63.1907 126.382C62.3623 126.382 61.6907 125.71 61.6907 124.882C61.6907 124.053 62.3623 123.382 63.1907 123.382Z" fill="#031030" />
                                <path d="M78.5721 123.382C79.4005 123.382 80.0721 124.053 80.0721 124.882C80.0721 125.71 79.4005 126.382 78.5721 126.382C77.7437 126.382 77.0721 125.71 77.0721 124.882C77.0721 124.053 77.7437 123.382 78.5721 123.382Z" fill="#031030" />
                                <path d="M93.9535 123.382C94.782 123.382 95.4535 124.053 95.4535 124.882C95.4535 125.71 94.782 126.382 93.9535 126.382C93.1251 126.382 92.4535 125.71 92.4535 124.882C92.4535 124.053 93.1251 123.382 93.9535 123.382Z" fill="#031030" />
                                <path d="M109.335 123.382C110.163 123.382 110.835 124.053 110.835 124.882C110.835 125.71 110.163 126.382 109.335 126.382C108.507 126.382 107.835 125.71 107.835 124.882C107.835 124.053 108.507 123.382 109.335 123.382Z" fill="#031030" />
                                <path d="M1.66499 108C2.49342 108 3.16499 108.672 3.16499 109.5C3.16499 110.329 2.49342 111 1.66499 111C0.836563 111 0.164993 110.329 0.164993 109.5C0.164993 108.672 0.836562 108 1.66499 108Z" fill="#031030" />
                                <path d="M17.0464 108C17.8748 108 18.5464 108.672 18.5464 109.5C18.5464 110.329 17.8748 111 17.0464 111C16.218 111 15.5464 110.329 15.5464 109.5C15.5464 108.672 16.218 108 17.0464 108Z" fill="#031030" />
                                <path d="M32.4278 108C33.2563 108 33.9278 108.672 33.9278 109.5C33.9278 110.329 33.2563 111 32.4278 111C31.5994 111 30.9278 110.329 30.9278 109.5C30.9278 108.672 31.5994 108 32.4278 108Z" fill="#031030" />
                                <path d="M47.8093 108C48.6377 108 49.3093 108.672 49.3093 109.5C49.3093 110.329 48.6377 111 47.8093 111C46.9808 111 46.3093 110.329 46.3093 109.5C46.3093 108.672 46.9808 108 47.8093 108Z" fill="#031030" />
                                <path d="M63.1907 108C64.0191 108 64.6907 108.672 64.6907 109.5C64.6907 110.329 64.0191 111 63.1907 111C62.3623 111 61.6907 110.329 61.6907 109.5C61.6907 108.672 62.3623 108 63.1907 108Z" fill="#031030" />
                                <path d="M78.5721 108C79.4005 108 80.0721 108.672 80.0721 109.5C80.0721 110.329 79.4005 111 78.5721 111C77.7437 111 77.0721 110.329 77.0721 109.5C77.0721 108.672 77.7437 108 78.5721 108Z" fill="#031030" />
                                <path d="M93.9535 108C94.782 108 95.4535 108.672 95.4535 109.5C95.4535 110.329 94.7819 111 93.9535 111C93.1251 111 92.4535 110.329 92.4535 109.5C92.4535 108.672 93.1251 108 93.9535 108Z" fill="#031030" />
                                <path d="M109.335 108C110.163 108 110.835 108.672 110.835 109.5C110.835 110.329 110.163 111 109.335 111C108.507 111 107.835 110.329 107.835 109.5C107.835 108.672 108.507 108 109.335 108Z" fill="#031030" />
                                <path d="M1.66499 92.6188C2.49342 92.6188 3.16499 93.2904 3.16499 94.1188C3.16499 94.9472 2.49342 95.6188 1.66499 95.6188C0.836561 95.6188 0.164991 94.9472 0.164991 94.1188C0.164991 93.2904 0.836561 92.6188 1.66499 92.6188Z" fill="#031030" />
                                <path d="M17.0464 92.6188C17.8748 92.6188 18.5464 93.2904 18.5464 94.1188C18.5464 94.9472 17.8748 95.6188 17.0464 95.6188C16.218 95.6188 15.5464 94.9472 15.5464 94.1188C15.5464 93.2904 16.218 92.6188 17.0464 92.6188Z" fill="#031030" />
                                <path d="M32.4278 92.6188C33.2563 92.6188 33.9278 93.2904 33.9278 94.1188C33.9278 94.9472 33.2563 95.6188 32.4278 95.6188C31.5994 95.6188 30.9278 94.9472 30.9278 94.1188C30.9278 93.2904 31.5994 92.6188 32.4278 92.6188Z" fill="#031030" />
                                <path d="M47.8093 92.6188C48.6377 92.6188 49.3093 93.2904 49.3093 94.1188C49.3093 94.9472 48.6377 95.6188 47.8093 95.6188C46.9808 95.6188 46.3093 94.9472 46.3093 94.1188C46.3093 93.2904 46.9808 92.6188 47.8093 92.6188Z" fill="#031030" />
                                <path d="M63.1907 92.6188C64.0191 92.6188 64.6907 93.2904 64.6907 94.1188C64.6907 94.9472 64.0191 95.6188 63.1907 95.6188C62.3622 95.6188 61.6907 94.9472 61.6907 94.1188C61.6907 93.2904 62.3622 92.6188 63.1907 92.6188Z" fill="#031030" />
                                <path d="M78.5721 92.6188C79.4005 92.6188 80.0721 93.2904 80.0721 94.1188C80.0721 94.9472 79.4005 95.6188 78.5721 95.6188C77.7437 95.6188 77.0721 94.9472 77.0721 94.1188C77.0721 93.2904 77.7437 92.6188 78.5721 92.6188Z" fill="#031030" />
                                <path d="M93.9535 92.6188C94.7819 92.6188 95.4535 93.2904 95.4535 94.1188C95.4535 94.9472 94.782 95.6188 93.9535 95.6188C93.1251 95.6188 92.4535 94.9472 92.4535 94.1188C92.4535 93.2904 93.1251 92.6188 93.9535 92.6188Z" fill="#031030" />
                                <path d="M109.335 92.6188C110.163 92.6188 110.835 93.2904 110.835 94.1188C110.835 94.9472 110.163 95.6188 109.335 95.6188C108.507 95.6188 107.835 94.9472 107.835 94.1188C107.835 93.2904 108.507 92.6188 109.335 92.6188Z" fill="#031030" />
                                <path d="M1.665 77.2374C2.49343 77.2374 3.165 77.909 3.165 78.7374C3.165 79.5658 2.49343 80.2374 1.665 80.2374C0.836568 80.2374 0.164998 79.5658 0.164998 78.7374C0.164998 77.909 0.836567 77.2374 1.665 77.2374Z" fill="#031030" />
                                <path d="M17.0464 77.2374C17.8748 77.2374 18.5464 77.909 18.5464 78.7374C18.5464 79.5658 17.8748 80.2374 17.0464 80.2374C16.218 80.2374 15.5464 79.5658 15.5464 78.7374C15.5464 77.909 16.218 77.2374 17.0464 77.2374Z" fill="#031030" />
                                <path d="M32.4278 77.2374C33.2563 77.2374 33.9278 77.909 33.9278 78.7374C33.9278 79.5658 33.2563 80.2374 32.4278 80.2374C31.5994 80.2374 30.9278 79.5658 30.9278 78.7374C30.9278 77.909 31.5994 77.2374 32.4278 77.2374Z" fill="#031030" />
                                <path d="M47.8093 77.2374C48.6377 77.2374 49.3093 77.909 49.3093 78.7374C49.3093 79.5658 48.6377 80.2374 47.8093 80.2374C46.9808 80.2374 46.3093 79.5658 46.3093 78.7374C46.3093 77.909 46.9808 77.2374 47.8093 77.2374Z" fill="#031030" />
                                <path d="M63.1907 77.2374C64.0191 77.2374 64.6907 77.909 64.6907 78.7374C64.6907 79.5658 64.0191 80.2374 63.1907 80.2374C62.3622 80.2374 61.6907 79.5658 61.6907 78.7374C61.6907 77.909 62.3622 77.2374 63.1907 77.2374Z" fill="#031030" />
                                <path d="M78.5721 77.2374C79.4005 77.2374 80.0721 77.909 80.0721 78.7374C80.0721 79.5658 79.4005 80.2374 78.5721 80.2374C77.7437 80.2374 77.0721 79.5658 77.0721 78.7374C77.0721 77.909 77.7437 77.2374 78.5721 77.2374Z" fill="#031030" />
                                <path d="M93.9535 77.2374C94.7819 77.2374 95.4535 77.909 95.4535 78.7374C95.4535 79.5658 94.7819 80.2374 93.9535 80.2374C93.1251 80.2374 92.4535 79.5658 92.4535 78.7374C92.4535 77.909 93.1251 77.2374 93.9535 77.2374Z" fill="#031030" />
                                <path d="M109.335 77.2374C110.163 77.2374 110.835 77.909 110.835 78.7374C110.835 79.5658 110.163 80.2374 109.335 80.2374C108.507 80.2374 107.835 79.5658 107.835 78.7374C107.835 77.909 108.507 77.2374 109.335 77.2374Z" fill="#031030" />
                                <path d="M1.665 61.856C2.49343 61.856 3.165 62.5275 3.165 63.356C3.165 64.1844 2.49343 64.856 1.665 64.856C0.836566 64.856 0.164996 64.1844 0.164996 63.356C0.164996 62.5275 0.836566 61.856 1.665 61.856Z" fill="#031030" />
                                <path d="M17.0464 61.856C17.8748 61.856 18.5464 62.5275 18.5464 63.356C18.5464 64.1844 17.8748 64.856 17.0464 64.856C16.218 64.856 15.5464 64.1844 15.5464 63.356C15.5464 62.5275 16.218 61.856 17.0464 61.856Z" fill="#031030" />
                                <path d="M32.4278 61.856C33.2563 61.856 33.9278 62.5275 33.9278 63.356C33.9278 64.1844 33.2563 64.856 32.4278 64.856C31.5994 64.856 30.9278 64.1844 30.9278 63.356C30.9278 62.5275 31.5994 61.856 32.4278 61.856Z" fill="#031030" />
                                <path d="M47.8093 61.856C48.6377 61.856 49.3093 62.5275 49.3093 63.356C49.3093 64.1844 48.6377 64.856 47.8093 64.856C46.9808 64.856 46.3093 64.1844 46.3093 63.356C46.3093 62.5275 46.9808 61.856 47.8093 61.856Z" fill="#031030" />
                                <path d="M63.1907 61.856C64.0191 61.856 64.6907 62.5275 64.6907 63.356C64.6907 64.1844 64.0191 64.856 63.1907 64.856C62.3622 64.856 61.6907 64.1844 61.6907 63.356C61.6907 62.5275 62.3622 61.856 63.1907 61.856Z" fill="#031030" />
                                <path d="M78.5721 61.856C79.4005 61.856 80.0721 62.5275 80.0721 63.356C80.0721 64.1844 79.4005 64.856 78.5721 64.856C77.7437 64.856 77.0721 64.1844 77.0721 63.356C77.0721 62.5275 77.7437 61.856 78.5721 61.856Z" fill="#031030" />
                                <path d="M93.9535 61.856C94.7819 61.856 95.4535 62.5275 95.4535 63.356C95.4535 64.1844 94.7819 64.856 93.9535 64.856C93.1251 64.856 92.4535 64.1844 92.4535 63.356C92.4535 62.5275 93.1251 61.856 93.9535 61.856Z" fill="#031030" />
                                <path d="M109.335 61.856C110.163 61.856 110.835 62.5275 110.835 63.356C110.835 64.1844 110.163 64.856 109.335 64.856C108.507 64.856 107.835 64.1844 107.835 63.356C107.835 62.5275 108.507 61.856 109.335 61.856Z" fill="#031030" />
                                <path d="M1.66499 46.4745C2.49343 46.4745 3.16499 47.1461 3.16499 47.9745C3.165 48.803 2.49343 49.4745 1.665 49.4745C0.836565 49.4745 0.164995 48.803 0.164995 47.9745C0.164995 47.1461 0.836565 46.4745 1.66499 46.4745Z" fill="#031030" />
                                <path d="M17.0464 46.4745C17.8748 46.4745 18.5464 47.1461 18.5464 47.9745C18.5464 48.803 17.8748 49.4745 17.0464 49.4745C16.218 49.4745 15.5464 48.803 15.5464 47.9745C15.5464 47.1461 16.218 46.4745 17.0464 46.4745Z" fill="#031030" />
                                <path d="M32.4278 46.4745C33.2563 46.4745 33.9278 47.1461 33.9278 47.9745C33.9278 48.803 33.2563 49.4745 32.4278 49.4745C31.5994 49.4745 30.9278 48.803 30.9278 47.9745C30.9278 47.1461 31.5994 46.4745 32.4278 46.4745Z" fill="#031030" />
                                <path d="M47.8093 46.4745C48.6377 46.4745 49.3093 47.1461 49.3093 47.9745C49.3093 48.803 48.6377 49.4745 47.8093 49.4745C46.9808 49.4745 46.3093 48.803 46.3093 47.9745C46.3093 47.1461 46.9808 46.4745 47.8093 46.4745Z" fill="#031030" />
                                <path d="M63.1907 46.4745C64.0191 46.4745 64.6907 47.1461 64.6907 47.9745C64.6907 48.803 64.0191 49.4745 63.1907 49.4745C62.3622 49.4745 61.6907 48.803 61.6907 47.9745C61.6907 47.1461 62.3622 46.4745 63.1907 46.4745Z" fill="#031030" />
                                <path d="M78.5721 46.4745C79.4005 46.4745 80.0721 47.1461 80.0721 47.9745C80.0721 48.803 79.4005 49.4745 78.5721 49.4745C77.7437 49.4745 77.0721 48.803 77.0721 47.9745C77.0721 47.1461 77.7437 46.4745 78.5721 46.4745Z" fill="#031030" />
                                <path d="M93.9535 46.4745C94.7819 46.4745 95.4535 47.1461 95.4535 47.9745C95.4535 48.803 94.7819 49.4745 93.9535 49.4745C93.1251 49.4745 92.4535 48.803 92.4535 47.9745C92.4535 47.1461 93.1251 46.4745 93.9535 46.4745Z" fill="#031030" />
                                <path d="M109.335 46.4745C110.163 46.4745 110.835 47.1461 110.835 47.9745C110.835 48.803 110.163 49.4745 109.335 49.4745C108.507 49.4745 107.835 48.803 107.835 47.9745C107.835 47.1461 108.507 46.4745 109.335 46.4745Z" fill="#031030" />
                                <path d="M1.66499 31.0931C2.49342 31.0931 3.16499 31.7647 3.16499 32.5931C3.16499 33.4215 2.49342 34.0931 1.66499 34.0931C0.836564 34.0931 0.164994 33.4215 0.164994 32.5931C0.164994 31.7647 0.836563 31.0931 1.66499 31.0931Z" fill="#031030" />
                                <path d="M17.0464 31.0931C17.8748 31.0931 18.5464 31.7647 18.5464 32.5931C18.5464 33.4215 17.8748 34.0931 17.0464 34.0931C16.218 34.0931 15.5464 33.4215 15.5464 32.5931C15.5464 31.7647 16.218 31.0931 17.0464 31.0931Z" fill="#031030" />
                                <path d="M32.4278 31.0931C33.2563 31.0931 33.9278 31.7647 33.9278 32.5931C33.9278 33.4215 33.2563 34.0931 32.4278 34.0931C31.5994 34.0931 30.9278 33.4215 30.9278 32.5931C30.9278 31.7647 31.5994 31.0931 32.4278 31.0931Z" fill="#031030" />
                                <path d="M47.8093 31.0931C48.6377 31.0931 49.3093 31.7647 49.3093 32.5931C49.3093 33.4215 48.6377 34.0931 47.8093 34.0931C46.9808 34.0931 46.3093 33.4215 46.3093 32.5931C46.3093 31.7647 46.9808 31.0931 47.8093 31.0931Z" fill="#031030" />
                                <path d="M63.1907 31.0931C64.0191 31.0931 64.6907 31.7647 64.6907 32.5931C64.6907 33.4215 64.0191 34.0931 63.1907 34.0931C62.3622 34.0931 61.6907 33.4215 61.6907 32.5931C61.6907 31.7647 62.3622 31.0931 63.1907 31.0931Z" fill="#031030" />
                                <path d="M78.5721 31.0931C79.4005 31.0931 80.0721 31.7647 80.0721 32.5931C80.0721 33.4215 79.4005 34.0931 78.5721 34.0931C77.7437 34.0931 77.0721 33.4215 77.0721 32.5931C77.0721 31.7647 77.7437 31.0931 78.5721 31.0931Z" fill="#031030" />
                                <path d="M93.9535 31.0931C94.7819 31.0931 95.4535 31.7647 95.4535 32.5931C95.4535 33.4215 94.7819 34.0931 93.9535 34.0931C93.1251 34.0931 92.4535 33.4215 92.4535 32.5931C92.4535 31.7647 93.1251 31.0931 93.9535 31.0931Z" fill="#031030" />
                                <path d="M109.335 31.0931C110.163 31.0931 110.835 31.7647 110.835 32.5931C110.835 33.4215 110.163 34.0931 109.335 34.0931C108.507 34.0931 107.835 33.4215 107.835 32.5931C107.835 31.7647 108.507 31.0931 109.335 31.0931Z" fill="#031030" />
                                <path d="M1.66499 15.7117C2.49342 15.7117 3.16499 16.3833 3.16499 17.2117C3.16499 18.0401 2.49342 18.7117 1.66499 18.7117C0.836562 18.7117 0.164992 18.0401 0.164992 17.2117C0.164992 16.3833 0.836562 15.7117 1.66499 15.7117Z" fill="#031030" />
                                <path d="M17.0464 15.7117C17.8748 15.7117 18.5464 16.3833 18.5464 17.2117C18.5464 18.0401 17.8748 18.7117 17.0464 18.7117C16.218 18.7117 15.5464 18.0401 15.5464 17.2117C15.5464 16.3833 16.218 15.7117 17.0464 15.7117Z" fill="#031030" />
                                <path d="M32.4278 15.7117C33.2563 15.7117 33.9278 16.3833 33.9278 17.2117C33.9278 18.0401 33.2563 18.7117 32.4278 18.7117C31.5994 18.7117 30.9278 18.0401 30.9278 17.2117C30.9278 16.3833 31.5994 15.7117 32.4278 15.7117Z" fill="#031030" />
                                <path d="M47.8093 15.7117C48.6377 15.7117 49.3093 16.3833 49.3093 17.2117C49.3093 18.0401 48.6377 18.7117 47.8093 18.7117C46.9808 18.7117 46.3092 18.0401 46.3092 17.2117C46.3092 16.3833 46.9808 15.7117 47.8093 15.7117Z" fill="#031030" />
                                <path d="M63.1907 15.7117C64.0191 15.7117 64.6907 16.3833 64.6907 17.2117C64.6907 18.0401 64.0191 18.7117 63.1907 18.7117C62.3622 18.7117 61.6907 18.0401 61.6907 17.2117C61.6907 16.3833 62.3622 15.7117 63.1907 15.7117Z" fill="#031030" />
                                <path d="M78.5721 15.7117C79.4005 15.7117 80.0721 16.3833 80.0721 17.2117C80.0721 18.0401 79.4005 18.7117 78.5721 18.7117C77.7437 18.7117 77.0721 18.0401 77.0721 17.2117C77.0721 16.3833 77.7437 15.7117 78.5721 15.7117Z" fill="#031030" />
                                <path d="M93.9535 15.7117C94.7819 15.7117 95.4535 16.3833 95.4535 17.2117C95.4535 18.0401 94.7819 18.7117 93.9535 18.7117C93.1251 18.7117 92.4535 18.0401 92.4535 17.2117C92.4535 16.3833 93.1251 15.7117 93.9535 15.7117Z" fill="#031030" />
                                <path d="M109.335 15.7117C110.163 15.7117 110.835 16.3833 110.835 17.2117C110.835 18.0401 110.163 18.7117 109.335 18.7117C108.507 18.7117 107.835 18.0401 107.835 17.2117C107.835 16.3833 108.507 15.7117 109.335 15.7117Z" fill="#031030" />
                                <path d="M1.66499 0.330271C2.49342 0.330271 3.16499 1.00184 3.16499 1.83027C3.16499 2.6587 2.49342 3.33027 1.66499 3.33027C0.836561 3.33027 0.164991 2.6587 0.164991 1.83027C0.164991 1.00184 0.836561 0.330271 1.66499 0.330271Z" fill="#031030" />
                                <path d="M17.0464 0.330269C17.8748 0.330269 18.5464 1.00184 18.5464 1.83027C18.5464 2.6587 17.8748 3.33027 17.0464 3.33027C16.218 3.33027 15.5464 2.6587 15.5464 1.83027C15.5464 1.00184 16.218 0.33027 17.0464 0.330269Z" fill="#031030" />
                                <path d="M32.4278 0.330268C33.2563 0.330268 33.9278 1.00184 33.9278 1.83027C33.9278 2.6587 33.2563 3.33027 32.4278 3.33027C31.5994 3.33027 30.9278 2.6587 30.9278 1.83027C30.9278 1.00184 31.5994 0.330268 32.4278 0.330268Z" fill="#031030" />
                                <path d="M47.8093 0.330267C48.6377 0.330267 49.3093 1.00184 49.3093 1.83027C49.3093 2.6587 48.6377 3.33027 47.8093 3.33027C46.9808 3.33027 46.3092 2.6587 46.3092 1.83027C46.3092 1.00184 46.9808 0.330267 47.8093 0.330267Z" fill="#031030" />
                                <path d="M63.1907 0.330265C64.0191 0.330265 64.6907 1.00184 64.6907 1.83027C64.6907 2.6587 64.0191 3.33027 63.1907 3.33027C62.3622 3.33027 61.6907 2.6587 61.6907 1.83027C61.6907 1.00184 62.3622 0.330265 63.1907 0.330265Z" fill="#031030" />
                                <path d="M78.5721 0.330264C79.4005 0.330264 80.0721 1.00183 80.0721 1.83026C80.0721 2.65869 79.4005 3.33026 78.5721 3.33026C77.7437 3.33026 77.0721 2.65869 77.0721 1.83026C77.0721 1.00183 77.7437 0.330264 78.5721 0.330264Z" fill="#031030" />
                                <path d="M93.9535 0.330263C94.7819 0.330263 95.4535 1.00183 95.4535 1.83026C95.4535 2.65869 94.7819 3.33026 93.9535 3.33026C93.1251 3.33026 92.4535 2.65869 92.4535 1.83026C92.4535 1.00183 93.1251 0.330263 93.9535 0.330263Z" fill="#031030" />
                                <path d="M109.335 0.330261C110.163 0.330261 110.835 1.00183 110.835 1.83026C110.835 2.65869 110.163 3.33026 109.335 3.33026C108.507 3.33026 107.835 2.65869 107.835 1.83026C107.835 1.00183 108.507 0.330261 109.335 0.330261Z" fill="#031030" />
                            </svg>
                            <svg className="absolute -bottom-4 -right-3" xmlns="http://www.w3.org/2000/svg" width="272" height="34" viewBox="0 0 272 34" fill="none">
                                <path d="M5.49121 33.3279L5.49121 0.955474M34.4983 33.3279L34.4983 0.955473M63.5054 33.3279L63.5054 0.955471M92.5124 33.3279L92.5124 0.95547M121.52 33.3279L121.52 0.955469M150.527 33.3279L150.527 0.955467M179.534 33.3279L179.534 0.955466M208.541 33.3279L208.541 0.955465M237.548 33.3279L237.548 0.955464M266.555 33.3279L266.555 0.955462" stroke="#F06F46" strokeWidth="10.8777" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NuestraGaleria