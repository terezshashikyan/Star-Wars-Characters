import { useEffect, useRef, useState } from "react";
import heroImage from "../../assets/icons/hero.png";
import "./HeroesItem.css";
import { useDispatch, useSelector } from "react-redux";
import { getHomeWorld } from "../../store/action";
import { AppDispatch } from "../../store/store";

const HeroesItem = ({ heroItem }: { heroItem: any }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const {
    heroes: { homeWorldData },
  } = useSelector((state: any) => state);

  const convertDate = (timestamp: any) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const handleOpenModal = () => {
    dispatch(getHomeWorld(heroItem.homeworld));
    setIsOpenModal(true);
  };
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        modalRef.current &&
        !e.target.closest('div[role="presentation"]') &&
        !modalRef.current.contains(e.target)
      ) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    //eslint-disable-next-line
  }, [modalRef]);
  return (
    <>
      <div className="hero-item" onClick={handleOpenModal}>
        <img src={heroImage} alt="" />
        <span className="hero-name">{heroItem.name}</span>
      </div>
      {isOpenModal && (
        <div className="modal-wrapper">
          <div className="modal-content" ref={modalRef}>
            <div>
              <div>
                <img src={heroImage} alt="" />
              </div>
            </div>
            <div className="hero-info-container">
              <h1>{heroItem.name}</h1>
              <h3>Height: {heroItem.height}m</h3>
              <h3>Mass: {heroItem.mass}kg</h3>
              <h3>Created Date: {convertDate(heroItem.created)}</h3>
              <h3>Number of Films: {heroItem.films.length}</h3>
              <h3>Birth Year: {heroItem.birth_year}</h3>
              <h3>HomeWorld: {homeWorldData?.name}</h3>
              <span>Climate: {homeWorldData?.climate}</span>
              <span>Terrain: {homeWorldData?.terrain}</span>
              <span>Residents: {homeWorldData?.residents?.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroesItem;
