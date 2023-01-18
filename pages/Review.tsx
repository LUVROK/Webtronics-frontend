import Ellipse from "../components/ellipse";
import { rew1, rew2, rew3 } from "../media/images";
import { useState, useEffect } from "react";

const Review = () => {
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    // console.log(active);
    // const elems = document.querySelectorAll('.Review__content-photo');
    // if (elems) {
    //   (elems[active] as HTMLElement).style.width = '45%';
    // }
  }, [active]);

  return (
    <div className="Review">
      <Ellipse />
      <Ellipse />
      <div className="Review__block">
        <h2>Review</h2>
        <div className="Review__content">
          <div className="Review__content-left">
            <h4>Best courses ever</h4>
            <p className="p-1">Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.</p>
          </div>
          <div className="Review__content-right">
            <div className="Review__content-stat">
              <div className="Review__content-stat-active">
                {active}/<span>3</span>
              </div>
              <div className="Review__content-stat-slider">
                <div className="slider-left" onClick={() => setActive((prev) => (prev === 1 ? 3 : active - 1))}>
                  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19.5L1.5 10L11 0.5" stroke="white" />
                  </svg>
                </div>
                <div className="slider-right" onClick={() => setActive((prev) => (prev === 3 ? 1 : active + 1))}>
                  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19.5L1.5 10L11 0.5" stroke="white" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="Review__content-photos">
              <img src={rew1.src} alt="" className="Review__content-photo Review__content-photos_active" />
              <img src={rew2.src} alt="" className="Review__content-photo Review__content-photos_nonactive" />
              <img src={rew3.src} alt="" className="Review__content-photo Review__content-photos_nonactive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
