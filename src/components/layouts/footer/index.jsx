
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About us</h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                Được thành lập vào cuối năm 2016 trong bối cảnh đồ chơi lắp ráp dần nhen nhóm vào thị trường Việt Nam. Sau nhiều năm phát triển, Nutri-Toys với slogan Young kids with a mission™ đã chiếm được tình cảm của các trẻ yêu mến đồ chơi trên    khắp cả nước.
                </p>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="https://www.instagram.com/nhan.0406/" target="_blank" className="hover:underline">Instagram</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://mail.google.com/chat/u/0/?hl=vi#chat/dm/vVZaUcAAAAE" className="hover:underline" target="_blank" >Email</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.facebook.com/Maixuannhan.04062004" target="_blank" className="hover:underline">Facebook</a>
                    </li>
                    <li className="mb-4">
                        <p className="hover:underline">Zalo</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Licensing</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Address</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <p  className="hover:underline">Store 1: 44A Trần Quang Diệu, Quận 3</p>
                    </li>
                    <li className="mb-4">
                        <p className="hover:underline">Store 2: TNP Lý Tự Trọng, Quận 1</p>
                    </li>
                    <li className="mb-4">
                        <p  className="hover:underline">Store 3: TNP Lê Lai, Quận 1
                        </p>
                    </li>
                    <li className="mb-4">
                        <p  className="hover:underline">Đại lý phân phối chính hãng: SN 84, Tổ 9, Hoàng Công Chất, P. Mường Thanh, TP Điện Biên
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href=".">NUTRI-TOYS</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                    <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.68 11.73 11.73 0 0 0 6.29 16.5c7.547 0 11.675-6.175 11.675-11.538 0-.176-.006-.352-.015-.528A8.2 8.2 0 0 0 20 1.892Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path fillRule="evenodd" d="M9 0C4.029 0 0 4.027 0 9c0 4.508 3.292 8.217 7.594 8.89v-6.285H5.32V9h2.273V7.218c0-2.244 1.33-3.478 3.366-3.478.976 0 1.996.174 1.996.174v2.185h-1.124c-1.106 0-1.45.688-1.45 1.39V9h2.466l-.395 2.605H10.38v6.285C14.68 17.217 18 13.508 18 9c0-4.973-4.03-9-9-9Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">GitHub account</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.478 0 10c0 4.991 3.657 9.128 8.438 9.879v-7.038H5.896V10H8.44V7.797c0-2.514 1.492-3.89 3.775-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.24 0-1.626.771-1.626 1.562V10h2.773l-.443 2.841h-2.33v7.038C16.343 19.13 20 14.991 20 10 20 4.478 15.522 0 10 0Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Dribbble account</span>
                </a>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer
