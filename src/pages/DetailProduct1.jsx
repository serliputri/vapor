import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/detailproduct1.css";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

function DetailProduct1() {
  return (
    <>
      <Header />

      <main className="detail-body">
        <section className="product-hero">
          <div className="detail">
            <div className="product-details">
              <div className="product-image">
                <img src="img/product1_img4.png" alt="OXBAR Magic Maze Pro 10K Disposable Vape" className="oxbar-image" />
              </div>
              <div className="product-info">
                <h2 className="detail-oxbar">Oxbar Magic Maze Blue Raz</h2>
                <hr />
                <div className="flex mt-[20px] justify-between mb-8  ">
                  <p className="text-xl font-medium">Rp. 299.000</p>
                  <div className="flex ml-12">
                    <CiSquareMinus size={24} className="mt-1" />
                    <p className="text-[20px] "> 1</p>
                    <CiSquarePlus size={24} className="mt-1" />
                  </div>
                  <button className="border px-8 py-1 rounded-full">Add to Cart</button>
                </div>

                <div className="description">
                  <h3 className="detail-description">DESCRIPTION</h3>
                  <p className="detail-p">
                    Material: Aluminium Alloy Chassis Construction Activated Firing Mechanism Bottom Airflow Catridge: 2 ml Shape: Stick Battery: 690mAh Output: 18 Watt Dazzling: KOKO Shaped light shines Coil CRC 0.8-1.2ohm Fill: Top
                    Filling Port: Type C Quick Charging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-reviews">
          <div className="detail">
            <h2 className="product-review">Product Reviews</h2>
            <div className="reviews">
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="img/black_star.png" />
                <p> Shipping was super fast and the price was unbeatable. Highly recommend!</p>
                <p className="mt-2">Shelli</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="img/black_star.png" />
                <p>The Oxbar Magic Maze Blue Raz is a fantastic vape. I love the blue raz flavor, it's very refreshing. Por-Vapor delivered it quickly and the packaging was secure.</p>
                <p className="mt-2">Sophia T</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="img/black_star.png" />
                <p>Por-Vapor is my go-to for all my vaping needs. The Oxbar Magic Maze Blue Raz is a game-changer. Smooth flavor, great design, and the best price I've found online.</p>
                <p className="mt-2">Will</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="img/black_star.png" />
                <p>Incredible flavor and a great hit! The Oxbar Magic Maze Blue Raz from Por-Vapor arrived earlier than expected, and the price was fantastic.</p>
                <p className="mt-2">Emma r.</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="img/black_star.png" />
                <p>The whole shopping experience was seamless. Will definitely buy again</p>
                <p className="mt-2">DEENY010</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="img/black_star.png" />
                <p>he Oxbar Magic Maze Blue raz is one of the best vapes i've tried. Por-Vapor service was execellent, and the shipping was fast</p>
                <p>JACKY77</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 ">
          <div className="w-full text-center mb-14">
            <h1 className="font-medium text-3xl text-white uppercase leading-[48px] ">More Like This</h1>
          </div>
          <div className="flex flex-wrap justify-between mb-0 md:mb-10 md:gap-1 lg:gap-6 md:mx-4 lg:mx-48">
            <div className="w-36 h-40 px-4 bg-white text-center rounded-xl mb-10 max-w-md mx-auto md:w-52 md:h-64 lg:w-64 lg:h-72">
              <img src="img/detail1.png" alt="" className="w-24 h-24 mb-2 mx-auto md:w-40 md:h-44 md:mt-2 md:mb-0 lg:w-56 lg:h-52" />
              <h2 className="text-[8px] text-dark md:text-[10px] lg:text-sm mt-2">Oxbar Mini apple pear</h2>
              <img src="img/bintang.png" alt="" className="w-20 mx-auto" />
              <p className="font-bold text-xs text-dark">Rp.59.00</p>
            </div>
            <div className="w-36 h-40 px-4 bg-white text-center rounded-xl mb-10 max-w-md mx-auto md:w-52 md:h-64 lg:w-64 lg:h-72">
              <img src="img/detail2.png" alt="" className="w-24 h-24 mb-2 mx-auto md:w-40 md:h-44 md:mt-2 md:mb-0 lg:w-56 lg:h-52" />
              <h2 className="text-[8px] text-dark md:text-[10px] lg:text-sm mt-2">WAKA soMatch Mini Device</h2>
              <img src="img/bintang.png" alt="" className="w-20 mx-auto" />
              <p className="font-bold text-xs text-dark">Rp.150.000</p>
            </div>
            <div className="w-36 h-40 px-4 bg-white text-center rounded-xl mb-10 max-w-md mx-auto md:w-52 md:h-64 lg:w-64 lg:h-72">
              <img src="img/detail3.png" alt="" className="w-24 h-24 mb-2 mx-auto md:w-40 md:h-44 md:mt-2 md:mb-0 lg:w-56 lg:h-52" />
              <h2 className="text-[8px] text-dark md:text-[10px] lg:text-sm mt-2">Dinner Lady Banana Ice</h2>
              <img src="img/bintang.png" alt="" className="w-20 mx-auto" />
              <p className="font-bold text-xs text-dark">Rp.139.000</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DetailProduct1;
