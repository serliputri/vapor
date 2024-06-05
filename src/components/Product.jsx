import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Product1() {
  return (
    <>
      <section className="mt-14 pb-10">
        <div className="container ">
          <div className="flex flex-wrap justify-between mb-0 pt-32 md:mb-10 md:gap-1 lg:gap-6 md:mx-4 lg:mx-48">
            <div className="card-items">
              <img src="img/product1_img1.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Thelema Nexus Lost Vape</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.310.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img2.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Raisin Noir Le Pod liquide</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.159.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img3.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Pod X Signature green satin</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.159.000</p>
            </div>
            <div className="card-items">
              <Link to="/detail1">
                <img src="img/product1_img4.png" alt="" className="card-img" />
              </Link>
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxbar magic maze blue raz</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.299.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img5.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Vichille Amalgam</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.110.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img6.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Splash Some Colors (blue)</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.323.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img7.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Pod X WILD Purple prefilled</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.298.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img8.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">600 puffs / Watermelon Mojito</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.159.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img9.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">FOOM Refillable Cartridge X</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.78.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img10.png" alt="" className="card-img" />
              <h2 className="text-[7px] md:text-[10px] lg:text-sm mt-2">NITROUS ZAION KIT - ISABELLA</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.1.260.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img11.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">MANTO AIO PLUS II KIT</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.351.000</p>
            </div>
            <div className="card-items">
              <img src="img/product1_img12.png" alt="" className="card-img" />
              <h2 className="text-[8px] md:text-[10px] lg:text-sm mt-2">Oxva Neo Kit</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.240.000</p>
            </div>
          </div>
          <div className="w-full text-center mb-10  ">
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="#">
                <FaChevronLeft />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-dark bg-white border rounded-full lg:text-xl">
              <Link to="#">
                <RiNumber1 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product2">
                <RiNumber2 />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product3">
                <RiNumber3 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product4">
                <RiNumber4 />
              </Link>
            </button>
            <button className="font-medium mx-2 text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product5">
                <RiNumber5 />
              </Link>
            </button>
            <button className="font-medium text-sm py-3 px-3 text-white border rounded-full lg:text-xl">
              <Link to="/product2">
                <FaChevronRight />
              </Link>
            </button>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default Product1;
